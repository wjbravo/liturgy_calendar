
function alCargar(pestana) {


}
function incluye_pe_contenido(nombre) {

$('#x_pe_pleg').load(nombre+ ' #contenido_pe', function() {
$("#x_pe_pleg").css('display','block');;
$("#x_ord_pleg").css('display','none');
$('#bot_pleg .bot_pe').addClass('noactivo').removeClass('activo');
$('#bot_pleg .bot_ord').removeClass('noactivo').addClass('activo');
$('#x_ord_pleg').css('display','none');
$('#x_pe_pleg').css('display','block');
$("#bot_pleg").parent().css('display','block');
	if (mipreferencia['fondo']==1 ) {
$(" .boton ").each(function(){
	$(this).removeClass('boton').addClass('botonBueno')
	}); }
myScroll.refresh();
pon_pref('x_pe_pleg', $('#x_pe_pleg').html());
if ($('#x_tmp_titulo #soy_misa_jueves_sto').length==0) $('.solo_misa_jueves_sto').remove()
$('.alternativa').css('display','none');
if ($('#x_tmp_titulo #soy_misa_jueves_sto').length==0) $('.solo_misa_jueves_sto').remove()
if ($('#x_tmp_titulo .soy_pentecostes').length>0) $('.pentecostes').css('display','inline');
if ($('#x_tmp_titulo .soy_ascension').length>0) $('.ascension').css('display','inline');
if ($('#x_tmp_titulo .soy_epifania').length>0) $('.epifania').css('display','inline');
if ($('#x_tmp_titulo .soy_octava_pascua').length>0) $('.octava_pascua').css('display','inline');
if ($('.x_titulo .soy_octava_navidad').length>0) $('.octava_navidad').css('display','inline');
 } );



}
function incluye_pf_contenido(nombre) {

$('#x_pe_prefacio').load(nombre+ ' #contenido_pf', function() {
$('.txt_prefacio').css('display','none');
$('.txt_prefacio.txt_pe').css('display','block');
$('#bot_prefacio .noactivo').removeClass('noactivo').addClass('activo')
$('#bot_prefacio .bot_pe').removeClass('activo').addClass('noactivo');
$("#bot_prefacio").parent().css('display','block');
myScroll.refresh();
pon_pref('x_pe_prefacio', $('#x_pe_prefacio').html());
if ($('#x_tmp_titulo #soy_misa_jueves_sto').length==0) $('.solo_misa_jueves_sto').remove()
if ($('#x_tmp_titulo .soy_octava_pascua').length>0) $('.octava_pascua').css('display','inline');

	 } );


$('#x_pe_pleg').load(nombre+ ' #contenido_pe', function() {
$('#bot_pleg .bot_pe').addClass('noactivo').removeClass('activo');
$('#bot_pleg .bot_ord').removeClass('noactivo').addClass('activo');
$('#x_ord_pleg').css('display','none');
$('#x_pe_pleg').css('display','block');
$("#bot_pleg").parent().css('display','block');
	if (mipreferencia['fondo']==1 ) {
$(" .boton ").each(function(){
	$(this).removeClass('boton').addClass('botonBueno')
	}); }
myScroll.refresh();
pon_pref('x_pe_pleg', $('#x_pe_pleg').html());
$('.alternativa').css('display','none');
if ($('#x_tmp_titulo #soy_misa_jueves_sto').length==0) $('.solo_misa_jueves_sto').remove()
if ($('#x_tmp_titulo .soy_pentecostes').length>0) $('.pentecostes').css('display','inline');
if ($('#x_tmp_titulo .soy_ascension').length>0) $('.ascension').css('display','inline');
if ($('#x_tmp_titulo .soy_epifania').length>0) $('.epifania').css('display','inline');
if ($('#x_tmp_titulo .soy_octava_pascua').length>0) $('.octava_pascua').css('display','inline');
if ($('.x_titulo .soy_octava_navidad').length>0) $('.octava_navidad').css('display','inline');

} );

}

function incluye_pf(nombre) {

$('#x_pf_prefacio').load(nombre.replace('#',' #'), function() { myScroll.refresh(); } );
$('.txt_prefacio').css('display','none');
$('.txt_prefacio.txt_pf').css('display','block');
$('#bot_prefacio .noactivo').removeClass('noactivo').addClass('activo')
$('#bot_prefacio .bot_pf').removeClass('activo').addClass('noactivo');
myScroll.refresh();
pon_pref('x_pf_prefacio', $('#x_pf_prefacio').html());
if ($('#x_tmp_titulo .soy_octava_pascua').length>0) $('.octava_pascua').css('display','inline');

}
function muestra_or_fieles(oracion) {

$('#texto_or_fieles').load('oracion_fieles.html #'+oracion , function() {
muestraono("indice_or_fieles",false);
muestraono("texto_or_fieles",true);
$("#tab_or_fieles_txt").removeClass("activo").addClass("noactivo");
$("#tab_or_fieles_ind").removeClass("noactivo").addClass("activo");
myScroll.refresh();
} );


}
function muestra_or_pueblo() {
$('#x_ord_or_pueblo').load('oraciones_pueblo.html #interior', function() {
var coletilla=''
	if (mipreferencia['fondo']==1 ) coletilla='Bueno'
$('#bot_or_pueblo_ord').trigger('touchend');
muestraono('x_ord_or_pueblo',true)
$('#x_ord_or_pueblo').prepend("<div class=solodos><span class=boton"+coletilla+" ontouchend='setTimeout( function() {muestraono(\"x_ord_or_pueblo\",false); $(this).remove; }, 10);'>X</span></div>")
myScroll.refresh();
})

}
function muestra_bendiciones() {

$('#x_ord_or_pueblo').load('bendiciones.html #interior', function() {
var coletilla=''
	if (mipreferencia['fondo']==1 ) coletilla='Bueno'
$('#bot_or_pueblo_ord').trigger('touchend');
muestraono('x_ord_or_pueblo',true)
$('#x_ord_or_pueblo').prepend("<div class=solodos><span class=boton"+coletilla+" ontouchend='setTimeout( function() {muestraono(\"x_ord_or_pueblo\",false); $(this).remove; }, 10);'>X</span></div>")
myScroll.refresh();
})

}
function miluna(year, idioma)
{
	// esta funcion se utilizaría para las Kalendas, en el pregón de Navidad.
	month = 12
	day = 25
    var c = e = jd = b = 0;
    if (month < 3) {
        year--;
        month += 12;
    }
    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; //jd is total days elapsed
    jd /= 29.5305882; //divide by the moon cycle
    b = parseInt(jd); //int(jd) -> b, take integer part of jd
    jd -= b; //subtract integer part to leave fractional part of original jd
	b= Math.floor(jd * 29.5305882)
	if (b==0) b=30
	
	if (idioma=='cast') {
var ordinal=['primera','segunda','tercera','cuarta','quinta','sexta','séptima','octava','novena','décima','decimoprimera','decimosegunda','decimotercera','decimocuarta','decimoquinta','decimosexta','decimoséptima','decimoctava','decimonovena','vigésima','vigesimoprimera','vigesimosegunda','vigesimotercera','vigesimocuarta','vigesimoquinta','vigesimosexta','vigesimoséptima','vigesimoctava','vigesimonovena','trigésima']	
	} else if (idioma=='latin') {
var ordinal=['prima','secunda','tertia','quarta','quinta','sexta','septima','octava','nona','decima','undecima','duodecima','tertia decima','quarta decima','quinta decima','sexta decima','septima decima','octava decima','nona decima','vicesima','vicesima prima','vicesima secunda','vicesima tertia','vicesima quarta','vicesima quinta','vicesima sexta','vicesima septima','vicesima octava','vicesima nona','trigesima']	
	} else if (idioma=='ital') {
var ordinal=['prima','seconda','terzia','quarta','quinta','sesta','settima','ottava','nona','decima','undicesima','dodicesima','tredicesima','quattordicesima','quindicesima','sedicesima','diciassettesima','diciottesima','diciannovesima','ventesima','ventunesimo','ventiduesima','ventritreesima','ventiquattresima','venticinquesima','ventiseiesima','ventisettesima','ventottesima','ventinovesima','trentesima']		
	}
	
    return ordinal[b-1];
	
}
function cambia_pref_a(elemento, nuevopref) {


padre=$(elemento).closest('.dia')
$(padre).css('display','none');
if (nuevopref=='ant') {
		$(padre).prevAll('.x'+mimisal_1+':first').css('display','block').find('div.meter_aqui').html($('#introduccion').html());
	} else if (nuevopref=='sig') {
		$(padre).nextAll('.x'+mimisal_1+':first').css('display','block').find('div.meter_aqui').html($('#introduccion').html());
	} else $('#'+nuevopref).css('display','block').find(' div.meter_aqui').html($('#introduccion').html());

arreglaCarga(mipestana)
pon_pref('x_pf', $('.dia:visible').html());
//$('#'+nuevopref+ ' div.meter_aqui').html($('#introduccion').html())

}
function activa_bot(elemento,pestana3,parte) {
if (parte!='global') {
$(elemento).siblings('.noactivo').removeClass('noactivo').addClass('activo');
$(elemento).removeClass('activo').addClass('noactivo');

$('.txt_'+parte).css('display','none')
$('.txt_'+pestana3+'.txt_'+parte).css('display','block')
} else  {
		$('.txt_ord:not(.txt_pleg , .txt_prefacio), .txt_tmp, .txt_snt, .txt_com').css('display','none')
		$('.txt_'+pestana3+'.txt_titulo').css('display','block')
		$('.bot_ord.noactivo, .bot_tmp.noactivo, .bot_snt.noactivo, .bot_com.noactivo, .bot_pf.noactivo, #bot_prefacio .bot_pe.noactivo , #bot_pleg .bot_pe.noactivo').removeClass('noactivo').addClass('activo');
		$(elemento).removeClass('activo').addClass('noactivo');
		$('.bot_'+pestana3).each(function(){
			miparte=$(this).closest('.div-botones').attr('id').substr(4)
			if ($(this).hasClass('noactivo')) {
				$(this).removeClass('activo').addClass('noactivo');
				$('.txt_'+pestana3+'.txt_'+miparte).css('display','block');
			} else if (pestana3=='snt' && $(this).siblings('.bot_com').hasClass('activo')) {
				$(this).siblings('.bot_com').removeClass('activo').addClass('noactivo');
				$('.txt_com.txt_'+miparte).css('display','block');
				}
			})
		if (pestana3=='ord') { $('.txt_tmp_lct, .txt_snt_lct').css('display','none'); $('.bot_tmp_lct.noactivo, .bot_snt_lct.noactivo').removeClass('noactivo').addClass('activo');  }
		if (pestana3=='tmp' || (pestana3=='snt' && !lect_sant_prior)) { $('.txt_tmp_lct').css('display','block'); $('.bot_snt_lct.noactivo').removeClass('noactivo').addClass('activo'); $('.bot_tmp_lct.activo').removeClass('activo').addClass('noactivo'); $('.txt_snt_lct').css('display','none'); }
		if (pestana3=='snt' && lect_sant_prior) { $('.txt_snt_lct').css('display','block'); $('.bot_tmp_lct.noactivo').removeClass('noactivo').addClass('activo'); $('.bot_snt_lct.activo').removeClass('activo').addClass('noactivo'); $('.txt_tmp_lct').css('display','none'); }
		}
if (!esperame) myScroll.refresh();
}
function arreglaLectura(parte8) {
var coletilla=''
	if (mipreferencia['fondo']==1 ) coletilla='Bueno'
	if ($('input.x_tmp_precedencia').length)  {
preced_tmp=Number($('input.x_tmp_precedencia').val());

if ( preced_tmp==66 ) if ( midia==0 ) { preced_tmp=6; } else preced_tmp=13
}
if ($('input.x_snt_precedencia').length)  { preced_snt= Number($('input.x_snt_precedencia').val()); } else preced_snt=88

 var pestanaspos= ['tmp_lct','snt_lct','otr_lct']
		var index0;
		var encontre_alguno=false;
		for (index0 = 0; index0 < pestanaspos.length; ++index0) {
		pestana8=pestanaspos[index0]
			$('#bot_'+parte8+' .bot_'+pestana8).removeClass('noactivo').removeClass('activo');
		 valor=dime_pref('x_'+pestana8+'_'+parte8,'nada')

		 //console.log('x_'+pestana8+'_'+parte8+'.....'+valor+'--')
		 //if (pestana8+'_'+parte8=='snt_lct_prim_lect') alert('x_'+pestana8+'_'+parte8+'.....'+valor+'--')
		 if (valor!='nada' && valor.length>1 ) {
		 encontre_alguno=true;
				$('#x_'+pestana8+'_'+parte8).html(valor).css('display','none');
				$('#bot_'+parte8).parent().css('display','block');
				$('.cursores , .respuesta').remove();
				$('#bot_'+parte8+' .bot_'+pestana8).addClass('activo');
				if (parte8=='evangelio') { $('#dialogo_evang').clone().removeAttr("id").prependTo('#x_'+pestana8+'_'+parte8); $('.dialogo_evang:not("#dialogo_evang")').css('display','block'); }
				$('#x_'+pestana8+'_'+parte8+' a').each(function() {
				 $(this).click(function(e) {
					 e.preventDefault();
						midirec='../lecturas/';
					 sitio = parseURL(this.href);
					 //alert(this.href)
					 if (this.href.indexOf('parcial=')>0) {
					 cadena = midirec+sitio.file+ ' #parcial_'+sitio.params['parcial']
					 //alert(cadena)
					 } else	 cadena = midirec+sitio.file+ ' #'+sitio.hash
					 $(this).parent().load(cadena, function() { $('.cursores , .respuesta').remove(); $(this).children('.dia').css('display','block'); pon_pref('x_'+pestana8+'_'+parte8, $(this).html()); } );
					 });
				}) ;
		$('#x_'+pestana8+'_'+parte8).prepend("<div class=solodos><span class=boton"+coletilla+" ontouchend='setTimeout( function() { if (confirm(\"X?\")) { pon_pref(\"x_"+pestana8+"_"+parte8+"\",\"nada\"); arreglaLectura(\""+parte8+"\"); }; }, 10);'>X</span></div>")

			} else {
			$('#x_'+pestana8+'_'+parte8).html(valor).css('display','none');

			}

		}
			if (!encontre_alguno) $('.txt_ord.txt_'+parte8).removeClass('txt_ord').css('display','block');
	if (mipreferencia['fondo']==1 ) {
$(" .boton ").each(function(){
	$(this).removeClass('boton').addClass('botonBueno')
	}); }

if (preced_snt<preced_tmp && (preced_snt<=8 || $('span.lect_obl').length!=0 )&& $('#bot_'+parte8+' .bot_snt_lct').hasClass('activo')) {
	$('#bot_'+parte8+' .bot_snt_lct').trigger('touchend');
} else if ($('#bot_'+parte8+' .bot_tmp_lct').hasClass('activo')) {
	$('#bot_'+parte8+' .bot_tmp_lct').trigger('touchend');
} else if ($('#bot_'+parte8+' .bot_snt_lct').hasClass('activo')) {
	$('#bot_'+parte8+' .bot_snt_lct').trigger('touchend');
} else if ($('#bot_'+parte8+' .bot_otr_lct').hasClass('activo')) {
	$('#bot_'+parte8+' .bot_otr_lct').trigger('touchend');
} else {
	$('#bot_'+parte8).parent().css('display','none'); $('.txt_ord.txt_'+parte8).removeClass('txt_ord').css('display','block');
	}

myScroll.refresh();


}

