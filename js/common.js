;(function (win, $) {
    'use strict';

		var swiper = new Swiper('.testimonials', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		// Open Nav
		var mobileNavOpen = function () {
			var $btn = $('.nav .btn-mobile');
		
			$btn.on('click', function () {
				var $this = $(this),
				$thisExpanedStatus = $this.attr('aria-expanded');
		
				if ($thisExpanedStatus == 'false') {
					$this.addClass('is-active');
					$this.closest('.wrap').addClass('is-open');
					$this.attr('aria-expanded', 'true');
				} else {
					$this.removeClass('is-active');
					$this.closest('.wrap').removeClass('is-open');
					$this.attr('aria-expanded', 'false');
				}
			});
		};

		// Accordion
		var accordionItem = function() {
			$('.accordion').find('.accordion-question').on('click', function() {
				if($(this).parents('.accordion-item').hasClass('is-open')) {
					$(this).parents('.accordion-item').removeClass('is-open');
					$(this).parents('.accordion-item').find('.accordion-body').slideUp();
				} else {
					$('.accordion').find('.is-open').removeClass('is-open');
					$('.accordion').find('.accordion-body').slideUp();
					$(this).parents('.accordion-item').addClass('is-open');
					$(this).parents('.accordion-item').find('.accordion-body').slideDown();
				}
			});
		};

		// Hoverring
		var mouseHover = function() {
			var $item_cusor = $('.cursor-custom');
	
			$('body').mousemove(moveCursor);
		
			function moveCursor(e) {
				var x = e.clientX;
				var y = e.clientY;
				
				$item_cusor.css('left',`${x}px`);
				$item_cusor.css('top',`${y}px`);
			}
		
			var mouse = $('.m-zoom');
			mouse.each(function() {
				$item_cusor.removeClass('view-project');

				$(this).mouseover(function(){
					$item_cusor.addClass('grow');
				});
				$(this).mouseleave(function(){
					$item_cusor.removeClass('grow');
				});
			});

			var mouseCard = $('.card-hover');
			mouseCard.each(function() {
				$item_cusor.removeClass('grow');

				$(this).mouseover(function(){
					$item_cusor.addClass('view-project');
				});
				$(this).mouseleave(function(){
					$item_cusor.removeClass('view-project');
				});
			});
		};

		// Open tree content
		var openTreeContent = function() {
			var $tree = $('.btn-tree');

			$tree.on('click', function() {
				$(this).parents('.tree-content').toggleClass('is-open');
				$(this).parents('.tree-content').find('.detail-tree').slideToggle();
			});
		};

		// Open expand detail
		var openExpandDetail = function() {
			var $itemExpand = $('.detail-box .btn-expand');

			var expandOn = $('.detail-box').hasClass('is-open');

			if (expandOn) {
				$('.detail-box.is-open').children('.info-expand').css('display','block');
			}

			$itemExpand.on('click', function() {
				$(this).parents('.detail-box').toggleClass('is-open');
				$(this).parents('.detail-box').find('.info-expand').slideToggle();
			});
		}

	$(window).on('scroll', function(){
	});


	$(win).on('load', function () {
		mobileNavOpen();
		accordionItem();
		mouseHover();
		openTreeContent();
		openExpandDetail();
	});
})(window, window.jQuery);