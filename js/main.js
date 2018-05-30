(function(){

//カードのマークを格納
var imgMarkCds = ['c', 'd', 'h', 's'];　

//dealerのカード置き場
var dealerCardArea = $('#dealerSpace .cardSpace');

//playerのカード置き場
var playerCardArea = $('#playerSpace .cardSpace');

//var imgName = imgMarkCds[cards.mark] + card.number + '.png';  //イメージ画像の生成

//カードを格納
var cards = [];

for (var i=1; i<=13; i++) {
  for (var h=0; h<4; h++) {
    cards.push({
      number: i,
      mark: h
    });
  }
}

for(var i = cards.length - 1; i > 0; i--) {　//52枚のカードをランダムに生成
  var r = Math.floor(Math.random() * (i + 1));
  var tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

/*
最初のカードの生成
*/
$('#playerSpace .start').on('click', function(){
  for (i=0; i<1; i++) {
    console.log(userDcards);
    $(dealerCardArea).append('<image src="" class="trampCard">');
    var dealerFirstCards = userDcards[i].mark;
    $('#dealerSpace .trampCard').attr({src: dealerFirstCards + '.png'});
  }
  for (i=0; i<1; i++) {
    console.log(userPcards);
    $(playerCardArea).append('<image src="" class="trampCard">');
    var playerFirstCards = userPcards[i].mark;
    console.log(playerFirstCards + '.png');
  }
});

var userDcards = [];
var userPcards = [];


var tmp = cards.shift();　//引いたカードを母数から消す
userDcards.push(tmp);

tmp = cards.shift();
userDcards.push(tmp);

var tmp = cards.shift();　//引いたカードを母数から消す
userPcards.push(tmp);

tmp = cards.shift();
userPcards.push(tmp);

// console.log(userAcards);
console.log(cards);

$('#playerSpace .hit').on('click', function(){
  var moreCard = $(playerCardArea).append('<image src="" class="trampCard">');
  var tmp = cards.shift();
  userDcards.push(tmp);
  console.log(tmp);
  moreCard;
});

/*--------------------------------------------------------------------*/
//dealerのCount数
var dealerCount = ($('#dealerSpace .count').text());

//playerのCount数
var playerCount = ($('#playerSpace .count').text());

//勝敗を表示する
var playerJudgeViw = ('#playerSpace .judge');

//player・dealerのカード画像
var cardSpace = $('#mainTable .trampCard');

/*
*勝敗判定
*/
$('#playerSpace .stand').on('click', function() {
  if (dealerCount < playerCount && playerCount < 22) {
    $(playerJudgeViw).text('winner');
  } else if (playerCount < dealerCount && dealerCount < 22) {
      $(playerJudgeViw).text('winner');
  } else if (dealerCount < playerCount && playerCount > 21) {
      $(playerJudgeViw).text('lose');
  } else {
      $(playerJudgeViw).text('drow');
  }
});

$(window).on('click', function(){
  $(dealerCount).text('1');
  $(playerCount).text('1');
});

/*
*トランプimg削除、count数リセット
*/
$('#playerSpace .reset').on('click', function()　{
  $(cardSpace).remove();
  $('#mainTable .count').text('0');
});



})();
