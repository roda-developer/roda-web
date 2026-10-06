/**
 * The whole site copy, in English. Adapted (not translated word for word) from guion.ts: same shape, same jokes, written
 * the way an English speaker would say it. {placeholders} are filled in with rellenar().
 */
import type * as ES from './guion';

export const loader: typeof ES.loader = {
  frase: 'Every brand starts with a story.',
  presenta: 'Roda presents',
};

export const metas: typeof ES.metas = {
  inicio: { titulo: 'Roda — Web studio', descripcion: 'Websites that tell a story. Roda is Giuliana and Facundo: custom web design and development, from Buenos Aires to the world.' },
  precios: { titulo: 'Pricing — Roda', descripcion: 'Landing page US$ 300, Multi-page site US$ 400, Online store US$ 550. Open each folder and see what’s inside.' },
  contacto: { titulo: 'Contact — Roda', descripcion: 'Tell us what you need: a landing page, a multi-page site, an online store or a custom system. We’ll get back to you soon.' },
  nosotros: { titulo: 'About — Roda', descripcion: 'Roda is Giuliana and Facundo: partners in life and work, web developers from Buenos Aires.' },
  proyectos: { titulo: 'Work — Roda', descripcion: 'Websites we made: MUDA, Emme Digital, Eber, Craft Studio, Fidalgo Select and Unik.' },
  privacidad: { titulo: 'Privacy — Roda', descripcion: 'What data Roda keeps when you write to us, and what we use it for.' },
  caso: '{titulo} — Roda',
  error: 'Page not found — Roda',
  empresa: 'Web design and development studio from Buenos Aires, working with clients all over the world: landing pages, multi-page sites and online stores.',
};

export const ui: typeof ES.ui = {
  principal: 'Main',
  navegacion: 'Menu',
  abrirMenu: 'Open menu',
  cerrarMenu: 'Close menu',
  volverInicio: 'Roda, back to home',
  estudio: 'Roda — Web studio',
  desde: 'From Buenos Aires to the world',
  idioma: 'Language',
  creditosPie: 'Credits',
  escribinos: 'Write to us',
  seguinos: 'Follow us',
  mira: 'See',
  contacto: 'Contact',
  privacidad: 'Privacy',
  traducido: 'Translated from Spanish',
  postCreditos: 'Post-credits scene',
  actoUno: 'Act one: first impressions',
  giro: 'The twist',
  technicolor: 'Technicolor: sometimes more is more',
  mas: 'more',
  acto: 'Act',
  parte: 'Part',
  estreno: 'Your premiere',
};

export const nav: typeof ES.nav = {
  proyectos: 'Work',
  nosotros: 'About',
  precios: 'Pricing',
  atajo: 'Let’s talk',
};

export const apertura: typeof ES.apertura = {
  titulo: ['Your brand already', 'has a story.'],
  enfasis: ['has a ', 'story.'],
  bajada: 'Now tell it where people look for you.',
  queHacemos: 'Web design and development studio · From Buenos Aires to the world',
  verPrecios: 'See pricing →',
};

export const actoUno: typeof ES.actoUno = {
  rotulo: ['01', 'First impressions'],
  lineas: ['Someone hears about you and looks you up.', 'What they find decides whether they get in touch.'],
  golpe: ['They don’t read.', 'They look.'],
  generica: {
    marca: 'Your Brand',
    menu: ['Home', 'About', 'Services', 'Contact'],
    titulo: 'Welcome to our website',
    texto: 'We are a leading company committed to excellence and quality in every one of our services.',
    boton: 'Learn more',
  },
  encuentra: 'What they usually find:',
  notas: ['A template a thousand other brands use.', 'A stock photo.', '“Learn more”… about what?'],
  cuenta: 'seconds to decide',
  cierre: ['And they leave.', 'You didn’t lose a visit.', 'You lost a client.'],
  cierreEnfasis: ['You lost a ', 'client.'],
};

