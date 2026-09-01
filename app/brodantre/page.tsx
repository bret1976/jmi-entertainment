import type { Metadata } from "next";
import { InnerShell } from "../InnerShell";

export const metadata: Metadata = { title: "Brodantre — Consulting & Talent", description: "JMI Entertainment's talent division for creative consulting, representation, music publishing, placement, and licensing." };

const questions = [
  "How to package your project for networks or labels",
  "What your next move should be",
  "How to structure your team, protect your ideas, or scale your rollout",
  "The right time to drop a song or pitch a script",
  "What we’d do if we were in your exact situation",
] as const;

export default function BrodantrePage() {
  return (
    <InnerShell current="/brodantre">
      <section className="brodantre-hero">
        <div><p className="inner-kicker">JMI / Talent division</p><img src="/editorial/brodantre/logo.webp" alt="Brodantre" /><p>The talent division. We work through the focal points of consulting, representation, and music publishing—placement and licensing.</p><a href="/contact">Work with us <b>↗</b></a></div>
        <figure><img src="/editorial/brodantre/consulting.webp" alt="Creative consulting session" /></figure>
      </section>

      <section className="program-intro editorial-light">
        <p className="inner-kicker dark">Two-month consulting program</p>
        <h1>Unlimited<br /><em>insight.</em></h1>
        <div><p>Want direct access to the minds behind JMI Entertainment? Our consulting service gives you exactly that: a two-month program with unlimited access to our team’s experience, insight, and guidance.</p><p>Whether you’re an artist, filmmaker, producer, manager, or creative entrepreneur, we’re here to answer your questions, review your strategy, offer honest feedback, and give you real-world advice from people who have done the work.</p></div>
      </section>

      <section className="ask-section">
        <div className="ask-image"><img src="/editorial/brodantre/strategy.webp" alt="Entertainment strategy session" /><span>$5 / day</span></div>
        <div><p className="inner-kicker">Ask us anything</p><h2>Move with<br /><em>clarity.</em></h2><div className="question-list">{questions.map((q, i) => <p key={q}><span>{String(i + 1).padStart(2, "0")}</span>{q}</p>)}</div><p className="program-note">This is your insider pass to decades of experience in music, film, television, streaming, and strategic execution. No gatekeeping. No fluff. Just straight answers and game-changing guidance.</p><p className="program-price">Only <strong>$300</strong> for two months. That’s $5 a day to make sure you’re on track.</p><a className="pill-link" href="/contact">I’m ready <b>↗</b></a></div>
      </section>

      <section className="sixty-days"><img src="/editorial/brodantre/session.webp" alt="A focused creative working session" /><div><p className="inner-kicker">The first 60 days</p><h2>Most mistakes happen<br /><em>at the beginning.</em></h2><p>Most people who come into the entertainment industry make the most mistakes in the first 60 days of starting.</p><h3>Let us help you move smarter.</h3></div></section>

      <section className="talent-section editorial-light">
        <header><p className="inner-kicker dark">Talent &amp; representation</p><h2>Distinct voices.<br /><em>Real craft.</em></h2></header>
        <div className="talent-grid"><article><img src="/editorial/brodantre/jennifer-enhanced.jpg" alt="Jennifer Hornbrook" /><p>Actress</p><h3>Jennifer Hornbrook</h3><span>P.K.A. Jenn from Japan</span></article><article><img src="/editorial/brodantre/teddy-enhanced.jpg" alt="Teddy Harmon" /><p>Music composer &amp; producer</p><h3>Teddy Harmon</h3></article></div>
      </section>

      <blockquote className="brodantre-quote"><img src="/editorial/brodantre/vinyl.webp" alt="Vinyl record in motion" /><div><p>“The most powerful productions don’t come from a single mind—they come from the collision of many.”</p><cite>— Brodantre</cite><a href="/contact">Let’s go <b>↗</b></a></div></blockquote>
    </InnerShell>
  );
}
