"use client";

import { motion, useReducedMotion, useScroll, useSpring, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Yumuşak, "yaylı" geçiş eğrisi — tüm animasyonlarda aynı karakter için. */
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Görünüme girdiğinde içeriği aşağıdan yukarı doğru belirten sarmalayıcı.
 * Sunucu bileşenleri bu sarmalayıcıya `children` olarak geçirilebilir;
 * böylece içerik sunucuda render edilmeye devam eder.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/**
 * Alt elemanlarını sırayla belirten kapsayıcı. Her bir çocuk
 * `StaggerItem` ile sarılmalıdır.
 */
export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial={reduced ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/** Sayfanın en üstünde okuma ilerlemesini gösteren ince çizgi. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-gradient-to-r from-clay-400 via-clay-600 to-clay-400"
    />
  );
}

/**
 * Başlığı kelime kelime belirten bileşen — yalnızca sayfa açılışındaki
 * ana başlıklarda kullanılır, aşırıya kaçmamak için.
 */
export function WordReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + i * 0.05, ease: EASE }}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
