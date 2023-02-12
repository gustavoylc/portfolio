import { motion } from 'framer-motion';
import Link from 'next/link';

function About() {
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
      className="h-screen flex flex-col sm:place-content-center pt-28 sm:pt-0"
    >
      <h1 className="text-[#3da6e5]">About</h1>
      <article className="grid grid-cols-15 gap-10 sm:grid-cols-[2fr_1fr] justify-items-center">
        <h5>
          I am a software engineer, I have specialized in Javascript and its
          related technologies, frontend and backend. I am passionate about
          problem solving and creating personalized, effective, and scalable
          solutions. In my free time, I enjoy learning new technologies and
          improving my skills.
        </h5>

        <Link href="/pdf/cv.pdf" target="_blank" download="gustavoylc-cv.pdf">
          <h4>Download CV</h4>
        </Link>
      </article>
    </motion.div>
  );
}

export default About;
