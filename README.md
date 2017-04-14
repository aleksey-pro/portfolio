# Учебная сборка Loftschool

> Сборка работает на gulp версии 4.0. 

#### Для начала работы

1. ```clone this repo```
2. ```cd path/to/...```
3. ```npm install gulpjs/gulp-cli -g```  
> Установка последней версии Gulp CLI tools глобально (подробнее - [GitHub](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) )

4. ```npm install```
6. ```run gulp```


Исаев Алексей Витальевич

- создан таск copy:fonts, копирующий шрифты в папку со сборкой
- создан таск sprites, создающий спрайт из картинок .png из папки sprite. Далее спрайт попадает в паку со сборкой.
- в таске sprites файлы .png попадают в папку build/img, а файлы .css  - в папку source/style/common. Для этого дополнительно подключен плагин merge-stream