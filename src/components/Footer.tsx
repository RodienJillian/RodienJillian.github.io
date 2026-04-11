const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/30 py-12 shadow-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-semibold mb-2">
                <span className="text-white">Rodien </span>
                <span className="text-primary">Jillian</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Build with code, design with purpose
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Designed & Built with Love
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
