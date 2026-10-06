/**
 * Todo o texto do site, em português do Brasil. Adaptado (não traduzido ao pé da letra) de guion.ts: mesma forma,
 * mesmo humor, escrito como um brasileiro diria. {marcadores} são preenchidos com rellenar().
 */
import type * as ES from './guion';

export const loader: typeof ES.loader = {
  frase: 'Toda marca começa com uma história.',
  presenta: 'Roda apresenta',
};

export const metas: typeof ES.metas = {
  inicio: { titulo: 'Roda — Estúdio web', descripcion: 'Sites que contam uma história. A Roda é Giuliana e Facundo: design e desenvolvimento web sob medida, de Buenos Aires para o mundo.' },
  precios: { titulo: 'Preços — Roda', descripcion: 'Landing US$ 300, Multipágina US$ 400, Loja US$ 550. Abra cada pasta e veja o que vem dentro.' },
  contacto: { titulo: 'Contato — Roda', descripcion: 'Conte o que você procura: uma landing, um site multipágina, uma loja online ou um sistema sob medida. Respondemos rapidinho.' },
  nosotros: { titulo: 'Sobre — Roda', descripcion: 'A Roda é Giuliana e Facundo: casal, sócios e desenvolvedores web de Buenos Aires.' },
  proyectos: { titulo: 'Projetos — Roda', descripcion: 'Sites que fizemos: MUDA, Emme Digital, Eber, Craft Studio, Fidalgo Select, Unik, The Magical Duo e Newave.' },
  privacidad: { titulo: 'Privacidade — Roda', descripcion: 'Quais dados a Roda guarda quando você nos escreve e para que usamos.' },
  caso: '{titulo} — Roda',
  error: 'Página não encontrada — Roda',
  empresa: 'Estúdio de design e desenvolvimento web de Buenos Aires, para clientes do mundo todo: landings, sites multipágina e lojas online.',
};

export const ui: typeof ES.ui = {
  principal: 'Principal',
  navegacion: 'Menu',
  abrirMenu: 'Abrir menu',
  cerrarMenu: 'Fechar menu',
  volverInicio: 'Roda, voltar ao início',
  estudio: 'Roda — Estúdio web',
  desde: 'De Buenos Aires para o mundo',
  idioma: 'Idioma',
  subtitulos: 'Legendas',
  cambiarIdioma: 'Idioma: {idioma}. Mudar',
  creditosPie: 'Créditos',
  escribinos: 'Escreva pra gente',
  seguinos: 'Siga a gente',
  mira: 'Veja',
  contacto: 'Contato',
  privacidad: 'Privacidade',
  traducido: 'Traduzido do espanhol',
  postCreditos: 'Cena pós-créditos',
  actoUno: 'Ato um: a primeira impressão',
  giro: 'A virada',
  technicolor: 'Technicolor: às vezes mais é mais',
  mas: 'mais',
  acto: 'Ato',
  parte: 'Parte',
  estreno: 'Sua estreia',
};

export const nav: typeof ES.nav = {
  proyectos: 'Projetos',
  nosotros: 'Sobre',
  precios: 'Preços',
  atajo: 'Vamos falar',
};

export const apertura: typeof ES.apertura = {
  titulo: ['Sua marca já tem', 'uma história.'],
  enfasis: ['uma ', 'história.'],
  bajada: 'Falta contar onde procuram por você.',
  queHacemos: 'Estúdio de design e desenvolvimento web · De Buenos Aires para o mundo',
  verPrecios: 'Ver preços →',
};

