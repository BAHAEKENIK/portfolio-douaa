import { Container } from "../components/layout/Container";
import { Icon } from "../components/ui/Icon";
import { footer } from "../data/footer";
import { iconMap } from "../utils/icons";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <Container>
        {/* ---- Main block: identity (left) + socials (right) ---- */}
        <div className="footer__inner">
          <div className="footer__identity">
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
          </div>

          <nav className="footer__socials" aria-label="Contact and social links">
            <ul className="footer__socials-list">
              {footer.socials.map((link) => {
                const externalProps = link.external
                  ? {
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <li key={link.id}>
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
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* ---- Baseline: copyright (left) + location (right) ---- */}
        <div className="footer__baseline">
          <span className="footer__copyright">{footer.copyright}</span>
          <span className="footer__location">{footer.location}</span>
        </div>
      </Container>
    </footer>
  );
}