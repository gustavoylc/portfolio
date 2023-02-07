import { motion } from 'framer-motion';

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
      className="h-screen grid place-items-center grid-cols-[2fr_1fr] gap-8"
    >
      <h4>
        I am a software engineer, I have specialized in Javascript and its
        related technologies, both frontend and backend. I am passionate about
        problem-solving and creating personalized, effective, and scalable
        solutions for clients. In my free time, I enjoy learning new
        technologies and improving my skills.
      </h4>
      <div>
        <h4>Skills</h4>
        <h5>
          HTML CSS Javascript Typescript React Redux Sass Tailwindcss MUI Nodejs
          Nextjs Express MongoDB Mysql Postgres Docker
        </h5>
      </div>
    </motion.div>
  );
}

export default About;
