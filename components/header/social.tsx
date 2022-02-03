const Social: React.FC = () => {
  return (
    <div className="header-social-icon d-none d-md-inline-block">
      <a
        href="https://www.facebook.com/"
        title="Facebook"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook-f" aria-hidden="true"></i>
      </a>
      <a
        href="https://twitter.com/"
        title="Twitter"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://dribbble.com/"
        title="Dribbble"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-dribbble"></i>
      </a>
    </div>
  );
};
export default Social;
