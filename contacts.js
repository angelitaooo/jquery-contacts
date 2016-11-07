var contactItem = (name, phone) => {
  return `<li>${name} ${phone}</li>`;
};

var submitContacts = () => {
	$('form').submit((event) => {
		event.preventDefault();
		var name = $('#contact-name');
		var	phone = $('#contact-phone');
		var html = contactItem(name.val(), phone.val());

		$('#contact-list').append(html);
		name.val('');
		phone.val('');

	});
};

submitContacts();
