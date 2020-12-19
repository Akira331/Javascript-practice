'use strict';
const number = Math.floor(Math.random() * 6);
//Math.floor()メソッド　(与えられた数値)以下の最大の整数を返します。
//Math.random()メソッド　
const answer = parseInt(window.prompt('数当てゲーム。0〜5の数字を入力してね。'));
let message;
if (answer === number) {
    message = 'あたり！';
} else if (answer < number) {
    message = '残念でした！もっと大きい';
} else if (answer > number) {
    message = '残念でした！もっと小さい';
} else {
    message = '0〜5の数字を入力してね。';
}
window.alert(message);