document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Заявка отправлена! Мы свяжемся с вами.');
  this.reset();
});
