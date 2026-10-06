import { Button } from "../components/ui/Button";
import { SmartImage } from "../components/ui/SmartImage";
import { Container } from "../components/layout/Container";

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Industrial Engineer</span>

            <h1 id="hero-title" className="hero__title">
              Douaa
              <br />
              Bejou
            </h1>

            <p className="hero__positioning">
              I combine industrial engineering, quality, data and software to
              build practical solutions for real-world problems.
            </p>

            <div className="hero__cta">
              <Button href="#projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button href="#footer" variant="secondary" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__media-frame">
              <SmartImage
                src="/portrait/douaa-portrait.png"
                webpSrc="/portrait/douaa-portrait.webp"
                alt="Portrait of Douaa Bejou"
                width={800}
                height={746}
                loading="eager"
                fetchPriority="high"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}