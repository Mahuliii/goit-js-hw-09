document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  form.addEventListener('input', function () {
    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();
    const formData = {
      email: emailValue,
      message: messageValue,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailValue = form.elements.email.value;
    const messageValue = form.elements.message.value;
    if (emailValue && messageValue) {
      const formData = {
        email: emailValue,
        message: messageValue,
      };
      localStorage.removeItem('feedback-form-state');
      form.reset();
      console.log(formData);
    } else {
      alert('Будь ласка, заповніть обидва поля перед відправленням форми.');
    }
  });
});