$.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};

function arreglaCarga(pestana) {
 if (mipreferencia['ordinarionormal']==1) {
 if (pestana=='o') {
 $('.div-botones , .incrustado').css('display','none');
 $('.txt_ord , .noincrustado').css('display','block');
 }
 } else {
 switch (pestana) {
 case 'o':

 esperame=true
					 var ab=0
					 var pestanaspos= ['tmp','snt','com','pf','pe']
 var partespos= ['titulo','ant_ent','gloria','colecta','credo','antes_or_fieles','or_ofrend','ant_com','post_com','or_pueblo','prefacio','pleg']
// quité gloria y credo
// var partespos= ['titulo','ant_ent','colecta','antes_or_fieles','or_ofrend','ant_com','post_com','or_pueblo','prefacio','pleg']
 		var index;
		for (index = 0; index < partespos.length; ++index) {
		var encontre_alguno=false;
		var index0;
		for (index0 = 0; index0 < pestanaspos.length; ++index0) {
		pestana8=pestanaspos[index0]

		parte8=partespos[index]

		valor=dime_pref('x_'+pestana8+'_'+parte8,'nada')


		 if (parte8!='titulo') valor=valor.replace('h2','h4')
		 if (valor!='nada' && valor.length>1 ) {
		 encontre_alguno=true;
				$('#x_'+pestana8+'_'+parte8).html(valor).css('display','none');
				$('#x_'+pestana8+'_'+parte8+' .cursores').remove();
				$('#bot_global .bot_'+pestana8).addClass('activo');
				$('#bot_'+parte8).parent().css('display','block');
				$('#bot_'+parte8+' .bot_'+pestana8).addClass('activo');
				if (parte8=='prefacio') {
					$('#x_ord_prefacio').css('display','none')
					$('#x_'+pestana8+'_prefacio a').each(function() {
				 $(this).click(function(e) {
					 e.preventDefault();
						midirec='../prefacios/';
					 sitio = parseURL(this.href);
					 cadena = midirec+sitio.file+ ' #'+sitio.hash
					 $('#x_pf_prefacio').load(cadena, function() {
						$('.cursores').remove();
						$('#x_pf_prefacio h2').each(function() { $(this).after('<h4>'+$(this).html()+'</h4>').remove(); });
						$('#x_pf_prefacio .dia').css('display','block');
						$('#bot_prefacio .bot_pf').removeClass('noactivo').addClass('activo').trigger( "touchend" );
						pon_pref('x_pf_prefacio', $('#x_pf_prefacio').outerHTML());
						if ($('#x_tmp_titulo .soy_octava_pascua').length>0) $('.octava_pascua').css('display','inline');
						});
					 });
				}) ;
				$('#x_pf_prefacio h2').each(function() { $(this).after('<h4>'+$(this).html()+'</h4>').remove(); });
				$('.meter_aqui').css('display','none');
				}
				if (parte8=='or_pueblo') $('#x_'+pestana8+'_or_pueblo a').each(function() {
				 $(this).click(function(e) {
					 e.preventDefault();
						midirec='../ordinario/';
					 sitio2 = parseURL(this.href);
					 cadena = midirec+sitio2.file+ ' #bend'+sitio2.params['parcial']

					 $(this).closest('div.txt_or_pueblo').load(cadena, function() {
						$(' #bend'+sitio2.params['parcial']).css('display','block') } )

					 });
				}) ;

			}

		}



	}
var coletilla=''
	if (mipreferencia['fondo']==1 ) coletilla='Bueno'
 var pestanaspos= ['tmp_lct','snt_lct','otr_lct']
 var partespos= ['prim_lect','salmo','seg_lect','aleluya','evangelio']
 		var index;
		for (index = 0; index < partespos.length; ++index) {
		parte8=partespos[index]
		var index0;
		var encontre_alguno=false;
		for (index0 = 0; index0 < pestanaspos.length; ++index0) {
		pestana8=pestanaspos[index0]
		 valor=dime_pref('x_'+pestana8+'_'+parte8,'nada')
		 //console.log('x_'+pestana8+'_'+parte8+'.....'+valor+'--')
		 //if (pestana8+'_'+parte8=='snt_lct_prim_lect') alert('x_'+pestana8+'_'+parte8+'.....'+valor+'--')
		 if (valor!='nada' && valor.length>1 ) {
		 encontre_alguno=true;
				$('#x_'+pestana8+'_'+parte8).html(valor).css('display','none');
				if (parte8=='evangelio') { $('#dialogo_evang').clone().removeAttr("id").prependTo('#x_'+pestana8+'_'+parte8); $('.dialogo_evang:not("#dialogo_evang")').css('display','block'); }
				$('#bot_global .bot_'+pestana8).addClass('activo');
				$('#bot_'+parte8).parent().css('display','block');
				$('.cursores , .respuesta').remove();
				$('#bot_'+parte8+' .bot_'+pestana8).addClass('activo');
				$('#x_'+pestana8+'_'+parte8+' a').each(function() {
				 $(this).click(function(e) {
					 e.preventDefault();
						midirec='../lecturas/';
					 sitio = parseURL(this.href);
					 //alert(this.href)
					 if (this.href.indexOf('parcial=')>0) {
					 cadena = midirec+sitio.file+ ' #parcial_'+sitio.params['parcial']
					 //alert(cadena)
					 } else	 cadena = midirec+sitio.file+ ' #'+sitio.hash
					 $(this).parent().load(cadena, function() { $('.cursores , .respuesta').remove(); $(this).children('.dia').css('display','block'); pon_pref('x_'+pestana8+'_'+parte8, $(this).html()); } );
					 });
				}) ;
				$('#x_'+pestana8+'_'+parte8).prepend("<div class=solodos><span class=boton"+coletilla+" ontouchend='setTimeout( function() { if (confirm(\"X?\")) { pon_pref(\"x_"+pestana8+"_"+parte8+"\",\"nada\"); arreglaLectura(\""+parte8+"\"); } }, 10);'>X</span></div>")

			}

		}
			if (!encontre_alguno) $('.txt_ord.txt_'+parte8).removeClass('txt_ord').css('display','block');

	}
// Una vez cargado lo normal, vemos días especiales
//Domingo de Ramos
if ($('#x_tmp_titulo #soy_mierc_ceniza').length>0) {
$('#despues_homilia').load('../tiempos/tiempos_cuaresma.html #x_antes_or_fieles')
$('#acto_penitencial , #himno_gloria').css('display','none');
$('.bot_snt , .bot_com').removeClass('activo');
}
if ($('#x_tmp_titulo #soy_dom_ramos').length>0) {
$('#todo_hasta_colecta').load('../tiempos/tiempos_semanasta.html #entrada_dom_ramos', function() {
$("#iniciales_ramos_1").load("../ordinario/ordinario.html #antes_ant_ent")
$("#iniciales_ramos_2").load("../ordinario/ordinario.html #desp_ant_ent")
$("#entrada_ramos").addClass('texto_incluido').css('display','block');
})
$('#antes_evangelio').load('../tiempos/tiempos_semanasta.html #antes_pasion')
$('.bot_snt , .bot_com').removeClass('activo');

}
if ($('#x_tmp_titulo #soy_misa_crismal').length>0) {
$('#despues_homilia').load('../tiempos/tiempos_semanasta2.html #despues_homilia')
$('.bot_snt , .bot_com').removeClass('activo');
}
if ($('#x_tmp_titulo #soy_misa_jueves_sto').length>0) {
$('#bloque_credo_orfieles').remove()
$('#despues_homilia').load('../tiempos/tiempos_semanasta3.html #despues_homilia')
$('#todo_desp_or_post_com').load('../tiempos/tiempos_semanasta3.html #todo_desp_or_post_com')
$('.bot_snt , .bot_com').removeClass('activo');
}

if ($('#x_tmp_titulo #soy_misa_viernes_sto').length>0) {
$('#todo').load('../tiempos/tiempos_semanasta4.html #todo_viernes_sto', function(){
$('#lectura_isaias').html(dime_pref('x_tmp_lct_prim_lect',''))
$('#lectura_hebreos').html(dime_pref('x_tmp_lct_seg_lect',''))
$('#lectura_juan').html(dime_pref('x_tmp_lct_evangelio',''))
$('.noincrustado').css('display','none');
})
$('.bot_snt , .bot_com').removeClass('activo');
}
if ($('#x_tmp_titulo #soy_vigilia_pascual').length>0) {
$('#todo_hasta_ofertorio').load('../tiempos/tiempos_semanasta5.html #todo_hasta_ofertorio')
$('#despedida_final').load('../tiempos/tiempos_semanasta5.html #despedida_final')
$('#bendic_sacd').remove()
$('.bot_snt , .bot_com').removeClass('activo');
}
if ($('#x_tmp_titulo .soy_octava_pascua').length>0) {
$('.octava_pascua').css('display','inline-block');
} else $('.octava_pascua').css('display','none');

if ($('#x_tmp_titulo .soy_pentecostes').length>0) {
$('.pentecostes').css('display','inline-block');
}
if ($('#luna_cast').length>0) {
$('#luna_cast').html(miluna(mianno,'cast'));
}
if ($('#luna_latin').length>0) {
$('#luna_latin').html(miluna(mianno,'latin'));
}
if ($('#luna_ital').length>0) {
$('#luna_ital').html(miluna(mianno,'ital'));
}
	break;
 case 't':
  var partespos= ['titulo','ant_ent','acto_penit','gloria','colecta','credo','antes_or_fieles','or_ofrend','prefacio','ant_com','post_com','or_pueblo']
	 		var index;
		for (index = 0; index < partespos.length; ++index) {
		parte8=partespos[index]
	if ($('.x_'+parte8+':visible').length) { pon_pref('x_tmp_'+parte8, $('.x_'+parte8+':visible').outerHTML()); } else pon_pref('x_tmp_'+parte8, 'nada')
		};
if ($('#luna_cast').length>0) {
$('#luna_cast').html(miluna(mianno,'cast'));
}
if ($('#luna_latin').length>0) {
$('#luna_latin').html(miluna(mianno,'latin'));
}
if ($('#luna_ital').length>0) {
$('#luna_ital').html(miluna(mianno,'ital'));
}

 break;
 case 's':
  var partespos= ['titulo','ant_ent','acto_penit','gloria','colecta','credo','antes_or_fieles','or_ofrend','prefacio','ant_com','post_com','or_pueblo']
	 		var index;
		for (index = 0; index < partespos.length; ++index) {
		parte8=partespos[index]
	if ($('.x_'+parte8+':visible').length) { pon_pref('x_snt_'+parte8, $('.x_'+parte8+':visible').outerHTML()); } else pon_pref('x_snt_'+parte8, 'nada')
		};
	 url = window.location.pathname;
	var id_santo=$('.dia:visible').attr('id')
	var	milecturasanto2=url.replace('santos/santos_','lecturas/lecturas_santos_')+' #'+id_santo
	var partespos4= ['prim_lect','salmo','seg_lect','aleluya','evangelio']
	var $midiv=$('<div>').attr('id','mibuffer4').css('display','none')
	$('#scroller').append($midiv)
			$('#mibuffer4').load(milecturasanto2, function() {
			$('#mibuffer4 .ciclo'+miciclo ).siblings().remove()
		var index4;
		for (index4 = 0; index4 < partespos4.length; ++index4) {
		if ($('#mibuffer4 .x_'+partespos4[index4]).length) {

			var midiv4=$('#mibuffer4 .x_'+partespos4[index4]).outerHTML()
			//
			pon_pref('x_snt_lct_'+partespos4[index4],midiv4);
			} else pon_pref('x_snt_lct_'+partespos4[index4],'nada');
		}

			}) //load lectura de santos

 break;
 case 'c':
	var partespos= ['titulo','ant_ent','acto_penit','gloria','colecta','credo','antes_or_fieles','or_ofrend','prefacio','ant_com','post_com','or_pueblo']
	 		var index;
		for (index = 0; index < partespos.length; ++index) {
		parte8=partespos[index]
	if ($('.x_'+parte8+':visible').length) { pon_pref('x_com_'+parte8, $('.x_'+parte8+':visible').outerHTML()); } else pon_pref('x_com_'+parte8, 'nada')
		};
break;
 case 'le':
 		url = window.location.pathname;
		filename = url.substring(url.lastIndexOf('/'));
		if (filename.indexOf('_santos')>0 || ( !( filename.indexOf('_comunes')>0 || filename.indexOf('indice_lecturas')>0 || filename.indexOf('_difuntos')>0))) {
		if (filename.indexOf('_santos')>0) { pestana8='_snt_lct_'; } else if (!(filename.indexOf('_comunes')>0 || filename.indexOf('_difuntos')>0)) pestana8='_tmp_lct_';
	var partespos= ['prim_lect','salmo','seg_lect','aleluya','evangelio']
 		var index;
		for (index = 0; index < partespos.length; ++index) {
		parte8=partespos[index]
	if ($('.x_'+parte8+':visible').length) {  pon_pref('x'+pestana8+parte8, $('.x_'+parte8+':visible').outerHTML()); } else pon_pref('x'+pestana8+parte8, 'nada')
		};
		}
 break;
 case 'pf':
	if ($('.dia:visible').length ) { pon_pref('x_pf_prefacio', $('.dia:visible').outerHTML()); } else pon_pref('x_pf_prefacio', 'nada')
	$('.octava_pascua').css('display','inline-block');
 break;
 case 'pe':
		url = window.location.pathname;
		filename = url.substring(url.lastIndexOf('/')+1);
		$('.alternativa').css('display','inline-block');
	if ($('#contenido_pf').length) { pon_pref('x_pe_prefacio', $('#contenido_pf').html()); } else pon_pref('x_pe_prefacio', 'nada');
	if ($('#contenido_pe').length) { pon_pref('x_pe_pleg', $('#contenido_pe').html()); } else pon_pref('x_pe_pleg', 'nada');
 break;
 }

}
}

