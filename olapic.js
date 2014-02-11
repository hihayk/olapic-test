$(window).ready(function(){

//GetJson data from given URL
var url = 'https://www.photorank.me/api/v1/photos/?api_key=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&limit=18&offset=0';
$.getJSON(url, function(data) {

	$.each(data.response, function(i, response) {

		// Vars with the image url, names and ID's, etc.
		var imagen_thumb = response.images.thumbnail;
		var imagen_original = response.images.original;
		var username = response.uploader.username;
		var avatar = response.uploader.avatar;
 		var nombre = response.name;
 		var id = response.id;
 		var caption = response.caption;
 		var source = response.source;
 		var post = response.original_source;
 		var url = response.uploader.source_profile_link;

		// Generate divs with each value
		var div = '<div class="img_box '+source+'"><a id="popup" href="#test-popup-'+id+'" rel="group1"><img src="'+imagen_thumb+'" title="'+caption+'" alt="'+nombre+'" /></a><div id="test-popup-'+id+'" style="left: 509.5px; top: 181px; display: none; margin: 20px;"><div class="qvInner"><table width="500" border="0" cellpadding="2" cellspacing="2"><tbody><tr><td height="88" align="center" valign="top"><table width="100%" height="112" align="center"><tr><td width="82" height="106" align="left" valign="top"><a href="'+url+'"><img src="'+avatar+'" alt="mini" class="qvImg" /></a></td><td width="366" valign="top">@'+username+'<br /><br /> '+caption+'</td></tr></table></td></tr><tr><td valign="bottom" align="center" width="425"><a href="'+post+'"><img src="'+imagen_original+'" class="qvImg"></a> </td></tr></tbody></table></div></div></div>'; // apennd data to div
      /// Add to div container
      $(div).appendTo($("#container"));

});

// Exec Isotope Gallery
$(function(){

     var $container = $('#container');
   
     $container.imagesLoaded( function(){
       $container.isotope({
         itemSelector : '.img_box',
       });
      
       
       $container.infinitescroll({
              navSelector  : '#page_nav',    // selector for the paged navigation 
              nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
              itemSelector : '.img_box', 
              bufferPx     : 5, 
              errorCallback: function(){
                $container.isotope('reLayout');
              }, 
              loading: {
                  loadingText  : 'Loading more images.',
                  finishedMsg: 'No more images to load.',
                  img: 'http://i.imgur.com/qkKy8.gif'
                }
              },
              // call Isotope as a callback
               function( newElements) { 
                $container.isotope( 'appended', $( newElements ) ); 
                $container.isotope('reLayout');    
              }              
            );

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
  $("a#popup").fancybox({
          'scrolling'     : 'no',
          'titleShow'     : false,
          'width' :  '847',
          'height' : '570',
          'autoDimensions' : false,
          'type' : 'inline'
  });

});