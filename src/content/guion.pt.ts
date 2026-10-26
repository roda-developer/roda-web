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
  inicio: { titulo: 'Roda — Estúdio web', descripcion: 'A Roda é Giuliana e Facundo, um estúdio de design e desenvolvimento web de Buenos Aires. Criamos e programamos cada site do zero.' },
  precios: { titulo: 'Preços — Roda', descripcion: 'Landing US$ 300, Multipágina US$ 400, Loja US$ 550. Veja o que cada um inclui, sem letras miúdas.' },
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
  saltar: 'Pular para o conteúdo',
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
  leerMas: 'Ler mais',
  leerMenos: 'Ler menos',
  giro: 'A virada',
  technicolor: 'Technicolor: às vezes mais é mais',
  mas: 'mais',
  estreno: 'Sua estreia',
};

export const nav: typeof ES.nav = {
  proyectos: 'Projetos',
  nosotros: 'Sobre',
  precios: 'Preços',
  atajo: 'Vamos falar',
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
  cta: 'Vamos falar',
  descargar: 'Baixar pôster',
  estiloEtiqueta: 'Estilo',
  estilos: { estreno: 'Estreia', cartel: 'Cartaz', autor: 'Autor' },
  colorEtiqueta: 'Cor',
  colores: { rosa: 'Rosa', amarillo: 'Amarelo', azul: 'Azul', rojo: 'Vermelho', verde: 'Verde' },
  compartir: 'Compartilhar',
  alternativa: 'ou escreva para',
  formulario: 'Ou conte mais no formulário',
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
    { id: 'tienda', nombre: 'Loja', precio: 550, incluye: 'Carrinho, meio de pagamento e painel para seus produtos. Ideal se você vende produtos.' },
  ],
  todas: ['Design próprio', 'Ajustes sem limite sobre o combinado', 'No ar em 1 a 4 semanas', 'Manutenção opcional a partir de US$ 20/mês'],
  verTodo: 'Ver o que cada plano inclui',
  adicionales: {
    rotulo: 'Adicionais',
    titulo: 'Adicione o que precisar.',
    lista: [
      { nombre: 'Painel próprio', detalle: 'Você sobe seus projetos, produtos e novidades sem depender de ninguém', nota: 'Para Landing e Multipágina. Na Loja já vem incluído.', precio: 150 },
      { nombre: 'Agendamentos', detalle: 'Reservam sozinhos, a qualquer hora', precio: 100 },
      { nombre: 'Outro idioma', detalle: 'Seu site também em inglês ou espanhol, ou no que você precisar', nota: 'Preço por idioma. Inclui os textos do site; os produtos de uma Loja são traduzidos à parte.', precio: 80 },
      {
        nombre: 'Envios automáticos',
        detalle: 'O cliente calcula o frete pelo CEP e a etiqueta é gerada sozinha quando ele paga.',
        nota: 'Para a Loja. Integra com os Correios ou a plataforma de envios do seu país (Correios/Melhor Envio, Correo Argentino, Andreani etc.). O frete de cada envio é pago pelo comprador ao finalizar a compra. A conta na plataforma de envios fica no seu nome e precisa de saldo para comprar as etiquetas.',
        precio: 200,
      },
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
    aliada: 'Também precisa de branding ou gestão de redes sociais? Trabalhamos com uma parceira que cuida disso e faz o orçamento à parte.',
  },
  dominio: {
    pregunta: 'E o domínio e a hospedagem?',
    respuestas: [
      'Você compra o domínio (suamarca.com) e ele fica no seu nome. Custa em torno de US$ 10 a US$ 15 por ano (um .com.br, menos). A gente te orienta na compra.',
      'O e-mail com o seu domínio (voce@suamarca.com) é contratado à parte, no Google Workspace ou no Zoho, a partir de US$ 1 a US$ 7 por mês por caixa. A gente te ajuda a configurar.',
      'A hospedagem, onde o seu site mora, na maioria dos casos é grátis. Se o seu projeto precisar de mais, avisamos antes de começar.',
      'As lojas com banco de dados e pagamentos online usam uma hospedagem paga: fica no seu nome e você paga direto ao provedor, normalmente entre US$ 5 e US$ 20 por mês, conforme o tráfego. Avisamos antes de começar.',
    ],
  },
};