function backKeyDown() {
 //console.log("Back Button Pressed!");
 if (confirm('Exit?')) navigator.app.exitApp();
 }

function boton_adelante (pestana) {
//alert(pestana+'...'+puntero+'..'+tope)
 if (puntero <tope ) {
 pon_pref('lh' + pestana + '_ultimo',(eval(puntero )+1));
  	var	nuevositio = dime_pref('lh'+pestana+(eval(puntero )+1),'noExiste');
puntero=eval(puntero)+1;
 window.location=nuevositio
 }

}

function boton_atras (pestana) {

 if (puntero >500) {
 pon_pref('lh' + pestana + '_ultimo',(eval(puntero)-1));
	var	nuevositio = dime_pref('lh'+pestana+(eval(puntero)-1),'noExiste')
puntero=eval(puntero)-1;
if ( nuevositio != 'noExiste') window.location=nuevositio
 }
}

function cambia_indice(mielemento,otro) {
	mielemento.parentNode.style.display='none'
	document.getElementById(otro).style.display='inline-block'

embutir(mielemento.parentNode.id , mielemento.parentNode.style.display)
embutir(otro , document.getElementById(otro).style.display)
pon_pref('lh' + mipestana + puntero , window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos + window.location.hash)
 myScroll.refresh()
	}

function cambialengua (objeto){
// según sean las preferencias y la primera letra del id del div padre del elemento desde el que se ha llamado esta funcion muestra/oculta un idioma, u otro

if (modocopia) return false
if (myScroll.moved) return
if (mipreferencia['presentaciontexto']<=1 || mimisal_1 == mimisal_2 ) return

var d = new Date();
var hora = d.getTime();

diferencia=hora-hora_ant[objeto.tagName]

if (diferencia<200) return

hora_ant[objeto.tagName]=0
cambia = false
cambiaAlatin = false
cambiaAcast = false
if (objeto.tagName=='SPAN') objeto = objeto.parentNode

if (objeto.parentNode.className=='pueblo' || mipreferencia['presentacionrespuestas']==5 ) { cambia = true;
} else if (mipreferencia['presentaciontexto']==2 && (objeto.className !='botonlengua')) { cambia = true ;
} else if (mipreferencia['presentaciontexto']==3 && (objeto.className =='botonlengua')) cambia = true


if (cambia) {

	encontrado = false

	if (objeto.className== mimisal_2 ) {
		cambiaAlatin = true ;
		encontrado= true ;
	} else if (objeto.className== mimisal_1 ) {
		cambiaAcast = true ;
		encontrado= true ;
	}

	if (!encontrado) {
	if ($(objeto).parents('.'+mimisal_2).length > 0) { cambiaAlatin = true ; } else if ($(objeto).parents('.'+mimisal_1).length > 0) cambiaAcast = true ;
	}


	if (cambiaAlatin ) {
			if (encontrado) {
				padre = $(objeto).parents()[0]
			} else {
				padre = $(objeto).parents('.'+mimisal_2)[0].parent()[0]
			}
			if ($(padre).children("."+mimisal_1).length >0) {
				$(padre).children("."+mimisal_2).css('display', 'none')
				$(padre).children("."+mimisal_1).css('display', 'block')
				$(padre).children("."+mimisal_1+':empty').text('--- ??? ---')
				}
			} else if (cambiaAcast ) {
			if (encontrado) {
						padre = $(objeto).parents()[0]
			} else {
				padre = $(objeto).parents('.'+mimisal_1)[0].parent()[0]
			}
			if ($(padre).children("."+mimisal_2).length >0) {
				$(padre).children("."+mimisal_2).css('display', 'block')
				$(padre).children("."+mimisal_1).css('display', 'none')
				$(padre).children("."+mimisal_2+':empty').text('--- ??? ---')
				}
		}
myScroll.refresh()

}




return
}

function cambialengua2 (objeto){
// esta funcion es igual que la anterior, a la que se ha añadido la primeralínea.

if (mipreferencia['presentaciontexto']<=1 || mimisal_1 == mimisal_2 ) return

var d = new Date();
var hora = d.getTime();

diferencia=hora-hora_ant[objeto.tagName]

if (diferencia<200) return

hora_ant[objeto.tagName]=0
cambia = false
cambiaAlatin = false
cambiaAcast = false
if (objeto.tagName=='SPAN') objeto = objeto.parentNode

if (objeto.parentNode.className=='pueblo' || mipreferencia['presentacionrespuestas']==5 ) { cambia = true;
} else if (mipreferencia['presentaciontexto']==2 && (objeto.className !='botonlengua')) { cambia = true ;
} else if (mipreferencia['presentaciontexto']==3 && (objeto.className =='botonlengua')) cambia = true


if (cambia) {

	encontrado = false

	if (objeto.className== mimisal_2 ) {
		cambiaAlatin = true ;
		encontrado= true ;
	} else if (objeto.className== mimisal_1 ) {
		cambiaAcast = true ;
		encontrado= true ;
	}

	if (!encontrado) {
	if ($(objeto).parents('.'+mimisal_2).length > 0) { cambiaAlatin = true ; } else if ($(objeto).parents('.'+mimisal_1).length > 0) cambiaAcast = true ;
	}


	if (cambiaAlatin ) {
			if (encontrado) {
				padre = $(objeto).parents()[0]
			} else {
				padre = $(objeto).parents('.'+mimisal_2)[0].parent()[0]
			}
			if ($(padre).children("."+mimisal_1).length >0) {
				$(padre).children("."+mimisal_2).css('display', 'none')
				$(padre).children("."+mimisal_1).css('display', 'block')
				$(padre).children("."+mimisal_1+':empty').text('--- ??? ---')
				}
			} else if (cambiaAcast ) {
			if (encontrado) {
						padre = $(objeto).parents()[0]
			} else {
				padre = $(objeto).parents('.'+mimisal_1)[0].parent()[0]
			}
			if ($(padre).children("."+mimisal_2).length >0) {
				$(padre).children("."+mimisal_2).css('display', 'block')
				$(padre).children("."+mimisal_1).css('display', 'none')
				$(padre).children("."+mimisal_2+':empty').text(' --- ??? --- ')
				}
		}

}


myScroll.refresh()


return
}

function cambia_vista(miId) {
var d = new Date();
var hora = d.getTime();

diferencia=hora-hora_ant[miId]

if (diferencia<300) return
hora_ant[miId]=0


mielemento= document.getElementById(miId)
if (mielemento.style.display=='block') {
mielemento.style.display='none'
} else mielemento.style.display='block'

// ahora guardamos el nuevo estado de lo que hemos variado en la variable embutidos
embutir(miId,mielemento.style.display)

pon_pref('lh' + mipestana + puntero , window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos + window.location.hash)

	myScroll .refresh()
}

function cambia_vista2(miId) {
var d = new Date();
var hora = d.getTime();

diferencia=hora-hora_ant[miId]

if (diferencia<300) return
hora_ant[miId]=0


mielemento= document.getElementById(miId)
if (mielemento.style.display=='inline') {
mielemento.style.display='none'
} else mielemento.style.display='inline'

// ahora guardamos el nuevo estado de lo que hemos variado en la variable embutidos
embutir(miId,mielemento.style.display)

pon_pref('lh' + mipestana + puntero , window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos + window.location.hash)

	myScroll .refresh()
}

function cambia_vista_y_simbolo(objeto,miId) {
cambia_vista(miId)
if (document.getElementById(miId).style.display=='none') { objeto.innerHTML='&#9654;&#xFE0E;' } else objeto.innerHTML='&#9660;&#xFE0E;'

myScroll .refresh()
}

function cambia_pref(pref,nuevovalor) {
mipreferencia[pref] = nuevovalor
preferencias = "?fondo="+mipreferencia["fondo"]
preferencias += "&tamanotexto="+mipreferencia["tamanotexto"]
preferencias += "&avance="+mipreferencia["avance"]
preferencias += "&tipoletra="+mipreferencia["tipoletra"]
preferencias += "&tamanorubrica="+mipreferencia["tamanorubrica"]
preferencias += "&misal_pral="+mipreferencia["misal_pral"]
preferencias += "&tamanomenus="+mipreferencia["tamanomenus"]
preferencias += "&segundoidioma="+mipreferencia["segundoidioma"]
preferencias += "&presentaciontexto="+mipreferencia["presentaciontexto"]
preferencias += "&presentacionrespuestas="+mipreferencia["presentacionrespuestas"]
preferencias += "&presentacionpestanas="+mipreferencia["presentacionpestanas"]
preferencias += "&presentacionbotones="+mipreferencia["presentacionbotones"]
preferencias += "&oracionestodos="+mipreferencia["oracionestodos"]
preferencias += "&botoneszurdos="+mipreferencia["botoneszurdos"]
preferencias += "&ordinarionormal="+mipreferencia["ordinarionormal"]
window.localStorage.setItem('preferencias', preferencias);

pon_pref("cambiartamano",1);
}

function dime_pref (key, defecto) {
 var resultado = window.localStorage.getItem(key)

 if (resultado == null) resultado = defecto
 //console.log('Saco: '+ key+ '... -> ... '+resultado)
 return resultado
}

function empieza(directorio,pestana) {
 //console.log('empezamos'+ puntero )

 puntero = 500 ;
 pon_pref('lh' + pestana + '_ultimo',puntero );
	 pon_pref('lh' + pestana + '_tope',puntero );
 if (pestana == 't') {
 window.location= directorio + 'tempora.html';
 }
 }

function esconde_clase(elem,clase,siono){
var l=new Array(elem),c=1,ret=new Array();
//This first loop will loop until the count var is stable//
for(var r=0;r<c;r++){
 //This loop will loop thru the child element list//
 for(var z=0;z<l[r].childNodes.length;z++){

 //Push the element to the return array.
 if (l[r].childNodes[z].className==clase) {

			if (siono) { l[r].childNodes[z].style.display='none'; } else { l[r].childNodes[z].style.display='inline'; }
		} else if (l[r].childNodes[z].className!='pueblo') {
					esconde_clase(l[r].childNodes[z],clase,siono)
				}

 }//FOR
}//FOR
}

function extrae_preferencias() {
	var url=preferencias
 var vars = {};
 var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
 vars[key] = value;
 });
 return vars;
}

function extrae_parcial(miurl) {
 var a = document.createElement('a');
 a.href = miurl;
	url=miurl.replace(a.hash,'')
 var vars = {};
 var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
 vars[key] = value;
 });
		if (typeof vars['parcial']=== 'undefined' ) { resultado=''; } else resultado='&parcial='+vars['parcial']

 return resultado;
}

function getUrlVars() {
	var url=window.location.href.replace(window.location.hash,'')
 var vars = {};
 var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
 vars[key] = value;
	//	console.log(key+'->'+value);
 });

 return vars;
}

function aligera_lenguas() {
	if (mimisal_1!='latin' && mimisal_2!='latin') $('.latin').remove()
	if (mimisal_1!='cast' && mimisal_2!='cast') $('.cast').remove()
	if (mimisal_1!='engl' && mimisal_2!='engl') $('.engl').remove()
	if (mimisal_1!='germ' && mimisal_2!='germ') $('.germ').remove()
	if (mimisal_1!='port' && mimisal_2!='port') $('.port').remove()
	if (mimisal_1!='ital' && mimisal_2!='ital') $('.ital').remove()
}

