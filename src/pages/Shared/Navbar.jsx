import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import navItems from "../../data/nav-items";
import cn from "../../utils/class-names";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="border-y bg-gray-100 flex justify-center items-center gap-10 h-[70px]">
      {navItems.map((item, i) => (
        <Link key={item.name + i} to={item.link}>
          <div
            className={cn(
              "font-semibold cursor-pointer hover:text-primary active:text-gray-700",
              { "underline text-primary": pathname === item.link }
            )}
          >
            <p>{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
