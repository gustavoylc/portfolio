import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';
import socialNetworks from '@/utils/socialNetworks';
import WavingHand from '../../public/icons/waving-hand.svg';
import Perfil from '../../public/perfil.png';

function Home() {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Gustavo!",
      'I love coding, please join me!',
      "Let's start again",
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
      className="grid justify-items-center grid-rows-2 sm:grid-rows-1 gap-10 sm:grid-cols-[2fr_1fr] 
                  md:h-screen md:items-center 
                  md:short:h-full md:short:items-start 
                  md:tall:h-screen md:tall:items-center
                  lg:short:h-full lg:short:items-start
                  lg:tall:h-screen lg:tall:items-center"
    >
      {/*  */}
      <section className="flex flex-col gap-6">
        <article className="flex items-center gap-4">
          <Image src={WavingHand} alt="Waving Hand" height={40} />
          <h4>
            <span>{text}</span>
            <Cursor cursorColor="#6ac0f3" cursorStyle="_" />
          </h4>
        </article>
        <article>
          <p className="font-light text-[#3da6e5] text-4xl sm:text-5xl">
            Fullstack Javascript Developer
          </p>
        </article>
        <article className="text-xl">
          <p className="leading-relaxed">
            My goal as a Fullstack JavaScript developer is to solve problems and
            create efficient and effective solutions through technology. Take a
            look at my portfolio to learn more about my work.
          </p>
        </article>
      </section>
      <section className="flex flex-col gap-2 place-items-center self-start sm:self-center">
        <Image
          src={Perfil}
          alt="Perfil photo"
          width={240}
          className="rounded-full flex justify-items-center w-40 sm:w-56"
        />
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
