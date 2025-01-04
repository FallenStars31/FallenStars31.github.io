import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Naufal',
    lastName:  'Ikhsan',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/FallenStars31',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/naufal-ikhsan-835ba8218/',
    },
    {
        name: 'Instagram',
        icon: 'Instagram',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'naufaliksan78@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Teknik Informatika, Sistem Cerdas</>,
    subline: <>Saya adalah mahasiswa jurusan Teknik Informatika dengan konsentrasi dalam Sistem Cerdas di Universitas Putra Indonesia YPTK Padang. Saya memiliki minat yang besar dalam bidang teknologi, terutama dalam pengembangan sistem yang dapat meniru atau meningkatkan kemampuan kognitif manusia. Selama kuliah, saya telah mempelajari berbagai topik terkait seperti Knowledge Based System, Fuzzy Logic Programming, serta Digital Image Processing, Artificial Neural Network, dan Natural Language Processing.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Saya berkomitmen untuk terus mengembangkan kemampuan saya dalam menciptakan solusi berbasis teknologi yang inovatif dan efisien, serta beradaptasi dengan perkembangan terbaru di dunia teknologi informasi. Selain itu, saya selalu berusaha untuk mengasah keterampilan analitis dan problem-solving saya, yang sangat penting dalam menciptakan sistem yang lebih cerdas dan responsif terhadap tantangan yang ada.</>
    },
    work: {
        // display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Universitas Putra Indonesia Yptk padang',
                description: <>Teknik Informatika</>,
            },
            {
                name: 'AI basic By Huawei',
                description: <>Overview Of AI</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

// const blog = {
//     label: 'Blog',
//     title: 'Writing about design and tech...',
//     description: `Read what ${person.name} has been up to recently`
//     // Create new blog posts by adding a new .mdx file to app/blog/posts
//     // All posts will be listed on the /blog route
// }

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

// const gallery = {
//     label: 'Gallery',
//     title: 'My photo gallery',
//     description: `A photo collection by ${person.name}`,
//     // Images from https://pexels.com
//     images: [
//         { 
//             src: '/images/gallery/img-01.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-02.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-03.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-04.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-05.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-06.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-07.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-08.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-09.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-10.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-11.jpg', 
//             alt: 'image',
//             orientation: 'vertical'
//         },
//         { 
//             src: '/images/gallery/img-12.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-13.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//         { 
//             src: '/images/gallery/img-14.jpg', 
//             alt: 'image',
//             orientation: 'horizontal'
//         },
//     ]
// }

export { person, social, newsletter, home, about, work};