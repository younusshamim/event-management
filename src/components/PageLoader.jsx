import ClipLoader from "react-spinners/ClipLoader";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <ClipLoader size={150} color={"#ccc"} />
    </div>
  );
};

export default PageLoader;