export const actoUno: typeof ES.actoUno = {
  rotulo: ['01', 'A primeira impressão'],
  lineas: ['Alguém ouve falar de você e te procura.', 'O que encontra decide se vai te escrever.'],
  golpe: ['Não lê.', 'Olha.'],
  generica: {
    marca: 'Sua Marca',
    menu: ['Início', 'Sobre', 'Serviços', 'Contato'],
    titulo: 'Bem-vindos ao nosso site',
    texto: 'Somos uma empresa líder comprometida com a excelência e a qualidade em cada um dos nossos serviços.',
    boton: 'Saiba mais',
  },
  encuentra: 'O que costuma encontrar:',
  notas: ['Um template que outras mil marcas usam.', 'Uma foto de banco de imagens.', '“Saiba mais”… sobre o quê?'],
  cuenta: 'segundos para decidir',
  cierre: ['E vai embora.', 'Você não perdeu uma visita.', 'Perdeu um cliente.'],
  cierreEnfasis: ['Perdeu um ', 'cliente.'],
};

export const actoDos: typeof ES.actoDos = {
  rotulo: ['02', 'O que um bom site faz'],
  titulo: 'Um bom site faz três coisas.',
  planos: [
    { titulo: 'Se entende na hora.', texto: 'O que você faz e por que você, antes que a pessoa precise procurar.' },
    { titulo: 'Carrega antes de você piscar.', texto: 'A cada segundo de espera, alguém vai embora.' },
    { titulo: 'Leva a um lugar só.', texto: 'O site que pede tudo não consegue nada.' },
  ],
  pesa: 'Esta página pesa',
  poco: 'pouquinho',
};

export const giro: typeof ES.giro = {
  cita: 'Menos é mais.',
  autor: 'Ludwig Mies van der Rohe',
  replica: '…às vezes.',
};

export const technicolor: typeof ES.technicolor = {
  grito: ['E às vezes', 'mais', 'é mais.'],
  letras: ['M', 'AI', 'S'],
  cinta: ['Mais cor', 'Mais barulho', 'Mais você', 'Mais vontade', 'Mais marca'],
  firma: 'Alguns que a gente fez',
  verTodos: 'Ver todos os projetos',
  corte: ['O segredo não é escolher um estilo.', 'É saber qual a sua marca precisa.'],
  corteEnfasis: ['É saber qual a sua ', 'marca precisa.'],
  webDe: 'Site da {titulo}',
};

export const actoTres: typeof ES.actoTres = {
  rotulo: ['03', 'Como trabalhamos'],
  titulo: 'Da ideia ao seu site, em cinco passos.',
  pasos: [
    { nombre: 'A gente escuta.', cine: 'Roteiro', texto: 'Sua marca, com quem você fala e o que quer que aconteça quando alguém chega.' },
    { nombre: 'Mostramos como vai ficar.', cine: 'Storyboard', texto: 'Você vê cada tela antes de ela existir.' },
    { nombre: 'A gente constrói.', cine: 'Filmagem', texto: 'Sob medida, sem templates. Rápido e leve.' },
    { nombre: 'A gente publica.', cine: 'Estreia', texto: 'Ele sai para o mundo, pronto para ser encontrado.' },
    { nombre: 'E seguimos juntos.', cine: 'E depois', texto: 'A gente cuida dele e faz ele crescer. E as mensagens começam a chegar.' },
  ],
  obra: {
    notas: ['Marca: a sua', 'Fala com: quem procura o que você faz', 'Objetivo: que te escrevam'],
    marca: 'Sua marca',
    titular: 'O que você faz, em uma linha.',
    bajada: 'E por que escolher você.',
    boton: 'Escreva pra gente',
    url: 'suamarca.com',
    enLinea: 'No ar',
    mensaje: ['Nova mensagem', 'Oi! Vi seu site e queria perguntar…'],
  },
};

export const proyectosPagina: typeof ES.proyectosPagina = {
  titulo: 'Projetos selecionados',
  bajada: 'Cada um feito sob medida para a sua marca. Estes são alguns dos que já fizemos.',
  pregunta: 'O que você faz?',
  ayuda: 'Escolha seu ramo e mostramos primeiro o que está mais perto de você.',
  todos: 'Todos',
  cerca: 'Perto do seu',
  verCaso: 'Ver o case',
  verEnVivo: 'Ver no ar',
  otraPestana: '(abre em outra aba)',
  siguiente: 'Próximo projeto',
  volverAtras: 'Voltar',
  enCelular: '(No celular)',
  portadaDe: 'Página inicial do site da {titulo}',
  pantallaDe: '{titulo}, tela {n}',
  celularDe: '{titulo} no celular',
  mostrandoPrimero: 'Mostrando primeiro projetos de {rubro}',
  ficha: { rubro: 'Ramo', anio: 'Ano', rol: 'O que fizemos', genero: 'O que é' },
  secciones: { cliente: 'O cliente', desafio: 'O desafio', solucion: 'O que fizemos', destacados: 'Detalhes', resultado: 'Resultado' },
  afiche: { estreno: 'Estreia 2026', pantallas: 'Em todas as telas' },
};

