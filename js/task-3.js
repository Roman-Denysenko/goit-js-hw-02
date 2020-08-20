// Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром
// произвольную строку(в строке будут только слова и пробелы) и возвращает самое
// длинное слово в этой строке.

function findLongestWord(string = "") {
  const array = string.split(" ");
  let result = "";

  for (let word of array) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
