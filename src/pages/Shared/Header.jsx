import Avatar from "../../components/Avatar";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 rounded-sm">
      <h1 className="text-2xl font-bold text-gray-700">Event Management</h1>
      <div>
        <Avatar name="John Doe" initials="YS" size="sm" />
      </div>
    </div>
  );
};

export default Header;
