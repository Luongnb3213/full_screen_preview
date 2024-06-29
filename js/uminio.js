!
	function (c) {
		"use strict";
		var e = c(window),
			t = c("#site-header"),
			i = t.offset().top;
		e.on("scroll", function () {
			var e = c(this).scrollTop();
			if (i < e) {
				t.addClass("header-pinned");
				c(".btn-fixed").removeClass('hide-element');
			}
			else {
				t.removeClass("header-pinned");
				c(".btn-fixed").addClass('hide-element');
			}
		}),
			c(document).ready(function () {
				var e, i;
				var get_c_h_y = c('.geted-height-item-video-youtube').outerHeight();
				c('.fixed-height-item-video-youtube').css('max-height', get_c_h_y + 'px');
				c(document.body).on("click", ".back-to-top-button", function (e) {
					e.preventDefault();
					window.scroll({
						top: 0,
						left: 0,
						behavior: "smooth"
					});
				}),
					c(document.body).on("click", ".scroll-to", function (e) {
						e.preventDefault();
						e = c(this).attr("href"),
							e = c(e).offset().top;
						var get_he = c(this).attr("href");
						var s_h = e - 10;
						if (get_he == '#features') {
							s_h = e - 150;
						}
						else if (get_he == '#video-guides') {
							s_h = e - 1;
						}
						window.scroll({
							top: s_h,
							left: 0,
							behavior: "smooth"
						});
						c(this).parents('body').css('overflow', 'visible');
						c(this).parents('body').find('.navigation-mobile').removeClass('box-menu');
						c(this).parents('body').find('.menu-icon').removeClass('open-menu');
					}),
					c(document.body).on("click", "a", function (e) {
						var a_link = c(this).attr("href");
						c.post("https://blueskytechmage.com/magento/savelanding/", { url: a_link, typetrac: "Click Link", section_open: getSectionCustomer, page_id: pageIdLoading });
					}),
					c(document.body).on("click", ".click-show-video-youtube", function (e) {
						var c_video = c('#video-guides').offset().top;
						window.scroll({
							top: c_video,
							left: 0,
							behavior: "smooth"
						});
						var iframesrc = c(this).attr("data-url");
						var i_html = '<iframe id="YouTube-Iframe" src="' + iframesrc + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						c("#ini-video-youtube-click-play").html(i_html);
						c(".video-item").removeClass('actived');
						c(this).closest('.video-item').addClass('actived');
					}),
					c(document.body).on("click", "#ini-video-youtube-click-play .open-video", function (e) {
						var iframesrc = c('#ini-video-youtube-click-play').attr("data-url");
						var i_html = '<iframe id="YouTube-Iframe" src="' + iframesrc + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						c("#ini-video-youtube-click-play").html(i_html);
					}),
					c(document.body).on("click", ".uminio-tabs__header .tab-title", function (e) {
						e.preventDefault();
						if (!c(this).hasClass('active')) {
							e = c(this).attr("data-tab");
							var tabs = c(this).closest('.uminio-tabs');
							tabs.find('.tab-title').removeClass("active");
							c(this).addClass("active");
							tabs.find('.uminio-tabs__content .tab-content').removeClass("active");
							tabs.find('.uminio-tabs__content .tab-content[data-tab="' + e + '"]').addClass("active");
						}
						return false;
					})
			})
	}(jQuery);

"use strict";

