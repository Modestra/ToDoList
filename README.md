
# <img src="src/favicon.ico" style = "width: 30px"> To-Do List 
**Сделайте то, что давно собирались сделать**
___
## Основные framework-и:

- **Angular** <img src="src/favicon.ico" style = "width: 15px">
- **Bootstrap** <img src="src/assets/bootstrap.png" style = "width: 15px">
___
<link href="./readme/readmestyle.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <div class="row" style="padding-left: 20px; padding-right: 20px">
            <div class="card-group" style="margin-top: 20px">
                <div class="card">
                    <header class="card-header main-container text-center"><h4>Список задач</h4></header>
                    <section class="card-body main-container-body h-100">
                      Здесь будут находиться задачи пользователя
                    </section>
                </div>
            </div>
        </div>

___

## Компоненты:
#### task-ul:
**Основной компонент для реализации списка дел. Включает в себя форму для записи задачи**

>**Компонент расположен в директории: _/src/app_**

  <ul class="list-group" id="task-list">
    <li class="list-group-item">
        <input id="create" type="text" class="form-control col" placeholder="Текст вводится сюда. По нажатию клавиши Enter создается сама форма задачи" (keydown.enter)="createTask({option : option.value})">
    </li>
  </ul>

#### task
**Форма задачи**

>**Компонент расположен в директории: _/src/app/task_**

<ul class="list-group" id="task-list" style="padding-left: 20px; padding-right: 20px">
<li class="list-group-item list-group-item-action">
  <div class="row">
    <div class="col-sm-1"><button type="button" class="btn btn-outline-warning"><img src="./src/assets/favourite.png"></button></div>
    <div class="col"><p class="task-text">Текст самой задачи. Здесь будет быть всё что угодно, кроме изображений</p></div>
    <div class="col-sm-1"><button type="button" class="btn btn-success"><img src="./src/assets/complete.png"></button></div>
    <div class="col-sm-1"><button type="button" class="btn btn-warning"><img src="./src/assets/process.png"></button></div>
  </div>
</li>
</ul>

###### **Элементы:** 

| Кнопка                                                                                                                             | Функция                                                                                      |
|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| <div class="col-sm-1"><button type="button" class="btn btn-outline-warning"><img src="./src/assets/favourite.png"></button></div>  | Избранные задачи                                                                             |
| <div class="col-sm-1"><button type="button" class="btn btn-success"><img src="./src/assets/complete.png"></button></div>           | Выполненная задача. Цвет карточни становится лаймовым. Реализован через функцию ToComplete() |
| <div class="col-sm-1"><button type="button" class="btn btn-warning"><img src="./src/assets/process.png"></button></div>            | "В процессе" Цвет карточки становится желтым. Реализован через функцию ToProcess()           |

___

#### Полезные ссылки для связи со мной:

- **Мой [GitLab](https://gitlab.com/petsites/sweetdreams) с основными проектами**
- **Мой [Telegram](https://t.me/Modestra)**
- **Мой сайт-портфолио (Пока ссылки нет потому что меняю хостинг) с ссылками на другие рабочие сайты-проекты**

