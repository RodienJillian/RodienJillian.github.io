import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float delay-300" />
      </div>
      {/* Geometric patterns */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/30 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border-4 border-primary/20 hidden lg:block" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/20 rotate-12 hidden lg:block" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start opacity-0 animate-fade-in-up order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-dark-red rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="absolute -inset-4 border-4 border-primary/40 rounded-full animate-spin-slow"></div>
                <img
                  src="https://res.cloudinary.com/dakq2u8n0/image/upload/v1775829653/_8MP74068_nuiep4.jpg"
                  alt="Profile"
                  crossOrigin="anonymous"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-red-glow border-4 border-primary/50"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-center md:text-left opacity-0 animate-fade-in-up delay-200 order-1 md:order-2">
              <div className="space-y-4">
                <p className="text-primary text-base md:text-lg font-medium tracking-wide">
                  Hi, I'm
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                  Rodien Jillian <br />
                  Ellorando
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
                  Creative Developer & Designer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Discover a collection of my projects, assignments, and creative endeavors. Explore my work, learn about my design process, and witness the evolution of my skills as I showcase my journey as a student and designer.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-dark-red text-white font-medium rounded-full shadow-red-glow hover:shadow-medium transition-all transform hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-up delay-300"
      >
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
