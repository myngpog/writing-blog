import Heading from "./Heading";

export default function Daffodils() {
  return (
    <article className="flex flex-col gap-6">
      <Heading>Daffodils</Heading>
      <p className="text-text-light">
        A historical romance fantasy following the life of the one fallen from grace.
      </p>

      <div className="flex flex-row gap-4">
        {/* <section className="flex flex-col gap-4">
          <Heading className="text-2xl  tracking-[0.4rem]">Books in the Series</Heading>
          <BookDetail
            title="Book 1: Drowning in Daffodils"
            description=""
          />
        </section> */}

        {/* <section className="flex flex-col gap-4">
          <Heading className="text-2xl font-body">Listen to the Playlist</Heading>
          <p className="text-text-dark">A playlist inspired by the world of Daffodils!</p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7gWTaXvb8NDDPjKJkzTuDC?utm_source=generator"
            width="100%"
            height="380"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Daffodils Playlist"
          ></iframe>
        </section> */}
      </div>
    </article>
  );
}

function BookDetail({ title, description }) {
  return (
    <div className="border-l-2 border-dark-pink pl-3 flex flex-col gap-4 py-4">
      <Heading className="text-xl">{title}</Heading>
      <p className="text-text-dark">{description}</p>
    </div>
  );
}
