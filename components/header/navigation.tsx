const Navigation: React.FC = (props) => {
  return (
    <nav className="navbar navbar-default bootsnav background-white header-light navbar-top navbar-expand-lg">
      <div className="container-lg nav-header-container">{props.children}</div>
    </nav>
  );
};

export default Navigation;
