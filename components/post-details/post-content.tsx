import Image from "next/image";
import { PostInterface } from "../../models/posts.model";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
  post: PostInterface;
}
const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const customRenderers = {
    img(image: any) {
      return (
        <Image src={image.src} alt={image.alt} width={1000} height={300} />
      );
    },
    p(paragraph: any) {
      return <p className="fs-5 lh-lg">{paragraph.children}</p>;
    },

    code(code: any) {
      const { children } = code;
      return <SyntaxHighlighter style={docco}>{children}</SyntaxHighlighter>;
    },
  };

  return (
    <section className="wow animate__fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 d-flex flex-wrap last-paragraph-no-margin">
            <ReactMarkdown components={customRenderers}>
              {post.content.replace(/<[^>]*>?/gm, "")}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostContent;
