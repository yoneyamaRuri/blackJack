(function() {

  /**************************************************
   * 関数
   **************************************************/
  // カードの山を作る
  function createFirstCards() {
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
    return cards;
  }

  // カードを引く
  function hitCard(cards) {
    var card = cards.shift();
    return card;
  }

  // 勝敗のジャッジ
  function getJudgeText(dealerCount, playerCount) {
    var resultText = 'draw';
    if (playerCount < 22 && (dealerCount > 21 || dealerCount < playerCount)) {
      resultText = 'winner';
    } else if (dealerCount < 22 && (playerCount > 21 || playerCount < dealerCount)) {
      resultText = 'lose';
    }
    return resultText;
  }

  function getCardImgElm(card) {
    var $cardImg = $('<image src="" class="trampCard">');
    var imgName = imgMarkCds[card.mark] + card.number;
    $cardImg.attr({src: 'images/' + imgName + '.png'});
    return $cardImg;
  }


  /**************************************************
   * マスタ
   **************************************************/
  //カードのマークをマスタ
  var imgMarkCds = ['c', 'd', 'h', 's'];


  /**************************************************
   * グローバル変数
   **************************************************/
  //カードを格納
  var cards = [];

  // プレイヤーの持ち札
  var userDcards = [];
  var userPcards = [];

  // 保有ポイント
  var dealerCount = 0;
  var playerCount = 0;

  //startボタンのon・off判定
  var firstButtonClick = false;

  /**************************************************
   * Dom エレメント
   **************************************************/

  //dealer
    // カード置き場
  var $dealerCardArea = $('#dealerSpace .cardSpace');
    // カードカウンター
  var $dealerCardCounter = $('#dealerSpace .count');

  //player
    //カード置き場
  var $playerCardArea = $('#playerSpace .cardSpace');
  // カードカウンター
  var $playerCardCounter = $('#playerSpace .count');

  //standボタン置き場
  var $standBtn = $('#playerSpace .stand');

  //勝敗を表示する
  var $playerJudgeViw = $('#playerSpace .judge');


  /**************************************************
   * イベント登録
   **************************************************/


  // 最初のカードの生成
  $('#playerSpace .start').on('click', function(){

    if (firstButtonClick) {
      return　false;
    }
    firstButtonClick = true;

    userDcards.push(hitCard(cards));
    userDcards.push(hitCard(cards));
    userPcards.push(hitCard(cards));
    userPcards.push(hitCard(cards));
    for (i=0; i<userDcards.length; i++) {
      $dealerCardArea.append(getCardImgElm(userDcards[i]));
      var dealerFirstCount = dealerCount += userDcards[i].number;
      $dealerCardCounter.text(dealerFirstCount);
    }
    for (i=0; i<userPcards.length; i++) {
      $playerCardArea.append(getCardImgElm(userPcards[i]));
      var playerFirstCount = playerCount += userPcards[i].number;
      $playerCardCounter.text(playerFirstCount);
    }
  });


  // playerがカードを1枚引く
  $('#playerSpace .hit').on('click', function(){
    var card = hitCard(cards);
    playerCount += card.number;
    userPcards.push(card);

    // 画面に反映
    $playerCardArea.append(getCardImgElm(card));
    $playerCardCounter.text(dealerCount);
  });

  // $standBtn.on('click', function() {
  //   // for (var dealerCount=0; dealerCount < 17; dealerCount ++) {
  //   for (var i=0; i<50; i++) {
  //     if (dealerCount < 17) {
  //       var card = hitCard(cards);
  //       dealerCount += card.number; //.numberの取得が出来ない
  //       userDcards.push(card);
  //
  //       //画面に反映
  //       $dealerCardArea.append(getCardImgElm(card));
  //       $dealerCardCounter.text(dealerCount);
  //       // if (dealerCount > 16) {
  //       //   break;
  //       // }
  //     } else {
  //       break;
  //     }
  //   }
  // });

  // 勝敗判定
  $standBtn.on('click', function() {
    while(dealerCount < 17) {
      var card = hitCard(cards);
      dealerCount += card.number; //.numberの取得が出来ない
      userDcards.push(card);

      //画面に反映
      $dealerCardArea.append(getCardImgElm(card));
      $dealerCardCounter.text(dealerCount);
      // if (dealerCount > 16) {
      //   break;
      // }
    }

    //dealerのCount数
    // var dealerCount = $dealerCardCounter.text();
    //
    // //playerのCount数
    // var playerCount = $playerCardCounter.text();

    var resultText = getJudgeText(dealerCount, playerCount);
    $playerJudgeViw.text(resultText);
  });


  // トランプimg削除、count数リセット
  $('#playerSpace .reset').on('click', function()　{ //クリックのon・offが出来たが、カードの初期化と再配置が出来ていない。
    var $allCardSpace = $('#mainTable .trampCard');
    $allCardSpace.remove();
    dealerCounter = 0;
    console.log(cards);

    cards = createFirstCards();
    userDcards = [];
    userPcards = [];
    dealerCount = 0;
    playerCount = 0;

    firstButtonClick = false;
  });

  /**************************************************
   * 初期処理
   **************************************************/
  var cards = createFirstCards();

})();
