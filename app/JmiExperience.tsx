"use client";

import { useEffect, useRef, useState } from "react";
import { RibbonFieldBackground } from "@designcodeio/threeui/components/RibbonFieldBackground";
import "@designcodeio/threeui/style.css";

const chapters = [
  { year: "1990", kicker: "01 · Origin", title: "Independent by design.", copy: "JMI began in music with an insistence on ownership, creative control, and work built to travel. Scroll forward to follow the signal." },
  { year: "MAKE", kicker: "02 · Production", title: "Sound becomes vision.", copy: "Music expands into film, television, streaming, and original formats—produced with an independent point of view and a disciplined hand." },
  { year: "MOVE", kicker: "03 · Distribution", title: "The work finds its world.", copy: "Licensing, platform strategy, publishing, and enduring relationships connect each finished story to the audience it was made for." },
  { year: "NOW", kicker: "04 · Impact", title: "Culture is the destination.", copy: "JMI develops original entertainment, discovers new voices, and builds the route from a compelling idea to international reach." },
] as const;

const storyStills = [
  "/scroll-world/stills/01-origin.webp",
  "/scroll-world/stills/02-production-anchor.webp",
  "/scroll-world/stills/03-distribution.webp",
  "/scroll-world/stills/04-impact.webp",
] as const;

const chapterProgress = [0, 100 / 620, 200 / 620, 300 / 620] as const;

const projects = [
  { title: "Nostalgia", type: "Original Film", image: "/projects/nostalgia.webp", n: "01" },
  { title: "Heart of the Block", type: "Film / Culture", image: "/projects/hotb.webp", n: "02" },
  { title: "My Next", type: "Sports Series", image: "/projects/mynext.webp", n: "03" },
  { title: "Skip Hop Rhymes", type: "Television", image: "/projects/skiphop.webp", n: "04" },
  { title: "Stories of a Pit Boss", type: "Original Series", image: "/projects/pitboss.webp", n: "05" },
] as const;

const capabilities = [
  ["01", "Production", "From first treatment to final master—film, television, music, and original formats built with a producer’s discipline."],
  ["02", "Distribution", "Positioning, licensing, platform strategy, and long-standing relationships that turn completed work into cultural reach."],
  ["03", "Creative strategy", "Executive counsel, talent development, brand partnerships, publishing, and deal architecture for the road ahead."],
] as const;

const networkLogos = [
  ["BET", "/legacy-logos/networks/bet-transparent.png"], ["HBO", "/legacy-logos/networks/hbo-transparent.png"],
  ["Paramount", "/legacy-logos/networks/paramount-transparent.png"], ["Allied Media Partners", "/legacy-logos/networks/allied.webp"],
  ["NBC", "/legacy-logos/networks/nbc-transparent.png"], ["FOX", "/legacy-logos/networks/fox.webp"],
  ["ABC", "/legacy-logos/networks/abc.webp"], ["Pluto TV", "/legacy-logos/networks/pluto.webp"],
  ["Netflix", "/legacy-logos/networks/netflix.webp"], ["Tribune", "/legacy-logos/networks/tribune.webp"],
  ["CBS", "/legacy-logos/networks/cbs.webp"], ["WGN", "/legacy-logos/networks/wgn-transparent.png"],
] as const;

