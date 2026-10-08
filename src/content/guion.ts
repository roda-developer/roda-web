/**
 * Todo el copy de la web, en español (el original). Tono: rioplatense, voseo, cero jerga técnica.
 * guion.en.ts y guion.pt.ts tienen exactamente la misma forma. Los textos con {algo} son plantillas: se completan con rellenar().
 */

export const loader = {
  frase: 'Todo empieza con una historia.',
  presenta: 'Roda presenta',
};

/** Títulos y descripciones de cada página (lo que ve Google y lo que aparece al compartir el link) */
export const metas = {
  inicio: { titulo: 'Roda — Estudio web', descripcion: 'Webs que cuentan una historia. Roda es Giuliana y Facundo: diseño y desarrollo web a medida, de Buenos Aires al mundo.' },
  precios: { titulo: 'Precios — Roda', descripcion: 'Landing US$ 300, Multisección US$ 400, Tienda US$ 550. Abrí cada carpeta y mirá lo que trae.' },
  contacto: { titulo: 'Contacto — Roda', descripcion: 'Contanos qué buscás: una landing, una web multisección, una tienda online o un sistema a medida. Te respondemos enseguida.' },
  nosotros: { titulo: 'Nosotros — Roda', descripcion: 'Roda es Giuliana y Facundo: pareja, socios y desarrolladores web egresados de la UNLaM.' },
  proyectos: { titulo: 'Proyectos — Roda', descripcion: 'Webs que hicimos: MUDA, Emme Digital, Eber, Craft Studio, Fidalgo Select, Unik, The Magical Duo y Newave.' },
  privacidad: { titulo: 'Privacidad — Roda', descripcion: 'Qué datos guarda Roda cuando nos escribís y para qué los usamos.' },
  caso: '{titulo} — Roda',
  error: 'Página no encontrada — Roda',
  empresa: 'Estudio de diseño y desarrollo web de Buenos Aires, para clientes de todo el mundo: landings, webs multisección y tiendas online.',
};

/** Textos chicos de la interfaz: menú, avisos para lectores de pantalla, pie */
export const ui = {
  principal: 'Principal',
  navegacion: 'Navegación',
  abrirMenu: 'Abrir menú',
  cerrarMenu: 'Cerrar menú',
  volverInicio: 'Roda, volver al inicio',
  estudio: 'Roda — Estudio web',
  desde: 'De Buenos Aires al mundo',
  idioma: 'Idioma',
  /** El selector de idioma es un menú de subtítulos, como en el streaming */
  subtitulos: 'Subtítulos',
  cambiarIdioma: 'Idioma: {idioma}. Cambiar',
  creditosPie: 'Créditos',
  escribinos: 'Escribinos',
  seguinos: 'Seguinos',
  mira: 'Mirá',
  contacto: 'Contacto',
  privacidad: 'Privacidad',
  /** Al lado de un testimonio que no está en su idioma original */
  traducido: 'Traducido del español',
  /** Las críticas largas se cortan con … y se abren con este botón */
  leerMas: 'Leer más',
  leerMenos: 'Leer menos',
  postCreditos: 'Escena post-créditos',
  actoUno: 'Acto uno: la primera impresión',
  giro: 'El giro',
  technicolor: 'Technicolor: a veces más es más',
  mas: 'más',
  acto: 'Acto',
  parte: 'Parte',
  estreno: 'Tu estreno',
};

export const nav = {
  proyectos: 'Proyectos',
  nosotros: 'Nosotros',
  precios: 'Precios',
  atajo: 'Hablemos',
};

export const apertura = {
  titulo: ['Tu marca ya tiene', 'una historia.'],
  /** La segunda línea del título: lo normal y lo que va en cursiva */
  enfasis: ['una ', 'historia.'],
  bajada: 'Falta contarla donde te buscan.',
  queHacemos: 'Estudio de diseño y desarrollo web · De Buenos Aires al mundo',
  verPrecios: 'Ver precios →',
};

