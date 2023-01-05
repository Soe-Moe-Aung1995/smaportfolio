var i = 0;
var txt = `"Hi, My name is Soe Moe Aung"`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".intro-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let balls = document.getElementsByClassName('ball');
document.onmousemove = function(){

  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";

  for(let i=0; i<2; i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = 'translate(-'+x+'-'+y+')';
  }
}

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggleBtn');
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
});

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-one');
    } else{
      entry.target.classList.remove('show-one');
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show-two');
    } else{
      entry.target.classList.remove('show-two');
    }
  });
});

const imgAnimate = document.querySelectorAll('.hidden');
imgAnimate.forEach((el) => observer.observe(el));

imgAnimate.forEach((el, index) => {
  el.style.transitionDelay = `${index / 5}s`;
});

const imgAnimate1 = document.querySelectorAll('.hidden-one');
imgAnimate1.forEach((el) => observer1.observe(el));

imgAnimate1.forEach((el, index) => {
  el.style.transitionDelay = `${index / 5}s`;
})

const imgAnimate2 = document.querySelectorAll('.hidden-two');
imgAnimate2.forEach((el) => observer2.observe(el));

imgAnimate.forEach((el, index) => {
  el.style.transiionDealy = `${index / 5}s`;
})