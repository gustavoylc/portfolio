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
      <h1 className="text-[#3da6e5]">Get In Touch</h1>
      <ContactMe />
    </motion.div>
  );
}

export default contact;
