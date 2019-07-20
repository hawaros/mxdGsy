$(document).ready(function(){
	$('form').on('submit', function(event){

		$.ajax({
			data : {
				name : $('#name').val(),
				surname : $('#surname').val(),
				email : $('#email').val(),
				message : $('#message').val()
			},
			type : 'POST',
			url : '/sendmail'
		})
		.done(function(data){
			if(data.error){
				$('.meddelande').html(data.error).addClass('alert-danger').show();
			}
			else{
				$('.meddelande').html(data.message).addClass('alert-success').show();
			}
		});

		// Function to reload 5 seconds after the message is flashed
		// setTimeout(function() {
		// 	window.location.reload();
		// }, 5000);



		event.preventDefault();
		$('#contact-form')[0].reset();
	});
});