export const rubros: typeof ES.rubros = {
  gastronomia: 'Gastronomia',
  moda: 'Moda',
  salud: 'Saúde e bem-estar',
  servicios: 'Serviços profissionais',
  arte: 'Arte e design',
  otro: 'Outros',
};

export const creativos: typeof ES.creativos = {
  pregunta: 'Você faz design ou cuida de marcas?',
  cta: 'Vamos trabalhar juntos',
  mensaje: 'Faço design ou cuido de marcas e quero trabalhar com a Roda.',
};

export const creditos: typeof ES.creditos = {
  intro: 'A Roda é',
  nombres: [
    { nombre: 'Giuliana', rol: 'Direção · Desenvolvimento' },
    { nombre: 'Facundo', rol: 'Direção · Desenvolvimento' },
  ],
  y: 'e',
  lema: ['Casal e sócios.', 'Um mesmo olhar.'],
  ficha: [
    ['Design e desenvolvimento', 'Giuliana e Facundo'],
    ['Feito', 'À mão, sem templates'],
    ['Duração', 'O tempo que você levar rolando'],
  ],
};

export const cierre: typeof ES.cierre = {
  rotulo: ['05', 'A estreia'],
  pregunta: 'Qual é o nome da sua marca?',
  ayuda: 'Escreva e veja seu pôster de estreia.',
  placeholder: 'Sua marca',
  cta: 'Vamos conversar',
  descargar: 'Baixar pôster',
  estiloEtiqueta: 'Estilo',
  estilos: { estreno: 'Estreia', cartel: 'Cartaz', autor: 'Autor' },
  colorEtiqueta: 'Cor',
  colores: { rosa: 'Rosa', amarillo: 'Amarelo', azul: 'Azul', rojo: 'Vermelho', verde: 'Verde' },
  compartir: 'Compartilhar',
  alternativa: 'ou escreva para',
  formulario: 'Ou conte mais no formulário →',
  mail: {
    asunto: 'A história de {marca}',
    asuntoSinMarca: 'Minha história',
    cuerpo: 'Oi, Roda! Sou da {marca}. Queremos começar a contar a nossa história.',
    cuerpoSinMarca: 'Oi, Roda! Quero contar a minha história.',
  },
  descripcion: 'Pôster de estreia: Roda apresenta {marca}. {antes}. {genero}{estreno} {soloEn} {dominio}.',
  afiche: {
    presenta: 'apresenta',
    antes: 'Uma história que ainda não contamos',
    historiaPara: 'Uma história para que {objetivo}',
    paraQue: { escriba: 'te escrevam', compre: 'comprem de você', reserve: 'reservem com você', vea: 'vejam seu trabalho' },
    reestreno: 'Reestreia',
    genero: 'Gênero',
    vacio: 'Sua marca',
    creditos: [
      ['Uma produção', 'Roda'],
      ['Dirigido por', 'você'],
      ['Roteiro', 'sua história'],
      ['Design e desenvolvimento', 'Giuliana e Facundo'],
      ['Com participação especial de', 'seus clientes'],
    ],
    proximamente: 'Em breve',
    soloEn: 'só em',
    dominio: 'suamarca.com',
  },
  postCreditos: 'Se você chegou até aqui, já sabe que a gente adora um bom final. Vamos começar o seu.',
};

