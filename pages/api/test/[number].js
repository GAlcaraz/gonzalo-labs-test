export default function handler(req, res) {
  const {
    query: { number },
  } = req;

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

  const integerToWords = (n) => {
    if (n == 0) return "Zero"; // check for zero
    n = "0".repeat((2 * n.length) % 3) + n; // complete digits until length is divisible by 3
    n = chunkString(n, 3); // separate number string into chunks of 3 digits

    if (n.length > Scale.length) return "Too Large"; // check if larger than scale array
    let out = "";
    return (
      n.forEach((triplet, pos) => {
        // loop into array for each triplet
        if (+triplet) {
          out +=
            " " +
            (+triplet[0] ? Ones[+triplet[0]] + " " + Tens[10] : "") + // add hundreds if necessary
            " " +
            (+triplet.substr(1) < 20 // check if last 2 digits form an n-teenth
              ? Ones[+triplet.substr(1)]
              : // if not, select corresponding tens + ones
                Tens[+triplet[1]] +
                (+triplet[2] ? "-" : "") +
                Ones[+triplet[2]]) +
            " " +
            Scale[n.length - pos - 1]; // add corresponding scale to triplet
        }
      }),
      out.replace(/\s+/g, " ").trim() // tidy up whitespaces
    );
  };

  res.status(200).json({ number: integerToWords(number) });
}
