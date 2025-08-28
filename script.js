// --- LÓGICA EXECUTADA QUANDO O DOCUMENTO HTML ESTÁ PRONTO ---
document.addEventListener("DOMContentLoaded", () => {
  
  // --- CONTROLES DE ACESSIBILIDADE DE FONTE ---
  const rootElement = document.documentElement;
  let tamanhoFonte = parseFloat(window.getComputedStyle(rootElement).fontSize);

  // Torna as funções de fonte acessíveis globalmente para o onclick no HTML
  window.aumentarFonte = function() {
    tamanhoFonte += 2;
    rootElement.style.fontSize = tamanhoFonte + "px";
  }

  window.diminuirFonte = function() {
    if (tamanhoFonte > 12) {
      tamanhoFonte -= 2;
      rootElement.style.fontSize = tamanhoFonte + "px";
    }
  }

  window.resetarFonte = function() {
    rootElement.style.fontSize = "";
    tamanhoFonte = parseFloat(window.getComputedStyle(rootElement).fontSize);
  }

  // --- ANIMAÇÕES DE SCROLL ---
  const elementosAnimados = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15 
  });
  elementosAnimados.forEach(el => {
    observer.observe(el);
  });

  // --- LÓGICA DO EASTER EGG ---
  const easterEgg = document.getElementById('easter-egg');
  easterEgg.addEventListener('click', () => {
    easterEgg.classList.add('clicked');
    setTimeout(() => {
      easterEgg.classList.remove('clicked');
    }, 500);
  });

});


// --- LÓGICA EXECUTADA APÓS TODOS OS RECURSOS (IMAGENS, ETC.) SEREM CARREGADOS ---
window.addEventListener('load', () => {
  
  // Esconde o preloader
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hidden');

  // Inicia o efeito parallax
  const banner = document.querySelector('.banner');
  window.addEventListener('scroll', () => {
    const scrollOffset = window.pageYOffset;
    banner.style.backgroundPositionY = scrollOffset * 0.5 + 'px';
  });

  // Inicia as partículas interativas
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return; // Garante que o script não quebre se o canvas não existir
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray;
  const mouse = { x: null, y: null, radius: 100 };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x; this.y = y; this.directionX = directionX;
      this.directionY = directionY; this.size = size; this.color = color;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = 'rgba(0, 162, 255, 0.3)';
      ctx.fill();
    }
    update() {
      if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
      if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
      
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
        if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
        if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
      }
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }

  function initParticles() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles / 2; i++) {
      let size = (Math.random() * 2) + 1;
      let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
      let directionX = (Math.random() * .4) - .2;
      let directionY = (Math.random() * .4) - .2;
      particlesArray.push(new Particle(x, y, directionX, directionY, size, 'rgba(0, 162, 255, 0.3)'));
    }
  }

  function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
  }

  initParticles();
  animateParticles();

  window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    initParticles();
  });
});
