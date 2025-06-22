document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;  // form not present, do nothing
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = 'Contact Form Submission from ' + name;
    const body = 'Name: ' + name + '\n' +
                 'Email: ' + email + '\n\n' +
                 'Message:\n' + message;

    const mailtoLink = 'mailto:hello@squirly.com.au?subject=' +
                       encodeURIComponent(subject) + '&body=' +
                       encodeURIComponent(body);

    window.location.href = mailtoLink;
  });
});
