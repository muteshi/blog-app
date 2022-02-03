const PostSocial: React.FC = () => {
  return (
    <div className="col-12 col-lg-4 col-md-6 text-center text-md-end">
      <div className="social-icon-style-6">
        <ul className="extra-small-icon m-0">
          <li>
            <a className="likes-count" href="#" target="_blank">
              <i className="fas fa-heart text-deep-pink"></i>
              <span className="text-small">300</span>
            </a>
          </li>
          <li>
            <a
              className="facebook"
              href="http://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              className="twitter"
              href="http://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              className="google"
              href="http://google.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li>
            <a
              className="pinterest"
              href="http://dribbble.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PostSocial;
