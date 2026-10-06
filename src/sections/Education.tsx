import { motion, useReducedMotion } from "framer-motion";

import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/layout/SectionHeader";
import { education } from "../data/education";
import {
  container,
  drawScale,
  fadeScale,
  fadeUp,
  DURATION,
  STAGGER,
  VIEWPORT,
} from "../utils/motion";

export function Education() {
  const reduce = useReducedMotion();
  const isReduced = !!reduce;

  /* ---------------------------------------------------------- */
  /*  Variants — from the shared motion system                   */
  /* ---------------------------------------------------------- */

  const spineVariants = drawScale(isReduced, "y", 0.9);
  const listVariants = container(isReduced, STAGGER.loose, 0.15);
  const itemVariants = container(isReduced, STAGGER.tight);
  const dotVariants = fadeScale(isReduced, 0.5, DURATION.fast);
  const contentVariants = fadeUp(isReduced, 12, DURATION.fast);

  return (
    <section
      id="education"
      className="education"
      aria-labelledby="education-title"
    >
      <Container>
        <SectionHeader title="Education" index="06" id="education-title" />

        <div className="education__timeline">
          <motion.div
            className="education__line"
            aria-hidden="true"
            variants={spineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.early}
          />

          <motion.ol
            className="education__list"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.early}
          >
            {education.map((entry) => (
              <motion.li
                key={entry.id}
                className="education__item"
                variants={itemVariants}
              >
                <motion.span
                  className="education__dot"
                  aria-hidden="true"
                  variants={dotVariants}
                />

                <motion.div
                  className="education__inner"
                  variants={contentVariants}
                >
                  <motion.span
                    className="education__period"
                    variants={contentVariants}
                  >
                    {entry.period}
                  </motion.span>

                  <motion.h3
                    className="education__title"
                    lang="fr"
                    variants={contentVariants}
                  >
                    {entry.title}
                  </motion.h3>

                  <motion.p
                    className="education__institution"
                    variants={contentVariants}
                  >
                    <span lang="fr">{entry.institution}</span>
                    {" · "}
                    {entry.location}
                  </motion.p>

                  <motion.p
                    className="education__focus"
                    variants={contentVariants}
                  >
                    {entry.focus}
                  </motion.p>
                </motion.div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}