function loaded() {
	if (mipestana=='libro') {
//$("#scroller").html(dime_pref("libro","hola"));


} else {
var espera=1
if (mipestana!='dev' && mipestana!='sac') toggle_pestanas(0);
aligera_lenguas()
	if (mipestana=='o' && mipreferencia['ordinarionormal']==0) {
		$('#superbot_1_1').trigger('touchend');

$('.respuesta').remove()
if ($('input.x_tmp_precedencia').length)  {
preced_tmp=Number($('input.x_tmp_precedencia').val());
if ( preced_tmp==66 ) if ( midia==0 ) { preced_tmp=6; } else preced_tmp=13
} else preced_tmp=88
if ($('input.x_snt_precedencia').length)  { preced_snt= Number($('input.x_snt_precedencia').val()); } else preced_snt=88

if (preced_tmp<=8) $('.no_fiestas').remove();
opcion_elegida=dime_pref('opcion_elegida','0');
if (opcion_elegida==0) {
if (preced_snt<preced_tmp) { if (preced_snt<=8 || $('span.lect_obl').length!=0) {lect_sant_prior=true; $('.no_fiestas').remove();} $('#bot_global .bot_snt').trigger('touchend'); pon_pref('opcion_elegida','2'); } else { $('#bot_global .bot_tmp').trigger('touchend');  pon_pref('opcion_elegida','1');}
} else {
if (opcion_elegida==1) $('#bot_global .bot_tmp').trigger('touchend');
if (opcion_elegida==2) { if (preced_snt<=8 || $('span.lect_obl').length!=0) {lect_sant_prior=true; $('.no_fiestas').remove(); } $('#bot_global .bot_snt').trigger('touchend'); }
if (opcion_elegida==3) $('#bot_global .bot_com').trigger('touchend');
}
//		muestraono("ritos_iniciales",true); muestraono("botonmas1",false); muestraono("liturgia_palabra",true); muestraono("botonmas2",false); muestraono("liturgia_eucaristica_1",true); muestraono("botonmas3",false); muestraono("liturgia_eucaristica_2",true); muestraono("botonmas4",false); muestraono("liturgia_eucaristica_3",true); muestraono("botonmas5",false); muestraono("liturgia_eucaristica_4",true); muestraono("botonmas6",false);  muestraono("superbot_1",false); muestraono("superbot_2",true);
//		if ($('#bot_global .bot_tmp').hasClass('activo'))  activa_bot('.bot_tmp.activo','tmp','global');
if ($('#bot_prefacio .bot_pf').hasClass('activo')) {
	$('#bot_prefacio .bot_pf').siblings('.noactivo').removeClass('noactivo').addClass('activo');
	$('#bot_prefacio .bot_pf').removeClass('activo').addClass('noactivo');
	$('.txt_prefacio').css('display','none');
	$('#x_pf_prefacio').css('display','block');
}
if ($('#bot_prefacio .bot_pe').hasClass('activo')) {
	$('#bot_prefacio .bot_pe').siblings('.noactivo').removeClass('noactivo').addClass('activo');
	$('#bot_prefacio .bot_pe').removeClass('activo').addClass('noactivo');
	$('.txt_prefacio').css('display','none');
	$('#x_pe_prefacio').css('display','block');
}
if ($('#bot_pleg .bot_pe').hasClass('activo')) {
	$('#bot_pleg .bot_ord').removeClass('noactivo').addClass('activo');
	$('#bot_pleg .bot_pe').removeClass('activo').addClass('noactivo');
	$('#x_ord_pleg').css('display','none');
	$('#x_pe_pleg').css('display','block');
}
espera=300

}
	//toggle_botones(0);
	/*
	formato_misal=true ;

	if (formato_misal) {

		myScroll = new iScroll('contenedor', { hScrollbar: true, vScrollbar: false,
		fixedScrollbar: true ,
		hScroll: true ,
		vScroll: false ,
		bounce: false ,
		hideScrollbar: false ,
		fadeScrollbar: true ,
		momentum: false ,
		useTransform: false,
		onBeforeScrollStart: function (e)
		{
		var target = e.target;
		while (target.nodeType != 1) target = target.parentNode;

		if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION')
		e.preventDefault();
		},
		onBeforeScrollMove: function ( e ) {
		if ( this.distX > 40 && this.absDistX > this.absDistY ) {
			myScroll. disable()
		myScroll.scrollTo(-eval(document.getElementById('contenedor').offsetHeight-10),0, 0, true);
			this.distX=0
			this.moved=true
			myScroll.enable()
		} else if ( this.distX < -40 && this.absDistX > this.absDistY ) {
		myScroll.disable()
		myScroll.scrollTo(eval(document.getElementById('contenedor').offsetHeight-10),0, 0, true);
		this.distX=0
		this.moved=true
		myScroll.enable()
		}
		},
		onScrollStart: function() {
		toggle_botones(0);
		return false
		},
		onScrollEnd: function() {
		//toggle_botones(0);
		// toggle_pestanas(0);
		if (!esperame) {
		miposicion=myScroll.x;
		saveUltimo(mipestana);
		}
		return false
		} });


		$(function(){
	//    $('h1').addClass('dontend');
			$('.interior').columnize({
				width : 100

			});
			myScroll.refresh();
		});


	}	else {
*/
myScroll = new iScroll('contenedor', { hScrollbar: false, vScrollbar: false,
	fixedScrollbar: false ,
	hScroll: false ,
	bounce: false ,
	hideScrollbar: true ,
	fadeScrollbar: true ,
	momentum: true ,
	useTransform: false,
 onBeforeScrollStart: function (e)
 {
 var target = e.target;
 while (target.nodeType != 1) target = target.parentNode;

 if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION')
 e.preventDefault();
 },
	onBeforeScrollMove: function ( e ) {
 if ( this.distX > 40 && this.absDistX > this.absDistY ) {
			myScroll. disable()
 myScroll.scrollTo(0, -eval(document.getElementById('contenedor').offsetHeight-10), 0, true);
			this.distX=0
			this.moved=true
			myScroll.enable()
 } else if ( this.distX < -40 && this.absDistX > this.absDistY ) {
	myScroll.disable()
	myScroll.scrollTo(0, eval(document.getElementById('contenedor').offsetHeight-10), 0, true);
	this.distX=0
	this.moved=true
	myScroll.enable()
 }
 },
	onScrollStart: function() {
	toggle_botones(0);
	return false
 },
 onScrollEnd: function() {
	//toggle_botones(0);
	// toggle_pestanas(0);
	if (!esperame) {
	miposicion=myScroll.y;
saveUltimo(mipestana);
}
	return false
 } });




//     }  esto es lo de formato_misal






 document.addEventListener("deviceready", onDeviceReady, false);


if (avancepantalla==100) {
avancepantalla = avancepantalla*document.getElementById('contenedor').offsetHeight/100-10;
} else avancepantalla = avancepantalla*document.getElementById('contenedor').offsetHeight/100;



 var puntero_aux= dime_pref('lh'+mipestana+'_ultimo', 500 )
 var tope_aux= dime_pref('lh'+mipestana+'_tope', 500)

//console.log('Puntero '+ puntero_aux)
//console.log('Tope '+ tope_aux)
//if (puntero_aux == 'noExiste' ) puntero_aux = 500;
//if (tope_aux == 'noExiste' ) tope_aux = 500;

 puntero = eval(puntero_aux) ;
 tope = eval(tope_aux) ;


//alert(puntero+'...'+tope)
 var desplaz = getUrlVars()["despl"];
	if (typeof desplaz === 'undefined') desplaz = 0

 // aqui hay que comprobar si cambia la direccion respecto a lo que hay grabado en ultimo. Si es la misma, no se aumenta el puntero
 var a = document.createElement('a');
 a.href = dime_pref('lh' + mipestana + puntero ,'noExiste');

	if (window.location.pathname != a.pathname) {
							puntero++ // puntero = eval(puntero) + 1 ;
						if (puntero > tope) { tope++; } else tope = puntero
}

if (puntero == tope) document.getElementById('bot_adelante').style.visibility='hidden'
if (puntero == 500) document.getElementById('bot_atras').style.visibility='hidden'

 if (desplaz=='ultimo' && puntero !=500 ) {
 var direccion= dime_pref('lh'+ mipestana + puntero ,'noExiste');

						 if (direccion != 'noExiste') {
						 var a = document.createElement('a');
					a.href = direccion;
					var desplaz=parseURL(a)
					vete_a( a.pathname + '?despl='+desplaz.params.despl+a.hash);
						 }
 }

 miposicion = desplaz
//alert(window.location)
var preced_tmp=100
var preced_snt=100


if ( embutidos != '') {

	var trocito=embutidos.split("XXX");
	var tamano = trocito.length,
 elemento = null;
for (var i = 0; i < tamano; i++) {
 miparrafo = trocito[i];
 		mivariable=miparrafo.split('YYY')
 		miId=mivariable[0]
		mivalor=mivariable[1]
$('#'+miId).css('display',mivalor)
	//	document.getElementById().style.display =
}
}

	if (mipreferencia['fondo']==1 ) {
$(" .boton ").each(function(){
	$(this).removeClass('boton').addClass('botonBueno')
	}); }

setTimeout(function() {
 esperame=false

myScroll.refresh();
 if (typeof parcial2 === 'undefined') {
 myScroll.scrollTo(0, -miposicion, 0, true)
} else {

//esto solo ocurre en el ordinario
if (parcial2 == 'rito_comunion') {
muestraono('botonmas5',false)
muestraono('liturgia_eucaristica_3',true)

myScroll.scrollToElement(document.getElementById('rito_comunion'),0);
} else if (parcial2 == 'lit_euchar') {
muestraono('botonmas3',false)
muestraono('liturgia_eucaristica_1',true)

myScroll.scrollToElement(document.getElementById('lit_euchar'),0);
} else myScroll.scrollTo(0, -miposicion, 0, true)
}

if (mipreferencia['presentacionbotones']==3 ||mipreferencia['presentacionbotones']==4) toggle_botones(0)

}, espera);

/*
window.onbeforeunload = function (e) { 	 $('#scroller').css('opacity','.3'); saveUltimo(mipestana); }
*/
//alert(puntero)
}
}

function onDeviceReady() {
 // Register the event listener
 //console.log("PhoneGap preparado!");
 document.addEventListener("backbutton", backKeyDown, true);
//navigator.splashscreen.hide()

navigator.splashscreen.hide()
document.addEventListener("volumeupbutton", retrasa_pantalla, false);

document.addEventListener("volumedownbutton", avanza_pantalla, false);

}

function retrasa_pantalla() {
 myScroll.scrollTo(0, -eval(document.getElementById('contenedor').offsetHeight-10), 0, true);
}

function avanza_pantalla() {
 myScroll.scrollTo(0, eval(document.getElementById('contenedor').offsetHeight-10), 0, true);
}


function botonPantAbajo() {

myScroll.scrollTo(0, avancepantalla, 200, true);
ayuda=1;
return false;
}
function botonPantArriba() {

myScroll.scrollTo(0, -avancepantalla, 200, true);

}



