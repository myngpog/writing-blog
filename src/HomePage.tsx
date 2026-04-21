import { Link } from 'react-router-dom';

import Heading from './components/Heading';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center flex-1 gap-1 about-section">
      <section className="w-full pb-4">
        <Heading className="pb-5 tracking-[0.2rem] lg:tracking-[0.42rem]">
          about
        </Heading>
        <p className="pl-3 border-l text-text-light text-justify text-lg border-dark-pink blurb">
          M.K. (My) Nguyen is a Vietnamese American writer from southern
          California. When she's not busy keeping up with the world and caring a
          little too much about her social life, she spends the rest of her time
          in her head.
          <br></br>
          <br></br>
          She enjoys writing about troubled (she likes to call them complex)
          characters and their navigation of the intricate worlds they exist in.
          She also likes to collect quotes and wastes too much money at tea and
          coffee shops.
          <br></br>
          <br></br>
          <span className="block whitespace-nowrap">
            Feel free to contact me{' '}
            <a
              href="mailto:pingpengpongpog@email.com"
              className="underline hover:text-red-300"
            >
              here
            </a>
            , or on{' '}
            <a
              href="https://tumblr.com/penguinsonicee"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-300"
            >
              Tumblr
            </a>
            !
          </span>
        </p>
      </section>
      <section className="w-full">
        <Heading className="flex items-center pb-5 tracking-[0.2rem] lg:tracking-[0.42rem]">
          currently writing  <img
            src="../penguin-write.gif"
            alt="penguin writing"
            className="h-8 w-8"
          />
        </Heading>
        <ul className="list-disc pl-10 text-text-light">
          <li>
            <Link
              to="/projects/daffodils"
              className="text-lg underline mr-2.5 hover:text-red-300"
            >
              Wait Where the Daffodils Bloom
            </Link>
            <span className=" text-dark-pink-button">
              A historical romance fantasy; currently REVISING
            </span>
          </li>
          <li>
            <Link
              to="/projects/vth"
              className="text-lg underline mr-2.5 hover:text-red-300"
            >
              The Boy Holding Up The World
            </Link>
            <span className=" text-dark-pink-button">
              A contemporary sci-fi novel; currently DRAFTING
            </span>
          </li>
          <li>
            <Link
              to="/projects/tqom"
              className="text-lg underline mr-2.5 hover:text-red-300"
            >
              this queen of mine
            </Link>
            <span className="text-dark-pink-button">A fantasy Jelsa fic</span>
          </li>
          <li>
            <Link
              to="/projects/tcl"
              className="text-lg underline mr-2.5 hover:text-red-300"
            >
              the color lapis
            </Link>
            <span className="text-dark-pink-button">A historical fantasy Jelsa fic</span>
          </li>
        </ul>
      </section>

      <img
        src="/assets/header.jpg"
        className="object-cover object-center h-[225px] w-full my-4"
      />
    </main>
  );
}
