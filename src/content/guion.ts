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
  inicio: { titulo: 'Roda — Estudio web', descripcion: 'Roda es Giuliana y Facundo, un estudio de diseño y desarrollo web de Buenos Aires. Diseñamos y programamos cada web desde cero.' },
  precios: { titulo: 'Precios — Roda', descripcion: 'Landing US$ 300, Multisección US$ 400, Tienda US$ 550. Mirá qué trae cada una, sin letra chica.' },
  contacto: { titulo: 'Contacto — Roda', descripcion: 'Contanos qué buscás: una landing, una web multisección, una tienda online o un sistema a medida. Te respondemos enseguida.' },
  nosotros: { titulo: 'Nosotros — Roda', descripcion: 'Roda es Giuliana y Facundo: pareja, socios y desarrolladores web de Buenos Aires.' },
  proyectos: { titulo: 'Proyectos — Roda', descripcion: 'Webs que hicimos: MUDA, Emme Digital, Eber, Craft Studio, Fidalgo Select, Unik, The Magical Duo y Newave.' },
  privacidad: { titulo: 'Privacidad — Roda', descripcion: 'Qué datos guarda Roda cuando nos escribís y para qué los usamos.' },
  caso: '{titulo} — Roda',
  error: 'Página no encontrada — Roda',
  empresa: 'Estudio de diseño y desarrollo web de Buenos Aires, para clientes de todo el mundo: landings, webs multisección y tiendas online.',
};

/** Textos chicos de la interfaz: menú, avisos para lectores de pantalla, pie */
export const ui = {
  principal: 'Principal',
  /** El link escondido que aparece con Tab: salta el menú */
  saltar: 'Ir al contenido',
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
  estreno: 'Tu estreno',
};

export const nav = {
  proyectos: 'Proyectos',
  nosotros: 'Nosotros',
  precios: 'Precios',
  atajo: 'Hablemos',
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
  formulario: 'O contanos más en el formulario',
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
    { id: 'tienda', nombre: 'Tienda', precio: 550, incluye: 'Carrito, pasarela de pagos y panel para tus productos. Ideal si vendés productos.' },
  ],
  todas: ['Diseño propio', 'Cambios sin límite sobre lo acordado', 'Online en 1 a 4 semanas', 'Mantenimiento opcional desde US$ 20/mes'],
  verTodo: 'Ver qué incluye cada plan',
  adicionales: {
    rotulo: 'Adicionales',
    titulo: 'Sumale lo que necesites.',
    lista: [
      { nombre: 'Panel propio', detalle: 'Subís tus proyectos, productos y novedades sin depender de nadie', nota: 'Para Landing y Multisección. En Tienda ya viene incluido.', precio: 150 },
      { nombre: 'Turnos y reservas', detalle: 'Te reservan solos, a cualquier hora', precio: 100 },
      { nombre: 'Otro idioma', detalle: 'Tu web también en inglés, o el que necesites', nota: 'Precio por cada idioma. Incluye los textos de la web; los productos de una Tienda se traducen aparte.', precio: 80 },
      {
        nombre: 'Envíos automáticos',
        detalle: 'El cliente calcula el envío con su código postal y la etiqueta se genera sola cuando paga.',
        nota: 'Para Tienda. Se integra con el correo o la plataforma de envíos de tu país (Correo Argentino, Andreani, Correios/Melhor Envio, etc.). Cada envío lo paga el comprador al finalizar la compra. La cuenta en la plataforma de envíos va a tu nombre y necesita saldo para comprar las etiquetas.',
        precio: 200,
      },
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
    /** Branding y redes no los hacemos nosotros: los cotiza aparte una aliada (sin nombre ni precio) */
    aliada: '¿Necesitás también branding o manejo de redes? Trabajamos con una aliada que se ocupa de eso y te lo cotiza aparte.',
  },
  dominio: {
    pregunta: '¿Y el dominio y el hosting?',
    respuestas: [
      'El dominio (tumarca.com) lo comprás vos y queda a tu nombre. Sale aprox. US$ 10 a US$ 15 por año (un .com.ar, menos). Te guiamos en la compra.',
      'El mail con tu dominio (vos@tumarca.com) se contrata aparte, en Google Workspace o Zoho, desde US$ 1 a US$ 7 por mes por casilla. Te ayudamos a configurarlo.',
      'El hosting, donde vive tu web, en la mayoría de los casos es gratis. Si tu proyecto necesita más, te lo decimos antes de arrancar.',
      'Las tiendas con base de datos y pagos online usan un hosting pago: va a tu nombre y lo pagás directo al proveedor, normalmente entre US$ 5 y US$ 20 por mes según el tráfico. Te lo avisamos antes de arrancar.',
    ],
  },
};

