import { motion, useReducedMotion } from "framer-motion";

import { Container } from "../components/layout/Container";
import { Icon } from "../components/ui/Icon";
import { footer } from "../data/footer";
import { iconMap } from "../utils/icons";
import {
  container,
  fadeIn,
  fadeUp,
  slideInRight,
  DURATION,
  STAGGER,
  VIEWPORT,
} from "../utils/motion";

export function Footer() {
  const reduce = useReducedMotion();
  const isReduced = !!reduce;

  /* ---- Variants from the shared motion system ---- */

  const identityVariants = fadeUp(isReduced, 16, DURATION.slow);
  const socialsContainer = container(isReduced, STAGGER.base, 0.2);
  const socialItem = slideInRight(isReduced, 12, DURATION.fast);
  const baselineVariants = fadeIn(isReduced, DURATION.base, 0.4);

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          {/* ---- Identity ---- */}
          <motion.div
            className="footer__identity"
            variants={identityVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.late}
          >
            <span className="footer__name">{footer.name}</span>
            <span className="footer__role">{footer.role}</span>

            <p className="footer__tagline">
              {footer.tagline.map((item, index) => (
                <span key={item} className="footer__tagline-item">
                  {item}
                  {index < footer.tagline.length - 1 && (
                    <span className="footer__tagline-sep" aria-hidden="true">
                      {" • "}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>

          {/* ---- Socials ---- */}
          <motion.nav
            className="footer__socials"
            aria-label="Contact et réseaux sociaux"
            variants={socialsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.late}
          >
            <ul className="footer__socials-list">
              {footer.socials.map((link) => {
                const externalProps = link.external
                  ? {
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <motion.li key={link.id} variants={socialItem}>
                    <a
                      className="footer__social-link"
                      href={link.href}
                      {...externalProps}
                    >
                      <span className="footer__social-icon">
                        <Icon
                          icon={iconMap[link.icon]}
                          size={16}
                          strokeWidth={1.5}
                        />
                      </span>
                      <span className="footer__social-label">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        </div>

        {/* ---- Baseline ---- */}
        <motion.div
          className="footer__baseline"
          variants={baselineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.veryLate}
        >
          <span className="footer__copyright">{footer.copyright}</span>
          <span className="footer__location">{footer.location}</span>
        </motion.div>
      </Container>
    </footer>
  );
}