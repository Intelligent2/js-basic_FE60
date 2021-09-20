describe("getBiggest", function () {
  const nums = [
    [[99, 11, 22, 333, 44, 55, 66, 1], 333],
    [[22, 112, 12, 1, 44, 23, 12, 321, 512, 123, 12343, 32, 54], 12343],
    [[66, 1643], 1643],
  ];

  nums.forEach(([nums, res]) => {
    it(`из переданных параметров ${nums.join(
      ","
    )} cамое большое должно быть ${res}`, function () {
      assert.strictEqual(getBiggest(...nums), res);
    });
  });
});

describe("duplicate", function () {
  const nums = [
    [
      [1, 2, 3, 4],
      [1, 2, 3, 4, 1, 2, 3, 4],
    ],
    [
      [10, 20, 30],
      [10, 20, 30, 10, 20, 30],
    ],
    [
      [0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ],
  ];

  nums.forEach(([nums, res]) => {
    it(`из массива [${nums}] должны получить [${res}]`, function () {
      assert.deepEqual(duplicate(nums), res);
    });
  });
});

describe("isPalindrome", function () {
  const palindromes = ["шалаш", "доход", "дед", "довод", "радар"];

  palindromes.forEach((palindrome) => {
    it(`слово ${palindrome} - палиндром`, function () {
      assert.isTrue(isPalindrome(palindrome));
    });
  });

  const notPalindromes = ["машина", "javascript", "react"];

  notPalindromes.forEach((notPalindrome) => {
    it(`слово ${notPalindrome} - не палиндром`, function () {
      assert.isFalse(isPalindrome(notPalindrome));
    });
  });
});

describe("replacer", function () {
  const arrays = [
    [
      [1, 2, 10, 20, 100],
      [1, 2, "1zero", "2zero", "1zerozero"],
    ],
    [
      [999, 10, 303, 100],
      [999, "1zero", "3zero3", "1zerozero"],
    ],
    [
      [20000, 30303, 0],
      ["2zerozerozerozero", "3zero3zero3", "zero"],
    ],
  ];

  arrays.forEach(([input, output]) => {
    it(`из массива [${input}] должен получиться массив [${output}]`, function () {
      assert.deepEqual(replacer(input), output);
    });
  });
});
