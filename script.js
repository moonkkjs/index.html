// --- LÓGICA EXECUTADA QUANDO O DOCUMENTO HTML ESTÁ PRONTO ---
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const rootElement = document.documentElement;

  // --- CONTROLES DE ACESSIBILIDADE DE FONTE ---
  let tamanhoFonteBase = parseFloat(window.getComputedStyle(rootElement).fontSize);
  let tamanhoFonteAtual = tamanhoFonteBase;

  window.aumentarFonte = function() {
    tamanhoFonteAtual += 2;
    rootElement.style.fontSize = tamanhoFonteAtual + "px";
  }
  window.diminuirFonte = function() {
    if (tamanhoFonteAtual > 12) {
      tamanhoFonteAtual -= 2;
      rootElement.style.fontSize = tamanhoFonteAtual + "px";
    }
  }
  window.resetarFonte = function() {
    rootElement.style.fontSize = "";
    tamanhoFonteAtual = parseFloat(window.getComputedStyle(rootElement).fontSize);
  }

  // --- LÓGICA DO PAINEL DE ACESSIBILIDADE ---
  const panel = document.getElementById('accessibility-panel');
  const openPanelBtn = document.getElementById('accessibility-panel-toggle');
  const closePanelBtn = document.getElementById('accessibility-panel-close');

  openPanelBtn.addEventListener('click', () => {
    panel.hidden = false;
    setTimeout(() => { // Garante que a transição ocorra
        panel.classList.add('open');
    }, 10);
    openPanelBtn.setAttribute('aria-expanded', 'true');
  });
  
  const fecharPainel = () => {
    panel.classList.remove('open');
    openPanelBtn.setAttribute('aria-expanded', 'false');
    panel.addEventListener('transitionend', () => {
        if (!panel.classList.contains('open')) {
            panel.hidden = true;
        }
    }, { once: true });
  };

  closePanelBtn.addEventListener('click', fecharPainel);
  
  // Fecha o painel se o usuário pressionar a tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      fecharPainel();
    }
  });


  // --- LÓGICA GERAL DE PREFERÊNCIAS (TEMAS, FONTES, ETC.) ---
  const themeButtons = document.querySelectorAll('.panel-section button[data-theme]');
  const dyslexiaFontBtn = document.getElementById('dyslexia-font-toggle');
  
  const applyPreferences = () => {
    const activeTheme = localStorage.getItem('theme') || 'default';
    const dyslexiaFontEnabled = localStorage.getItem('dyslexiaFont') === 'true';

    // Aplica o tema
    body.classList.remove('dark-mode', 'high-contrast', 'monochrome');
    if (activeTheme !== 'default') {
      body.classList.add(activeTheme);
    }

    // Atualiza botões do tema
    themeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === activeTheme);
    });
    
    // Aplica a fonte
    body.classList.toggle('dyslexia-font', dyslexiaFontEnabled);
    dyslexiaFontBtn.classList.toggle('active', dyslexiaFontEnabled);
    dyslexiaFontBtn.setAttribute('aria-pressed', dyslexiaFontEnabled);
  };

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      localStorage.setItem('theme', theme);
      applyPreferences();
    });
  });

  dyslexiaFontBtn.addEventListener('click', () => {
    const isEnabled = body.classList.contains('dyslexia-font');
    localStorage.setItem('dyslexiaFont', !isEnabled);
    applyPreferences();
  });
  
  // Aplica as preferências salvas ao carregar a página
  applyPreferences();
  
  // --- LÓGICA DO LEITOR DE TEXTO (TEXT-TO-SPEECH) ---
