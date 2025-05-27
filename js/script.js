// ボタンをクリックしたらテキストを変更する
const button = document.getElementById('button');
button.addEventListener('click', function(){
    // this.innerHTML = 'クリックありがとう！';
    this.innerHTML ='クリック済み';
    this.setAttribute('disable', true);
});

// ボタンをクリックしたらリスト要素を増やす　／　削除する
const buttonAdd = document.getElementById('button-add');
const buttonClear = document.getElementById('button-clear');
const list = document.getElementById('list');

buttonAdd.addEventListener('click', function(){
    const element = document.createElement('li');
    element.innerHTML = 'リスト';
    list.appendChild(element);
});

buttonClear.addEventListener('click', function(){
    list.removeChild(list.lastChild);
    while(list.Child){
        list.removeChild(list.lastChild);
    }
});

// 要素を取得
document.querySelector();
document.querySelectorAll();

document.querySelector('.color .button-blue');
document.querySelector('.color .button:last-of-type');
document.querySelector('.button');

document.getElementById
document.getElementsByClassName

// 特定の要素を取得してコンソールに表示
    const element01 = document.querySelector('.color .button-blue');
    console.log('「.color .button-blue」で取得した要素', element01);

    const element02 = document.querySelector('.color .button:last-of-type');
    console.log('「.color .button:last-of-type」で取得した要素', element02);

    const element03 = document.querySelectorAll('.button');
    console.log('「.button」で取得した要素', element03);

// ボタンをクリックしたらリストを増やす
const buttonColor = document.querySelectorAll('.color .button');
const listColor = document.getElementById('list-color');

const buttonColorClick = function(){
    let element = document.createElement('li');
    element.innerHTML = this.innerHTML;
    listColor.appendChild(element);
};
