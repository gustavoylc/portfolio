import { motion } from 'framer-motion';
import Skill from '@components/Skill';
import { mySkills } from '@/utils/mySkills';

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
        {mySkills.map((singleSkill) => (
          <Skill key={singleSkill} name={singleSkill} />
        ))}
      </article>
    </motion.div>
  );
}

export default Skills;