/**
 * La página /precios: cada plan es una carpeta de archivo. Las lengüetas son lo que trae tu web
 * (la landing tiene una sola; la multisección, varias; la tienda, un carrito) y adentro va solo lo que incluye el servicio.
 */
export const preciosPagina = {
  rotulo: 'Precios',
  titulo: ['Cuánto sale', 'tu web.'],
  bajada: 'Precios a la vista, sin letra chica. Mirá qué trae cada una.',
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
    tienda: { ideal: 'Ideal si vendés productos.', clave: ['Carrito', 'Pasarela de pagos', 'Panel para cargar tus productos'], detalle: 'En el panel cargás tus productos, precios, fotos, talles o colores y stock. Te enseñamos a usarlo: nosotros la probamos con productos de ejemplo y los reales los cargás vos.', mantenimiento: 35 },
  },
  /** El mantenimiento: opcional, por mes, con tope de cambios. PENDIENTE (Giuli/Facu): confirmar el tope de 4 cambios. */
  mantenimiento: {
    linea: 'Mantenimiento opcional: US$ {precio}/mes',
  },
  /** Lo que traen todas las webs */
  creditos: {
    titulo: 'Todas incluyen',
    lista: [
      ['Diseño', 'Propio, hecho a mano'],
      ['Pantallas', 'Celu, tablet y compu'],
      ['Contacto', 'Botones a WhatsApp y formulario'],
      ['Cambios', 'Sin límite sobre lo acordado'],
      ['Entrega', 'En 1 a 2 semanas (Tienda, 2 a 4)'],
      ['Garantía', '30 días de arreglos después de publicarla'],
      ['Hosting', 'Gratis en la mayoría de los casos'],
      ['Google', 'Indexación y SEO técnico'],
      ['Todo a tu nombre', 'Dominio, hosting y web'],
    ],
    aviso: 'Sin letra chica.',
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
    { p: '¿Tengo que pagar algo por mes?', r: ['En general, no. Pagás tu web una sola vez. El hosting, en la mayoría de los casos, es gratis, y el dominio (tumarca.com) se renueva una vez por año, a tu nombre.', 'La excepción son las tiendas con base de datos y pagos online: usan un hosting pago, a tu nombre, que le pagás directo al proveedor (normalmente entre US$ 5 y US$ 20 por mes, según el tráfico). Te lo avisamos antes de arrancar.', 'Si querés que sigamos actualizando tu web, hay un mantenimiento mensual totalmente opcional: Landing US$ 20, Multisección US$ 25 y Tienda US$ 35, con hasta 4 cambios por mes. Sin permanencia: lo das de baja cuando quieras.'] },
    { p: '¿Cómo se paga?', r: ['La mitad al arrancar y la otra mitad cuando te entregamos la web. En dólares o su equivalente en pesos.'] },
    { p: '¿Y si no me gusta cómo queda?', r: ['La cambiamos. No hay un límite de rondas de cambios sobre lo que acordamos: trabajamos hasta que quede perfecta para vos.', 'Si querés sumar algo nuevo (una sección, una página o una función que no estaba), te lo presupuestamos aparte antes de hacerlo.'] },
    { p: '¿Tengo que tener los textos y las fotos?', r: ['Lo ideal es que sí: nadie cuenta tu marca mejor que vos. Si no los tenés, podemos usar imágenes de internet y escribir los textos con inteligencia artificial.', 'En una Tienda, las fotos de los productos tienen que ser tuyas: la fotografía no está incluida.'] },
    { p: '¿La pasarela de pagos cobra algo?', r: ['Sí, una comisión por cada venta, que no es nuestra: según el país y el medio de pago, suele estar entre el 3% y el 7%. La cuenta (Mercado Pago, Stripe, PagSeguro u otra) la abrís vos, a tu nombre, y la plata de cada venta te llega directo.'] },
    {
      p: '¿Voy a aparecer primero en Google?',
      r: [
        'No de entrada, y desconfiá de quien te lo prometa. Lo que hacemos es SEO técnico e indexación: tu web sale rápida, con títulos y descripciones pensados para Google, y la damos de alta para que Google sepa que existe.',
        'Esa es la base, pero no te posiciona sola. Subir en búsquedas como “pastelería en Palermo” lleva tiempo, contenido y, muchas veces, publicidad.',
      ],
    },
    { p: '¿Y el dominio y el hosting?', r: planes.dominio.respuestas },
    { p: '¿Puedo actualizar la web yo?', r: ['Sí. En la Tienda el panel ya viene incluido: cargás tus productos, precios y stock cuando quieras. En Landing y Multisección, sumás el Panel propio y subís tus proyectos y novedades sin depender de nadie. Y si preferís que lo hagamos nosotros, está el mantenimiento opcional.'] },
  ],
  final: {
    titulo: '¿Arrancamos?',
    texto: 'Contanos de tu marca y te decimos cuál te conviene.',
    cta: 'Hablemos',
  },
};

