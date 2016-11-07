var contactItem = (name, phone) => {
  return `<li>${name} ${phone}</li>`;
};

var submitContacts = () => {
	$('form').submit((event) => {
		event.preventDefault();
		var name = $('#contact-name');
		var	phone = $('#contact-phone');
		var error = $('#error');
		var html = contactItem(name.val(), phone.val());

		if(!$.isNumeric(phone.val()) || name.val() === ''){
			error.text('Error');
		}else {
			$('#contact-list').append(html);
			name.val('');
			phone.val('');
			error.text('');
		}
	});
};

submitContacts();
