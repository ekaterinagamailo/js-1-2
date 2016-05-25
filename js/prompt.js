var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(prompt('Введите имя : ', ''));
}

var adminName = prompt('Введите имя пользователя : ', '');

var accept;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === adminName) {
        accept = 1;
        break;
    } else {
        accept = 0;
    }
}

if (accept === 1) {
    alert('Вы успешно вошли!');
} else {
    alert('Ошибка! Введено неверное имя!');
}
