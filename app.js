const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('animate');
      } else{
        entry.target.classList.remove('animate');
      }
    });
  });

const imgAnimate = document.querySelector('.img-info');
observer.observe(imgAnimate)
