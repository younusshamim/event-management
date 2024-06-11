import getEventDateTimeData from "../../utils/getEventDateTimeData";
import Avatar from "../../components/Avatar";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock, FaEdit } from "react-icons/fa";

const EventDetailsModal = ({ isOpen, setIsOpen, event }) => {
  const formattedDateTime = getEventDateTimeData(event?.start, event?.end);

  const { startDate, endDate, startTime, endTime, meetingTime, day, month } =
    formattedDateTime || {};
  const { title, description, location } = event || {};

  return (
    <dialog id="event_details_modal" className="modal">
      <div className="modal-box  min-w-[600px] px-16 py-10">
        <div className="flex justify-end text-xl text-primary relative ">
          <FaEdit className="absolute right-[-40px] top-[-10px] cursor-pointer active:opacity-80" />
        </div>

        <h2 className="text-xl font-semibold  mb-1">{title}</h2>
        <p className="text-gray-600 leading-5 mb-5">{description}</p>

        <div className="text-sm text-gray-800 font-semibold gap-1 flex flex-col">
          <div className="flex items-center gap-3 ">
            <FaLocationDot />
            <p>{location}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaRegClock />
            <p>Start Date - {startDate}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaRegClock />
            <p>End Date - {endDate}</p>
          </div>
        </div>

        <hr className="my-5" />

        <div>
          <p className="mb-1 uppercase text-[12px] font-semibold">
            Peoples who join the event
          </p>

          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <Avatar name="John Doe" initials="J" size="sm" />
              <p>John Doe</p>
            </div>

            <div className="flex gap-1 items-center">
              <Avatar name="John Doe" initials="YS" size="sm" />
              <p>John Doe</p>
            </div>

            <div className="flex gap-1 items-center">
              <Avatar name="John Doe" initials="YS" size="sm" />
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default EventDetailsModal;
