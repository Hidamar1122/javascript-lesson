console.log('helloworld');
let text ='JavaScriptの練習';
console.log(text);

text ='JavaScriptをマスターした'
console.log(text)

let name ='ジョニー';
let greet ='私は' + name + '!';
console.log(greet);

let one = '1';
let two = 2;

console.log('one →', typeof one, one); 
console.log('two →', typeof two, two);

function getArea(){
let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle + 'です');
}

let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

getArea();
getArea();
getArea();

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');


function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');