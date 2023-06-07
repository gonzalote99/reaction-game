const infoPara = document.querySelector('#info-para');
const start = document.querySelector('#start');
const score = document.querySelector('#previous-score-para');
const result = document.querySelector('#result-para');
const p1 = document.querySelector('#p-1');
const warning = document.querySelector('#warning');


p1.innerHTML = 'test reaction time';

warning.innerHTML = '<strong>note: </strong> reaction clicking';

$(document).ready(function () {
  $('#start').click(function() {
    infoPara.innerHTML = 'wait green box';
    $('.alert-dark').slideDown('slow');
    $('#box').slideDown('slow');
    $('#warning').slideUp('slow');
    $('#start').slideUp('slow');


    let nowtime = new Date().getTime();
    let randomtime = Math.floor(Math.random() * 9999) + 1000;
    console.log(nowtime);
    console.log(randomtime);


    let timeout = setTimeout(() => {
      $("#box").hide(1);
      $("#green-box").show(1);
      result.innerHTML = 'tap now'
    }, randomtime);

    $("#box").click(function () {
      clearTimeout(timeout);
      $("#start").slideDown(1000);
      start.innerHTML = "tapped in red box";
      $('#box').slideUp(1000);
      $('#warning').slideDown(1000);
    });

    $('#green-box').click(function() {
      $('.alert-success').slideDown(500);
      let clickedtime = new Date().getTime();
      console.log(clickedtime);
      let result = clickedtime - (nowtime + randomtime);
      score.innerHTML = " " + result/1000 + "seconds";
      $("#green-box").slideUp(1000);
      $("#play-again").slideDown('slow');


      $("#play-again").click(function() {
        score.innerHTML = "";
        $("#play-again").slideUp('slow');
        $("#green-box").slideUp('slow');
        $("#start").slideDown('slow');
        $("#warning").slideDown('slow');
        $(".alert-success").slideUp('slow');
        start.innerHTML = "start";
      })
    })
  })
})