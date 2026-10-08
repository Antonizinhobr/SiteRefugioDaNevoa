import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const OWNER_UIDS = [
  "discord:1400218900284571689"
];

const firebaseConfig = {
  apiKey: "AIzaSyARpVKfzOMm-v0pv9-7w9xahvhItosrI2Q",
  authDomain: "dbd-camp.firebaseapp.com",
  projectId: "dbd-camp",
  storageBucket: "dbd-camp.firebasestorage.app",
  messagingSenderId: "357760091556",
  appId: "1:357760091556:web:4d9191b487baf240e92d31",
  measurementId: "G-THBBGJTTMJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
window.firebaseAuth = auth;

const displayNameEl = document.getElementById('display-name');
const logoutBtn = document.getElementById('logout-btn');
const navbar = document.getElementById('navbar');
const botGrid = document.getElementById('bot-grid');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('bot-search');
const filterTabs = [...document.querySelectorAll('.filter-tab')];
const adminPanel = document.getElementById('bot-admin-panel');
const adminGateNote = document.getElementById('admin-gate-note');
const adminForm = document.getElementById('bot-admin-form');
const adminStatus = document.getElementById('admin-status');
const cancelEditButton = document.getElementById('cancel-edit');
const submitBotButton = document.getElementById('submit-bot');

let activeFilter = 'all';
let allBots = [];
let isOwner = false;
let editingBotId = null;
let authChecked = false;
let stopBotsListener = null;

function isAuthorizedOwner(user) {
  return Boolean(user && OWNER_UIDS.includes(user.uid));
}

function updateNavbarOnScroll() {
  navbar?.classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
updateNavbarOnScroll();

onAuthStateChanged(auth, (user) => {
  authChecked = true;
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  const userName = user.displayName || (user.email ? user.email.split('@')[0] : 'Usuário');
  if (displayNameEl) displayNameEl.textContent = userName.toUpperCase();

  isOwner = isAuthorizedOwner(user);
  if (adminPanel) adminPanel.hidden = !isOwner;
  if (adminGateNote) adminGateNote.hidden = isOwner;
  renderBots();
  subscribeToBots();
});

setTimeout(() => {
  if (!authChecked && displayNameEl) displayNameEl.textContent = '...';
}, 3000);

if (logoutBtn) logoutBtn.onclick = () => signOut(auth);

function subscribeToBots() {
  if (stopBotsListener) stopBotsListener();
  stopBotsListener = onSnapshot(collection(db, 'bots'), (snapshot) => {
    allBots = snapshot.docs.map(item => ({ id: item.id, ...item.data() }));
    allBots.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'pt-BR'));
    renderBots();
  }, (error) => {
    console.error('Erro ao carregar bots:', error);
    if (botGrid) botGrid.innerHTML = '<div class="bots-error"><i class="fas fa-triangle-exclamation"></i><h3>Falha ao abrir o arquivo</h3><p>Verifique as regras do Firestore e tente novamente.</p></div>';
  });
}

function normalizedFeatures(bot) {
  if (Array.isArray(bot.features)) return bot.features.filter(Boolean);
  return String(bot.features || '').split(',').map(item => item.trim()).filter(Boolean);
}

