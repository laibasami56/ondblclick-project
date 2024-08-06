document.querySelector('.post').addEventListener('dblclick', function (e) {
    const post = this.getBoundingClientRect();
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = `${e.clientY - post.top - 50}px`;
    heart.style.left = `${e.clientX - post.left - 50}px`;
    this.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 600);
  });



