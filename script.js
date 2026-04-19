  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      circles.forEach(item => item.classList.remove('active'));
      circle.classList.add('active');
    });
  });

  const languageBtns = document.querySelectorAll('.language_btn');

languageBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // убираем active только у языков
    languageBtns.forEach(item => item.classList.remove('active'));

    // добавляем текущему
    btn.classList.add('active');
  });
});