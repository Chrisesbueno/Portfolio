import * as All from '../assets/index'


export const base = {
    nickname: '@chrisesbueno',
    name: 'Christopher Alvarez',
    job: 'Web Developer',
    description: "I'm web developer based in Venezuela, and i'm very passionate and dedicated to my work.",
    img: All.Chris
}

export const menu = [
    {
        id: 'menu-1',
        link: 'home',
        icon: 'uil uil-estate',
        title: 'Home',
    },
    {
        id: 'menu-2',
        link: 'about',
        icon: 'uil uil-user',
        title: 'About',
    },
    {
        id: 'menu-3',
        link: 'skills',
        icon: 'uil uil-file-alt',
        title: 'Skills',
    },
    {
        id: 'menu-4',
        link: 'portfolio',
        icon: 'uil uil-scenery',
        title: 'Portfolio',
    },
    {
        id: 'menu-5',
        link: 'qualification',
        icon: 'uil uil-briefcase-alt',
        title: 'Qualification',
    },
    {
        id: 'menu-6',
        link: 'contact',
        icon: 'uil uil-message',
        title: 'Contact',
    },
];

export const social = [
    {
        id: 'social-1',
        link: 'https://github.com/Chrisesbueno',
        icon: 'uil uil-github-alt',
    },
    {
        id: 'social-2',
        link: 'https://www.linkedin.com/in/christopher-alvarez-a90a47254/',
        icon: 'uil uil-linkedin-alt',
    },
    {
        id: 'social-3',
        link: 'https://twitter.com/chrisesbueno',
        icon: 'uil uil-twitter-alt',
    },
];

export const buttons = [
    {
        id: 'button-1',
        link: '#contact',
        title: 'Say Hello',
        icon: 'uil uil-message',
    },
    {
        id: 'button-2',
        link: '',
        title: 'Donwload CV',
        icon: 'uil uil-file-download',
    },
    {
        id: 'button-3',
        link: '',
        title: 'Send Message',
        icon: 'uil uil-envelope-upload',
    },
    {
        id: 'button-4',
        link: 'https://github.com/Chrisesbueno',
        title: 'All view projects & Challenges',
        icon: 'uil uil-github-alt',
    },
];

export const aboutSpecs = [
    {
        id: 'spec-1',
        title: 'Experience',
        subtitle: '2+ Years',
        icon: 'bx bx-award',
    },
    {
        id: 'spec-2',
        title: 'Completed',
        subtitle: '30+ Projects',
        icon: 'bx bx-briefcase-alt',
    },
    {
        id: 'spec-3',
        title: 'Support',
        subtitle: 'Online 24/7',
        icon: 'bx bx-support',
    },
];

export const baseAbout = {
    title: 'About Me',
    subtitle: 'My introduction',
    description: 'Frontend developer, I create web pages with UI / UX user interface, I have couple of years of experience and happy with this'
}

export const baseSkills = {
    title: 'Skills',
    subtitle: 'My technical level',
    description: 'Frontend developer, I create web pages with UI / UX user interface, I have couple of years of experience and happy with this',
    frontend: 'Frontend Developer',
    backend: 'Backend Developer',

}

export const skillsFrontend = [
    {
        id: 'front-1',
        title: 'HTML5',
        level: 'Advanced',
        icon: All.HTML,
    },
    {
        id: 'front-2',
        title: 'CSS3',
        level: 'Advanced',
        icon: All.CSS,
    },
    {
        id: 'front-3',
        title: 'JavaScript',
        level: 'Intermediate',
        icon: All.JS,
    },
    {
        id: 'front-4',
        title: 'React.js',
        level: 'Intermediate',
        icon: All.React,
    },
    {
        id: 'front-5',
        title: 'Redux',
        level: 'Intermediate',
        icon: All.Redux,
    },
    {
        id: 'front-6',
        title: 'SASS',
        level: 'Intermediate',
        icon: All.SASS,
    },
    {
        id: 'front-7',
        title: 'TypeScript',
        level: 'Intermediate',
        icon: All.TS,
    },
    {
        id: 'front-8',
        title: 'Flutter',
        level: 'Basic',
        icon: All.Flutter,
    },
    {
        id: 'front-9',
        title: 'Git',
        level: 'Intermediate',
        icon: All.Git,
    },
    {
        id: 'front-10',
        title: 'Next.js',
        level: 'Intermediate',
        icon: All.Next,
    },
]

