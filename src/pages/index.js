import { motion } from 'framer-motion';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import WavingHand from '../../public/icons/waving-hand.svg';

function Home() {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Gustavo!",
      'I love coding, would you like to join me?',
      "Let's start again",
      "{ greetings: 'Hi, I'm Gustavo!' }",
    ],
    loop: 1,
    delaySpeed: 1000,
  });
  return (
    <>
      <motion.section
        className="flex flex-col place-content-center gap-3 h-screen"
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
        <article className="flex gap-4 items-center">
          <Image src={WavingHand} alt="Waving Hand" height={40} />
          <h4>
            <span>{text}</span>
            <Cursor cursorColor="#6ac0f3" cursorStyle="_" />
          </h4>
        </article>
        <article>
          <h3>Fullstack Javascript Developer</h3>
        </article>
        <article className="text-xl">
          <p>
            My goal as a Fullstack JavaScript developer is to solve problems and
            create efficient and effective solutions through technology. Take a
            look at my portfolio to learn more about my work.
          </p>
        </article>
        <article className="">
          <SocialIcon
            url="https://www.linkedin.com/in/gustavoylc/"
            bgColor="transparent"
            fgColor="#3da6e5"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://github.com/gustavoylc"
            bgColor="transparent"
            fgColor="#3da6e5"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://twitter.com/gustavoylc"
            bgColor="transparent"
            fgColor="#3da6e5"
            target="_blank"
            rel="noopener noreferrer"
          />
        </article>
      </motion.section>
    </>
  );
}
export default Home;
