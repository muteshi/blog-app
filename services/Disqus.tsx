import { DiscussionEmbed, CommentCount } from "disqus-react";

interface ArticleCommentsProps {
  url?: string;
  slug: string;
  language?: string;
  title: string;
}

const shortname = "muteshi-com";
// const siteUrl = window.location.href;
const lang = "en";

export const ArticleComments: React.FC<ArticleCommentsProps> = ({
  url,
  slug,
  title,
  language = lang,
}) => {
  return (
    <DiscussionEmbed
      shortname={shortname}
      config={{
        url,
        identifier: slug,
        title,
        language,
      }}
    />
  );
};

export const ArticleCommentsCount: React.FC<ArticleCommentsProps> = ({
  url,
  slug,
  title,
}) => {
  return (
    <CommentCount
      shortname={shortname}
      config={{
        url,
        identifier: slug,
        title,
      }}
    >
      Comments
    </CommentCount>
  );
};
