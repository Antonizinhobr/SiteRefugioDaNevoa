const BOTS = [
  {
    id: 'xp-bot',
    name: 'Bot de XP',
    category: 'xp',
    categoryLabel: 'XP / RANKING',
    icon: 'fas fa-ranking-star',
    color: '#6de1e9',
    description: 'Um bot completo de nivelamento e ranqueamento para o Discord, com uma temática imersiva inspirada no universo de sobrevivência e terror (Névoa/Entidade). Ele recompensa usuários ativos no chat de texto e nas chamadas de voz com XP, Níveis e Cargos Automáticos',
    features: ['Xp', 'Level', 'Ranking', 'Commands'],
    githubUrl: 'https://github.com/Antonizinhobr/XP-BOT-DISCORD',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1495612929754664960&permissions=8&integration_type=0&scope=bot+applications.commands'
  },
  {
    id: 'santuario-dbd',
    name: 'Santuário DBD',
    category: 'dbd',
    categoryLabel: 'DEAD BY DAYLIGHT',
    icon: 'fa-spider',
    color: '#ff3650',
    description: 'Acompanhe o Santuário do Dead By Daylight, as 4 habilidades que são rotacionadas a cada semana.',
    features: ['Santuário', 'Rotações', 'Alertas', 'Discord'],
    githubUrl: 'https://github.com/Antonizinhobr/bot-santuario-dbd',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1499493101255786668&permissions=8&integration_type=0&scope=bot+applications.commands'
  },
  {
    id: 'grimorio-codigos',
    name: 'Grimório de Códigos',
    category: 'dbd',
    categoryLabel: 'CÓDIGOS / RECOMPENSAS',
    icon: 'fa-scroll',
    color: '#ffc56d',
    description: 'O projeto acessa a página de códigos do NightLight, coleta os códigos disponíveis, identifica recompensa, data de expiração e data de adição, remove duplicados e salva os registros na coleção codigos do Firestore.',
    features: ['Códigos', 'Notificações', 'Filtros', 'Histórico'],
    githubUrl: 'https://github.com/Antonizinhobr/dbd-scrapper-codes',
  },
  {
    id: 'ticket-support',
    name: 'Ticket Bot',
    category: 'discord',
    categoryLabel: 'DISCORD',
    icon: 'fa-song',
    color: '#ff3650',
    description: 'O Bot Ticket automatiza o suporte dentro de um servidor Discord. Um administrador configura os canais do sistema, os usuários abrem tickets por botão, a equipe de atendimento assume os chamados e, ao final, o usuário avalia o atendimento. O bot salva os dados no Firestore e envia o histórico completo para o canal de logs.',
    features: ['Ticket', 'Support', 'Discord'],
    githubUrl: 'https://github.com/Antonizinhobr/bot-ticket',
    inviteUrl: 'https://discord.com/oauth2/authorize?client_id=1495914731695898744&permissions=8&integration_type=0&scope=bot+applications.commands'
  },
  {
  id: 'kage-bunshin',
  name: 'Kage Bunshin',
  category: 'music',
  categoryLabel: 'MÚSICA / MULTI-CLONE',
  icon: 'fa-music',
  color: '#ff3650',
  description: 'Bot de música para Discord com arquitetura multi-clone, capaz de tocar em múltiplos canais de voz simultaneamente dentro do mesmo servidor. Desenvolvido em Node.js com discord.js e discord-player.',
  features: [
    'Multi-clone',
    '4 workers',
    'Múltiplos canais de voz',
    'Discord.js',
    'Discord Player'
  ],
  githubUrl: 'https://github.com/Antonizinhobr/kage-bunshin-bot',
  inviteUrls: [
    {
      name: 'Kage 1 - BOT PRINCIPAL',
      url: 'https://discord.com/oauth2/authorize?client_id=1554155581302906900&permissions=8&integration_type=0&scope=bot+applications.commands'
    },
    {
      name: 'Kage 2',
      url: 'https://discord.com/oauth2/authorize?client_id=1554156897953644565&permissions=8&integration_type=0&scope=bot+applications.commands'
    },
    {
      name: 'Kage 3',
      url: 'https://discord.com/oauth2/authorize?client_id=1554157378751037470&permissions=8&integration_type=0&scope=bot+applications.commands'
    },
    {
      name: 'Kage 4',
      url: 'https://discord.com/oauth2/authorize?client_id=1554157740178280509&permissions=8&integration_type=0&scope=bot+applications.commands'
    }
  ]
}
];

