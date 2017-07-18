<?php
include ('./vendor/autoload.php');

use \DrewM\MailChimp\MailChimp;

function valid_email($email) {
    return !!filter_var($email, FILTER_VALIDATE_EMAIL);
}

$data = (count($_POST) > 0) ? ($_POST) : (null);

if ( ! is_null($data)) {
	$sendMailData = [];
	foreach ($_POST as $key => $value) {
		/* Check email field and validate */
		if ($key == 'email' && valid_email($value)) {
			$sendMailData['email_address'] = $value;
		}		
		/* First name parameter */
		if ($key == 'first_name') {
			$sendMailData['merge_fields'] = ['FNAME' => $value];
		}
		
		/* You can add you custom fields read: http://developer.mailchimp.com/documentation/mailchimp/reference/lists/members/#edit-put_lists_list_id_members_subscriber_hash */
		
		/* Subscriber IP */
		$sendMailData['ip_signup'] = $_SERVER['REMOTE_ADDR'];

		/* Subscriber status */
		$sendMailData['status'] = 'subscribed';
	}

	/* MailChimp Api key */
	$MailChimp = new MailChimp('');

	/* MailChimp List id */
	$list_id = '';
	
	$subscriber_hash = $MailChimp->subscriberHash($sendMailData['email_address']);

	/* Check subscriber existing */
	$subscriberExistsResult = $MailChimp->get("/lists/$list_id/members/$subscriber_hash");

	/* If does not exists */
	if ((int)$subscriberExistsResult['status'] == 404) {
		/* Store your new subscriber */
		$result = $MailChimp->post("lists/$list_id/members", $sendMailData);

		// Reciepent
		$to  = $sendMailData['email_address'];

		// Subject
		$subject = 'New Subscriber';

		// Message html
		$message = file_get_contents('mail-template.html');

		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

		// Additional headers
		$headers .= "To: <{$sendMailData['email_address']}>\r\n";
		$headers .= 'From: ProThemes Support <prothemes.net@gmail.com>' . "\r\n";

		// Mail it
		mail($to, $subject, $message, $headers);

		echo json_encode(['status' => 'success']);
	} else {
		echo json_encode(['status' => 'exists']);
	}
} else {
	echo json_encode(array('status' => 'error'));
}

?>