function botCard(bot, index) {
  const color = bot.color || '#ff3650';
  const features = normalizedFeatures(bot);
  const featureMarkup = features.map(feature => `<span class="bot-feature">${escapeHtml(feature)}</span>`).join('');
  const inactiveClass = bot.active === false ? ' bot-card-inactive' : '';
  const ownerActions = isOwner ? `
    <button class="bot-action admin-action" type="button" data-edit="${bot.id}" title="Editar bot"><i class="fas fa-pen"></i></button>
    <button class="bot-action admin-action danger" type="button" data-delete="${bot.id}" title="Excluir bot"><i class="fas fa-trash"></i></button>
  ` : '';

  return `
    <article class="bot-card${inactiveClass}" data-id="${bot.id}" data-category="${escapeHtml(bot.category || 'utility')}" style="--card-color: ${escapeHtml(color)}; animation-delay: ${index * 55}ms;">
      <div class="card-top">
        <div class="bot-icon"><i class="fas ${escapeHtml(bot.icon || 'fa-robot')}"></i></div>
        <span class="bot-status ${bot.active === false ? 'offline' : ''}"><i class="fas fa-circle"></i> ${bot.active === false ? 'OCULTO' : 'ONLINE / 24H'}</span>
      </div>
      <span class="bot-category">${escapeHtml(bot.categoryLabel || 'UTILIDADE')}</span>
      <h3>${escapeHtml(bot.name || 'Bot sem nome')}</h3>
      <p>${escapeHtml(bot.description || 'Sem descrição cadastrada.')}</p>
      <div class="bot-features">${featureMarkup}</div>
      <div class="bot-actions">
        ${bot.inviteUrl ? `<a class="bot-action primary" href="${safeUrl(bot.inviteUrl)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord"></i> ADICIONAR</a>` : ''}
        ${bot.githubUrl ? `<a class="bot-action" href="${safeUrl(bot.githubUrl)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GITHUB</a>` : ''}
        <button class="bot-action bot-details" type="button" data-details="${bot.id}" title="Ver detalhes"><i class="fas fa-arrow-up-right-from-square"></i></button>
        ${ownerActions}
      </div>
    </article>
  `;
}

function renderBots() {
  if (!botGrid) return;
  const term = (searchInput?.value || '').trim().toLowerCase();
  const visible = allBots.filter(bot => {
    if (!isOwner && bot.active === false) return false;
    const matchesFilter = activeFilter === 'all' || bot.category === activeFilter;
    const content = `${bot.name || ''} ${bot.categoryLabel || ''} ${bot.description || ''} ${normalizedFeatures(bot).join(' ')}`.toLowerCase();
    return matchesFilter && (!term || content.includes(term));
  });

  botGrid.innerHTML = visible.map(botCard).join('');
  if (emptyState) emptyState.hidden = visible.length !== 0;
  const totalActive = allBots.filter(bot => bot.active !== false).length;
  const metric = document.getElementById('metric-bots');
  const heroCount = document.getElementById('hero-bot-count');
  if (metric) metric.textContent = String(totalActive).padStart(2, '0');
  if (heroCount) heroCount.textContent = `${String(totalActive).padStart(2, '0')} ENTIDADES DISPONÍVEIS`;
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
  document.querySelectorAll('[data-details]').forEach(button => button.addEventListener('click', () => openModal(allBots.find(bot => bot.id === button.dataset.details))));
  document.querySelectorAll('[data-edit]').forEach(button => button.addEventListener('click', () => startEdit(allBots.find(bot => bot.id === button.dataset.edit))));
  document.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', () => removeBot(button.dataset.delete)));
}

filterTabs.forEach(tab => tab.addEventListener('click', () => {
  filterTabs.forEach(item => item.classList.remove('active'));
  tab.classList.add('active');
  activeFilter = tab.dataset.filter;
  renderBots();
}));
searchInput?.addEventListener('input', renderBots);

adminForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!isOwner || !auth.currentUser) return setAdminStatus('Apenas o proprietário pode cadastrar bots.', true);

  const formData = new FormData(adminForm);
  const payload = {
    name: String(formData.get('name') || '').trim(),
    category: String(formData.get('category') || 'utility'),
    categoryLabel: String(formData.get('categoryLabel') || '').trim().toUpperCase(),
    icon: String(formData.get('icon') || 'fa-robot').trim(),
    color: String(formData.get('color') || '#ff3650').trim(),
    description: String(formData.get('description') || '').trim(),
    features: String(formData.get('features') || '').split(',').map(item => item.trim()).filter(Boolean),
    githubUrl: String(formData.get('githubUrl') || '').trim(),
    inviteUrl: String(formData.get('inviteUrl') || '').trim(),
    active: formData.get('active') === 'on',
    updatedBy: auth.currentUser.uid,
    updatedAt: serverTimestamp()
  };

  if (!payload.name || !payload.description) return setAdminStatus('Preencha pelo menos o nome e a descrição.', true);
  submitBotButton.disabled = true;
  setAdminStatus(editingBotId ? 'Atualizando entidade...' : 'Registrando entidade...');

  try {
    if (editingBotId) {
      await updateDoc(doc(db, 'bots', editingBotId), payload);
      setAdminStatus('Bot atualizado com sucesso.');
    } else {
      await addDoc(collection(db, 'bots'), { ...payload, createdBy: auth.currentUser.uid, createdAt: serverTimestamp() });
      setAdminStatus('Bot cadastrado com sucesso.');
    }
    resetAdminForm();
  } catch (error) {
    console.error(error);
    setAdminStatus('Não foi possível salvar. Confira as regras do Firestore.', true);
  } finally {
    submitBotButton.disabled = false;
  }
});

cancelEditButton?.addEventListener('click', resetAdminForm);

function startEdit(bot) {
  if (!isOwner || !bot || !adminForm) return;
  editingBotId = bot.id;
  for (const field of ['name', 'categoryLabel', 'icon', 'color', 'description', 'features', 'githubUrl', 'inviteUrl']) {
    const input = adminForm.elements[field];
    if (!input) continue;
    input.value = field === 'features' ? normalizedFeatures(bot).join(', ') : (bot[field] || '');
  }
  adminForm.elements.category.value = bot.category || 'utility';
  adminForm.elements.active.checked = bot.active !== false;
  submitBotButton.textContent = 'SALVAR ALTERAÇÕES';
  cancelEditButton.hidden = false;
  adminPanel?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function removeBot(botId) {
  if (!isOwner || !botId || !confirm('Excluir este bot do catálogo? Esta ação não pode ser desfeita.')) return;
  try {
    await deleteDoc(doc(db, 'bots', botId));
    setAdminStatus('Bot removido do catálogo.');
  } catch (error) {
    console.error(error);
    setAdminStatus('Não foi possível excluir este bot.', true);
  }
}

function resetAdminForm() {
  editingBotId = null;
  adminForm?.reset();
  if (adminForm?.elements.active) adminForm.elements.active.checked = true;
  if (submitBotButton) submitBotButton.textContent = 'CADASTRAR BOT';
  if (cancelEditButton) cancelEditButton.hidden = true;
}

function setAdminStatus(message, error = false) {
  if (!adminStatus) return;
  adminStatus.textContent = message;
  adminStatus.classList.toggle('error', error);
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
  } catch { return '#'; }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

const modal = document.getElementById('bot-modal');
function openModal(bot) {
  if (!bot || !modal) return;
  modal.style.setProperty('--modal-color', bot.color || '#ff3650');
  document.getElementById('modal-icon').innerHTML = `<i class="fas ${escapeHtml(bot.icon || 'fa-robot')}"></i>`;
  document.getElementById('modal-category').textContent = bot.categoryLabel || 'UTILIDADE';
  document.getElementById('modal-title').textContent = bot.name || 'Bot';
  document.getElementById('modal-description').textContent = bot.description || '';
  document.getElementById('modal-features').innerHTML = normalizedFeatures(bot).map(item => `<span class="bot-feature">${escapeHtml(item)}</span>`).join('');
  document.getElementById('modal-links').innerHTML = `${bot.inviteUrl ? `<a class="bot-action primary" href="${safeUrl(bot.inviteUrl)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord"></i> ADICIONAR</a>` : ''}${bot.githubUrl ? `<a class="bot-action" href="${safeUrl(bot.githubUrl)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> VER CÓDIGO</a>` : ''}`;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal() { if (modal) modal.hidden = true; document.body.style.overflow = ''; }
document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal && !modal.hidden) closeModal(); });

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

createParticles();
