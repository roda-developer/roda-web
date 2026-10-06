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
      cliente: 'A sports supplement store: protein, creatine, pre-workouts, minerals, collagen and snacks.',
      desafio: 'A store carrying many brands had to look premium and tidy, and take people from the catalog to checkout without detours.',
      solucion: [
        'A dark store with gold details, high-impact type and products floating on the home page, in tune with the world of training.',
        'A catalog by category, a page for each product, search, user accounts and a shopping cart.',
      ],
      destacados: ['Catalog in six categories', 'Best sellers on the home page', 'Search, user accounts and cart'],
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
      cliente: 'Travel agents from Buenos Aires specializing in Disney, Universal, cruises and the Caribbean, with personal advice in Spanish.',
      desafio: 'Selling a trip is selling a dream. The website had to make people want to travel and, at the same time, turn every visit into a conversation with them.',
      solucion: [
        'A home page that moves through the six destinations (Disney, Universal, cruises, beaches, tours and hotels) with full-screen photos and the brand\'s promise: "Your dream trip, one message away".',
        'A page for each service and another for packages, a form that lands straight in their inbox and WhatsApp always at hand.',
      ],
      destacados: ['Six destinations in a full-screen carousel', 'Custom cursor and particles in the brand colors', 'WhatsApp one tap away from any page'],
      creditosAfiche: 'Roda {presents} The Magical Duo {a travel agency for} Disney · Universal · cruises · Caribbean {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    muda: {
      logline: 'Aesthetics with purpose.',
      genero: 'Website + own dashboard',
      rol: 'Design and development',
      cliente: 'A full-service creative production house in Palermo, Buenos Aires, run by Justina Porta and Lucila Beltramino: photo and video production, creative direction, events, a talent agency and studio rental.',
      desafio: 'They do lots of different things and all of it had to fit in one website without looking like a catalog. And they needed to show new work all the time, without depending on anyone to upload it.',
      solucion: [
        'A sober, editorial website in burgundy and white, where the image leads and the text supports it.',
        'Behind it, a private dashboard of their own: the MUDA team uploads their work and photos, and the website updates itself.',
      ],
      destacados: ['An upload dashboard built to measure, separate from the public website', 'Every service with its own space, without mixing audiences', 'Designed to look good on mobile first'],
      creditosAfiche: 'Roda {presents} MUDA {full-service creative production} photo & video · creative direction · events · talent agency · studio in Palermo {with} own dashboard {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    emme: {
      logline: 'For those who don’t ask for permission.',
      genero: 'Agency website',
      rol: 'Art direction, design and development',
      cliente: 'A boutique creative agency. Their tagline says it all: “We create the new standard for those who don’t ask for permission.”',
      desafio: 'An agency that sells impact can’t have a shy website. It had to feel like opening a fashion magazine, not like walking into a corporate site.',
      solucion: [
        'An editorial, brutalist website in black, white and a red that doesn’t apologize. The EMME letters aren’t a typeface: they’re drawn stroke by stroke.',
        'The manifesto reads as you scroll, and the projects open like magazine pages.',
      ],
      destacados: ['A hand-drawn logo, sharp on any screen', 'Grain and chalk textures so it never feels flat', 'Smooth animations all the way through'],
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
      cliente: 'Graphic designer, illustrator and type designer. Art direction for the textile industry, entertainment and children’s content.',
      desafio: 'Very colorful work, and very different from piece to piece. The portfolio had to bring order without dimming it, and let each project tell its own story.',
      solucion: [
        'A neutral background that lets the projects bring the color. Each case has its own page, ready to be shared by link.',
        'Three ways to view it (dark, light and cream), remembered the next time you come back.',
      ],
      destacados: ['Each case study with its own link', 'Three color modes, chosen by the visitor', 'Images that load at just the right size for each screen'],
    },
    craft: {
      logline: 'Your brand has a lot to say.',
      genero: 'Studio website + dashboard',
      rol: 'Design and development',
      cliente: 'A visual identity, branding and strategic communication studio in Buenos Aires, for growing brands.',
      desafio: 'A branding studio stakes its credibility on its own website. It had to feel warm and crafted, while making clear how they work.',
      solucion: [
        'A website led by photography, with characterful type and collages that show the process, not just the result.',
        'Its own dashboard so the studio can add projects and brands without touching code.',
      ],
      destacados: ['Collages and photos that tell the process', 'Their two ways of working, explained on a single screen', 'Own dashboard to upload projects'],
      creditosAfiche: 'Roda {presents} Craft Studio {a studio for} visual identity · branding · strategic communication {with} own dashboard {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    fidalgo: {
      logline: 'Cars and properties, dealing directly.',
      genero: 'Catalog + management dashboard',
      rol: 'Design and development',
      cliente: 'A selection of high-end cars and properties in Tucumán, Salta and Buenos Aires, dealing directly with the owner.',
      desafio: 'A catalog that changes every week, with lots of heavy photos, and a client who needed to run it alone. Every inquiry had to end in a conversation.',
      solucion: [
        'A catalog the client runs from his own dashboard: he adds cars, properties and even new categories without asking us for anything.',
        'Every inquiry opens WhatsApp with the car, the price and the link already written. Properties show on a map, and anyone who wants to sell fills in a form.',
        'We found photos weighing up to 8 MB because of a bug in the previous system and rebuilt them: now each photo is loaded at just the right size.',
      ],
      destacados: ['Own dashboard: the client publishes without depending on anyone', 'WhatsApp inquiries with the message already written', 'Properties on a map and a form to sell'],
      creditosAfiche: 'Roda {presents a website for} Fidalgo Select {a catalog of} cars · properties · investments {with} its own management dashboard {and} WhatsApp inquiries {design and development} Giuliana Di Rocco · Facundo Thibaut',
    },
    unik: {
      logline: 'Your brand is unique. Let the world see it.',
      genero: 'Agency website',
      rol: 'Design and development',
      cliente: 'A creative advertising agency: branding, content and campaigns, led by a duo.',
      desafio: 'An agency that calls itself “explosive” couldn’t have a neat, gray website. It needed their energy and, even so, had to lead every visitor to get in touch.',
      solucion: [
        'Purple, yellow and shapes that move: a website with the agency’s personality, from top to bottom.',
        'Projects open in galleries with zoom, and WhatsApp is one tap away from the home page, the services and the footer.',
      ],
      destacados: ['Custom cursor and menu that respond to movement', 'Project galleries with full-screen zoom', 'Different on mobile and desktop, designed for each'],
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
      cliente: 'Loja de suplementos esportivos: proteínas, creatinas, pré-treinos, minerais, colágenos e snacks.',
      desafio: 'Uma loja com produtos de muitas marcas tinha que parecer premium e organizada, e levar do catálogo à compra sem rodeios.',
      solucion: [
        'Uma loja escura com detalhes dourados, tipografia de alto impacto e os produtos flutuando na página inicial, em sintonia com o mundo do treino.',
        'Um catálogo por categorias, uma página para cada produto, busca, conta de usuário e carrinho de compras.',
      ],
      destacados: ['Catálogo em seis categorias', 'Os mais vendidos na página inicial', 'Busca, conta de usuário e carrinho'],
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
      cliente: 'Agentes de viagem de Buenos Aires especializados em Disney, Universal, cruzeiros e Caribe, com atendimento personalizado em espanhol.',
      desafio: 'Vender uma viagem é vender um sonho. O site tinha que dar vontade de viajar e, ao mesmo tempo, levar cada visita a uma conversa com eles.',
      solucion: [
        'Uma página inicial que passa pelos seis destinos (Disney, Universal, cruzeiros, praias, passeios e hotéis) com fotos em tela cheia e a promessa da marca: "A viagem dos seus sonhos, a uma mensagem de distância".',
        'Uma página para cada serviço e outra de pacotes, um formulário que chega direto no e-mail deles e o WhatsApp sempre à mão.',
      ],
      destacados: ['Seis destinos num carrossel em tela cheia', 'Cursor próprio e partículas nas cores da marca', 'WhatsApp a um toque de qualquer página'],
      creditosAfiche: 'Roda {apresenta} The Magical Duo {uma agência de viagens para} Disney · Universal · cruzeiros · Caribe {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    muda: {
      logline: 'Estética com propósito.',
      genero: 'Site + painel próprio',
      rol: 'Design e desenvolvimento',
      cliente: 'Produtora criativa completa em Palermo, Buenos Aires, de Justina Porta e Lucila Beltramino: produção de foto e vídeo, direção criativa, eventos, agência de talentos e aluguel de estúdio.',
      desafio: 'Elas fazem muitas coisas diferentes e tudo precisava caber num site só, sem parecer um catálogo. E precisavam mostrar trabalhos novos o tempo todo, sem depender de ninguém para subir.',
      solucion: [
        'Um site sóbrio e editorial, em bordô e branco, onde a imagem manda e o texto acompanha.',
        'Do outro lado, um painel próprio e privado: a equipe da MUDA sobe seus trabalhos e fotos, e o site se atualiza sozinho.',
      ],
      destacados: ['Um painel de cadastro feito sob medida, separado do site público', 'Cada serviço com seu espaço, sem misturar públicos', 'Pensado para ser visto primeiro no celular'],
      creditosAfiche: 'Roda {apresenta} MUDA {produtora criativa completa} foto e vídeo · direção criativa · eventos · agência de talentos · estúdio em Palermo {com} painel próprio {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    emme: {
      logline: 'Para quem não pede licença.',
      genero: 'Site de agência',
      rol: 'Direção de arte, design e desenvolvimento',
      cliente: 'Agência criativa boutique. A frase dela diz tudo: “Criamos o novo padrão para quem não pede licença”.',
      desafio: 'Uma agência que vende impacto não pode ter um site tímido. Tinha que parecer abrir uma revista de moda, não entrar num site corporativo.',
      solucion: [
        'Um site editorial e brutalista, em preto, branco e um vermelho que não pede desculpas. As letras de EMME não são uma fonte: foram desenhadas traço por traço.',
        'O manifesto se lê conforme você rola, e os trabalhos se abrem como páginas de revista.',
      ],
      destacados: ['Logotipo desenhado à mão, nítido em qualquer tela', 'Textura de granulado e giz para não parecer chapado', 'Animações suaves do começo ao fim'],
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
      cliente: 'Designer gráfico, ilustrador e tipógrafo. Direção de arte para a indústria têxtil, o entretenimento e conteúdos infantis.',
      desafio: 'Um trabalho muito colorido e muito diferente entre si. O portfólio tinha que organizar sem apagar, e deixar cada projeto se contar sozinho.',
      solucion: [
        'Um fundo neutro que deixa a cor por conta dos projetos. Cada case tem sua própria página, pronta para mandar por link.',
        'Três modos de ver (escuro, claro e creme), que são lembrados na próxima vez que você volta.',
      ],
      destacados: ['Cada case com seu próprio link', 'Três modos de cor à escolha do visitante', 'Imagens que carregam no tamanho certo para cada tela'],
    },
    craft: {
      logline: 'Sua marca tem muito a dizer.',
      genero: 'Site de estúdio + painel',
      rol: 'Design e desenvolvimento',
      cliente: 'Estúdio de identidade visual, branding e comunicação estratégica em Buenos Aires, para marcas em crescimento.',
      desafio: 'Um estúdio de marca aposta a credibilidade no próprio site. Tinha que ser acolhedor e artesanal e, ao mesmo tempo, deixar claro como trabalham.',
      solucion: [
        'Um site com a fotografia como protagonista, tipografia com personalidade e colagens que mostram o processo, não só o resultado.',
        'Um painel próprio para o estúdio adicionar projetos e marcas sem mexer em código.',
      ],
      destacados: ['Colagens e fotos que contam o processo', 'As duas formas de trabalhar, explicadas numa tela só', 'Painel próprio para cadastrar projetos'],
      creditosAfiche: 'Roda {apresenta} Craft Studio {um estúdio de} identidade visual · branding · comunicação estratégica {com} painel próprio {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    fidalgo: {
      logline: 'Carros e imóveis, com trato direto.',
      genero: 'Catálogo + painel de gestão',
      rol: 'Design e desenvolvimento',
      cliente: 'Seleção de carros e imóveis de alto padrão em Tucumán, Salta e Buenos Aires, com trato direto com o dono.',
      desafio: 'Um catálogo que muda toda semana, com muitas fotos pesadas, e um cliente que precisava administrar sozinho. Cada consulta tinha que terminar numa conversa.',
      solucion: [
        'Um catálogo que o cliente administra do próprio painel: adiciona carros, imóveis e até categorias novas sem pedir nada pra gente.',
        'Cada consulta abre o WhatsApp com o carro, o preço e o link já escritos. Os imóveis aparecem num mapa, e quem quer vender preenche um formulário.',
        'Encontramos fotos de até 8 MB por um erro do sistema anterior e refizemos: agora cada foto é carregada no tamanho certo.',
      ],
      destacados: ['Painel próprio: o cliente publica sem depender de ninguém', 'Consultas por WhatsApp com a mensagem já pronta', 'Imóveis no mapa e formulário para vender'],
      creditosAfiche: 'Roda {apresenta um site para} Fidalgo Select {catálogo de} carros · imóveis · investimentos {com} painel de gestão próprio {e} consultas por WhatsApp {design e desenvolvimento} Giuliana Di Rocco · Facundo Thibaut',
    },
    unik: {
      logline: 'Sua marca é única. Que o mundo veja.',
      genero: 'Site de agência',
      rol: 'Design e desenvolvimento',
      cliente: 'Agência de publicidade criativa: branding, conteúdo e campanhas, com uma dupla à frente.',
      desafio: 'Uma agência que se define como “explosiva” não podia ter um site certinho e cinza. Tinha que ter a energia delas e, mesmo assim, levar cada visitante a escrever.',
      solucion: [
        'Roxo, amarelo e formas que se mexem: um site com a personalidade da agência, de ponta a ponta.',
        'Os projetos se abrem em galerias com zoom, e o WhatsApp está a um toque da página inicial, dos serviços e do rodapé.',
      ],
      destacados: ['Cursor e menu próprios, que respondem ao movimento', 'Galerias de projeto com zoom em tela cheia', 'Diferente no celular e no computador, pensado para cada um'],
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
