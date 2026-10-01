import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithCustomToken,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyARpVKfzOMm-v0pv9-7w9xahvhItosrI2Q",
  authDomain: "dbd-camp.firebaseapp.com",
  projectId: "dbd-camp",
  storageBucket: "dbd-camp.firebasestorage.app",
  messagingSenderId: "357760091556",
  appId: "1:357760091556:web:4d9191b487baf240e92d31",
  measurementId: "G-THBBGJTTMJ",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const $ = (id) => document.getElementById(id);
const container = $("login-container");
const panel = $("auth-panel");
const visualPanel = $("visual-panel");
const stage = $("auth-stage");
const form = $("auth-form");
const submit = $("submit-btn");
let isLogin = true;
const urlParams = new URLSearchParams(window.location.search);
const customToken = urlParams.get("token");

function showError(message) {
  $("error-message").textContent = message;
  $("error-popup").style.display = "block";
}

function setLoading(active) {
  submit.classList.toggle("loading", active);
  submit.disabled = active;
}

if (customToken) {
  signInWithCustomToken(auth, customToken)
    .then(() =>
      window.history.replaceState({}, document.title, window.location.pathname),
    )
    .catch((error) =>
      showError("Erro: " + error.message),
    );
}

onAuthStateChanged(auth, (user) => {
  if (user) window.location.href = "dashboard.html";
});

$("google-btn").addEventListener("click", async () => {
  setLoading(true);
  try {
    await signInWithPopup(auth, googleProvider);
    window.location.href = "dashboard.html";
  } catch (error) {
    setLoading(false);
    if (
      !["auth/popup-closed-by-user", "auth/cancelled-popup-request"].includes(
        error.code,
      )
    )
      showError("Erro: " + error.message);
  }
});

function setupEye(eyeId, inputId) {
  const eye = $(eyeId),
    input = $(inputId);
  const toggle = () => {
    const visible = input.type === "password";
    input.type = visible ? "text" : "password";
    eye.classList.toggle("fa-eye", !visible);
    eye.classList.toggle("fa-eye-slash", visible);
  };
  eye.addEventListener("click", toggle);
  eye.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
}
setupEye("eye-pass", "password");
setupEye("eye-confirm", "confirm-password");

function updatePasswordMeter() {
  const meter = $("password-meter"),
    value = $("password").value;
  if (isLogin || !value) {
    meter.classList.add("hidden");
    return;
  }
  meter.classList.remove("hidden");
  const score = [
    value.length >= 8,
    /[A-Z]/.test(value),
    /[0-9]/.test(value),
    /[^A-Za-z0-9]/.test(value),
  ].filter(Boolean).length;
  meter.firstElementChild.style.width = `${Math.max(15, score * 25)}%`;
  meter.firstElementChild.style.background =
    score < 2 ? "#d51a2a" : score < 4 ? "#d59a2a" : "#42d68b";
}
$("password").addEventListener("input", updatePasswordMeter);

function switchMode() {
  isLogin = !isLogin;
  
  container.classList.toggle("signup-mode", !isLogin);
  panel.classList.remove("mode-refresh");
  void panel.offsetWidth;
  panel.classList.add("mode-refresh");
  
  $("auth-title").textContent = isLogin ? "Bem-vindo!" : "Criar conta";
  $("auth-subtitle").textContent = isLogin
    ? "Entre para continuar sua jornada na Névoa."
    : "Forje sua identidade antes que a Névoa feche o portal.";
  $("form-mode-label").textContent = isLogin
    ? "ACESSO À NÉVOA"
    : "NOVO REGISTRO";
    
  $("confirm-group").classList.toggle("hidden", isLogin);
  $("password-meter").classList.toggle("hidden", isLogin);
  $("submit-btn").querySelector(".btn-label").textContent = isLogin
    ? "Entrar"
    : "Cadastrar";
  $("forgot-pass-link").style.display = isLogin ? "block" : "none";
  $("toggle-link").innerHTML = isLogin
    ? 'Não tem uma conta? <span class="accent-text">Cadastre-se</span>'
    : 'Já tem uma conta? <span class="accent-text">Voltar para Login</span>';
  $("visual-caption").textContent = isLogin
    ? "A Névoa reconhece quem ousa atravessar."
    : "Toda nova identidade deixa uma marca na Névoa.";

  const characterImg = $("killer-image");
  const coordText = document.querySelector(".visual-coordinate");

  characterImg.classList.add("flipping");

  setTimeout(() => {
    if (isLogin) {
      characterImg.src = "https://deadbydaylight.com/static/46fd87ede14695260195ddbc2691f431/5bd17/DBD_POUTINE_WEBPAGE_Character_Page_THEFIRST_ONLY_58ed00b1f5.webp";
      if (coordText) coordText.textContent = "ENTITY // 001";
      characterImg.classList.remove("survivor-scale");
    } else {
      characterImg.src = "../assets/SurvLogin.png";
      if (coordText) coordText.textContent = "SURVIVOR // 001";
      characterImg.classList.add("survivor-scale");
    }
  }, 250);

  setTimeout(() => {
    characterImg.classList.remove("flipping");
  }, 500);

  bindToggleLink();
}

function bindToggleLink() {
  $("toggle-link").onclick = (e) => {
    e.preventDefault();
    switchMode();
  };
}
bindToggleLink();

$("forgot-pass-link").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = $("email").value.trim();
  if (!email)
    return showError("Erro");
  try {
    await sendPasswordResetEmail(auth, email);
    showError("Sucesso");
  } catch (error) {
    showError("Erro");
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = $("email").value.trim(),
    pass = $("password").value,
    confirm = $("confirm-password").value;
  if (!email || !pass)
    return showError("Erro");
  if (!isLogin && pass !== confirm)
    return showError("Erro");
  setLoading(true);
  try {
    if (isLogin) await signInWithEmailAndPassword(auth, email, pass);
    else {
      const res = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(res.user, {
        displayName: email.split("@")[0].toUpperCase(),
      });
    }
  } catch (err) {
    setLoading(false);
    showError("Erro");
  }
});

const field = (event) => {
  if (event.target.matches("input"))
    event.target.closest(".input-group")?.classList.add("touched");
};
form.addEventListener("input", field);

const particleField = $("particle-field");
for (let i = 0; i < 28; i++) {
  const p = document.createElement("i");
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${Math.random() * 100}%`;
  p.style.animationDelay = `${Math.random() * -8}s`;
  p.style.animationDuration = `${5 + Math.random() * 9}s`;
  particleField.appendChild(p);
}

document.addEventListener("pointermove", (e) => {
  const glow = $("cursor-glow");
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
  
  if (window.innerWidth > 900) {
    const r = container.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    container.style.setProperty("--tilt-y", `${x * 1.7}deg`);
    container.style.setProperty("--tilt-x", `${y * -1.7}deg`);
    const vr = visualPanel.getBoundingClientRect();
    const ix = (e.clientX - vr.left) / vr.width - 0.5,
      iy = (e.clientY - vr.top) / vr.height - 0.5;
    const killerImg = $("killer-image");
    if(killerImg && !killerImg.classList.contains("flipping")) {
      killerImg.style.transform =
        `translate(${ix * 12}px,${iy * -9}px) rotate(${ix * 1.5}deg)`;
    }
  }
});

document.addEventListener("pointerleave", () => {
  container.style.setProperty("--tilt-x", "0deg");
  container.style.setProperty("--tilt-y", "0deg");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 900) {
    container.style.setProperty("--tilt-x", "0deg");
    container.style.setProperty("--tilt-y", "0deg");
  }
});