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

export const integerToWords = (n) => {
  if (n < 0) return "Negative Number";
  n = n.toString();
  if (n == 0) return "Zero"; // check for zero
  n = "0".repeat((2 * n.length) % 3) + n; // complete digits until length is divisible by 3
  const triplets = chunkString(n, 3); // separate number string into chunks of 3 digits (triplets)

  if (triplets.length > Scale.length) return "Too Large"; // check if larger than scale array
  let out = [];

  return (
    triplets.forEach((triplet, pos) => {
      // loop into array for each triplet
      if (+triplet) {
        const scaleWord = Scale[triplets.length - pos - 1];
        const tensAndOnes = +triplet.substr(1);
        const hundredsDigit = +triplet[0];
        const tensDigit = +triplet[1];
        const onesDigit = +triplet[2];

        if (hundredsDigit) {
          const hundredsWords = Ones[hundredsDigit] + SEPARATOR_CHAR + Tens[10]; // Tens[10] = 'Hundred'

          out.push(hundredsWords);
        }

        // if tensAndOnes are an n-teenth, look for words in the Ones word array
        if (tensAndOnes && tensAndOnes < 20) {
          out.push(Ones[tensAndOnes]);
          // if not, select corresponding words from Tens array and Ones array
          // skip if tensAndOnes is zero
        } else if (tensAndOnes) {
          const tensAndOnesWords =
            Tens[tensDigit] +
            (onesDigit ? TENS_SEPARATOR_CHAR + Ones[onesDigit] : NONE_CHAR);

          out.push(tensAndOnesWords);
        }

        // add scale if applicable
        if (scaleWord) {
          out.push(scaleWord);
        }
      }
    }),
    out.join(" ") // join word array with spaces
  );
};

export default function handler(req, res) {
  const { number } = req.query;

  res.status(200).json({ number: integerToWords(number) });
}
