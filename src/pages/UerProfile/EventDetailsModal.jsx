import getEventDateTimeData from "../../utils/getEventDateTimeData";
import Avatar from "../../components/Avatar";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EventDetailsModal = ({ isOpen, setIsOpen, event }) => {
  const user = useSelector((state) => state.auth.user);
  const eventTimeData = getEventDateTimeData(event?.start, event?.end);
  const { startDate, endDate } = eventTimeData || {};
  const { title, description, location, bookedUsers } = event || {};

  return (
    <dialog id="event_details_modal" className="modal">
      {event && eventTimeData && (
        <div className="modal-box  min-w-[600px] px-16 py-10">
          {event.userId == user._id && (
            <div className="flex justify-end text-xl text-primary relative ">
              <Link to={`/edit-event/${event._id}`}>
                <FaEdit className="absolute right-[-40px] top-[-10px] cursor-pointer active:opacity-80" />
              </Link>
            </div>
          )}

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

          {bookedUsers.length > 0 && (
            <div>
              <p className="mb-2 uppercase text-[12px] font-semibold">
                Peoples who join the event
              </p>

              <div className="grid grid-cols-2  gap-2">
                {bookedUsers.map((user, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <Avatar
                      name={user.userName}
                      initials={user.userName[0]}
                      size="sm"
                    />
                    <p>{user.userName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default EventDetailsModal;