export const actoUno = {
  rotulo: ['01', 'La primera impresión'],
  lineas: ['Alguien escucha hablar de vos y te busca.', 'Lo que encuentra decide si te escribe.'],
  golpe: ['No lee.', 'Mira.'],
  generica: {
    marca: 'Tu Marca',
    menu: ['Inicio', 'Nosotros', 'Servicios', 'Contacto'],
    titulo: 'Bienvenidos a nuestro sitio web',
    texto: 'Somos una empresa líder comprometida con la excelencia y la calidad en cada uno de nuestros servicios.',
    boton: 'Saber más',
  },
  encuentra: 'Lo que suele encontrar:',
  /** Las notas que se pegan sobre la web genérica, de arriba hacia abajo */
  notas: ['Una plantilla que usan otras mil marcas.', 'Una foto de stock.', '“Saber más”… ¿de qué?'],
  cuenta: 'segundos para decidir',
  cierre: ['Y se va.', 'No perdiste una visita.', 'Perdiste un cliente.'],
  cierreEnfasis: ['Perdiste un ', 'cliente.'],
};

export const actoDos = {
  rotulo: ['02', 'Lo que hace una buena web'],
  titulo: 'Una buena web hace tres cosas.',
  planos: [
    { titulo: 'Se entiende al instante.', texto: 'Qué hacés y por qué vos, antes de que tenga que buscar nada.' },
    { titulo: 'Carga antes de que parpadees.', texto: 'Con cada segundo de espera, alguien se va.' },
    { titulo: 'Te lleva a un solo lugar.', texto: 'La web que pide todo no consigue nada.' },
  ],
  pesa: 'Esta página pesa',
  poco: 'poco',
};

export const giro = {
  cita: 'Menos es más.',
  autor: 'Ludwig Mies van der Rohe',
  replica: '…a veces.',
};

export const technicolor = {
  grito: ['Y a veces', 'más', 'es más.'],
  /** Las tres letras del "MÁS" grande, cada una con su color */
  letras: ['M', 'Á', 'S'],
  cinta: ['Más color', 'Más ruido', 'Más vos', 'Más ganas', 'Más marca'],
  /** Lo que se lee sobre el tráiler de proyectos: son trabajos nuestros */
  firma: 'Algunas que hicimos nosotros',
  verTodos: 'Ver todos los proyectos',
  corte: ['El secreto no es elegir un estilo.', 'Es saber cuál necesita tu marca.'],
  corteEnfasis: ['Es saber cuál necesita tu ', 'marca.'],
  webDe: 'Web de {titulo}',
};

export const actoTres = {
  rotulo: ['03', 'Cómo trabajamos'],
  titulo: 'De la idea a tu web, en cinco pasos.',
  /** Lo que se lee al costado mientras la web se arma sola. cine: el guiño, en chiquito */
  pasos: [
    { nombre: 'Te escuchamos.', cine: 'Guion', texto: 'Tu marca, a quién le hablás y qué querés que pase cuando alguien llega.' },
    { nombre: 'Te mostramos cómo va a quedar.', cine: 'Storyboard', texto: 'Ves cada pantalla antes de que exista.' },
    { nombre: 'La construimos.', cine: 'Rodaje', texto: 'A medida, sin plantillas. Rápida y liviana.' },
    { nombre: 'La publicamos.', cine: 'Estreno', texto: 'Sale al mundo, lista para que te encuentren.' },
    { nombre: 'Y te acompañamos.', cine: 'Y después', texto: 'La cuidamos y la hacemos crecer. Y empiezan a llegar los mensajes.' },
  ],
  /** La web que se arma sola */
  obra: {
    notas: ['Marca: la tuya', 'Le habla a: quienes buscan lo que hacés', 'Objetivo: que te escriban'],
    marca: 'Tu marca',
    titular: 'Lo que hacés, dicho en una línea.',
    bajada: 'Y por qué elegirte a vos.',
    boton: 'Escribinos',
    url: 'tumarca.com',
    enLinea: 'En línea',
    mensaje: ['Nuevo mensaje', '¡Hola! Vi tu web y quiero consultarte…'],
  },
};

