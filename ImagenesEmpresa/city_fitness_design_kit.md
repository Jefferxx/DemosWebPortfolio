# UI Kit & Design System - City Fitness

Este documento define la guía de diseño visual y el UI Kit de **City Fitness**, desarrollado a partir del análisis detallado de la identidad de marca, material publicitario, logotipos e imágenes corporativas suministradas.

---

## 1. Identidad de Marca y Logotipo

La identidad visual de **City Fitness** es enérgica, moderna y de alto contraste (Dark Mode). Está diseñada para transmitir fuerza, disciplina y profesionalismo.

### Elementos Gráficos Clave
*   **Isotipo (Ícono):** Una mancuerna rusa (kettlebell) estilizada en cuyo interior se integra la letra **"C"** (representando *City*). Se utiliza en fondos oscuros.
    *   Archivo: `ImagenesEmpresa/city_fitness_logo_icono.jpeg`
*   **Imagotipo (Logotipo Completo):** El isotipo a la izquierda acompañado de la tipografía sans-serif gruesa **"CITY"** en azul y **"FITNESS"** espaciado en la base en color blanco.
    *   Archivo: `ImagenesEmpresa/city_fitness_logo_completo.jpeg`

---

## 2. Paleta de Colores (Color Palette)

El esquema de color principal utiliza una base ultra-oscura combinada con un acento de azul eléctrico de alta luminosidad (neón) y blanco puro para legibilidad.

```css
:root {
  /* Fondo principal y elementos oscuros */
  --bg-primary: #0a0b0d;      /* Negro azulado profundo (fondo general) */
  --bg-secondary: #121418;    /* Gris carbón oscuro (tarjetas y contenedores) */
  --bg-tertiary: #1b1e24;     /* Gris medio para bordes o estados hover */

  /* Colores de Acento (Electric Blue / Cyan) */
  --accent-blue: #00adef;     /* Azul eléctrico primario */
  --accent-blue-hover: #008ec4; /* Azul eléctrico en hover */
  --accent-blue-glow: rgba(0, 173, 239, 0.3); /* Brillo neón */

  /* Textos */
  --text-main: #ffffff;       /* Blanco puro para títulos y datos clave */
  --text-secondary: #9ea4b0;  /* Gris claro para subtítulos e información secundaria */
  --text-dark: #050608;       /* Negro para texto sobre fondos brillantes */

  /* Bordes y Líneas */
  --border-color: #22262f;    /* Borde sutil oscuro */
}
```

---

## 3. Tipografía (Typography)

Para reflejar la fuerza y dinamismo de un gimnasio, se propone la combinación de dos familias tipográficas de Google Fonts:

1.  **Títulos y Encabezados (Impacto / Fuerza):**
    *   **Tipografía Sugerida:** `Outfit` (Black / Bold con estilo itálico) o `Montserrat` (Extra Bold).
    *   **Estilo Alternativo (Rústico/Pincel):** Para secciones específicas de planes o promociones, se sugiere usar tipografías manuscritas o estilo *brush* (como `Permanent Marker` o `Bebas Neue` en itálico).
2.  **Cuerpo de Texto y Tablas (Legibilidad):**
    *   **Tipografía Sugerida:** `Inter` o `Roboto` (Medium / Regular).

```css
/* Ejemplo de Clases de Tipografía */
.font-display-heavy {
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: 0.05em;
}

.font-brush-accent {
  font-family: 'Permanent Marker', cursive;
  font-style: italic;
}

.font-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
```

---

## 4. Estilos de Diseño y Texturas

*   **Fondo de Alta Textura:** Utilizar un sutil ruido gris, textura de asfalto o fondo de fibra de carbono para simular la rudeza del entrenamiento.
*   **Bordes de Acento Eléctricos:** Las tarjetas y separadores suelen llevar líneas delgadas en azul eléctrico.
*   **Cintas de Advertencia (Warning Tape Style):** Uso recurrentes de cintas diagonales negras y azules con frases motivadoras: `"WORK HARD"`, `"NEW GYM"`.

---

## 5. Componentes de UI (UI Components)

### A. Cinta de Advertencia / Divisor Motivacional (Warning Tape)
Un divisor decorativo animado o estático que separa secciones de la página.

```html
<div class="warning-tape">
  <div class="tape-content">
    <span>WORK HARD</span> • <span>NEW GYM</span> • <span>NEW YEAR</span> • 
    <span>WORK HARD</span> • <span>NEW GYM</span> • <span>NEW YEAR</span>
  </div>
</div>
```

```css
.warning-tape {
  background: repeating-linear-gradient(
    -45deg,
    var(--bg-primary),
    var(--bg-primary) 20px,
    var(--accent-blue) 20px,
    var(--accent-blue) 40px
  );
  color: var(--text-main);
  padding: 12px 0;
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0 4px 15px var(--accent-blue-glow);
}

.tape-content {
  display: inline-block;
  animation: scroll-tape 15s linear infinite;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
}

@keyframes scroll-tape {
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}
```