export const actoDos: typeof ES.actoDos = {
  rotulo: ['02', 'What a good website does'],
  titulo: 'A good website does three things.',
  planos: [
    { titulo: 'It makes sense instantly.', texto: 'What you do and why you, before anyone has to look for it.' },
    { titulo: 'It loads before you blink.', texto: 'With every second of waiting, someone leaves.' },
    { titulo: 'It leads to one place.', texto: 'A website that asks for everything gets nothing.' },
  ],
  pesa: 'This page weighs',
  poco: 'very little',
};

export const giro: typeof ES.giro = {
  cita: 'Less is more.',
  autor: 'Ludwig Mies van der Rohe',
  replica: '…sometimes.',
};

export const technicolor: typeof ES.technicolor = {
  grito: ['And sometimes', 'more', 'is more.'],
  letras: ['M', 'O', 'RE'],
  cinta: ['More color', 'More noise', 'More you', 'More nerve', 'More brand'],
  firma: 'Some we made',
  verTodos: 'See all our work',
  corte: ['The secret isn’t picking a style.', 'It’s knowing which one your brand needs.'],
  corteEnfasis: ['It’s knowing which one your ', 'brand needs.'],
  webDe: '{titulo} website',
};

export const actoTres: typeof ES.actoTres = {
  rotulo: ['03', 'How we work'],
  titulo: 'From idea to website, in five steps.',
  pasos: [
    { nombre: 'We listen.', cine: 'Script', texto: 'Your brand, who you’re talking to and what you want to happen when someone arrives.' },
    { nombre: 'We show you how it’ll look.', cine: 'Storyboard', texto: 'You see every screen before it exists.' },
    { nombre: 'We build it.', cine: 'Shooting', texto: 'Custom-made, no templates. Fast and light.' },
    { nombre: 'We launch it.', cine: 'Premiere', texto: 'It goes out into the world, ready to be found.' },
    { nombre: 'And we stay with you.', cine: 'And after', texto: 'We look after it and help it grow. And the messages start coming in.' },
  ],
  obra: {
    notas: ['Brand: yours', 'Talks to: people looking for what you do', 'Goal: get them to write'],
    marca: 'Your brand',
    titular: 'What you do, in one line.',
    bajada: 'And why they should choose you.',
    boton: 'Write to us',
    url: 'yourbrand.com',
    enLinea: 'Live',
    mensaje: ['New message', 'Hi! I saw your website and I’d like to ask…'],
  },
};

export const proyectosPagina: typeof ES.proyectosPagina = {
  titulo: 'Selected work',
  bajada: 'Each one made to measure for its brand. Here are some of the ones we’ve made.',
  pregunta: 'What do you do?',
  ayuda: 'Pick your industry and we’ll show you the closest work first.',
  todos: 'All',
  cerca: 'Close to yours',
  verCaso: 'See the case',
  verEnVivo: 'See it live',
  otraPestana: '(opens in a new tab)',
  siguiente: 'Next project',
  volverAtras: 'Back',
  enCelular: '(On mobile)',
  portadaDe: '{titulo} website, home page',
  pantallaDe: '{titulo}, screen {n}',
  celularDe: '{titulo} on mobile',
  mostrandoPrimero: 'Showing {rubro} projects first',
  ficha: { rubro: 'Industry', anio: 'Year', rol: 'What we did', genero: 'What it is' },
  secciones: { cliente: 'The client', desafio: 'The challenge', solucion: 'What we did', destacados: 'Details', resultado: 'Result' },
  afiche: { estreno: 'Premiere 2026', pantallas: 'On every screen' },
};

export const rubros: typeof ES.rubros = {
  gastronomia: 'Food & drink',
  moda: 'Fashion',
  salud: 'Health & wellness',
  servicios: 'Professional services',
  arte: 'Art & design',
  otro: 'Other',
};

export const creativos: typeof ES.creativos = {
  pregunta: 'Do you design or manage brands?',
  cta: 'Let’s work together',
  mensaje: 'I design or manage brands and I’d like to work with Roda.',
};