export function JmiExperience() {
  const shellRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const storyVideoRef = useRef<HTMLVideoElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [storyVideoReady, setStoryVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const music = musicRef.current;
    if (!music) return;
    music.volume = 0.38;

    const startMusic = () => {
      void music.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
    };

    startMusic();
    document.addEventListener("pointerdown", startMusic, { once: true });
    document.addEventListener("keydown", startMusic, { once: true });
    return () => {
      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("keydown", startMusic);
    };
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    let frame = 0;
    const sync = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      shell.style.setProperty("--page-progress", String(max > 0 ? window.scrollY / max : 0));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(sync); };
    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const section = storyRef.current;
    const video = storyVideoRef.current;
    if (!section || !video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dataSaver = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    const stillsOnly = motionQuery.matches || dataSaver;
    setReducedMotion(stillsOnly);

    let scrollFrame = 0;
    let scrubFrame = 0;
    let target = 0;
    let current = 0;
    let metadataReady = false;
    let objectUrl = "";
    let lastScrubAt = performance.now();
    let lastViewportWidth = window.innerWidth;
    const phoneMedia = window.matchMedia("(max-width: 600px)").matches;

    const read = () => {
      scrollFrame = 0;
      const rect = section.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const run = Math.max(1, section.offsetHeight - window.innerHeight);
      target = Math.min(1, Math.max(0, (window.scrollY - start) / run));
      section.style.setProperty("--story-progress", String(target));
      setActiveChapter(chapterProgress.reduce((active, stop, index) => target >= stop ? index : active, 0));
    };

    const onScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(read); };
    const onResize = () => {
      // Mobile browser chrome changes the viewport height while scrolling. Ignore
      // those height-only resizes so the scrub position never jumps mid-scene.
      if (Math.abs(window.innerWidth - lastViewportWidth) < 2) return;
      lastViewportWidth = window.innerWidth;
      read();
    };
    const scrub = (now: number) => {
      const elapsed = Math.min(0.05, Math.max(0, (now - lastScrubAt) / 1000));
      lastScrubAt = now;
      current += (target - current) * (1 - Math.exp(-12 * elapsed));
      if (metadataReady && !video.seeking) {
        const nextTime = Math.min(video.duration - 0.001, Math.max(0, current * video.duration));
        if (Math.abs(video.currentTime - nextTime) > 1 / 30) video.currentTime = nextTime;
      }
      scrubFrame = requestAnimationFrame(scrub);
    };

    const onMetadata = () => { metadataReady = true; read(); };
    const onPaint = () => setStoryVideoReady(true);
    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("loadeddata", onPaint, { once: true });
    video.addEventListener("seeked", onPaint, { once: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    read();
    scrubFrame = requestAnimationFrame(scrub);

    if (!stillsOnly) {
      const filmUrl = phoneMedia
        ? "/scroll-world/video/jmi-scroll-hero-mobile.mp4"
        : "/scroll-world/video/jmi-scroll-hero.mp4";
      video.poster = phoneMedia
        ? "/scroll-world/video/jmi-scroll-hero-mobile-poster.png"
        : "/scroll-world/video/jmi-scroll-hero-poster.png";
      fetch(filmUrl)
        .then((response) => {
          if (!response.ok) throw new Error("Scroll film failed to load");
          return response.blob();
        })
        .then((blob) => {
          objectUrl = URL.createObjectURL(blob);
          video.src = objectUrl;
          video.load();
        })
        .catch(() => setReducedMotion(true));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      video.removeEventListener("loadedmetadata", onMetadata);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      if (scrubFrame) cancelAnimationFrame(scrubFrame);
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <main ref={shellRef} className="site-shell">
      <div className="progress-line" aria-hidden="true"><i /></div>
      <section ref={storyRef} className="scroll-story hero-story" id="top" aria-labelledby="hero-story-title">
        <div className="scroll-story-sticky">
          <audio ref={musicRef} src="/audio/jmi-homepage-song.mp3" autoPlay loop preload="auto" />
          <div className="story-media" aria-hidden="true">
            <img key={storyStills[activeChapter]} className="story-still" src={storyStills[activeChapter]} alt="" />
            <video
              ref={storyVideoRef}
              className={`story-film ${storyVideoReady && !reducedMotion ? "is-ready" : ""}`}
              poster="/scroll-world/video/jmi-scroll-hero-poster.png"
              muted
              playsInline
              preload="auto"
              onError={() => setReducedMotion(true)}
            />
          </div>

          <nav className="nav hero-nav" aria-label="Primary navigation">
            <button
              className={`music-toggle ${musicPlaying ? "is-playing" : ""}`}
              type="button"
              aria-pressed={musicPlaying}
              onClick={() => {
                const music = musicRef.current;
                if (!music) return;
                if (music.paused) void music.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
                else { music.pause(); setMusicPlaying(false); }
              }}
            ><i aria-hidden="true" />{musicPlaying ? "Sound on" : "Play sound"}</button>
            <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? "Close" : "Menu"}</button>
            <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="nav-links">
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/our-work" onClick={() => setMenuOpen(false)}>Our work</a>
              <a href="/brodantre" onClick={() => setMenuOpen(false)}>Brodantre</a>
              <a href="/casting-submissions" onClick={() => setMenuOpen(false)}>Casting</a>
              <a className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>Start a conversation</a>
            </div>
          </nav>

          <div className="story-copy hero-story-copy" aria-live="polite">
            {chapters.map((chapter, index) => (
              <article key={chapter.kicker} className={index === activeChapter ? "active" : ""}>
                <p>{chapter.kicker}</p>
                <h1 className="hero-title" id={index === 0 ? "hero-story-title" : undefined}>JMI Entertainment</h1>
                <h2 className="hero-subtitle">{chapter.title}</h2>
                <div className="rule" />
                <p className="chapter-copy">{chapter.copy}</p>
              </article>
            ))}
          </div>

          <div className="story-year" aria-hidden="true">{chapters[activeChapter].year}</div>
          <div className="story-route" aria-label="Story chapters">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.kicker}
                className={index === activeChapter ? "active" : ""}
                onClick={() => {
                  const section = storyRef.current;
                  if (!section) return;
                  const top = window.scrollY + section.getBoundingClientRect().top;
                  const run = section.offsetHeight - window.innerHeight;
                  window.scrollTo({ top: top + run * chapterProgress[index], behavior: reducedMotion ? "auto" : "smooth" });
                }}
                aria-label={`Go to ${chapter.kicker}`}
              ><span>{String(index + 1).padStart(2, "0")}</span></button>
            ))}
          </div>
          <div className="story-scroll-hint" aria-hidden="true"><span>Scroll to direct the film</span><i /></div>
        </div>
      </section>

      <section className="manifesto" id="legacy" aria-labelledby="manifesto-title">
        <p className="section-label">JMI / Who we are</p>
        <h2 id="manifesto-title">More than three decades at the intersection of <span>story</span> and <span>sound.</span></h2>
        <div className="manifesto-grid">
          <p className="lead">A fully independent production and distribution company, built to connect original ideas with the audiences they deserve.</p>
          <p>Our roots run through music. Our work now moves across screens, stages, platforms, and borders—guided by experience, cultural relevance, and the freedom to choose the work that matters.</p>
        </div>
      </section>

      <section className="legacy-signal" aria-labelledby="legacy-signal-title">
        <div className="legacy-field" aria-hidden="true"><RibbonFieldBackground speed={0.18} pointerAmount={0.08} smoothing={0.09} brightness={0.62} opacity={0.5} hue={0.03} saturation={0.82} /></div>
        <div className="legacy-signal-head">
          <div>
            <p className="section-label section-label-dark">Production · Distribution · Entertainment</p>
            <h2 id="legacy-signal-title">Entertainment built on <em>legacy,</em><br />driven by creativity.</h2>
          </div>
          <div className="legacy-signal-copy">
            <strong><span>30+</span> years in motion</strong>
            <p>JMI Entertainment bridges film, television, music, and culture through production, distribution, and original entertainment.</p>
            <a href="/about">Discover our story <b aria-hidden="true">↗</b></a>
          </div>
        </div>
        <div className="network-marquee" aria-label="Selected network and platform relationships">
          <div className="network-track">
            {[...networkLogos, ...networkLogos].map(([name, src], index) => (
              <figure className="network-logo" key={`${name}-${index}`} aria-hidden={index >= networkLogos.length}>
                <img src={src} alt={index < networkLogos.length ? name : ""} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="slate" id="slate" aria-labelledby="slate-title">
        <header className="slate-header"><div><p className="section-label section-label-dark">JMI / Selected work</p><h2 id="slate-title">The slate is <em>in motion.</em></h2></div><p>Original entertainment, active development, and stories designed to travel.</p></header>
        <div className="poster-rail">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title} style={{ "--i": index } as React.CSSProperties}>
              <div className="poster-wrap"><img src={project.image} alt={`${project.title} project artwork`} /><span>{project.n}</span></div>
              <div className="project-meta"><h3>{project.title}</h3><p>{project.type}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <header><p className="section-label">JMI / What we do</p><h2 id="capabilities-title">One idea.<br />Every way <em>forward.</em></h2></header>
        <div className="capability-list">
          {capabilities.map(([n, title, copy]) => <article key={title}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit" aria-hidden="true"><span>JMI</span></div>
        <p className="section-label">JMI / Begin something</p>
        <h2 id="contact-title">Bring us the idea<br />you <em>can’t let go.</em></h2>
        <div className="contact-bottom">
          <p>New projects. New talent. New partnerships.<br />We’re ready for the next chapter.</p>
          <a href="mailto:info@jmientertainment.com">info@jmientertainment.com <b aria-hidden="true">↗</b></a>
        </div>
        <footer><a className="wordmark" href="#top"><span>JMI</span> ENTERTAINMENT</a><p>Production · Distribution · Entertainment</p><p>© {new Date().getFullYear()} JMI Entertainment</p></footer>
      </section>
    </main>
  );
}
