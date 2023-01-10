jQuery(document).ready(function(){
  jQuery(".interior_gallery_section .uael-grid-item").slice(0,8).show();
  jQuery(" .loadmore a").click(function(e){
    e.preventDefault();
	
	 	if(jQuery(".interior_gallery_section .uael-grid-item:hidden").length!=0){			
			
			let count=0;
			if(jQuery(".interior_gallery_section .uael-grid-item:hidden").length>=3){
				count=3;
			}else{
				mesunCallBack();
				count=jQuery(".interior_gallery_section .uael-grid-item:hidden").length;	
			}
			
			jQuery(".interior_gallery_section .uael-grid-item:hidden").slice(0,count).fadeIn("slow");
			if((jQuery(".interior_gallery_section .uael-grid-item:hidden").length)>0){
					mesunCallBack();
			}else{
				var $container = jQuery(".interior_gallery_section .uael-img-gallery-wrap");
				$container.imagesLoaded( function() {
				$container.masonry();
				});
			}	
      }
	  if(jQuery(".interior_gallery_section .uael-grid-item:hidden").length == 0){
		jQuery(" .loadmore a").fadeOut("slow");
	  }
  });
		
})

function mesunCallBack(){

	var colWidth = jQuery(".uael-grid-item").width();

	window.onresize = function(){
	  var colWidth = jQuery(".uael-grid-item").width();
	}

	var $grid = jQuery(".interior_gallery_section .elementor-widget-wrap").masonry({

	  itemSelector: ".uael-grid-item",
	  columnWidth: ".uael-grid-item",
     	  fitWidth: true
	});

	$grid.imagesLoaded().progress(function() {
	  $grid.masonry("layout");
		

	});
}
