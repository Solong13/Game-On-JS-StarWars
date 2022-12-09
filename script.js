/*
1. Выбрать поле для игры
2. Заполнить игровое поле карточками(тегами li)
3. Сделать клик по карточкам
4. Сделать переворачивание карточек 
    4.1 Размещаем картинки для каждой карточки
    4.2 Показываем картинку 
5. Если выбрано две картиник - проверяем на совпадение
    5.1 Если картинки совпадают, то удаляем их
    5.2 Перевернуть выбранные карточки
6. Если все карточки удалены, вывести окно с перезапуском игры
7. При клике  на кнопку перезагрузить обноляем страничку

прописать уровни 26 пар 56 карточек. Удалилось 8 карт при клике на рестарт добавляется 10 11 12 13. 
Можно добавить таймер чтобы за 60 сек пройти игру. Сделать чтобы картинки подбирались рандомно . 
1 увеличить карточки и разная последовательность карток 
*/

// доруск к элементу через документ(объект) методу(функция) querySelector  
 var cardsField = document.querySelector("#cards");
 var resetBlock = document.querySelector("#reset");
 var resetBtn = document.querySelector("#reset-btn");

 var countCards = 16;

 var images = [
     1,2,3,4,
     5,6,7,8,
     1,2,3,4,
     5,6,7,8
 ];

 var deletedCards = 0;

 var selected = [];

 var pause = false;

// цикл фор для вывода от 1 до 16 li в div
 for(var i = 0; i < countCards; i = i + 1) {
     var li = document.createElement("li"); // создаем элемент
     li.id = i; //присваиваем id чтобы в li  вывести наши элементы 
     cardsField.appendChild(li)  // метод для того чобы вставить создынй элемент
 } 

 cardsField.onclick = function (event) {  //event - событие которое произошло
     if(pause == false) {
      var element = event.target; // кликаємо по вибраній цілі

         if (element.tagName == "LI" && element.className != "active") {
             selected.push(element); // метод push который вствляет элемент в конец
             element.className = "active"; // для того, чтобы выбраный элемент был активным 
             var img = images[element.id]; // локальная переменная, где мы получаем элемент и его id (номер элемента)
             element.style.backgroundImage = "url(images/" + img + ".png)"; // после  цикла for который считает количество 16 подставляются по id наши картинки когда наше  if  true
             if(selected.length == 2) { // если выбрано 2 элементы
                
                 pause = true;

                 if(images[selected[0].id] == images[selected[1].id]) {
                     selected[0].style.visibility = "hidden"; //скрываем элемент массива
                     selected[1].style.visibility = "hidden";
                     deletedCards = deletedCards + 2;
                 }
                
                 setTimeout(refresCards, 600); //вызываем функцию refresCards в функции setTimeout для замедления первой
             }
        }
    
     }
   
 }

 function refresCards() {
     for(var i = 0; i < countCards; i = i + 1) {
         cardsField.children[i].className = ""; // для очистки картки по индексу масива
         cardsField.children[i].style.backgroundImage = 'url("images/back.png")';// для переворота, по умолчанию картинка
     }
     if(deletedCards == countCards) {
         resetBlock.style.display = "block"; // для отображения блока
     }
     selected = [];// снова стает пустой массив
     pause = false;
 }

 resetBtn.onclick = function() {
    location.reload();
 }