export const preciosPagina: typeof ES.preciosPagina = {
  rotulo: 'Preços',
  titulo: ['Quanto custa', 'o seu site.'],
  bajada: 'Preços à vista, sem letras miúdas. Veja o que cada um inclui.',
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
    tienda: { ideal: 'Ideal se você vende produtos.', clave: ['Carrinho', 'Meio de pagamento', 'Painel para cadastrar seus produtos'], detalle: 'No painel você cadastra seus produtos, preços, fotos, tamanhos ou cores e estoque. A gente te ensina a usar: testamos com produtos de exemplo e os reais você cadastra.', mantenimiento: 35 },
  },
  mantenimiento: {
    linea: 'Manutenção opcional: US$ {precio}/mês',
  },
  creditos: {
    titulo: 'Todos incluem',
    lista: [
      ['Design', 'Próprio, feito à mão'],
      ['Telas', 'Celular, tablet e computador'],
      ['Contato', 'Botões de WhatsApp e formulário'],
      ['Ajustes', 'Sem limite sobre o combinado'],
      ['Entrega', 'Em 1 a 2 semanas (Loja, 2 a 4)'],
      ['Garantia', '30 dias de correções depois de publicar'],
      ['Hospedagem', 'Grátis na maioria dos casos'],
      ['Google', 'Indexação e SEO técnico'],
      ['Tudo no seu nome', 'Domínio, hospedagem e site'],
    ],
    aviso: 'Sem letras miúdas.',
  },
  moneda: {
    tipo: 'brl',
    etiqueta: 'Ver quanto custa hoje em reais',
    hoy: 'Hoje: R$ {valor}',
    simbolo: 'R$',
    sigla: 'R$',
    referencia: 'Preço fixo: US$ {valor}',
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
    { p: 'Tenho que pagar algo por mês?', r: ['Em geral, não. Você paga o seu site uma vez só. A hospedagem, na maioria dos casos, é grátis, e o domínio (suamarca.com) se renova uma vez por ano, no seu nome.', 'A exceção são as lojas com banco de dados e pagamentos online: usam uma hospedagem paga, no seu nome, que você paga direto ao provedor (normalmente entre US$ 5 e US$ 20 por mês, conforme o tráfego). Avisamos antes de começar.', 'Se você quiser que a gente continue atualizando o seu site, existe uma manutenção mensal totalmente opcional: Landing US$ 20, Multipágina US$ 25 e Loja US$ 35, com até 4 ajustes por mês. Sem fidelidade: cancela quando quiser.'] },
    { p: 'Como é o pagamento?', r: ['Metade no início e a outra metade quando entregamos o site. Em dólares ou o equivalente em reais.'] },
    { p: 'E se eu não gostar de como ficou?', r: ['A gente muda. Não tem limite de rodadas de ajustes sobre o que combinamos: trabalhamos até ficar perfeito para você.', 'Se você quiser incluir algo novo (uma seção, uma página ou uma função que não estava prevista), a gente orça à parte antes de fazer.'] },
    { p: 'Preciso ter os textos e as fotos?', r: ['O ideal é que sim: ninguém conta a sua marca melhor do que você. Se não tiver, podemos usar imagens da internet e escrever os textos com inteligência artificial.', 'Numa Loja, as fotos dos produtos precisam ser suas: a fotografia não está incluída.'] },
    { p: 'O meio de pagamento cobra alguma coisa?', r: ['Sim, uma taxa por venda, que não é nossa: dependendo do país e da forma de pagamento, costuma ficar entre 3% e 7%. A conta (Mercado Pago, Stripe, PagSeguro ou outra) é aberta por você, no seu nome, e o dinheiro de cada venda cai direto para você.'] },
    {
      p: 'Vou aparecer em primeiro no Google?',
      r: [
        'Não de cara, e desconfie de quem prometer isso. O que fazemos é SEO técnico e indexação: seu site sai rápido, com títulos e descrições pensados para o Google, e a gente cadastra para o Google saber que ele existe.',
        'Essa é a base, mas sozinha não posiciona. Subir em buscas como “confeitaria em Pinheiros” leva tempo, conteúdo e, muitas vezes, anúncios.',
      ],
    },
    { p: 'E o domínio e a hospedagem?', r: planes.dominio.respuestas },
    { p: 'Posso atualizar o site sozinho?', r: ['Pode. Na Loja o painel já vem incluído: você cadastra produtos, preços e estoque quando quiser. Na Landing e na Multipágina, é só adicionar o Painel próprio para subir seus projetos e novidades sem depender de ninguém. E se preferir que a gente faça, tem a manutenção opcional.'] },
  ],
  final: {
    titulo: 'Bora começar?',
    texto: 'Conte sobre a sua marca e a gente diz qual combina com você.',
    cta: 'Vamos falar',
  },
};

