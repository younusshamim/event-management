import cn from "../utils/class-names";

const PrimaryBtn = ({ className, children, ...rest }) => {
  return (
    <button className={cn("btn btn-primary", className)} {...rest}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
