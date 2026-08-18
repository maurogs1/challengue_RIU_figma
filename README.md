# Proyecto
Challenge RIU Maquetador
Maqueta del Figma con Angular 21 y Tailwind 4, son tres secciones: intro, catálogo y galería


# Requisitos
Node >= 20

npm install
npm start       http://localhost:4200


# Tests

npm test


# BREAKPOINTS

El Figma trae 3 pages pero eso son 2 saltos (tablet y desktop) ya que lo hice con mobile first, así que usé dos breakpoints nada más. Y quité los que vienen por defecto en Tailwind para utilizar unicamente los del figma


# CARDS Y TEXTOS

Entre mobile y desktop cambiaba la cantidad de cards y el largo del lorem ipsum. Para no meter lógica extra dejé las 6 de desktop, que funcionan igual en mobile y un solo texto para los tres tamaños


# TOKENS
Los valores que se repetían los pasé a @theme en styles.css, el ancho del contenido y las escalas de título.


# ACCESIBILIDAD
El descargar de la galería es un <a> así se puede usar con teclado, y el carrusel tiene role region y aria-label para poder scrollearlo sin mouse.
Los íconos van con alt vacío y las imágenes de contenido con descripción.
El botón del intro lo dejé en 44px en vez de los 40 del Figma para llegar al mínimo de área táctil
