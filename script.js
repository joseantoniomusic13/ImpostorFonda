const themes = {
 Deportes: [
    "Fútbol","Baloncesto","Tenis","Padel","Ciclismo","Boxeo","WWE","Natación","Atletismo","Golf",
    "Esgrima","Rugby","Hockey","Skate","Snowboard","Surf","Paracaidismo","Voleibol","Ping Pong","Karate",
    "Judo","Taekwondo","Motociclismo","Automovilismo","Triatlón","Remo","Escalada","Esquí","Patinaje","Carreras de caballos",
    "BMX","Lucha libre","Billar","Boliche","Golf Mini","Carreras de drones","Tiro con arco","Squash","Cricket",
    "Tenis de mesa","Esquí acuático","Kitesurf","Parapente","Curling","Biatlón","Halterofilia","Motocross","Triatlón de invierno","Snowkite",
    "Rafting","Fútbol americano","Handball","Softbol","Surf de remo","Fútbol sala","Skimboard","Parkour","Slackline","Polo"
  ],
  Música: [
    "Reggaetón","Trap","Flamenco","Rock","Pop","Electrónica","Techno","Clásica","Jazz","Hip-Hop",
    "Blues","Country","Salsa","Bachata","Funk","Metal","R&B","Disco","House","Dubstep",
    "K-Pop","Vocaloid","Folk","Opera","Grunge","Punk","Soul","Rap","Gospel","Reggae",
    "Indie","Bolero","Merengue","Cumbia","Electro Swing","Jazz Latino","Trap Español","Pop Español","Rock Español","Flamenco Fusión",
    "Cantautores","Música Experimental","New Age","Lo-Fi","Chillout","Afrobeat","Drum & Bass","Dancehall","Synthwave","Opera Rock"
  ],
  Series: [
    "Breaking Bad","La Casa de Papel","Stranger Things","The Walking Dead","Vikingos","Friends","The Office","Rick y Morty","Adventure Time","Los Simpsons",
    "Family Guy","How I Met Your Mother","Game of Thrones","Sherlock","Black Mirror","Dexter","The Mandalorian","The Witcher","Dark","Narcos",
    "The Boys","Westworld","Peaky Blinders","Umbrella Academy","Loki","WandaVision","Cobra Kai","Succession","Fargo","Mindhunter",
    "Lost","The Crown","Better Call Saul","Doctor Who","Mr. Robot","V","True Detective","Ozark","Sex Education","The Good Place",
    "Euphoria","Breaking Bad Spanish","El Internado","Gran Hotel","Merlí","Velvet","Élite","Alta Mar","La Peste","Toy Boy"
  ],
  Videojuegos: [
    "Fortnite","Minecraft","Call of Duty","GTA","FIFA","Zelda","Mario Bros","Pokémon","League of Legends","Among Us",
    "Roblox","Overwatch","Apex Legends","Valorant","Assassin's Creed","Resident Evil","The Sims","Cyberpunk","God of War","Halo",
    "Battlefield","Rocket League","Tetris","Street Fighter","Mortal Kombat","Animal Crossing","Final Fantasy","Metroid","Starcraft","Diablo",
    "Super Mario Odyssey","Splatoon","League of Legends Mobile","Clash Royale","Candy Crush","Pokémon Go","Hearthstone","Among Us VR","Genshin Impact","Fall Guys",
    "Valorant Mobile","Forza Horizon","Red Dead Redemption","Elden Ring","Dota 2","PUBG","Overcooked","The Legend of Zelda BOTW","Subnautica","Monster Hunter"
  ],
  Películas: [
    "Harry Potter","Star Wars","Avatar","Indiana Jones","Jurassic Park","El Señor de los Anillos","Matrix","The Avengers","Deadpool","Titanic",
    "Spiderman","Iron Man","Hulk","Thor","Capitán América","Black Panther","Doctor Strange","Wonder Woman","Aquaman","Joker",
    "Inception","Interstellar","Gladiator","Pirates of the Caribbean","Shrek","Toy Story","Frozen","Coco","The Lion King","Aladdin",
    "Moana","El Orfanato","Ocho Apellidos Vascos","Los Otros","Mar Adentro","Rec","Celda 211","Torrente","El Laberinto del Fauno","Volver",
    "La Piel que Habito","Intocable","El Gran Hotel Budapest","El Renacido","Mad Max","La La Land","Coco Chanel","El Niño","El Método","Campeones"
  ],
  Animales: [
    "Águilas","Leones","Tiburones","Dinosaurios","Gatos","Perros","Animales marinos","Elefantes","Jirafas","Tigres",
    "Lobos","Serpientes","Rinocerontes","Hipopótamos","Orcas","Delfines","Peces tropicales","Cocodrilos","Osos","Zorros",
    "Mapaches","Pingüinos","Canguros","Lémures","Nutrias","Búhos","Murciélagos","Caballos","Gorilas","Chimpancés",
    "Avestruz","Cisnes","Focas","Leones Marinos","Camellos","Pandas","Iguanas","Tortugas","Mono Araña","Cocodrilos del Nilo",
    "Ranas","Salamandras","Caracoles","Erizos","Ballenas","Orangutanes","Cheetah","Oso Polar","Lince","Búfalo"
  ],
  Ciencia: [
    "Física","Química","Biología","Matemáticas","Astronomía","Genética","Ecología","Robótica","Inteligencia Artificial","Nanotecnología",
    "Neurociencia","Ingeniería","Informática","Meteorología","Geología","Astrobiología","Psicología","Sociología","Antropología","Oceanografía",
    "Química Orgánica","Química Inorgánica","Biotecnología","Astrofísica","Electrónica","Telecomunicaciones","Ingeniería Biomédica","Ingeniería Aeroespacial","Cibernética","Bioquímica",
    "Climatología","Microbiología","Física Cuántica","Genómica","Biología Marina","Ingeniería Genética","Ingeniería Nuclear","Física de Partículas","Teoría de Cuerdas","Matemática Pura",
    "Neurotecnología","Nanomedicina","Psicología Experimental","Ecología Urbana","Ingeniería de Materiales","Bioinformática","Astronomía Observacional","Ingeniería Civil","Ingeniería de Software","Oceanografía Profunda"
  ],
  Arte: [
    "Pintura","Escultura","Fotografía","Dibujo","Graffiti","Arquitectura","Diseño Gráfico","Arte Digital","Caligrafía","Cerámica",
    "Origami","Collage","Performance","Arte Urbano","Diseño de Moda","Ilustración","Mosaico","Vidrieras","Tatuaje","Arte Conceptual",
    "Arte Abstracto","Pop Art","Arte Contemporáneo","Arte Renacentista","Cubismo","Surrealismo","Expresionismo","Impresionismo","Land Art","Street Art",
    "Diseño Industrial","Diseño de Interiores","Arte Kitsch","Arte Minimalista","Arte Neofigurativo","Arte Decorativo","Arte Figurativo","Arte Experimental","Arte Sonoro","Arte Cinético"
  ],
  Comida: [
    "Pizza","Hamburguesa","Tacos","Sushi","Chocolate","Helado","Frutas","Verduras","Postres","Bebidas",
    "Pasta","Risotto","Paella","Ceviche","Empanadas","Curry","Chili","Hot Dog","Panqueques","Waffles",
    "Donuts","Bebidas energéticas","Smoothies","Sopas","Ensaladas","Mariscos","Quesos","Carnes asadas","Bollería","Tapas",
    "Croquetas","Gazpacho","Salmorejo","Arepas","Falafel","Tortilla Española","Baguette","Burrito","Dim Sum","Bruschetta",
    "Sándwiches","Café","Té","Chocolate caliente","Mousse","Fondue","Cevapcici","Yakitori","Kebab","Ramen"
  ],
  Espacio: [
    "Planetas","Estrellas","Agujeros negros","Cometas","Nebulosas","Galaxias","Astronautas","Telescopios","Meteoritos","Constelaciones",
    "Satélites","Exploración espacial","Estación Espacial","Rovers","Exoplanetas","Supernovas","Agujeros de gusano","Materia oscura","Cinturón de asteroides","Vía Láctea",
    "Sistema Solar","Meteoros","Lunas","Asteroides","Cosmología","Física Espacial","Nebulosas Planetarias","Radiotelescopios","Microgravedad","Auroras Boreales",
    "Eclipses","Exploración Lunar","Marte","Júpiter","Saturno","Plutón","Venus","Mercurio","Urano","Neptuno"
  ],
  Fantasía: [
    "Dragones","Elfos","Orcos","Magos","Hadas","Vampiros","Zombies","Fénix","Unicornios","Sirenas",
    "Gigantes","Enanos","Brujas","Demonios","Ángeles","Fantasma","Licántropos","Hobbits","Goblins","Genios",
    "Espadas mágicas","Amuletos","Pociones","Hechizos","Runas","Trolls","Gárgolas","Elementales","Criaturas Mágicas","Caballeros",
    "Reinos Fantásticos","Castillos Encantados","Artefactos Legendarios","Círculos Mágicos","Dragones de fuego","Elfos Oscuros","Fantasmas del Bosque","Hechiceros","Sátiros","Sirenas Malvadas"
  ],
  Historia: [
    "Egipto","Roma","Grecia","Mesopotamia","Edad Media","Renacimiento","Revolución Francesa","Guerras Mundiales","Imperio Bizantino","Vikingos",
    "Incas","Mayas","Aztecas","China Antigua","Japón Feudal","Genghis Khan","Napoleón","Hitler","Lincoln","George Washington",
    "Alejandro Magno","Carlomagno","Juana de Arco","Cleopatra","Julio César","Leonardo da Vinci","Cristóbal Colón","Magallanes","Simón Bolívar","Napoleón Bonaparte",
    "Revolución Industrial","Revolución Rusa","Guerras Napoleónicas","Edad Moderna","Edad Contemporánea","Imperio Otomano","Imperio Español","Reino Unido Victoriano","Imperio Alemán","Imperio Ruso"
  ],
  Literatura: [
    "Cien Años de Soledad","Don Quijote","Hamlet","Romeo y Julieta","Moby Dick","Orgullo y Prejuicio","El Principito","La Divina Comedia","Sherlock Holmes","Harry Potter",
    "Percy Jackson","El Hobbit","El Señor de los Anillos","Juego de Tronos","Crónica de una Muerte Anunciada","La Sombra del Viento","Los Pilares de la Tierra","Drácula","Frankenstein","El Código Da Vinci",
    "Ana Karenina","Guerra y Paz","Fahrenheit 451","1984","El Gran Gatsby","Lolita","El Retrato de Dorian Gray","Cumbres Borrascosas","El Amor en los Tiempos del Cólera","Rayuela",
    "La Ciudad y los Perros","Pedro Páramo","La Casa de los Espíritus","Los Detectives Salvajes","El Laberinto de los Espíritus","Requiem por un Campesino Español","Don Juan Tenorio","El Aleph","Veinte Mil Leguas de Viaje Submarino","La Metamorfosis"
  ],
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
 // 👉 ORDEN ALEATORIO DE JUGADORES
  players = players.sort(() => Math.random() - 0.5);
  
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