export const planes: typeof ES.planes = {
  moneda: 'US$',
  lista: [
    { id: 'landing', nombre: 'Landing', precio: 300, incluye: 'Uma página só. Ideal se você está começando ou lançando algo pontual.' },
    { id: 'multiseccion', nombre: 'Multipágina', precio: 400, incluye: 'Até 5 páginas. Ideal se você tem vários serviços ou trabalhos para mostrar.' },
    { id: 'tienda', nombre: 'Loja', precio: 550, incluye: 'Carrinho e meio de pagamento. Ideal se você vende produtos.' },
  ],
  todas: ['Design próprio', 'Ajustes sem limite', 'No ar em 1 a 2 semanas', 'Manutenção opcional a partir de US$ 20/mês'],
  verTodo: 'Ver o que cada plano inclui',
  adicionales: {
    rotulo: 'Adicionais',
    titulo: 'Adicione o que precisar.',
    lista: [
      { nombre: 'Painel próprio', detalle: 'Você sobe seus projetos, produtos e novidades sem depender de ninguém', precio: 150 },
      { nombre: 'Agendamentos', detalle: 'Reservam sozinhos, a qualquer hora', precio: 100 },
      { nombre: 'Outro idioma', detalle: 'Seu site também em inglês ou espanhol, ou no que você precisar', precio: 100 },
    ],
  },
  aMedida: {
    rotulo: 'Sob medida',
    titulo: 'O seu não cabe em nenhuma pasta?',
    texto: 'Fazemos sistemas sob medida: o que hoje você resolve à mão, numa planilha ou por mensagem, transformado numa ferramenta para o seu negócio. Também sites com mais de 10 páginas. Pensamos juntos e mandamos um orçamento.',
    ejemplosTitulo: 'Por exemplo (toque nos que parecem com o seu)',
    ejemplos: [
      'Agendamentos com sinal e lembretes',
      'Estoque e vendas da sua loja',
      'Orçamentos que se montam sozinhos',
      'Pedidos de atacado',
      'Reservas de quadras, salas ou equipamentos',
      'Gestão de alunos, sócios ou pacientes',
      'Um portal para seus clientes acompanharem o pedido',
      'Um painel com os números do seu negócio',
    ],
    cta: 'Conte o que você precisa',
  },
  dominio: {
    pregunta: 'E o domínio e a hospedagem?',
    respuestas: [
      'Você compra o domínio (suamarca.com) e ele fica no seu nome. A gente te orienta na compra.',
      'A hospedagem, onde o seu site mora, na maioria dos casos é grátis. Se o seu projeto precisar de mais, avisamos antes de começar.',
    ],
  },
};