/**
 * La página /contacto: un formulario corto para saber qué busca cada persona antes de hablar.
 * Se envía al mail de Roda con Web3Forms. Después de enviar, se puede agendar la llamada (Cal.com).
 */
export const contactoPagina = {
  rotulo: 'Contacto',
  titulo: ['Contanos', 'qué buscás.'],
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
export const laCritica = { titulo: 'Lo que dicen', completo: 'Lo que dicen nuestros clientes' };

export const nosotros = {
  bajo: 'Pareja y socios',
  grande: 'Nosotros',
  creditos: [
    ['Dirección', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Diseño y desarrollo', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Formación', 'Tecnicatura en Desarrollo Web, UNLaM'],
    ['Inteligencia Artificial', 'Giuliana Di Rocco'],
    ['Locaciones', 'Donde nos lleve el próximo viaje'],
    ['Agradecimientos', 'A cada cliente que nos dejó contar su historia'],
  ],
  aviso: 'Ninguna web fue hecha con plantillas durante esta producción.',
  rotulo: ['Nosotros', 'Los créditos'],
  // Antes: bajada: 'Somos Giuli y Facu. Somos pareja y hacemos webs juntos. Nos gusta que cada web sea distinta, por eso las diseñamos y las programamos desde cero. Si nos escribís, te contestamos nosotros.',
  /** Primero lo que hicimos; la formación va más abajo */
  bajada: 'Somos Giuli y Facu, pareja y socios. Diseñamos y programamos webs a medida, desde cero y sin plantillas. Si nos escribís, te contestamos nosotros.',
  /** {n}: cuántas webs hay en /proyectos. Los nombres salen de content/proyectos.ts */
  hicimos: { titulo: 'Lo que ya hicimos', texto: 'Publicamos {n} webs para marcas reales:', verTodos: 'Ver todos los proyectos' },
  formacion: 'Cómo aprendimos',
  foto: { alt: 'Giuliana y Facundo, abrazados y sonriendo, con un árbol detrás', pie: ['(Fotograma) Giuliana y Facundo', '2026'] },
  personas: [
    { nombre: 'Giuli', texto: 'Me recibí de técnica en desarrollo web en la UNLaM y ahora estoy estudiando inteligencia artificial.' },
    { nombre: 'Facu', texto: 'Estoy terminando la misma tecnicatura.' },
  ],
  filmamos: ['¿Hacemos', 'la tuya?'],
  cta: 'Hablemos',
};

/** La página de privacidad. **así** va en negrita y {mail} es el link al mail. */
export const privacidad = {
  rotulo: 'Privacidad',
  titulo: 'Tus datos, cuidados.',
  parrafos: [
    'Cuando completás el formulario de contacto, nos llegan los datos que escribiste: tu nombre, tu WhatsApp o mail, tu marca, tu web y tu mensaje. Si agendás una llamada, Cal.com nos pasa tu nombre, tu mail y el horario elegido.',
    '**Los usamos solo para responderte** y, si trabajamos juntos, para hacer tu web. No los vendemos, no los compartimos con nadie para publicidad y no te sumamos a ninguna lista de correo.',
    'Para recibirlos usamos dos servicios: Web3Forms (el formulario nos llega por mail) y Cal.com (la agenda de reuniones). La web está alojada en Cloudflare. No usamos cookies de publicidad ni de seguimiento.',
    'Podés pedirnos ver, corregir o borrar tus datos cuando quieras escribiendo a {mail}. Es tu derecho según la Ley 25.326 de Protección de Datos Personales.',
  ],
};

/** La 404 */
export const error404 = {
  rotulo: 'Página no encontrada',
  titulo: ['Esta página', 'no existe ', 'o se mudó.'],
  cta: 'Volver al inicio',
};

/**
 * La home nueva (rediseño 2026-10-25): la obra primero, texto llano y sin vocabulario de cine.
 * Va en este orden: la O (y la sección Estudio), la galería de trabajos, la gente que pasa,
 * más es más, cómo trabajamos y el final.
 */
export const inicio = {
  hero: {
    marca: 'Roda',
    /** Lo que lee un lector de pantalla en el título (las letras grandes son el logo) */
    lector: 'Roda, estudio de diseño y desarrollo web',
    linea: 'Diseñamos y programamos webs a medida.',
    hablemos: 'Hablemos',
    verTrabajos: 'Ver trabajos',
  },
  estudio: {
    titulo: 'Estudio',
    texto: 'Somos Giuli y Facu. Diseñamos y programamos cada web desde cero, y si nos escribís, te contestamos nosotros.',
    cta: 'Ver trabajos',
    foto: 'Giuliana y Facundo, abrazados y sonriendo, con un árbol detrás',
    /** Para lectores de pantalla: lo que pasa en el video del banner */
    video: 'Una persona hecha de píxeles trabaja en su escritorio: arma una web y termina diciendo Roda',
  },
  trabajos: { titulo: 'Trabajos', verTodos: 'Ver todos los trabajos' },
  /** La gente que pasa: por qué no funcionan las webs de la mayoría de los negocios. Sin números inventados. */
  gente: {
    titulo: 'Todos los días pasa gente por tu web.',
    bajada: 'La mayoría sigue de largo. Casi siempre por lo mismo:',
    // Cuando sumemos branding y redes, van acá motivos como "La marca no tiene una imagen propia"
    motivos: [
      'Se parece a todas: es una plantilla que usan miles de marcas.',
      'No se entiende qué hacés ni por qué elegirte.',
      'Tarda en cargar, y nadie espera.',
      'En el celu se ve rota.',
      'No hay un botón claro para escribirte.',
    ],
    remate: 'Cuando la web funciona, alguien se frena.',
  },
  /** Por qué Roda: solo cosas que ya cumplimos (están en /precios). Sin promesas ni números inventados. */
  porQue: {
    titulo: 'Por qué Roda',
    razones: [
      { nombre: 'Diseño propio', texto: 'Cada web la diseñamos desde cero para tu marca. No usamos plantillas.' },
      { nombre: 'Hablás con nosotros', texto: 'Del primer mensaje a la entrega te atendemos Giuli y Facu, sin intermediarios.' },
      { nombre: 'Cambios hasta que te guste', texto: 'Ajustamos sin límite sobre lo que acordamos, hasta que quede como la querés.' },
      { nombre: 'Precios a la vista', texto: 'Sabés cuánto sale antes de arrancar. Sin letra chica.' },
      { nombre: 'Todo a tu nombre', texto: 'El dominio, el hosting y la web quedan a tu nombre.' },
    ],
  },
  niveles: {
    titulo: 'Cómo trabajamos',
    proceso: 'Te escuchamos, te mostramos cómo va a quedar antes de hacerla, la hacemos y la publicamos. Cambios sin límite sobre lo acordado.',
    // PENDIENTE (Giuli/Facu): qué incluye Obra y si lleva precio
    obra: { nombre: 'Obra', precio: 'A consulta', texto: 'Dirección de arte y web, para marcas que quieren algo único. Lo charlamos y te pasamos una propuesta.' },
    verDetalle: 'Ver qué incluye cada una',
  },
  final: { titulo: '¿La próxima es tuya?', cta: 'Hablemos' },
};
