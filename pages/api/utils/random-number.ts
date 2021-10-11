const randomNumber = (numberOfDigits: number): number =>
  Math.floor(Math.random() * Math.pow(10, numberOfDigits));

export default randomNumber