export const proyectosPagina = {
  titulo: 'Proyectos seleccionados',
  bajada: 'Cada una, hecha a medida para su marca. Estas son algunas de las que ya hicimos.',
  pregunta: '¿Qué hacés?',
  ayuda: 'Elegí tu rubro y te mostramos primero lo más cercano a vos.',
  todos: 'Todos',
  cerca: 'Cerca de lo tuyo',
  verCaso: 'Ver el caso',
  verEnVivo: 'Ver en vivo',
  otraPestana: '(se abre en otra pestaña)',
  siguiente: 'Siguiente proyecto',
  volverAtras: 'Volver',
  enCelular: '(En el celular)',
  portadaDe: 'Portada de la web de {titulo}',
  pantallaDe: '{titulo}, pantalla {n}',
  celularDe: '{titulo} en el celular',
  mostrandoPrimero: 'Mostrando primero proyectos de {rubro}',
  ficha: { rubro: 'Rubro', anio: 'Año', rol: 'Qué hicimos', genero: 'Qué es' },
  secciones: { cliente: 'El cliente', desafio: 'El desafío', solucion: 'Lo que hicimos', destacados: 'Detalles', resultado: 'Resultado' },
  /** Los créditos al pie de cada afiche de proyecto */
  afiche: { estreno: 'Estreno 2026', pantallas: 'En todas las pantallas' },
};

/** Los rubros, como se leen en los botones (los ids están en story/opciones.ts) */
export const rubros = {
  gastronomia: 'Gastronomía',
  moda: 'Moda',
  salud: 'Salud y bienestar',
  servicios: 'Servicios profesionales',
  arte: 'Arte y diseño',
  otro: 'Otros',
};

export const creativos = {
  pregunta: '¿Diseñás o manejás marcas?',
  cta: 'Trabajemos juntos',
  mensaje: 'Diseño o manejo marcas y quiero trabajar con Roda.',
};

export const creditos = {
  intro: 'Roda es',
  nombres: [
    { nombre: 'Giuliana', rol: 'Dirección · Desarrollo' },
    { nombre: 'Facundo', rol: 'Dirección · Desarrollo' },
  ],
  y: 'y',
  lema: ['Pareja y socios.', 'Una misma mirada.'],
  ficha: [
    ['Diseño y desarrollo', 'Giuliana y Facundo'],
    ['Hecha', 'A mano, sin plantillas'],
    ['Duración', 'Lo que tardes en bajar'],
  ],
};

export const cierre = {
  rotulo: ['05', 'El estreno'],
  pregunta: '¿Cómo se llama tu marca?',
  ayuda: 'Escribila y mirá tu afiche de estreno.',
  placeholder: 'Tu marca',
  cta: 'Hablemos',
  descargar: 'Descargar afiche',
  estiloEtiqueta: 'Estilo',
  estilos: { estreno: 'Estreno', cartel: 'Cartel', autor: 'Autor' },
  colorEtiqueta: 'Color',
  colores: { rosa: 'Rosa', amarillo: 'Amarillo', azul: 'Azul', rojo: 'Rojo', verde: 'Verde' },
  compartir: 'Compartir',
  alternativa: 'o escribinos a',
  formulario: 'O contanos más en el formulario →',
  /** El mail que se arma con el link de abajo del afiche */
  mail: {
    asunto: 'La historia de {marca}',
    asuntoSinMarca: 'Mi historia',
    cuerpo: 'Hola Roda, soy de {marca}. Queremos empezar a contar nuestra historia.',
    cuerpoSinMarca: 'Hola Roda, quiero contarles mi historia.',
  },
  /** Para lectores de pantalla: lo que muestra el afiche */
  descripcion: 'Afiche de estreno: Roda presenta {marca}. {antes}. {genero}{estreno} {soloEn} {dominio}.',
  /** Lo que dice el afiche, de arriba hacia abajo */
  afiche: {
    presenta: 'presenta',
    antes: 'Una historia que todavía no contamos',
    historiaPara: 'Una historia para que {objetivo}',
    /** Lo que respondiste en la web cambia el afiche: para qué es, si es un reestreno y el género */
    paraQue: { escriba: 'te escriban', compre: 'te compren', reserve: 'te reserven', vea: 'vean tu trabajo' },
    reestreno: 'Reestreno',
    genero: 'Género',
    vacio: 'Tu marca',
    creditos: [
      ['Una producción', 'Roda'],
      ['Dirigida por', 'vos'],
      ['Guion', 'tu historia'],
      ['Diseño y desarrollo', 'Giuliana y Facundo'],
      ['Con la participación especial de', 'tus clientes'],
    ],
    proximamente: 'Próximamente',
    soloEn: 'solo en',
    dominio: 'tumarca.com',
  },
  postCreditos: 'Si llegaste hasta acá, ya sabés que nos gustan los buenos finales. Empecemos el tuyo.',
};

