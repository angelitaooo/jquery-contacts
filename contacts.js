var contactItem = (name, phone) => {
  return `<li>${name} ${phone}</li>`;
};

var submitContacts = () => {
	$('form').submit((event) => {
		event.preventDefault();
		var name = $('#contact-name').val();
		var	phone = $('#contact-phone').val();
		var html = contactItem(name, phone);

		$('#contact-list').append(html);

	});
};

submitContacts();
