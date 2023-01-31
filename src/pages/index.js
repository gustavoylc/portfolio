import Image from 'next/image';
import WavingHand from '../../public/icons/waving-hand.svg';
import Linkedin from '../../public/icons/linkedin.svg';
import Github from '../../public/icons/github.svg';
import Twitter from '../../public/icons/twitter.svg';

function Home() {
  return (
    <>
      <section className="py-48">
        <article className="flex gap-2 items-center">
          <Image src={WavingHand} alt="Waving Hand" height={40} />
          <h4>Hi, I´m Gustavo!</h4>
        </article>
        <article>
          <h2>Fullstack Javascript Developer</h2>
        </article>
        <article className="flex gap-5 ">
          <Image src={Linkedin} alt="Linkedin Logo" height={30} />
          <Image src={Github} alt="Github Logo" height={30} />
          <Image src={Twitter} alt="Twitter Logo" height={30} />
        </article>
      </section>
    </>
  );
}

export default Home;
