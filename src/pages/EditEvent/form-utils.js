import { utcToLocal } from "../../utils/time";

const getDefaultValues = (eventData) => {
  if (!eventData) return undefined;

  const { _id, ...rest } = eventData;
  return {
    ...rest,
    start: utcToLocal(eventData.start),
    end: utcToLocal(eventData.end),
  };
};
export default getDefaultValues;
