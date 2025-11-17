:root{
  --bg:#f4f8ff;
  --card:#ffffff;
  --accent:#4e73ff;
  --accent2:#ff416c;
  --text:#222;
  --muted:#666;
  --success:#28a745;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:'Montserrat',sans-serif;
  background:var(--bg);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

/* App layout */
.app{max-width:960px;margin:18px auto;padding:12px}
.header{display:flex;justify-content:space-between;align-items:center;gap:12px}
.logo{display:flex;align-items:center;gap:12px;cursor:default}
.logo-icon{width:64px;height:64px;border-radius:14px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:30px;transform-origin:center;animation:float 3s ease-in-out infinite}
.logo-text h1{margin:0;font-size:20px;color:var(--accent)}
.logo-text .subtitle{margin:0;font-size:12px;color:var(--muted)}

/* Tiny toggles */
.toggles{display:flex;gap:8px}
.tiny-btn{padding:8px 10px;border-radius:10px;border:none;background:#eee;cursor:pointer}

/* Main */
.main{display:grid;grid-template-columns:1fr;gap:16px;margin-top:12px}
.card{background:var(--card);padding:16px;border-radius:14px;box-shadow:0 8px 30px rgba(30,50,80,0.08)}
h2{margin-top:0}

/* Form */
label{display:block;font-size:13px;color:var(--muted);margin-top:10px}
input[type="number"], select, input[type="text"]{
  width:100%;padding:10px;border-radius:10px;border:1px solid #ddd;margin-top:6px;font-size:15px;
}
.players-list .player-card{margin-top:8px}

/* Rows */
.row{display:flex;gap:10px}
.col{flex:1}
.controls-row{display:flex;gap:8px;margin-top:12px}
.controls-row button{flex:1;padding:12px;border-radius:12px;border:none;cursor:pointer}
.main-btn{background:linear-gradient(90deg,var(--accent),#355cff);color:white;font-weight:600}
.secondary-btn{background:#f1f3f8}
.red-btn{background:linear-gradient(90deg,#ff5c5c,#ff3b3b);color:white}

/* Hint */
.hint{display:block;color:var(--muted);margin-top:8px;font-size:13px}

/* TOP ROW (timer + card) */
.top-row{display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:12px}

/* Timer ring */
.timer-ring{width:120px;height:120px;position:relative}
.timer-ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.ring-bg{fill:none;stroke:#eee;stroke-width:8}
.ring-fg{fill:none;stroke:var(--accent2);stroke-width:8;stroke-dasharray:283;stroke-dashoffset:0;transition:stroke-dashoffset 0.3s linear}
.timer-text{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:var(--muted)}

/* Flip card */
.flip-card{width:300px;max-width:60vw;height:140px;perspective:1000px;cursor:pointer}
.flip-card-inner{position:relative;width:100%;height:100%;transition:transform 0.7s;transform-style:preserve-3d;border-radius:12px}
.flip-card.flip .flip-card-inner{transform:rotateY(180deg)}
.flip-card-front,.flip-card-back{
  position:absolute;inset:0;border-radius:12px;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;padding:12px;font-size:18px
}
.flip-card-front{background:linear-gradient(135deg,var(--accent),#6a11cb);color:white}
.flip-card-back{background:#111;color:#fff;transform:rotateY(180deg);font-weight:700}

/* Summary */
.summary-list{list-style:none;padding:0;margin:12px 0}
.summary-list li{padding:8px 10px;border-radius:8px;border:1px solid #eee;margin-bottom:8px}

/* Footer */
.footer{text-align:center;margin-top:10px;color:var(--muted);font-size:12px}

/* DARK MODE */
body.dark{background:#0e1220;color:#eee}
body.dark .card{background:#0f1724;box-shadow:0 8px 30px rgba(0,0,0,0.6)}
body.dark .tiny-btn{background:#1b2430;color:#fff}
body.dark .secondary-btn{background:#1b2430;color:#fff}

/* PARTY MODE: animated gradient background when body has .party */
@keyframes partyBG {
  0%{filter:hue-rotate(0deg)}
  25%{filter:hue-rotate(90deg)}
  50%{filter:hue-rotate(180deg)}
  75%{filter:hue-rotate(270deg)}
  100%{filter:hue-rotate(360deg)}
}
body.party .logo-icon{animation:party 2.6s linear infinite}
@keyframes party{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.08)}100%{transform:rotate(360deg) scale(1)}}

/* small devices */
@media (max-width:540px){
  .top-row{flex-direction:column}
  .flip-card{width:92%}
  .timer-ring{width:100px;height:100px}
}

/* float animation for logo */
@keyframes float {
  0%{transform:translateY(0)}
  50%{transform:translateY(-6px)}
  100%{transform:translateY(0)}
}