var otherPagesSlider = tns({
	"controls": false,
	"navPosition": "bottom",
	"autoplay": true,
	"autoplayHoverPause": false,
	"autoplayTimeout": 3500,
	"items": 1,
	"edgePadding": 100,
	"gutter": 10,
	"responsive": {
		"900": {
			"items": 2,
			"gutter": 20
		},
		"1024": {
			"items": 2,
			"gutter": 20,
		},
		"1200": {
			"items": 2,
			"gutter": 20,
			"edgePadding": 200,
		},
		"1900": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 300,
		},
		"2000": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 500,
		}
	},
	"container": ".other-pages-slider",
	"swipeAngle": false,
	"speed": 400,
	"mouseDrag": true
});
var productPagesSlider = tns({
	"controls": false,
	"navPosition": "bottom",
	"autoplay": true,
	"autoplayHoverPause": false,
	"autoplayTimeout": 3500,
	"items": 1,
	"edgePadding": 100,
	"gutter": 10,
	"responsive": {
		"900": {
			"items": 2,
			"gutter": 20
		},
		"1024": {
			"items": 2,
			"gutter": 20,
		},
		"1200": {
			"items": 2,
			"gutter": 20,
			"edgePadding": 200,
		},
		"1900": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 300,
		},
		"2000": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 500,
		}
	},
	"container": ".product-pages-slider",
	"swipeAngle": false,
	"speed": 400,
	"mouseDrag": true
});
var shopPagesSlider = tns({
	"controls": false,
	"navPosition": "bottom",
	"autoplay": false,
	"autoplayHoverPause": false,
	"autoplayTimeout": 3500,
	"items": 1,
	"edgePadding": 100,
	"gutter": 10,
	"responsive": {
		"900": {
			"items": 2,
			"gutter": 20
		},
		"1024": {
			"items": 2,
			"gutter": 20,
		},
		"1200": {
			"items": 2,
			"gutter": 20,
			"edgePadding": 200,
		},
		"1900": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 300,
		},
		"2000": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 500,
		}
	},
	"container": ".shop-pages-slider",
	"swipeAngle": false,
	"speed": 400,
	"mouseDrag": true
});
var languageSlider = tns({
	"controls": false,
	"navPosition": "bottom",
	"autoplay": false,
	"autoplayHoverPause": false,
	"autoplayTimeout": 3500,
	"loop": false,
	"items": 2,
	"responsive": {
		"430": {
			"items": 2.5,
			"gutter": 10
		},
		"576": {
			"items": 3,
			"gutter": 10
		},
		"768": {
			"items": 4,
			"gutter": 10
		},
		"900": {
			"items": 5,
			"gutter": 10
		},
		"1024": {
			"items": 6,
			"gutter": 20
		},
		"1200": {
			"items": 7,
			"gutter": 30
		},
		"1900": {
			"items": 8,
			"gutter": 30
		}
	},
	"gutter": 10,
	"container": ".languages-grid",
	"swipeAngle": false,
	"autoplay": true,
	"speed": 400,
	"mouseDrag": true
});

var showcaseWebsitesBuiltWithUmino = tns({
	"controls": false,
	"navPosition": "bottom",
	"autoplay": true,
	"autoplayHoverPause": false,
	"autoplayTimeout": 3500,
	"items": 1,
	"edgePadding": 100,
	"gutter": 10,
	"responsive": {
		"900": {
			"items": 2,
			"gutter": 20
		},
		"1024": {
			"items": 2,
			"gutter": 20,
		},
		"1200": {
			"items": 2,
			"gutter": 20,
			"edgePadding": 200,
		},
		"1900": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 300,
		},
		"2000": {
			"items": 2,
			"gutter": 30,
			"edgePadding": 500,
		}
	},
	"container": ".showcase-websites-built-with-umino",
	"swipeAngle": false,
	"speed": 400,
	"mouseDrag": true
});

AOS.init();

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

var getSectionCustomer = getCookie("getSectionCustomer");
if (getSectionCustomer == "") {
	const d = new Date();
	getSectionCustomer = d.getTime() + Math.floor(Math.random() * 999999);
	setCookie("getSectionCustomer", getSectionCustomer, 365);
}

const load_d = new Date();
var pageIdLoading = load_d.getTime() + Math.floor(Math.random() * 999999);

