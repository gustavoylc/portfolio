import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeIn',
          },
        },
      }}
      className="h-screen pt-28"
    >
      <h1 className="text-[#3da6e5]">Projects</h1>
    </motion.div>
  );
}

export default Projects;
