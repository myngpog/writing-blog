import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center flex-1 gap-1 about-section">
      <section className="w-full pb-4">
        <Header>about</Header>
        <p className="pl-3 border-l text-text-light text-justify text-lg border-dark-pink blurb">
          M.K. (My) Nguyen is a Vietnamese American writer from southern California. When she's not
          busy keeping up with the world and caring a little too much about her social life, she
          spends the rest of her time in her head.
          <br></br>
          <br></br>
          She enjoys writing about troubled (she likes to call them complex) characters and their
          navigation of the intricate worlds they exist in. She also likes to collect quotes and
          wastes too much money at tea and coffee shops.
        </p>
      </section>
      <section className="w-full">
        <Header>currently writing</Header>
        <ul className="list-disc pl-10 text-text-light">
          <li>
            <Link
              to="/daffodils"
              className="text-lg underline mr-2.5 hover:text-red-300"
            >
              Wait Where the Daffodils Bloom
            </Link>
            <span className=" text-dark-pink-button">
              A historical romance fantasy; currently REVISING
            </span>
          </li>
          <li>
            <span className="text-lg mr-2.5">a day, a night; winter</span>
            <span className="text-dark-pink-button">A(n angsty) Hansy fanfic WIP</span>
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

export function Header({ children }) {
  return (
    <h1 className="font-header pb-5 tracking-[0.2rem] lg:tracking-[0.42rem] text-[2rem] font-bold text-dark-pink about-me">
      {children}
    </h1>
  );
}
