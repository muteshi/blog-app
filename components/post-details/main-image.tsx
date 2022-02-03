import Image from "next/image";
import { PostInterface } from "../../models/posts.model";
import { truncateString } from "../../utils";
import { BASE_URL } from "../../config.json";

interface MainPhotoProps {
  post: PostInterface;
}

const MainPhoto: React.FC<MainPhotoProps> = ({ post }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 last-paragraph-no-margin">
          <Image
            src={BASE_URL + post.image}
            width={1000}
            height={740}
            alt={post.title}
            priority
            className="w-100 margin-50px-bottom md-margin-30px-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
