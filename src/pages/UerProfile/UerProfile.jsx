import { useState } from "react";
import Events from "./Events";
import FilterOptions from "./FilterOptions";
import Pagination from "../../components/Pagination";
import { addDays } from "date-fns";
import { useEventListQuery } from "../../services/eventApi";
import PageLoader from "../../components/PageLoader";
import ErrorMsg from "../../components/ErrorMsg";
import { useDebounce } from "use-debounce";

const UerProfile = () => {
  // pagination
  const [currPage, setCurrPage] = useState(0);
  const [size, setSize] = useState(10);

  // filter options
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 30),
      key: "selection",
    },
  ]);
  const { startDate, endDate } = selectedRange[0];

  // debouncing
  const [debouncedTitle] = useDebounce(searchTitle, 400);
  const [debouncedLocation] = useDebounce(searchLocation, 400);

  // query
  const { data, error, isLoading } = useEventListQuery({
    title: debouncedTitle,
    location: debouncedLocation,
    start: startDate,
    end: endDate,
    page: currPage,
    size,
  });

  // pagination
  const pages = Math.ceil(data?.count / size);

  if (isLoading) return <PageLoader />;
  if (error) return <ErrorMsg />;

  return (
    <>
      <FilterOptions
        searchFields={[
          {
            label: "Title",
            placeholder: "Search by title",
            value: searchTitle,
            onChange: (e) => setSearchTitle(e.target.value),
          },
          {
            label: "Location",
            placeholder: "Search by location",
            value: searchLocation,
            onChange: (e) => setSearchLocation(e.target.value),
          },
        ]}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />

      <Events events={data.events} />

      <Pagination pages={pages} currPage={currPage} setCurrPage={setCurrPage} />
    </>
  );
};

export default UerProfile;
