# DemosWebPortfolio

Landing pages de demostración por nicho — Riobamba, Ecuador.

Base de deploy: [`https://jefferxx.github.io/DemosWebPortfolio/`](https://jefferxx.github.io/DemosWebPortfolio/)

## Demos activas

| Demo | Nicho | Negocio | URL de demo | Estado |
|---|---|---|---|---|
| [demo-clinica-v2](demo-clinica-v2/) | Clínica médica | MEDICGAR | [Ver demo →](https://jefferxx.github.io/DemosWebPortfolio/demo-clinica-v2/) | ✅ Live |
| [demo-campus](demo-campus/) | Cafetería / Pub híbrido | Campus Coffee & Beer | [Ver demo →](https://jefferxx.github.io/DemosWebPortfolio/demo-campus/) | ✅ Live |
| [demo-city-fitness-v1](demo-city-fitness-v1/) | Gimnasio | City Fitness Riobamba | [Ver demo →](https://jefferxx.github.io/DemosWebPortfolio/demo-city-fitness-v1/) | ✅ Live |

> Para acceder a una demo específica usa la URL de la columna **URL de demo**, o cambia el último segmento: `.../demo-XXX/`

## Estructura del repositorio

```
DemosWebPortfolio/
├── demo-clinica-v2/        # MEDICGAR — clínica médica (light mode)
├── demo-campus/            # Campus Coffee & Beer — café/pub (dark mode)
├── demo-city-fitness-v1/   # City Fitness — gimnasio 2 sedes (dark mode)
└── index.html              # Portada del portfolio (lista las 3 demos)
```

## Stack técnico

- HTML5 semántico
- CSS3: Custom Properties, Grid, Flexbox, animaciones `@keyframes`
- Vanilla JS: IntersectionObserver, tabs, lightbox modal, counters animados
- Google Fonts (varía por demo: Outfit, Bebas Neue, Pacifico, Inter, Permanent Marker)
- Sin dependencias externas, sin frameworks