function parseURL(url) {
/*
Ejemplo:
var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');

myURL.file; // = 'index.html'
myURL.hash; // = 'top'
myURL.host; // = 'abc.com'
myURL.query; // = '?id=255&m=hello'
myURL.params; // = Object = { id: 255, m: hello }
myURL.path; // = '/dir/index.html'
myURL.segments; // = Array = ['dir', 'index.html']
myURL.port; // = '8080'
myURL.protocol; // = 'http'
myURL.source; // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'

*/


 var a = document.createElement('a');
 a.href = url;
 return {
 source: url,
 protocol: a.protocol.replace(':',''),
 host: a.hostname,
 port: a.port,
 query: a.search,
 params: (function(){
 var ret = {},
 seg = a.search.replace(/^\?/,'').split('&'),
 len = seg.length, i = 0, s;
 for (;i<len;i++) {
 if (!seg[i]) { continue; }
 s = seg[i].split('=');
 ret[s[0]] = s[1];
 }
 return ret;
 })(),
 file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
 hash: a.hash.replace('#',''),
 path: a.pathname.replace(/^([^\/])/,'/$1'),
 relative: (a.href.match(/tp:\/\/[^\/]+(.+)/) || [,''])[1],
 segments: a.pathname.replace(/^\//,'').split('/')
 };
}

function cambia_titulos() {
document.getElementById('titulo01').innerHTML = '1:&nbsp;' + dime_pref('titulo1','- 1 -')
document.getElementById('titulo02').innerHTML = '2:&nbsp;' + dime_pref('titulo2','- 2 -')
document.getElementById('titulo03').innerHTML = '3:&nbsp;' + dime_pref('titulo3','- 3 -')
document.getElementById('titulo04').innerHTML = '4:&nbsp;' + dime_pref('titulo4','- 4 -')
document.getElementById('titulo05').innerHTML = '5:&nbsp;' + dime_pref('titulo5','- 4 -')
document.getElementById('titulo1').innerHTML = '1:&nbsp;' + dime_pref('titulo1','- 1 -')
document.getElementById('titulo2').innerHTML = '2:&nbsp;' + dime_pref('titulo2','- 2 -')
document.getElementById('titulo3').innerHTML = '3:&nbsp;' + dime_pref('titulo3','- 3 -')
document.getElementById('titulo4').innerHTML = '4:&nbsp;' + dime_pref('titulo4','- 4 -')
document.getElementById('titulo5').innerHTML = '5:&nbsp;' + dime_pref('titulo5','- 4 -')
}

function mi_oracion_new() {
var hoy = new Date()
 var dl = hoy.getDate();
			var dia = hoy.getDay();
if (dl>14 && dl<22 && dia == 0) {
$('#otras').trigger('expand');
$('#orac23').trigger('expand');
	$("#otras").collapsible( "option", "collapsed", false );
	$("#orac23").collapsible( "option", "collapsed", false );
	$("#orac23").get(0).scrollIntoView();
} else if (dia == 2) {

$('#otras').trigger('expand');
$('#orac18').trigger('expand');
	$("#otras").collapsible( "option", "collapsed", false );
	$("#orac18").collapsible( "option", "collapsed", false );
	$("#orac18").get(0).scrollIntoView();
} else if (dia == 4) {

$('#otras').trigger('expand');
$('#orac25').trigger('expand');
	$("#otras").collapsible( "option", "collapsed", false );
	$("#orac25").collapsible( "option", "collapsed", false );
	$("#orac25").get(0).scrollIntoView();
} else {

$('#gracias').trigger('expand');
$('#orac17').trigger('expand');
	$("#gracias").collapsible( "option", "collapsed", false );
	$("#orac17").collapsible( "option", "collapsed", false );
	$("#orac17").get(0).scrollIntoView();
}
	window.scrollBy(0, -80)
contador=0
}
function mi_oracion() {
var hoy = new Date()
 var dl = hoy.getDate();
			var dia = hoy.getDay();
if (dl>14 && dl<22 && dia == 0) {
muestraono('otras',true)
muestraono('orac23',true)
myScroll.refresh
myScroll.scrollToElement(document.getElementById('orac023'),20)
} else if (dia == 2) {
muestraono('otras',true)
muestraono('orac18',true)
myScroll.refresh
myScroll.scrollToElement(document.getElementById('orac018'),20)
} else if (dia == 4) {
muestraono('otras',true)
muestraono('orac25',true)
myScroll.refresh
myScroll.scrollToElement(document.getElementById('orac025'),20)
} else {
muestraono('gracias',true)
muestraono('orac17',true)
myScroll.refresh
myScroll.scrollToElement(document.getElementById('orac017'),20)

}
contador=0
}
function pinta_tabs(directorio,libro) {
 mitexto='';
 var miarchivo = parseURL(window.location.href).file
if ((miarchivo != 'indice_tiempos.html') && (miarchivo != 'indice_comunes.html') && (miarchivo != 'indice_santos.html') && (miarchivo != 'indice_lecturas.html') && (miarchivo != 'indice_prefacios.html') && (miarchivo != 'indice_pleg_euc.html') && (miarchivo != 'indice_ogmr.html')) {
	directorio2 = '../'
 } else directorio2 = ''

mitexto=' ';


sitio1="vete_a(sitioultimo(\"o\"))"
sitio2="vete_a(sitioultimo(\"t\"))"
sitio3="vete_a(sitioultimo(\"s\"))"
sitio4="vete_a(sitioultimo(\"c\"))"
sitio5="vete_a(sitioultimo(\"le\"))"
sitio6="vete_a(sitioultimo(\"pf\"))"
sitio7="vete_a(sitioultimo(\"pe\"))"
sitio8="vete_a(sitioultimo(\"i\"))"


 if (libro=='o') { pestana='1'; sitio1='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='t') { pestana='2'; sitio2='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='s') { pestana='3'; sitio3='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='c') { pestana='4'; sitio4='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='le') { pestana='5'; sitio5='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='pf') { pestana='6'; sitio6='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='pe') { pestana='7'; sitio7='setTimeout(function(){ toggle_pestanas(0); }, 20)'} else
 if (libro=='i') { pestana='8'; sitio8='setTimeout(function(){ toggle_pestanas(0); }, 20)'}
mispestanas = '#tabnav'+pestana
 if (libro=='dev') {
	pestana='9'
 var texto="<div id=cabecera style='text-align: center; position: fixed; top: 0; left: 0; width: 100%; border-bottom: 1px solid #aa0000; padding-bottom: 1%; "+mitexto+" ; z-index: 50000; '>";
 // texto+="<button style='float: left; margin-left: 2%;' id=boton1>Sacerdotale</button><img id='bot_indice' src=\"../../estrella.png\" style=\" width: 1.6em; height: 1.6em;\" ontouchend='contador++ ; setTimeout(function() { if (contador==1) mi_oracion(); },500) ; if (contador==2) { muestraono(\"precesobra\",true); myScroll.refresh; myScroll.scrollToElement(document.getElementById(\"precesobra\"),0); contador=0; };' ><button style='float: right; margin-right: 2%;' id=boton2>Missale</button></div>"
 // document.write(texto);
 // $(function() {
 // $( "#boton1" ).click(function() {
 // vete_a("sacerdotale.html");
 // });
	// $( "#boton2" ).click(function() {
 // vete_a(sitioultimo("o"));
 // });
 // });
 // texto=''
texto+="<span class=boton style='float: left; margin-left: 2%;' ontouchend='vete_a(\"sacerdotale.html\")' >Sacerdotale</span><img id='bot_indice' src=\"../../estrella.png\" style=\" width: 1.6em; height: 1.6em;\" ontouchend='contador++ ; setTimeout(function() { if (contador==1) mi_oracion(); },500) ; if (contador==2) { muestraono(\"precesobra\",true); myScroll.refresh; myScroll.scrollToElement(document.getElementById(\"precesobra\"),0); contador=0; };' ><span class=boton style='float: right; margin-right: 2%;' ontouchend='vete_a(sitioultimo(\"o\"))' >Missale</span></div>"
 } else if (libro=='sac') {
 pestana='0'
 var texto="<div id=cabecera style='position: absolute; top: 0; left: 0; width: 100%; border-bottom: 1px solid #aa0000; padding-bottom: 1%; "+mitexto+" ; z-index: 50000; '>";
 texto+="<span class=boton style='margin-left: 2%; float: left;' ontouchend='vete_a(\"devocionario_old.html\")' >Devotionarium</span><span class=boton style='float: right; margin-right: 2%;' ontouchend='vete_a(sitioultimo(\"o\"))' >Missale</span></div>"

 } else {
 if (mipreferencia['presentacionpestanas']==3) { //emergentes
	var texto="<style> #contenedor { top: 0; } "+mispestanas+" { visibility: hidden; } </style><div id=cabecera_back style='z-index: 50000; position: absolute; top: 0; left: 0; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: center; background: transparent;' ontouchend='if (pestanasactivas==0) toggle_pestanas(1);' > <div id=cabecera style='margin-left: 2%; margin-right: 2%; height: 2.1em; width: 96%; z-index: 50000; ' >";

 texto+="<ul class=pestanas id='tabnav" + pestana +"'>";
texto+="<li class='tab1' ontouchend='"+sitio1+"'>Ord</li>";
texto+="<li class='tab2' ontouchend='"+sitio2+"'>Tmp</li>";
texto+="<li class='tab3' ontouchend='"+sitio3+"'>Snt</li>";
texto+="<li class='tab4' ontouchend='"+sitio4+"'>Com</li>";
texto+="<li class='tab5' ontouchend='"+sitio5+"'>Lct</li>";
texto+="<li class='tab6' ontouchend='"+sitio6+"'>&nbsp;Pf&nbsp;</li>";
texto+="<li class='tab7' ontouchend='"+sitio7+"'>&nbsp;PE&nbsp;</li>";
// texto+="<li class='tab8' ontouchend='"+sitio8+"'>IGMR</li>";
texto+="</ul>";
texto+="</div></div>";
} else if (mipreferencia['presentacionpestanas']==0) { // siempre visibles
 var texto="<div style='position: absolute; top: 0; left: 0; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: center; background: black;'> <div id=cabecera style='margin-left: 2%; margin-right: 2%; height: 2.1em; width: 96%; z-index: 50000; '>";


 texto+="<ul class=pestanas id='tabnav" + pestana +"'>";
texto+="<li class='tab1' ontouchend='"+sitio1+"'>Ord</li>";
texto+="<li class='tab2' ontouchend='"+sitio2+"'>Tmp</li>";
texto+="<li class='tab3' ontouchend='"+sitio3+"'>Snt</li>";
texto+="<li class='tab4' ontouchend='"+sitio4+"'>Com</li>";
texto+="<li class='tab5' ontouchend='"+sitio5+"'>Lct</li>";
texto+="<li class='tab6' ontouchend='"+sitio6+"'>&nbsp;Pf&nbsp;</li>";
texto+="<li class='tab7' ontouchend='"+sitio7+"'>&nbsp;PE&nbsp;</li>";
// texto+="<li class='tab8' ontouchend='"+sitio8+"'>IGMR</li>";
texto+="</ul>";
texto+="</div></div>";
} else { // es decir, 1 visibles mediante botón

 var texto="<style> #contenedor { top: 0; } </style><div id=cabecera style='position: absolute; top: 0; left: 0 ; height: 100%; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: left; width: auto; opacity: .9; background: transparent; padding-top: 10%; z-index: 50000; '> ";
 texto+="<div style='margin-top: 10%;'><div id=icono_abajo style='float: right; padding: 1em 0 1em 1em; display: none;' ontouchend= 'document.getElementById(\"tabnav"+pestana+"\").style.display=\"none\"; this.style.display= \"none\"; document.getElementById(\"icono_arriba\").style.display=\"block\"; $(\"#cabecera\").css(\"background\",\"transparent\"); '><img src='../"+directorio2+"izquierda.png'' style='height: 1.6em; float: right;'></div><div id=icono_arriba style='float: left; padding: 1em 1em 1em 0; display: block;' ontouchend= 'document.getElementById(\"tabnav"+pestana+"\").style.display=\"block\"; this.style.display= \"none\"; document.getElementById(\"icono_abajo\").style.display=\"block\"; this.style.display= \"none\"; $(\"#cabecera\").css(\"background\",\"#440000\");' ><img src='../"+directorio2+"derecha2.png'' style=' height: 1.6em;'></div></div><div style='float:left;'><ul class=ul_pestanas id='tabnav" + pestana +"' style='display: none; padding: 0; ' >";
texto+="<li class='tab1' style=' display: block; width:100%; ' ontouchend='"+sitio1+"'>Ordo missæ</li>";
texto+="<li class='tab2' style='display: block; width:100%;' ontouchend='"+sitio2+"'>Proprium de tempore</li>";
texto+="<li class='tab3' style=' display: block; width:100%;' ontouchend='"+sitio3+"'>Proprium sanctorum</li>";
texto+="<li class='tab4' style=' display: block; width:100%;' ontouchend='"+sitio4+"'>Communia</li>";
texto+="<li class='tab5' style=' display: block; width:100%;' ontouchend='"+sitio5+"'>Lectionarium</li>";
texto+="<li class='tab6' style=' display: block; width:100%;' ontouchend='"+sitio6+"'>Præfatio</li>";
texto+="<li class='tab7' style=' display: block; width: 100%;' ontouchend='"+sitio7+"'>Prex Eucharistica</li>";
texto+="</ul></div>";
texto+="</div>";
}
}
 document.write(texto);


 // menu para guardar posicion de lecturas

 texto="<div id=menu_grabar style='position: absolute; bottom: 2em; right: 50%; width: auto; font-weight: bold; display: none; z-index: 30000; text-align: right;' ><ul class=ul_normal id=tab_grabar >"

 if (mipestana=='le' ) {
 texto+="<li ontouchend='cambia_vista(\"menu_grabar\"); pon_pref(\"mr_primera\", dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") ); ' >L-I</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_grabar\"); pon_pref(\"mr_salmo\", dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") ); ' >Psl</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_grabar\"); pon_pref(\"mr_segunda\", dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") ); ' >L-II</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_grabar\"); pon_pref(\"mr_aleluya\", dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") ); ' >All</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_grabar\"); pon_pref(\"mr_evangelio\", dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") )'; ' >Ev</li>"
 }
 texto+="<li id=titulo01 ontouchend='cambia_vista(\"menu_grabar\"); titulo1=prompt(\"Titulum 1:\" , \"- 1 -\"); if (titulo1!= null ) { pon_pref(\"titulo1\", titulo1); } ; pon_pref(\"mr_alia1\",dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") );' >- 1 -</li>"
 texto+="<li id=titulo02 ontouchend='cambia_vista(\"menu_grabar\"); titulo1=prompt(\"Titulum 2:\" , \"- 2 -\"); if (titulo1!= \"\") { pon_pref(\"titulo2\", titulo1); } ; pon_pref(\"mr_alia2\",dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") );' >- 2 -</li>"
 texto+="<li id=titulo03 ontouchend='cambia_vista(\"menu_grabar\"); titulo1=prompt(\"Titulum 3:\" , \"- 3 -\"); if (titulo1!= \"\") { pon_pref(\"titulo3\", titulo1); } ; pon_pref(\"mr_alia3\",dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") );' >- 3 -</li>"
 texto+="<li id=titulo04 ontouchend='cambia_vista(\"menu_grabar\"); titulo1=prompt(\"Titulum 4:\" , \"- 4 -\"); if (titulo1!= \"\") { pon_pref(\"titulo4\", titulo1); } ; pon_pref(\"mr_alia4\",dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") );' >- 4 -</li>"
 texto+="<li id=titulo05 ontouchend='cambia_vista(\"menu_grabar\"); titulo1=prompt(\"Titulum 5:\" , \"- 5 -\"); if (titulo1!= \"\") { pon_pref(\"titulo5\", titulo1); } ; pon_pref(\"mr_alia5\",dime_pref(\"lh\"+mipestana+puntero , \"noExiste\") );' >- 5 -</li>"
 texto+="</ul></div>";
 document.write(texto);

 texto="<div id=menu_ira style='position: absolute; bottom: 2em; left: 50%; width: auto; font-weight: bold; display: none; z-index: 30000;' ><ul class=ul_normal id=tab_ira >"

 texto+="<li ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_primera\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_primera\", \"noExiste\"); } else alert (\"Ignotum\"); ' >L-I</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_salmo\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_salmo\", \"noExiste\"); } else alert (\"Ignotum\"); ' >Psl</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_segunda\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_segunda\", \"noExiste\"); } else alert (\"Ignotum\"); ' >L-II</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_aleluya\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_aleluya\", \"noExiste\"); } else alert (\"Ignotum\"); ' >All</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_evangelio\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_evangelio\", \"noExiste\"); } else alert (\"Ignotum\"); ' >Ev</li>"
 texto+="<li id=titulo1 ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_alia1\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_alia1\", \"noExiste\"); } else alert (\"Ignotum\"); ' >- 1 -</li>"
 texto+="<li id=titulo2 ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_alia2\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_alia2\", \"noExiste\"); } else alert (\"Ignotum\"); ' >- 2 -</li>"
 texto+="<li id=titulo3 ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_alia3\",0)!=0 ) { window.location.href = dime_pref(\"mr_alia3\", \"noExiste\"); } else alert (\"Ignotum\"); ' >- 3 -</li>"
 texto+="<li id=titulo4 ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_alia4\" , 0 )!=0 ) { window.location.href = dime_pref(\"mr_alia4\", \"noExiste\"); } else alert (\"Ignotum\"); ' >- 4 -</li>"
 texto+="<li id=titulo5 ontouchend='cambia_vista(\"menu_ira\"); if (dime_pref(\"mr_alia5\",0)!=0 ) { window.location.href = dime_pref(\"mr_alia5\", \"noExiste\"); } else alert (\"Ignotum\"); ' >- 5 -</li>"
 texto+="</ul></div>";
 document.write(texto);








 if (mipreferencia['tipoletra']==1) {
mitexto=' body { font-family: "Times New Roman"; } '
} else mitexto=' body { font-family: "Arial"; } '

 if (mipreferencia['fondo']==0) {
mitexto+=' body {background-color: #ffffff; background-image: none; font-size: '+ mipreferencia['tamanotexto']+'pt } ';
} else if (mipreferencia['fondo']==1) {
mitexto+=' body { font-size: '+ mipreferencia['tamanotexto']+'pt; } ';
}
if ((miarchivo != 'indice_tiempos.html') && (miarchivo != 'indice_comunes.html') && (miarchivo != 'indice_santos.html') && (miarchivo != 'indice_lecturas.html') && (miarchivo != 'indice_prefacios.html') && (miarchivo != 'indice_pleg_euc.html') && (miarchivo != 'indice_ogmr.html')) {
mitexto +=' .red , .roja { font-size: 80%; } .rubrica { font-size: '+ mipreferencia['tamanorubrica']+'%; } '; }


