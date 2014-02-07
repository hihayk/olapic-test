$(document).ready(function(){

		//var output = $("");

		//GetJson data from given URL
        $.getJSON('https://www.photorank.me/api/v1/photos/?api_key=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&limit=18&offset=500', function(data) {

        	$.each(data.response, function(i, response) {

        		// Var with the image url
        		var imagen_thumb = response.images.thumbnail;
        		var imagen_original = response.images.original;
         		var nombre = response.name;

        		// Generate div with each value
        		//var div = '<div class="itemCat_box boxId_'+response.id+'" data-urlseg="be-mattenificent-colored-clay-eye-and-cheek-palette" data-item-id="497" style="float:left;margin-right:10px;width:320px;height:518px;"><div class="itemCat_imgBox borderAllPink" style="position:relative;background-color:white;height:368px;"><div style="position:absolute;bottom:0;overflow:hidden;width:318px;"><center><a href="tarte-item-be-mattenificent-colored-clay-eye-and-cheek-palette"><img border="0" src="'+imagen+'" style="max-width:318px;max-height:366px;" class="itemCat_prodImg" alt="'+response.name+'" /></a></center></div><button class="edgeButton quickViewButton" type="button" onClick="quickView(\'be-mattenificent-colored-clay-eye-and-cheek-palette\',1);">Quick View</button><div class="itemDesc" prod-urlseg="be-mattenificent-colored-clay-eye-and-cheek-palette" prod-item-id="497"><p>'+response.caption+'</p><p style="padding:0;margin:5px 0 0 0;position:relative;top:-5px;"><a href="/tarte-item-be-mattenificent-colored-clay-eye-and-cheek-palette" style="color:#A57C53;font-size:12px;">View Full Details</a></p></div></div><div class="boxDetails"><h2><a href="tarte-item-be-mattenificent-colored-clay-eye-and-cheek-palette">'+response.caption+'</a></h2><div class="itemCat_ratings" ratings-count="23"><div style="position:relative;margin:auto;display:block;width:92px;height:17px;"><div style="position:absolute;top:0;left:0;"><img src="//d3izgfs6wvo1aj.cloudfront.net/images/edge/stars-leaves-off.png"/></div><img style="position:absolute;top:0px;left:0px;clip:rect(0px,93.2px,17px,0px);" src="//d3izgfs6wvo1aj.cloudfront.net/images/edge/stars-leaves-on.png" width="92" height="17"/></div></div></div></div>';

        		var div = '<div class="img_box '+response.source+'"><a class="open-popup" href="#test-popup-'+response.id+'""><img src="'+imagen_thumb+'" alt="'+nombre+'" /></a></div><div id="test-popup-'+response.id+'" class="popup mfp-hide">TEST popup probandoo que muestra!!</div>';
        	
	        	// apennd data to div 
	            $(div).appendTo($("#container"));
     
        });

		// Exec Isotope Gallery
		    $(function(){

		         var $container = $('#container');
		       
		         $container.imagesLoaded( function(){
		           $container.isotope({
		             itemSelector : '.img_box',
		           });
      
		         });

		         // filter items when filter link is clicked
		         $('#filters a').click(function(){
		           var selector = $(this).attr('data-filter');
		           $container.isotope({ filter: selector });
		           return false;
		         });
		       
		       }); 

        });
	
		// Lightbox image
		$('.open-popup').magnificPopup({
		  type:'inline',
		  midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		  zoom: {
			enabled: true,
			duration: 300 
		}
		});

});