---

### B. Tarjeta de Planes Personales (Pricing Card)
Basado en los planes reales de City Fitness:
*   *Mensual:* \$29.99
*   *2 Meses:* \$53.99
*   *3 Meses:* \$74.99
*   *5 Meses:* \$99.99
*   *Anual:* \$199.99

```html
<div class="pricing-card highlighted">
  <div class="badge">Más Popular</div>
  <h3 class="plan-title">Plan 5 Meses</h3>
  <div class="plan-price">
    <span class="currency">$</span>
    <span class="amount">99,99</span>
  </div>
  <p class="price-detail">Equivale a $19,99 por mes</p>
  <ul class="plan-features">
    <li>✓ Entrenamiento Guiado Incluido</li>
    <li>✓ Acceso a Sede Norte y Sede Centro</li>
    <li>✓ Atención de Lunes a Domingo</li>
  </ul>
  <button class="btn-primary">Inscribirse Ahora</button>
</div>
```

```css
.pricing-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-blue);
  box-shadow: 0 10px 25px var(--accent-blue-glow);
}

.pricing-card.highlighted {
  border: 2px solid var(--accent-blue);
  box-shadow: 0 5px 20px rgba(0, 173, 239, 0.15);
}

.plan-title {
  color: var(--text-main);
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.plan-price {
  color: var(--accent-blue);
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 5px;
}

.plan-price .currency {
  font-size: 1.8rem;
  vertical-align: super;
}

.price-detail {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 25px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: left;
}

.plan-features li {
  color: var(--text-main);
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.btn-primary {
  background-color: var(--accent-blue);
  color: var(--text-dark);
  font-weight: 700;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--accent-blue-hover);
  transform: scale(1.02);
}
```

---

### C. Horario Semanal (Schedule Grid)
El horario sigue un esquema tabular de franjas y disciplinas (Bailoterapia, Funcional, Spinning):

```html
<table class="schedule-table">
  <thead>
    <tr>
      <th>Día</th>
      <th>Mañana</th>
      <th>Tarde / Noche</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lunes</td>
      <td><span class="class-tag bailo">Bailoterapia (7AM - 8AM)</span></td>
      <td>
        <span class="class-tag funcional">Funcional (6:30PM - 7:30PM)</span>
        <span class="class-tag bailo">Bailoterapia (7PM - 8PM)</span>
      </td>
    </tr>
    <tr>
      <td>Martes</td>
      <td><span class="class-tag funcional">Funcional (7AM - 8AM)</span></td>
      <td>
        <span class="class-tag funcional">Funcional (6:30PM - 7:30PM)</span>
        <span class="class-tag bailo">Bailoterapia (7PM - 8PM)</span>
      </td>
    </tr>
    <tr>
      <td>Miércoles</td>
      <td><span class="class-tag bailo">Bailoterapia (7AM - 8AM)</span></td>
      <td>
        <span class="class-tag funcional">Funcional (6:30PM - 7:30PM)</span>
        <span class="class-tag bailo">Bailoterapia (7PM - 8PM)</span>
      </td>
    </tr>
    <tr>
      <td>Jueves y Viernes</td>
      <td><span class="class-tag spin">Spinning (7AM - 8AM)</span></td>
      <td><span class="class-tag spin">Spinning (7PM - 8PM)</span></td>
    </tr>
  </tbody>
</table>
```

```css
.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  overflow: hidden;
}

.schedule-table th, .schedule-table td {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.schedule-table th {
  background-color: var(--bg-tertiary);
  color: var(--accent-blue);
  font-weight: 700;
  text-transform: uppercase;
}

.schedule-table td {
  color: var(--text-main);
}

.class-tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 4px;
}

.class-tag.bailo {
  background-color: rgba(0, 173, 239, 0.15);
  color: var(--accent-blue);
  border: 1px solid var(--accent-blue);
}

.class-tag.funcional {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--text-main);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.class-tag.spin {
  background-color: rgba(0, 173, 239, 0.25);
  color: #ffffff;
  border: 1px solid var(--accent-blue);
}
```

---

## 6. Pautas de Layout y Secciones

1.  **Modo Oscuro Predeterminado:** Evitar fondos blancos. La atmósfera debe ser nocturna y enfocada.
2.  **Efectos de Brillo (Glow Effects):** Usar `box-shadow` sutiles con tonalidad celeste en elementos interactivos o botones para reforzar el aspecto premium.
3.  **Secciones Recomendadas para la Web:**
    *   **Hero Section:** Imagen de fondo oscura del gimnasio con el logotipo completo en el centro y botón llamativo de "Inscríbete".
    *   **Ubicación (Sedes):** Listado de la Sede Norte y Sede Centro con mapas y fotos de la fachada.
    *   **Tarifas y Membresías:** Grilla de 3 o 5 columnas con los planes mensuales, semestrales y anuales.
    *   **Horarios:** Tablas responsivas interactivas para las clases.
