import { format, formatDistance } from "date-fns";
import { utcToLocal } from "./time";

const getEventDateTimeData = (start, end) => {
  try {
    const startDate = utcToLocal(start);
    const endDate = utcToLocal(end);
    const day = format(new Date(startDate), "d");
    const month = format(new Date(startDate), "MMMM");
    const startTime = format(new Date(startDate), "hh:mm a");
    const endTime = format(new Date(endDate), "hh:mm a");
    const meetingTime = formatDistance(new Date(startDate), new Date(endDate), {
      addSuffix: true,
    });
    return { startDate, endDate, startTime, endTime, meetingTime, day, month };
  } catch (error) {
    console.error("Error in getEventDateTimeData:", error);
    return {
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      meetingTime: "",
      day: "",
      month: "",
    };
  }
};

export default getEventDateTimeData;