export const contactoPagina: typeof ES.contactoPagina = {
  rotulo: 'Contato',
  titulo: ['Conte', 'o que você precisa.'],
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

export const laCritica: typeof ES.laCritica = { titulo: 'O que dizem', completo: 'O que dizem nossos clientes' };

export const nosotros: typeof ES.nosotros = {
  bajo: 'Casal e sócios',
  grande: 'Sobre nós',
  creditos: [
    ['Direção', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Design e desenvolvimento', 'Giuliana Di Rocco · Facundo Thibaut'],
    ['Formação', 'Técnico em Desenvolvimento Web, UNLaM'],
    ['Inteligência Artificial', 'Giuliana Di Rocco'],
    ['Locações', 'Aonde a próxima viagem levar'],
    ['Agradecimentos', 'A cada cliente que nos deixou contar a sua história'],
  ],
  aviso: 'Nenhum site foi feito com templates durante esta produção.',
  rotulo: ['Sobre nós', 'Os créditos'],
  // Antes: bajada: 'Somos a Giuli e o Facu. Somos um casal e fazemos sites juntos. Gostamos que cada site seja diferente, por isso desenhamos e programamos do zero. Se você escrever pra gente, quem responde somos nós.',
  bajada: 'Somos a Giuli e o Facu, casal e sócios. Desenhamos e programamos sites sob medida, do zero e sem templates. Se você escrever pra gente, quem responde somos nós.',
  hicimos: { titulo: 'O que já fizemos', texto: 'Publicamos {n} sites para marcas reais:', verTodos: 'Ver todos os projetos' },
  formacion: 'Como aprendemos',
  foto: { alt: 'Giuliana e Facundo abraçados e sorrindo, com uma árvore atrás', pie: ['(Fotograma) Giuliana e Facundo', '2026'] },
  personas: [
    { nombre: 'Giuli', texto: 'Me formei como técnica em desenvolvimento web na UNLaM e agora estou estudando inteligência artificial.' },
    { nombre: 'Facu', texto: 'Estou terminando o mesmo curso.' },
  ],
  filmamos: ['Vamos fazer', 'o seu?'],
  cta: 'Vamos falar',
};

export const privacidad: typeof ES.privacidad = {
  rotulo: 'Privacidade',
  titulo: 'Seus dados, bem cuidados.',
  parrafos: [
    'Quando você preenche o formulário de contato, recebemos os dados que escreveu: seu nome, seu WhatsApp ou e-mail, sua marca, seu site e sua mensagem. Se você agenda uma conversa, o Cal.com nos passa seu nome, seu e-mail e o horário escolhido.',
    '**Usamos só para responder você** e, se trabalharmos juntos, para fazer o seu site. Não vendemos, não compartilhamos com ninguém para publicidade e não colocamos você em nenhuma lista de e-mails.',
    'Para receber esses dados usamos dois serviços: Web3Forms (o formulário chega por e-mail) e Cal.com (a agenda de reuniões). O site está hospedado na Cloudflare. Não usamos cookies de publicidade nem de rastreamento.',
    'Você pode pedir para ver, corrigir ou apagar seus dados quando quiser, escrevendo para {mail}. É um direito seu pela Lei 25.326 de Proteção de Dados Pessoais da Argentina.',
  ],
};

export const error404: typeof ES.error404 = {
  rotulo: 'Página não encontrada',
  titulo: ['Esta página', 'não existe ', 'ou mudou de lugar.'],
  cta: 'Voltar ao início',
};

export const inicio: typeof ES.inicio = {
  hero: {
    marca: 'Roda',
    lector: 'Roda, estúdio de design e desenvolvimento web',
    linea: 'Criamos e programamos sites sob medida.',
    hablemos: 'Vamos falar',
    verTrabajos: 'Ver trabalhos',
  },
  estudio: {
    titulo: 'Estúdio',
    texto: 'Somos Giuli e Facu. Criamos e programamos cada site do zero, e quando você escreve, somos nós que respondemos.',
    cta: 'Ver trabalhos',
    foto: 'Giuliana e Facundo, abraçados e sorrindo, com uma árvore atrás',
  },
  trabajos: { titulo: 'Trabalhos', verTodos: 'Ver todos os trabalhos' },
  gente: {
    titulo: 'Todos os dias passa gente pelo seu site.',
    bajada: 'A maioria segue em frente. Quase sempre pelos mesmos motivos:',
    motivos: [
      'Parece com todos: é um modelo que milhares de marcas usam.',
      'Não dá para entender o que você faz nem por que escolher você.',
      'Demora para carregar, e ninguém espera.',
      'No celular, aparece quebrado.',
      'Não tem um botão claro para falar com você.',
    ],
    remate: 'Quando o site funciona, alguém para.',
  },
  deCerca: {
    titulo: '{titulo}, de perto',
    marca: 'A marca',
    afiche: 'O cartaz',
    web: 'O site',
    celu: 'No celular',
    dijo: 'O que disseram',
    verCaso: 'Ver o caso completo',
  },
  niveles: {
    titulo: 'Como trabalhamos',
    proceso: 'Escutamos, mostramos como vai ficar antes de fazer, fazemos e publicamos. Alterações sem limite dentro do combinado.',
    obra: { nombre: 'Obra', precio: 'Sob consulta', texto: 'Direção de arte e site para marcas que querem algo único. Conversamos e enviamos uma proposta.' },
    verDetalle: 'Ver o que cada um inclui',
  },
  final: { titulo: 'A próxima é sua?', cta: 'Vamos falar' },
};