... (211 linhas)
Recolher
script.txt
11 KB
/* Importando fontes do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Poppins:wght@400;500;700&family=Lexend:wght@400;500;700&display=swap');

/* Variáveis de Cores e Estilos */
:root {
  --cor-principal: #00a2ff;
Expandir
style.txt
20 KB
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fã Site Roblox - Universo de Aventuras</title>
Expandir
index.txt
14 KB
xuxu
segue
só substituir naquele esqueminha que fizemos aquele dia
se precisar de ajuda só chamar
as novas opções de acessibilidade estão nesse botão do canto
Imagem
aí pode sair clicando e testando
Xinpo
[ⒻⒷⒾ]
 — 15:18
dar um pulinho na live rsrs
moon
[ᴍᴏᴏɴ]
 — 15:32
Ta bommm, obgddd
Dps eu vejo
﻿
Xinpo
xinpo
[ⒻⒷⒾ]
 
// --- LÓGICA EXECUTADA QUANDO O DOCUMENTO HTML ESTÁ PRONTO ---
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const rootElement = document.documentElement;

  // --- CONTROLES DE ACESSIBILIDADE DE FONTE ---
  let tamanhoFonteBase = parseFloat(window.getComputedStyle(rootElement).fontSize);
  let tamanhoFonteAtual = tamanhoFonteBase;

  window.aumentarFonte = function() {
    tamanhoFonteAtual += 2;
    rootElement.style.fontSize = tamanhoFonteAtual + "px";
  }
  window.diminuirFonte = function() {
    if (tamanhoFonteAtual > 12) {
      tamanhoFonteAtual -= 2;
      rootElement.style.fontSize = tamanhoFonteAtual + "px";
    }
  }
  window.resetarFonte = function() {
    rootElement.style.fontSize = "";
    tamanhoFonteAtual = parseFloat(window.getComputedStyle(rootElement).fontSize);
  }

  // --- LÓGICA DO PAINEL DE ACESSIBILIDADE ---
  const panel = document.getElementById('accessibility-panel');
  const openPanelBtn = document.getElementById('accessibility-panel-toggle');
  const closePanelBtn = document.getElementById('accessibility-panel-close');

  openPanelBtn.addEventListener('click', () => {
    panel.hidden = false;
    setTimeout(() => { // Garante que a transição ocorra
        panel.classList.add('open');
    }, 10);
    openPanelBtn.setAttribute('aria-expanded', 'true');
  });
  
  const fecharPainel = () => {
    panel.classList.remove('open');
    openPanelBtn.setAttribute('aria-expanded', 'false');
    panel.addEventListener('transitionend', () => {
        if (!panel.classList.contains('open')) {
            panel.hidden = true;
        }
    }, { once: true });
  };

  closePanelBtn.addEventListener('click', fecharPainel);
  
  // Fecha o painel se o usuário pressionar a tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      fecharPainel();
    }
  });


  // --- LÓGICA GERAL DE PREFERÊNCIAS (TEMAS, FONTES, ETC.) ---
  const themeButtons = document.querySelectorAll('.panel-section button[data-theme]');
  const dyslexiaFontBtn = document.getElementById('dyslexia-font-toggle');
  
  const applyPreferences = () => {
    const activeTheme = localStorage.getItem('theme') || 'default';
    const dyslexiaFontEnabled = localStorage.getItem('dyslexiaFont') === 'true';

    // Aplica o tema
    body.classList.remove('dark-mode', 'high-contrast', 'monochrome');
    if (activeTheme !== 'default') {
      body.classList.add(activeTheme);
    }

    // Atualiza botões do tema
    themeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === activeTheme);
    });
    
    // Aplica a fonte
    body.classList.toggle('dyslexia-font', dyslexiaFontEnabled);
    dyslexiaFontBtn.classList.toggle('active', dyslexiaFontEnabled);
    dyslexiaFontBtn.setAttribute('aria-pressed', dyslexiaFontEnabled);
  };

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      localStorage.setItem('theme', theme);
      applyPreferences();
    });
  });

  dyslexiaFontBtn.addEventListener('click', () => {
    const isEnabled = body.classList.contains('dyslexia-font');
    localStorage.setItem('dyslexiaFont', !isEnabled);
    applyPreferences();
  });
  
  // Aplica as preferências salvas ao carregar a página
  applyPreferences();
  
  // --- LÓGICA DO LEITOR DE TEXTO (TEXT-TO-SPEECH) ---
  const textReaderToggle = document.getElementById('text-reader-toggle');
  const readerControls = document.getElementById('text-reader-controls');
  const playBtn = document.getElementById('reader-play');
  const pauseBtn = document.getElementById('reader-pause');
  const stopBtn = document.getElementById('reader-stop');
  const readableElements = document.querySelectorAll('.readable-text');
  
  let currentUtterance = null;
  let lastReadElement = null;
  let availableVoices = [];

  // Correção 4.1: Carrega e seleciona uma voz de melhor qualidade
  function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
    const ptBrVoice = availableVoices.find(voice => voice.lang === 'pt-BR' && voice.name.includes('Google'));
    return ptBrVoice || availableVoices.find(voice => voice.lang === 'pt-BR');
  }

  if ('onvoiceschanged' in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  textReaderToggle.addEventListener('click', () => {
    const isActive = body.classList.toggle('text-reader-active');
    textReaderToggle.classList.toggle('active');
    textReaderToggle.setAttribute('aria-pressed', isActive);
    readerControls.hidden = !isActive;
    if (!isActive) {
      window.speechSynthesis.cancel(); // Para a leitura se o modo for desativado
    }
  });

  function readText(element) {
    if (!element || !element.textContent) return;
    
    // Para qualquer leitura anterior antes de começar uma nova
    window.speechSynthesis.cancel();
    
    // Remove destaque anterior
    if (lastReadElement) lastReadElement.classList.remove('reading-highlight');

    currentUtterance = new SpeechSynthesisUtterance(element.textContent);
    currentUtterance.lang = 'pt-BR';
    
    const bestVoice = loadVoices();
    if (bestVoice) {
      currentUtterance.voice = bestVoice;
    }
    
    currentUtterance.onstart = () => {
      element.classList.add('reading-highlight');
      lastReadElement = element;
    };
    
    currentUtterance.onend = () => {
      if (element) element.classList.remove('reading-highlight');
      lastReadElement = null;
      currentUtterance = null;
    };
    
    currentUtterance.onerror = (event) => {
        console.error("Erro na síntese de voz:", event.error);
    };

    window.speechSynthesis.speak(currentUtterance);
  }

  readableElements.forEach(el => {
    el.addEventListener('click', (e) => {
      if (body.classList.contains('text-reader-active')) {
        e.stopPropagation(); // Previne que o evento suba para elementos pais
        readText(el);
      }
    });
  });
  
  // Correção 4.2: Lógica de controles refeita para maior confiabilidade
  playBtn.addEventListener('click', () => {
    if (window.speechSynthesis.paused && currentUtterance) {
      window.speechSynthesis.resume();
    } else if (!window.speechSynthesis.speaking && lastReadElement) {
      // Se não estiver falando nada e houver um último elemento lido, lê de novo
      readText(lastReadElement);
    }
  });
  
  pauseBtn.addEventListener('click', () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
    }
  });

  stopBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
  });


  // --- ANIMAÇÕES DE SCROLL ---
  const elementosAnimados = document.querySelectorAll('.animate-on-scroll');
  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15
    });
    elementosAnimados.forEach(el => observer.observe(el));
  }
});


