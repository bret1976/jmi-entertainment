import type { Metadata } from "next";
import { InnerShell } from "../InnerShell";

export const metadata: Metadata = { title: "Our Work — JMI Entertainment", description: "Independent film, television, music, documentary, and entertainment projects created and produced by JMI Entertainment." };

const conceptDeck = [
  ["/projects/pitboss.webp", "Stories of a Pit Boss"],
  ["/projects/mynext.webp", "My Next"],
  ["/projects/skiphop.webp", "Skip Hop Rhymes"],
  ["/editorial/work/reality-check.webp", "Reality Check"],
  ["/projects/nostalgia.webp", "Nostalgia"],
  ["/editorial/work/why-cant-i-get-in.webp", "Why Can't I Get In"],
  ["/editorial/work/eye-share.webp", "Eye Share"],
  ["/editorial/work/music-academy.webp", "Music Academy"],
  ["/editorial/work/talking-sex.webp", "Talking Sex with Girls"],
  ["/editorial/work/curb-appeal.webp", "Curb Appeal"],
  ["/editorial/work/social-social.webp", "Social Social"],
] as const;

const television = ["Laughin’ Whichu, Laughin’ Achu", "1st Period – 6th Period", "On The Floor", "Bottle Bar", "Sing A Song", "Once Upon a Prom 2020", "Welcome To My World"];
const film = ["Mirror Image", "Anawanaswanaguana"];

export default function WorkPage() {
  return (
    <InnerShell current="/our-work">
      <section className="inner-hero work-hero">
        <p className="inner-kicker">JMI / Independent projects and partnerships</p>
        <h1>Film. Television.<br />Music. <em>Entertainment.</em></h1>
        <p className="inner-deck">Original worlds, cultural formats, independent films, television concepts, soundtracks, and strategic partnerships. All film and television projects created by Jim Chevious.</p>
      </section>

      <section className="hotb-feature editorial-light">
        <div className="hotb-poster"><img src="/projects/hotb.webp" alt="Home of the Brave project artwork" /><span>Nationally syndicated</span></div>
        <div className="hotb-copy">
          <p className="inner-kicker dark">Featured television</p>
          <h2>Home of<br /><em>the Brave.</em></h2>
          <p className="hotb-lead">The world’s first premier military talent competition.</p>
          <p>Featuring veterans and their families, active-duty family members, civilian military personnel, and their dependents.</p>
          <div className="producer-list"><span>The powerhouse producers</span><p>Ernie Singleton · Jim Chevious · John Nettlesbey · Virgil Roberts</p></div>
          <a className="text-link" href="https://www.homeofthebravetv.com" target="_blank" rel="noreferrer">Visit HOTBTV <b>↗</b></a>
        </div>
      </section>

      <section className="concept-section">
        <header><p className="inner-kicker">Development slate</p><h2>Ideas designed<br /><em>to travel.</em></h2></header>
        <div className="concept-grid">{conceptDeck.map(([src, title], index) => <figure key={title}><div><img src={src} alt={`${title} project artwork`} /><span>{String(index + 1).padStart(2, "0")}</span></div><figcaption>{title}</figcaption></figure>)}</div>
      </section>

      <section className="partnership-stories editorial-light">
        <header><p className="inner-kicker dark">Partnerships</p><h2>Stories with<br /><em>something at stake.</em></h2></header>
        <article className="story-feature">
          <div><p className="project-number">01 / Feature</p><h3>Cross Bones &amp; Roses</h3><p>A high-seas, swashbuckling romance is set in motion when a Spanish beauty is forced to enlist a notorious crew of Black pirates to find a vast fortune in gold while eluding the powers of the Caribbean, including rival pirate Gerard Chevalier. Unbeknownst to her, the Blake Brothers have kidnapped the daughter of the Governor of Jamaica, complicating matters even further.</p></div>
          <img src="/editorial/work/why-cant-i-get-in.webp" alt="Cinematic development artwork" />
        </article>
        <article className="story-feature reverse">
          <div><p className="project-number">02 / Documentary</p><h3>A Different Kind of Victory</h3><p>A documentary about the Golden Valley High School football team, which had never won a league game in the school’s ten-year history.</p><a className="text-link" href="https://youtu.be/ecsIoQn753Y?si=ODBEzfiGEdD3fBVV" target="_blank" rel="noreferrer">Full trailer <b>↗</b></a></div>
          <img src="/editorial/work/victory-enhanced.jpg" alt="A Different Kind of Victory production image" />
        </article>
        <article className="story-feature">
          <div><p className="project-number">03 / Series</p><h3>Sangre Negra</h3><p><em>Sangre Negra</em> is the cross-generational saga of the affluent Santos family. Led by patriarch Guillermo Santos Sr., his sons navigate a complex web of family loyalty and betrayal.</p><p className="availability">On Amazon Prime and Tubi now.</p><a className="text-link" href="https://youtu.be/ymx3BvlRfE0?si=KsBaBuQi05LHUtvN" target="_blank" rel="noreferrer">Full trailer <b>↗</b></a></div>
          <img src="/editorial/work/sangre-negra-enhanced.jpg" alt="Sangre Negra series artwork" />
        </article>
        <article className="story-feature reverse">
          <div><p className="project-number">04 / Book & documentary series</p><h3>Black Film Tracks</h3><p><em>Black Film Tracks</em> is a hardcover coffee-table book and documentary series exploring the history and legacy of African-American artists, performers, and historical figures through rare and out-of-print record-album covers linked to Black cinema, theater, musicals, and civil-rights soundtracks.</p><p className="availability">Book purchase coming soon.</p><a className="text-link" href="https://m.youtube.com/watch?v=I_JNTuziD7A" target="_blank" rel="noreferrer">Full trailer <b>↗</b></a></div>
          <img src="/editorial/work/black-film-tracks-enhanced.jpg" alt="Black Film Tracks book cover" />
        </article>
      </section>

      <section className="music-section">
        <p className="inner-kicker">Music &amp; soundtracks</p>
        <h2>Produced with<br /><em>the right voices.</em></h2>
        <div className="credit-list">
          <article><span>01</span><h3>Jim Chevious &amp; Teddy Harmon</h3></article>
          <article><span>02</span><h3>Jim Chevious, Teddy Harmon &amp; Jason Golley</h3></article>
          <article><span>03</span><h3>Leon Sylvers</h3></article>
          <article><span>04</span><h3>Various Producers &amp; Artists</h3></article>
        </div>
      </section>

      <section className="coming-soon editorial-light">
        <p className="inner-kicker dark">Coming soon</p>
        <div className="coming-columns"><div><h2>Television</h2>{television.map((title, index) => <p key={title}><span>{String(index + 1).padStart(2, "0")}</span>{title}</p>)}</div><div><h2>Film</h2>{film.map((title, index) => <p key={title}><span>{String(index + 1).padStart(2, "0")}</span>{title}</p>)}</div></div>
      </section>

      <section className="page-cta"><p className="inner-kicker">A project in motion?</p><h2>Put experience<br /><em>behind it.</em></h2><a href="/contact">Talk with JMI <b>↗</b></a></section>
    </InnerShell>
  );
}
