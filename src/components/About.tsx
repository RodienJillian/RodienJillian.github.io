import { Code2, Palette, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Data Handling',
      description: 'Organizing, managing, and processing data efficiently to ensure accuracy, scalability, and meaningful insights',
    },
    {
      icon: Palette,
      title: 'Frontend Design and Development',
      description: 'Creating beautiful interfaces that users love to interact with',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing every detail for lightning-fast user experiences',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-accent/20 to-background border-t border-border">
      {/* Geometric patterns */}
      <div className="absolute top-10 right-10 w-64 h-64 border-8 border-primary/20 rotate-12 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 border-4 border-primary/20 -rotate-12 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <p className="text-primary text-sm font-semibold tracking-wide">About Me</p>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Designing and Developing Digital Experiences
              </h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a web designer/developer with a passion for innovation, creation and problem-solving. I'm on a continuous journey to study the exciting world of technology and its unlimited potential. 
              </p>
              <p>
                I studied Computer Science and I'm developing my technical abilities and learning a great deal about different aspects of the field. I'm interested in web development, data analytics, and artificial intelligence.
              </p>
              <p>
              Feel free to explore my portfolio, where you'll find a showcase of my projects, assignments, and the skills I've developed along the way. Don't hesitate to reach out and connect. Let's discuss ideas, collaborate, and push the boundaries of technology together.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1A-EJPKN69bhPmq9uVu2pMUKY2-fxV4pv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-dark-red text-white font-medium rounded-full shadow-red-glow hover:shadow-medium transition-all transform hover:-translate-y-1 text-center"
              >
                View Resume
              </a>
              <a
                href="https://drive.google.com/file/d/14x_FKXzWJVVTptiMgGB7nAGzsGEF2CyZ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all text-center"
              >
                Video Resume
              </a>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4 md:space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-2xl shadow-soft hover:shadow-red-glow p-6 md:p-8 transition-all hover:-translate-y-1 border border-border hover:border-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 text-primary rounded-xl">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
