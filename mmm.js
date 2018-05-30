(function() {

  var cats = [
    {
      name: '1',
      img: 'images/taro.jpg'
    },
    {
      name: '2',
      img: 'images/jiro.jpg'
    },
    {
      name: '3',
      img: 'images/saburo.jpg'
    },
    {
      name: '4',
      img: 'images/shiro.jpg'
    },
    {
      name: '5',
      img: 'images/goro.jpg'
    },
    {
      name: '6',
      img: 'images/rokuro.jpg'
    }
  ];



　$('#maincontent .checkbtn').on('click', function() {
    var inputNumber = $('input').val();
    var i = inputNumber % cats.length;

    // var catName = '';
    // if ( i === 1) {
    //   catName = cats[0].name;
    // } else {
    //   catName = cats[1].name;
    // }

    // var catName = (i === 1) ? cats[0].name :  cats[1].name;

    var catName = cats[i].name;

    $('#maincontent .charname').attr(catName);

    var catImage = cats[i].img;

    $('#maincontent img').attr({'src':catImage}),

    $('#maincontent .result').show();
  });

})();
