/* Juego del Impostor - script.js
   Incluye:
   - WebAudio para efectos sin archivos
   - Temporizador circular por turno
   - Modo Noche / Fiesta
   - Descarga de resumen
   - Controles (sonidos ON/OFF y volumen)
*/

/* ====== ELEMENTOS ====== */
const numPlayersSelect = document.getElementById('numPlayersSelect');
const playerNamesDiv = document.getElementById('playerNames');
const numImpostorsInput = document.getElementById('numImpostors');
const categorySelect = document.getElementById('categorySelect');
const startBtn = document.getElementById('startBtn');
const soundToggle = document.getElementById('soundToggle');
const nightBtn = document.getElementById('nightModeBtn');
const partyBtn = document.getElementById('partyBtn');

const setupSection = document.getElementById('setup');
const roleScreen = document.getElementById('roleScreen');
const summaryScreen = document.getElementById('summaryScreen');

const turnText = document.getElementById('turnText');
const flipCard = document.getElementById('flipCard');
const flipInner = document.getElementById('flipInner');
const roleDisplay = document.getElementById('roleDisplay');

const showRoleBtn = document.getElementById('showRoleBtn');
const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const endBtn = document.getElementById('endBtn');

const timerText = document.getElementById('timerText');
const ringFg = document.getElementById('ringFg');
const turnTimeInput = document.getElementById('turnTime');
const volumeControl = document.getElementById('volume');

const summaryList = document.getElementById('summaryList');
const downloadBtn = document.getElementById('downloadBtn');
const restartBtn = document.getElementById('restartBtn');

/* ====== DATOS / TEMAS ====== */
const themes = {
  Deportes: ["Fútbol","Baloncesto","Tenis","Padel","Ciclismo","Boxeo","WWE","Natación","Atletismo","Golf"],
  Música: ["Reggaetón","Trap","Flamenco","Rock","Pop","Electrónica","Jazz","Hip-Hop","Blues","Salsa"],
  Series: ["Breaking Bad","La Casa de Papel","Stranger Things","Friends","The Office","Rick y Morty","Game of Thrones"],
  Videojuegos: ["Fortnite","Minecraft","Call of Duty","GTA","FIFA","Mario","Zelda","Pokémon","LOL","Among Us"],
  Películas: ["Harry Potter","Star Wars","Avatar","Jurassic Park","El Señor de los Anillos","Inception"],
  Animales: ["Gatos","Perros","Tiburones","Leones","Águilas","Delfines","Pingüinos"],
  Famosos: ["Cristiano Ronaldo","Lionel Messi","Shakira","Beyoncé","Taylor Swift","Rosalía","LeBron James"],
  Aleatorio: []
};
Object.keys(themes).forEach(k=>{ if(k!=="Aleatorio") themes.Aleatorio.push(...themes[k]); });

let players = [];
let currentIndex = 0;
let currentTheme = "";
let timerInterval = null;
let remaining = 0;
let totalTime = 15;
let audioEnabled = true;

/* ====== AUDIO: WebAudio simple effects ====== */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeep(freq=440, time=0.06, type='sine'){
  if(!audioEnabled) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = volumeControl.value;
  o.connect(g); g.connect(audioCtx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + time);
  o.stop(audioCtx.currentTime + time + 0.02);
}

function playFlipSound(){
  // small descending beep sequence
  if(!audioEnabled) return;
  playBeep(880, 0.05, 'sine');
  setTimeout(()=>playBeep(660,0.06,'sine'),80);
  setTimeout(()=>playBeep(440,0.08,'sine'),160);
}

function playNextSound(){
  if(!audioEnabled) return;
  playBeep(700,0.06,'triangle');
  setTimeout(()=>playBeep(900,0.04,'triangle'),90);
}

function playErrorSound(){
  if(!audioEnabled) return;
  playBeep(220,0.15,'sawtooth');
}

