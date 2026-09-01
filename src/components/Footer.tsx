import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sujatapatil3?tab=repositories" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-signal transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sujata-j-patil/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-signal transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted hover:text-signal transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
