import { motion } from 'framer-motion';

function experience() {
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
      <h1 className="text-[#3da6e5]">Experience</h1>
      <ol className="relative border-l border-gray-200 mt-4">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            February 2023 - Present
          </time>
          <p className="text-lg font-semibold text-white">
            Frontend Developer at Front10
          </p>
          <p className="text-sm text-gray-200 mb-2">
            Miami, Florida, United States · Remote
          </p>
          <p className="text-base font-normal">
            Front10 is an innovative company focused on frontend development and
            digital product engineering. My experience with Next.js allows me to
            collaborate on challenging projects and contribute to the growth and
            success of our client portfolio.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2014 - September 2021
          </time>
          <p className="text-lg font-semibold text-white">
            Full Stack Developer at Documentary Heritage
          </p>
          <p className="text-lg text-gray-200">
            Office of the Historian of Havana
          </p>
          <p className="text-sm text-gray-200  mb-2">Havana, Cuba</p>
          <p className="text-base font-normal">
            A developer, who is a member of a team that includes librarians,
            curators, archivists, and even a photo library, strives to address
            existing issues by employing technology and adhering to best
            programming practices, as this approach would empower executives to
            make crucial decisions.
          </p>
        </li>
      </ol>
    </motion.div>
  );
}

export default experience;
