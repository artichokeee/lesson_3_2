#Установка, настройка, запуск и тестирование проекта

Выполните следующие шаги для начала работы с проектом:

1. Клонировать репозиторий с помощью команды `git clone https://github.com/artichokeee/lesson_3_2.git`
2. Установить jest с помощью команды ```npm install --save-dev jest```
3. Запустить тесты, используя команду `npx jest`

#Измерение тестового покрытия

- Тестовое покрытие на проекте измеряется c помощью пакета, который можно установить командой `npm install --save-dev babel-plugin-istanbul`

- Запустить измерение покрытия командой `npx jest --coverage`

- На проекте измеряетя покрытие строк, ветвей, функций и операторов