if (mipreferencia['fondo']==0 ) {
mitexto += ' .boton , .boton span.red , a.boton { background: url("../'+directorio2+'boton2.png") top right no-repeat; color: #660000; }'
} else mitexto += ' span.boton , .boton span.red , a.boton { background: url("../'+directorio2+'boton.png") top right no-repeat; color: white; }'

 if (mipreferencia['oracionestodos']==0) {
mitexto+=' .oracionestodos {font-style: normal; font-weight: normal; } ';
} else if (mipreferencia['oracionestodos']==1) {
mitexto+=' .oracionestodos { font-style: italic; font-weight: normal; } .oracionestodos .rubrica , .oracionestodos .red { font-style: normal; font-weight: normal; } ';
} else mitexto+=' .oracionestodos { font-style: normal; font-weight: bold; } .oracionestodos .rubrica , .oracionestodos .red { font-style: normal; font-weight: normal; } ';


// presentaciontexto: 0	Sin traduccion	1	dos columnas	2	cambio tocando
	 if (mipreferencia['presentaciontexto']==0 || ( mipreferencia['misal_pral'] == mipreferencia['segundoidioma'] ) ) {
		mitexto +=' div, div .re , hr .re { float: left; width: 100%; } .'+ mimisal_1+' , .lengua1 { float: left; width: 98%; display: block; } .botonlengua { background-image: none; padding-left: 0; padding-right: 0; } ';
		} else if (mipreferencia['presentaciontexto']==1) {
		mitexto +=' div, div .re , hr .re { float: left; width: 100%; } .'+ mimisal_1+' , .lengua1 { float: left; width: 47%; display: block; } .'+ mimisal_2+' , .lengua2 { float: right; display: block; width: 47%; margin-right: 1%;} .botonlengua { background-image: none; padding-left: 0; padding-right: 0; } h1 { width: 80%; }';
		} else if (mipreferencia['presentaciontexto']==2) {
		mitexto +=' div, div .re , hr .re { float: left; width: 100%; } .'+ mimisal_1+' , .lengua1 { float: left; width: 98%; display: block; } .'+ mimisal_2+' , .lengua2 { float: left; display: none; width: 98%; } .botonlengua { background-image: none; padding-left: 0; padding-right: 0; } ';
		}

	if (mipreferencia['presentaciontexto']!=1) {

// presentacionrespuestas: 	1	idioma misal	2 segundo idioma	3	ambos(filas)	4	ambos(columnas)	5	cambio tocando el texto
		if (mipreferencia['presentacionrespuestas']==1 || mipreferencia['presentacionrespuestas']==5 || ( mipreferencia['misal_pral'] == mipreferencia['segundoidioma'] )) {
		mitexto +=' .pueblo .'+ mimisal_2+' { width: 98%; display: none; } ' ;
		mitexto +=' .pueblo .'+ mimisal_1+' { width: 98%; display: block;} '
		} else if (mipreferencia['presentacionrespuestas']==2) {
		mitexto +=' .pueblo .'+ mimisal_1+' { width: 98%; display: none; } '
		mitexto +=' .pueblo .'+ mimisal_2+' { width: 98%; display: block; } ' ;
		} else if (mipreferencia['presentacionrespuestas']==3) {
		mitexto +=' .pueblo .'+ mimisal_1+' , .pueblo .'+ mimisal_2+' { width: 98%; display: block; float: left; } ';
		} else if (mipreferencia['presentacionrespuestas']==4) {
		mitexto +=' .pueblo .'+ mimisal_1+' { width: 47%; display: block; float: left; } .pueblo .'+ mimisal_2+' { width: 47%; display: block; float: right; } ';
		}
	}	else {
		mitexto +=' .pueblo .'+ mimisal_1+' { width: 47%; display: block; float: left; } , .pueblo .'+ mimisal_2+' { width: 47%; display: block; float: right; } ';
		}

	mitexto +=' .misal_'+ mimisal_1+' { display: inline-block; } ';



if (mipreferencia['presentaciontexto'] !=1) { mitexto += ' .solodos { text-align: right; } .solodos span { margin-right: 10%; } ' ; } else mitexto += ' .solodos { text-align: center; } '

if (miciclo=='A') { 	mitexto +=' .cicloB { display: none; } .cicloC { display: none; } .cicloA { display: block; } '
	} else if (miciclo=='B') { mitexto +=' .cicloA { display: none; } .cicloC { display: none; } .cicloB { display: block; } '
	} else if (miciclo=='C') mitexto +=' .cicloA { display: none; } .cicloB { display: none; } .cicloC { display: block; } '
if (tipoanno=='impar') { 	mitexto +=' .annosecundo { display: none; } .annoprimo { display: block; } '
	} else if (tipoanno=='par') mitexto +=' .annoprimo { display: none; } .annosecundo { display: block; } '

 var parcial = getUrlVars()["parcial"];
if (typeof parcial === 'undefined') mitexto +=' .parcial { display: block; } '



document.write ('<style> '+ mitexto + ' </style>');


 }

function pinta_botones(directorio,pestana) {
// Esta funcin, además de poner los botones al final de la página, pone las preferencias en los links, y esconde cosas según las preferencias.
pon_pref('cambiartamano', 0)

var miarchivo = parseURL(window.location.href).file
if ((miarchivo != 'indice_tiempos.html') && (miarchivo != 'indice_comunes.html') && (miarchivo != 'indice_santos.html') && (miarchivo != 'indice_lecturas.html') && (miarchivo != 'indice_prefacios.html') && (miarchivo != 'indice_pleg_euc.html') && (miarchivo != 'indice_ogmr.html')) {
	directorio2 = '../'
 } else directorio2 = ''

 switch (pestana) {
 case 'o':
	pag_origen='ordinario/ordinario.html';
 break;
 case 't':
	pag_origen='indice_tiempos.html';
 break;
 case 's':
	pag_origen='indice_santos.html';
 break;
 case 'c':
	pag_origen='indice_comunes.html';
 break;
 case 'le':
	pag_origen='indice_lecturas.html';
 break;
 case 'pf':
	pag_origen='indice_prefacios.html';
 break;
 case 'pe':
	pag_origen='indice_pleg_euc.html';
 break;
 case 'i':
	pag_origen='indice_ogmr.html';
 break;
 }

 // if (pestana=='o') { pag_origen='ordinario/ordinario.html'; } else
 // if (pestana=='t') { pag_origen='indice_tiempos.html'; } else
 // if (pestana=='s') { pag_origen='indice_santos.html'; } else
 // if (pestana=='c') { pag_origen='indice_comunes.html'; } else
 // if (pestana=='le') { pag_origen='indice_lecturas.html'; } else
 // if (pestana=='pf') { pag_origen='indice_prefacios.html'; } else
 // if (pestana=='pe') { pag_origen='indice_pleg_euc.html'; } else
 // if (pestana=='i') { pag_origen='indice_ogmr.html'; }
 pag_origen = directorio2 + pag_origen;

 // menu diamante
 nuevoidioma2 = mipreferencia['misal_pral']
 nuevoidioma1 = mipreferencia['segundoidioma']

 masgrande = eval(mipreferencia['tamanotexto']) + 1
 maspeq = eval(mipreferencia['tamanotexto']) - 1


 texto="<div id=menu_diamante style='position: absolute; bottom: 2em; width: auto; margin-left: 30% ; margin-right: auto ; font-weight: bold; display: none; z-index: 30000; text-align: left;' ><ul class=ul_normal id=tab_diamante>"

 if (estoymac) texto+="<li id=indexdiamante ontouchend=\" cambia_vista('menu_diamante'); window.location='"+directorio2+"../index.html' ; return false; \")'>Initium</li>"

 if ((pestana!='dev') && (pestana!='sac')) {
 texto+="<li ontouchend=\" pon_pref('lh"+pestana+"_ultimo', 499 );pon_pref('lh"+pestana+"_tope','499'); pon_pref('lh"+pestana+"_puntero', 499 ); window.location='"+pag_origen+"' ; \")'>&#9632;</li>"

 }
 if (mipreferencia['tipoletra']==1) { nuevaletra=0; } else nuevaletra=1;
 if (nuevoidioma2 != nuevoidioma1 && mipreferencia['presentaciontexto']!=0 ) {
 texto+="<li ontouchend=' cambia_idiomas(nuevoidioma1,nuevoidioma2); myScroll.refresh();' >"+"&#9664;&#xFE0E; &#9654;&#xFE0E;" +"</li>"
 }
// window.location.reload();
// $(\".\"+mimisal_1).css(\"display\", \"none\"); $(\".\"+mimisal_2).css(\"display\", \"block\"); ayuda=mimisal_2 ; mimisal_2=mimisal_1 ; mimisal_1 = ayuda; myScroll.refresh;
texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); window.location=\""+directorio2+"feria_actual.html\"; return false;' >"+"calend" +"</li>"
 if (estoymac) {
texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); window.location=\""+directorio2+"ayuda.html\"; return false' >"+"aux" +"</li>";
 }
