import { format, formatDistance } from "date-fns";
import { utcToLocal } from "./time";
import { isValidDate } from "./date";

const getEventDateTimeData = (start, end) => {
  if (
    !isValidDate(start) ||
    !isValidDate(end) ||
    start.getTime() === end.getTime()
  )
    return {
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      meetingTime: "",
      day: "",
      month: "",
    };

  const startDate = utcToLocal(start);
  const endDate = utcToLocal(end);
  const day = format(new Date(startDate), "d");
  const month = format(new Date(startDate), "MMMM");
  const startTime = format(new Date(startDate), "hh:mm aa");
  const endTime = format(new Date(endDate), "hh:mm aa");
  const meetingTime = formatDistance(new Date(startDate), new Date(endDate));
  return { startDate, endDate, startTime, endTime, meetingTime, day, month };
};

export default getEventDateTimeData;
