/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

*/

// 1. Import songs array using modules.

import songs from "./songs.js";
console.log("Ej. 1:", songs);

// 2. Use the map function to create a new array with the title of each song in uppercase letters.

const songsTitlesUppercase = songs.map((song) => song.title.toUpperCase());
console.log("Ej. 2:", songsTitlesUppercase);

// 3. Use the filter function to create a new array with all the songs released before 1975.

const olderSongs = songs.filter((song) => song.year < 1975);
console.log("Ej. 3:", olderSongs);

// 4. Use destructuring to create a variable that stores the title of the first song in the array.

const [{ title: firstSongTitle }] = songs;
console.log("Ej. 4:", firstSongTitle);

// 5. Use the find function to get the object representing the song "Hotel California".

const hotelCalifornia = songs.find((song) => song.title === "Hotel California");
console.log("Ej. 5:", hotelCalifornia);

// 6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

const numbersSum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Ej. 6:", numbersSum(1, 2, 3, 4));

// 7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

const allSongsTemplate = songs.map(
  (song) => ` ${song.title} - ${song.artist} (${song.year}) `
);
console.log("Ej. 7:", allSongsTemplate);

// 8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

const theBeatlesSongs = songs
  .filter(({ artist }) => artist === "The Beatles")
  .map(({ title }) => title);
console.log("Ej. 8:", theBeatlesSongs);

// 9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

const totalYears = songs.reduce((acc, curr) => acc + curr.year, 0);
console.log("Ej. 9:", totalYears);

// 10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

import { averageSongsYears } from "./utils.js";
const avrgSongsYears = averageSongsYears(songs);
console.log("Ej. 10:", avrgSongsYears);

// 11. Use the find function to get the object representing the song with the longest title.

const longestTitle = songs.find(
  (song) =>
    song.title.length === Math.max(...songs.map(({ title }) => title.length))
);
console.log("Ej. 11:", longestTitle);

// 12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

const { title, artist, year } = songs[0];
console.log("Ej. 12:", `${title} by ${artist} (${year})`);

// 13. Use the rest operator to create a new array without the first element.

const [, ...restOfTheSongs] = songs;
console.log("Ej. 13:", restOfTheSongs);

// 14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

import { filterFunction } from "./utils.js";
const loveSongs = filterFunction(songs, ({ title }) => title.includes("Love"));
console.log("Ej. 14:", loveSongs);

// 15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

const allLongTitles = songs.every(({ title }) => title.length >= 5);
console.log("Ej. 15:", allLongTitles);

// 16. Use the some() method to check if there are any songs from the 80s.

const eightiesSongs = songs.some(({ year }) => 1980 <= year < 1990);
console.log("Ej. 16:", eightiesSongs);

// 17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

const letItBe = songs.find(({ title }) => title === "Let It Be");
const releaseString = `${letItBe.artist} released ${letItBe.title} in ${letItBe.year}`;
console.log("Ej. 17:", releaseString);

// 18. Use the map() method to create a new array with just the artist names.

const allArtistsName = songs.map((song) => song.artist);
// Tambien podia ser: const allArtistsName = songs.map(({artist}) => artist)
console.log("Ej. 18:", allArtistsName);

// 19. Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

const randomSong = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log("Ej. 19:", randomSong(songs));
console.log(randomSong(songs));
console.log(randomSong(songs));

// 20. Write your own functions using at least 3 concepts.

// Obtener la cancion mas nueva y la mas vieja y mostrar cuantos años de diferencia hay entre ellas

const newestSong = songs.find(
  (song) => song.year === Math.max(...songs.map(({ year }) => year))
);
const oldestSong = songs.find(
  (song) => song.year === Math.min(...songs.map(({ year }) => year))
);
console.log(
  "Ej. 20:",
  `${newestSong.title} is the newest song in the array (${newestSong.year})
${oldestSong.title} is the oldest song in the array (${oldestSong.year})
They are ${newestSong.year - oldestSong.year} years apart`
);
