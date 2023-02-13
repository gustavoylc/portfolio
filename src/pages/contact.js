import ContactMe from '@components/ContactMe';
import { motion } from 'framer-motion';

function contact() {
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
    >
      <ContactMe />
    </motion.div>
  );
}

export default contact;