export const creditos: typeof ES.creditos = {
  intro: 'Roda is',
  nombres: [
    { nombre: 'Giuliana', rol: 'Direction · Development' },
    { nombre: 'Facundo', rol: 'Direction · Development' },
  ],
  y: 'and',
  lema: ['Partners in life and work.', 'One shared vision.'],
  ficha: [
    ['Design and development', 'Giuliana and Facundo'],
    ['Made', 'By hand, no templates'],
    ['Running time', 'As long as you scroll'],
  ],
};

export const cierre: typeof ES.cierre = {
  rotulo: ['05', 'The premiere'],
  pregunta: 'What’s your brand called?',
  ayuda: 'Type it in and see your premiere poster.',
  placeholder: 'Your brand',
  cta: 'Let’s talk',
  descargar: 'Download poster',
  estiloEtiqueta: 'Style',
  estilos: { estreno: 'Premiere', cartel: 'Billboard', autor: 'Auteur' },
  colorEtiqueta: 'Color',
  colores: { rosa: 'Pink', amarillo: 'Yellow', azul: 'Blue', rojo: 'Red', verde: 'Green' },
  compartir: 'Share',
  alternativa: 'or write to us at',
  formulario: 'Or tell us more in the form →',
  mail: {
    asunto: 'The story of {marca}',
    asuntoSinMarca: 'My story',
    cuerpo: "Hi Roda, I'm from {marca}. We want to start telling our story.",
    cuerpoSinMarca: 'Hi Roda, I want to tell you my story.',
  },
  descripcion: 'Premiere poster: Roda presents {marca}. {antes}. {genero}{estreno} {soloEn} {dominio}.',
  afiche: {
    presenta: 'presents',
    antes: 'A story we haven’t told yet',
    historiaPara: 'A story to get people to {objetivo}',
    paraQue: { escriba: 'write to you', compre: 'buy from you', reserve: 'book with you', vea: 'see your work' },
    reestreno: 'Re-release',
    genero: 'Genre',
    vacio: 'Your brand',
    creditos: [
      ['A production by', 'Roda'],
      ['Directed by', 'you'],
      ['Screenplay', 'your story'],
      ['Design and development', 'Giuliana and Facundo'],
      ['With a special appearance by', 'your clients'],
    ],
    proximamente: 'Coming soon',
    soloEn: 'only at',
    dominio: 'yourbrand.com',
  },
  postCreditos: 'If you made it this far, you know we love a good ending. Let’s start yours.',
};

export const planes: typeof ES.planes = {
  moneda: 'US$',
  lista: [
    { id: 'landing', nombre: 'Landing', precio: 300, incluye: 'A single page. Ideal if you’re starting out or launching something specific.' },
    { id: 'multiseccion', nombre: 'Multi-page', precio: 400, incluye: 'Up to 5 pages. Ideal if you have several services or projects to show.' },
    { id: 'tienda', nombre: 'Store', precio: 550, incluye: 'Cart and payment gateway. Ideal if you sell products.' },
  ],
  todas: ['Original design', 'Unlimited changes', 'Live in 1 to 2 weeks', 'Optional maintenance from US$ 20/month'],
  verTodo: 'See what each plan includes',
  adicionales: {
    rotulo: 'Add-ons',
    titulo: 'Add whatever you need.',
    lista: [
      { nombre: 'Your own dashboard', detalle: 'Upload your projects, products and news without depending on anyone', precio: 150 },
      { nombre: 'Bookings', detalle: 'People book on their own, at any time', precio: 100 },
      { nombre: 'Another language', detalle: 'Your website in Spanish too, or whichever you need', precio: 100 },
    ],
  },
  aMedida: {
    rotulo: 'Custom',
    titulo: 'Doesn’t fit in any folder?',
    texto: 'We build custom systems: what you handle today by hand, in a spreadsheet or over messages, turned into a tool for your business. Also websites with more than 10 pages. We think it through together and send you a quote.',
    ejemplosTitulo: 'For example (tap the ones that sound like yours)',
    ejemplos: [
      'Bookings with deposits and reminders',
      'Stock and sales for your shop',
      'Quotes that build themselves',
      'Wholesale orders',
      'Booking courts, rooms or equipment',
      'Managing students, members or patients',
      'A portal for clients to track their order',
      'A dashboard with your business numbers',
    ],
    cta: 'Tell us what you need',
  },
  dominio: {
    pregunta: 'What about the domain and hosting?',
    respuestas: [
      'You buy the domain (yourbrand.com) and it stays in your name. We guide you through it.',
      'Hosting, where your website lives, is free in most cases. If your project needs more, we tell you before we start.',
    ],
  },
};

