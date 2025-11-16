const themes = {
  Deportes:[/* Todos los deportes mencionados antes */ "Fútbol","Baloncesto","Tenis","Padel","Ciclismo","Boxeo","WWE","Natación","Atletismo","Golf","Esgrima","Rugby","Hockey","Skate","Snowboard","Surf","Paracaidismo","Voleibol","Ping Pong","Karate","Judo","Taekwondo","Motociclismo","Automovilismo","Triatlón","Remo","Escalada","Esquí","Patinaje","Carreras de caballos","BMX","Lucha libre","Billar","Boliche","Golf Mini","Carreras de drones","Tiro con arco","Squash","Cricket"],
  Música:[/* Todos los géneros musicales mencionados */ "Reggaetón","Trap","Flamenco","Rock","Pop","Electrónica","Techno","Clásica","Jazz","Hip-Hop","Blues","Country","Salsa","Bachata","Funk","Metal","R&B","Disco","House","Dubstep","K-Pop","Vocaloid","Folk","Opera","Grunge","Punk","Soul","Rap","Gospel","Reggae"],
  Series:[/* Todas las series mencionadas */ "Breaking Bad","La Casa de Papel","Stranger Things","The Walking Dead","Vikingos","Friends","The Office","Rick y Morty","Adventure Time","Los Simpsons","Family Guy","How I Met Your Mother","Game of Thrones","Sherlock","Black Mirror","Dexter","The Mandalorian","The Witcher","Dark","Narcos","The Boys","Westworld","Peaky Blinders","Umbrella Academy","Loki","WandaVision"],
  Videojuegos:[/* Juegos */ "Fortnite","Minecraft","Call of Duty","GTA","FIFA","Zelda","Mario Bros","Pokémon","League of Legends","Among Us","Roblox","Overwatch","Apex Legends","Valorant","Assassin's Creed","Resident Evil","The Sims","Cyberpunk","God of War","Halo","Battlefield","Rocket League","Tetris","Street Fighter","Mortal Kombat","Animal Crossing","Final Fantasy","Metroid","Starcraft","Diablo"],
  Películas:[/* Películas */ "Harry Potter","Star Wars","Avatar","Indiana Jones","Jurassic Park","El Señor de los Anillos","Matrix","The Avengers","Deadpool","Titanic","Spiderman","Iron Man","Hulk","Thor","Capitán América","Black Panther","Doctor Strange","Wonder Woman","Aquaman","Joker","Inception","Interstellar","Gladiator","Pirates of the Caribbean","Shrek","Toy Story","Frozen","Coco","The Lion King","Aladdin","Moana"],
  Animales:[/* Animales */ "Águilas","Leones","Tiburones","Dinosaurios","Gatos","Perros","Animales marinos","Elefantes","Jirafas","Tigres","Lobos","Serpientes","Rinocerontes","Hipopótamos","Orcas","Delfines","Peces tropicales","Cocodrilos","Osos","Zorros","Mapaches","Pingüinos","Canguros","Lémures","Nutrias","Búhos","Murciélagos","Caballos","Gorilas","Chimpancés"],
  Ciencia:[/* Ciencia */ "Física","Química","Biología","Matemáticas","Astronomía","Genética","Ecología","Robótica","Inteligencia Artificial","Nanotecnología","Neurociencia","Ingeniería","Informática","Meteorología","Geología","Astrobiología","Psicología","Sociología","Antropología","Oceanografía","Química Orgánica","Química Inorgánica","Biotecnología","Astrofísica","Electrónica","Telecomunicaciones","Ingeniería Biomédica","Ingeniería Aeroespacial"],
  Arte:[/* Arte */ "Pintura","Escultura","Fotografía","Dibujo","Graffiti","Arquitectura","Diseño Gráfico","Arte Digital","Caligrafía","Cerámica","Origami","Collage","Performance","Arte Urbano","Diseño de Moda","Ilustración","Mosaico","Vidrieras","Tatuaje","Arte Conceptual"],
  Comida:[/* Comida */ "Pizza","Hamburguesa","Tacos","Sushi","Chocolate","Helado","Frutas","Verduras","Postres","Bebidas","Pasta","Risotto","Paella","Ceviche","Empanadas","Curry","Chili","Hot Dog","Panqueques","Waffles","Donuts","Bebidas energéticas","Smoothies","Sopas","Ensaladas","Mariscos","Quesos","Carnes asadas","Bollería","Tapas"],
  Espacio:[/* Espacio */ "Planetas","Estrellas","Agujeros negros","Cometas","Nebulosas","Galaxias","Astronautas","Telescopios","Meteoritos","Constelaciones","Satélites","Exploración espacial","Estación Espacial","Rovers","Exoplanetas","Supernovas","Agujeros de gusano","Materia oscura"],
  Fantasía:[/* Fantasía */ "Dragones","Elfos","Orcos","Magos","Hadas","Vampiros","Zombies","Fénix","Unicornios","Sirenas","Gigantes","Enanos","Brujas","Demonios","Ángeles","Fantasma","Licántropos","Hobbits","Goblins","Genios","Espadas mágicas","Amuletos","Pociones","Hechizos"],
  Historia:[/* Historia */ "Egipto","Roma","Grecia","Mesopotamia","Edad Media","Renacimiento","Revolución Francesa","Guerras Mundiales","Imperio Bizantino","Vikingos","Incas","Mayas","Aztecas","China Antigua","Japón Feudal","Genghis Khan","Napoleón","Hitler","Lincoln","George Washington"],
  Literatura:[/* Literatura */ "Cien Años de Soledad","Don Quijote","Hamlet","Romeo y Julieta","Moby Dick","Orgullo y Prejuicio","El Principito","La Divina Comedia","Sherlock Holmes","Harry Potter","Percy Jackson","El Hobbit","El Señor de los Anillos","Juego de Tronos","Crónica de una Muerte Anunciada"],
  Aleatorio:[]
};

