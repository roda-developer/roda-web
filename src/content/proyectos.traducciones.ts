/**
 * Los proyectos en inglés y portugués: solo los textos (los datos, como el slug o la URL, están en proyectos.ts).
 * creditosAfiche: los créditos al pie del afiche de cada proyecto ({entre llaves} va en letra chica).
 * Los testimonios están traducidos del español; la web lo aclara al lado de cada uno.
 */
import type { Proyecto } from './proyectos';

export type TextosProyecto = Pick<Proyecto, 'logline' | 'genero' | 'rol' | 'cliente' | 'desafio' | 'solucion' | 'destacados' | 'creditosAfiche'> & {
  testimonios?: { texto: string; destacado: string; rol: string }[];
};

export const TRADUCCIONES: Record<'en' | 'pt', Record<string, TextosProyecto>> = {
  en: {
    newave: {
      logline: 'Energy. Strength. Results.',
      genero: 'Online store',
      rol: 'Design and development',
      cliente: 'A sports supplement store.',
      desafio: 'It needed to sell products from many brands online, with a store that was tidy and easy to buy from.',
      solucion: ['A store with a catalog by category, a page for each product, search and a cart.'],
      destacados: ['Six categories to find each product fast', 'Best sellers on the home page', 'Search, user accounts and cart'],
      testimonios: [
        {
          texto: 'They understood exactly what we were looking for and did everything really fast. Whatever we asked them to change, they changed it without a problem. They didn’t stop working until we told them it was perfect!',
          destacado: 'They didn’t stop working until we told them it was perfect!',
          rol: 'Newave',
        },
      ],
      creditosAfiche: 'Roda {presents} Newave {a store for} sports supplements {with} a catalog by category {and} a shopping cart {design and development} Facundo Thibaut',
    },
    tmd: {
      logline: 'Your dream trip, one message away.',
      genero: 'Travel agency website',
      rol: 'Design and development',
      cliente: 'Travel agents from Buenos Aires, specialists in Disney, Universal, cruises and the Caribbean.',
      desafio: 'They needed a website that made people want to travel and ended in an inquiry.',
      solucion: ['A home page with their six destinations in large photos, a page for each service and a form that reaches their email.'],
      destacados: ['Six destinations in full screen', 'WhatsApp one tap away from any page', 'Cursor and particles in the brand colors'],
      creditosAfiche: 'Roda {presents} The Magical Duo {a travel agency for} Disney · Universal · cruises · Caribbean {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    muda: {
      logline: 'Aesthetics with purpose.',
      genero: 'Website + own dashboard',
      rol: 'Design and development',
      cliente: 'A creative production company in Palermo: photo, video, events, talent and studio rental.',
      desafio: 'They do many things and needed to show them in one place, and upload new work without depending on anyone.',
      solucion: ['A website led by images and their own panel: they upload their work and the website updates itself.'],
      destacados: ['An upload panel made for them', 'Each service with its own space', 'Designed for phones first'],
      creditosAfiche: 'Roda {presents} MUDA {full-service creative production} photo & video · creative direction · events · talent agency · studio in Palermo {with} own dashboard {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    emme: {
      logline: 'For those who don’t ask for permission.',
      genero: 'Agency website',
      rol: 'Art direction, design and development',
      cliente: 'A boutique creative agency.',
      desafio: 'They sell impact, and their website had to show it from the first second.',
      solucion: ['A website in black, white and red, with a hand-drawn logo and a manifesto you read as you scroll.'],
      destacados: ['Hand-drawn logo, sharp on any screen', 'Grain texture so it doesn’t feel flat', 'Smooth animations all the way through'],
      creditosAfiche: 'Roda {presents a website for} Emme Digital {with} a logo drawn stroke by stroke {and} a manifesto that reads as you scroll {art direction, design and development} Giuliana Di Rocco · Facundo Thibaut',
      testimonios: [
        {
          texto: 'An incredible experience from start to finish. They understood exactly what I was looking for and created a website that represents me 100%. Always attentive, willing and solving everything super fast. The result completely exceeded my expectations. I highly recommend them.',
          destacado: 'The result completely exceeded my expectations.',
          rol: 'Emme Digital',
        },
      ],
    },
    eber: {
      logline: 'Ten years of identities, in one place.',
      genero: 'Portfolio',
      rol: 'Design and development',
      cliente: 'Graphic designer, illustrator and type designer.',
      desafio: 'His work is very colorful and very varied, and he needed to organize it without dulling it.',
      solucion: ['A portfolio with a neutral background where the color comes from the work, with a page for each project, ready to send by link.'],
      destacados: ['Each project with its own page', 'Three color modes to choose from', 'A separate section for his personal work'],
    },
    craft: {
      logline: 'Your brand has a lot to say.',
      genero: 'Studio website + dashboard',
      rol: 'Design and development',
      cliente: 'A visual identity and communication studio in Buenos Aires, for growing brands.',
      desafio: 'A brand studio stakes its credibility on its own website. It had to feel warm and explain clearly how they work.',
      solucion: ['A website led by photos and process collages, with a panel to add projects without touching code.'],
      destacados: ['Collages and photos that tell the process', 'Their two ways of working, on one screen', 'Their own panel to upload projects'],
      creditosAfiche: 'Roda {presents} Craft Studio {a studio for} visual identity · branding · strategic communication {with} own dashboard {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    fidalgo: {
      logline: 'Cars and properties, dealing directly.',
      genero: 'Catalog + management dashboard',
      rol: 'Design and development',
      cliente: 'High-end cars and properties in Tucumán, Salta and Buenos Aires, dealing directly with the owner.',
      desafio: 'The catalog changes every week: he needed to manage it himself and have every inquiry end in a conversation.',
      solucion: ['A panel where he adds cars and properties without asking us. Each inquiry opens WhatsApp with the car, the price and the link already written.'],
      destacados: ['He publishes without depending on anyone', 'WhatsApp inquiries with the message ready', 'Properties on a map and a form to sell'],
      creditosAfiche: 'Roda {presents a website for} Fidalgo Select {a catalog of} cars · properties · investments {with} its own management dashboard {and} WhatsApp inquiries {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    unik: {
      logline: 'Your brand is unique. Let the world see it.',
      genero: 'Agency website',
      rol: 'Design and development',
      cliente: 'A creative advertising agency: branding, content and campaigns.',
      desafio: 'They define themselves as explosive and needed a website with that energy, one that led each visitor to write to them.',
      solucion: ['A violet and yellow website, with moving shapes, project galleries with zoom and WhatsApp one tap away.'],
      destacados: ['Their own cursor and menu', 'Full-screen zoom galleries', 'Designed separately for phone and computer'],
      creditosAfiche: 'Roda {presents} Unik {an agency for} branding · content · campaigns {with} custom cursor and menu {and} full-screen galleries {design and development} Giuliana Di Rocco · Facundo Thibaut',
      testimonios: [
        {
          texto: 'Going from a Canva PDF to a professional website completely changed how clients see us. They achieved a digital identity with animations that truly breaks the mold.',
          destacado: 'Completely changed how clients see us.',
          rol: 'Unik — Business Strategy',
        },
        {
          texto: 'We wanted access to our work and contact over WhatsApp to be direct and professional. Facu and Giuli gave us a flawless solution that made it easier for new clients to reach us.',
          destacado: 'A flawless solution.',
          rol: 'Unik — Creative Director',
        },
      ],
    },
  },
  pt: {
    newave: {
      logline: 'Energia. Força. Resultados.',
      genero: 'Loja online',
      rol: 'Design e desenvolvimento',
      cliente: 'Loja de suplementos esportivos.',
      desafio: 'Precisava vender online produtos de muitas marcas, com uma loja organizada e fácil de comprar.',
      solucion: ['Uma loja com catálogo por categorias, uma página para cada produto, busca e carrinho.'],
      destacados: ['Seis categorias para achar rápido cada produto', 'Os mais vendidos na página inicial', 'Busca, conta de usuário e carrinho'],
      testimonios: [
        {
          texto: 'Eles entenderam super bem o que a gente queria e fizeram tudo muito rápido. Tudo o que pedíamos para mudar, eles mudavam sem problema. Não pararam de trabalhar até a gente dizer que estava perfeito!',
          destacado: 'Não pararam de trabalhar até a gente dizer que estava perfeito!',
          rol: 'Newave',
        },
      ],
      creditosAfiche: 'Roda {apresenta} Newave {uma loja de} suplementos esportivos {com} catálogo por categorias {e} carrinho de compras {design e desenvolvimento} Facundo Thibaut',
    },
    tmd: {
      logline: 'A viagem dos seus sonhos, a uma mensagem de distância.',
      genero: 'Site de agência de viagens',
      rol: 'Design e desenvolvimento',
      cliente: 'Agentes de viagens de Buenos Aires, especialistas em Disney, Universal, cruzeiros e Caribe.',
      desafio: 'Precisavam de um site que desse vontade de viajar e terminasse em um contato.',
      solucion: ['Uma página inicial com seus seis destinos em fotos grandes, uma página por serviço e um formulário que chega no e-mail.'],
      destacados: ['Seis destinos em tela cheia', 'WhatsApp a um toque de qualquer página', 'Cursor e partículas com as cores da marca'],
      creditosAfiche: 'Roda {apresenta} The Magical Duo {uma agência de viagens para} Disney · Universal · cruzeiros · Caribe {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    muda: {
      logline: 'Estética com propósito.',
      genero: 'Site + painel próprio',
      rol: 'Design e desenvolvimento',
      cliente: 'Produtora criativa de Palermo: foto, vídeo, eventos, talentos e aluguel de estúdio.',
      desafio: 'Fazem muitas coisas e precisavam mostrar tudo em um só lugar, e subir trabalhos novos sem depender de ninguém.',
      solucion: ['Um site onde a imagem manda e um painel próprio: sobem os trabalhos e o site se atualiza sozinho.'],
      destacados: ['Painel de envio feito sob medida', 'Cada serviço com seu próprio espaço', 'Pensado primeiro para o celular'],
      creditosAfiche: 'Roda {apresenta} MUDA {produtora criativa completa} foto e vídeo · direção criativa · eventos · agência de talentos · estúdio em Palermo {com} painel próprio {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    emme: {
      logline: 'Para quem não pede licença.',
      genero: 'Site de agência',
      rol: 'Direção de arte, design e desenvolvimento',
      cliente: 'Agência criativa boutique.',
      desafio: 'Vendem impacto, e o site precisava transmitir isso desde o primeiro segundo.',
      solucion: ['Um site em preto, branco e vermelho, com o logo desenhado à mão e um manifesto que se lê conforme você desce.'],
      destacados: ['Logo desenhado à mão, nítido em qualquer tela', 'Textura de grão para não parecer plano', 'Animações suaves em todo o percurso'],
      creditosAfiche: 'Roda {apresenta um site para} Emme Digital {com} um logotipo desenhado traço por traço {e} um manifesto que se lê ao rolar {direção de arte, design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
      testimonios: [
        {
          texto: 'Uma experiência incrível do começo ao fim. Eles entenderam exatamente o que eu buscava e criaram um site que me representa 100%. Sempre atentos, prestativos e resolvendo tudo rapidíssimo. O resultado superou totalmente as minhas expectativas. Recomendo demais.',
          destacado: 'O resultado superou totalmente as minhas expectativas.',
          rol: 'Emme Digital',
        },
      ],
    },
    eber: {
      logline: 'Dez anos de identidades, num só lugar.',
      genero: 'Portfólio',
      rol: 'Design e desenvolvimento',
      cliente: 'Designer gráfico, ilustrador e tipógrafo.',
      desafio: 'Tem trabalhos muito coloridos e muito diferentes, e precisava organizá-los sem apagá-los.',
      solucion: ['Um portfólio de fundo neutro onde a cor vem dos trabalhos, com uma página para cada projeto, pronta para enviar por link.'],
      destacados: ['Cada projeto com sua própria página', 'Três modos de cor à escolha', 'Uma seção à parte para a obra pessoal'],
    },
    craft: {
      logline: 'Sua marca tem muito a dizer.',
      genero: 'Site de estúdio + painel',
      rol: 'Design e desenvolvimento',
      cliente: 'Estúdio de identidade visual e comunicação de Buenos Aires, para marcas em crescimento.',
      desafio: 'Um estúdio de marca aposta a credibilidade no próprio site. Precisava ser acolhedor e explicar bem como trabalham.',
      solucion: ['Um site com fotos em destaque e colagens do processo, e um painel para somar projetos sem mexer em código.'],
      destacados: ['Colagens e fotos que contam o processo', 'Suas duas formas de trabalhar, em uma só tela', 'Painel próprio para subir projetos'],
      creditosAfiche: 'Roda {apresenta} Craft Studio {um estúdio de} identidade visual · branding · comunicação estratégica {com} painel próprio {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    fidalgo: {
      logline: 'Carros e imóveis, com trato direto.',
      genero: 'Catálogo + painel de gestão',
      rol: 'Design e desenvolvimento',
      cliente: 'Carros e imóveis de alto padrão em Tucumán, Salta e Buenos Aires, com contato direto com o dono.',
      desafio: 'O catálogo muda toda semana: precisava cuidar dele sozinho e que cada contato terminasse em uma conversa.',
      solucion: ['Um painel onde ele adiciona carros e imóveis sem nos pedir nada. Cada contato abre o WhatsApp com o carro, o preço e o link já escritos.'],
      destacados: ['Publica sem depender de ninguém', 'Contatos por WhatsApp com a mensagem pronta', 'Imóveis em um mapa e formulário para vender'],
      creditosAfiche: 'Roda {apresenta um site para} Fidalgo Select {catálogo de} carros · imóveis · investimentos {com} painel de gestão próprio {e} consultas por WhatsApp {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    unik: {
      logline: 'Sua marca é única. Que o mundo veja.',
      genero: 'Site de agência',
      rol: 'Design e desenvolvimento',
      cliente: 'Agência de publicidade criativa: branding, conteúdo e campanhas.',
      desafio: 'Se definem como uma agência explosiva e precisavam de um site com essa energia, que levasse cada visitante a entrar em contato.',
      solucion: ['Um site violeta e amarelo, com formas em movimento, galerias de projetos com zoom e WhatsApp a um toque.'],
      destacados: ['Cursor e menu próprios', 'Galerias com zoom em tela cheia', 'Desenhado à parte para celular e computador'],
      creditosAfiche: 'Roda {apresenta} Unik {uma agência de} branding · conteúdo · campanhas {com} cursor e menu próprios {e} galerias em tela cheia {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
      testimonios: [
        {
          texto: 'Passar de um PDF no Canva para um site profissional mudou totalmente como os clientes veem a gente. Eles conseguiram uma identidade digital com animações que realmente foge do convencional.',
          destacado: 'Mudou totalmente como os clientes veem a gente.',
          rol: 'Unik — Business Strategy',
        },
        {
          texto: 'Queríamos que o acesso ao nosso trabalho e o contato por WhatsApp fossem diretos e profissionais. Facu e Giuli nos deram uma solução impecável, que facilitou a chegada de novos clientes.',
          destacado: 'Uma solução impecável.',
          rol: 'Unik — Diretora Criativa',
        },
      ],
    },
  },
};
