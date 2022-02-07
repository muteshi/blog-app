import { PhotoInterface } from "../../models/posts.model";

interface PageTitleProps {
  photo: PhotoInterface[];
}
const PageTitle: React.FC<PageTitleProps> = ({ photo }) => {
  const photoUrl = photo[0].image.replace("http", "https");

  return (
    //  start page title section
    <section
      className="wow animate__fadeIn parallax"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ),
        url(${photoUrl})`,
      }}
    >
      {/* <div className="opacity-medium bg-extra-dark-gray"></div> */}
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 d-flex flex-column justify-content-center text-center extra-small-screen page-title-large">
            {/* start page title  */}
            <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">
              Blog
            </h1>

            {/* end page title  */}
          </div>
        </div>
      </div>
      <span className="opacity6 alt-font span-left">{photo[0].caption}</span>
    </section>
    // end page title section
  );
};

export default PageTitle;