/* ====== UI: crear select de jugadores ====== */
for(let i=3;i<=20;i++){
  const opt = document.createElement('option');
  opt.value = i; opt.textContent = `${i} jugadores`;
  numPlayersSelect.appendChild(opt);
}
generateInputs();
numPlayersSelect.addEventListener('change', generateInputs);

function generateInputs(){
  playerNamesDiv.innerHTML = '';
  const n = parseInt(numPlayersSelect.value || 6);
  for(let i=0;i<n;i++){
    const wrapper = document.createElement('div');
    wrapper.className = 'player-card';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = `player${i}`;
    input.placeholder = `Jugador ${i+1}`;
    wrapper.appendChild(input);
    playerNamesDiv.appendChild(wrapper);
  }
}

/* ====== START GAME ====== */
startBtn.addEventListener('click', ()=>{

  // resume audio on user gesture (mobile)
  if(audioCtx.state === 'suspended') audioCtx.resume();

  const numPlayers = parseInt(numPlayersSelect.value);
  const numImpostors = parseInt(numImpostorsInput.value);
  totalTime = parseInt(turnTimeInput.value) || 15;

  if(numImpostors >= numPlayers){
    playErrorSound();
    return alert('Los impostores no pueden ser iguales o superiores al número de jugadores.');
  }

  // crear jugadores
  players = [];
  for(let i=0;i<numPlayers;i++){
    const name = document.getElementById(`player${i}`).value.trim() || `Jugador ${i+1}`;
    players.push({ name, isImpostor:false, theme:'' });
  }

  // mezclar
  players.sort(()=>Math.random()-0.5);

  // asignar impostores
  let assigned = 0;
  while(assigned < numImpostors){
    const idx = Math.floor(Math.random()*players.length);
    if(!players[idx].isImpostor){
      players[idx].isImpostor = true; assigned++;
    }
  }

  // tema
  const cat = categorySelect.value;
  const list = themes[cat] || themes.Aleatorio;
  currentTheme = list[Math.floor(Math.random()*list.length)];
  players.forEach(p => { if(!p.isImpostor) p.theme = currentTheme; });

  // UI
  setupSection.style.display = 'none';
  roleScreen.style.display = 'block';
  currentIndex = 0;
  updateTurn();
  playBeep(520, 0.08, 'sine');
});

/* ====== UPDATE TURN ====== */
function updateTurn(){
  if(players.length === 0) return;
  turnText.textContent = `Turno de ${players[currentIndex].name}`;
  roleDisplay.innerText = '';
  flipCard.classList.remove('flip');
  showRoleBtn.style.display = 'inline-block';
  nextBtn.style.display = 'none';
  skipBtn.style.display = 'inline-block';
  resetTimer();
}

/* ====== TIMER ====== */
function resetTimer(){
  clearInterval(timerInterval);
  remaining = totalTime;
  updateRing();
  timerText.textContent = String(remaining);
}

function startTimer(){
  clearInterval(timerInterval);
  remaining = totalTime;
  updateRing();
  timerText.textContent = String(remaining);
  timerInterval = setInterval(()=>{
    remaining--;
    timerText.textContent = String(remaining);
    updateRing();
    if(remaining <= 0){
      clearInterval(timerInterval);
      // auto flip to next (simulate timeout)
      onTimeEnd();
    }
  }, 1000);
}

// ring animation update (circle circumference ~ 2πr where r=45 -> ~283)
function updateRing(){
  const circumference = 2 * Math.PI * 45;
  const fraction = Math.max(0, Math.min(1, remaining / totalTime));
  const offset = Math.round(circumference * (1 - fraction));
  ringFg.style.strokeDashoffset = offset;
}

/* ====== ACTIONS: flip/show role/next/skip ====== */
showRoleBtn.addEventListener('click', ()=>{
  const p = players[currentIndex];
  roleDisplay.innerText = p.isImpostor ? 'IMPOSTOR' : `Tu tema: ${p.theme}`;
  flipCard.classList.add('flip');
  playFlipSound();
  showRoleBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  skipBtn.style.display = 'none';
  // iniciar temporizador para que jugador vea su rol (si quieres que empiece al mostrar)
  startTimer();
  // mostrar botón siguiente solo cuando termine el turno o al pulsar Siguiente
  nextBtn.style.display = 'inline-block';
});