// Llenar Aleatorio con todos los demás temas
Object.keys(themes).forEach(cat=>{
  if(cat !== "Aleatorio"){
    themes[cat].forEach(t => themes.Aleatorio.push(t));
  }
});

let players = [];
let currentIndex = 0;
let currentTheme = "";

const numPlayersInput = document.getElementById('numPlayers');
const numImpostorsInput = document.getElementById('numImpostors');
const categorySelect = document.getElementById('categorySelect');
const playerNamesDiv = document.getElementById('playerNames');
const startBtn = document.getElementById('startBtn');
const nightModeBtn = document.getElementById('nightModeBtn');

const setupDiv = document.getElementById('setup');
const roleScreen = document.getElementById('roleScreen');
const turnText = document.getElementById('turnText');
const showRoleBtn = document.getElementById('showRoleBtn');
const roleDisplay = document.getElementById('roleDisplay');
const nextBtn = document.getElementById('nextBtn');
const endBtn = document.getElementById('endBtn');

const summaryScreen = document.getElementById('summaryScreen');
const summaryList = document.getElementById('summaryList');

// Crear inputs de jugadores
function createPlayerInputs() {
  playerNamesDiv.innerHTML = '';
  const num = parseInt(numPlayersInput.value);
  for(let i=0; i<num; i++){
    const input = document.createElement('input');
    input.type = 'text';
    input.value = `Jugador ${i+1}`;
    input.id = `player${i}`;
    input.placeholder = `Nombre jugador ${i+1}`;
    playerNamesDiv.appendChild(input);
  }
}
createPlayerInputs();
numPlayersInput.addEventListener('change', createPlayerInputs);

// Modo noche
nightModeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('night');
});

// Empezar juego
startBtn.addEventListener('click', ()=>{
  const numPlayers = parseInt(numPlayersInput.value);
  const numImpostors = parseInt(numImpostorsInput.value);
  if(numImpostors >= numPlayers){
    alert("Los impostores no pueden ser iguales o más que los jugadores");
    return;
  }

  players = [];
  for(let i=0; i<numPlayers; i++){
    const name = document.getElementById(`player${i}`).value.trim() || `Jugador ${i+1}`;
    players.push({name, isImpostor: false, theme: ""});
  }

  // Asignar impostores
  let impostorsAssigned = 0;
  while(impostorsAssigned < numImpostors){
    const idx = Math.floor(Math.random()*players.length);
    if(!players[idx].isImpostor){
      players[idx].isImpostor = true;
      impostorsAssigned++;
    }
  }

  // Elegir tema único para ciudadanos
  const category = categorySelect.value;
  let categoryThemes = themes[category];
  if(category === "Aleatorio") categoryThemes = themes.Aleatorio;
  const citizenTheme = categoryThemes[Math.floor(Math.random()*categoryThemes.length)];
  currentTheme = citizenTheme;
  players.forEach(p=>{ if(!p.isImpostor) p.theme = citizenTheme; });

  setupDiv.style.display = 'none';
  roleScreen.style.display = 'block';
  currentIndex = 0;
  updateTurn();
});

// Actualizar turno
function updateTurn(){
  roleDisplay.style.display = 'none';
  roleDisplay.classList.remove('show');
  nextBtn.style.display = 'none';
  showRoleBtn.style.display = 'inline';
  turnText.innerText = `Turno de ${players[currentIndex].name}`;
}

// Mostrar rol con transición
showRoleBtn.addEventListener('click', ()=>{
  const player = players[currentIndex];
  roleDisplay.style.display = 'block';
  roleDisplay.classList.remove('show');
  setTimeout(()=>{
    roleDisplay.innerText = player.isImpostor ? 'IMPOSTOR' : `Tu tema: ${player.theme}`;
    roleDisplay.classList.add('show');
  }, 50);
  showRoleBtn.style.display = 'none';
  nextBtn.style.display = 'inline';
});

// Siguiente jugador
nextBtn.addEventListener('click', ()=>{
  currentIndex++;
  if(currentIndex < players.length){
    updateTurn();
  } else {
    showSummary();
  }
});

// Mostrar resumen
function showSummary(){
  roleScreen.style.display = 'none';
  summaryScreen.style.display = 'block';
  summaryList.innerHTML = '';
  players.forEach(p=>{
    const li = document.createElement('li');
    li.innerText = `${p.name} - ${p.isImpostor ? 'IMPOSTOR' : p.theme}`;
    if(p.isImpostor) li.classList.add('impostor');
    summaryList.appendChild(li);
  });
}

// Terminar partida
endBtn.addEventListener('click', ()=>{
  location.reload();
});