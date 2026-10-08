const BOTS = [
  {
    id: 'maestro-nevoa',
    name: 'Maestro da Névoa',
    category: 'music',
    categoryLabel: 'MÚSICA / AUDIO',
    icon: 'fa-music',
    color: '#6de1e9',
    description: 'Música, playlists e ambientação para transformar qualquer call em uma experiência cinematográfica.',
    features: ['YouTube', 'Playlists', 'Queue', 'Volume'],
    githubUrl: 'https://github.com/SEU-USUARIO/maestro-da-nevoa',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&permissions=36700160&scope=bot%20applications.commands'
  },
  {
    id: 'santuario-dbd',
    name: 'Santuário DBD',
    category: 'dbd',
    categoryLabel: 'DEAD BY DAYLIGHT',
    icon: 'fa-spider',
    color: '#ff3650',
    description: 'Acompanhe o Santuário, rotações, oferendas e informações da Entidade direto no seu servidor.',
    features: ['Santuário', 'Rotações', 'Alertas', 'Discord'],
    githubUrl: 'https://github.com/SEU-USUARIO/santuario-dbd',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&permissions=2147485696&scope=bot%20applications.commands'
  },
  {
    id: 'grimorio-codigos',
    name: 'Grimório de Códigos',
    category: 'dbd',
    categoryLabel: 'CÓDIGOS / RECOMPENSAS',
    icon: 'fa-scroll',
    color: '#ffc56d',
    description: 'Nunca mais perca um código de DBD. O Grimório avisa a comunidade assim que uma nova recompensa surge.',
    features: ['Códigos', 'Notificações', 'Filtros', 'Histórico'],
    githubUrl: 'https://github.com/SEU-USUARIO/grimorio-de-codigos',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&permissions=2147485696&scope=bot%20applications.commands'
  },
  {
    id: 'vigia-comunidade',
    name: 'Vigia da Comunidade',
    category: 'utility',
    categoryLabel: 'UTILIDADE / MODERAÇÃO',
    icon: 'fa-eye',
    color: '#ad72ff',
    description: 'Moderação, cargos, logs e ferramentas de comunidade para manter o seu servidor vivo e organizado.',
    features: ['Moderação', 'Logs', 'Cargos', 'Tickets'],
    githubUrl: 'https://github.com/SEU-USUARIO/vigia-da-comunidade',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&permissions=8&scope=bot%20applications.commands'
  }
];

const botGrid = document.getElementById('bot-grid');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('bot-search');
const filterTabs = [...document.querySelectorAll('.filter-tab')];
let activeFilter = 'all';

function botCard(bot, index) {
  const featureMarkup = bot.features.map(feature => `<span class="bot-feature">${feature}</span>`).join('');
  return `
    <article class="bot-card" data-id="${bot.id}" data-category="${bot.category}" style="--card-color: ${bot.color}; animation-delay: ${index * 70}ms;">
      <div class="card-top">
        <div class="bot-icon"><i class="fas ${bot.icon}"></i></div>
        <span class="bot-status"><i class="fas fa-circle"></i> ONLINE / 24H</span>
      </div>
      <span class="bot-category">${bot.categoryLabel}</span>
      <h3>${bot.name}</h3>
      <p>${bot.description}</p>
      <div class="bot-features">${featureMarkup}</div>
      <div class="bot-actions">
        <a class="bot-action primary" href="${bot.inviteUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord"></i> ADICIONAR AO SERVIDOR</a>
        <a class="bot-action" href="${bot.githubUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GITHUB</a>
        <button class="bot-action bot-details" type="button" data-details="${bot.id}"><i class="fas fa-arrow-up-right-from-square"></i></button>
      </div>
    </article>
  `;
}

function renderBots() {
  const term = (searchInput?.value || '').trim().toLowerCase();
  const visible = BOTS.filter(bot => {
    const matchesFilter = activeFilter === 'all' || bot.category === activeFilter;
    const matchesSearch = !term || `${bot.name} ${bot.categoryLabel} ${bot.description} ${bot.features.join(' ')}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  botGrid.innerHTML = visible.map(botCard).join('');
  emptyState.hidden = visible.length !== 0;
  document.getElementById('metric-bots').textContent = String(BOTS.length).padStart(2, '0');
  document.getElementById('hero-bot-count').textContent = `${String(BOTS.length).padStart(2, '0')} ENTIDADES DISPONÍVEIS`;
  bindCardInteractions();
}

function bindCardInteractions() {
  document.querySelectorAll('.bot-card').forEach(card => {
    card.addEventListener('mousemove', event => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  document.querySelectorAll('[data-details]').forEach(button => {
    button.addEventListener('click', () => openModal(BOTS.find(bot => bot.id === button.dataset.details)));
  });
}

filterTabs.forEach(tab => tab.addEventListener('click', () => {
  filterTabs.forEach(item => item.classList.remove('active'));
  tab.classList.add('active');
  activeFilter = tab.dataset.filter;
  renderBots();
}));
searchInput?.addEventListener('input', renderBots);

const modal = document.getElementById('bot-modal');
function openModal(bot) {
  if (!bot) return;
  modal.style.setProperty('--modal-color', bot.color);
  document.getElementById('modal-icon').innerHTML = `<i class="fas ${bot.icon}"></i>`;
  document.getElementById('modal-category').textContent = bot.categoryLabel;
  document.getElementById('modal-title').textContent = bot.name;
  document.getElementById('modal-description').textContent = bot.description;
  document.getElementById('modal-features').innerHTML = bot.features.map(item => `<span class="bot-feature">${item}</span>`).join('');
  document.getElementById('modal-links').innerHTML = `
    <a class="bot-action primary" href="${bot.inviteUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord"></i> ADICIONAR</a>
    <a class="bot-action" href="${bot.githubUrl}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> VER CÓDIGO</a>
  `;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });

function createParticles() {
  const field = document.getElementById('particle-field');
  const count = window.innerWidth < 700 ? 24 : 55;
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.setProperty('--x', `${(Math.random() - .5) * 80}px`);
    particle.style.setProperty('--y', `${(Math.random() - .5) * 80}px`);
    particle.style.setProperty('--duration', `${3 + Math.random() * 5}s`);
    particle.style.animationDelay = `${Math.random() * -6}s`;
    field.appendChild(particle);
  }
}

renderBots();
createParticles();

// A navbar começa integrada ao fundo e só recebe o vidro após a rolagem.
const navbar = document.getElementById('navbar');
function updateNavbarOnScroll() {
  navbar?.classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
updateNavbarOnScroll();
