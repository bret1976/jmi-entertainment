import type { Metadata } from "next";
import { InnerShell } from "../InnerShell";

export const metadata: Metadata = { title: "About JMI Entertainment", description: "The independent production and distribution company behind more than three decades of music, film, television, streaming, and creative strategy." };

const legacyImages = [
  ["/editorial/about/rehearsal-enhanced.jpg", "Artists rehearsing in a recording environment"],
  ["/editorial/about/stage-enhanced.jpg", "Musicians preparing for a live performance"],
  ["/editorial/about/camera-enhanced.jpg", "Production photography behind the scenes"],
  ["/editorial/about/partners-enhanced.jpg", "JMI collaborators and partners"],
  ["/editorial/about/tv-studio-enhanced.jpg", "A television production studio"],
] as const;

export default function AboutPage() {
  return (
    <InnerShell current="/about">
      <section className="inner-hero about-hero">
        <p className="inner-kicker">JMI / Who we are</p>
        <h1>Sound. Vision.<br /><em>Story.</em></h1>
        <p className="inner-deck">A fully independent entertainment company built on experience, innovation, cultural relevance, and the freedom to choose meaningful work.</p>
        <div className="about-collage" aria-label="JMI history and production imagery">
          <img src="/editorial/about/awards-enhanced.jpg" alt="Billboard awards from JMI's music legacy" />
          <img src="/editorial/about/studio-enhanced.jpg" alt="Recording studio and mixing console" />
          <img src="/editorial/about/microscope-enhanced.jpg" alt="A creative director operating a professional camera" />
        </div>
      </section>

      <section className="editorial-section editorial-light about-story">
        <p className="inner-kicker dark">Founded in 1990 · James Mckindly Inc.</p>
        <div className="editorial-columns">
          <h2>Independent<br /><em>by choice.</em></h2>
          <div className="prose-stack">
            <p>Founded in 1990, JMI Entertainment (James Mckindly Inc.) has stood as a fully independent production and distribution company at the intersection of music, film, television, streaming, consulting, and all that applies. With roots that run deep in the entertainment industry and a reputation built on experience and innovation, JMI continues to shape what’s next while honoring where it all began.</p>
            <p>JMI Entertainment is a visionary in music, producing, and creative strategy with a career spanning decades. Its impact on the music world includes collaborations with Universal, Sony, Capitol, Motown, Bungalo, Orpheus, Warner Bros., RCA, Interscope, and Light/Qwest—and charting singles and albums on the Billboard Top 20.</p>
            <p>Over time, JMI evolved beyond music into film, television, streaming, and broader consulting services, becoming a trusted partner to major platforms and networks including Netflix and BET.</p>
          </div>
        </div>
      </section>

      <section className="editorial-section division-section">
        <p className="inner-kicker">One connected creative division</p>
        <div className="division-card">
          <span>01</span><h2>C.M. Brodantre</h2>
          <p>The talent division works through the focal points of consulting, representation, and music publishing—including placement and licensing.</p>
          <a href="/brodantre">Explore Brodantre <b>↗</b></a>
        </div>
        <div className="mission-copy">
          <p>Throughout the years, JMI has remained independent—by choice—allowing for creative control, flexible collaborations, and a commitment to projects aligned with purpose and cultural relevance. Long-term relationships with studios, artists, distributors, and fellow producers have been built by focusing on the work, not the noise, and delivering results that resonate.</p>
          <p>As JMI moves forward, the company is growing its slate across all divisions, identifying new talent, and continuing to work with major industry players who share its values. Whether developing a pilot, distributing an album, or consulting on a new journey, the mission remains the same:</p>
          <h3>To bring stories and sound to life—with meaning, strategy, and impact.</h3>
        </div>
      </section>

      <blockquote className="statement-quote"><p>“Knowledge is King.<br />Distribution is Queen.”</p><cite>— JMI</cite></blockquote>

      <section className="legacy-gallery editorial-light">
        <header><p className="inner-kicker dark">Across the years</p><h2>The work behind<br /><em>the legacy.</em></h2></header>
        <div>{legacyImages.map(([src, alt], index) => <figure key={src} className={`legacy-shot shot-${index + 1}`}><img src={src} alt={alt} /></figure>)}</div>
        <p className="image-caption">Jim Chevious with Michael Becker and Dr. Michael Nobel, Chairman of the Nobel Peace Prize Foundation—partners on <em>Skip Hop</em> television.</p>
      </section>

      <section className="page-cta"><p className="inner-kicker">The next chapter</p><h2>Build something<br /><em>that travels.</em></h2><a href="/contact">Start a conversation <b>↗</b></a></section>
    </InnerShell>
  );
}
