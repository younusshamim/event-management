import cn from "../utils/class-names";

const Textarea = ({
  label,
  error,
  className,
  //   labelClassName,
  //   inputWrapClassName,
  //   inputClassName,
  //   errorClassName,
  ...rest
}) => {
  return (
    <label className={cn("form-control", className)}>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <textarea
        className="textarea textarea-bordered h-24"
        {...rest}
      ></textarea>

      {error && (
        <div className="label text-red-500">
          <span className="label-text-alt">{error}</span>
        </div>
      )}
    </label>
  );
};

export default Textarea;
