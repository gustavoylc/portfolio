import { motion } from 'framer-motion';

function Experience({ jobs }) {
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
      <h1 className="text-[#3da6e5]">Experience</h1>
      <ol className="relative border-l border-gray-700 mt-4">
        {jobs.map((job) => (
          <li key={job.title} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {job.startDate}
            </time>
            <p className="text-lg font-semibold text-white">{job.title}</p>
            {job.subtitle && (
              <p className="text-lg text-gray-200">{job.subtitle}</p>
            )}
            <p className="text-sm text-gray-200 mb-2">{job.location}</p>
            <p className="text-base font-normal">{job.description}</p>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}

export default Experience;
