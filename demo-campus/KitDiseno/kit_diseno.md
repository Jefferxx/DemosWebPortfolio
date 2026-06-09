# Design Kit & Design System: Campus - Coffee & Beer

Este documento sirve como la **especificación técnica de diseño (Design System / Design Kit)** para la maquetación y desarrollo de la landing page de **Campus - Coffee & Beer**. Está estructurado siguiendo estándares de nivel Senior para facilitar la transición directa a CSS (Custom Properties), Tailwind o herramientas de prototipado como Figma.

---

## 1. Concepto y Dirección Creativa

*   **Identidad:** "Campus" es un concepto híbrido que opera como cafetería acogedora durante el día y como un pub/cervecería vibrante por la noche.
*   **Tono de Voz Visual:** Rústico pero limpio, artesanal, acogedor, enérgico y nocturno.
*   **Estrategia UI:** Un diseño oscuro (Dark-first) con alto contraste provisto por pinceladas expresivas en amarillo ámbar y tipografías con textura rústica.

---

## 2. Design Tokens (Fichas de Diseño)

### A. Paleta de Colores (Color System)
La paleta está optimizada para soportar un modo de luz dual (Día/Café y Noche/Cerveza), siendo el **Azul Marino Profundo** el color de fondo base (Dark Mode por defecto).

```css
:root {
  /* Brand Colors */
  --color-primary-gold:      hsl(43, 100%, 50%);    /* #FFB800 - Amarillo Logo y Acentos */
  --color-primary-amber:     hsl(36, 100%, 48%);    /* #F59E0B - Trazos de pintura y hover */
  --color-secondary-navy:    hsl(227, 66%, 7%);     /* #060B1E - Fondo general / Canvas */
  --color-secondary-surface: hsl(227, 45%, 12%);    /* #111827 - Tarjetas y componentes */
  
  /* Neutral Colors */
  --color-text-primary:      hsl(0, 0%, 100%);      /* #FFFFFF - Títulos y precios */
  --color-text-secondary:    hsl(215, 20%, 65%);    /* #94A3B8 - Descripciones de platos */
  --color-text-muted:        hsl(215, 16%, 47%);    /* #64748B - Notas pequeñas / deshabilitado */
  --color-border:            hsl(227, 30%, 18%);    /* #1F2937 - Bordes sutiles y divisores */

  /* Functional Colors */
  --color-success:           hsl(142, 72%, 29%);    /* #166534 - Platos recomendados / disponible */
  --color-danger:            hsl(0, 72%, 51%);      /* #DC2626 - Picantes / Alérgenos */
}
```

---

### B. Sistema Tipográfico (Typography)
Se proponen tipografías de **Google Fonts** gratuitas y de alta calidad para replicar el estilo rústico de las gráficas impresas:

| Rol tipográfico | Familia Sugerida | Estilo / Peso | Ejemplo de Uso en CSS |
| :--- | :--- | :--- | :--- |
| **Marca / Acentos** | **Pacifico** o **Yellowtail** | Cursiva (`400`) | `font-family: 'Pacifico', cursive;` |
| **Títulos de Menú** | **Rye** o **Rubik Mono One** o **Impact** | Distressed/Heavy (`900`) | `font-family: 'Impact', sans-serif; letter-spacing: 0.05em;` |
| **Títulos UI / Subtítulos** | **Outfit** o **Montserrat** | Bold / Semibold (`700`, `600`) | `font-family: 'Outfit', sans-serif; font-weight: 700;` |
| **Cuerpo / Descripciones**| **Inter** o **Roboto** | Regular / Medium (`400`, `500`) | `font-family: 'Inter', sans-serif; line-height: 1.6;` |

#### Escala de Fuentes (Type Scale)
*   **Display 1 (Hero Title):** `3.5rem` (56px) / Line-height: `1.1` (Mobile: `2.5rem`)
*   **H1 (Títulos de Sección):** `2.5rem` (40px) / Line-height: `1.2` (Mobile: `2rem`)
*   **H2 (Títulos de Menú/Categoría):** `1.75rem` (28px) / Line-height: `1.3`
*   **H3 (Nombres de Platos):** `1.125rem` (18px) / Line-height: `1.4`
*   **Body (Descripciones):** `0.95rem` (15px) / Line-height: `1.6`
*   **Caption (Notas/Precios):** `0.85rem` (13.5px) / Line-height: `1.4`

---

### C. Espaciado y Rejilla (Layout & Spacing Scale)
Basado en un sistema multiplicador de **8px** para mantener la consistencia en el layout:

*   `--space-xs`: `0.25rem` (4px)
*   `--space-sm`: `0.5rem` (8px)
*   `--space-md`: `1rem` (16px)
*   `--space-lg`: `1.5rem` (24px)
*   `--space-xl`: `2rem` (32px)
*   `--space-xxl`: `3rem` (48px)
*   `--space-huge`: `4rem` (64px)

---

### D. Bordes y Sombras (Elevations & Borders)
Para lograr un look moderno de "neón sutil" y profundidad sobre el fondo oscuro:

```css
:root {
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows (Depth) */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.8), 0 4px 6px -2px rgba(0, 0, 0, 0.5);
  
  /* Glow Effect (Neón Amarillo) para elementos seleccionados/botones activos */
  --glow-primary: 0 0 12px hsla(43, 100%, 50%, 0.4);
}
```

---

## 3. Componentes de UI y Estados Interactivos

