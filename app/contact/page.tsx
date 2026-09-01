import type { Metadata } from "next";
import { InnerShell } from "../InnerShell";

export const metadata: Metadata = { title: "Contact JMI Entertainment", description: "Connect with JMI Entertainment for production, distribution, marketing, advertising, talent development, consulting, and public-relations inquiries." };

const contacts = [
  { n: "01", title: "Administrative & Operations Inquiries", intro: "For questions related to business operations, scheduling, company logistics, partnerships, or general inquiries about JMI Entertainment.", person: "Skyylar Perdomo", role: "Senior Vice President of Administration", email: "skyylar@jmientertainment.com" },
  { n: "02", title: "Marketing & Brand Strategy", intro: "For marketing partnerships, campaigns, or strategy.", person: "Trey Chevious", role: "Head of Marketing and Branding", email: "trey@jmientertainment.com" },
  { n: "03", title: "Sales & Advertising", intro: "For sales opportunities, advertising programs, and commercial partnerships.", person: "Bryan Gonzales", role: "VP of Sales & Advertising", email: "info@jmientertainment.com" },
  { n: "04", title: "A&R Music & Talent Development", intro: "For artists, producers, songwriters, and managers looking to collaborate with our music division.", person: "Teddy Harmon", role: "Head of A&R", email: "teddy@jmientertainment.com" },
  { n: "05", title: "Executive-Level Consulting", intro: "Industry insight and executive-level strategy across music, film, distribution, and deal structuring.", person: "Ernie Singleton", role: "Business / Industry Consultant", email: "ernie@jmientertainent.com" },
  { n: "06", title: "Public Relations", intro: "For public relations, media, and communications inquiries.", person: "Lynn Jeter", role: "Public Relations Consultant", email: "info@jmientertainment.com" },
] as const;

export default function ContactPage() {
  return (
    <InnerShell current="/contact">
      <section className="contact-page-hero"><p className="inner-kicker">JMI / Start a conversation</p><h1>Looking to work<br /><em>with JMI?</em></h1><p>From development to distribution, we’re always open to new ideas, partnerships, and opportunities.</p><a href="mailto:info@jmientertainment.com">Let’s talk <b>↗</b></a></section>

      <section className="contact-directory editorial-light">
        <header><p className="inner-kicker dark">Find the right desk</p><h2>Direct<br /><em>connections.</em></h2></header>
        <div>{contacts.map((contact) => <article key={contact.n}><span>{contact.n}</span><div><h3>{contact.title}</h3><p>{contact.intro}</p></div><div className="contact-person"><strong>{contact.person}</strong><p>{contact.role}</p><a href={`mailto:${contact.email}`}>{contact.email} <b>↗</b></a></div></article>)}</div>
      </section>

      <section className="ar-section">
        <p className="inner-kicker">A&amp;R / New talent</p><h2>Artists, producers<br />and <em>new voices.</em></h2>
        <p>Our A&amp;R team is the first point of contact for artists, producers, songwriters, and managers. We review new talent, accept demos, and remain open to discovering voices aligned with our creative vision.</p>
        <div><p>Submit music for review</p><p>Pitch a new artist or group</p><p>Inquire about development opportunities</p><p>Explore signing or licensing deals</p><p>Collaborate on writing, production, or sync projects</p></div>
        <a href="mailto:teddy@jmientertainment.com">Contact A&amp;R <b>↗</b></a>
      </section>

      <section className="other-questions editorial-light"><p className="inner-kicker dark">Have other questions?</p><h2>There’s always<br /><em>a way in.</em></h2><a href="mailto:info@jmientertainment.com">info@jmientertainment.com <b>↗</b></a></section>
    </InnerShell>
  );
}