export const planes = {
  moneda: 'US$',
  /** incluye: la línea corta de la home, alineada con las carpetas de /precios (que tienen el detalle completo) */
  lista: [
    { id: 'landing', nombre: 'Landing', precio: 300, incluye: 'Una sola página. Ideal si estás arrancando o lanzás algo puntual.' },
    { id: 'multiseccion', nombre: 'Multisección', precio: 400, incluye: 'Hasta 5 páginas. Ideal si tenés varios servicios o trabajos para mostrar.' },
    { id: 'tienda', nombre: 'Tienda', precio: 550, incluye: 'Carrito y pasarela de pagos. Ideal si vendés productos.' },
  ],
  todas: ['Diseño propio', 'Cambios sin límite', 'Online en 1 a 2 semanas', 'Mantenimiento opcional desde US$ 20/mes'],
  verTodo: 'Ver qué incluye cada plan',
  adicionales: {
    rotulo: 'Adicionales',
    titulo: 'Sumale lo que necesites.',
    lista: [
      { nombre: 'Panel propio', detalle: 'Subís tus proyectos, productos y novedades sin depender de nadie', precio: 150 },
      { nombre: 'Turnos y reservas', detalle: 'Te reservan solos, a cualquier hora', precio: 100 },
      { nombre: 'Otro idioma', detalle: 'Tu web también en inglés, o el que necesites', precio: 80 },
    ],
  },
  /** A medida: va debajo de las carpetas. Los ejemplos ayudan a quien no sabe cómo se llama lo que necesita. PENDIENTE (Giuli/Facu): revisar que sean cosas que hacen. */
  aMedida: {
    rotulo: 'A medida',
    titulo: '¿Lo tuyo no entra en ninguna carpeta?',
    texto: 'Hacemos sistemas a medida: lo que hoy resolvés a mano, en una planilla o por mensajes, convertido en una herramienta para tu negocio. También webs de más de 10 páginas. Lo pensamos juntos y te pasamos un presupuesto.',
    ejemplosTitulo: 'Por ejemplo (tocá los que se parecen a lo tuyo)',
    ejemplos: [
      'Turnos con seña y recordatorios',
      'Stock y ventas de tu local',
      'Presupuestos que se arman solos',
      'Pedidos para mayoristas',
      'Reservas de canchas, salas o equipos',
      'Gestión de alumnos, socios o pacientes',
      'Un portal para que tus clientes sigan su pedido',
      'Un panel con los números de tu negocio',
    ],
    cta: 'Contanos qué necesitás',
  },
  dominio: {
    pregunta: '¿Y el dominio y el hosting?',
    respuestas: [
      'El dominio (tumarca.com) lo comprás vos y queda a tu nombre. Te guiamos en la compra.',
      'El hosting, donde vive tu web, en la mayoría de los casos es gratis. Si tu proyecto necesita más, te lo decimos antes de arrancar.',
    ],
  },
};

