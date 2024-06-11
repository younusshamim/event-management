import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar";

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex justify-between items-center p-5 rounded-sm">
      <h1 className="text-2xl font-bold text-gray-700">Event Management</h1>

      <div>
        <Avatar name={user.userName} initials={user.userName[0]} size="sm" />
      </div>
    </div>
  );
};

export default Header;