### A. Botones (Buttons)

1.  **Botón Primario (Llamados a la Acción principales, ej: "Pedir por WhatsApp"):**
    *   **Fondo:** `--color-primary-gold`
    *   **Texto:** `--color-secondary-navy` (Negrita, `font-weight: 700`)
    *   **Borde:** Ninguno
    *   **Hover state:** Fondo `--color-primary-amber`, añadir `--glow-primary`, transición suave de `0.2s ease-in-out`.
    *   **Active state:** Escalar ligeramente a `0.97` en el clic (`transform: scale(0.97)`).

2.  **Botón Secundario (Filtros, pestañas inactivas):**
    *   **Fondo:** Transparente
    *   **Texto:** `--color-text-primary`
    *   **Borde:** `1px solid var(--color-border)`
    *   **Hover state:** Fondo `--color-secondary-surface`, borde `--color-primary-gold`.

---

### B. Tarjetas del Menú (Menu Cards)
*   **Fondo:** `--color-secondary-surface`
*   **Borde:** `1px solid var(--color-border)`
*   **Padding:** `--space-lg` (24px)
*   **Diseño:**
    *   Fila superior: Nombre del plato (`--color-text-primary`, negrita) y precio (`--color-primary-gold`, estilo manuscrito o destacado).
    *   Fila media: Descripción del plato (`--color-text-secondary`).
    *   Fila inferior: Etiquetas opcionales (ej: "Popular" en verde, "Picante" en rojo).
*   **Hover state:** Desplazamiento vertical hacia arriba de 4px (`transform: translateY(-4px)`), cambio de borde a `--color-primary-gold` y sombra a `--shadow-lg`.

---

### C. Sistema de Pestañas del Menú (Tabs)
Dado que el menú es extremadamente amplio (desayunos, almuerzos, comida rápida, bebidas, cócteles, cafetería), un menú continuo saturaría la página. Se especifica un sistema de navegación por pestañas con scroll horizontal táctil para móviles.

*   **Pestañas Activas:** Fondo dorado, texto marino.
*   **Pestañas Inactivas:** Borde gris, texto blanco.

---

## 4. Recursos Visuales Reutilizables (Assets)

Los siguientes recursos ya se encuentran en la carpeta de assets renombrados para su uso directo en código:

### Logotipos e Informativos
*   **Logotipo Oficial (Fondo Transparente):**
    *   Archivo: [logo_campus.png](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/logo_campus.png)
*   **Gráfica Informativa de Conexión WiFi:**
    *   Archivo: [informacion_wifi.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/informacion_wifi.jpg)

### Portadas de Sección
Ideal para fondos de cabecera de las secciones correspondientes:
*   **Sección Bebidas:** [portada_bebidas.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/portada_bebidas.jpg)
*   **Sección Menú/Comida:** [portada_menu_comida.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/portada_menu_comida.jpg)
*   **Sección Cafetería:** [portada_cafeteria.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/portada_cafeteria.jpg)

### Archivos de Menú (Hojas de Carta)
Hojas de menú originales para referencia de precios o descarga del usuario:
*   [menu_desayunos.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_desayunos.jpg)
*   [menu_cafeteria.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_cafeteria.jpg)
*   [menu_almuerzos.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_almuerzos.jpg)
*   [menu_papas_fritas.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_papas_fritas.jpg)
*   [menu_hamburguesas_hot_dogs.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_hamburguesas_hot_dogs.jpg)
*   [menu_alitas_costillas.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_alitas_costillas.jpg)
*   [menu_ensaladas_nachos.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_ensaladas_nachos.jpg)
*   [menu_platos_especiales.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_platos_especiales.jpg)
*   [menu_bebidas_sin_alcohol.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_bebidas_sin_alcohol.jpg)
*   [menu_bebidas_granizados.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_bebidas_granizados.jpg)
*   [menu_bebidas_cervezas.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_bebidas_cervezas.jpg)
*   [menu_bebidas_cocteles.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_bebidas_cocteles.jpg)
*   [menu_bebidas_con_alcohol.jpg](file:///C:/Users/jeffe/Documents/Freelancing/Projects_Freelance/DisenoWeb/Demos/Restaurante/Imagenes/menu_bebidas_con_alcohol.jpg)

---

## 5. Pautas de Diseño de Experiencia de Usuario (UX)

1.  **Día vs Noche (Modo Dual):**
    *   Por defecto, si la hora local del usuario es entre las **07:00 y las 16:59**, cargar un modo de fondo ligeramente más cálido (usando madera clara u tonos sepia de café de fondo).
    *   Si es entre las **17:00 y las 06:59**, activar por defecto el modo oscuro profundo de bar y luces de neón amarillas.
    *   Proporcionar un toggle flotante en la esquina inferior derecha para alternar este modo manualmente con una animación de transición de CSS.
2.  **Llamadas a la Acción directas (CTA):**
    *   Debe haber un botón flotante y permanente de **Pedidos a WhatsApp** en móviles.
    *   Un acceso rápido para descargar el menú completo en PDF.
3.  **Animaciones de Entrada (Micro-animations):**
    *   Los platos del menú interactivo deben entrar con una animación de *fade-in* y un pequeño desplazamiento hacia arriba (*slide-up*) al seleccionarse una pestaña.
    *   El trazo diagonal amarillo en el Hero Section debe deslizarse lateralmente simulando una pincelada al cargar la web.
