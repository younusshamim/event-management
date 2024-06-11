import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import SearchInput from "../../components/SearchInput";

const FilterOptions = ({ searchFields, selectedRange, setSelectedRange }) => {
  const startDate = selectedRange[0].startDate;
  const endDate = selectedRange[0].endDate;
  const formatStartDate = format(new Date(startDate), "dd/LL/yy");
  const formatEndDate = format(new Date(endDate), "dd/LL/yy");

  return (
    <div className="flex gap-5 my-10">
      {/* search fields  */}
      {searchFields.map((props, index) => (
        <SearchInput key={index} className="" {...props} />
      ))}

      {/* date range picker  */}
      {/* <Popover>
        <Popover.Trigger>
          <Input
            label="Select Date"
            placeholder="Select Date Range"
            value={`${formatStartDate}-${formatEndDate}`}
            onChange={() => {}}
          />
        </Popover.Trigger>

        <Popover.Content>
          <DateRangePicker
            onChange={(item) => setSelectedRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={selectedRange}
            direction="horizontal"
          />
        </Popover.Content>
      </Popover> */}
    </div>
  );
};

export default FilterOptions;
