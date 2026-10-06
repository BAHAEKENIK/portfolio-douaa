import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/layout/SectionHeader";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { processSteps, processIntro } from "../data/process";
import {
  container,
  fadeScale,
  fadeUp,
  fadeUpContainer,
  DURATION,
  STAGGER,
  VIEWPORT,
} from "../utils/motion";

export function Process() {
  const reduce = useReducedMotion();
  const isReduced = !!reduce;
  const isDesktop = useMediaQuery("(min-width: 900px)");

  /* ---------------------------------------------------------- */
  /*  Scroll-linked connector draw                               */
  /* ---------------------------------------------------------- */

  const stepsRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 85%", "end 30%"],
  });

  const connectorProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const connectorStyle = isDesktop
    ? { scaleX: connectorProgress }
    : { scaleY: connectorProgress };

  /* ---------------------------------------------------------- */
  /*  Variants — from the shared motion system                   */
  /* ---------------------------------------------------------- */

  const containerVariants = container(isReduced, STAGGER.loose, 0.05);
  const stepVariants = fadeUpContainer(isReduced, 16);
  const dotVariants = fadeScale(isReduced, 0.6, DURATION.fast);
  const textVariants = fadeUp(isReduced, 8, DURATION.fast);

  return (
    <section id="process" className="process" aria-labelledby="process-title">
      <Container>
        <SectionHeader title="How I Work" index="05" id="process-title" />

        <p className="process__intro">{processIntro}</p>

        <motion.ol
          ref={stepsRef}
          className="process__steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.early}
        >
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <motion.li
                key={step.id}
                className={`process__step${
                  step.highlight ? " process__step--highlight" : ""
                }`}
                variants={stepVariants}
              >
                {!isLast && (
                  <motion.span
                    className="process__connector"
                    aria-hidden="true"
                    style={isReduced ? undefined : connectorStyle}
                  />
                )}

                <motion.span
                  className="process__dot"
                  aria-hidden="true"
                  variants={dotVariants}
                />

                <motion.span
                  className="process__number"
                  variants={textVariants}
                >
                  {step.number}
                </motion.span>

                <motion.h3
                  className="process__title"
                  variants={textVariants}
                >
                  {step.title}
                </motion.h3>

                <motion.p className="process__body" variants={textVariants}>
                  {step.body}
                </motion.p>
              </motion.li>
            );
          })}
        </motion.ol>
      </Container>
    </section>
  );
}