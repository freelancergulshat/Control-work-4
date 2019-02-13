$(document).ready(function(){

//	$('.tabs').on('click', 'span:not(.active)', function(){

//		var ind = $(this).index();
//		$(this).addClass('active').siblings().removeClass('active');
//		$(this).closest('.tabs-block').find('.tab-content').removeClass('active').eq(ind).addClass('active');

//	})
	

	$(window).scroll(function(){

		var top_scroll = $(document).scrollTop();
		var top_fix = $('#block').offset().top;

		if (top_scroll > top_fix) {
			$('header').css('top', '-80px').addClass('fix').animate({top: '0'}, 1000);
		} else {
			$('header').removeClass('fix');
		};

	});

});