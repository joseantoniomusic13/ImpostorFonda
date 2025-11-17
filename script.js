// ================= TEMAS ==================
const themes = {
  Deportes: [
    "Fútbol","Baloncesto","Tenis","Padel","Ciclismo","Boxeo","WWE","Natación","Atletismo","Golf",
    "Esgrima","Rugby","Hockey","Skate","Snowboard","Surf","Paracaidismo","Voleibol","Ping Pong",
    "Karate","Judo","Taekwondo","Motociclismo","Automovilismo","Triatlón","Remo","Escalada","Esquí",
    "Patinaje","Carreras de caballos","BMX","Lucha libre","Billar","Boliche","Golf Mini","Carreras de drones",
    "Tiro con arco","Squash","Cricket","Esquí acuático","Parapente","Patinaje artístico","Kitesurf","Rally","Triatlón de invierno"
  ],
  Música: [
    "Reggaetón","Trap","Flamenco","Rock","Pop","Electrónica","Techno","Clásica","Jazz","Hip-Hop",
    "Blues","Country","Salsa","Bachata","Funk","Metal","R&B","Disco","House","Dubstep","K-Pop",
    "Vocaloid","Folk","Opera","Grunge","Punk","Soul","Rap","Gospel","Reggae","Merengue","Ska",
    "Bolero","Cumbia","Electro Swing","Trap Latino","Lo-fi","Indie"
  ],
  Series: [
    "Breaking Bad","La Casa de Papel","Stranger Things","The Walking Dead","Vikingos","Friends","The Office",
    "Rick y Morty","Adventure Time","Los Simpsons","Family Guy","How I Met Your Mother","Game of Thrones",
    "Sherlock","Black Mirror","Dexter","The Mandalorian","The Witcher","Dark","Narcos","The Boys",
    "Westworld","Peaky Blinders","Umbrella Academy","Loki","WandaVision","Lost","Grey's Anatomy",
    "Prison Break","House","Smallville","Buffy","Supernatural"
  ],
  Videojuegos: [
    "Fortnite","Minecraft","Call of Duty","GTA","FIFA","Zelda","Mario Bros","Pokémon","League of Legends",
    "Among Us","Roblox","Overwatch","Apex Legends","Valorant","Assassin's Creed","Resident Evil","The Sims",
    "Cyberpunk","God of War","Halo","Battlefield","Rocket League","Tetris","Street Fighter","Mortal Kombat",
    "Animal Crossing","Final Fantasy","Metroid","Starcraft","Diablo","Call of Duty Warzone","Genshin Impact",
    "Elden Ring","Fall Guys","Dead by Daylight","Overcooked"
  ],
  Películas: [
    "Harry Potter","Star Wars","Avatar","Indiana Jones","Jurassic Park","El Señor de los Anillos","Matrix",
    "The Avengers","Deadpool","Titanic","Spiderman","Iron Man","Hulk","Thor","Capitán América","Black Panther",
    "Doctor Strange","Wonder Woman","Aquaman","Joker","Inception","Interstellar","Gladiator","Pirates of the Caribbean",
    "Shrek","Toy Story","Frozen","Coco","The Lion King","Aladdin","Moana","Black Swan","La La Land","The Godfather"
  ],
  Animales: [
    "Águilas","Leones","Tiburones","Dinosaurios","Gatos","Perros","Animales marinos","Elefantes","Jirafas",
    "Tigres","Lobos","Serpientes","Rinocerontes","Hipopótamos","Orcas","Delfines","Peces tropicales","Cocodrilos",
    "Osos","Zorros","Mapaches","Pingüinos","Canguros","Lémures","Nutrias","Búhos","Murciélagos","Caballos",
    "Gorilas","Chimpancés","Conejos","Ardillas","Camaleones","Avestruz","Cisnes","Tortugas","Peces payaso"
  ],
  Ciencia: [
    "Física","Química","Biología","Matemáticas","Astronomía","Genética","Ecología","Robótica","Inteligencia Artificial",
    "Nanotecnología","Neurociencia","Ingeniería","Informática","Meteorología","Geología","Astrobiología","Psicología",
    "Sociología","Antropología","Oceanografía","Química Orgánica","Química Inorgánica","Biotecnología","Astrofísica",
    "Electrónica","Telecomunicaciones","Ingeniería Biomédica","Ingeniería Aeroespacial","Bioinformática","Cibernética","Microbiología"
  ],
  Arte: [
    "Pintura","Escultura","Fotografía","Dibujo","Graffiti","Arquitectura","Diseño Gráfico","Arte Digital","Caligrafía",
    "Cerámica","Origami","Collage","Performance","Arte Urbano","Diseño de Moda","Ilustración","Mosaico","Vidrieras",
    "Tatuaje","Arte Conceptual","Grabado","Caricatura","Bordado","Arte Textil","Arte Interactivo","Street Art"
  ],
  Comida: [
    "Pizza","Hamburguesa","Tacos","Sushi","Chocolate","Helado","Frutas","Verduras","Postres","Bebidas","Pasta",
    "Risotto","Paella","Ceviche","Empanadas","Curry","Chili","Hot Dog","Panqueques","Waffles","Donuts",
    "Bebidas energéticas","Smoothies","Sopas","Ensaladas","Mariscos","Quesos","Carnes asadas","Bollería","Tapas",
    "Gelato","Café","Te","Bagels","Churros","Crepes","Fondue","Salsas","Snacks"
  ],
  Espacio: [
    "Planetas","Estrellas","Agujeros negros","Cometas","Nebulosas","Galaxias","Astronautas","Telescopios",
    "Meteoritos","Constelaciones","Satélites","Exploración espacial","Estación Espacial","Rovers","Exoplanetas",
    "Supernovas","Agujeros de gusano","Materia oscura","Asteroides","Cinturón de Kuiper","Vía Láctea","Magnetosfera"
  ],
  Fantasía: [
    "Dragones","Elfos","Orcos","Magos","Hadas","Vampiros","Zombies","Fénix","Unicornios","Sirenas","Gigantes",
    "Enanos","Brujas","Demonios","Ángeles","Fantasma","Licántropos","Hobbits","Goblins","Genios","Espadas mágicas",
    "Amuletos","Pociones","Hechizos","Criaturas mágicas","Reinos","Castillos","Runas","Encantamientos"
  ],
  Historia: [
    "Egipto","Roma","Grecia","Mesopotamia","Edad Media","Renacimiento","Revolución Francesa","Guerras Mundiales",
    "Imperio Bizantino","Vikingos","Incas","Mayas","Aztecas","China Antigua","Japón Feudal","Genghis Khan",
    "Napoleón","Hitler","Lincoln","George Washington","Revoluciones","Imperios","Exploradores","Colonización","Guerras Civiles"
  ],
  Literatura: [
    "Cien Años de Soledad","Don Quijote","Hamlet","Romeo y Julieta","Moby Dick","Orgullo y Prejuicio","El Principito",
    "La Divina Comedia","Sherlock Holmes","Harry Potter","Percy Jackson","El Hobbit","El Señor de los Anillos",
    "Juego de Tronos","Crónica de una Muerte Anunciada","Ficciones","1984","El Gran Gatsby","Crimen y Castigo","Macbeth"
  ],
  PersonajesFamosos: [
    "Albert Einstein","Isaac Newton","Leonardo da Vinci","Galileo Galilei","Marie Curie","Frida Kahlo",
    "Pablo Picasso","Vincent Van Gogh","William Shakespeare","J.K. Rowling","Oprah Winfrey","Elon Musk",
    "Barack Obama","Nelson Mandela","Martin Luther King","Cristiano Ronaldo","Lionel Messi","Michael Jordan",
    "Beyoncé","Taylor Swift","Brad Pitt","Angelina Jolie","Johnny Depp","Keanu Reeves","Rihanna","Ariana Grande",
    "Shakira","David Beckham"
  ],
  Aleatorio: []
};
// Rellenar aleatorio
Object.keys(themes).forEach(cat => {
  if(cat !== "Aleatorio"){
    themes[cat].forEach(t => themes.Aleatorio.push(t));
  }
});

