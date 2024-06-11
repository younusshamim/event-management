import cn from "../utils/class-names";

const Pagination = ({ pages, currPage, setCurrPage }) => {
  return (
    <div className="py-12 flex justify-center">
      {[...Array(pages).keys()].map((number) => (
        <div
          key={number}
          className={cn(
            "py-2 px-[15px] rounded-md font-semibold cursor-pointer",
            {
              "bg-gray-700 text-white": currPage === number,
            }
          )}
          onClick={() => setCurrPage(number)}
        >
          {number + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
