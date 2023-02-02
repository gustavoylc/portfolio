import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import WavingHand from '../../public/icons/waving-hand.svg';

function Home() {
  const [text] = useTypewriter({
    words: [
      'Gustavo!',
      'Software Engineer',
      'Fullstack Javascript Developer',
      'React Developer',
      'Node Developer',
      'Frontend Developer',
      'Backend Developer',
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <>
      <section className="flex flex-col place-content-center h-screen max-sm:px-5 gap-5">
        <article className="flex gap-2 items-center">
          <Image src={WavingHand} alt="Waving Hand" height={40} />
          <h4>
            Hi, I´m <span>{text}</span>
            <Cursor cursorColor="#6ac0f3" />
          </h4>
        </article>
        <article>
          <h3>Fullstack Javascript Developer</h3>
        </article>
        <article className="text-xl">
          <p>I love programming like a monster</p>
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
      </section>
    </>
  );
}
// 025b92
export default Home;