export const preciosPagina: typeof ES.preciosPagina = {
  rotulo: 'Preços',
  titulo: ['Quanto custa', 'a sua estreia.'],
  bajada: 'Preços à vista, sem letras miúdas. Abra cada pasta.',
  rotulos: {
    planes: ['01', 'Os planos'],
    extras: ['02', 'Adicionais'],
    preguntas: ['03', 'Perguntas'],
  },
  queTrae: 'O que vem no plano {plan}',
  defineElPlan: 'O que define o plano',
  precio: 'Preço: {moneda} {precio}',
  fichas: {
    landing: { ideal: 'Ideal se você está começando ou lançando algo pontual.', clave: ['1 página'], mantenimiento: 20 },
    multiseccion: { ideal: 'Ideal se você tem vários serviços ou trabalhos para mostrar.', clave: ['Até 5 páginas', 'Página extra US$ 30'], mantenimiento: 25 },
    tienda: { ideal: 'Ideal se você vende produtos.', clave: ['Carrinho', 'Meio de pagamento'], mantenimiento: 35 },
  },
  mantenimiento: {
    linea: 'Manutenção opcional: US$ {precio}/mês',
  },
  creditos: {
    titulo: 'Todos incluem',
    lista: [
      ['Design', 'Próprio, feito à mão'],
      ['Telas', 'Celular, tablet e computador'],
      ['Contato', 'Botão de WhatsApp'],
      ['Ajustes', 'Sem limite, até você amar'],
      ['Estreia', 'Em 1 a 2 semanas'],
      ['Hospedagem', 'Grátis na maioria dos casos'],
      ['Google', 'Indexação e SEO técnico'],
    ],
    aviso: 'Nenhum site deste cartaz vem com letras miúdas.',
  },
  moneda: {
    tipo: 'brl',
    etiqueta: 'Ver quanto custa hoje em reais',
    hoy: 'Hoje: R$ {valor}',
    cotizacion: 'US$ 1 = R$ {valor} · {fecha}',
  },
  pedir: 'Quero este',
  carpetas: {
    landing: [{ id: 'inicio', nombre: 'Início' }],
    multiseccion: [
      { id: 'inicio', nombre: 'Início' },
      { id: 'servicios', nombre: 'Serviços' },
      { id: 'mas', nombre: '+3', etiqueta: 'Mais três páginas' },
    ],
    tienda: [
      { id: 'catalogo', nombre: 'Catálogo' },
      { id: 'carrito', nombre: 'Carrinho', carrito: true },
    ],
  },
  preguntas: [
    { p: 'Tenho que pagar algo por mês?', r: ['Não. Você paga o seu site uma vez só. A hospedagem, na maioria dos casos, é grátis, e o domínio (suamarca.com) se renova uma vez por ano, no seu nome.', 'Se você quiser que a gente continue atualizando o seu site, existe uma manutenção mensal totalmente opcional: Landing US$ 20, Multipágina US$ 25 e Loja US$ 35, com até 4 ajustes por mês. Sem fidelidade: cancela quando quiser.'] },
    { p: 'Como é o pagamento?', r: ['Metade no início e a outra metade quando entregamos o site. Em dólares ou o equivalente em reais.'] },
    { p: 'E se eu não gostar de como ficou?', r: ['A gente muda. Não tem limite de rodadas de ajustes: trabalhamos até ficar perfeito para você.'] },
    { p: 'Preciso ter os textos e as fotos?', r: ['O ideal é que sim: ninguém conta a sua marca melhor do que você. Se não tiver, podemos usar imagens da internet e escrever os textos com inteligência artificial.'] },
    {
      p: 'Vou aparecer em primeiro no Google?',
      r: [
        'Não de cara, e desconfie de quem prometer isso. O que fazemos é SEO técnico e indexação: seu site sai rápido, com títulos e descrições pensados para o Google, e a gente cadastra para o Google saber que ele existe.',
        'Essa é a base, mas sozinha não posiciona. Subir em buscas como “confeitaria em Pinheiros” leva tempo, conteúdo e, muitas vezes, anúncios.',
      ],
    },
    { p: 'E o domínio e a hospedagem?', r: planes.dominio.respuestas },
    { p: 'Posso atualizar o site sozinho?', r: ['Pode, se adicionar o Painel próprio: você sobe seus projetos, produtos e novidades sem depender de ninguém. E se preferir que a gente faça, tem a manutenção opcional.'] },
  ],
  final: {
    titulo: 'Bora começar?',
    texto: 'Conte sobre a sua marca e a gente diz qual pasta combina com você.',
    cta: 'Vamos conversar',
  },
};

