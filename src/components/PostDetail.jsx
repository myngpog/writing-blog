import { useParams } from "react-router-dom";
import Heading from "./Heading";
import blogMetas from "../lib/blog_meta";

export default function PostDetail() {
  const { id } = useParams();

  const idPadded = id.padStart(4, "0");
  const meta = blogMetas[Number(id)];
  const filePaths = generateFilePaths(idPadded, meta.files);

  const date = new Date(meta.date).toLocaleDateString();

  return (
    <article className="flex flex-col flex-1">
      <div className="flex flex-row justify-between mb-8 items-center">
        <Heading className="text-2xl md:text-3xl tracking-wide font-medium">{meta.title}</Heading>
        <div className="flex-1 border-t mx-3 border-gray-300" />
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:h-[65vh] overflow-auto">
        {filePaths.map((filePath) => (
          <img
            src={filePath}
            alt="Post page"
            loading="lazy"
          />
        ))}
      </div>
    </article>
  );
}

/**
 * @param {string} id
 * @param {string[]} names
 * @returns {string[]}
 */
function generateFilePaths(id, names) {
  return names.map((name) => `/entries/${id}/IMG_${name}.jpg`);
}
