  const circles = document.querySelectorAll('.circle');

  circles.forEach(dot => {
    dot.addEventListener('click', () => {
      circles.forEach(item => item.classList.remove('active'));
      dot.classList.add('active');
    });
  });