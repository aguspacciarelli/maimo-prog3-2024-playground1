export const averageSongsYears = (songs) =>
  songs.reduce((acc, curr) => acc + curr.year, 0) / songs.length;

export const filterFunction = (array, callback) => array.filter(callback);
