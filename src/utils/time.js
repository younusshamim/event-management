export const utcToLocal = (utcDateStr) => {
  const utcDate = new Date(utcDateStr);
  const localDateStr = utcDate.toLocaleString();
  return localDateStr;
};
