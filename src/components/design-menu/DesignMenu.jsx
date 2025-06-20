import { motion } from "framer-motion";
import "./designMenu.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.12,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const sections = [
  { id: "design1", label: "Price" },
  { id: "design2", label: "Profil" },
  { id: "design3", label: "Tabs" },
  { id: "design4", label: "Load" },
  { id: "design5", label: "FAQ" },
];

const DesignMenu = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "instant" });
  };

  return (
    <motion.div
      className="design-menu"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      {sections.map(({ id, label }) => (
        <motion.button
          key={id}
          variants={buttonVariants}
          onClick={() => handleScroll(id)}>
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default DesignMenu;
