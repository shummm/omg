export const generateRandomElements = (countElements: number): number => {
  return countElements;
};
export const generateRandomNumber = (countDigit: number): number => {
  return Math.floor(
    Number(Math.random().toFixed(countDigit)) * Math.pow(10, countDigit)
  );
};

export const getRandomElement = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomNumberArray = (
  countElementArray: number,
  countDigit: number
): Array<number> => {
  const arr = [];
  let i = 0;
  while (i <= countElementArray) {
    arr.push(generateRandomNumber(countDigit));
    i++;
  }
  return arr;
};
