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
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2023 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Frontend Developer at <span className="text-gray-200">Front10</span>
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
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
          <p className="text-sm text-gray-200">Havana, Cuba</p>
          <p className="text-base font-normal ">
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