if (mipestana=='o')
// texto+="<li ontouchend='pon_pref(\"libro\",$(\"#scroller\").html()); window.location=\""+directorio2+"modolibro.html\"; return false; ' ><img style='height: 1em;' id='bot_libro' src=\""+directorio+"libro.png\"></li>";  //
texto+="<li ontouchend='cambia_pref(\"tipoletra\", nuevaletra ); cambia_fuente(); myScroll.refresh(); ' ><span style=' font-family: Times New Roman; '>ABC</span> &nbsp;&#9664;&#xFE0E; &#9654;&#xFE0E;&nbsp; <span style=' font-family: Arial; '>ABC</span></li>"
texto+="<li id='titulo002' ontouchend='cambia_pref(\"tamanotexto\", masgrande ); cambia_tamanoletra(masgrande); myScroll.refresh();' >"+mipreferencia['tamanotexto']+"&nbsp;&#9654;&#xFE0E;&nbsp;<span style=' font-size: "+masgrande+ "pt; '>"+masgrande+"</span>" +"</li>"
texto+="<li id='titulo003' ontouchend='cambia_pref(\"tamanotexto\", maspeq ); cambia_tamanoletra(maspeq); myScroll.refresh(); ' >"+mipreferencia['tamanotexto']+"&nbsp;&#9654;&#xFE0E;&nbsp;<span style=' font-size: "+maspeq+ "pt; '>"+maspeq+"</span>" +"</li>"
/*
 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); cambia_pref(\"misal_pral\", "+nuevoidioma1+" ); cambia_pref(\"segundoidioma\", "+nuevoidioma2+" ); window.location= dime_pref(\"lh\" + mipestana + puntero); ' >"+"&#9664;&#xFE0E; &#9654;&#xFE0E;" +"</li>"
texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); cambia_pref(\"tipoletra\", "+nuevaletra+" ); window.location.reload(); ' ><span style=' font-family: Times New Roman; '>ABC</span> &#9664;&#xFE0E; &#9654;&#xFE0E; <span style=' font-family: Arial; '>ABC</span></li>"
texto+="<li id='titulo002' ontouchend='cambia_vista(\"menu_diamante\"); cambia_pref(\"tamanotexto\", "+masgrande+" ); window.location.reload(); ' >"+mipreferencia['tamanotexto']+"&#9654;&#xFE0E;<span style=' font-size: "+masgrande+ "pt; '>"+masgrande+"</span>" +"</li>"
texto+="<li id='titulo003' ontouchend='cambia_vista(\"menu_diamante\"); cambia_pref(\"tamanotexto\", "+maspeq+" ); window.location.reload(); ' >"+mipreferencia['tamanotexto']+"&#9654;&#xFE0E;<span style=' font-size: "+maspeq+ "pt; '>"+maspeq+"</span>" +"</li>"



 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); pon_pref(\"mr_evangelio\", dime_pref(\"lh\"+mipestana+puntero, \"noExiste\") )'; ' >Ev</li>"

 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); pon_pref(\"mr_alia1\", dime_pref(\"lh\"+mipestana+puntero, \"noExiste\") ); ' >- 1 -</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); pon_pref(\"mr_alia2\", dime_pref(\"lh\"+mipestana+puntero, \"noExiste\") ); ' >- 2 -</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); pon_pref(\"mr_alia3\", dime_pref(\"lh\"+mipestana+puntero, \"noExiste\") ); ' >- 3 -</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); pon_pref(\"mr_alia4\", dime_pref(\"lh\"+mipestana+puntero, \"noExiste\") ); ' >- 4 -</li>"
 texto+="<li ontouchend='cambia_vista(\"menu_diamante\"); pon_pref(\"mr_alia5\", dime_pref(\"lh\"+mipestana+puntero, \"noExiste\") ); ' >- 5 -</li>"
 */
 texto+="<li ontouchend='modocopia = ! modocopia ; if (modocopia) { myScroll.disable(); $(this).css(\"background-color\",\"green\"); } else {myScroll.enable(); $(this).css(\"background-color\",\"maroon\"); }; cambia_vista(\"menu_diamante\"); ' ><img style='height: 1em;' id='bot_copy' src=\""+directorio+"copy-icon.png\"></li>"
 texto+="</ul></div>";

 document.write(texto);
 if (mipreferencia['botoneszurdos']==1) {
 boton2="<li class=botonabajo ontouchend=\"botonPantArriba();\"><img id='bot_arriba' src=\""+directorio+"angle-double-up2.png\" style=\" height: 1.6em;\" border=0 ></li>"
 boton1="<li class=botonabajo ontouchend=\"botonPantAbajo();\"><img id='bot_abajo' src=\""+directorio+"angle-double-down2.png\" style=\" height: 1.6em;\"></li>"
 } else {
 boton1="<li class=botonabajo ontouchend=\"botonPantArriba();\"><img id='bot_arriba' src=\""+directorio+"angle-double-up2.png\" style=\" height: 1.6em;\" border=0 ></li>"
 boton2="<li class=botonabajo ontouchend=\"botonPantAbajo();\"><img id='bot_abajo' src=\""+directorio+"angle-double-down2.png\" style=\" height: 1.6em;\"></li>"
 }



 if (mipreferencia['presentacionbotones']==3) { //emergentes con boton arriba/abajo

var texto="<div id=piedepantalla2 ontouchend='if (ayuda==0) { toggle_botones(1);} else ayuda=0; ' style='display: none; position: absolute; bottom: 0; text-align: center; z-index:3000; ' ><img ontouchend='botonPantAbajo();' style='z-index: 3001; margin-left: auto; margin-right: auto; height: 1.6em; padding-left: .5em; padding-right: .5em;' src=\""+directorio+"angle-double-down-rojo.png\" ></div>"


texto+="<div id=piedepantalla class=gradienterojo style='position: absolute; bottom: 0; left: 0; width: 100%; height: 2.1em; display: table; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: center; vertical-align: bottom; z-index: 2;' ontouchend='if (botonesactivos==0) toggle_botones(1);'>";
texto+="<ol id=menupie >"+boton1;

texto+="<li ontouchend=\"boton_atras(mipestana);\"'><img id='bot_atras' src=\""+directorio+"chevron-left2.png\" style=\" height: 1.6em\" ></li> ";
texto+="<li class=botonabajo ontouchend=\"cambia_titulos(); cambia_vista('menu_grabar');\"'><img id='bot_grabar' src=\""+directorio+"bookmark-o2.png\" style=\" height: 1.6em\" ></li> ";

texto+="<li ontouchend=\"cambia_vista('menu_diamante');\"'><img id='bot_indice' src=\""+directorio+"asterisk2.png\" style=\" height: 1.6em;\" ></li> ";
texto+="<li class=botonabajo ontouchend=\"cambia_titulos(); cambia_vista('menu_ira');\"'><img id='bot_rombo' src=\""+directorio+"goto_bookmark2.png\" style=\" height: 1.6em\" ></li> ";
texto+="<li ontouchend=\"boton_adelante(mipestana);\"'><img id='bot_adelante' src=\""+directorio+"chevron-right2.png\" style=\" height: 1.6em;\" ></li> ";


texto+= boton2+"</ol>";

texto+="</div>";
} else if (mipreferencia['presentacionbotones']==4) { //emergentes

 var texto="<div id=piedepantalla class=gradienterojo style='position: absolute; bottom: 0; left: 0; width: 100%; height: 2.1em; display: table; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: center; vertical-align: bottom; z-index: 2;' ontouchend='if (botonesactivos==0) toggle_botones(1);'>";
texto+="<ol id=menupie >"+boton1;

texto+="<li ontouchend=\"boton_atras(mipestana);\"'><img id='bot_atras' src=\""+directorio+"chevron-left2.png\" style=\" height: 1.6em\" ></li> ";
texto+="<li class=botonabajo ontouchend=\"cambia_titulos(); cambia_vista('menu_grabar');\"'><img id='bot_grabar' src=\""+directorio+"bookmark-o2.png\" style=\" height: 1.6em\" ></li> ";

texto+="<li ontouchend=\"cambia_vista('menu_diamante');\"'><img id='bot_indice' src=\""+directorio+"asterisk2.png\" style=\" height: 1.6em;\" ></li> ";
texto+="<li class=botonabajo ontouchend=\"cambia_titulos(); cambia_vista('menu_ira');\"'><img id='bot_rombo' src=\""+directorio+"goto_bookmark2.png\" style=\" height: 1.6em\" ></li> ";
texto+="<li ontouchend=\"boton_adelante(mipestana);\"'><img id='bot_adelante' src=\""+directorio+"chevron-right2.png\" style=\" height: 1.6em;\" ></li> ";


texto+= boton2+"</ol>";

texto+="</div>";
} else if (mipreferencia['presentacionbotones']==0) { //siempre visibles
 var texto="<div id=piedepantalla class=gradienterojo style='position: absolute; bottom: 0; left: 0; width: 100%; height: 2.1em; display: table; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: center; vertical-align: bottom; z-index: 2;' >";
texto+="<ol id=menupie >"+boton1;

texto+="<li ontouchend=\"boton_atras(mipestana);\"'><img id='bot_atras' src=\""+directorio+"chevron-left2.png\" style=\" height: 1.6em\" ></li> ";
texto+="<li class=botonabajo ontouchend=\"cambia_titulos(); cambia_vista('menu_grabar');\"'><img id='bot_grabar' src=\""+directorio+"bookmark-o2.png\" style=\" height: 1.6em\" ></li> ";

texto+="<li ontouchend=\"cambia_vista('menu_diamante');\"'><img id='bot_indice' src=\""+directorio+"asterisk2.png\" style=\" height: 1.6em;\" ></li> ";
texto+="<li class=botonabajo ontouchend=\"cambia_titulos(); cambia_vista('menu_ira');\"'><img id='bot_rombo' src=\""+directorio+"goto_bookmark2.png\" style=\" height: 1.6em\" ></li> ";
texto+="<li ontouchend=\"boton_adelante(mipestana);\"'><img id='bot_adelante' src=\""+directorio+"chevron-right2.png\" style=\" height: 1.6em;\" ></li> ";


texto+= boton2+"</ol>";

texto+="</div>";
} else { //visibles mediante botón


var texto="<style> #contenedor { bottom: 0; } </style><div id=piedepantalla class=gradienterojo style='position: absolute; top: 0; right: 0 ; height: 100%; font-size: "+mipreferencia['tamanomenus']+"pt; text-align: center; width: auto; opacity: .9; background: transparent; z-index: 2; padding-top: 10%;'> ";
texto+="<div style='margin-top: 10%;'><div id=icono_izquierda style='float: left; padding: 1em 1em 1em 0; display: block; text-align: center; ' ontouchend='document.getElementById(\"botones\").style.display=\"block\"; $(\"#piedepantalla\").css(\"background\",\"-webkit-linear-gradient(left, #880000 50%, #440000 100%)\"); this.style.display= \"none\"; document.getElementById(\"icono_derecha\").style.display=\"inline\"; '><img src='../"+directorio2+"izquierda2.png' style='float: right; height: 1.6em;'></div><div id=icono_derecha style='float: right; padding: 1em 0 1em 1em; display: none;' ontouchend= 'document.getElementById(\"botones\").style.display=\"none\"; this.style.display= \"none\"; document.getElementById(\"icono_izquierda\").style.display=\"inline\"; this.style.display= \"none\"; $(\"#piedepantalla\").css(\"background\",\"transparent\");' ><img src='../"+directorio2+"derecha.png'' style='height: 1.6em;'></div></div><div style='float:right;'>";

 // var texto="<div id=piedepantalla style='position: absolute; bottom: 0; left: 0; width: 100%; text-align: center; vertical-align: bottom; z-index: 2;' >";
texto+="<ul class=ul_pestanas id=botones style='display: none; padding: 0; ' >"
texto+="<li class=botonabajo ontouchend=\" myScroll.scrollTo(0, -avancepantalla, 200, true);\"'>"
texto+="<img id='bot_arriba' src=\""+directorio+"angle-double-up2.png\" style=\"width: 1.6em; height: 1.6em;\" border=0 ></li>";
texto+="<li class=botonabajo ontouchend=\"setTimeout(function() { boton_atras(mipestana); }, 500);\"'><img id='bot_atras' src=\""+directorio+"chevron-left2.png\" style=\"width: 1.6em; height: 1.6em\" ></li>";
texto+="<li class=botonabajo ontouchend=\"cambia_vista('menu_grabar');\"'><img id='bot_grabar' src=\""+directorio+"bookmark-o2.png\" style=\"width: 1.6em; height: 1.6em\" ></li>";
texto+="<li class=botonabajo ontouchend=\"cambia_vista('menu_diamante');\"'><img id='bot_indice' src=\""+directorio+"asterisk2.png\" style=\"width: 1.6em; height: 1.6em;\" ></li>";
texto+="<li class=botonabajo ontouchend=\"cambia_vista('menu_ira');\"'><img id='bot_rombo' src=\""+directorio+"goto_bookmark2.png\" style=\"width: 1.6em; height: 1.6em\" ></li>";
texto+="<li class=botonabajo ontouchend=\"setTimeout(function() { boton_adelante(mipestana); }, 500);\"'><img id='bot_adelante' src=\""+directorio+"chevron-right2.png\" style=\"width: 1.6em; height: 1.6em;\" ></li>";
texto+="<li class=botonabajo ontouchend=\" myScroll.scrollTo(0, avancepantalla, 200, true);\"'><img id='bot_arriba' src=\""+directorio+"angle-double-down2.png\" style=\"width: 1.6em; height: 1.6em;\"></li></ul>";
texto+="</div></div>";


/*
 texto+="<div><img id=icono_abajo src='../"+directorio2+"izquierda.png'' ontouchend= 'document.getElementById(\"tabnav"+pestana+"\").style.display=\"none\"; this.style.display= \"none\"; document.getElementById(\"icono_arriba\").style.display=\"block\"; ' style='height: 1.6em; display: none;'><img id=icono_arriba src='../"+directorio2+"derecha.png'' ontouchend= 'document.getElementById(\"tabnav"+pestana+"\").style.display=\"block\"; this.style.display= \"none\"; document.getElementById(\"icono_abajo\").style.display=\"block\"; this.style.display= \"none\";' style='height: 1.6em;'></div><div style='float:left;'>
 <ul id='tabnav" + pestana +"' style='display: none; padding: 0; ' >";
texto+="<li class='tab1' style=' display: block; height: 2em; width:100%;' ontouchend='"+sitio1+"'>Ordo missæ</li>";
texto+="<li class='tab2' style=' display: block; height: 2em; width:100%;' ontouchend='"+sitio2+"'>Proprium de tempore</li>";
texto+="<li class='tab3' style=' display: block; height: 2em; width:100%;' ontouchend='"+sitio3+"'>Proprium sanctorum</li>";
texto+="<li class='tab4' style=' display: block; height: 2em; width:100%;' ontouchend='"+sitio4+"'>Communia</li>";
texto+="<li class='tab5' style=' display: block; height: 2em; width:100%;' ontouchend='"+sitio5+"'>Lectiones</li>";
texto+="<li class='tab6' style=' display: block; height: 2em; width:100%;' ontouchend='"+sitio6+"'>Pæfatio</li>";
texto+="<li class='tab7' style=' display: block; height: 2em; width: 100%;' ontouchend='"+sitio7+"'>Prex Eucharistica</li>";
texto+="</ul></div>";
texto+="</div>";
*/
}
// ponemos ahora los botones.
document.write(texto);
/*
if(mipestana=='o' && (typeof mipreferencia['dispara'] === 'undefined' )) {
var mi_texto=dime_pref('status_ord','nada')
		$('#scroller').html(mi_texto)
	} else {
	*/

