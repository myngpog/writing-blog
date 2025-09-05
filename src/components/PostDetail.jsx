import { useParams } from "react-router-dom";
import Heading from "./Heading";
import blogMetas from "../lib/blog_meta";

export default function PostDetail() {
  const { id } = useParams();

  const meta = blogMetas[Number(id)];
  const fileName = id.padStart(4, "0");
  const filePath = `/entries/${fileName}.pdf`;

  const date = new Date(meta.date).toLocaleDateString();

  return (
    <article className="flex flex-col flex-1">
      <div className="flex flex-row justify-between mb-8 items-center">
        <Heading className="text-4xl tracking-wide font-medium">{meta.title}</Heading>
        <div className="flex-1 border-t mx-3 border-gray-300" />
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <object
        data={filePath}
        type="application/pdf"
        height="600px"
      >
        <p>
          PDF cannot be displayed. <a href={filePath}>Download it here.</a>
        </p>
      </object>
    </article>
  );
}
