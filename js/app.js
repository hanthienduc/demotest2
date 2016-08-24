$( document ).ready(function() {
    
	/*var navsound = $("#nav-sound")[0];
	
	$("#nav a").mouseenter(function() {
		navsound.play();
	});*/


	$(function(){
        var bgMusic = $('#audio-bg')[0],
            playing = true;

        //to loop the sound
        /*bgMusic.addEventListener('ended', function() {
            this.currentTime = 0;
            if (playing) {
                this.play();
            }
        }, false);*/

        bgMusic.play();

        
        //To create a pause/play bouton
        /*$('#paused').click(function() {
            if (!bgMusic.paused) {
                bgMusic.pause();
                playing = false;
                $(this).css({backgroundPosition: '0 -21px'})
            } else {
                bgMusic.play();
                playing = true;
                $(this).css({backgroundPosition: '0 0'})
            }
        });*/
    });



});




/*// IF YOU HAVE AN ALERT MESSAGE PLEASE CUT & PASTE THE CODE BELLOW JUST BEFORE THE TAG </style>
<!--DEBUT DU DROIT D'UTILISATION. NE PAS SUPPRIMER OU MODIFIER CES LIGNES. SI VOUS LES SUPPRIMEZ OU LES MODIFIEZ UN MESSAGE D'ALERTE APPARAITRA QUAND VOTRE SITE SERA EN LIGNE.-->
<style>#free-flash-header a,#free-flash-header a:hover {color:#363636;}#free-flash-header a:hover {text-decoration:none}</style>
<!--FIN DU DROIT D'UTILISATION-->
// AND PLEASE CUT & PASTE THE CODE BELLOW JUST AFTER DE TAG <div id="holder">
	<!--DEBUT DU DROIT D'UTILISATION. NE PAS SUPPRIMER OU MODIFIER CES LIGNES. SI VOUS LES SUPPRIMEZ OU LES MODIFIEZ UN MESSAGE D'ALERTE APPARAITRA QUAND VOTRE SITE SERA EN LIGNE.-->
	<div id="copy" style="height: 75px; position: absolute; bottom: 0px; left:0px; border: none; width: 100%;">
		<div id="free-flash-header" style="width:820px;margin:0 auto;text-align:right;position:relative;bottom:0px;margin-top:63px;color:#363636;font-size:10px;font-family:Verdana"><strong>templates gratuit</strong> sur <a href="http://www.kitsgratuits.com/"><strong>templates gratuit</strong></a></div>																			 
	</div>	
	<!--FIN DU DROIT D'UTILISATION-->	
*/