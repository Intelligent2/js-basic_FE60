#### Структура

```
js-basic
├── README.md
├── git-lesson
    └── README.md
└── lesson-X
    ├── classwork
        ├── index.html
        └── script.js
    ├── homework
        ├── index.html
        └── script.js
    └── README.md
```

#### Git flow

1. От `master` создаётся ветка `<studentLastName>`
2. Основная ветка разработки для студента `<studentLastName>`
3. Выполнение домашнего задания проходит в `<studentLastName>-lesson-<X>`
4. В комиты добавляем префикс по задаче `<studentLastName>-lesson-<X>: <message>`

Пример
```
    git branch
    должно показывать, что мы на ветке master

    git branch tarasov
    создаём ветку с вашей фамилией
    git checkout tarasov
    переходим на ветку tarasov
        или
    git checkout -b tarasov 
    создаём и переходим на ветку с вашей фамилией

    git branch  
    должно показывать, что мы на ветке tarasov

    git push origin tarasov
    публикуем ветку в удаленный репозиторий

    git checkout -b tarasov-lesson-1  
    создаём ветку где выполняем домашнее задание для lesson-1

    - что-то изменили в script.js
    git add .
    git commit -m "tarasov-lesson-1: added lesson-1 homework"
    git push origin tarasov-lesson-1

    - переходим на github, делаем pull request в ветку tarasov
    если есть замечания от преподавателя

        - исправляем замечания в script.js
        git add .
        git commit -m "tarasov-lesson-1: added changes after comments"
        git push origin tarasov-lesson-1

    нет замечаний
        на github в своём pull request нажимаем на кнопку Merge pull request
    
    git branch -D tarasov-lesson-1
    удаляем ветку tarasov-lesson-1 локально

    git push origin --delete tarasov-lesson-1
    удаляем ветку tarasov-lesson-1 удалённо
```

Перед каждым занятием не забываем подтянуть актуальный `master` в свою рабочую ветку
```
    git checkout master
    git pull origin master
    git checkout tarasov
    git merge master
        или
    git checkout tarasov
    git merge origin master

    git commit -m "merge master in tarasov" 
    git push origin tarasov 
```

#### Ресурсы
- [Javascript](https://learn.javascript.ru/)
- [Git](https://git-scm.com/book/ru/v2)