export const skillsBackend = [
    {
        id: 'back-1',
        title: 'Node.js',
        level: 'Intermediate',
        icon: All.Node,
    },
    {
        id: 'back-2',
        title: 'MySQL',
        level: 'Basic',
        icon: All.MYSQL,
    },
    {
        id: 'back-3',
        title: 'SQL',
        level: 'Basic',
        icon: All.SQL,
    },
    {
        id: 'back-4',
        title: 'Firebase',
        level: 'Intermediate',
        icon: All.Firebase,
    },
    {
        id: 'back-5',
        title: 'Sanity',
        level: 'Basic',
        icon: All.Sanity,
    },

]

export const baseQualification = {
    title: 'Qualification',
    subtitle: 'My personal journey',
    description: 'Frontend developer, I create web pages with UI / UX user interface, I have couple of years of experience and happy with this',
    frontend: 'Frontend Developer',
    backend: 'Backend Developer',
    education: {
        title: 'Education',
        icon: 'uil uil-graduation-cap',
    },
    experience: {
        title: 'Experience',
        icon: 'uil uil-briefcase-alt',
    },
    course: 'Course'
}

export const qualificationEducation = [
    {
        id: 'edu-1',
        direction: 'left',
        title: 'Engineer Electronic of Computation',
        subtitle: 'UNY - Venezuela',
        icon: 'uil uil-calendar-alt',
        date: '2016 - In process',
    },
    {
        id: 'edu-2',
        direction: 'right',
        title: 'Platzi',
        subtitle: 'Online - Courses',
        icon: 'uil uil-calendar-alt',
        date: '2020 - Present',
    },
    {
        id: 'edu-3',
        direction: 'left',
        title: 'Codigo Facilito',
        subtitle: 'Online - Courses',
        icon: 'uil uil-calendar-alt',
        date: '2021 - Present',
    },
    {
        id: 'edu-4',
        direction: 'right',
        title: 'devChallenges.io',
        subtitle: 'Online - Courses & Challenges',
        icon: 'uil uil-calendar-alt',
        date: '2021 - Present',
        last: 'yes'
    },
]

export const qualificationExperience = [
    {
        id: 'ex-1',
        direction: 'right',
        title: 'Jarcontable',
        subtitle: 'Peru - Lima',
        icon: 'uil uil-calendar-alt',
        date: '2018 - 2019',
    },
    {
        id: 'ex-2',
        direction: 'left',
        title: 'Ever Star',
        subtitle: 'Peru - Lima',
        icon: 'uil uil-calendar-alt',
        date: '2020 - 2022',
    },
    {
        id: 'ex-3',
        direction: 'right',
        title: 'FrontendMentor',
        subtitle: 'Online - Challenges',
        icon: 'uil uil-calendar-alt',
        date: '2021 - Present',
    },
    {
        id: 'ex-4',
        direction: 'left',
        title: 'devChallenges.io',
        subtitle: 'Online - Challenges',
        icon: 'uil uil-calendar-alt',
        date: '2022 - Present',
        last: 'yes'
    },
]

export const baseContact = {
    title: 'Get in touch',
    subtitle: 'Contact Me',
    contactTitle: 'Talk to me',
    contactSubtitle: 'Write me',
    name: 'name',
    email: 'email',
    message: 'message'
}

