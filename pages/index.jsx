import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=''>
      <Navbar/>
        <div className="landing-section">
          <div className="left-landing font-black text-4xl">
            Hello, I&apos;m Palentier. 
          </div>
          <p>
          I&apos;m a front-end developer based in the United States.
          </p>
          <div className="flex">
          <Image width={40} height={40} src="/icons8-discord-new-50.png" />
          <Image width={40} height={40} src="/icons8-github-64.png" />
          <Image width={40} height={40} src="/icons8-twitter-30.png" />
          </div>
        </div>
    </div>
  )
}
