//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
//    if ($(".navbar").offset().top > 50) {
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//		$(".avatar").css("width","45px");
//		$(".avatar").css("height","45px");
//		$(".avatar").css("top","3px");
//    } else {
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//		$(".avatar").css("width","50px");
//		$(".avatar").css("height","50px");
//		$(".avatar").css("top","20px");
//    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('a.elementohref').bind('click', function(event) {
		var $anchor = $(this);
		$(".elemento").each(function(index){
			if (index >= 0 ){ 
				var element = $(this); // <-- en la variable element tienes tu elemento
				element.css("display","block");
				//element.fadeIn(1000);
				//$(this).show(1500);
				//$(this).show("slow");

				if ($anchor.data("filter") == "all") { 
					//$(this).show(1500);
					element.css("display","block"); 
					//element.fadeIn(1000);
				} else if (element.data("filter") != $anchor.data("filter")) { 
					//$(this).hide(1500);
					element.css("display","none"); 
					//element.fadeOut(1000);
				}
			}
		});
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	
    //Controlar el cambio de tamaÃ±o de la ventana del navegador -------------------------------- TIMELINE
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) == true ) { 
		$(window).resize(function(event) {
			if ($(".bio-section").height() < $("#bio_container").height() + 100) {
				$(".bio-section").css("height", $("#bio_container").height() + 100 );
			}
			if ($(".trabajos-section").height() < $("#trabajos_container").height() + 100) {
				$(".trabajos-section").css("height", $("#trabajos_container").height() + 100 );
			}
			if ($(".musica-section").height() < $("#musica_container").height() + 100) {
				$(".musica-section").css("height", $("#musica_container").height() + 100 );
			}
			if ($(".contact-section").height() < $("#contact_container").height() + 100) {
				$(".contact-section").css("height", $("#contact_container").height() + 100 );
			}
			if ($(".redes-section").height() < $("#redes_container").height() + 100) {
				$(".redes-section").css("height", $("#redes_container").height() + 100 );
			}
		});

		if ($(".bio-section").height() < $("#bio_container").height() + 100) {
			$(".bio-section").css("height", $("#bio_container").height() + 100 );
		}
		if ($(".trabajos-section").height() < $("#trabajos_container").height() + 100) {
			$(".trabajos-section").css("height", $("#trabajos_container").height() + 100 );
		}
		if ($(".musica-section").height() < $("#musica_container").height() + 100) {
			$(".musica-section").css("height", $("#musica_container").height() + 100 );
		}
		if ($(".contact-section").height() < $("#contact_container").height() + 100) {
			$(".contact-section").css("height", $("#contact_container").height() + 100 );
		}
		setTimeout(function(){ 
			if ($(".redes-section").height() < $("#redes_container").height() + 100) {
				$(".redes-section").css("height", $("#redes_container").height() + 100 ); 
			}
		},5000);
	}
	
});


function enviar_correo() {
	var cUrl  = "mailto:imanolmirandacomposer@gmail.com";
		cUrl += "?subject="+document.getElementById('subject').value;
		
	//Recuperar el valor del TEXTAREA y Reemplazar los saltos de linea en caracteres %0A
	var texto_textarea = document.getElementById('texto_email').value.replace(/\n/g, "%0A");
		//texto_textarea = texto_textarea.split('/\u').join('%0A');;

	var cTexto  = "";
		cTexto += texto_textarea+escape("\n\n\n");
		cTexto += document.getElementById('name').value+escape("\n");
		cTexto += document.getElementById('email').value;
		cUrl += "&body="+cTexto;

		window.location.href = cUrl;
}
