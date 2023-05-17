function kontakt() {
    window.location.href="kontakt.html";
}

function ydelser() {
    window.location.href="ydelser.html";
}

// funktion til back to top knap fra https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
var mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Tal counter animation fra: https://codepen.io/dmcreis/pen/VLLYPo
  var a = 0; //Variablen sikrer at animationen kun kører én gang.
$(window).scroll(function() { //Funktionen bliver kørt når man scroller. ($ = jQuery )
  var oTop = $('#counter').offset().top - window.innerHeight; //Regner positionen fra toppen af dokumentet, af ID'et "counter" ud, 
                                                              //trækker vindues højden fra, derved = positonen for hvornår animationen skal starte.
  if (a == 0 && $(window).scrollTop() > oTop) { //Ligningen tjekker om variablen a = 0, og om der er scrolled længere ned end der blev udregnet ovenfor (oTop). 
                                                //Hvis begge er  sande, starter animationen.
    $('.counter-value').each(function() { //Vælger alle elementer m. class "counter-value" og looper gennem dem.
      var $this = $(this), // Beder Javascript om at fokuserer kun på denne "animation"
        countTo = $this.attr('data-count'); //I loopet bliver ($(this)) tilknyttet variablen $this. Og henter derefter slut-værdien fra data-count attributten.
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        }, //Bruger jQuery's animate funktion. Som animerer en tilpasset værdi (countNum) fra den eksisterende værdi af ($this.text()) til slut-værdien (countTo).

        { 

          duration: 800,
          easing: 'swing', // starter langsomt, accelererer midt i animationen, og bliver langsommere til slut.
          step: function() { 
            $this.text(Math.floor(this.countNum)); //Er en funktion som bliver kaldt for hvert step af animationen. Den opdaterer elementets tekst med bundværdien af this.countNum 
                                                  //(så den ikke laver kommatal).
          },
          complete: function() {
            $this.text(this.countNum); //Funktionen kaldes når animationen er færdig. Og sætter slut-værdien (10000) i tekst til this.countNum.
            //alert('finished');
          }

        });
    });
    a = 1; //: variablen a er nu ikke = 0, og derved vil animationen ikke kører igen pga. linie 51. Da ligningen ikke opfylder kravene mere,
  }

});


// fade in ved scroll på kasser
window.addEventListener("scroll", fadeBox); //Hver gang der scrolles kaldes funktionen fadeBox

function fadeBox () {	
  var oTop = $('#kasser').offset().top - window.innerHeight;
  if($(window).scrollTop() > oTop + 150) { //150 er ekstra tillæg på vindues højden, så animationen starter senere. 
      $(".kasse").addClass("fadein");
  }
}
