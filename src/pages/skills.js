import { motion } from 'framer-motion';

function Skills() {
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
      className="h-screen flex flex-col place-content-center "
    >
      <h1 className="text-[#3da6e5]">Skills</h1>
      <article className="grid items-center grid-cols-[2fr_1fr] gap-16">
        <div>
          <h5>
            HTML CSS Javascript Typescript React Redux Sass Tailwindcss MUI
            Nodejs Nextjs Express MongoDB Mysql Postgres Docker
          </h5>
        </div>
      </article>
    </motion.div>
  );
}

export default Skills;