export const contactoPagina: typeof ES.contactoPagina = {
  rotulo: 'Contato',
  titulo: ['Conte', 'a sua história.'],
  bajada: 'Leva dois minutos. Com isso, chegamos na conversa já sabendo o que você precisa.',
  tipos: {
    pregunta: 'O que você procura?',
    opciones: [
      { id: 'landing', nombre: 'Landing' },
      { id: 'multiseccion', nombre: 'Site multipágina' },
      { id: 'tienda', nombre: 'Loja online' },
      { id: 'sistema', nombre: 'Sistema sob medida' },
      { id: 'nose', nombre: 'Ainda não sei' },
    ],
  },
  ideas: { etiqueta: 'O que você gostaria de resolver?', ayuda: 'Por exemplo: hoje anoto os agendamentos numa planilha e eles se atropelam.' },
  nombre: { etiqueta: 'Seu nome', placeholder: 'Como você se chama' },
  marca: { etiqueta: 'Sua marca ou negócio', placeholder: 'Opcional' },
  contacto: { etiqueta: 'Seu WhatsApp ou e-mail', placeholder: 'Para podermos responder' },
  web: { etiqueta: 'Seu site ou Instagram, se tiver', placeholder: 'Opcional' },
  mensaje: { etiqueta: 'Conte um pouco, ou pergunte o que quiser', placeholder: 'O que você faz, o que precisa, quais dúvidas tem…' },
  agenda: {
    cta: 'Agendar uma conversa',
    otros: { titulo: 'Quer adiantar a conversa?', texto: 'Escolha um horário de 30 minutos e conversamos por videochamada.' },
    sistema: { titulo: 'Para mandar um orçamento, vamos conversar 30 minutos.', texto: 'Escolha o horário que for melhor para você e entendemos bem o que você precisa.' },
  },
  falta: 'Conte o que você procura, seu nome e como te responder.',
  enviarMail: 'Enviar',
  enviando: 'Enviando…',
  avisoMail: 'Chega na hora pra gente. Respondemos por WhatsApp ou e-mail, como você preferir.',
  privacidad: { texto: 'Usamos seus dados só para responder você.', link: 'Privacidade' },
  despues: {
    titulo: 'O que acontece depois',
    pasos: [
      'Lemos a sua mensagem e respondemos por WhatsApp ou e-mail.',
      'Se quiser, conversamos 30 minutos por videochamada.',
      'Mandamos a proposta e, se fizer sentido para você, começamos.',
    ],
  },
  exito: {
    titulo: 'Pronto!',
    texto: 'Obrigado, {nombre}. Sua mensagem chegou: a gente te escreve em breve.',
    whatsapp: 'Quer conversar agora? Abra o WhatsApp',
  },
  errorEnvio: 'Não conseguimos enviar. Tente de novo daqui a pouco: seus dados continuam preenchidos.',
  directo: 'Prefere escrever direto?',
  directoCta: 'Abrir WhatsApp',
  lineas: {
    hola: 'Oi, Roda! Sou {nombre}{marca}.',
    holaMarca: ', da {marca}',
    busco: 'Procuro: {tipo}.',
    resolver: 'Gostaria de resolver: {texto}',
    web: 'Meu site ou Instagram: {web}',
    contacto: 'Podem falar comigo por: {dato}',
  },
};

export const laCritica: typeof ES.laCritica = { titulo: 'A crítica diz', completo: 'O que diz a crítica' };

export const cartelera: typeof ES.cartelera = {
  rotulo: ['04', 'O que fazemos'],
  titulo: ['Em cartaz.', 'Três sites, três gêneros.'],
  deslizar: 'Deslize para ver mais',
  navegar: 'Navegar pelo cartaz',
  anterior: 'Filme anterior',
  siguiente: 'Próximo filme',
  presenta: 'apresenta',
  escribinos: 'Escreva pra gente →',
  enCartel: 'Em cartaz',
  peliculas: [
    { id: 'landing', dibujo: 'landing', articulo: 'A', titulo: 'Landing', frase: 'Uma página. Um só objetivo.', creditos: 'Direto ao ponto · Um botão, uma mensagem', precio: 'US$ 300', color: 'rojo' },
    { id: 'multiseccion', dibujo: 'portfolio', articulo: 'O', titulo: 'Multipágina', frase: 'Seu trabalho, na tela grande.', creditos: 'Até 5 páginas · Para contar tudo', precio: 'US$ 400', color: 'rosa' },
    { id: 'tienda', dibujo: 'tienda', articulo: 'A', titulo: 'Loja', frase: 'Vende enquanto você dorme.', creditos: 'Com seus produtos · E pagamento online', precio: 'US$ 550', color: 'amarillo' },
  ],
};

