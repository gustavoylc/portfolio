import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@components/Button';

function About() {
  return (
    <motion.section
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
      <h1 className="text-[#3da6e5]">About</h1>
      <article className="grid grid-rows-[1fr_100px] sm:grid-rows-1 gap-16 sm:grid-cols-[2fr_1fr] justify-items-center pb-4">
        <p className="leading-7 ">
          I am a software engineer and I have specialized in frontend
          technologies. I am passionate about problem solving and creating
          personalized, effective, and scalable solutions. In my free time, I
          enjoy learning new technologies and improving my skills.
        </p>
        <div className="self-center">
          <Link href="/pdf/cv.pdf" target="_blank" download="gustavoylc-cv.pdf">
            <Button>Download CV</Button>
          </Link>
        </div>
      </article>
    </motion.section>
  );
}

export default About;
