## GIT
Git это система контроля версий, хранилище истории разработки.

1. Начало работы ```git config / git init / git clone```

```git
    git config user.name
    Команда вернёт name пользователя

    git config user.email
    Команда вернёт email пользователя

    git config user.name "some name"
    Команда установит name пользователя

    git config user.email "email@email.email"
    Команда установит email пользователя
 ```
 ```git
    git init
  ```

При выполнении команды ```git init``` в текущем рабочем каталоге создается подкаталог .git со всеми необходимыми метаданными Git для нового репозитория. Метаданные включают подкаталоги для объектов, ссылок и файлов шаблонов. Кроме того, создается файл HEAD, который указывает на текущий извлеченный коммит.

```git
    git clone
 ```

На самом деле ```git clone``` работает как обёртка над некоторыми другими командами. Она создаёт новый каталог, переходит внутрь и выполняет ```git init``` для создания пустого репозитория, затем она добавляет новый удалённый репозиторий ```git remote add``` для указанного URL (по умолчанию он получит имя origin), выполняет ```git fetch``` для этого репозитория и, наконец, извлекает последний коммит в ваш рабочий каталог, используя ```git checkout```.

***

2. Сохранение изменений ```git status / git add / git commit```

```git
    git status
    Команда для определения, какие файлы в каком состоянии находятся
 ```

```git
    git add <file>
    Проиндексировать все изменения в файле <file> для следующего коммита.

    git add <directory>
    Проиндексировать все изменения в каталоге <directory> для следующего коммита

    git add . / git add -A
    Проиндексировать все изменения в проекте
 ```

 ```git
    git commit -m "commit message"
    Команда создает коммит с указанным комментарием

    git commit --amend -m "an updated commit message"
    Отредактировать комментарий к предыдущему коммиту без изменения состояния кода.
  ```

***

3. Создание/Использование веток ```git branch / git checkout / git merge```

```git
    git branch --list
    Команда для получение списка всех веток в репозитории

    git branch <branch-name>
    Команда для создания ветки с именем branch-name

    git branch -d <branch-name>
    Команда удалит ветку branch-name если в ней нет не слитых изменений

    git branch -D <branch-name>
    Команда удалит ветку branch-name даже если в ней есть не слитые изменения

    git branch -m <new-branch-name>
    Команда переименует ветку
 ```

```git
    git merge <branch-name>

        Наша задача слить ветку feature/XXX с master
    1. Создадим ветку feature/XXX и внесём изменения
    2. Перейти на master
    3. Слить master с feature/XXX
    4. Удалить ветку feature/XXX

    git checkout feature/XXX
    // вносим изменения (создаём файл)
    git add -A
    git commit -m "added new files"
    git checkout master
    git merge feature/XXX
    git branch -d feature/XXX

    git merge --no-ff <branch-name>
    Эта команда выполнит объединение указанной ветки с текущей с обязательным созданием коммита слияния.
 ```

```git
    git checkout <branch-name>
    Команда переключится на ветку с имененм branch-name

    git checkout -b <branch-name>
    Команда создаст ветку с именем branch-name и переключится на неё
 ```

***

4. Синхронизация в Git ```git pull / git push```

```git
    git pull origin
    Извлечь из удаленного репозитория копию текущей ветки и немедленно слить ее с локальной копией

    git pull --all
    Извлечь из удаленного репозитория все ветки
 ```

 ```git
    git push origin <branch-name>
    Публикация указанной ветки в удаленном репозитории вместе со всеми необходимыми коммитами и внутренними объектами

    git push origin --delete <branch-name>
    Удаление указанной ветки в удаленном репозитории
  ```

***

### Gitflow

![gitflow](./gitflow.png)

***

### Практика

1. Создать репозиторий
2. Создать в ```master``` файл ```script.js```
3. Запушить изменения в ```master```
4. От ```master``` создать ```branch <some-name>```
5. Внести любые изменения в файл ```script.js```
6. Запушить изменения в ```origin branch <some-name>```
7. От ```master``` создать ```branch <any-name>```
8. Внести любые изменения в файл ```script.js```
9. Запушить изменения в ```origin branch <any-name>```
10. Слить ```master``` с ```branch <some-name>```
11. Слить ```master``` с ```branch <any-name>```
12. Разрешить конфликты в файле ```script.js``` 
13. Запушить изменения в ```master```

***
### Самостоятельно

- [Git Book 1](https://git-scm.com/book/ru/v2)
- [Git Book 2](https://www.atlassian.com/ru/git/tutorials)
- [Gitflow](https://habr.com/ru/post/106912/)

```git
Ознакомиться с командами: 
git stash
git fetch
git rebase

Понимать различия между git pull и git fetch
Понимать различия между git rebase и git merge
 ```