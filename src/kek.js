import frenchkiss from "frenchkiss";

frenchkiss.set('en', { 
    how: 'How to play?', 
    rule: "You have to guess celebrated places and mark on the map by selecting the desired marker! However, you have only 3 chances and 20 seconds for each picture. Good luck!",
    start: 'Start!',
  
    attempt: 'Your attempts are over!',
    tryorselect: "Would you like to try again or select next level?",
    mainpage: 'Main page!',
    yestry: 'Yes, try again!',
  
    time: 'Time is up!',
    
  
    correct: "Correct!",
  
    error: "Oops...Try again",
  
    congrats: 'Congrats! You win!',
    next: "Would you like to go to the next level?",
    select: "Select"
    
  })
  frenchkiss.set('ru', { 
    how: 'Как играть?', 
    rule: 'Вы должны угадать знаменитые места и отметить их на карте, выбрав нужный маркер! Однако у вас есть только 3 шанса и 20 секунд на каждую картинку. Удачи!',
    start: 'Начать!',
  
    attempt: 'Ваши попытки закончились!',
    tryorselect: "Вы бы хотели попробовать еще раз или выбрать следующий уровень?",
    mainpage: 'На главную странцу!',
    yestry: 'Да, сыграть еще раз!',
  
    time: 'Время вышло!',
  
    correct: "Правильно!",
  
    error: "Упс...Попробуйте еще раз",
  
    congrats: 'Поздравляем! Вы выиграли!',
    next: "Хотели бы вы перейти на следующий уровень?",
    select: "Выбрать"
   
  })
  frenchkiss.set('kz', { 
    how: 'Қалай ойнау керек?',  
    rule: 'Сіз атаулы жерлерді тауып, қажетті маркерді таңдау арқылы картада белгілеуіңіз керек! Дегенмен, сізде әр сурет үшін небәрі 3 мүмкіндік пен 20 секунд бар. Іске сәт!',
    start: 'Бастау!',
  
    attempt: 'Сіздің мүмкіндіктерініз бітті!',
    tryorselect: "Басынан ойнап көргініз келе ме, әлде келесі деңгейді таңдағыныз келе ме?",
    mainpage: 'Басты бетке бару!',
    yestry: 'Ия, басынан ойнау!',
  
    time: 'Уақыт аяқталды!',
  
    correct: "Дұрыс!",
  
    error: "Ой... Басынан көрініз",
  
    congrats: 'Құттықтаймыз! Сіз жеңдініз!',
    next: "Келесі деңгейге өткініз келе ме?",
    select: "Таңдау"
  
  })
  frenchkiss.fallback('en');
  export const internalFrenchkiss = frenchkiss;
  