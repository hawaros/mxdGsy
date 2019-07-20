// START: För att ha smidig scroll på hemsidan. 
//Detta gäller generellt för alla interna länkar.
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// SLUT: För att ha smidig scroll på hemsidan. 


// START: Scroll reveal
ScrollReveal().reveal('#banner .text-content', {
    duration: 2000,
    origin: 'right',
    distance: '41px'
});


ScrollReveal().reveal('#tjanster .card', {
    duration: 2000,
    origin: 'left',
    distance: '41px'
});

ScrollReveal().reveal('#omoss #om-left', {
    duration: 2000,
    origin: 'left',
    distance: '41px'
});

ScrollReveal().reveal('#omoss #om-right', {
    duration: 2000,
    origin: 'bottom',
    distance: '41px'
});


ScrollReveal().reveal('#contact-form', {
    duration: 2000,
    origin: 'right',
    distance: '41px'
});

ScrollReveal().reveal('#k-card', {
    duration: 2000,
    origin: 'bottom',
    distance: '91px'
});
// SLUT: Scroll reveal




// START: Ring och maila oss knappen i modal
// RING OSS KNAPPEN IN MODAL
function ringa(){
  $('.ringa').css('font-size', '31px');
  $('.ringa').css('font-weight', 'bold');
  $('.ringa').css('color', '#1ab394');

  if($('.ringa').is(':hidden')){
    $('.ringa').show('slow');
    $('.maila').hide('slow');
  }
  else{
    $('.ringa').hide('slow');
  }
}




// MAILA OSS KNAPPEN IN MODAL
function maila(){
  $('.maila').css('font-size', '21px');
  $('.maila').css('font-weight', 'bold');
  $('.maila').css('color', '#1ab394');

  if($('.maila').is(':hidden')){
    $('.maila').show('slow');
    $('.ringa').hide('slow');
  }
  else{
    $('.maila').hide('slow');
  }
}
// SLUT: Ring och maila oss knappen i modal





// START: Modal content-functions (rubbrik, text, price)

function contentBokf() {
  var bkfText = 'Vi på GSY Redovisning ger dig professionell hjälp med redovisning. \
  </br></br>Låt oss ta hand om din bokföring så kan du fokusera på att utveckla din verksamhet! \
  Vi hjälper med hela eller delar av redovisningen. Oavsett vilka behov du har så \
  anpassar vi oss efter ditt behov och vi ser till så du får en bokföring och \
  redovisning med tillförlitlig information.';
  

  var bokfRubrik = 'Bokföring/ Redovisning';
  var bokfPrice = '<b>350</b> <small>kr/tim</small>';

  $('#modRubr').html(bokfRubrik);
  $('#modPrice').html(bokfPrice);
  $('#modTxt').html(bkfText);
  
}




function contentLonehn() {
  var lonehnText = 'Vi tar ansvar för att lönerna blir rätt och betalas ut i tid. Ni får ordentliga \
  lönespecifikationer, underlag till bokföring och skattedeklarationer.\
  </br></br>  Om du väljer att anlita oss för ditt företags lönehantering kan du antingen \
  få en helhetslösning där vi hanterar hela löneredovisningen. Men vi kan också anpassa \
  tjänsten så vi finns tillgängliga vid frågor och även som backup vid sjukdom och semester.';
  

  var lonehnRubrik = 'Lönehantering';
  var lonehnPrice = '<b>550</b> <small>kr/tim</small>';

  $('#modRubr').html(lonehnRubrik);
  $('#modPrice').html(lonehnPrice);
  $('#modTxt').html(lonehnText);
  
}




function contentDekl() {
  var deklText = ' Hos oss tar vi hand om din deklaration så att allt deklarationsarbete blir rätt.\
  Om du driver eget är det viktigt att hitta en bra balans mellan din privata och företagets \
  deklaration och det är just detta vi hjälper dig med! \
  </br></br> Vi är behjälpliga med att upprätta inkomstdeklarationer för både ditt bolag \
  eller för enskilda firman och för dig som privatperson. \
  </br></br>Du kan även få skatterådgivning för att dels se varför du får restskatt \
  eller hur vi kan hjälpa dig att få ner skatten.\
  </br></br><b>Våra områden inom Deklaration:</b>\
  <ul><li>Arbetsgivardeklaration</li>\
  <li>Inkomstdeklaration</li>\
  <li>Skatterådgivning</li>\
  <li>Momsdeklaration</li>';


  var deklRubrik = 'Deklaration';
  var deklPrice = '<b>300</b> <small>kr/tim</small>';

  $('#modRubr').html(deklRubrik);
  $('#modPrice').html(deklPrice);
  $('#modTxt').html(deklText);

}


function contentBoksl() {
  var bokslText = ' Hos oss kan du vara säker på att bokslutet, årsredovisningen och \
  deklarationen blir gjord på rätt sätt. Att upprätta ett bokslut kan ofta vara \
  väldigt krävande och uppta onödigt mycket tid. </br></br>\
  Ett riktigt bokslut och en bra årsredovisning ger tydliga signaler att ditt företag \
  är en bra samarbetspartner. För dig som driver ett aktiebolag blir årsredovisningen \
  offentlig för alla. Det är därför viktigt att det inte bara blir rätt utan även \
  presenteras på ett tilltalande sätt.';
  

  var bokslRubrik = 'Bokslut';
  var bokslPrice = '<b>450</b> <small>kr/tim</small>';

  $('#modRubr').html(bokslRubrik);
  $('#modPrice').html(bokslPrice);
  $('#modTxt').html(bokslText);
}

// SLUT: Modal content-functions (rubbrik, text, price)



// CSS Styling
window.onload = function() {
  $('#kontakt-h2').css('color', '#000');
  //yourFunction(param1, param2);
};