// ================= VARIABLES ==================
let players = [];
let currentIndex = 0;
let currentTheme = "";

// HTML
const numPlayersInput = document.getElementById('numPlayersSelect');
const numImpostorsInput = document.getElementById('numImpostors');
const categorySelect = document.getElementById('categorySelect');
const playerNamesDiv = document.getElementById('playerNames');
const startBtn = document.getElementById('startBtn');

// Pantallas
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
function createPlayerInputs(){
  playerNamesDiv.innerHTML = "";
  const num = parseInt(numPlayersInput.value);
  for(let i=0; i<num; i++){
    const input = document.createElement("input");
    input.type = "text";
    input.value = `Jugador ${i+1}`;
    input.id = `player${i}`;
    playerNamesDiv.appendChild(input);
  }
}
createPlayerInputs();
numPlayersInput.addEventListener("change", createPlayerInputs);


// Empezar juego
startBtn.addEventListener("click", ()=>{
  const numPlayers = parseInt(numPlayersInput.value);
  const numImpostors = parseInt(numImpostorsInput.value);

  if(numImpostors >= numPlayers){
    alert("Los impostores no pueden ser iguales o más que los jugadores");
    return;
  }

  players = [];
  for(let i=0; i<numPlayers; i++){
    const name = document.getElementById(`player${i}`).value.trim() || `Jugador ${i+1}`;
    players.push({ name, isImpostor:false, theme:"" });
  }

  // Mezclar orden
  players = players.sort(()=> Math.random() - 0.5);

  // Asignar impostores
  let impostorsAssigned = 0;
  while(impostorsAssigned < numImpostors){
    const idx = Math.floor(Math.random()*players.length);
    if(!players[idx].isImpostor){
      players[idx].isImpostor = true;
      impostorsAssigned++;
    }
  }

  // Tema
  let catThemes = themes[categorySelect.value];
  if(categorySelect.value === "Aleatorio") catThemes = themes.Aleatorio;

  const selectedTheme = catThemes[Math.floor(Math.random()*catThemes.length)];
  currentTheme = selectedTheme;

  players.forEach(p=>{
    if(!p.isImpostor) p.theme = selectedTheme;
  });

  setupDiv.style.display = "none";
  roleScreen.style.display = "block";

  currentIndex = 0;
  updateTurn();
});