export const nosotros: typeof ES.nosotros = {
  secuencia: {
    otraVez: 'Ver de novo',
    legal: '© 2026 Roda · Produzido em Buenos Aires · Todos os direitos reservados',
    cuadros: [
      { fondo: 'negro', tipo: 'presenta', texto: 'Roda apresenta', ms: 1500 },
      { fondo: 'juntos', tipo: 'titulo', palabras: ['Um', 'Mesmo', 'Olhar'], lados: ['Roda', '26'], ms: 2800 },
      { fondo: 'juntos', tipo: 'credito', disposicion: 'lados', rol: 'Estrelando', nombres: ['Giuliana Di Rocco', 'Facundo Thibaut'], ms: 2400 },
      { fondo: 'viaje', tipo: 'credito', disposicion: 'esquina', rol: 'Filmado em', nombres: ['Buenos Aires'], ms: 2000 },
      { fondo: 'viaje', tipo: 'tagline', lineas: ['Cada site que fazemos é uma viagem.', 'E a gente ama viajar.'], ms: 4200 },
      { fondo: 'negro', tipo: 'cierre', texto: 'Roda', ms: 0 },
    ],
  },
  bajo: 'Casal, sócios e desenvolvedores web',
  grande: 'Sobre nós',
  creditos: [
    ['Direção', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Design e desenvolvimento', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Formação', 'Técnico em Desenvolvimento Web, UNLaM'],
    ['Inteligência Artificial', 'Giuliana Di Rocco'],
    ['Ciberdefesa', 'Os dois, em breve'],
    ['Locações', 'Aonde a próxima viagem levar'],
    ['Agradecimentos', 'A cada cliente que nos deixou contar a sua história'],
  ],
  aviso: 'Nenhum site foi feito com templates durante esta produção.',
  rotulo: ['Sobre nós', 'Os créditos'],
  bajada: 'Somos Giuliana e Facundo: casal e sócios. Estudamos juntos Desenvolvimento Web na UNLaM, em Buenos Aires, e desde então fazemos sites à mão, sem templates. Quando você escreve pra gente, fala com quem faz.',
  foto: { alt: 'Giuliana e Facundo sorrindo sob um teto de luzes douradas', pie: ['(Fotograma) Giuliana e Facundo', '2026'] },
  personas: [
    { nombre: 'Giuliana Di Rocco', texto: 'Técnica em Desenvolvimento Web pela UNLaM. Hoje estuda a graduação em Inteligência Artificial.' },
    { nombre: 'Facundo Thibaut', texto: 'Está terminando o curso técnico de Desenvolvimento Web na UNLaM.' },
  ],
  juntos: 'E os dois estamos para começar a graduação em Ciberdefesa.',
  filmamos: ['Vamos filmar', 'a sua?'],
  cta: 'Vamos conversar',
};

export const privacidad: typeof ES.privacidad = {
  rotulo: 'Privacidade',
  titulo: 'Seus dados, bem cuidados.',
  parrafos: [
    'Quando você preenche o formulário de contato, recebemos os dados que escreveu: seu nome, seu WhatsApp ou e-mail, sua marca, seu site e sua mensagem. Se você agenda uma conversa, o Cal.com nos passa seu nome, seu e-mail e o horário escolhido.',
    '**Usamos só para responder você** e, se trabalharmos juntos, para fazer o seu site. Não vendemos, não compartilhamos com ninguém para publicidade e não colocamos você em nenhuma lista de e-mails.',
    'Para receber esses dados usamos dois serviços: Web3Forms (o formulário chega por e-mail) e Cal.com (a agenda de reuniões). O site está hospedado na Vercel. Não usamos cookies de publicidade nem de rastreamento.',
    'Você pode pedir para ver, corrigir ou apagar seus dados quando quiser, escrevendo para {mail}. É um direito seu pela Lei 25.326 de Proteção de Dados Pessoais da Argentina.',
  ],
};

export const error404: typeof ES.error404 = {
  rotulo: 'Cena excluída',
  titulo: ['Esta parte', 'não entrou no ', 'corte final.'],
  cta: 'Voltar ao início',
};
