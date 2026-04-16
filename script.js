  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      circles.forEach(item => item.classList.remove('active'));
      circle.classList.add('active');
    });
  });