export const cardContact = [
    {
        id: 'card-1',
        title: 'Email',
        data: 'alvarezchristopherve@gmail.com',
        icon: 'bx bx-mail-send',
    },
    {
        id: 'card-2',
        title: 'WhatsApp',
        data: '+ 51 900 923 770',
        icon: 'bx bxl-whatsapp',
    },
    {
        id: 'card-3',
        title: 'Twitter',
        data: '@chrisesbueno',
        icon: 'bx bxl-twitter',
    },
]

export const basePortfolio = {
    title: 'Portfolio',
    subtitle: 'Most recent projects & challenges',
    repository: 'Repository',
    demo: 'Demo',
}

export const projectsPortfolio = [
    {
        id: 'me-1',
        title: 'Metaversus Web',
        img: All.Metaverse,
        repository: 'https://github.com/Chrisesbueno/metaversus-web',
        demo: 'https://chrisesbueno.github.io/metaversus-web/',
    },
    {
        id: 'me-2',
        title: 'Hoobank Page',
        img: All.Hoobank,
        repository: 'https://github.com/Chrisesbueno/hoobank-page',
        demo: 'https://hoobank-chrisesbueno.netlify.app/',
    },
    {
        id: 'me-3',
        title: 'Esportmaniacos',
        img: All.Esportmaniacos,
        repository: 'https://github.com/Chrisesbueno/esportmaniacos-web',
        demo: 'https://esportmaniacos.netlify.app/',
    },
    {
        id: 'me-4',
        title: 'GPT-3 Page',
        img: All.GPT3,
        repository: 'https://github.com/Chrisesbueno/gpt-3',
        demo: 'https://gpt3-chrisesbueno.netlify.app/',
    },
    {
        id: 'me-5',
        title: 'Sunnyside Agency',
        img: All.Sunnyside,
        repository: 'https://github.com/Chrisesbueno/sunnyside-agency',
        demo: 'https://chrisesbueno.github.io/sunnyside-agency/',
    },
    {
        id: 'me-6',
        title: 'Blogr Landing',
        img: All.Blogr,
        repository: 'https://github.com/Chrisesbueno/blogr-landing',
        demo: 'https://chrisesbueno.github.io/blogr-landing/',
    },
    {
        id: 'me-7',
        title: 'Tip Calculator',
        img: All.Calculator,
        repository: 'https://github.com/Chrisesbueno/tip-calculator',
        demo: 'https://chrisesbueno.github.io/tip-calculator/',
    },
    {
        id: 'me-8',
        title: 'Time Tracking',
        img: All.Tracking,
        repository: 'https://github.com/Chrisesbueno/time-tracking',
        demo: 'https://chrisesbueno.github.io/time-tracking/',
    },
    {
        id: 'me-9',
        title: 'News Homepage',
        img: All.NewsHomepage,
        repository: 'https://github.com/Chrisesbueno/news-homepage',
        demo: 'https://chrisesbueno.github.io/news-homepage/',
    },
    {
        id: 'me-10',
        title: 'Advice Generator',
        img: All.Advice,
        repository: 'https://github.com/Chrisesbueno/advice-generator',
        demo: 'https://chrisesbueno.github.io/advice-generator/',
    },
    {
        id: 'me-11',
        title: 'Intro Section',
        img: All.Intro,
        repository: 'https://github.com/Chrisesbueno/intro-section',
        demo: 'https://chrisesbueno.github.io/intro-section/',
    },
    {
        id: 'me-12',
        title: 'Expenses Chart',
        img: All.Chart,
        repository: 'https://github.com/Chrisesbueno/expenses-chart',
        demo: 'https://chrisesbueno.github.io/expenses-chart/',
    },
    {
        id: 'me-13',
        title: 'Interactive Card',
        img: All.InteractiveCard,
        repository: 'https://github.com/Chrisesbueno/interactive-card',
        demo: 'https://chrisesbueno.github.io/interactive-card/',
    },
    {
        id: 'me-14',
        title: 'Notifications Page',
        img: All.Notifications,
        repository: 'https://github.com/Chrisesbueno/notifications-page',
        demo: 'https://chrisesbueno.github.io/notifications-page/',
    },
    {
        id: 'me-15',
        title: 'Huddle Landing Page',
        img: All.Huddle,
        repository: 'https://github.com/Chrisesbueno/huddle-landing-page',
        demo: 'https://chrisesbueno.github.io/huddle-landing-page/',
    },
    {
        id: 'me-16',
        title: 'Ping Coming Soon Page',
        img: All.Ping,
        repository: 'https://github.com/Chrisesbueno/ping-coming-soon-page',
        demo: 'https://chrisesbueno.github.io/ping-coming-soon-page/',
    },
    {
        id: 'me-17',
        title: 'Sign-Up Form',
        img: All.SignUp,
        repository: 'https://github.com/Chrisesbueno/signup-form',
        demo: 'https://chrisesbueno.github.io/signup-form/',
    },
    {
        id: 'me-18',
        title: 'Base Apparel',
        img: All.BaseApparel,
        repository: 'https://github.com/Chrisesbueno/base-apparel',
        demo: 'https://chrisesbueno.github.io/base-apparel/',
    },
    {
        id: 'me-19',
        title: 'Single Price',
        img: All.SinglePrice,
        repository: 'https://github.com/Chrisesbueno/single-price',
        demo: 'https://chrisesbueno.github.io/single-price/',
    },
    {
        id: 'me-20',
        title: 'Four Card',
        img: All.FourCard,
        repository: 'https://github.com/Chrisesbueno/four-card',
        demo: 'https://chrisesbueno.github.io/four-card/',
    },
    {
        id: 'me-21',
        title: 'Article Preview',
        img: All.Article,
        repository: 'https://github.com/Chrisesbueno/article-preview',
        demo: 'https://chrisesbueno.github.io/article-preview/',
    },
    {
        id: 'me-22',
        title: 'Social Proof',
        img: All.SocialProof,
        repository: 'https://github.com/Chrisesbueno/social-proof',
        demo: 'https://chrisesbueno.github.io/social-proof/',
    },
    {
        id: 'me-23',
        title: 'Faq Card',
        img: All.FAQ,
        repository: 'https://github.com/Chrisesbueno/faq-card',
        demo: 'https://chrisesbueno.github.io/faq-card/',
    },
    {
        id: 'me-24',
        title: 'Stats Card',
        img: All.StatsCard,
        repository: 'https://github.com/Chrisesbueno/stats-card',
        demo: 'https://chrisesbueno.github.io/stats-card/',
    },
    {
        id: 'me-25',
        title: 'Three Column',
        img: All.ThreeColumn,
        repository: 'https://github.com/Chrisesbueno/three-column',
        demo: 'https://chrisesbueno.github.io/three-column/',
    },
    {
        id: 'me-26',
        title: 'Order Summary',
        img: All.Summary,
        repository: 'https://github.com/Chrisesbueno/order-summary',
        demo: 'https://chrisesbueno.github.io/order-summary/',
    },
    {
        id: 'me-27',
        title: 'NFT Preview Card',
        img: All.NFTCard,
        repository: 'https://github.com/Chrisesbueno/nft-preview-card',
        demo: 'https://chrisesbueno.github.io/nft-preview-card/',
    },
    {
        id: 'me-29',
        title: 'QR Code',
        img: All.QRCode,
        repository: 'https://github.com/Chrisesbueno/qr-code',
        demo: 'https://chrisesbueno.github.io/qr-code/',
    },
    {
        id: 'me-30',
        title: 'Interactive Rating',
        img: All.Rating,
        repository: 'https://github.com/Chrisesbueno/interactive-rating',
        demo: 'https://chrisesbueno.github.io/interactive-rating/',
    },
    {
        id: 'me-31',
        title: 'Product View Card',
        img: All.ProductView,
        repository: 'https://github.com/Chrisesbueno/product-view-card',
        demo: 'https://chrisesbueno.github.io/product-view-card/',
    },
    {
        id: 'me-32',
        title: 'Edie Homepage',
        img: All.EdieHomepage,
        repository: 'https://github.com/Chrisesbueno/edie-homepage',
        demo: 'https://chrisesbueno.github.io/edie-homepage/',
    },
    {
        id: 'me-33',
        title: 'Checkout Page',
        img: All.Checkout,
        repository: 'https://github.com/Chrisesbueno/checkout-page',
        demo: 'https://chrisesbueno.github.io/checkout-page/',
    },
    {
        id: 'me-34',
        title: 'My Gallery',
        img: All.MyGallery,
        repository: 'https://github.com/Chrisesbueno/my-gallery',
        demo: 'https://chrisesbueno.github.io/my-gallery/',
    },
    {
        id: 'me-35',
        title: 'Recipe Blog',
        img: All.RecipeBlog,
        repository: 'https://github.com/Chrisesbueno/recipe-blog',
        demo: 'https://chrisesbueno.github.io/recipe-blog/',
    },
    {
        id: 'me-36',
        title: 'Interior Consultant',
        img: All.InteriorConsultant,
        repository: 'https://github.com/Chrisesbueno/interior-consultant',
        demo: 'https://chrisesbueno.github.io/interior-consultant/',
    },
    {
        id: 'me-37',
        title: '404 Not Found Challenge',
        img: All.NotFound,
        repository: 'https://github.com/Chrisesbueno/404-not-found-challenge',
        demo: 'https://chrisesbueno.github.io/404-not-found-challenge/',
    },
    {
        id: 'me-38',
        title: 'My Team Page',
        img: All.MyTeamPage,
        repository: 'https://github.com/Chrisesbueno/my-team-page',
        demo: 'https://chrisesbueno.github.io/my-team-page/',
    },
]