skipBtn.addEventListener('click', ()=>{
  // saltar (no mostrar rol): pasar al siguiente
  playNextSound();
  currentIndex++;
  if(currentIndex < players.length) updateTurn();
  else showSummary();
});

nextBtn.addEventListener('click', ()=>{
  // parar timer y pasar
  clearInterval(timerInterval);
  playNextSound();
  flipCard.classList.remove('flip');
  currentIndex++;
  if(currentIndex < players.length) updateTurn();
  else showSummary();
});

// allow clicking the flipcard itself to reveal when on role screen
flipCard.addEventListener('click', ()=>{
  if(showRoleBtn.style.display !== 'none'){
    showRoleBtn.click();
  }
});

// keyboard: space to flip
document.addEventListener('keydown', (e)=>{
  if(e.code === 'Space' && roleScreen.style.display === 'block'){
    e.preventDefault();
    if(showRoleBtn.style.display !== 'none') showRoleBtn.click();
    else if(nextBtn.style.display !== 'none') nextBtn.click();
  }
});

/* ====== TIME END HANDLER ====== */
function onTimeEnd(){
  playBeep(300, 0.18, 'sawtooth');
  // si el rol ya fue mostrado, avanzamos; si no, forzamos mostrar y luego avanzar
  if(flipCard.classList.contains('flip')){
    // rol ya visible -> pasar automáticamente al siguiente
    setTimeout(()=>{ nextBtn.click(); }, 500);
  } else {
    // no visible -> mostrar por el jugador (autoflip) y luego pasar
    showRoleBtn.click();
    setTimeout(()=>{ nextBtn.click(); }, 1500);
  }
}

/* ====== SUMMARY ====== */
function showSummary(){
  roleScreen.style.display = 'none';
  summaryScreen.style.display = 'block';
  summaryList.innerHTML = '';
  players.forEach(p=>{
    const li = document.createElement('li');
    li.textContent = `${p.name} — ${p.isImpostor ? 'IMPOSTOR' : p.theme}`;
    if(p.isImpostor){ li.style.color = '#ff3b3b'; li.style.fontWeight = '700'; }
    summaryList.appendChild(li);
  });
}

/* Descargar resumen */
downloadBtn.addEventListener('click', ()=>{
  const blob = new Blob([summaryListToText()], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'resumen_impostor.txt';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});

function summaryListToText(){
  let s = 'Resumen de la partida\n\n';
  players.forEach(p => {
    s += `${p.name} - ${p.isImpostor ? 'IMPOSTOR' : p.theme}\n`;
  });
  return s;
}

/* RESTART */
restartBtn.addEventListener('click', ()=> location.reload());

/* ====== MODE NIGHT / PARTY / SOUNDS ====== */
nightBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  // save preference
  localStorage.setItem('impostor_night', document.body.classList.contains('dark') ? '1':'0');
});

partyBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('party');
  // small party audio pulse
  if(document.body.classList.contains('party')){
    // loop small beep
    partyLoop = setInterval(()=>{ playBeep(220 + Math.random()*600, 0.05, 'sine'); }, 250);
    partyBtn.textContent = 'Fiesta ON';
  } else {
    clearInterval(partyLoop);
    partyBtn.textContent = 'Modo Fiesta';
  }
});
let partyLoop = null;

// sonido toggle
soundToggle.addEventListener('click', ()=>{
  audioEnabled = !audioEnabled;
  soundToggle.textContent = `Sonidos: ${audioEnabled ? 'ON' : 'OFF'}`;
});

// volumen control
volumeControl.addEventListener('input', ()=> {
  // nothing else needed — we read volumeControl.value when playing
});

/* Restore mode preferences */
if(localStorage.getItem('impostor_night') === '1') document.body.classList.add('dark');

/* ====== END ====== */