function activeMobile() {
	$('.menu-icon').click(function () {
		$(this).toggleClass('open-menu');
		var hClass = $(this).hasClass('open-menu');
		if (hClass) {
			$(this).parents('body').css('overflow', 'hidden');
			$(this).parents('body').find('.navigation-mobile').addClass('box-menu');
		}
		else {
			$(this).parents('body').css('overflow', 'visible');
			$(this).parents('body').find('.navigation-mobile').removeClass('box-menu');

		}
	});
	$('.menu-close').click(function () {
		$(this).parents('body').css('overflow', 'visible');
		$(this).parents('body').find('.navigation-mobile').removeClass('box-menu');
		$(this).parents('body').find('.menu-icon').removeClass('open-menu');
	});
	$('.title-submobile').click(function () {
		if ($(this).parents('.item-menu').hasClass('open-submenu')) {
			$(this).parents('.item-menu').removeClass('open-submenu')
		}
	});
	$('.title-subchildmenu').click(function () {
		if ($(this).parents('.bls-menu-item').hasClass('open-subchildmenu')) {
			$(this).parents('.bls-menu-item').removeClass('open-subchildmenu')
		}
	});
	$('[data-menu-lv0]').on('click', function () {
		if ($(this).closest('.item-menu').hasClass('open-submenu')) {
			$(this).closest('.item-menu').removeClass('open-submenu')
		}
		else {
			$(this).closest('.item-menu').addClass('open-submenu')
		}
	});
	$('[data-menu-lv1]').on('click', function () {
		if ($(this).closest('.bls-menu-item').hasClass('open-subchildmenu')) {
			$(this).closest('.bls-menu-item').removeClass('open-subchildmenu')
		}
		else {
			$(this).closest('.bls-menu-item').addClass('open-subchildmenu')
		}
	});
}
function activeSmallMobile() {

	var visitorcontent = tns({
		"controls": false,
		"navPosition": "bottom",
		"autoplay": false,
		"autoplayHoverPause": false,
		"autoplayTimeout": 3500,
		"items": 1.2,
		"responsive": {
			"576": {
				"items": 2.2,
				"gutter": 10
			}
		},
		"center": true,
		"gutter": 10,
		"container": ".visitor-content",
		"swipeAngle": false,
		"speed": 400,
		"mouseDrag": true
	});


}
function filterTab() {
	var $filtertab = $('.filter-tab').click(function () {
		if (this.id == 'all') {
			$('#template-libraries .uminio-grid > div').fadeIn(450);
		} else {
			var $el = $('.' + this.id).fadeIn(450);
			$('#template-libraries .uminio-grid > div').not($el).hide();
		}
		$filtertab.removeClass('active');
		$(this).addClass('active');
		AOS.init();
	});

}
$(document).ready(function () {
	$.post("https://blueskytechmage.com/magento/savelanding/", { url: "https://umino.mageblueskytech.com/full_screen_preview", typetrac: "Loading Page", section_open: getSectionCustomer, page_id: pageIdLoading });
	filterTab();
	AOS.init();
	activeMobile();
	if ($(window).width() < 767) {
		activeSmallMobile();
		$('.visitor-content').removeClass('row row-cols-lg-4');
		$('.visitor-content > div').removeClass('col-sm-6 col-xs-12 mb-30');
		var count_block = $('.content-box-theme > div').length;
		var number_blocks = 10;

		if (count_block < number_blocks) {
			return false;

		}
		else {
			$('.content-box-theme > div').each(function (i, n) {
				if (i == number_blocks) {
					$('.content-box-theme').after('<div class="theme-button-bottom read-more" data-aos="fade-up"><a role="link" class="view_more button"><span>Readmore</span></a></li>');
				}
				if (i > (number_blocks - 1)) {
					$(this).addClass('hide_block');
				}
			})
			$('.content-box-theme .hide_block').hide();
			$('#section-theme .view_more').click(function () {
				$(this).toggleClass('active');
				if ($(this).hasClass('active')) {
					$(this).html('<span class="closed-menu">Readless</span>');
					$('.hide_block').slideDown();
				}
				else {
					$(this).html('<span class="closed-menu">Readmore</span>');
					$('.hide_block').slideUp();

				}

			});
		}
	}
});