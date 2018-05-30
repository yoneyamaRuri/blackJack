(function(){

var imgMarkCds = ['c', 'd', 'h', 's'];　//カードのマークを格納

// var imgName = imgMarkCds[card.mark] + (('00') + card.number).substr(-2) + '.png'; イメージ画像の生成

var cards = []; //カードを格納

for (var i=1; i<=13; i++) {
  for (var h=0; h<4; h++) {
    cards.push({
      number: i,
      mark: h
    });
  }
}


for(var i = cards.length - 1; i > 0; i--){　//52枚のカードをランダムに生成
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
  }
  for (i=0; i<1; i++) {
    console.log(userPcards);
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

});


/*--------------------------------------------------------------------*/
//dealerのCount数
var dealerCount = ($('#dealerSpace .count').text());

//playerのCount数
var playerCount = ($('#playerSpace .count').text());

//勝敗を表示する
var playerJudge = ('#playerSpace .judge');

//player・dealerのカード画像
var cardSpace = $('#mainTable .trampCard');

/*
*勝敗判定
*/
$('#playerSpace .stand').on('click', function() {
  if (dealerCount < playerCount && playerCount < 22) {
    $(playerJudge).text('winner');
  } else if (playerCount < dealerCount && dealerCount < 22) {
    $(playerJudge).text('lose');
  } else {
    console.log('other');
  }
});


/*
*トランプimg削除、count数リセット
*/
$('#playerSpace .reset').on('click', function()　{
  $(cardSpace).remove();
  $('#mainTable .count').text('0');
});



})();
