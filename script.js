function sayHello(){
  let myName = prompt('Как тебя зовут?');
  Let span = document.guerySelector('span');
  span.textContent = myName;
}

let button = document.guerySelector('button');
button.onclik(sayHello());