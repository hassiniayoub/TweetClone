$(window).on('load', function() {
	$('.loader-con').css({'display': 'none'});
});

function accControle(eve, eve1) {
	if(eve1 === 'signUp') {
		if(eve === 'Open') {
			$('#account-signup').css({'display': 'block'});
		}

		if(eve === 'Close') {
			$('#account-signup').css({'display': 'none'});
		}
	}
	if(eve1 === 'signIn') {
		if(eve === 'Open') {
			$('#account-signin').css({'display': 'block'});
		}

		if(eve === 'Close') {
			$('#account-signin').css({'display': 'none'});
		}
	}
}

function auto_grow(element) {
    element.style.height = "20px";
    element.style.height = (element.scrollHeight)+"px";
}