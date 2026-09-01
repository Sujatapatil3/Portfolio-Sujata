import { useState, FormEvent } from 'react';
import { Download, Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '@/data/profile';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired up — opens the visitor's email client instead.
    // Swap for a real endpoint (Formspree, EmailJS, etc.) if you want submissions to go somewhere.
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="section-pad" aria-label="Contact">
      <Reveal>
        <span className="kicker">07 · contact</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">Let's talk backend</h2>
        <p className="text-muted max-w-xl">
          Open to Softwar Developer, Java, Spring Boot internships and full-time roles.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-10 mt-12">
        <Reveal className="lg:col-span-2" direction="right">
          <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between">
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-signal transition-colors"
              >
                <Mail size={18} className="text-signal" />
                <span className="font-mono text-sm">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 hover:text-signal transition-colors"
              >
                <Phone size={18} className="text-signal" />
                <span className="font-mono text-sm">{profile.phone}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-signal" />
                <span className="font-mono text-sm">{profile.location}</span>
              </div>
            </div>
            <a href={profile.resumeFile} download className="btn-primary mt-8 w-full justify-center">
              <Download size={16} /> Download Full Resume (PDF)
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-muted mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:border-signal outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:border-signal outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm focus:border-signal outline-none resize-none"
                placeholder="Tell me about the role..."
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              <Send size={16} /> Send Message
            </button>
            {status === 'sent' && (
              <p className="text-signal text-sm font-mono text-center" role="status">
                Opening your email client...
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
