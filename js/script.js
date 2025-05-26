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