const botGrid = document.getElementById('bot-grid');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('bot-search');
const filterTabs = [...document.querySelectorAll('.filter-tab')];
const modal = document.getElementById('bot-modal');
let activeFilter = 'all';

function normalizedInviteUrls(bot) {
  if (Array.isArray(bot.inviteUrls)) {
    return bot.inviteUrls.map((invite, index) => {
      if (typeof invite === 'string') return { name: `Bot ${index + 1}`, url: invite };
      return { name: invite.name || `Bot ${index + 1}`, url: invite.url || '' };
    }).filter(invite => invite.url);
  }

  return bot.inviteUrl ? [{ name: 'ADICIONAR', url: bot.inviteUrl }] : [];
}

function inviteLinksMarkup(bot) {
  return normalizedInviteUrls(bot).map(invite => `
    <a class="bot-action primary" href="${safeUrl(invite.url)}" target="_blank" rel="noopener noreferrer" title="Adicionar ${escapeHtml(invite.name)}">
      <i class="fab fa-discord"></i> ${escapeHtml(invite.name)}
    </a>
  `).join('');
}

function botCard(bot, index) {
  const features = Array.isArray(bot.features) ? bot.features : [];
  return `
    <article class="bot-card" data-id="${escapeHtml(bot.id)}" data-category="${escapeHtml(bot.category || 'utility')}" style="--card-color: ${escapeHtml(bot.color || '#ff3650')}; animation-delay: ${index * 70}ms;">
      <div class="card-top">
        <div class="bot-icon"><i class="fas ${escapeHtml(bot.icon || 'fa-robot')}"></i></div>
        <span class="bot-status"><i class="fas fa-circle"></i> ONLINE / 24H</span>
      </div>
      <span class="bot-category">${escapeHtml(bot.categoryLabel || 'UTILIDADE')}</span>
      <h3>${escapeHtml(bot.name || 'Bot sem nome')}</h3>
      <p>${escapeHtml(bot.description || '')}</p>
      <div class="bot-features">${features.map(feature => `<span class="bot-feature">${escapeHtml(feature)}</span>`).join('')}</div>
      <div class="bot-actions">
        ${inviteLinksMarkup(bot)}
        ${bot.githubUrl ? `<a class="bot-action" href="${safeUrl(bot.githubUrl)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GITHUB</a>` : ''}
        <button class="bot-action bot-details" type="button" data-details="${escapeHtml(bot.id)}" title="Ver detalhes"><i class="fas fa-arrow-up-right-from-square"></i></button>
      </div>
    </article>
  `;
}

function renderBots() {
  const term = (searchInput?.value || '').trim().toLowerCase();
  const visible = BOTS.filter(bot => {
    const content = `${bot.name} ${bot.categoryLabel} ${bot.description} ${(bot.features || []).join(' ')}`.toLowerCase();
    return (activeFilter === 'all' || bot.category === activeFilter) && (!term || content.includes(term));
  });

  if (botGrid) botGrid.innerHTML = visible.map(botCard).join('');
  if (emptyState) emptyState.hidden = visible.length !== 0;

  const metric = document.getElementById('metric-bots');
  const heroCount = document.getElementById('hero-bot-count');
  if (metric) metric.textContent = String(BOTS.length).padStart(2, '0');
  if (heroCount) heroCount.textContent = `${String(BOTS.length).padStart(2, '0')} ENTIDADES DISPONÍVEIS`;

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

function openModal(bot) {
  if (!bot || !modal) return;
  modal.style.setProperty('--modal-color', bot.color || '#ff3650');
  document.getElementById('modal-icon').innerHTML = `<i class="fas ${escapeHtml(bot.icon || 'fa-robot')}"></i>`;
  document.getElementById('modal-category').textContent = bot.categoryLabel || 'UTILIDADE';
  document.getElementById('modal-title').textContent = bot.name || 'Bot';
  document.getElementById('modal-description').textContent = bot.description || '';
  document.getElementById('modal-features').innerHTML = (bot.features || []).map(item => `<span class="bot-feature">${escapeHtml(item)}</span>`).join('');
  document.getElementById('modal-links').innerHTML = `${inviteLinksMarkup(bot)}${bot.githubUrl ? `<a class="bot-action" href="${safeUrl(bot.githubUrl)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> VER CÓDIGO</a>` : ''}`;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (modal) modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
});

function createParticles() {
  const field = document.getElementById('particle-field');
  if (!field) return;
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

const navbar = document.getElementById('navbar');
function updateNavbarOnScroll() {
  navbar?.classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
updateNavbarOnScroll();

function safeUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
  } catch {
    return '#';
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

renderBots();
createParticles();