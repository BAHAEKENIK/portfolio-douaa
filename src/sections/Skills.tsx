import { motion, useReducedMotion } from "framer-motion";

import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/layout/SectionHeader";
import { Icon } from "../components/ui/Icon";
import {
  skillCategories,
  interpersonalSkills,
  languages,
  type Language,
} from "../data/skills";
import { iconMap } from "../utils/icons";
import {
  container,
  fadeUp,
  slideInLeft,
  DURATION,
  STAGGER,
  VIEWPORT,
} from "../utils/motion";

import FR from "country-flag-icons/react/3x2/FR";
import MA from "country-flag-icons/react/3x2/MA";
import GB from "country-flag-icons/react/3x2/GB";

/** Explicit map keeps tree-shaking effective and types tight. */
const flagMap: Record<Language["countryCode"], typeof FR> = {
  FR,
  MA,
  GB,
};

export function Skills() {
  const reduce = useReducedMotion();
  const isReduced = !!reduce;

  /* ---- Variants from the shared motion system ---- */

  const columnsContainer = container(isReduced, STAGGER.loose, 0.05);
  const columnVariant = fadeUp(isReduced, 20, DURATION.slow);
  const listVariant = container(isReduced, STAGGER.tight, 0.2);
  const skillRowVariant = slideInLeft(isReduced, 8, DURATION.fast);
  const footerContainer = container(isReduced, STAGGER.loose, 0.05);
  const footerRowVariant = fadeUp(isReduced, 12, DURATION.base);

  return (
    <section className="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeader title="Compétences" index="04" id="skills-title" />

        {/* ---- Three technical columns ---- */}
        <motion.div
          className="skills__columns"
          variants={columnsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.early}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="skills__column"
              variants={columnVariant}
            >
              <h3 className="skills__column-label">{category.label}</h3>

              <motion.ul className="skills__list" variants={listVariant}>
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill.id}
                    className="skill"
                    variants={skillRowVariant}
                  >
                    <span className="skill__marker">
                      <Icon
                        icon={iconMap[skill.icon]}
                        size={16}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="skill__label">
                      {skill.label}
                      {skill.qualifier && (
                        <>
                          {" "}
                          <span className="skill__qualifier">
                            ({skill.qualifier})
                          </span>
                        </>
                      )}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- Footer rows ---- */}
        <motion.footer
          className="skills__footer"
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.late}
        >
          <motion.div
            className="skills__footer-row"
            variants={footerRowVariant}
          >
            <h3 className="skills__footer-label">Savoir-être</h3>
            <ul className="skills__footer-list">
              {interpersonalSkills.map((item) => (
                <li key={item.id} className="skills__footer-item">
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="skills__footer-row"
            variants={footerRowVariant}
          >
            <h3 className="skills__footer-label">Langues</h3>
            <ul className="skills__footer-list skills__footer-list--languages">
              {languages.map((lang) => {
                const Flag = flagMap[lang.countryCode];
                return (
                  <li
                    key={lang.id}
                    className="skills__footer-item skills__language"
                  >
                    <Flag
                      className="skills__language-flag"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span className="skills__language-name">{lang.label}</span>
                    <span className="skills__language-level">{lang.level}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.footer>
      </Container>
    </section>
  );
}