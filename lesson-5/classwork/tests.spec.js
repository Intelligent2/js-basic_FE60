describe("isAnagram", function () {
  const words1 = [
    ["xyz", "XZy"],
    ["teachers", "cheaters"],
    ["asd", "DSA"],
  ];

  words1.forEach(([word1, word2]) => {
    it(`слово ${word1} и слово ${word2} являются анагрмамами`, function () {
      assert.isTrue(isAnagram(word1, word2));
    });
  });

  const words2 = [
    ["cxz", "vcx"],
    ["teset", "seter"],
    ["asd", "DSAd"],
  ];

  words2.forEach(([word1, word2]) => {
    it(`слово ${word1} и слово ${word2} не являются анагрмамами`, function () {
      assert.isNotTrue(isAnagram(word1, word2));
    });
  });
});

describe("compact", function () {
  const params = [
    [
      [1, 0, 2, null, undefined],
      [1, 2],
    ],
    [[null, undefined, 0, "", false], []],
    [
      [1, 9, 3, "string", true, [], 99],
      [1, 9, 3, "string", true, [], 99],
    ],
  ];

  params.forEach(([input, output]) => {
    it(`compact([${input}]) должен возвращать [${output}]`, function () {
      assert.deepEqual(compact(input), output);
    });
  });
});

describe("fromStringToObj", function () {
  const params = [
    [
      "a.b.c.d.e.f.g.h.i",
      { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } },
    ],
    [
      "aaaa.bbbb.cccc.dddd.eeee.ffff.gggg.hhhh.iiii",
      {
        aaaa: {
          bbbb: {
            cccc: {
              dddd: { eeee: { ffff: { gggg: { hhhh: { iiii: {} } } } } },
            },
          },
        },
      },
    ],
  ];

  params.forEach(([word, obj]) => {
    it(`fromStringToObj работает корректно с параметрам ${word}`, function () {
      assert.deepEqual(fromStringToObj(word), obj);
    });
  });
});

describe("users.findById", function () {
  const ids = [
    [0, { id: 0, name: "Vlad" }],
    [1, { id: 1, name: "Vova" }],
    [2, { id: 2, name: "Victor" }],
    [3, { id: 3, name: "Kate" }],
    [4, undefined],
  ];

  ids.forEach(([id, res]) => {
    it(`по user.id:${id} ${res ? "есть" : "нету"}`, function () {
      users.list = [
        { id: 0, name: "Vlad" },
        { id: 1, name: "Vova" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Kate" },
      ];

      assert.deepEqual(users.findById(id), res);
    });
  });
});

describe("users.findByName", function () {
  const names = [
    ["Vlad", { id: 0, name: "Vlad" }],
    ["VLAD", { id: 0, name: "Vlad" }],
    ["Vova", { id: 1, name: "Vova" }],
    ["VOVA", { id: 1, name: "Vova" }],
    ["Victor", { id: 2, name: "Victor" }],
    ["VICTOR", { id: 2, name: "Victor" }],
    ["Kate", { id: 3, name: "Kate" }],
    ["KATE", { id: 3, name: "Kate" }],
    ["David", undefined],
  ];

  names.forEach(([name, res]) => {
    it(`по user.name: ${name} ${res ? "есть" : "нету"}`, function () {
      users.list = [
        { id: 0, name: "Vlad" },
        { id: 1, name: "Vova" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Kate" },
      ];

      assert.deepEqual(users.findByName(name), res);
    });
  });
});

describe("users.filterById", function () {
  it(`после удаления по user.id: 999 должно остаться 4 пользователей`, function () {
    users.list = [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ];

    users.filterById(999);
    assert.deepEqual(users.list, [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ]);
  });

  it(`после удаления по user.id: 0 должно остаться 3 пользователей`, function () {
    users.filterById(0);
    assert.deepEqual(users.list, [
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ]);
  });

  it(`после удаления по user.id: 1 должно остаться 2 пользователей`, function () {
    users.filterById(1);
    assert.deepEqual(users.list, [
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ]);
  });

  it(`после удаления по user.id: 2 должно остаться 1 пользователей`, function () {
    users.filterById(2);
    assert.deepEqual(users.list, [{ id: 3, name: "Kate" }]);
  });

  it(`после удаления по user.id: 3 должно остаться 0 пользователей`, function () {
    users.filterById(3);
    assert.deepEqual(users.list, []);
  });

  it(`после удаления по user.id: 4 должно остаться 0 пользователей`, function () {
    users.filterById(4);
    assert.deepEqual(users.list, []);
  });
});

describe("users.filterByName", function () {
  it(`после удаления по user.name: david должно остаться 4 пользователей`, function () {
    users.list = [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ];

    users.filterByName("david");
    assert.deepEqual(users.list, [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ]);
  });

  it(`после удаления по user.name: VLAD должно остаться 3 пользователей`, function () {
    users.filterByName("VLAD");
    assert.deepEqual(users.list, [
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ]);
  });

  it(`после удаления по user.name: VoVa должно остаться 2 пользователей`, function () {
    users.filterByName("VoVa");
    assert.deepEqual(users.list, [
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ]);
  });

  it(`после удаления по user.name: VIcTor должно остаться 1 пользователей`, function () {
    users.filterByName("VIcTor");
    assert.deepEqual(users.list, [{ id: 3, name: "Kate" }]);
  });

  it(`после удаления по user.name: KatE должно остаться 0 пользователей`, function () {
    users.filterByName("KatE");
    assert.deepEqual(users.list, []);
  });

  it(`после удаления по user.id: 'KatEKatEKatEKatE' должно остаться 0 пользователей`, function () {
    users.filterByName("KatEKatEKatEKatE");
    assert.deepEqual(users.list, []);
  });
});

describe("users.getAllNames", function () {
  it(`должен вернуть все name`, function () {
    users.list = [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ];

    assert.deepEqual(users.getAllNames(), ["Vlad", "Vova", "Victor", "Kate"]);
  });
});

describe("users.getAllIds", function () {
  it(`должен вернуть все id`, function () {
    users.list = [
      { id: 0, name: "Vlad" },
      { id: 1, name: "Vova" },
      { id: 2, name: "Victor" },
      { id: 3, name: "Kate" },
    ];

    assert.deepEqual(users.getAllIds(), [0, 1, 2, 3]);
  });
});
