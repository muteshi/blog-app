import Link from "next/link";
import Logo from "./logo";
import Navigation from "./navigation";
import HeaderSearch from "../search/search-header";
import Social from "./social";

const MainNavigation: React.FC = () => {
  return (
    <header>
      <Navigation>
        <Link href="https://muteshi.dev/" passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <div className="col-auto pe-0">
          <HeaderSearch />
          <Social />
        </div>
      </Navigation>
    </header>
  );
};

export default MainNavigation;
