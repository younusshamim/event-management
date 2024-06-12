const ErrorMsg = ({ msg = "An error has occurred" }) => {
  return (
    <div className="h-[400px] flex items-center justify-center font-semibold text-lg">
      {msg}
    </div>
  );
};

export default ErrorMsg;
