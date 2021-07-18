function t450_showMenu(recid){var el=$('#rec'+recid);$('body').addClass('t450__body_menushowed');el.find('.t450').addClass('t450__menu_show');el.find('.t450__overlay').addClass('t450__menu_show');$('.t450').bind('clickedAnchorInTooltipMenu',function(){t450_closeMenu()});el.find('.t450__overlay, .t450__close, a[href*=#]').click(function(){var url=$(this).attr('href');if(typeof url!='undefined'&&url!=''&&(url.substring(0,7)=='#price:'||url.substring(0,9)=='#submenu:')){return}
t450_closeMenu()});$(document).keydown(function(e){if(e.keyCode==27){$('body').removeClass('t390__body_popupshowed');$('.t390').removeClass('t390__popup_show')}})}
function t450_closeMenu(){$('body').removeClass('t450__body_menushowed');$('.t450').removeClass('t450__menu_show');$('.t450__overlay').removeClass('t450__menu_show')}
function t450_checkSize(recid){var el=$('#rec'+recid).find('.t450');var windowheight=$(window).height()-80;var contentheight=el.find(".t450__top").height()+el.find(".t450__rightside").height();if(contentheight>windowheight){el.addClass('t450__overflowed');el.find(".t450__container").css('height','auto')}}
function t450_appearMenu(recid){var el=$('#rec'+recid);var burger=el.find(".t450__burger_container");burger.each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");var hideoffset=el.attr("data-hideoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.hasClass('t450__beforeready')){el.finish();el.removeClass("t450__beforeready")}}else{el.stop();el.addClass("t450__beforeready")}}
if(hideoffset!=""){if(hideoffset.indexOf('vh')>-1){hideoffset=Math.floor((window.innerHeight*(parseInt(hideoffset)/100)))}
hideoffset=parseInt(hideoffset,10);if($(window).scrollTop()+$(window).height()>=$(document).height()-hideoffset){if(!el.hasClass('t450__beforeready')){el.finish();el.addClass("t450__beforeready")}}else{if(appearoffset!=""){if($(window).scrollTop()>=appearoffset){el.stop();el.removeClass("t450__beforeready")}}else{el.stop();el.removeClass("t450__beforeready")}}}})}
function t450_initMenu(recid){var el=$('#rec'+recid).find('.t450');var hook=el.attr('data-tooltip-hook');if(hook!==''){var obj=$('a[href="'+hook+'"]');obj.click(function(e){t450_closeMenu();t450_showMenu(recid);t450_checkSize(recid);e.preventDefault()})}
$('#rec'+recid).find('.t450__burger_container').click(function(e){t450_closeMenu();t450_showMenu(recid);t450_checkSize(recid)});if(isMobile){$('#rec'+recid).find('.t-menu__link-item').each(function(){var $this=$(this);if($this.hasClass('t450__link-item_submenu')){$this.on('click',function(){setTimeout(function(){t450_checkSize(recid)},100)})}})}
t450_highlight()}
function t450_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t450__menu a[href='"+url+"']").addClass("t-active");$(".t450__menu a[href='"+url+"/']").addClass("t-active");$(".t450__menu a[href='"+pathname+"']").addClass("t-active");$(".t450__menu a[href='/"+pathname+"']").addClass("t-active");$(".t450__menu a[href='"+pathname+"/']").addClass("t-active");$(".t450__menu a[href='/"+pathname+"/']").addClass("t-active")}
function t657_init(recid){var t657_el=$('#rec'+recid),t657_block=t657_el.find('.t657'),t657_closeBtn=t657_el.find('.t657__btn'),t657_closeIcon=t657_el.find('.t657__icon-close'),t657_storageItem=t657_block.attr('data-storage-item'),t657_lastOpen=localStorage.getItem(t657_storageItem);if(t657_lastOpen==null){t657_block.removeClass('t657_closed')}
t657_closeBtn.add(t657_closeIcon).click(function(e){t657_block.addClass('t657_closed');localStorage.setItem(t657_storageItem,Math.floor(Date.now()/1000));e.preventDefault()})}