// --- LÓGICA EXECUTADA APÓS TODOS OS RECURSOS (IMAGENS, ETC.) SEREM CARREGADOS ---
window.addEventListener('load', () => {
  // Esconde o preloader, se existir
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
  }

  // Inicia o efeito parallax
  const banner = document.querySelector('.banner');
  if (banner) {
    window.addEventListener('scroll', () => {
      const scrollOffset = window.pageYOffset;
      banner.style.backgroundPositionY = scrollOffset * 0.5 + 'px';
    });
  }

  // Inicia as partículas interativas
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particlesArray;
  
  const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  };
  
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
    for (let i = 0; i < numberOfParticles / 1.5; i++) {
      let size = (Math.random() * 2) + 1;
      let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
      let directionX = (Math.random() * .4) - .2;
      let directionY = (Math.random() * .4) - .2;
      particlesArray.push(new Particle(x, y, directionX, directionY, size, 'rgba(0, 162, 255, 0.3)'));
    }
  }

  let animationFrameId;
  function animateParticles() {
    animationFrameId = requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particlesArray.forEach(p => p.update());
  }

  function restartAnimation() {
      cancelAnimationFrame(animationFrameId);
      setupCanvas();
      initParticles();
      animateParticles();
  }

  restartAnimation();

  window.addEventListener('resize', restartAnimation);
});
