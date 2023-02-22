import { motion } from 'framer-motion';
import {
  HTMLIcon,
  CSSIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindCSSIcon,
  MaterialUIIcon,
  NextJSIcon,
  NodeJSIcon,
  ExpressIcon,
  MongoDBIcon,
  MySQLIcon,
  PostgreSQLIcon,
  DockerIcon,
  SequelizeIcon,
  GitIcon,
} from '@components/Icons';
import Skill from '@components/Skill';

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
    >
      <h1 className="text-[#3da6e5]">Skills</h1>
      <article className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-x-5 gap-y-10 justify-items-center">
        <Skill name="HTML">
          <HTMLIcon />
        </Skill>
        <Skill name="CSS">
          <CSSIcon />
        </Skill>
        <Skill name="Javascript">
          <JavascriptIcon />
        </Skill>
        <Skill name="Typescript">
          <TypescriptIcon />
        </Skill>
        <Skill name="React">
          <ReactIcon />
        </Skill>
        <Skill name="Redux">
          <ReduxIcon />
        </Skill>
        <Skill name="SASS">
          <SassIcon />
        </Skill>
        <Skill name="TailwindCSS">
          <TailwindCSSIcon />
        </Skill>
        <Skill name="Material UI">
          <MaterialUIIcon />
        </Skill>
        <Skill name="NextJS">
          <NextJSIcon />
        </Skill>
        <Skill name="NodeJS">
          <NodeJSIcon />
        </Skill>
        <Skill name="Express">
          <ExpressIcon />
        </Skill>
        <Skill name="Sequelize">
          <SequelizeIcon />
        </Skill>
        <Skill name="MongoDB">
          <MongoDBIcon />
        </Skill>
        <Skill name="MySQL">
          <MySQLIcon />
        </Skill>
        <Skill name="PostgreSQL">
          <PostgreSQLIcon />
        </Skill>
        <Skill name="Docker">
          <DockerIcon />
        </Skill>
        <Skill name="Git">
          <GitIcon />
        </Skill>
      </article>
    </motion.div>
  );
}

export default Skills;
