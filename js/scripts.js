$(document).ready(function(){

	$('input[name=phone]').mask("+38 (999) 999-9999");
	
	$(document).on('click', '.scroll-link', function(){
		event.preventDefault();
		
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
	})
	
	$(document).on('click', '.list-tec .item', function(){
		$('.list-tec .item').each(function(){
			$(this).removeClass('active');
		})
		
		$(this).addClass('active');
		
		var itemText = $(this).data('text');
		$('.work-desc').html(itemText);
	})

	$('.tabs-head a').tabs();
	
	new WOW({
		mobile: false,
	}).init();
	
	$(document).on('click', '.btn-modal', function(){
		var dataFrom = $(this).data('from');
		$('.modal-form').find('input[name=from]').val(dataFrom);
	})
	
	$('form .btn-form').click(function(e){
		e.preventDefault();
		
		var a = $(this).closest('form');
        var x = true;
		
        $("form").find('.input').removeClass('error');
		
        a.find('input[type=text]').each(function() {
            if ($(this).val() === '') {
                $(this).closest('.input').addClass('error');
                $(this).focus();
                x = false;
                return false;
            }
        });
        if (x) {
            $("form").find('input[type=text]').parent().removeClass('error');
            a.submit();
        }
        return false;
		
	})
	
	$(".navigation a").click(function (event) {
        event.preventDefault();
		
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
		var inst = $('[data-remodal-id=modal-menu]').remodal();
		inst.close();
    });
	

	$('.block-index .service-list .btn').on('click', function(){
		event.preventDefault();
		
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
			
		
		$(".tabs-head a[href='" + id + "']").click();
        $('body,html').animate({scrollTop: top}, 1500);
	})
	
	$('a[href=#]').click(function(e){ e.preventDefault(); });
	
});


	

$.fn.tabs = function() {
	var selector = this;
	
	this.each(function() {
		var obj = $(this); 
		
		//$(obj.attr('href')).hide();
		
		obj.click(function() {
			var tab = $(this);
			
			$(selector).removeClass('selected');
			$('.tab').removeClass('selected');
			
			$(this).addClass('selected');
			
			
			$(tab.attr('href')).addClass('selected');
			
			//$($(this).attr('href')).fadeIn();
			
			$(selector).not(this).each(function(i, element) {
				//$($(element).attr('href')).hide();
			});
			
			return false;
		});
	});

	$(this).show();

	
	$(this).first().click();
};