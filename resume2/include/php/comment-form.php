<?php

function exists_value($data) {
		if (isset($data) && !empty($data)) {
				return true;
		} else {
				return false;
		}
}

if (count($_POST) > 0) {
	  $mail = ['from', 'message', 'firstname', 'lastname'];
	  foreach ($_POST as $key => $value) {
	  	  if (exists_value($key) && $key == 'email') {
	  	  	  $mail['from'] = $value;
	  	  }

	  	  if (exists_value($key) && $key == 'firstname') {
	  	  		$mail['firstname'] = $value;
	  	  }

	  	  if (exists_value($key) && $key == 'lastname') {
	  	 	  	$mail['lastname'] = $value;
	  	  } 

	  	  if (exists_value($key) && $key == 'message') {
	  			  $mail['message'] = $value;
	    	}
	  }

	  $message = "First name: {$mail['firstname']} \r\n" .
	  	"Last name: {$mail['lastname']} \r\n" .
	  	"Mail message: {$mail['message']} \r\n";

	  $to      = 'prothemes.net@gmail.com';
		$subject = 'Message from Ark theme';
		$headers = "From: {$mail['from']} \r\n" .
		    "Reply-To: {$mail['from']} \r\n" .
		    'X-Mailer: PHP/' . phpversion();

		$result = mail($to, $subject, $message, $headers);

		if ($result) {
			  echo json_encode(['status' => 'success']);
		} else {
			  echo json_encode(['status' => 'error']);
		}
}