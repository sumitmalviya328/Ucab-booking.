import { Car } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ucab-gradient border-t border-border/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg ucab-gold-gradient flex items-center justify-center">
                <Car className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold ucab-text-gradient">UCab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ride Smart, Ride Safe. Your trusted cab partner.
            </p>
          </div>
          {[
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { title: "Support", links: ["Help Center", "Safety", "Terms", "Privacy"] },
            { title: "Connect", links: ["Twitter", "Instagram", "LinkedIn", "Facebook"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-border/10 text-center text-sm text-muted-foreground">
          © 2026 UCab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
