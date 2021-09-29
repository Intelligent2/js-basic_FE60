describe("todo", function () {
  const todos = [
    {
      id: 0,
      title: "Learn javascript",
      description: "use learn.javascript",
      completed: false,
    },
    {
      id: 1,
      title: "Buy tea",
      description: "black tea",
      completed: false,
    },
  ];

  it(`todo.getTodo возвращает корректное задание`, function () {
    todo.list = todos;

    assert.deepEqual(todo.getTodo(0), {
      id: 0,
      title: "Learn javascript",
      description: "use learn.javascript",
      completed: false,
    });
    assert.deepEqual(todo.getTodo(1), {
      id: 1,
      title: "Buy tea",
      description: "black tea",
      completed: false,
    });
  });

  it(`todo.createTodo создаёт корректно задание`, function () {
    todo.list = [];

    todo.createTodo("Learn javascript", "use learn.javascript");
    const { id, title, description, completed } =
      todo.list[todo.list.length - 1];

    assert.deepEqual(typeof id, "number");
    assert.deepEqual(title, "Learn javascript");
    assert.deepEqual(description, "use learn.javascript");
    assert.deepEqual(completed, false);

    todo.createTodo("Buy tea");
    const {
      id: _id,
      title: _title,
      description: _description,
      completed: _completed,
    } = todo.list[todo.list.length - 1];

    assert.deepEqual(typeof _id, "number");
    assert.deepEqual(_title, "Buy tea");
    assert.deepEqual(_description, null);
    assert.deepEqual(_completed, false);
  });

  it(`todo.updateTodo редактирует выбранное по id задание`, function () {
    todo.list = [
      {
        id: 0,
        title: "Learn javascript",
        description: "use learn.javascript",
        completed: false,
      },
      {
        id: 1,
        title: "Buy tea",
        description: "black tea",
        completed: false,
      },
    ];

    todo.updateTodo(0, { completed: true });

    assert.deepEqual(todo.getTodo(0), {
      id: 0,
      title: "Learn javascript",
      description: "use learn.javascript",
      completed: true,
    });

    todo.updateTodo(1, { description: "red tea" });

    assert.deepEqual(todo.getTodo(1), {
      id: 1,
      title: "Buy tea",
      description: "red tea",
      completed: false,
    });
  });

  it(`todo.deleteTodo корректно удаляет задание по id`, function () {
    todo.list = [
      {
        id: 0,
        title: "Learn javascript",
        description: "use learn.javascript",
        completed: false,
      },
      {
        id: 1,
        title: "Buy tea",
        description: "black tea",
        completed: false,
      },
    ];

    todo.deleteTodo(0);
    assert.deepEqual(todo.list, [
      {
        id: 1,
        title: "Buy tea",
        description: "black tea",
        completed: false,
      },
    ]);

    todo.deleteTodo(1);
    assert.deepEqual(todo.list, []);
  });
});
