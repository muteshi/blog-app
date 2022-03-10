import Image from "next/image";
import { PostInterface } from "../../models/posts.model";

import ReactMarkdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

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
      return <p className="fs-4 lh-base">{paragraph.children}</p>;
    },

    h3(heading: any) {
      return (
        <h3 style={{ fontSize: "30px", color: "red" }}>{heading.children}</h3>
      );
    },

    code(code: any) {
      const { node, inline, className, children, ...props } = code;
      const match = /language-(\w+)/.exec(className || "")!;

      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={atomDark}
          language={match[1]}
          customStyle={{
            width: "100%",
            fontSize: "20px",
          }}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <section className="wow animate__fadeIn">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 d-flex flex-wrap last-paragraph-no-margin">
            <ReactMarkdown components={customRenderers}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostContent;
