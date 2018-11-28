
$(function(){
    var words = [
        'un développeur',
        'un designer',
        'un animateur'
    ],
    i=0;

  // on gére l'affichage du menu responsif pour les écrans inférieurs ou égaux à meduim (<992px)
 $(".navbar-responsive").toggle();
 $(".menu").click(function (){
    $(".navbar-responsive").toggle("slow");
 });

 // on gére l'affichage aléatoire des phrases d'accroche du header ( toutes les 3.5 secondes)
 setInterval(function () {
     $("#word").fadeOut(function (){
        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
     });  
     }, 3500);

 // on gére le scroll vers les différentes sections du site 
  $(".scroll").click(function(){
      var section = $("." + this.id);
      $("html,body").animate({scrollTop:section.offset().top},'slow');
  });
  
  // on gére l'affihage des progressbar pour les compétences 
  window.sr = ScrollReveal();
  sr.reveal('.progress-bar' , {
      origin :'left',
      duration : 2000,
      distance : '100%'

  });
 
});