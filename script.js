// ================= ELEMENTOS =================
const numPlayersSelect = document.getElementById('numPlayersSelect');
const playerNamesDiv = document.getElementById('playerNames');
const numImpostorsInput = document.getElementById('numImpostors');
const categorySelect = document.getElementById('categorySelect');

const startBtn = document.getElementById('startBtn');
const nightBtn = document.getElementById('nightModeBtn');

const setupDiv = document.getElementById('setup');
const roleScreen = document.getElementById('roleScreen');
const turnText = document.getElementById('turnText');

const flipCard = document.getElementById('flipCard');
const flipInner = document.getElementById('flipInner');
const roleDisplay = document.getElementById('roleDisplay');

const showRoleBtn = document.getElementById('showRoleBtn');
const nextBtn = document.getElementById('nextBtn');
const endBtn = document.getElementById('endBtn');

const summaryScreen = document.getElementById('summaryScreen');
const summaryList = document.getElementById('summaryList');

// ================= JUGADORES =================
let players = [];
let currentIndex = 0;
let currentTheme = "";

// ================= TEMAS =================
const themes = {
  Deportes:["Fútbol","Baloncesto","Tenis","Padel","Ciclismo","Boxeo","WWE","Natación"],
  Música:["Reggaetón","Trap","Flamenco","Rock","Pop","Electrónica"],
  Series:["Breaking Bad","La Casa de Papel","Stranger Things","Friends"],
  Videojuegos:["Fortnite","Minecraft","Call of Duty","GTA","FIFA"],
  Películas:["Harry Potter","Star Wars","Avatar","Indiana Jones"],
  Animales:["Águilas","Leones","Tiburones","Gatos"],
  Aleatorio:[]
};
Object.keys(themes).forEach(t => {
  if(t !== "Aleatorio") themes[t].forEach(x => themes.Aleatorio.push(x));
});

// ================= GENERAR SELECT JUGADORES =================
for(let i=3;i<=20;i++){
  const op=document.createElement("option");
  op.value=i;
  op.textContent=i+" jugadores";
  numPlayersSelect.appendChild(op);
}
generateInputs();

numPlayersSelect.addEventListener("change", generateInputs);

function generateInputs(){
  playerNamesDiv.innerHTML="";
  for(let i=0;i<numPlayersSelect.value;i++){
    playerNamesDiv.innerHTML += `
      <div class="player-card">
        <input type="text" id="player${i}" placeholder="Jugador ${i+1}">
      </div>`;
  }
}

// ================= EMPEZAR =================
startBtn.addEventListener("click", ()=>{
  const numPlayers = parseInt(numPlayersSelect.value);
  const numImpostors = parseInt(numImpostorsInput.value);

  if(numImpostors >= numPlayers){
    alert("Demasiados impostores");
    return;
  }

  // Crear jugadores
  players = [];
  for(let i=0;i<numPlayers;i++){
    const name = document.getElementById("player"+i).value.trim() || `Jugador ${i+1}`;
    players.push({name,isImpostor:false,theme:""});
  }

  // Mezclar
  players.sort(()=>Math.random() - 0.5);

  // Asignar impostores
  let imp=0;
  while(imp<numImpostors){
    let r=Math.floor(Math.random()*players.length);
    if(!players[r].isImpostor){
      players[r].isImpostor=true;
      imp++;
    }
  }

  // Tema
  const category = categorySelect.value;
  const list = themes[category];
  currentTheme = list[Math.floor(Math.random()*list.length)];

  players.forEach(p=>{
    if(!p.isImpostor) p.theme=currentTheme;
  });

  // Cambiar pantalla
  setupDiv.style.display="none";
  roleScreen.style.display="block";
  currentIndex=0;
  updateTurn();
});

// ================= MOSTRAR ROL =================
showRoleBtn.addEventListener("click", ()=>{
  const p = players[currentIndex];
  roleDisplay.innerText = p.isImpostor ? "IMPOSTOR" : p.theme;
  flipCard.classList.add("flip");
  showRoleBtn.style.display="none";
  nextBtn.style.display="block";
});

// ================= SIGUIENTE =================
nextBtn.addEventListener("click", ()=>{
  flipCard.classList.remove("flip");
  showRoleBtn.style.display="block";
  nextBtn.style.display="none";

  currentIndex++;
  if(currentIndex < players.length){
    updateTurn();
  } else {
    showSummary();
  }
});

function updateTurn(){
  turnText.innerText = "Turno de " + players[currentIndex].name;
}

// ================= RESUMEN =================
function showSummary(){
  roleScreen.style.display="none";
  summaryScreen.style.display="block";

  summaryList.innerHTML="";
  players.forEach(p=>{
    const li=document.createElement("li");
    li.innerText = p.name + " - " + (p.isImpostor?"IMPOSTOR":p.theme);
    if(p.isImpostor) li.style.color="red";
    summaryList.appendChild(li);
  });
}

// ================= MODO NOCHE =================
nightBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  // Guardar en localStorage
  localStorage.setItem("nightMode",
    document.body.classList.contains("dark") ? "1" : "0"
  );
});

// Aplicar modo guardado
if(localStorage.getItem("nightMode")==="1"){
  document.body.classList.add("dark");
}
