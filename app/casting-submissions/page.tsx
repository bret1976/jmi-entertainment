import type { Metadata } from "next";
import { InnerShell } from "../InnerShell";

export const metadata: Metadata = { title: "Casting & Submissions — JMI Entertainment", description: "Current JMI Entertainment talent, vocalist, acting, photographer, and production crew submission opportunities." };

const talentCalls = [
  ["Female singer", "English & Spanish", "Submit raw footage of you singing. No edited material will be accepted."],
  ["Female singer", "Pop", "Submit raw footage of you singing. No edited material will be accepted."],
  ["Female singer", "Gospel", "Submit raw footage of you singing. No edited material will be accepted."],
  ["Female actress", "Age 22–35", "Submit a self-tape with a scene of your choice or video-reel footage."],
  ["Male vocalist", "Singer / Rapper", "Submit raw footage of you singing or performing. No edited material will be accepted."],
] as const;

export default function CastingPage() {
  return (
    <InnerShell current="/casting-submissions">
      <section className="casting-hero"><img src="/editorial/casting/hero.webp" alt="Artist recording in a studio" /><div><p className="inner-kicker">JMI / Open calls</p><h1>Submissions<br />&amp; <em>casting.</em></h1><p>New voices matter. Review the active talent and crew opportunities, prepare the requested raw material, and introduce us to your work.</p><a href="#submit">Submit materials <b>↓</b></a></div></section>

      <section className="casting-list editorial-light">
        <header><p className="inner-kicker dark">Current opportunities</p><h2>Talent</h2></header>
        <div>{talentCalls.map(([role, detail, request], index) => <article key={`${role}-${detail}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{role}</h3><p className="casting-detail">{detail}</p><p>{request}</p></article>)}</div>
      </section>

      <section className="crew-call"><p className="inner-kicker">Behind the camera</p><h2>Crew</h2><article><span>01</span><h3>Photographer</h3><p>Portrait · Lifestyle · Event · Etc.</p><p>Submit portfolio and supporting materials. Include a résumé when available.</p></article><div className="deadline"><span>Deadline for submissions</span><strong>Open call</strong><p>Qualified submissions are reviewed as opportunities become available.</p></div></section>

      <section className="submission-panel editorial-light" id="submit">
        <div><p className="inner-kicker dark">Submit on the form below</p><h2>Show us<br /><em>what you do.</em></h2><p>Include your name, the role you’re applying for, contact details, a short introduction, and a public link to the requested raw footage, reel, portfolio, or résumé.</p></div>
        <form action="mailto:info@jmientertainment.com" method="post" encType="text/plain">
          <label>Name<input name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Opportunity<select name="opportunity" defaultValue=""><option value="" disabled>Select one</option>{talentCalls.map(([role, detail]) => <option key={`${role}-${detail}`}>{role} — {detail}</option>)}<option>Photographer — Crew</option></select></label>
          <label>Public materials link<input type="url" name="materials" placeholder="https://" required /></label>
          <label>Introduction<textarea name="introduction" rows={5} required /></label>
          <button type="submit">Prepare submission email <b>↗</b></button>
          <p>Submitting opens your email application. Attachments should be shared through the public link above.</p>
        </form>
      </section>
    </InnerShell>
  );
}