/**
 * La página /precios: cada plan es una carpeta de archivo. Las lengüetas son lo que trae tu web
 * (la landing tiene una sola; la multisección, varias; la tienda, un carrito) y adentro va solo lo que incluye el servicio.
 */
export const preciosPagina = {
  rotulo: 'Precios',
  titulo: ['Cuánto sale', 'tu estreno.'],
  bajada: 'Precios a la vista, sin letra chica. Abrí cada carpeta.',
  rotulos: {
    planes: ['01', 'Los planes'],
    extras: ['02', 'Sumale'],
    preguntas: ['03', 'Preguntas'],
  },
  queTrae: 'Qué trae {plan}',
  defineElPlan: 'Lo que define el plan',
  precio: 'Precio: {moneda} {precio}',
  /** Lo que define cada plan va siempre a la vista, fuera de las lengüetas */
  fichas: {
    landing: { ideal: 'Ideal si estás arrancando o lanzás algo puntual.', clave: ['1 página'], mantenimiento: 20 },
    multiseccion: { ideal: 'Ideal si tenés varios servicios o trabajos para mostrar.', clave: ['Hasta 5 páginas', 'Página extra US$ 30'], mantenimiento: 25 },
    tienda: { ideal: 'Ideal si vendés productos.', clave: ['Carrito', 'Pasarela de pagos'], mantenimiento: 35 },
  },
  /** El mantenimiento: opcional, por mes, con tope de cambios. PENDIENTE (Giuli/Facu): confirmar el tope de 4 cambios. */
  mantenimiento: {
    linea: 'Mantenimiento opcional: US$ {precio}/mes',
  },
  /** "Todas incluyen", como los créditos de una película */
  creditos: {
    titulo: 'Todas incluyen',
    lista: [
      ['Diseño', 'Propio, hecho a mano'],
      ['Pantallas', 'Celu, tablet y compu'],
      ['Contacto', 'Botón a WhatsApp'],
      ['Cambios', 'Sin límite, hasta que te encante'],
      ['Estreno', 'En 1 a 2 semanas'],
      ['Hosting', 'Gratis en la mayoría de los casos'],
      ['Google', 'Indexación y SEO técnico'],
    ],
    aviso: 'Ninguna web de esta cartelera viene con letra chica.',
  },
  /**
   * El precio real es en dólares; el interruptor muestra cuánto sale hoy en moneda local.
   * tipo: 'ars' (DolarApi, dólar oficial), 'brl' (Frankfurter) o '' (sin interruptor).
   */
  moneda: {
    tipo: 'ars',
    etiqueta: 'Ver cuánto sale hoy en pesos',
    hoy: 'Hoy: $ {valor}',
    /** Con la moneda prendida, el precio en pesos va grande y el de dólares queda chico debajo */
    simbolo: '$',
    sigla: 'ARS',
    referencia: 'Precio fijo: US$ {valor}',
    cotizacion: 'Dólar oficial $ {valor} · {fecha}',
  },
  pedir: 'Quiero esta',
  /** Las lengüetas de cada carpeta: solo dicen el tamaño de la web (una página, varias, una tienda) */
  carpetas: {
    landing: [{ id: 'inicio', nombre: 'Inicio' }],
    multiseccion: [
      { id: 'inicio', nombre: 'Inicio' },
      { id: 'servicios', nombre: 'Servicios' },
      { id: 'mas', nombre: '+3', etiqueta: 'Tres páginas más' },
    ],
    tienda: [
      { id: 'catalogo', nombre: 'Catálogo' },
      { id: 'carrito', nombre: 'Carrito', carrito: true },
    ],
  },
  preguntas: [
    { p: '¿Tengo que pagar algo por mes?', r: ['No. Pagás tu web una sola vez. El hosting, en la mayoría de los casos, es gratis, y el dominio (tumarca.com) se renueva una vez por año, a tu nombre.', 'Si querés que sigamos actualizando tu web, hay un mantenimiento mensual totalmente opcional: Landing US$ 20, Multisección US$ 25 y Tienda US$ 35, con hasta 4 cambios por mes. Sin permanencia: lo das de baja cuando quieras.'] },
    { p: '¿Cómo se paga?', r: ['La mitad al arrancar y la otra mitad cuando te entregamos la web. En dólares o su equivalente en pesos.'] },
    { p: '¿Y si no me gusta cómo queda?', r: ['La cambiamos. No hay un límite de rondas de cambios: trabajamos hasta que quede perfecta para vos.'] },
    { p: '¿Tengo que tener los textos y las fotos?', r: ['Lo ideal es que sí: nadie cuenta tu marca mejor que vos. Si no los tenés, podemos usar imágenes de internet y escribir los textos con inteligencia artificial.'] },
    {
      p: '¿Voy a aparecer primero en Google?',
      r: [
        'No de entrada, y desconfiá de quien te lo prometa. Lo que hacemos es SEO técnico e indexación: tu web sale rápida, con títulos y descripciones pensados para Google, y la damos de alta para que Google sepa que existe.',
        'Esa es la base, pero no te posiciona sola. Subir en búsquedas como “pastelería en Palermo” lleva tiempo, contenido y, muchas veces, publicidad.',
      ],
    },
    { p: '¿Y el dominio y el hosting?', r: planes.dominio.respuestas },
    { p: '¿Puedo actualizar la web yo?', r: ['Sí, si sumás el Panel propio: subís tus proyectos, productos y novedades sin depender de nadie. Y si preferís que lo hagamos nosotros, está el mantenimiento opcional.'] },
  ],
  final: {
    titulo: '¿Arrancamos?',
    texto: 'Contanos de tu marca y te decimos qué carpeta te conviene.',
    cta: 'Hablemos',
  },
};

