import { useCallback } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { Container } from "../components/layout/Container";
import { SectionHeader } from "../components/layout/SectionHeader";
import { Icon } from "../components/ui/Icon";
import { projects, type Project } from "../data/projects";
import { iconMap } from "../utils/icons";
import {
  container,
  fadeScale,
  fadeUp,
  slideInLeft,
  DURATION,
  STAGGER,
  VIEWPORT,
} from "../utils/motion";

/* ============================================================
   CURSOR SPOTLIGHT HOOK — unchanged
   ============================================================ */

function useSpotlight(enabled: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useSpring(0, { stiffness: 200, damping: 25 });

  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLLIElement>) => {
      if (!enabled || e.pointerType !== "mouse") return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      opacity.set(1);
    },
    [enabled, x, y, opacity],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLLIElement>) => {
      if (!enabled || e.pointerType !== "mouse") return;
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    },
    [enabled, x, y],
  );

  const handlePointerLeave = useCallback(() => {
    if (!enabled) return;
    opacity.set(0);
  }, [enabled, opacity]);

  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(247, 246, 242, 0.05), transparent 65%)`;

  return {
    handlers: {
      onPointerEnter: handlePointerEnter,
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
    },
    background,
    opacity,
  };
}

/* ============================================================
   PROJECT ENTRY
   ============================================================ */

interface ProjectEntryProps {
  project: Project;
  reduce: boolean;
}

function ProjectEntry({ project, reduce }: ProjectEntryProps) {
  const entryContainer = container(reduce, STAGGER.loose, 0.05);
  const ghostVariant = fadeScale(reduce, 1.04, DURATION.slower);
  const bodyContainer = container(reduce, STAGGER.loose);
  const blockVariant = fadeUp(reduce, 20, DURATION.slow);
  const techContainer = container(reduce, STAGGER.tight);
  const techItem = slideInLeft(reduce, 8, DURATION.fast);

  const spotlight = useSpotlight(!reduce);

  return (
    <motion.li
      className="project"
      variants={entryContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.early}
      {...spotlight.handlers}
    >
      <motion.div
        className="project__spotlight"
        aria-hidden="true"
        style={{
          background: spotlight.background,
          opacity: spotlight.opacity,
        }}
      />

      <motion.span
        className="project__ghost"
        aria-hidden="true"
        variants={ghostVariant}
      >
        {project.number}
      </motion.span>

      <motion.div className="project__body" variants={bodyContainer}>
        <motion.div variants={blockVariant}>
          <div className="project__meta">
            <span className="project__category">
              <span className="project__dot" aria-hidden="true" />
              {project.category}
            </span>
          </div>

          <h3 className="project__name">{project.name}</h3>
          <p className="project__context">{project.context}</p>
        </motion.div>

        <motion.div variants={blockVariant}>
          <dl className="project__panels">
            <div className="panel">
              <dt className="panel__label">Problème</dt>
              <dd className="panel__body">{project.problem}</dd>
            </div>
            <div className="panel">
              <dt className="panel__label">Solution</dt>
              <dd className="panel__body">{project.solution}</dd>
            </div>
          </dl>

          <ul className="project__deliverables">
            {project.deliverables.map((item) => (
              <li key={item} className="project__deliverable">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.ul className="project__tech" variants={techContainer}>
          {project.technologies.map((tech) => (
            <motion.li
              key={tech.id}
              className="project__tech-item"
              variants={techItem}
            >
              <span className="project__tech-marker">
                <Icon icon={iconMap[tech.icon]} size={16} strokeWidth={1.5} />
              </span>
              <span className="project__tech-label">{tech.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.li>
  );
}

/* ============================================================
   SECTION
   ============================================================ */

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      className="section--dark projects"
      aria-labelledby="projects-title"
    >
      <Container>
        <SectionHeader title="Projets" index="03" id="projects-title" />

        <ol className="projects__list">
          {projects.map((project) => (
            <ProjectEntry
              key={project.id}
              project={project}
              reduce={!!reduce}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}