// var btn = $('#button');

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// $('#button').click(function () {
//   $('html, body').animate({ scrollTop: 0 }, 100);
//   return false;
// });



// Обираємо всі кнопки з класом .read-more-btn
const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const aboutText = button.previousElementSibling; 
    aboutText.classList.toggle('hidden');
  }); 
});

// Якщо одна кнопка з класом .read-more-btn
// document.querySelector('.read-more-btn').addEventListener('click', function() {
//   const aboutText = document.querySelector('.read-text');
//   aboutText.classList.toggle('hidden');
// });