/**
 * La página /contacto: un formulario corto para saber qué busca cada persona antes de hablar.
 * Se envía al mail de Roda con Web3Forms. Después de enviar, se puede agendar la llamada (Cal.com).
 */
export const contactoPagina = {
  rotulo: 'Contacto',
  titulo: ['Contanos', 'tu historia.'],
  bajada: 'Son dos minutos. Con esto llegamos a la charla sabiendo qué necesitás.',
  tipos: {
    pregunta: '¿Qué estás buscando?',
    opciones: [
      { id: 'landing', nombre: 'Landing' },
      { id: 'multiseccion', nombre: 'Multisección' },
      { id: 'tienda', nombre: 'Tienda online' },
      { id: 'sistema', nombre: 'Sistema a medida' },
      { id: 'nose', nombre: 'Todavía no sé' },
    ],
  },
  ideas: { etiqueta: '¿Qué te gustaría resolver?', ayuda: 'Por ejemplo: hoy anoto los turnos en una planilla y se me pisan.' },
  nombre: { etiqueta: 'Tu nombre', placeholder: 'Cómo te llamás' },
  marca: { etiqueta: 'Tu marca o negocio', placeholder: 'Opcional' },
  contacto: { etiqueta: 'Tu WhatsApp o mail', placeholder: 'Para poder responderte' },
  web: { etiqueta: 'Tu web o Instagram, si tenés', placeholder: 'Opcional' },
  mensaje: { etiqueta: 'Contanos un poco, o preguntanos lo que quieras', placeholder: 'Qué hacés, qué necesitás, qué dudas tenés…' },
  /** La llamada se agenda en el "¡Listo!", después de enviar (Cal.com) */
  agenda: {
    cta: 'Agendar una llamada',
    otros: { titulo: '¿Querés adelantar la charla?', texto: 'Elegí un horario de 30 minutos y lo vemos juntos por videollamada.' },
    sistema: { titulo: 'Para pasarte un presupuesto, charlemos 30 minutos.', texto: 'Elegí el horario que te quede cómodo y entendemos bien lo que necesitás.' },
  },
  falta: 'Contanos qué buscás, tu nombre y cómo responderte.',
  enviarMail: 'Enviar',
  enviando: 'Enviando…',
  avisoMail: 'Nos llega al toque. Te respondemos por WhatsApp o mail, como prefieras.',
  privacidad: { texto: 'Usamos tus datos solo para responderte.', link: 'Privacidad' },
  despues: {
    titulo: 'Qué pasa después',
    pasos: [
      'Leemos tu consulta y te respondemos por WhatsApp o mail.',
      'Si querés, charlamos 30 minutos por videollamada.',
      'Te pasamos la propuesta y, si te cierra, arrancamos.',
    ],
  },
  exito: {
    titulo: '¡Listo!',
    texto: 'Gracias, {nombre}. Ya nos llegó tu consulta: te escribimos pronto.',
    whatsapp: '¿Querés hablar ya? Abrí WhatsApp',
  },
  errorEnvio: 'No pudimos enviarlo. Probá de nuevo en un ratito: tus datos quedan cargados.',
  directo: '¿Preferís escribir directo?',
  directoCta: 'Abrir WhatsApp',
  /** Cómo llega el mensaje (WhatsApp y el resumen para Cal.com). Los mails a Roda van siempre en español. */
  lineas: {
    hola: '¡Hola Roda! Soy {nombre}{marca}.',
    holaMarca: ', de {marca}',
    busco: 'Busco: {tipo}.',
    resolver: 'Me gustaría resolver: {texto}',
    web: 'Mi web o Instagram: {web}',
    contacto: 'Me contactan por: {dato}',
  },
};

