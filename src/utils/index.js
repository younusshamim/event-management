export const toTitleCase = (str) =>
  str.replace(
    /\w\S*/g,
    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  );

export const toSentenceCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