export const preciosPagina: typeof ES.preciosPagina = {
  rotulo: 'Pricing',
  titulo: ['What your', 'premiere costs.'],
  bajada: 'Prices up front, no fine print. Open each folder.',
  rotulos: {
    planes: ['01', 'The plans'],
    extras: ['02', 'Add-ons'],
    preguntas: ['03', 'Questions'],
  },
  queTrae: 'What {plan} includes',
  defineElPlan: 'What defines the plan',
  precio: 'Price: {moneda} {precio}',
  fichas: {
    landing: { ideal: 'Ideal if you’re starting out or launching something specific.', clave: ['1 page'], mantenimiento: 20 },
    multiseccion: { ideal: 'Ideal if you have several services or projects to show.', clave: ['Up to 5 pages', 'Extra page US$ 30'], mantenimiento: 25 },
    tienda: { ideal: 'Ideal if you sell products.', clave: ['Cart', 'Payment gateway'], mantenimiento: 35 },
  },
  mantenimiento: {
    linea: 'Optional maintenance: US$ {precio}/month',
  },
  creditos: {
    titulo: 'Every plan includes',
    lista: [
      ['Design', 'Original, made by hand'],
      ['Screens', 'Phone, tablet and computer'],
      ['Contact', 'WhatsApp button'],
      ['Changes', 'Unlimited, until you love it'],
      ['Premiere', 'In 1 to 2 weeks'],
      ['Hosting', 'Free in most cases'],
      ['Google', 'Indexing and technical SEO'],
    ],
    aviso: 'No website on this bill comes with fine print.',
  },
  moneda: {
    tipo: '',
    etiqueta: '',
    hoy: '',
    cotizacion: '',
  },
  pedir: 'I want this one',
  carpetas: {
    landing: [{ id: 'inicio', nombre: 'Home' }],
    multiseccion: [
      { id: 'inicio', nombre: 'Home' },
      { id: 'servicios', nombre: 'Services' },
      { id: 'mas', nombre: '+3', etiqueta: 'Three more pages' },
    ],
    tienda: [
      { id: 'catalogo', nombre: 'Catalog' },
      { id: 'carrito', nombre: 'Cart', carrito: true },
    ],
  },
  preguntas: [
    { p: 'Do I have to pay anything monthly?', r: ['No. You pay for your website once. Hosting is free in most cases, and the domain (yourbrand.com) renews once a year, in your name.', 'If you’d like us to keep updating your website, there’s a fully optional monthly maintenance: Landing US$ 20, Multi-page US$ 25 and Store US$ 35, with up to 4 changes a month. No commitment: cancel whenever you want.'] },
    { p: 'How do I pay?', r: ['Half when we start and the other half when we deliver your website. In US dollars, by international transfer or the method we agree on.'] },
    { p: 'What if I don’t like how it looks?', r: ['We change it. There’s no limit on rounds of changes: we work until it’s perfect for you.'] },
    { p: 'Do I need to have the copy and photos?', r: ['Ideally, yes: nobody tells your brand’s story better than you. If you don’t have them, we can use images from the internet and write the copy with artificial intelligence.'] },
    {
      p: 'Will I show up first on Google?',
      r: [
        'Not right away, and be wary of anyone who promises it. What we do is technical SEO and indexing: your site launches fast, with titles and descriptions built for Google, and we register it so Google knows it exists.',
        'That’s the foundation, but it won’t rank on its own. Climbing in searches like “bakery near me” takes time, content and, often, advertising.',
      ],
    },
    { p: 'What about the domain and hosting?', r: planes.dominio.respuestas },
    { p: 'Can I update the website myself?', r: ['Yes, if you add Your own dashboard: you upload your projects, products and news without depending on anyone. And if you’d rather we do it, there’s the optional maintenance.'] },
  ],
  final: {
    titulo: 'Shall we start?',
    texto: 'Tell us about your brand and we’ll tell you which folder suits you.',
    cta: 'Let’s talk',
  },
};

