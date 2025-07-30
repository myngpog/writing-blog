export default function Daffodils() {
  return (
    <article className="flex flex-col gap-6">
      <h1 className="font-header text-dark-pink font-bold text-3xl">Daffodils</h1>
      <p className="text-text-light">
        A historical romance fantasy following the life of the one fallen from grace.
      </p>

      <div className="flex flex-row gap-4">
        <section className="flex flex-col gap-4">
          <h2 className="font-header text-dark-pink font-bold text-2xl tracking-[.42rem]">
            Books in the Series
          </h2>
          <BookDetail
            title="Book 1: The Fall"
            description="A story of betrayal and the fall from grace that changes everything."
          />
          <BookDetail
            title="Book 2: Rising Again"
            description="As the protagonist struggles to reclaim her reputation, new challenges arise."
          />
          <BookDetail
            title="Book 3: Redemption"
            description="
              In this final chapter, the protagonist seeks redemption and love, but at a great cost.
            "
          />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-dark-pink">Listen to the Playlist</h2>
          <p className="text-text-dark">Here is a playlist inspired by the themes of Daffodils:</p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7gWTaXvb8NDDPjKJkzTuDC?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Daffodils Playlist"
          ></iframe>
        </section>
      </div>
    </article>
  );
}

function BookDetail({ title, description }) {
  return (
    <div className="border-l-2 border-dark-pink pl-3 flex flex-col gap-4 py-4">
      <h3 className="font-header text-dark-pink font-bold text-xl">{title}</h3>
      <p className="text-text-dark">{description}</p>
    </div>
  );
}
