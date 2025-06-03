import { motion } from "framer-motion";
import regexString from "./regexString";

// Texte
const heading = "🎨 Bienvenue sur Components Design UI";
const text = `
  Découvrez une collection de composants visuels modernes et animés (boutons, cartes, loaders, effets de texte…) prêts à être intégrés dans vos projets web. Chaque élément est pensé pour améliorer l’esthétique et l’interaction de vos interfaces, tout en restant simple à intégrer.
`;

// Setup animation variants
const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function TextReveal() {
  const headingChars = regexString(heading);
  const textChars = regexString(text);

  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.04 }}>
        {headingChars.map((char, i) => (
          <motion.span
            key={`heading-${char}-${i}`}
            transition={{ duration: 0.5 }}
            variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.02 }}>
        {textChars.map((char, i) => (
          <motion.span
            key={`text-${char}-${i}`}
            transition={{ duration: 0.35 }}
            variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
}

export default TextReveal;
