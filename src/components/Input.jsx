import cn from "../utils/class-names";

const Input = ({
  type = "text",
  label,
  error,
  className,
  labelClassName,
  inputWrapClassName,
  inputClassName,
  errorClassName,
  ...rest
}) => {
  return (
    <label className={cn("form-control w-full", className)}>
      <div className={cn("label", labelClassName)}>
        <span className="label-text">{label}</span>
      </div>

      <label
        className={cn(
          "input input-bordered flex items-center gap-2 h-10",
          inputWrapClassName
        )}
      >
        <input
          type={type}
          className={cn("text-sm", inputClassName)}
          {...rest}
        />

        {type === "search" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
      </label>

      {error && (
        <div className={cn("label text-red-500", errorClassName)}>
          <span className="label-text-alt">{error}</span>
        </div>
      )}
    </label>
  );
};

export default Input;
