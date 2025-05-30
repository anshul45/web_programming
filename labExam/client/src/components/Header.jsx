import { Link } from "react-router";

const Header = () => {
  return (
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="hidden lg:flex lg:gap-x-12">
          <Link to="/">Show All</Link>
          <Link to="/add"> Add Notes</Link>
          <Link to="/delete"> Delete Note</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