/** La crítica dice: los fragmentos de los testimonios en la home, antes de la cartelera */
export const laCritica = { titulo: 'La crítica dice', completo: 'Lo que dice la crítica' };

/** La cartelera: cada plan es una película (los mismos tres de /precios). Cada afiche lleva a su carpeta. dibujo: qué escena lleva. */
export const cartelera = {
  rotulo: ['04', 'Lo que hacemos'],
  titulo: ['En cartelera.', 'Tres webs, tres géneros.'],
  deslizar: 'Deslizá para ver más',
  navegar: 'Navegar cartelera',
  anterior: 'Ver película anterior',
  siguiente: 'Ver siguiente película',
  presenta: 'presenta',
  escribinos: 'Escribinos →',
  enCartel: 'En cartel',
  peliculas: [
    { id: 'landing', dibujo: 'landing', articulo: 'La', titulo: 'Landing', frase: 'Una página. Un solo objetivo.', creditos: 'Directa al grano · Un botón, un mensaje', precio: 'US$ 300', color: 'rojo' },
    { id: 'multiseccion', dibujo: 'portfolio', articulo: 'La', titulo: 'Multisección', frase: 'Tu trabajo, en pantalla grande.', creditos: 'Hasta 5 páginas · Para contarlo todo', precio: 'US$ 400', color: 'rosa' },
    { id: 'tienda', dibujo: 'tienda', articulo: 'La', titulo: 'Tienda', frase: 'Vende mientras dormís.', creditos: 'Con tus productos · Y pagos en línea', precio: 'US$ 550', color: 'amarillo' },
  ],
};

