
(function ($) {
  "use strict";

  let forms = document.querySelectorAll('.contact-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

        php_email_form_submit(thisForm, formData);

    });
  });

  function php_email_form_submit(thisForm, formData) {
    formData.append('service_id', 'service_nq3dbqo');
    formData.append('template_id', 'template_c9wfssb');
    formData.append('user_id', 'user_b4CC2K6f7TGAhEq1BxTTn');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
    }).done(function() {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.add('d-block');

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

    }).fail(function(error) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      var msg = 'Form submission failed. <br>';
      thisForm.querySelector('.error-message').innerHTML = msg;
      console.log(error);
    });

  }


})(jQuery);
