import { useSelector } from "react-redux";
import PrimaryBtn from "../../components/PrimaryBtn";
import getEventDateTimeData from "../../utils/getEventDateTimeData";
import cn from "../../utils/class-names";

const EventCard = ({ event, handleViewDetails, handleJoin }) => {
  const user = useSelector((state) => state.auth.user);
  const eventTimeData = getEventDateTimeData(event.start, event.end);
  const { startTime, endTime, meetingTime, day, month } = eventTimeData || {};
  const isConfirmed = event.bookedUsers.some((item) => item._id == user._id);

  if (!eventTimeData && !event) return null;
  return (
    <div className="p-5 flex justify-between bg-white rounded-md hover:bg-primary-lighter  transition-all">
      <div className="flex gap-10 w-full">
        <div className="text-center text-primary bg-primary-lighter px-5 h-20 rounded-lg">
          <p className="text-3xl font-semibold">{day}</p>
          <p>{month}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold  mb-1">{event.title}</h2>
          <p className="text-gray-600 leading-5 mb-3">{event.description}</p>
          <div className="text-sm flex text-gray-800 gap-3">
            <p>Location: {event.location}</p>
            <span>.</span>
            <p>
              {startTime} - {endTime}
            </p>
            <span>.</span>
            <p>Duration: {meetingTime}</p>
          </div>
        </div>
      </div>

      <div className="w-40 flex flex-col gap-2">
        <PrimaryBtn
          className={cn("btn-sm w-full")}
          onClick={handleJoin}
          disabled={isConfirmed}
        >
          {isConfirmed ? "Confirmed" : "   Join Event"}
        </PrimaryBtn>

        <PrimaryBtn
          className="btn-sm btn-outline w-full"
          onClick={handleViewDetails}
        >
          View Details
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default EventCard;
