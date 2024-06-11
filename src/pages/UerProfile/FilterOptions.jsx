import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import Input from "../../components/Input";

const FilterOptions = ({ searchFields, selectedRange, setSelectedRange }) => {
  const startDate = selectedRange[0].startDate;
  const endDate = selectedRange[0].endDate;
  const formatStartDate = format(new Date(startDate), "dd/LL/yy");
  const formatEndDate = format(new Date(endDate), "dd/LL/yy");

  return (
    <div className="flex gap-5 my-10">
      {/* search fields  */}
      {searchFields.map((props, index) => (
        <Input key={index} type="search" {...props} />
      ))}

      <Input
        label="Select Date"
        placeholder="Select Date Range"
        value={`${formatStartDate}-${formatEndDate}`}
        onChange={() => {}}
        onClick={() => document.getElementById("date_range_picker").showModal()}
      />

      <dialog id="date_range_picker" className="modal">
        <div className="modal-box min-w-fit">
          <DateRangePicker
            onChange={(item) => setSelectedRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={selectedRange}
            direction="horizontal"
          />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default FilterOptions;
