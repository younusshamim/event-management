import { useState } from "react";
import Events from "./Events";
import FilterOptions from "./FilterOptions";
import Pagination from "../../components/Pagination";
import { addDays } from "date-fns";

const UerProfile = () => {
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

  // pagination
  const [currPage, setCurrPage] = useState(1);
  const pages = Math.ceil(20 / 5);

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

      <Events />

      <Pagination pages={pages} currPage={currPage} setCurrPage={setCurrPage} />
    </>
  );
};

export default UerProfile;
