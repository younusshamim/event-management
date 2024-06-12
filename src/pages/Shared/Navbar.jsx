import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import navItems from "../../data/nav-items";
import cn from "../../utils/class-names";
import { useDispatch } from "react-redux";
import { clearUser } from "../../store/authSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

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

      <div
        onClick={handleLogout}
        className={
          "font-semibold cursor-pointer hover:text-primary active:text-gray-700"
        }
      >
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
