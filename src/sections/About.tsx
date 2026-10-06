import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/layout/SectionHeader";
import { Icon } from "../components/ui/Icon";
import {
  aboutLead,
  capabilities,
  focusBlock,
} from "../data/about";
import { aboutSummary } from "../data/education";
import { iconMap } from "../utils/icons";

function splitLead(text: string): { primary: string; secondary?: string } {
  const idx = text.indexOf("—");
  if (idx === -1) return { primary: text.trim() };
  return {
    primary: text.slice(0, idx).trim(),
    secondary: text.slice(idx + 1).trim(),
  };
}

export function About() {
  const lead = splitLead(aboutLead);

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <Container>
        <SectionHeader title="About" index="01" id="about-title" />

        <p className="about__lead">
          {lead.primary}
          {lead.secondary && (
            <>
              {" — "}
              <span className="about__lead-secondary">{lead.secondary}</span>
            </>
          )}
        </p>

        <div className="about__grid">
          <div className="about__column">
            <h3 className="about__subhead">Capabilities</h3>

            <ul className="capabilities">
              {capabilities.map((cap) => (
                <li key={cap.id} className="capability">
                  <span className="capability__marker">
                    <Icon icon={iconMap[cap.icon]} />
                  </span>
                  <div className="capability__body">
                    <span className="capability__label">{cap.label}</span>
                    <p className="capability__desc">{cap.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__column about__column--side">
            <h3 className="about__subhead">Formation</h3>

            <p className="about__formation-summary">{aboutSummary.text}</p>

            <a href={aboutSummary.href} className="about__see-more">
              {aboutSummary.linkLabel}
              <span className="about__see-more-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <div className="focus">
              <span className="focus__label">
                <span className="focus__dot" aria-hidden="true" />
                {focusBlock.label}
              </span>
              <p className="focus__headline">
                <span lang="fr">{focusBlock.headlineFr}</span>{" "}
                {focusBlock.headlineEn}
              </p>
              <ul className="focus__tags">
                {focusBlock.tags.map((tag) => (
                  <li key={tag} className="focus__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}