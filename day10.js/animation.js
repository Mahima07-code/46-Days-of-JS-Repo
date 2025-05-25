const ball = document.getElementById('ball');
const ballSize = 50;
let positionX = 0;
let positionY = 0;
let velocityX = 25;
let velocityY = 25;
let animationType = '';
let animationId = null;
let intervalId = null;

function moveBall() {
  positionX += velocityX;
  positionY += velocityY;

  if (positionX + ballSize >= window.innerWidth || positionX <= 0) {
    velocityX = -velocityX;
  }
  if (positionY + ballSize >= window.innerHeight || positionY <= 0) {
    velocityY = -velocityY;
  }

  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';
}

function animateWithTimeout() {
  moveBall();
  animationId = setTimeout(animateWithTimeout, 16); 
}

function animateWithInterval() {
  intervalId = setInterval(moveBall, 16); 
}

function animateWithRaf() {
  moveBall();
  animationId = requestAnimationFrame(animateWithRaf);
}

function startAnimation(type) {
  stopAnimation();
  animationType = type;
  switch (type) {
    case 'timeout':
      animateWithTimeout();
      break;
    case 'interval':
      animateWithInterval();
      break;
    case 'raf':
      animateWithRaf();
      break;
  }
}

function stopAnimation() {
  if (animationType === 'timeout') {
    clearTimeout(animationId);
  } else if (animationType === 'interval') {
    clearInterval(intervalId);
  } else if (animationType === 'raf') {
    cancelAnimationFrame(animationId);
  }
  animationType = '';
}
