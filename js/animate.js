$(document).ready(function(){
 // NAVBAR SCROLLING
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=50){
			$(".menu").css({
				'backgroundColor':'#19376b',
			});
		}else{
			$(".menu").css({
				'background':'rgba(35, 61, 105, 0.75)',
			});
		}
	 });
	 
	   // PROJECT PORTFOLIO 
	 
	 
	    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

      function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
	
	 // WOW ANIMATION

		new WOW().init();
		
		// ENQUIRY FORM ALL PAGES
	
		$('.menu .menu-ul>li>a').hover(function () {
			$('.drp_down').addClass('magictime tinDownIn');
		});
	
		
		
});
