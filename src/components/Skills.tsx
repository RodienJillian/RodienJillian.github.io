const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'GIMP', 'Canva'],
    },
    {
      title: 'Database Management',
      skills: ['MySQL'],
    },
    {
      title: 'Data Analysis / Visualization',
      skills: ['Power BI'],
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
    {
      title: 'Game Development',
      skills: ['The Sandbox Game Maker'],
    },
    {
      title: 'Productivity Tools',
      skills: ['Microsoft Word', 'Excel', 'PowerPoint'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-background via-accent/10 to-background border-t border-border">
      {/* Geometric patterns */}
      <div className="absolute top-32 right-20 w-40 h-40 border-8 border-primary/20 -rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-56 h-56 bg-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-primary/20 rotate-45 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <p className="text-primary text-sm font-semibold tracking-wide">Skills & Expertise</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Technical Skills
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-card rounded-2xl shadow-soft hover:shadow-red-glow p-6 md:p-8 transition-all hover:-translate-y-2 border border-border hover:border-primary"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 text-foreground font-medium group/item"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-dark-red group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm md:text-base group-hover/item:text-primary transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '30+', label: 'Happy Clients' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 p-6 rounded-2xl bg-card shadow-soft border border-border hover:border-primary transition-all">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