export const contactoPagina: typeof ES.contactoPagina = {
  rotulo: 'Contact',
  titulo: ['Tell us', 'your story.'],
  bajada: 'It takes two minutes. With this, we come to the call already knowing what you need.',
  tipos: {
    pregunta: 'What are you looking for?',
    opciones: [
      { id: 'landing', nombre: 'Landing page' },
      { id: 'multiseccion', nombre: 'Multi-page site' },
      { id: 'tienda', nombre: 'Online store' },
      { id: 'sistema', nombre: 'Custom system' },
      { id: 'nose', nombre: 'Not sure yet' },
    ],
  },
  ideas: { etiqueta: 'What would you like to solve?', ayuda: 'For example: I track bookings in a spreadsheet and they keep overlapping.' },
  nombre: { etiqueta: 'Your name', placeholder: 'What should we call you?' },
  marca: { etiqueta: 'Your brand or business', placeholder: 'Optional' },
  contacto: { etiqueta: 'Your WhatsApp or email', placeholder: 'So we can reply' },
  web: { etiqueta: 'Your website or Instagram, if you have one', placeholder: 'Optional' },
  mensaje: { etiqueta: 'Tell us a bit, or ask us anything', placeholder: 'What you do, what you need, any questions…' },
  agenda: {
    cta: 'Book a call',
    otros: { titulo: 'Want to get the conversation going?', texto: 'Pick a 30-minute slot and we’ll talk it through on a video call.' },
    sistema: { titulo: 'To send you a quote, let’s talk for 30 minutes.', texto: 'Pick a time that suits you and we’ll get a clear picture of what you need.' },
  },
  falta: 'Tell us what you’re looking for, your name and how to reach you.',
  enviarMail: 'Send',
  enviando: 'Sending…',
  avisoMail: 'It reaches us right away. We’ll reply on WhatsApp or by email, whichever you prefer.',
  privacidad: { texto: 'We only use your details to reply to you.', link: 'Privacy' },
  despues: {
    titulo: 'What happens next',
    pasos: [
      'We read your message and reply on WhatsApp or by email.',
      'If you like, we talk for 30 minutes on a video call.',
      'We send you a proposal and, if it works for you, we start.',
    ],
  },
  exito: {
    titulo: 'Done!',
    texto: 'Thanks, {nombre}. Your message reached us: we’ll be in touch soon.',
    whatsapp: 'Want to talk now? Open WhatsApp',
  },
  errorEnvio: 'We couldn’t send it. Try again in a moment: your details are still filled in.',
  directo: 'Rather write directly?',
  directoCta: 'Open WhatsApp',
  lineas: {
    hola: 'Hi Roda! I’m {nombre}{marca}.',
    holaMarca: ', from {marca}',
    busco: 'I’m looking for: {tipo}.',
    resolver: 'I’d like to solve: {texto}',
    web: 'My website or Instagram: {web}',
    contacto: 'You can reach me at: {dato}',
  },
};

export const laCritica: typeof ES.laCritica = { titulo: 'The critics say', completo: 'What the critics say' };

export const cartelera: typeof ES.cartelera = {
  rotulo: ['04', 'What we do'],
  titulo: ['Now showing.', 'Three websites, three genres.'],
  deslizar: 'Swipe to see more',
  navegar: 'Browse the bill',
  anterior: 'Previous film',
  siguiente: 'Next film',
  presenta: 'presents',
  escribinos: 'Write to us →',
  enCartel: 'Now showing',
  peliculas: [
    { id: 'landing', dibujo: 'landing', articulo: 'The', titulo: 'Landing', frase: 'One page. One goal.', creditos: 'Straight to the point · One button, one message', precio: 'US$ 300', color: 'rojo' },
    { id: 'multiseccion', dibujo: 'portfolio', articulo: 'The', titulo: 'Multi-page', frase: 'Your work, on the big screen.', creditos: 'Up to 5 pages · To tell it all', precio: 'US$ 400', color: 'rosa' },
    { id: 'tienda', dibujo: 'tienda', articulo: 'The', titulo: 'Store', frase: 'It sells while you sleep.', creditos: 'Starring your products · And online payments', precio: 'US$ 550', color: 'amarillo' },
  ],
};

