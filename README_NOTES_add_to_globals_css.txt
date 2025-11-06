/* Place these styles in app/globals.css if not already present.
   They ensure consistent spacing and clean cards.
*/
.band { padding-top: 1.25rem; padding-bottom: 1.25rem; }
@media (min-width: 768px){ .band { padding-top: 1.75rem; padding-bottom: 1.75rem; } }
.container { max-width: 1100px; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
.card { background: rgba(255,255,255,0.75); border: 1px solid rgba(0,0,0,0.08); border-radius: 1rem; backdrop-filter: blur(6px); }
html.dark .card { background: rgba(17,17,17,0.6); border-color: rgba(255,255,255,0.12); }
.btn-primary { display:inline-flex; align-items:center; justify-content:center; padding:.6rem 1rem; border-radius:.75rem; font-weight:600; background:#005C07; color:white; }
.btn-primary:hover { opacity:.95; }
.btn-outline { display:inline-flex; align-items:center; justify-content:center; padding:.55rem 1rem; border-radius:.75rem; font-weight:600; border:1px solid currentColor; }
