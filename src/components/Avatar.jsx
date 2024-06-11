import cn from "../utils/class-names";

const Avatar = ({ initials, name, size }) => {
  return (
    <div className="lksjdlfkjlavatar lksjdlfkjlplaceholder" title={name}>
      <div
        className={cn(
          "bg-red-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold",
          {
            "h-8 w-8 text-sm": size === "sm",
          }
        )}
      >
        <span>{initials}</span>
      </div>
    </div>
  );
};

export default Avatar;
