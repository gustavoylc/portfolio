import { skillsName } from '@/utils/mySkills';

function Skill({ name }) {
  return (
    <div className="transition duration-300 ease-in-out hover:scale-110 flex flex-col justify-center justify-items-center items-center">
      {skillsName[name]}
    </div>
  );
}

export default Skill;