// Cambiar turno
function updateTurn(){
  roleDisplay.style.display = "none";
  nextBtn.style.display = "none";
  showRoleBtn.style.display = "inline";
  turnText.innerText = `Turno de ${players[currentIndex].name}`;
}


// Mostrar rol
showRoleBtn.addEventListener("click", ()=>{
  const p = players[currentIndex];

  roleDisplay.style.display = "block";
  roleDisplay.innerText = p.isImpostor ? "IMPOSTOR" : `Tu tema: ${p.theme}`;

  showRoleBtn.style.display = "none";
  nextBtn.style.display = "inline";
});


// Siguiente jugador
nextBtn.addEventListener("click", ()=>{
  currentIndex++;
  if(currentIndex < players.length){
    updateTurn();
  } else {
    showSummary();
  }
});


// Resumen final
function showSummary(){
  roleScreen.style.display = "none";
  summaryScreen.style.display = "block";

  summaryList.innerHTML = "";

  players.forEach(p=>{
    const li = document.createElement("li");
    li.innerText = `${p.name} - ${p.isImpostor ? "IMPOSTOR" : p.theme}`;
    if(p.isImpostor) li.classList.add("impostor");
    summaryList.appendChild(li);
  });
}


// Terminar juego
endBtn.addEventListener("click", ()=> location.reload());
