import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/layout/SectionHeader";
import { experience } from "../data/experience";
import {
  container,
  fadeScale,
  fadeUp,
  DURATION,
  EASE_OUT,
  STAGGER,
  VIEWPORT,
} from "../utils/motion";

export function Experience() {
  const reduce = useReducedMotion();
  const isReduced = !!reduce;
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 15%"],
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const itemVariants = container(isReduced, STAGGER.base, 0.05);
  const dotVariants = fadeScale(isReduced, 0.6, DURATION.fast);
  const contentVariants = fadeUp(isReduced, 16, DURATION.slow);

  return (
    <section className="experience" aria-labelledby="experience-title">
      <Container>
        <SectionHeader
          title="Expérience"
          index="02"
          id="experience-title"
        />

        <div className="timeline" ref={timelineRef}>
          <motion.div
            className="timeline__line"
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : lineScaleY }}
          />

          <ol className="timeline__list">
            {experience.map((entry) => (
              <motion.li
                key={entry.id}
                className={`timeline__item${
                  entry.highlight ? " timeline__item--highlight" : ""
                }`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT.early}
              >
                {entry.highlight && !isReduced && (
                  <motion.span
                    className="timeline__dot-ring"
                    aria-hidden="true"
                    initial={{ scale: 1, opacity: 0.6 }}
                    whileInView={{ scale: 2.5, opacity: 0 }}
                    viewport={VIEWPORT.late}
                    transition={{
                      duration: 1.6,
                      ease: EASE_OUT,
                      delay: 0.35,
                    }}
                  />
                )}

                <motion.span
                  className="timeline__dot"
                  aria-hidden="true"
                  variants={dotVariants}
                />

                <motion.div
                  className="timeline__inner"
                  variants={contentVariants}
                >
                  <span className="timeline__period">{entry.period}</span>

                  <header className="timeline__header">
                    <h3 className="timeline__role">{entry.role}</h3>
                    <p className="timeline__company">
                      {entry.company}
                      {entry.location && ` · ${entry.location}`}
                    </p>
                  </header>

                  <p className="timeline__title">{entry.title}</p>

                  <ul className="timeline__bullets">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="timeline__bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <ul className="timeline__tags">
                    {entry.tags.map((tag) => (
                      <li key={tag} className="timeline__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}