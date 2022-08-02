//==================================
function chunkString(str, len) {
  const chunkSize = Math.ceil(str.length / len);
  const arr = Array(chunkSize);
  let offset = 0;

  for (let i = 0; i < chunkSize; i++) {
    arr[i] = str.substr(offset, len);
    offset += len;
  }

  return arr;
}

const Ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ],
  Tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
    "Hundred",
  ],
  Scale = [
    "",
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
  ];

const SEPARATOR_CHAR = " ";
const NONE_CHAR = "";
const TENS_SEPARATOR_CHAR = "-";

const getHundreds = (triplet) => {
  const hundredsDigit = +triplet[0];
  const tensAndOnes = +triplet.substr(1);

  return hundredsDigit
    ? Ones[hundredsDigit] +
        SEPARATOR_CHAR +
        Tens[10] +
        (tensAndOnes ? SEPARATOR_CHAR : NONE_CHAR)
    : NONE_CHAR;
};

const getTensAndOnes = (triplet) => {
  const tensAndOnes = +triplet.substr(1);
  const tensDigit = +triplet[1];
  const onesDigit = +triplet[2];

  return tensAndOnes < 20 // check if last 2 digits form an n-teenth
    ? Ones[tensAndOnes]
    : // if not, select corresponding tens + ones
      Tens[tensDigit] +
        (onesDigit ? TENS_SEPARATOR_CHAR : NONE_CHAR) +
        Ones[onesDigit];
};

export const integerToWords = (n) => {
  if (n < 0) return "Negative Number";
  n = n.toString();
  if (n == 0) return "Zero"; // check for zero
  n = "0".repeat((2 * n.length) % 3) + n; // complete digits until length is divisible by 3
  n = chunkString(n, 3); // separate number string into chunks of 3 digits

  if (n.length > Scale.length) return "Too Large"; // check if larger than scale array
  let out = [];

  return (
    n.forEach((triplet, pos) => {
      // loop into array for each triplet
      const scaleWord = Scale[n.length - pos - 1];

      if (+triplet) {
        out.push(
          getHundreds(triplet) +
            getTensAndOnes(triplet) +
            (scaleWord !== NONE_CHAR ? SEPARATOR_CHAR + scaleWord : NONE_CHAR) // add corresponding scale to triplet
        );
      }
    }),
    out.join(" ") // join triplets
  );
};

export default function handler(req, res) {
  const { number } = req.query;

  res.status(200).json({ number: integerToWords(number) });
}
