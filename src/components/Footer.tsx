export default function Footer() {
  return (
    <footer className="bg-[#0a0a0e] border-t border-white/5 mt-24">
      <div className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#06b6d4] font-black text-xl tracking-tighter">CAIRO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mb-3" />
              <span className="text-white/70 font-light text-sm tracking-[0.25em] uppercase mt-0.5">
                Showcase
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
              A curated showcase of research, innovation, and technology projects from leading
              academic institutions, labs, and industry partners.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {['All Projects', 'AI & Data', 'Robotics', 'Healthcare', 'Sustainability', 'Industrial'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {['About CAIRO', 'Submit a Project', 'Research Partners', 'Contact', 'Press'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wide">
            © 2024 CAIRO Innovation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
