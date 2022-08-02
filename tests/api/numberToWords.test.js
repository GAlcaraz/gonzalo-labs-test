import convert, { integerToWords } from "pages/api/convert.js";

test("should convert numbers correctly", () => {
  expect(integerToWords(0)).toEqual("Zero");
  expect(integerToWords(5)).toEqual("Five");
  expect(integerToWords(0)).toEqual("Zero");
  expect(integerToWords(5)).toEqual("Five");
  expect(integerToWords(10)).toEqual("Ten");
  expect(integerToWords(19)).toEqual("Nineteen");
  expect(integerToWords(33)).toEqual("Thirty-Three");
  expect(integerToWords(100)).toEqual("One Hundred");
  expect(integerToWords(111)).toEqual("One Hundred Eleven");
  expect(integerToWords(890)).toEqual("Eight Hundred Ninety");
  expect(integerToWords(1234)).toEqual("One Thousand Two Hundred Thirty-Four");
  expect(integerToWords(12345)).toEqual(
    "Twelve Thousand Three Hundred Forty-Five"
  );
  expect(integerToWords(123456)).toEqual(
    "One Hundred Twenty-Three Thousand Four Hundred Fifty-Six"
  );
  expect(integerToWords(1234567)).toEqual(
    "One Million Two Hundred Thirty-Four Thousand Five Hundred Sixty-Seven"
  );
  expect(integerToWords(12345678)).toEqual(
    "Twelve Million Three Hundred Forty-Five Thousand Six Hundred Seventy-Eight"
  );
  expect(integerToWords(123456789)).toEqual(
    "One Hundred Twenty-Three Million Four Hundred Fifty-Six Thousand Seven Hundred Eighty-Nine"
  );
  expect(integerToWords(1234567890)).toEqual(
    "One Billion Two Hundred Thirty-Four Million Five Hundred Sixty-Seven Thousand Eight Hundred Ninety"
  );
  expect(integerToWords(1001)).toEqual("One Thousand One");
  expect(integerToWords(10001)).toEqual("Ten Thousand One");
  expect(integerToWords(100001)).toEqual("One Hundred Thousand One");
  expect(integerToWords(1000001)).toEqual("One Million One");
  expect(integerToWords(10000001)).toEqual("Ten Million One");
  expect(integerToWords(100000001)).toEqual("One Hundred Million One");
  expect(integerToWords(12012)).toEqual("Twelve Thousand Twelve");
  expect(integerToWords(120012)).toEqual("One Hundred Twenty Thousand Twelve");
  expect(integerToWords(1200012)).toEqual(
    "One Million Two Hundred Thousand Twelve"
  );
  expect(integerToWords(12000012)).toEqual("Twelve Million Twelve");
  expect(integerToWords(120000012)).toEqual(
    "One Hundred Twenty Million Twelve"
  );
  expect(integerToWords(75075)).toEqual("Seventy-Five Thousand Seventy-Five");
  expect(integerToWords(750075)).toEqual(
    "Seven Hundred Fifty Thousand Seventy-Five"
  );
  expect(integerToWords(7500075)).toEqual(
    "Seven Million Five Hundred Thousand Seventy-Five"
  );
  expect(integerToWords(75000075)).toEqual("Seventy-Five Million Seventy-Five");
  expect(integerToWords(750000075)).toEqual(
    "Seven Hundred Fifty Million Seventy-Five"
  );
  expect(integerToWords(1000)).toEqual("One Thousand");
  expect(integerToWords(1000000)).toEqual("One Million");
  expect(integerToWords(1000000000)).toEqual("One Billion");
  expect(integerToWords(1000000000000)).toEqual("One Trillion");
  expect(integerToWords(1000000000000000)).toEqual("One Quadrillion");
  expect(integerToWords(1000000000000000000)).toEqual("One Quintillion");
  expect(integerToWords(1000000100100100100)).toEqual(
    "One Quintillion One Hundred Billion One Hundred Million One Hundred Thousand One Hundred"
  );
});

test("response returns function result correctly", () => {
  const req = {
    query: { number: 99999 },
  };

  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json,
    };
  });

  const res = {
    status,
  };

  convert(req, res);

  expect(json.mock.calls[0][0].number).toEqual(
    "Ninety-Nine Thousand Nine Hundred Ninety-Nine"
  );
});

test("not a number returns 'Not a number'", () => {
  const req = {
    query: { number: "letters" },
  };

  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json,
    };
  });

  const res = {
    status,
  };

  convert(req, res);
  expect(json.mock.calls[0][0].number).toEqual("Not a number");
});

test("negative numbers return empty string ", () => {
  const req = {
    query: { number: -5 },
  };

  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json,
    };
  });

  const res = {
    status,
  };

  convert(req, res);
  expect(json.mock.calls[0][0].number).toEqual("Negative Number");
});
