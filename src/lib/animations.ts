import { Variants } from 'framer-motion';

export const springSlideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const springSlideUpStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      stiffness: 90,
      damping: 14,
    },
  },
};

export const letterRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const letterRevealItem: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      stiffness: 120,
      damping: 12,
    },
  },
};

export const cardHover = {
  rest: { scale: 1, boxShadow: '0 0 0px rgba(225, 29, 72, 0)' },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 30px rgba(225, 29, 72, 0.35), 0 0 60px rgba(225, 29, 72, 0.15)',
    transition: { type: 'spring', mass: 0.4, stiffness: 200, damping: 20 },
  },
};

export const viewportOptions = { once: true, margin: '-80px' };