export const certifications = [
    {
        id: 'cert-1',
        platform: 'Codigo Facilito',
        course: 'Curso Profesional Desarrollo Web',
        link: {
            document: All.CursoProfesionalWeb,
            web: 'https://codigofacilito.com/cursos/frontend-profesional'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-1',
        platform: 'Platzi',
        course: 'Curso Básico de JavaScript',
        link: {
            document: All.CursoBasicoJavascript,
            web: 'https://platzi.com/cursos/basico-javascript/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-2',
        platform: 'Codigo Facilito',
        course: 'Curso profesional de JavaScript',
        link: {
            document: All.CursoProfesionalJavascript,
            web: 'https://codigofacilito.com/cursos/javascript-profesional'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-2',
        platform: 'Platzi',
        course: 'Curso de Diseño Web con CSS Grid y Flexbox',
        link: {
            document: All.CursoDisenoWebCSS,
            web: 'https://platzi.com/cursos/flexbox-css-grid/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-3',
        platform: 'Codigo Facilito',
        course: 'Curso a fondo de CSS',
        link: {
            document: All.CursoFondoCSS,
            web: 'https://codigofacilito.com/cursos/css-fundamentos'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-3',
        platform: 'Platzi',
        course: 'Curso de Frameworks y Librerías de JavaScript',
        link: {
            document: All.CursoFrameworks,
            web: 'https://platzi.com/cursos/frameworks-javascript/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-4',
        platform: 'Codigo Facilito',
        course: 'Promesas en javaScript',
        link: {
            document: All.CursoPromesas,
            web: 'https://codigofacilito.com/cursos/javascript-promises'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-4',
        platform: 'Platzi',
        course: 'Curso Definitivo de HTML y CSS',
        link: {
            document: All.CursoDefinitivo,
            web: 'https://platzi.com/cursos/html-css/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-5',
        platform: 'Codigo Facilito',
        course: 'Curso de javaScript y el DOM',
        link: {
            document: All.CursoDOM,
            web: 'https://codigofacilito.com/cursos/javascript-dom'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-5',
        platform: 'Platzi',
        course: 'Curso de JavaScript Engine (V8) y el Navegador',
        link: {
            document: All.CursoEngine,
            web: 'https://platzi.com/cursos/javascript-navegador/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-6',
        platform: 'Codigo Facilito',
        course: 'Curso Profesional de React',
        link: {
            document: All.CursoReact,
            web: 'https://codigofacilito.com/cursos/react-profesional'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-6',
        platform: 'Platzi',
        course: 'Curso Práctico de HTML y CSS',
        link: {
            document: All.CursoPractico,
            web: 'https://platzi.com/cursos/html-practico/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-7',
        platform: 'Codigo Facilito',
        course: 'Curso para consumir APIs con JavaScript (fetch)',
        link: {
            document: All.CursoAPIS,
            web: 'https://codigofacilito.com/cursos/consumir-apis-javascript'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-7',
        platform: 'Platzi',
        course: 'Curso Profesional de CSS Grid Layout',
        link: {
            document: All.CursoGrid,
            web: 'https://platzi.com/cursos/css-grid-layout/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-8',
        platform: 'Codigo Facilito',
        course: 'Curso de controles y efectos Frontend',
        link: {
            document: All.CursoEfectos,
            web: 'https://codigofacilito.com/cursos/controles-efectos-frontend'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-8',
        platform: 'Platzi',
        course: 'Curso Profesional de Git y GitHub',
        link: {
            document: All.CursoGit,
            web: 'https://platzi.com/cursos/git-github/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-9',
        platform: 'Codigo Facilito',
        course: 'Curso a fondo de SASS',
        link: {
            document: All.CursoSASS,
            web: 'https://codigofacilito.com/cursos/sass-a-fondo'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-9',
        platform: 'Platzi',
        course: 'Curso Profesional de JavaScript',
        link: {
            document: All.CursoJavascript,
            web: 'https://platzi.com/cursos/javascript-profesional/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-10',
        platform: 'Codigo Facilito',
        course: 'Curso de TypeScript',
        link: {
            document: All.CursoTypescript,
            web: 'https://codigofacilito.com/cursos/typescript'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-10',
        platform: 'Platzi',
        course: 'Curso de Asincronismo con Javascript',
        link: {
            document: All.CursoAsincronismo,
            web: 'https://platzi.com/cursos/asincronismo-js/'
        },
        img: All.Platzi
    },
    {
        id: 'cert-11',
        platform: 'Codigo Facilito',
        course: 'Especialidad de Desarrollo Frontend',
        link: {
            document: All.CursoAPIS,
            web: 'https://codigofacilito.com/categories/desarrollador-frontend'
        },
        img: All.Codigo
    },
    {
        id: 'platzi-11',
        platform: 'Platzi',
        course: 'Curso de Closures y Scope en JavaScript',
        link: {
            document: All.CursoClosures,
            web: 'https://platzi.com/cursos/javascript-closures-scope/'
        },
        img: All.Platzi
    },
    {
        id: 'platzi-12',
        platform: 'Platzi',
        course: 'Curso de ECMAScript 6+',
        link: {
            document: All.CursoECMA,
            web: 'https://platzi.com/cursos/ecmascript-6/'
        },
        img: All.Platzi
    },
    {
        id: 'platzi-13',
        platform: 'Platzi',
        course: 'Curso de Gestión de Dependencias y Paquetes con NPM',
        link: {
            document: All.CursoNPM,
            web: 'https://platzi.com/cursos/npm/'
        },
        img: All.Platzi
    },
    {
        id: 'dev-1',
        platform: 'devChallenges.io',
        course: 'Responsive Web Developer',
        link: {
            document: All.devResponsive,
            web: 'https://devchallenges.io/certificates/YUY5Y30fsiDVuflxVb9S'
        },
        img: All.devChallenges
    },
]
