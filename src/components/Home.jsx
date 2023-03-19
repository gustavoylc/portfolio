import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { WavingHandIcon } from '@components/Icons';
import { SocialIcon } from 'react-social-icons';
import socialNetworks from '@/utils/socialNetworks';
import Perfil from '../../public/perfil.jpg';

function Home() {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Gustavo!",
      'I love coding, please join me!',
      "Let's start again!",
      '{ greeting: "Hi, I\'m Gustavo!" }',
    ],
    loop: 1,
    delaySpeed: 1000,
    deleteSpeed: 30,
    typeSpeed: 70,
  });
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
      className="grid justify-items-center grid-rows-2 sm:grid-rows-1 gap-10 sm:grid-cols-[2fr_1fr]"
    >
      <section className="flex flex-col gap-6">
        <article className="flex items-center gap-4">
          <WavingHandIcon height="50" />
          <h4>
            <span className="text-lg">{text}</span>
            <Cursor cursorColor="#6ac0f3" cursorStyle="_" />
          </h4>
        </article>
        <article>
          <p className="font-light text-transparent bg-clip-text bg-gradient-to-r from-[#3da6e5] via-pink-700 to-sky-700 text-4xl sm:text-6xl font-extrabold">
            Frontend Developer
          </p>
        </article>
        <article className="">
          <p className="leading-7">
            My goal as a Frontend Developer is to solve problems and create
            efficient and effective solutions through technology. Take a look at
            my portfolio to learn more about my work.
          </p>
        </article>
      </section>
      <section className="flex flex-col gap-2 place-items-center self-start sm:self-center">
        <motion.div
          animate={{
            scale: [1.3, 1],
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            times: [0, 1],
          }}
        >
          <Image
            src={Perfil}
            alt="Perfil photo"
            width={240}
            className="rounded-full flex justify-items-center w-40 sm:w-56"
          />
        </motion.div>
        <article>
          {socialNetworks.map((socialNetwork) => (
            <SocialIcon
              key={socialNetwork.name}
              url={socialNetwork.url}
              bgColor="transparent"
              fgColor="#3da6e5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-900 rounded-full"
            />
          ))}
        </article>
      </section>
    </motion.div>
  );
}
export default Home;