/*
//Dependiendo de la preferencia de respuestas pueblo tendremos que esconder algunas cosas.

if (mipreferencia['presentaciontexto']!=3 && mipreferencia['presentaciontexto']!=4) {
var all = document.getElementsByClassName("pueblo");

for (var i=0, max=all.length; i < max; i++) {

if (mipreferencia['presentacionrespuestas']==1 || mipreferencia['presentacionrespuestas']==5) {
	 	 esconde_clase(all[i],'latin',false); esconde_clase(all[i],'cast',true);
} else if (mipreferencia['presentacionrespuestas']==2 || mipreferencia['presentacionrespuestas']==6) {
	 	 esconde_clase(all[i],'latin',true); esconde_clase(all[i],'cast',false);
} else if (mipreferencia['presentacionrespuestas']>=3 ) {
	 	 esconde_clase(all[i],'latin',false); esconde_clase(all[i],'cast',false);
}


}

}
*/

// Por último si hemos venido a un día concreto, haremos que se muestre (los demás no)
if ($(window.location.hash).length) if ($(window.location.hash).hasClass('dia')) $(window.location.hash).css('display','block')

 var parcial = getUrlVars()["parcial"];
// console.log('parcial '+parcial+'---')
// console.log('embutidos '+embutidos+'---')
 var miarchivo = parseURL(window.location.href).file
if (typeof parcial != 'undefined') {
if (miarchivo != 'ordinario.html' && miarchivo != 'bendiciones.html') document.getElementById('parcial_'+parcial).style.display='block'
 }



 // }
arreglaCarga(mipestana)



//navigator.app.exitApp();
}

function pon_pref(key,value) {
window.localStorage.setItem(key, value);
//console.log('Guardo: '+value + ' ... --> ... ' + key)
 }

function saveUltimo(pestana) {

 pon_pref('lh' + pestana + puntero ,window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos +window.location.hash);
 pon_pref('lh' + pestana + '_ultimo',puntero );
 pon_pref('lh' + pestana + '_tope',tope );

//if (pestana=='o') pon_pref('status_ord',$('#scroller').html())

//console.log('pestaña: '+pestana+' posicion: '+puntero+' Sitio:'+window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos +window.location.hash)
}

function sitioultimo(pestana) {
antiguo = dime_pref ('lh'+pestana+'_ultimo' , "noExiste" )
 var miarchivo = parseURL(window.location.href).file
mipath=parseURL(window.location.href).path
mipath=mipath.substring(0,mipath.lastIndexOf('/www/')+5)

if (antiguo == 'noExiste' ) {
 var miarchivo = parseURL(window.location.href).file


 if (pestana=='o') { resultado=mipath+"misal/ordinario/ordinario.html?" ; } else
 if (pestana=='t') { resultado=mipath+"misal/indice_tiempos.html?" ; } else
 if (pestana=='s') { resultado=mipath+"misal/indice_santos.html?" ; } else
 if (pestana=='c') { resultado=mipath+"misal/indice_comunes.html?" ; } else
 if (pestana=='le') { resultado=mipath+"misal/indice_lecturas.html?" ; } else
 if (pestana=='pf') { resultado=mipath+"misal/indice_prefacios.html?" ; } else
 if (pestana=='pe') { resultado=mipath+"misal/indice_pleg_euc.html?" ; } else
 if (pestana=='i') { resultado=mipath+"misal/indice_ogmr.html?" ; }

 pon_pref('lh' + pestana + '_ultimo',499 );
	 pon_pref('lh' + pestana + '_tope',499 );
		pon_pref('lh' + pestana + '_puntero',499 );

} else { resultado= dime_pref('lh'+pestana+antiguo , "noExiste")
resultado= mipath+resultado.substring(resultado.lastIndexOf("www/")+4)
}

return resultado
}

function vete_a(miurl) {
 var a = document.createElement('a');
 a.href = miurl;
	var desplaz=parseURL(a)
// console.log('EMPIEZO vete_a desde '+window.location.href + ' a '+ a.href)
hayorigen = false
haydestino = false
var dirorigen = parseURL(window.location.href)


//console.log('Voy de window.location.href='+window.location.href)
//console.log('aquí: a.href='+a.href)
if (a.pathname==window.location.pathname) {

	if ($(window.location.hash).hasClass('dia')) {
		origen = $(window.location.hash);
		hayorigen=true;
		// console.log('origen es '+window.location.hash)


		}


if (a.hash) if ($(a.hash).length) {
	if ($(a.hash).hasClass('dia')) {
		destino = $(a.hash);
		// console.log('destino es '+a.hash)
		haydestino=true;
		coletilla=a.hash


	} }


if (hayorigen && haydestino) {
$(destino).css('display','block')
$(origen).css('display','none')
pon_pref('lh' + mipestana + puntero , window.location.pathname+ coletilla)

saveUltimo(mipestana)
arreglaCarga(mipestana)
//console.log ('Yendo a '+window.location.pathname + coletilla)
window.location.hash=coletilla
//window.location.href=window.location.pathname + coletilla
}



// console.log('FIN de vete_a')

myScroll.refresh()
if (typeof destino !== 'undefined' && !haydestino ) myScroll.scrollToElement(destino, 50)

return false

	} 	else 		{
saveUltimo(mipestana)

	if (typeof desplaz.params.despl === 'undefined' ) {
		parcial = extrae_parcial(miurl)
		if (parcial =='') {
			window.location.href = a.pathname + a.hash;
		} else window.location.href = a.pathname + '?' + parcial.substr(1) + a.hash;
	} else window.location.href = a.pathname + '?' + 'despl='+desplaz.params.despl+extrae_parcial(miurl)+'&embutidos=' + desplaz.params.embutidos + a.hash;

	}





/* método antiguo
 var a = document.createElement('a');
 a.href = miurl;
	var desplaz=parseURL(a)

if (a.pathname==window.location.pathname) {

	if (document.getElementById(a.hash.substr(1)).className=='dia') {

		if (document.getElementById(window.location.hash.substr(1)).className=='dia') {

	document.getElementById(a.hash.substr(1)).style.display='block'
	document.getElementById(window.location.hash.substr(1)).style.display='none'
	window.location.hash=a.hash
	}

	}
pon_pref('lh' + mipestana + puntero , window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos + window.location.hash)



myScroll.refresh()
myScroll.scrollToElement(a.hash, 50)

return false

	} 	else 		{

	if (typeof desplaz.params.despl === 'undefined' ) {
	parcial = extrae_parcial(miurl)
	if (parcial =='') { 	window.location.href = a.pathname + a.hash; } else window.location.href = a.pathname + '?' + parcial.substr(1) + a.hash;
	} else window.location.href = a.pathname + '?' + 'despl='+desplaz.params.despl+extrae_parcial(miurl)+'&embutidos=' + desplaz.params.embutidos + a.hash;

	}

	*/
	}

function muestraono(miId,siono) {
//console.log('hola '+miId)
$('#'+miId).css('display')
if (siono) { $('#'+miId).css('display','block'); } else $('#'+miId).css('display','none');

// ahora guardamos el nuevo estado de lo que hemos variado en la variable embutidos
embutir(miId,$('#'+miId).css('display'))
pon_pref('lh' + mipestana + puntero , window.location.pathname+'?despl='+miposicion+'&embutidos=' + embutidos + window.location.hash)
myScroll .refresh()

}

function embutir(miId,mivalor) {

if ( typeof embutidos === 'undefined' || embutidos.length==0) {
embutidos = miId+ 'YYY' +mivalor
} else {
//		alert ('embutir :' + miId + ' / '+ mivalor + embutidos + embutidos.length)
		encontrado=false
		embutidos2=""

	var trocito=embutidos.split("XXX");
	var tamano = trocito.length,
 elemento = null;
for (var i = 0; i < tamano; i++) {
 miparrafo = trocito[i];

				mivariable=miparrafo.split('YYY')
				var otroId=mivariable[0]
				var otrovalor=mivariable[1]
			//		alert(otroId+otrovalor)
			if (otroId==miId) {
				encontrado=true
				otrovalor=mivalor
			}

			embutidos2 +=otroId+'YYY'+otrovalor+'XXX'

		}
		if (!encontrado) embutidos2 += miId + 'YYY' + mivalor + 'XXX'
		embutidos=embutidos2.substr(0,embutidos2.length-3)
	}
 //alert('embutidos :' + embutidos )
}

function toggle_botones(valor) {
if (mipreferencia['presentacionbotones']==4) {
if (valor==1) {
	$('#menupie').css('visibility','visible')
	$('#contenedor').css('bottom','2.3em');
	$('.botonabajo').css('display','')
	botonesactivos=1
	$('#piedepantalla').css('background','-webkit-linear-gradient(top, #880000 50%, #440000 100%)')
} else {
	$('#menupie').css('visibility','hidden')
	$('#contenedor').css('bottom',0);
	$('.botonabajo').css('display','none')
	botonesactivos=0
	$('#piedepantalla').css('background','transparent')
}
} else if (mipreferencia['presentacionbotones']==3) {
if (valor==1) {
	$('#menupie').css('visibility','visible')
	$('#contenedor').css('bottom','2.3em');
	$('.botonabajo').css('display','')
	botonesactivos=1
	$('#piedepantalla2').css('display','none')
	$('#piedepantalla').css('background','-webkit-linear-gradient(top, #880000 50%, #440000 100%)')
} else {
	$('#menupie').css('visibility','hidden')
	$('#contenedor').css('bottom',0);
	$('.botonabajo').css('display','none')
	botonesactivos=0
	$('#piedepantalla2').css('display','block')
	$('#piedepantalla').css('background','transparent')
}
}
}
function toggle_pestanas(valor) {

if (mipreferencia['presentacionpestanas']==3) {
if (valor==1) {
	$(mispestanas).css('visibility','visible')
	$('#contenedor').css('top','2.1em');
//	$('#cabecera').css('visibility','visible')
	$('.dia').css('padding-top',0);
	pestanasactivas=1
	$('#cabecera_back').css('background','black')
} else {
	$(mispestanas).css('visibility','hidden')
	$('#contenedor').css('top',0);
//	$('#cabecera').css('visibility','hidden')
	$('#cabecera_back').css('z-index','50000')
	pestanasactivas=0
	$('#cabecera_back').css('background','transparent')
	}
}
}

function cambia_idiomas(idioma1, idioma2) {

if (mipreferencia['presentaciontexto']==2) {
cambia_pref("presentaciontexto", 1 );

 	$('.'+idiomas[idioma2]).attr("style", "float: left; width: 47%; display: block; ")
	$('.'+idiomas[idioma1]).attr("style", " float: right; display: block; width: 47%; margin-right: 1%; ")

 } else if (mipreferencia['presentaciontexto']==1) {
cambia_pref("misal_pral", idioma1 );
cambia_pref("segundoidioma", idioma2 );
cambia_pref("presentaciontexto", 2 );

 	$('.'+idiomas[idioma1]).attr("style", "float: left; width: 98%; display: block; ")
	$('.'+idiomas[idioma2]).attr("style", " float: left; display: none; width: 98%; ")
 $('.misal_'+idiomas[idioma1]).attr("style", "display: inline-block; margin: 1%; overflow: hidden; text-overflow: ellipsis; ")
 $('.misal_'+idiomas[idioma2]).css("display", "none")
nuevoidioma2 = mipreferencia['misal_pral']
nuevoidioma1 = mipreferencia['segundoidioma']
 mimisal_1=idiomas[idioma1]
 mimisal_2=idiomas[idioma2]
 }


 }
function cambia_fuente() {
if (mipreferencia["tipoletra"]==1) {
$("body").css('font-family','Times New Roman');
nuevaletra=0;
} else {
$("body").css('font-family','Arial');
nuevaletra=1;
}
}
function cambia_tamanoletra(num) {
$("body").css('font-size',num+'pt');
maspeq=num-1;
masgrande=num+1;
$('#titulo002').html(mipreferencia['tamanotexto']+"&nbsp;&#9654;&#xFE0E;&nbsp;<span style=' font-size: 120%; '>"+masgrande+"</span>");
$('#titulo003').html(mipreferencia['tamanotexto']+"&nbsp;&#9654;&#xFE0E;&nbsp;<span style=' font-size: 80%; '>"+maspeq+"</span>");
}


// -------------------------------------------------------- fin de funciones ------------------------------------------------------

var anterior='';
var siguiente='';
var puntero = 500
var tope = 500
var botonesactivos=1
var pestanasactivas=0
var mispestanas='';


var pag_origen = ''
var miposicion = 0
var hora_ant= new Array()
var hora=0
var mipreferencia = new Array()
var preferencias = dime_pref('preferencias','');
var estoymac = dime_pref('estoymac',0)

if (estoymac != 1 ) {
estoymac = false;
$('.solo_android').css('display','block');
$('.solo_mac').css('display','none');
} else {
estoymac = true ;
$('.solo_android').css('display','none');
$('.solo_mac').css('display','block');
}


var embutidos = getUrlVars()["embutidos"];
var botones="";
var colores= "";
if (typeof embutidos ==='undefined' || embutidos=='undefined' ) embutidos= ""
var miciclo=dime_pref('ciclo','A')
var tipoanno=dime_pref('tipoanno','impar')
var idiomas = ['latin','cast','engl','germ','ital','port']
var contador=0
var modocopia = false
var lect_sant_prior=false;
var annoactual= new Date();
var mianno=dime_pref('mianno',annoactual.getFullYear());

mipreferencia=extrae_preferencias()

 mimisal_1 = idiomas [mipreferencia['misal_pral']]
 mimisal_2 = idiomas [mipreferencia['segundoidioma']]

var midia=getUrlVars()["midia"];
if (typeof midia==='undefined') midia=1;
var ayuda=0;

var myScroll;
var avancepantalla = mipreferencia["avance"]
// var respaldo_pref=preferencias
//var mipreferencia=preferencias['preferencia']
var ajuste= dime_pref("ajuste",10);
var esperame=false

window.addEventListener("load", function () { setTimeout(loaded, ajuste*10); }, false);
//document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
