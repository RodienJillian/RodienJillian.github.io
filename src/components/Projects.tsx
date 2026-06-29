import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cuddle Paws - Pet Care eCommerce Website',
      description: 'Cuddle Paws is a comprehensive eCommerce platform dedicated to providing pet owners with an easy and efficient way to purchase pet care products. The website features a seamless shopping experience, including product browsing, a shopping cart, and secure order processing.',
      tags: ['Pet App', 'PHP', 'UI Design'],
      image: 'https://res.cloudinary.com/dakq2u8n0/image/upload/v1775834838/Screenshot_2026-04-10_232634_xubqkp.png',

      githubLink: 'https://github.com/RodienJillian/CuddlePaws'
    },
    {
      title: 'The New York Times Clone',
      description: 'A web application that mimics the layout and functionality of the New York Times website. It fetches news articles using the New York Times API, providing users with access to the latest news across various categories such as Arts, Science, US, and World.ics platform for tracking social media performance across multiple channels with AI-powered insights.',
      tags: ['Javascript', 'Vanta.js', 'New York Times API', 'UI Design'],
      image: 'https://res.cloudinary.com/dakq2u8n0/image/upload/v1775834901/Screenshot_2026-04-10_232739_rm1rzi.png',

      liveLink: 'https://rodienjillian.github.io/TheNewYorkTimes-Clone/',
      githubLink: 'https://github.com/RodienJillian/NYTimes'
    },
    {
      title: 'Lotto Dash',
      description: 'CoA web-based application for simulation of a lotto game. This application uses web socket to simulate real-time distribution of data such as winnings, bets and drawing date & time. It uses application programming interface (API) for CRUD operations. It also uses single page application (SPA) structure for front-end developmnent. Lastly, this was coded using Node.js structure.',
      tags: ['UI Design', 'Frontend Development'],
      image: 'https://res.cloudinary.com/dakq2u8n0/image/upload/v1775835404/i76ivat3ctp2wusnfp6a_sxzhfk.png',

      liveLink: 'https://mikeru02.github.io/lotto-dash/',
      githubLink: 'https://github.com/Mikeru02/lotto-dash'
    },
    {
      title: 'Meow Bot',
      description: 'An interactive chatbot that can understand GenZ words.',
      tags: ['dearpygui', 'Python', 'chatbot'],
      image: 'https://rodienjillian.github.io/MeowBot/images/A2.png',

      liveLink: 'https://rodienjillian.github.io/MeowBot/',
      githubLink: 'https://github.com/college-of-mary-immaculate/NLP-Group/tree/main/Activity-1'
    },
    {
      title: 'Jejemonly',
      description: 'A desktop application designed to normalize Jejemon-style text into standard readable text. The system uses a step-by-step transformation process, making it useful for academic tasks like Natural Language Processing and text preprocessing.',
      tags: ['PyQt5', 'Python', 'normalization'],
      image: 'https://rodienjillian.github.io/Jejemonly/images/B2.png',

      liveLink: 'https://rodienjillian.github.io/Jejemonly/',
      githubLink: 'https://github.com/college-of-mary-immaculate/NLP-Group/tree/main/Activity-2'
    },
    {
      title: 'Enchanted Shooter',
      description: 'A bubble shooter–style lyric guessing game that uses an N-gram language model trained on Taylor Swift lyrics. Built with Svelte (frontend) and FastAPI (backend), the game combines interactive design and NLP to create an engaging educational + entertainment experience.',
      tags: ['Svelte', 'FastAPI', 'Python'],
      image: 'https://rodienjillian.github.io/Enchanted-Shooter/images/C3.png',

      liveLink: 'https://rodienjillian.github.io/Enchanted-Shooter/',
      githubLink: 'https://github.com/college-of-mary-immaculate/NLP-Group/tree/main/Activity-3'
    },
    {
      title: 'ShelfSeek',
      description: 'An AI-powered book search engine that helps users find different types of books efficiently, enhanced with intelligent features, user accounts, and improved search experience.',
      tags: ['Representation Engineer', 'Documentation', 'Frontend'],
      image: 'https://res.cloudinary.com/dakq2u8n0/image/upload/v1775837976/Screenshot_2026-04-11_001753_efyibw.png',

      githubLink: 'https://github.com/college-of-mary-immaculate/shelf-seek'
    },
    {
      title: 'SMILE - Smart Machine for Internet and Litter Exchange',
      description: 'An automated waste management system that encourages proper disposal by rewarding users with internet access. It uses sensors and smart sorting technology to identify and segregate waste, promoting a cleaner and more sustainable environment.',
      tags: ['Thesis', 'Documentation', 'Hardware'],
      image: 'https://res.cloudinary.com/dakq2u8n0/image/upload/v1775915420/unnamed_qgknsp.jpg',

      githubLink: 'https://github.com/Mikeru02/smile/tree/main'
    },
    {
      title: 'Marketing Visuals',
      description: 'A collection of promotional graphics, social media posts, posters, banners, and marketing materials created for academic projects, internship tasks, and branding activities. Focused on visual communication, layout design, and creating engaging content for digital and print platforms.',
      tags: ['Graphic Design', 'Canva', 'Marketing'],
      image: 'https://res.cloudinary.com/dakq2u8n0/image/upload/v1782702769/CS_EXHIBIT_2026_q75gdf.jpg',

      liveLink: 'https://drive.google.com/drive/folders/1AeWsfSRZQoWN55OqR_OJSYlCUzJbZ7v9?usp=drive_link',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background border-t border-border">
      {/* Geometric patterns */}
      <div className="absolute top-10 left-10 w-56 h-56 border-8 border-primary/20 rotate-12 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 -rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border-4 border-primary/20 rotate-45 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <p className="text-primary text-sm font-semibold tracking-wide">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing creativity and technical excellence
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl shadow-soft hover:shadow-red-glow overflow-hidden transition-all hover:-translate-y-2 border border-border hover:border-primary"
              >
                {/* Project image */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-muted/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">

                  {/* Live link button */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 text-primary rounded-full hover:bg-white transition-all transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {/* GitHub button */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 text-primary rounded-full hover:bg-white transition-all transform hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  )}

                  </div>
                </div>

                {/* Project details */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          {/* <div className="text-center mt-12">
            <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all"
            >
              View All Projects
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