export const nosotros: typeof ES.nosotros = {
  secuencia: {
    otraVez: 'Watch again',
    legal: '© 2026 Roda · Produced in Buenos Aires · All rights reserved',
    cuadros: [
      { fondo: 'negro', tipo: 'presenta', texto: 'Roda presents', ms: 1500 },
      { fondo: 'juntos', tipo: 'titulo', palabras: ['One', 'Shared', 'Vision'], lados: ['Roda', '26'], ms: 2800 },
      { fondo: 'juntos', tipo: 'credito', disposicion: 'lados', rol: 'Starring', nombres: ['Giuliana Di Rocco', 'Facundo Thibaut'], ms: 2400 },
      { fondo: 'viaje', tipo: 'credito', disposicion: 'esquina', rol: 'Shot in', nombres: ['Buenos Aires'], ms: 2000 },
      { fondo: 'viaje', tipo: 'tagline', lineas: ['Every website we make is a journey.', 'And we love to travel.'], ms: 4200 },
      { fondo: 'negro', tipo: 'cierre', texto: 'Roda', ms: 0 },
    ],
  },
  bajo: 'Partners in life and work, web developers',
  grande: 'About us',
  creditos: [
    ['Direction', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Design and development', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Education', 'Web Development degree, UNLaM'],
    ['Artificial Intelligence', 'Giuliana Di Rocco'],
    ['Cyber defense', 'Both of us, coming soon'],
    ['Locations', 'Wherever the next trip takes us'],
    ['Special thanks', 'To every client who let us tell their story'],
  ],
  aviso: 'No templates were used in the making of this production.',
  rotulo: ['About us', 'The credits'],
  bajada: 'We’re Giuliana and Facundo: partners in life and work. We studied Web Development together at UNLaM, in Buenos Aires, and since then we’ve been making websites by hand, without templates. When you write to us, you talk to the people who build it.',
  foto: { alt: 'Giuliana and Facundo, smiling under a ceiling of golden lights', pie: ['(Still) Giuliana and Facundo', '2026'] },
  personas: [
    { nombre: 'Giuliana Di Rocco', texto: 'Web Development graduate from UNLaM. Now studying a degree in Artificial Intelligence.' },
    { nombre: 'Facundo Thibaut', texto: 'Finishing his Web Development degree at UNLaM.' },
  ],
  juntos: 'And we’re both about to start a degree in Cyber Defense.',
  filmamos: ['Shall we', 'shoot yours?'],
  cta: 'Let’s talk',
};

export const privacidad: typeof ES.privacidad = {
  rotulo: 'Privacy',
  titulo: 'Your data, looked after.',
  parrafos: [
    'When you fill in the contact form, we receive the details you wrote: your name, your WhatsApp or email, your brand, your website and your message. If you book a call, Cal.com sends us your name, your email and the time you chose.',
    '**We only use them to reply to you** and, if we work together, to build your website. We don’t sell them, we don’t share them with anyone for advertising and we don’t add you to any mailing list.',
    'To receive them we use two services: Web3Forms (the form reaches us by email) and Cal.com (the meeting calendar). The website is hosted on Vercel. We don’t use advertising or tracking cookies.',
    'You can ask us to see, correct or delete your data at any time by writing to {mail}. It’s your right under Argentina’s Personal Data Protection Law (No. 25,326).',
  ],
};

export const error404: typeof ES.error404 = {
  rotulo: 'Deleted scene',
  titulo: ['This part', 'didn’t make the ', 'final cut.'],
  cta: 'Back to home',
};