// PENDIENTE (Giuli/Facu): si va "Producida en Buenos Aires".
export const nosotros = {
  /** La secuencia de títulos: un cuadro por pantalla, sobre la foto (o el video) de fondo */
  secuencia: {
    otraVez: 'Ver de nuevo',
    legal: '© 2026 Roda · Producida en Buenos Aires · Todos los derechos reservados',
    /**
     * Como los créditos de una película: el estudio presenta, el título (grueso, de a una palabra) y los créditos
     * en letra liviana. Cada cosa aparece una sola vez.
     * fondo 'negro': la placa va sobre negro, como en el cine; si no, sobre esa foto.
     * ms: cuánto dura en pantalla. Corre sola, como un video; termina quieta en la última placa.
     */
    // disposicion: dónde se acomoda el texto en el cuadro (no todo al centro, como en las intros de cine)
    cuadros: [
      { fondo: 'negro', tipo: 'presenta', texto: 'Roda presenta', ms: 1500 },
      { fondo: 'juntos', tipo: 'titulo', palabras: ['Una', 'Misma', 'Mirada'], lados: ['Roda', '26'], ms: 2800 },
      { fondo: 'juntos', tipo: 'credito', disposicion: 'lados', rol: 'Protagonizada por', nombres: ['Giuliana Di Rocco', 'Facundo Thibaut'], ms: 2400 },
      { fondo: 'viaje', tipo: 'credito', disposicion: 'esquina', rol: 'Filmada en', nombres: ['Buenos Aires'], ms: 2000 },
      // La frase clave, como el tagline de un afiche
      { fondo: 'viaje', tipo: 'tagline', lineas: ['Cada web que hacemos es un viaje.', 'Y nos encanta viajar.'], ms: 4200 },
      { fondo: 'negro', tipo: 'cierre', texto: 'Roda', ms: 0 },
    ],
  },
  bajo: 'Pareja, socios y desarrolladores web',
  grande: 'Nosotros',
  creditos: [
    ['Dirección', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Diseño y desarrollo', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Formación', 'Tecnicatura en Desarrollo Web, UNLaM'],
    ['Inteligencia Artificial', 'Giuliana Di Rocco'],
    ['Ciberdefensa', 'Los dos, próximamente'],
    ['Locaciones', 'Donde nos lleve el próximo viaje'],
    ['Agradecimientos', 'A cada cliente que nos dejó contar su historia'],
  ],
  aviso: 'Ninguna web fue hecha con plantillas durante esta producción.',
  rotulo: ['Nosotros', 'Los créditos'],
  bajada: 'Somos Giuliana y Facundo: pareja y socios. Estudiamos juntos la Tecnicatura en Desarrollo Web en la UNLaM, y desde ahí hacemos webs a mano, sin plantillas. Cuando nos escribís, hablás con quien la hace.',
  foto: { alt: 'Giuliana y Facundo, abrazados y sonriendo, con un árbol detrás', pie: ['(Fotograma) Giuliana y Facundo', '2026'] },
  personas: [
    { nombre: 'Giuliana Di Rocco', texto: 'Técnica en Desarrollo Web por la UNLaM. Hoy estudia la Licenciatura en Inteligencia Artificial.' },
    { nombre: 'Facundo Thibaut', texto: 'Está terminando la Tecnicatura en Desarrollo Web en la UNLaM.' },
  ],
  juntos: 'Y los dos estamos por empezar la Licenciatura en Ciberdefensa.',
  filmamos: ['¿Filmamos', 'la tuya?'],
  cta: 'Hablemos',
};

/** La página de privacidad. **así** va en negrita y {mail} es el link al mail. */
export const privacidad = {
  rotulo: 'Privacidad',
  titulo: 'Tus datos, cuidados.',
  parrafos: [
    'Cuando completás el formulario de contacto, nos llegan los datos que escribiste: tu nombre, tu WhatsApp o mail, tu marca, tu web y tu mensaje. Si agendás una llamada, Cal.com nos pasa tu nombre, tu mail y el horario elegido.',
    '**Los usamos solo para responderte** y, si trabajamos juntos, para hacer tu web. No los vendemos, no los compartimos con nadie para publicidad y no te sumamos a ninguna lista de correo.',
    'Para recibirlos usamos dos servicios: Web3Forms (el formulario nos llega por mail) y Cal.com (la agenda de reuniones). La web está alojada en Vercel. No usamos cookies de publicidad ni de seguimiento.',
    'Podés pedirnos ver, corregir o borrar tus datos cuando quieras escribiendo a {mail}. Es tu derecho según la Ley 25.326 de Protección de Datos Personales.',
  ],
};

/** La 404: la escena que se cortó en el montaje */
export const error404 = {
  rotulo: 'Escena eliminada',
  titulo: ['Esta parte', 'no quedó en el ', 'corte final.'],
  cta: 'Volver al inicio',
};
