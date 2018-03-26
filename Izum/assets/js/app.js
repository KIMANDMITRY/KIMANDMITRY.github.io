// ==================================================
// fancyBox v3.2.10
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t){var e=n(t.currentTarget),o=t.data?t.data.options:{},i=e.attr("data-fancybox")||"",a=0,s=[];t.isDefaultPrevented()||(t.preventDefault(),i?(s=o.selector?n(o.selector):t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]'),a=s.index(e),a<0&&(a=0)):s=[e],n.fancybox.open(s,o,a))}if(n){if(n.fn.fancybox)return void("console"in t&&console.log("fancyBox already initialized"));var a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","share","close"],idleTime:3,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,margin:0,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,o,i){var a=this;a.opts=n.extend(!0,{index:i},n.fancybox.defaults,o||{}),n.fancybox.isMobile&&(a.opts=n.extend(!0,{},a.opts,a.opts.mobile)),o&&n.isArray(o.buttons)&&(a.opts.buttons=o.buttons),a.id=a.opts.id||++c,a.group=[],a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=null,a.createGroup(t),a.group.length&&(a.$lastFocus=n(e.activeElement).blur(),a.slides={},a.init())};n.extend(p.prototype,{init:function(){var i,a,s,c=this,l=c.group[c.currIndex],u=l.opts,d=n.fancybox.scrollbarWidth;c.scrollTop=r.scrollTop(),c.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||(n("body").addClass("fancybox-active"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream?"image"!==l.type&&n("body").css("top",n("body").scrollTop()*-1).addClass("fancybox-iosfix"):!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(i=n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(u.buttons,function(t,e){s+=u.btnTpl[e]||""}),a=n(c.translate(c,u.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",u.btnTpl.arrowLeft+u.btnTpl.arrowRight))).attr("id","fancybox-container-"+c.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox",c).appendTo(u.parentEl),c.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){c.$refs[t]=a.find(".fancybox-"+t)}),c.trigger("onInit"),c.activate(),c.jumpTo(c.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var a,s,r,c,l,u={},d={};n.isPlainObject(i)?(u=i,d=i.opts||i):"object"===n.type(i)&&n(i).length?(a=n(i),d=a.data(),d=n.extend({},d,d.options||{}),d.$orig=a,u.src=d.src||a.attr("href"),u.type||u.src||(u.type="inline",u.src=i)):u={type:"html",src:i+""},u.opts=n.extend(!0,{},e.opts,d),n.isArray(d.buttons)&&(u.opts.buttons=d.buttons),s=u.type||u.opts.type,c=u.src||"",!s&&c&&(c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":(r=c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(s="video",u.opts.videoFormat||(u.opts.videoFormat="video/"+("ogv"===r[1]?"ogg":r[1]))):"#"===c.charAt(0)&&(s="inline")),s?u.type=s:e.trigger("objectNeedsType",u),u.index=e.group.length,u.opts.$orig&&!u.opts.$orig.length&&delete u.opts.$orig,!u.opts.$thumb&&u.opts.$orig&&(u.opts.$thumb=u.opts.$orig.find("img:first")),u.opts.$thumb&&!u.opts.$thumb.length&&delete u.opts.$thumb,"function"===n.type(u.opts.caption)&&(u.opts.caption=u.opts.caption.apply(i,[e,u])),"function"===n.type(e.opts.caption)&&(u.opts.caption=e.opts.caption.apply(i,[e,u])),u.opts.caption instanceof n||(u.opts.caption=u.opts.caption===o?"":u.opts.caption+""),"ajax"===s&&(l=c.split(/\s+/,2),l.length>1&&(u.src=l.shift(),u.opts.filter=l.shift())),"auto"==u.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(u.opts.toolbar=!1,u.opts.smallBtn=!0):u.opts.smallBtn=!1),"pdf"===s&&(u.type="iframe",u.opts.iframe.preload=!1),u.opts.modal&&(u.opts=n.extend(!0,u.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(u)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},600))}),r.on("focusin.fb",function(t){var i=n.fancybox?n.fancybox.getInstance():null;i.isClosing||!i.current||!i.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||i&&"fixed"!==n(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,u,d,p=this,h=p.group.length;if(!(p.isDragging||p.isClosing||p.isAnimating&&p.firstRun)){if(t=parseInt(t,10),s=p.current?p.current.opts.loop:p.opts.loop,!s&&(t<0||t>=h))return!1;if(a=p.firstRun=null===p.firstRun,!(h<2&&!a&&p.isDragging)){if(c=p.current,p.prevIndex=p.currIndex,p.prevPos=p.currPos,r=p.createSlide(t),h>1&&((s||r.index>0)&&p.createSlide(t-1),(s||r.index<h-1)&&p.createSlide(t+1)),p.current=r,p.currIndex=r.index,p.currPos=r.pos,p.trigger("beforeShow",a),p.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a)return r.opts.animationEffect&&e&&p.$refs.container.css("transition-duration",e+"ms"),p.$refs.container.removeClass("fancybox-is-hidden"),f(p.$refs.container),p.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),p.loadSlide(r),void p.preload("image");n.each(p.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(p.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===p.currPos&&(r.isMoved=!1,p.complete())})})):p.$refs.stage.children().removeAttr("style"),r.isLoaded?p.revealContent(r):p.loadSlide(r),p.preload("image"),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,u=this,d=u.current,f=d.$content,p=parseInt(d.$slide.width(),10),h=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,a=n.fancybox.getTranslate(f),c=g/a.width,l=b/a.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;"image"!=i.type||i.hasError||!a||o.isAnimating||(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s,r=this,c=t.$content,l=t.width,u=t.height,d=t.opts.margin;return!(!c||!c.length||!l&&!u)&&("number"===n.type(d)&&(d=[d,d]),2==d.length&&(d=[d[0],d[1],d[0],d[1]]),e=parseInt(r.$refs.stage.width(),10)-(d[1]+d[3]),o=parseInt(r.$refs.stage.height(),10)-(d[0]+d[2]),i=Math.min(1,e/l,o/u),a=Math.floor(i*l),s=Math.floor(i*u),{top:Math.floor(.5*(o-s))+d[0],left:Math.floor(.5*(e-a))+d[3],width:a,height:s})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t,e){var o=this,i=t&&t.$content;i&&(t.width||t.height)&&(o.isAnimating=!1,n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&o.updateCursor()),t.$slide.trigger("refresh"),o.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a,s=this;s.current&&(i=Math.round(t.$slide.width()),a=t.pos-s.current.pos,n.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===o?0:e,null,!1))},updateCursor:function(t,e){var n,i=this,a=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current&&!i.isClosing&&(i.isZoomable()?(a.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown(),n?a.addClass("fancybox-can-zoomIn"):i.current.opts.touch?a.addClass("fancybox-can-drag"):a.addClass("fancybox-can-zoomOut")):i.current.opts.touch&&a.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,i=!1;return o&&(i=n.fancybox.getTranslate(o),i=i.width<e.width||i.height<e.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;case"video":a.setContent(t,'<video controls><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video>");break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r=this,c=e.opts.srcset||e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),i.sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=a){o=u;break}}!o&&i.length&&(o=i[i.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=t.opts.width||this.naturalWidth,t.height=t.opts.height||this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s,r=t.$content,c=a.css.width,l=a.css.height;if(1===e[0].isReady){try{i=e.contents(),s=i.find("body")}catch(t){}s&&s.length&&(c===o&&(n=e[0].contentWindow.document.documentElement.scrollWidth,c=Math.ceil(s.outerWidth(!0)+(r.width()-n)),c+=r.outerWidth()-r.innerWidth()),l===o&&(l=Math.ceil(s.outerHeight(!0)),l+=r.outerHeight()-r.innerHeight()),c&&r.width(c),l&&r.height(l)),r.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&a||(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=r.width/u.width,r.scaleY=r.height/u.height,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,a,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>=c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(i=a.$refs.stage.offset(),s={top:l.top-i.top+parseFloat(c.css("border-top-width")||0),left:l.left-i.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),t.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),o.$slide.find("video,audio").first().trigger("play"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(t){var e=this,n=e.slides[e.currPos+1],o=e.slides[e.currPos-1];n&&n.type===t&&e.loadSlide(n),o&&o.type===t&&e.loadSlide(o)},focus:function(){var t,e=this.current;this.isClosing||(e&&e.isComplete&&(t=e.$slide.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l=this,p=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),p.timouts&&clearTimeout(p.timouts),a=p.$content,o=p.opts.animationEffect,i=n.isNumeric(e)?e:o?p.opts.animationDuration:0,p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),p.$slide.siblings().trigger("onReset").remove(),i&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(p),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===p.type&&!p.hasError&&(c=l.getThumbPos(p))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),r=n.fancybox.getTranslate(a),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=p.opts.zoomOpacity,"auto"==s&&(s=Math.abs(p.width/p.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(p.$content,r),f(p.$content),n.fancybox.animate(p.$content,c,i,h),!0):(o&&i?t===!0?setTimeout(h,i):n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,h):h(),!0)))},cleanUp:function(t){var o,i,a=this,r=n("body");a.current.$slide.trigger("onReset"),a.$refs.container.empty().remove(),a.trigger("afterClose",t),a.$lastFocus&&a.current.opts.backFocus&&a.$lastFocus.focus(),a.current=null,o=n.fancybox.getInstance(),o?o.activate():(s.scrollTop(a.scrollTop).scrollLeft(a.scrollLeft),r.removeClass("fancybox-active compensate-for-scrollbar"),r.hasClass("fancybox-iosfix")&&(i=parseInt(e.body.style.top,10),r.removeClass("fancybox-iosfix").css("top","").scrollTop(i*-1)),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i))},updateControls:function(t){var e=this,n=e.current,o=n.index,i=n.opts.caption,a=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=i&&i.length?s.html(i):null,e.isHiddenControls||e.isIdle||e.showControls(),a.find("[data-fancybox-count]").html(e.group.length),a.find("[data-fancybox-index]").html(o+1),a.find("[data-fancybox-prev]").prop("disabled",!n.opts.loop&&o<=0),a.find("[data-fancybox-next]").prop("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?a.find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.2.10",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(d,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(n.fancybox.stop(t),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration",""),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)),s===!1&&t.removeAttr("style")):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),e.scaleX&&t.hasClass("fancybox-image-wrap")&&t.parent().addClass("fancybox-is-scaling"),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.hasClass("fancybox-image-wrap")&&t.parent().removeClass("fancybox-is-scaling")}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i)}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"
},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,u,d,f,p=a.src||"",h=!1;s=t.extend(!0,{},n,a.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,d={},o.paramPlace&&c[o.paramPlace]){u=c[o.paramPlace],"?"==u[0]&&(u=u.substring(1)),u=u.split("&");for(var i=0;i<u.length;++i){var s=u[i].split("=",2);2==s.length&&(d[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[n],d),p="function"===t.type(o.url)?o.url.call(this,c,l,a):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):e(o.thumb,c),"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(a.src=p,a.type=h,a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),a.contentProvider=f,a.opts.slideClass+=" fancybox-slide--"+("gmap_place"==f||"gmap_search"==f?"map":"video"))):p&&(a.type=a.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var i=this,c=n(o.target),u=i.instance,d=u.current,f=d.$content,p="touchstart"==o.type;if(p&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!d||i.instance.isAnimating||i.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if(i.realPoints=i.startPoints=a(o),i.startPoints){if(o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=f,i.opts=d.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.sliderStartPos=i.sliderLastPos||{top:0,left:0},i.contentStartPos=n.fancybox.getTranslate(i.$content),i.contentLastPos=null,i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(d.$slide[0].clientWidth),i.canvasHeight=Math.round(d.$slide[0].clientHeight),n(e).off(".fb.touch").on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),!i.opts&&!u.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());n.fancybox.isMobile&&(l(c)||l(c.parent()))||o.preventDefault(),1===i.startPoints.length&&("image"===d.type&&(i.contentStartPos.width>i.canvasWidth+1||i.contentStartPos.height>i.canvasHeight+1)?(n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2!==i.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}}},u.prototype.onscroll=function(t){self.isScrolling=!0},u.prototype.ontouchmove=function(t){var e=this,o=n(t.target);return e.isScrolling||!o.is(e.$stage)&&!e.$stage.find(o).length?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},u.prototype.onSwipe=function(e){var a,s=this,r=s.isSwiping,c=s.sliderStartPos.left||0;if(r!==!0)"x"==r&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?c+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?c-=Math.pow(-s.distanceX,.8):c+=s.distanceX),s.sliderLastPos={top:"x"==r?0:s.sliderStartPos.top+s.distanceY,left:c},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,s.instance.group.length<2&&s.opts.vertical?s.isSwiping="y":s.instance.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),s.canTap=!1,"y"===s.isSwiping&&n.fancybox.isMobile&&(l(s.$target)||l(s.$target.parent())))return void(s.isScrolling=!0);s.instance.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(s.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===s.instance.current.pos&&(s.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),s.instance.SlideShow&&s.instance.SlideShow.isActive&&s.instance.SlideShow.stop()}},u.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(i(t.requestId),t.requestId=null),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},u.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,u=s.distanceY,d=s.contentStartPos,f=d.left,p=d.top,h=d.width,g=d.height;return i=h>r?f+l:f,a=p+u,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),h>r&&(l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0)),g>c&&(u>0&&a>e&&(a=e-1+Math.pow(-e+p+u,.8)||0),u<0&&a<o&&(a=o+1-Math.pow(o-p-u,.8)||0)),{top:a,left:i,scaleX:d.scaleX,scaleY:d.scaleY}},u.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,a=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(a*d),p=Math.floor(r*d),h=(a-f)*e.percentageOfImageAtPinchPointX,g=(r-p)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(h+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=p,e.contentLastPos=$,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming,u=o.isScrolling;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r,u)))},u.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},150),i=o.instance.close(!0,300)):"x"==t&&o.distanceX>50&&a>1?i=o.instance.previous(o.speedX):"x"==t&&o.distanceX<-50&&a>1&&(i=o.instance.next(o.speedX)),i!==!1||"x"!=t&&"y"!=t||(e||a<2?o.instance.centerSlide(o.instance.current,150):o.instance.jumpTo(o.instance.current.index)),o.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.opts.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,i=n(t.target),s=o.instance,r=s.current,c=t&&a(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var i=r.opts[e];if(n.isFunction(i)&&(i=i.apply(s,[r,t])),i)switch(i){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if((!t.originalEvent||2!=t.originalEvent.button)&&(i.is("img")||!(l>i[0].clientWidth+i.offset().left))){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.find(i).addBack().filter(i).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},500):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a={};for(n=0;n<i.length;n++)if(e=i[n],e&&e[1]in t){for(o=0;o<e.length;o++)a[i[0][o]]=e[o];return a}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var n=function(t){this.init(t)};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this;e.instance=t,t.Thumbs=e;var n=t.group[0],o=t.group[1];e.opts=t.group[t.currIndex].opts.thumbs,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),e.opts&&n&&o&&("image"==n.type||n.opts.thumb||n.opts.$thumb)&&("image"==o.type||o.opts.thumb||o.opts.$thumb)?(e.$button.show().on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,n,o=this,i=o.instance,a=o.opts.parentEl;o.$grid=e('<div class="fancybox-thumbs fancybox-thumbs-'+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),t="<ul>",e.each(i.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",o.$list=e(t).appendTo(o.$grid).on("click","li",function(){i.jumpTo(e(this).data("index"))}),o.$list.find("img").hide().one("load",function(){var t,n,o,i,a=e(this).parent().removeClass("fancybox-thumbs-loading"),s=a.outerWidth(),r=a.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,i=n/r,o>=1&&i>=1&&(o>i?(t/=i,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":n>r?Math.floor(.3*r-.3*n):Math.floor(.5*r-.5*n),"margin-left":Math.floor(.5*s-.5*t)}).show()}).each(function(){this.src=e(this).data("src")}),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"))+i.group.length*o.$list.children().eq(0).outerWidth(!0)+"px")},focus:function(t){var e,n,o=this,i=o.$list;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<i.parent().scrollLeft()||n.left>i.parent().scrollLeft()+(i.parent().width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus(0)):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var o;e&&!e.Thumbs&&(o=new n(e),o.isActive&&o.opts.autoStart===!0&&o.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance();i&&(t=i.current.opts.hash===!1?i.current.src:window.location,o=i.current.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===i.current.type?encodeURIComponent(i.current.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{animationEffect:"fade",animationDuration:250,afterLoad:function(t,e){e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(s=!1,e.trigger("click")))}function a(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.hash||(e.$orig?e.$orig.data("fancybox"):""))}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=!0,r=null,c=null;n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i){var l;i&&i.opts.hash!==!1&&(l=a(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),r=l+(o.group.length>1?"-"+(i.index+1):""),"replaceState"in e.history?(c&&clearTimeout(c),c=setTimeout(function(){e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+r),c=null,s=!1},300)):e.location.hash=r))},"beforeClose.fb":function(o,i,s){var l,u;c&&clearTimeout(c),s.opts.hash!==!1&&(l=a(i),u=i&&i.opts.origHash?i.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),r=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!r||r===t.gallery+"-"+t.index||1===t.index&&r==t.gallery||(r=null,n.fancybox.close()):""!==t.gallery&&i(t)}),setTimeout(function(){i(o())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<1||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);
/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/
 Version: 1.8.1
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

                event.stopImmediatePropagation();
                var $sf = $(this);

                setTimeout(function() {

                    if( _.options.pauseOnFocus ) {
                        _.focussed = $sf.is(':focus');
                        _.autoPlay();
                    }

                }, 0);

            });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                return (val >= 0) && (val < _.slideCount);
            });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({'tabindex': '0'});
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function() {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if( $.type( arguments[0] ) === 'object' ) {

                option =  arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ( $.type( arguments[0] ) === 'string' ) {

                option =  arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                    type = 'responsive';

                } else if ( typeof arguments[1] !== 'undefined' ) {

                    type = 'single';

                }

            }

            if ( type === 'single' ) {

                _.options[option] = value;


            } else if ( type === 'multiple' ) {

                $.each( option , function( opt, val ) {

                    _.options[opt] = val;

                });


            } else if ( type === 'responsive' ) {

                for ( item in value ) {

                    if( $.type( _.options.responsive ) !== 'array' ) {

                        _.options.responsive = [ value[item] ];

                    } else {

                        l = _.options.responsive.length-1;

                        // loop through the responsive object and splice out duplicates.
                        while( l >= 0 ) {

                            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                                _.options.responsive.splice(l,1);

                            }

                            l--;

                        }

                        _.options.responsive.push( value[item] );

                    }

                }

            }

            if ( refresh ) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
                .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                    .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
var reviewPopUp = (function () {
    return{
        init:function () {
            var btn = $('.review-item__popUp'),
                text = $('.review-item__text'),
                btn__text = $('.popUp__text');
            btn.on('click',function () {
                $(this).siblings('.review-item__text').slideToggle();
                $(this).children('.popUp__icon').toggleClass('rotate');
            })
        }
    }
})();
var stickyHeader = (function () {
    return{
        init: function () {
            const headerStatic = document.querySelector('.header-bottom');
            window.addEventListener('scroll',function () {
                if(window.scrollY > 105){
                    headerStatic.classList.add('fix');
                }else {
                    headerStatic.classList.remove('fix');
                }
            })

        }
    }
})();
var upBtn = (function () {
    return{
        init: function () {
            $('#up-btn').click(function(){
                $('body,html').animate({ scrollTop: 0 }, 800);
            });
        }
    }
})();
window.onload = function(){

    document.querySelector('#preloader').classList.add('disable');

    upBtn.init();
    stickyHeader.init();
    reviewPopUp.init();
//#################################| TABS |####################################


//#################################| SLIDERS |####################################
    $('#top-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('#akcii-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
//#################################| DROP-DOWN MENU |####################################
    $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function (e) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );

        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );

        if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }

        return false;
    } );
    //#############################| Grid gallery |###########################
    var grid = document.querySelector('.grid');
    if(grid){
        var msnry = new Masonry( grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

        // layout Masonry after each image loads
        msnry.layout();
    }

//#################################| form validation |####################################
    function sendForm(sendButton, forms, formField) {
        $(sendButton).on('click', function (e) {
            e.preventDefault();


            var form = $(this).closest(forms),
                inputs =  form.find(formField),
                valid = validate(),
                successMsg = $('#msg-succsess'),
                errorMsg = $('#msg-error'),
                notValidMsg = $('#msg-notValid');


            function validate () {

                var valid = true;

                inputs.each( function () {

                    if ( $(this).val() === '' ) {
                        valid = false;
                        return false;
                    }
                });

                return valid;
            }

            function showMessage(el) {
                el.fadeIn(500);
            }

            if (valid) {

                $.ajax({
                    url: form.attr('action'),
                    data: form.serialize(),
                    type: 'POST',
                    success: function(){
                        showMessage('Ваше сообщение успешно доставлено!', 'Наш менеджер свяжется с вами в течение 5 минут');
                        modalIndicator.css({
                            "background-color": "rgba(82, 172, 98, 1)"
                        });
                    },
                    error: function(){
                        showMessage(errorMsg);
                        setTimeout(function () {
                            errorMsg.fadeOut(500);
                        }, 3000);
                    },
                    complete: function(){
                        showMessage(successMsg);
                        setTimeout(function () {
                            successMsg.fadeOut(500);
                        }, 3000);
                        form[0].reset();
                    }
                });
            } else {
                showMessage(notValidMsg);
                setTimeout( function () {
                    notValidMsg.fadeOut(500);
                }, 3500);
            }
        });
    }
    if($('#consultForm')){
        sendForm('#consult-btn', '#consultForm', '.consult-form__input' );
    }
    if($('#zamer-form')){
        sendForm('#zamer-formBtn', '#zamer-form', '.zamer-form__input' );
    }
    if($('#question-form')){
        sendForm('#question-formBtn', '#question-form', '.question-form__input' );
    }
    if($('#faq')){
        //#################################| F.A.Q Acordion |############################
        $('.acc-btn').click(function(){
            $(this).children('.acc-btn__icon').toggleClass('rotate');
            if($(this).siblings().children('.acc-btn__icon').hasClass('rotate')){
                $(this).siblings().children('.acc-btn__icon').removeClass('rotate');
            }
            if ( $(this).next().is( ":hidden" ) ) {
                $('.acc-content').slideUp('selected');
                $(this).next().slideDown('selected');
            } else {
                $(this).next().slideUp('selected');
            }
        });
    }

};





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbmN5Ym94LmpzIiwic2xpY2suanMiLCJyZXZpZXctcG9wVXAuanMiLCJzdGlja3ktaGVhZGVyLmpzIiwidXBCdG4uanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaDhGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIGZhbmN5Qm94IHYzLjIuMTBcclxuLy9cclxuLy8gTGljZW5zZWQgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZVxyXG4vLyBvciBmYW5jeUJveCBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXHJcbi8vXHJcbi8vIGh0dHA6Ly9mYW5jeWFwcHMuY29tL2ZhbmN5Ym94L1xyXG4vLyBDb3B5cmlnaHQgMjAxNyBmYW5jeUFwcHNcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIWZ1bmN0aW9uKHQsZSxuLG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkodCl7dmFyIGU9bih0LmN1cnJlbnRUYXJnZXQpLG89dC5kYXRhP3QuZGF0YS5vcHRpb25zOnt9LGk9ZS5hdHRyKFwiZGF0YS1mYW5jeWJveFwiKXx8XCJcIixhPTAscz1bXTt0LmlzRGVmYXVsdFByZXZlbnRlZCgpfHwodC5wcmV2ZW50RGVmYXVsdCgpLGk/KHM9by5zZWxlY3Rvcj9uKG8uc2VsZWN0b3IpOnQuZGF0YT90LmRhdGEuaXRlbXM6W10scz1zLmxlbmd0aD9zLmZpbHRlcignW2RhdGEtZmFuY3lib3g9XCInK2krJ1wiXScpOm4oJ1tkYXRhLWZhbmN5Ym94PVwiJytpKydcIl0nKSxhPXMuaW5kZXgoZSksYTwwJiYoYT0wKSk6cz1bZV0sbi5mYW5jeWJveC5vcGVuKHMsbyxhKSl9aWYobil7aWYobi5mbi5mYW5jeWJveClyZXR1cm4gdm9pZChcImNvbnNvbGVcImluIHQmJmNvbnNvbGUubG9nKFwiZmFuY3lCb3ggYWxyZWFkeSBpbml0aWFsaXplZFwiKSk7dmFyIGE9e2xvb3A6ITEsbWFyZ2luOls0NCwwXSxndXR0ZXI6NTAsa2V5Ym9hcmQ6ITAsYXJyb3dzOiEwLGluZm9iYXI6ITAsdG9vbGJhcjohMCxidXR0b25zOltcInNsaWRlU2hvd1wiLFwiZnVsbFNjcmVlblwiLFwidGh1bWJzXCIsXCJzaGFyZVwiLFwiY2xvc2VcIl0saWRsZVRpbWU6MyxzbWFsbEJ0bjpcImF1dG9cIixwcm90ZWN0OiExLG1vZGFsOiExLGltYWdlOntwcmVsb2FkOlwiYXV0b1wifSxhamF4OntzZXR0aW5nczp7ZGF0YTp7ZmFuY3lib3g6ITB9fX0saWZyYW1lOnt0cGw6JzxpZnJhbWUgaWQ9XCJmYW5jeWJveC1mcmFtZXtybmR9XCIgbmFtZT1cImZhbmN5Ym94LWZyYW1le3JuZH1cIiBjbGFzcz1cImZhbmN5Ym94LWlmcmFtZVwiIGZyYW1lYm9yZGVyPVwiMFwiIHZzcGFjZT1cIjBcIiBoc3BhY2U9XCIwXCIgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4gYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgc3JjPVwiXCI+PC9pZnJhbWU+JyxwcmVsb2FkOiEwLGNzczp7fSxhdHRyOntzY3JvbGxpbmc6XCJhdXRvXCJ9fSxkZWZhdWx0VHlwZTpcImltYWdlXCIsYW5pbWF0aW9uRWZmZWN0Olwiem9vbVwiLGFuaW1hdGlvbkR1cmF0aW9uOjUwMCx6b29tT3BhY2l0eTpcImF1dG9cIix0cmFuc2l0aW9uRWZmZWN0OlwiZmFkZVwiLHRyYW5zaXRpb25EdXJhdGlvbjozNjYsc2xpZGVDbGFzczpcIlwiLGJhc2VDbGFzczpcIlwiLGJhc2VUcGw6JzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgdGFiaW5kZXg9XCItMVwiPjxkaXYgY2xhc3M9XCJmYW5jeWJveC1iZ1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbm5lclwiPjxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbmZvYmFyXCI+PHNwYW4gZGF0YS1mYW5jeWJveC1pbmRleD48L3NwYW4+Jm5ic3A7LyZuYnNwOzxzcGFuIGRhdGEtZmFuY3lib3gtY291bnQ+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJmYW5jeWJveC10b29sYmFyXCI+e3tidXR0b25zfX08L2Rpdj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtbmF2aWdhdGlvblwiPnt7YXJyb3dzfX08L2Rpdj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtc3RhZ2VcIj48L2Rpdj48ZGl2IGNsYXNzPVwiZmFuY3lib3gtY2FwdGlvbi13cmFwXCI+PGRpdiBjbGFzcz1cImZhbmN5Ym94LWNhcHRpb25cIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4nLHNwaW5uZXJUcGw6JzxkaXYgY2xhc3M9XCJmYW5jeWJveC1sb2FkaW5nXCI+PC9kaXY+JyxlcnJvclRwbDonPGRpdiBjbGFzcz1cImZhbmN5Ym94LWVycm9yXCI+PHA+e3tFUlJPUn19PHA+PC9kaXY+JyxidG5UcGw6e2Rvd25sb2FkOic8YSBkb3dubG9hZCBkYXRhLWZhbmN5Ym94LWRvd25sb2FkIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZG93bmxvYWRcIiB0aXRsZT1cInt7RE9XTkxPQUR9fVwiPjxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIGQ9XCJNMjAsMjMgTDIwLDggTDIwLDIzIEwxMywxNiBMMjAsMjMgTDI3LDE2IEwyMCwyMyBNMjYsMjggTDEzLDI4IEwyNywyOCBMMTQsMjhcIiAvPjwvc3ZnPjwvYT4nLHpvb206JzxidXR0b24gZGF0YS1mYW5jeWJveC16b29tIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tem9vbVwiIHRpdGxlPVwie3taT09NfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBkPVwiTSAxOCwxNyBtLTgsMCBhIDgsOCAwIDEsMCAxNiwwIGEgOCw4IDAgMSwwIC0xNiwwIE0yNSwyMyBMMzEsMjkgTDI1LDIzXCIgLz48L3N2Zz48L2J1dHRvbj4nLGNsb3NlOic8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHBhdGggZD1cIk0xMCwxMCBMMzAsMzAgTTMwLDEwIEwxMCwzMFwiIC8+PC9zdmc+PC9idXR0b24+JyxzbWFsbEJ0bjonPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtY2xvc2Utc21hbGxcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsYXJyb3dMZWZ0Oic8YnV0dG9uIGRhdGEtZmFuY3lib3gtcHJldiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWFycm93X2xlZnRcIiB0aXRsZT1cInt7UFJFVn19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHBhdGggZD1cIk0xMCwyMCBMMzAsMjAgTDEwLDIwIEwxOCwyOCBMMTAsMjAgTDE4LDEyIEwxMCwyMFwiPjwvcGF0aD48L3N2Zz48L2J1dHRvbj4nLGFycm93UmlnaHQ6JzxidXR0b24gZGF0YS1mYW5jeWJveC1uZXh0IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfcmlnaHRcIiB0aXRsZT1cInt7TkVYVH19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+PHBhdGggZD1cIk0zMCwyMCBMMTAsMjAgTDMwLDIwIEwyMiwyOCBMMzAsMjAgTDIyLDEyIEwzMCwyMFwiPjwvcGF0aD48L3N2Zz48L2J1dHRvbj4nfSxwYXJlbnRFbDpcImJvZHlcIixhdXRvRm9jdXM6ITEsYmFja0ZvY3VzOiEwLHRyYXBGb2N1czohMCxmdWxsU2NyZWVuOnthdXRvU3RhcnQ6ITF9LHRvdWNoOnt2ZXJ0aWNhbDohMCxtb21lbnR1bTohMH0saGFzaDpudWxsLG1lZGlhOnt9LHNsaWRlU2hvdzp7YXV0b1N0YXJ0OiExLHNwZWVkOjRlM30sdGh1bWJzOnthdXRvU3RhcnQ6ITEsaGlkZU9uQ2xvc2U6ITAscGFyZW50RWw6XCIuZmFuY3lib3gtY29udGFpbmVyXCIsYXhpczpcInlcIn0sd2hlZWw6XCJhdXRvXCIsb25Jbml0Om4ubm9vcCxiZWZvcmVMb2FkOm4ubm9vcCxhZnRlckxvYWQ6bi5ub29wLGJlZm9yZVNob3c6bi5ub29wLGFmdGVyU2hvdzpuLm5vb3AsYmVmb3JlQ2xvc2U6bi5ub29wLGFmdGVyQ2xvc2U6bi5ub29wLG9uQWN0aXZhdGU6bi5ub29wLG9uRGVhY3RpdmF0ZTpuLm5vb3AsY2xpY2tDb250ZW50OmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJpbWFnZVwiPT09dC50eXBlJiZcInpvb21cIn0sY2xpY2tTbGlkZTpcImNsb3NlXCIsY2xpY2tPdXRzaWRlOlwiY2xvc2VcIixkYmxjbGlja0NvbnRlbnQ6ITEsZGJsY2xpY2tTbGlkZTohMSxkYmxjbGlja091dHNpZGU6ITEsbW9iaWxlOntpZGxlVGltZTohMSxtYXJnaW46MCxjbGlja0NvbnRlbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm5cImltYWdlXCI9PT10LnR5cGUmJlwidG9nZ2xlQ29udHJvbHNcIn0sY2xpY2tTbGlkZTpmdW5jdGlvbih0LGUpe3JldHVyblwiaW1hZ2VcIj09PXQudHlwZT9cInRvZ2dsZUNvbnRyb2xzXCI6XCJjbG9zZVwifSxkYmxjbGlja0NvbnRlbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm5cImltYWdlXCI9PT10LnR5cGUmJlwiem9vbVwifSxkYmxjbGlja1NsaWRlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJpbWFnZVwiPT09dC50eXBlJiZcInpvb21cIn19LGxhbmc6XCJlblwiLGkxOG46e2VuOntDTE9TRTpcIkNsb3NlXCIsTkVYVDpcIk5leHRcIixQUkVWOlwiUHJldmlvdXNcIixFUlJPUjpcIlRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgbG9hZGVkLiA8YnIvPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFBMQVlfU1RBUlQ6XCJTdGFydCBzbGlkZXNob3dcIixQTEFZX1NUT1A6XCJQYXVzZSBzbGlkZXNob3dcIixGVUxMX1NDUkVFTjpcIkZ1bGwgc2NyZWVuXCIsVEhVTUJTOlwiVGh1bWJuYWlsc1wiLERPV05MT0FEOlwiRG93bmxvYWRcIixTSEFSRTpcIlNoYXJlXCIsWk9PTTpcIlpvb21cIn0sZGU6e0NMT1NFOlwiU2NobGllc3NlblwiLE5FWFQ6XCJXZWl0ZXJcIixQUkVWOlwiWnVyw7xja1wiLEVSUk9SOlwiRGllIGFuZ2Vmb3JkZXJ0ZW4gRGF0ZW4ga29ubnRlbiBuaWNodCBnZWxhZGVuIHdlcmRlbi4gPGJyLz4gQml0dGUgdmVyc3VjaGVuIFNpZSBlcyBzcMOkdGVyIG5vY2htYWwuXCIsUExBWV9TVEFSVDpcIkRpYXNjaGF1IHN0YXJ0ZW5cIixQTEFZX1NUT1A6XCJEaWFzY2hhdSBiZWVuZGVuXCIsRlVMTF9TQ1JFRU46XCJWb2xsYmlsZFwiLFRIVU1CUzpcIlZvcnNjaGF1YmlsZGVyXCIsRE9XTkxPQUQ6XCJIZXJ1bnRlcmxhZGVuXCIsU0hBUkU6XCJUZWlsZW5cIixaT09NOlwiTWHDn3N0YWJcIn19fSxzPW4odCkscj1uKGUpLGM9MCxsPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Lmhhc093blByb3BlcnR5JiZ0IGluc3RhbmNlb2Ygbn0sdT1mdW5jdGlvbigpe3JldHVybiB0LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3JldHVybiB0LnNldFRpbWVvdXQoZSwxZTMvNjApfX0oKSxkPWZ1bmN0aW9uKCl7dmFyIHQsbj1lLmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxpPXt0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLFdlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9O2Zvcih0IGluIGkpaWYobi5zdHlsZVt0XSE9PW8pcmV0dXJuIGlbdF07cmV0dXJuXCJ0cmFuc2l0aW9uZW5kXCJ9KCksZj1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5sZW5ndGgmJnRbMF0ub2Zmc2V0SGVpZ2h0fSxwPWZ1bmN0aW9uKHQsbyxpKXt2YXIgYT10aGlzO2Eub3B0cz1uLmV4dGVuZCghMCx7aW5kZXg6aX0sbi5mYW5jeWJveC5kZWZhdWx0cyxvfHx7fSksbi5mYW5jeWJveC5pc01vYmlsZSYmKGEub3B0cz1uLmV4dGVuZCghMCx7fSxhLm9wdHMsYS5vcHRzLm1vYmlsZSkpLG8mJm4uaXNBcnJheShvLmJ1dHRvbnMpJiYoYS5vcHRzLmJ1dHRvbnM9by5idXR0b25zKSxhLmlkPWEub3B0cy5pZHx8KytjLGEuZ3JvdXA9W10sYS5jdXJySW5kZXg9cGFyc2VJbnQoYS5vcHRzLmluZGV4LDEwKXx8MCxhLnByZXZJbmRleD1udWxsLGEucHJldlBvcz1udWxsLGEuY3VyclBvcz0wLGEuZmlyc3RSdW49bnVsbCxhLmNyZWF0ZUdyb3VwKHQpLGEuZ3JvdXAubGVuZ3RoJiYoYS4kbGFzdEZvY3VzPW4oZS5hY3RpdmVFbGVtZW50KS5ibHVyKCksYS5zbGlkZXM9e30sYS5pbml0KCkpfTtuLmV4dGVuZChwLnByb3RvdHlwZSx7aW5pdDpmdW5jdGlvbigpe3ZhciBpLGEscyxjPXRoaXMsbD1jLmdyb3VwW2MuY3VyckluZGV4XSx1PWwub3B0cyxkPW4uZmFuY3lib3guc2Nyb2xsYmFyV2lkdGg7Yy5zY3JvbGxUb3A9ci5zY3JvbGxUb3AoKSxjLnNjcm9sbExlZnQ9ci5zY3JvbGxMZWZ0KCksbi5mYW5jeWJveC5nZXRJbnN0YW5jZSgpfHwobihcImJvZHlcIikuYWRkQ2xhc3MoXCJmYW5jeWJveC1hY3RpdmVcIiksL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiF0Lk1TU3RyZWFtP1wiaW1hZ2VcIiE9PWwudHlwZSYmbihcImJvZHlcIikuY3NzKFwidG9wXCIsbihcImJvZHlcIikuc2Nyb2xsVG9wKCkqLTEpLmFkZENsYXNzKFwiZmFuY3lib3gtaW9zZml4XCIpOiFuLmZhbmN5Ym94LmlzTW9iaWxlJiZlLmJvZHkuc2Nyb2xsSGVpZ2h0PnQuaW5uZXJIZWlnaHQmJihkPT09byYmKGk9bignPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6c2Nyb2xsO1wiIC8+JykuYXBwZW5kVG8oXCJib2R5XCIpLGQ9bi5mYW5jeWJveC5zY3JvbGxiYXJXaWR0aD1pWzBdLm9mZnNldFdpZHRoLWlbMF0uY2xpZW50V2lkdGgsaS5yZW1vdmUoKSksbihcImhlYWRcIikuYXBwZW5kKCc8c3R5bGUgaWQ9XCJmYW5jeWJveC1zdHlsZS1ub3Njcm9sbFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiPi5jb21wZW5zYXRlLWZvci1zY3JvbGxiYXIgeyBtYXJnaW4tcmlnaHQ6ICcrZCtcInB4OyB9PC9zdHlsZT5cIiksbihcImJvZHlcIikuYWRkQ2xhc3MoXCJjb21wZW5zYXRlLWZvci1zY3JvbGxiYXJcIikpKSxzPVwiXCIsbi5lYWNoKHUuYnV0dG9ucyxmdW5jdGlvbih0LGUpe3MrPXUuYnRuVHBsW2VdfHxcIlwifSksYT1uKGMudHJhbnNsYXRlKGMsdS5iYXNlVHBsLnJlcGxhY2UoXCJ7e2J1dHRvbnN9fVwiLHMpLnJlcGxhY2UoXCJ7e2Fycm93c319XCIsdS5idG5UcGwuYXJyb3dMZWZ0K3UuYnRuVHBsLmFycm93UmlnaHQpKSkuYXR0cihcImlkXCIsXCJmYW5jeWJveC1jb250YWluZXItXCIrYy5pZCkuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIikuYWRkQ2xhc3ModS5iYXNlQ2xhc3MpLmRhdGEoXCJGYW5jeUJveFwiLGMpLmFwcGVuZFRvKHUucGFyZW50RWwpLGMuJHJlZnM9e2NvbnRhaW5lcjphfSxbXCJiZ1wiLFwiaW5uZXJcIixcImluZm9iYXJcIixcInRvb2xiYXJcIixcInN0YWdlXCIsXCJjYXB0aW9uXCIsXCJuYXZpZ2F0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24odCl7Yy4kcmVmc1t0XT1hLmZpbmQoXCIuZmFuY3lib3gtXCIrdCl9KSxjLnRyaWdnZXIoXCJvbkluaXRcIiksYy5hY3RpdmF0ZSgpLGMuanVtcFRvKGMuY3VyckluZGV4KX0sdHJhbnNsYXRlOmZ1bmN0aW9uKHQsZSl7dmFyIG49dC5vcHRzLmkxOG5bdC5vcHRzLmxhbmddO3JldHVybiBlLnJlcGxhY2UoL1xce1xceyhcXHcrKVxcfVxcfS9nLGZ1bmN0aW9uKHQsZSl7dmFyIGk9bltlXTtyZXR1cm4gaT09PW8/dDppfSl9LGNyZWF0ZUdyb3VwOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT1uLm1ha2VBcnJheSh0KTtuLmVhY2goaSxmdW5jdGlvbih0LGkpe3ZhciBhLHMscixjLGwsdT17fSxkPXt9O24uaXNQbGFpbk9iamVjdChpKT8odT1pLGQ9aS5vcHRzfHxpKTpcIm9iamVjdFwiPT09bi50eXBlKGkpJiZuKGkpLmxlbmd0aD8oYT1uKGkpLGQ9YS5kYXRhKCksZD1uLmV4dGVuZCh7fSxkLGQub3B0aW9uc3x8e30pLGQuJG9yaWc9YSx1LnNyYz1kLnNyY3x8YS5hdHRyKFwiaHJlZlwiKSx1LnR5cGV8fHUuc3JjfHwodS50eXBlPVwiaW5saW5lXCIsdS5zcmM9aSkpOnU9e3R5cGU6XCJodG1sXCIsc3JjOmkrXCJcIn0sdS5vcHRzPW4uZXh0ZW5kKCEwLHt9LGUub3B0cyxkKSxuLmlzQXJyYXkoZC5idXR0b25zKSYmKHUub3B0cy5idXR0b25zPWQuYnV0dG9ucykscz11LnR5cGV8fHUub3B0cy50eXBlLGM9dS5zcmN8fFwiXCIsIXMmJmMmJihjLm1hdGNoKC8oXmRhdGE6aW1hZ2VcXC9bYS16MC05K1xcLz1dKiwpfChcXC4oanAoZXxnfGVnKXxnaWZ8cG5nfGJtcHx3ZWJwfHN2Z3xpY28pKChcXD98IykuKik/JCkvaSk/cz1cImltYWdlXCI6Yy5tYXRjaCgvXFwuKHBkZikoKFxcP3wjKS4qKT8kL2kpP3M9XCJwZGZcIjoocj1jLm1hdGNoKC9cXC4obXA0fG1vdnxvZ3YpKChcXD98IykuKik/JC9pKSk/KHM9XCJ2aWRlb1wiLHUub3B0cy52aWRlb0Zvcm1hdHx8KHUub3B0cy52aWRlb0Zvcm1hdD1cInZpZGVvL1wiKyhcIm9ndlwiPT09clsxXT9cIm9nZ1wiOnJbMV0pKSk6XCIjXCI9PT1jLmNoYXJBdCgwKSYmKHM9XCJpbmxpbmVcIikpLHM/dS50eXBlPXM6ZS50cmlnZ2VyKFwib2JqZWN0TmVlZHNUeXBlXCIsdSksdS5pbmRleD1lLmdyb3VwLmxlbmd0aCx1Lm9wdHMuJG9yaWcmJiF1Lm9wdHMuJG9yaWcubGVuZ3RoJiZkZWxldGUgdS5vcHRzLiRvcmlnLCF1Lm9wdHMuJHRodW1iJiZ1Lm9wdHMuJG9yaWcmJih1Lm9wdHMuJHRodW1iPXUub3B0cy4kb3JpZy5maW5kKFwiaW1nOmZpcnN0XCIpKSx1Lm9wdHMuJHRodW1iJiYhdS5vcHRzLiR0aHVtYi5sZW5ndGgmJmRlbGV0ZSB1Lm9wdHMuJHRodW1iLFwiZnVuY3Rpb25cIj09PW4udHlwZSh1Lm9wdHMuY2FwdGlvbikmJih1Lm9wdHMuY2FwdGlvbj11Lm9wdHMuY2FwdGlvbi5hcHBseShpLFtlLHVdKSksXCJmdW5jdGlvblwiPT09bi50eXBlKGUub3B0cy5jYXB0aW9uKSYmKHUub3B0cy5jYXB0aW9uPWUub3B0cy5jYXB0aW9uLmFwcGx5KGksW2UsdV0pKSx1Lm9wdHMuY2FwdGlvbiBpbnN0YW5jZW9mIG58fCh1Lm9wdHMuY2FwdGlvbj11Lm9wdHMuY2FwdGlvbj09PW8/XCJcIjp1Lm9wdHMuY2FwdGlvbitcIlwiKSxcImFqYXhcIj09PXMmJihsPWMuc3BsaXQoL1xccysvLDIpLGwubGVuZ3RoPjEmJih1LnNyYz1sLnNoaWZ0KCksdS5vcHRzLmZpbHRlcj1sLnNoaWZ0KCkpKSxcImF1dG9cIj09dS5vcHRzLnNtYWxsQnRuJiYobi5pbkFycmF5KHMsW1wiaHRtbFwiLFwiaW5saW5lXCIsXCJhamF4XCJdKT4tMT8odS5vcHRzLnRvb2xiYXI9ITEsdS5vcHRzLnNtYWxsQnRuPSEwKTp1Lm9wdHMuc21hbGxCdG49ITEpLFwicGRmXCI9PT1zJiYodS50eXBlPVwiaWZyYW1lXCIsdS5vcHRzLmlmcmFtZS5wcmVsb2FkPSExKSx1Lm9wdHMubW9kYWwmJih1Lm9wdHM9bi5leHRlbmQoITAsdS5vcHRzLHtpbmZvYmFyOjAsdG9vbGJhcjowLHNtYWxsQnRuOjAsa2V5Ym9hcmQ6MCxzbGlkZVNob3c6MCxmdWxsU2NyZWVuOjAsdGh1bWJzOjAsdG91Y2g6MCxjbGlja0NvbnRlbnQ6ITEsY2xpY2tTbGlkZTohMSxjbGlja091dHNpZGU6ITEsZGJsY2xpY2tDb250ZW50OiExLGRibGNsaWNrU2xpZGU6ITEsZGJsY2xpY2tPdXRzaWRlOiExfSkpLGUuZ3JvdXAucHVzaCh1KX0pfSxhZGRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgbz10aGlzO28ucmVtb3ZlRXZlbnRzKCksby4kcmVmcy5jb250YWluZXIub24oXCJjbGljay5mYi1jbG9zZVwiLFwiW2RhdGEtZmFuY3lib3gtY2xvc2VdXCIsZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksby5jbG9zZSh0KX0pLm9uKFwiY2xpY2suZmItcHJldiB0b3VjaGVuZC5mYi1wcmV2XCIsXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiLGZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpLG8ucHJldmlvdXMoKX0pLm9uKFwiY2xpY2suZmItbmV4dCB0b3VjaGVuZC5mYi1uZXh0XCIsXCJbZGF0YS1mYW5jeWJveC1uZXh0XVwiLGZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpLG8ubmV4dCgpfSkub24oXCJjbGljay5mYlwiLFwiW2RhdGEtZmFuY3lib3gtem9vbV1cIixmdW5jdGlvbih0KXtvW28uaXNTY2FsZWREb3duKCk/XCJzY2FsZVRvQWN0dWFsXCI6XCJzY2FsZVRvRml0XCJdKCl9KSxzLm9uKFwib3JpZW50YXRpb25jaGFuZ2UuZmIgcmVzaXplLmZiXCIsZnVuY3Rpb24odCl7dCYmdC5vcmlnaW5hbEV2ZW50JiZcInJlc2l6ZVwiPT09dC5vcmlnaW5hbEV2ZW50LnR5cGU/dShmdW5jdGlvbigpe28udXBkYXRlKCl9KTooby4kcmVmcy5zdGFnZS5oaWRlKCksc2V0VGltZW91dChmdW5jdGlvbigpe28uJHJlZnMuc3RhZ2Uuc2hvdygpLG8udXBkYXRlKCl9LDYwMCkpfSksci5vbihcImZvY3VzaW4uZmJcIixmdW5jdGlvbih0KXt2YXIgaT1uLmZhbmN5Ym94P24uZmFuY3lib3guZ2V0SW5zdGFuY2UoKTpudWxsO2kuaXNDbG9zaW5nfHwhaS5jdXJyZW50fHwhaS5jdXJyZW50Lm9wdHMudHJhcEZvY3VzfHxuKHQudGFyZ2V0KS5oYXNDbGFzcyhcImZhbmN5Ym94LWNvbnRhaW5lclwiKXx8bih0LnRhcmdldCkuaXMoZSl8fGkmJlwiZml4ZWRcIiE9PW4odC50YXJnZXQpLmNzcyhcInBvc2l0aW9uXCIpJiYhaS4kcmVmcy5jb250YWluZXIuaGFzKHQudGFyZ2V0KS5sZW5ndGgmJih0LnN0b3BQcm9wYWdhdGlvbigpLGkuZm9jdXMoKSxzLnNjcm9sbFRvcChvLnNjcm9sbFRvcCkuc2Nyb2xsTGVmdChvLnNjcm9sbExlZnQpKX0pLHIub24oXCJrZXlkb3duLmZiXCIsZnVuY3Rpb24odCl7dmFyIGU9by5jdXJyZW50LGk9dC5rZXlDb2RlfHx0LndoaWNoO2lmKGUmJmUub3B0cy5rZXlib2FyZCYmIW4odC50YXJnZXQpLmlzKFwiaW5wdXRcIikmJiFuKHQudGFyZ2V0KS5pcyhcInRleHRhcmVhXCIpKXJldHVybiA4PT09aXx8Mjc9PT1pPyh0LnByZXZlbnREZWZhdWx0KCksdm9pZCBvLmNsb3NlKHQpKTozNz09PWl8fDM4PT09aT8odC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgby5wcmV2aW91cygpKTozOT09PWl8fDQwPT09aT8odC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgby5uZXh0KCkpOnZvaWQgby50cmlnZ2VyKFwiYWZ0ZXJLZXlkb3duXCIsdCxpKX0pLG8uZ3JvdXBbby5jdXJySW5kZXhdLm9wdHMuaWRsZVRpbWUmJihvLmlkbGVTZWNvbmRzQ291bnRlcj0wLHIub24oXCJtb3VzZW1vdmUuZmItaWRsZSBtb3VzZWxlYXZlLmZiLWlkbGUgbW91c2Vkb3duLmZiLWlkbGUgdG91Y2hzdGFydC5mYi1pZGxlIHRvdWNobW92ZS5mYi1pZGxlIHNjcm9sbC5mYi1pZGxlIGtleWRvd24uZmItaWRsZVwiLGZ1bmN0aW9uKHQpe28uaWRsZVNlY29uZHNDb3VudGVyPTAsby5pc0lkbGUmJm8uc2hvd0NvbnRyb2xzKCksby5pc0lkbGU9ITF9KSxvLmlkbGVJbnRlcnZhbD10LnNldEludGVydmFsKGZ1bmN0aW9uKCl7by5pZGxlU2Vjb25kc0NvdW50ZXIrKyxvLmlkbGVTZWNvbmRzQ291bnRlcj49by5ncm91cFtvLmN1cnJJbmRleF0ub3B0cy5pZGxlVGltZSYmIW8uaXNEcmFnZ2luZyYmKG8uaXNJZGxlPSEwLG8uaWRsZVNlY29uZHNDb3VudGVyPTAsby5oaWRlQ29udHJvbHMoKSl9LDFlMykpfSxyZW1vdmVFdmVudHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3Mub2ZmKFwib3JpZW50YXRpb25jaGFuZ2UuZmIgcmVzaXplLmZiXCIpLHIub2ZmKFwiZm9jdXNpbi5mYiBrZXlkb3duLmZiIC5mYi1pZGxlXCIpLHRoaXMuJHJlZnMuY29udGFpbmVyLm9mZihcIi5mYi1jbG9zZSAuZmItcHJldiAuZmItbmV4dFwiKSxlLmlkbGVJbnRlcnZhbCYmKHQuY2xlYXJJbnRlcnZhbChlLmlkbGVJbnRlcnZhbCksZS5pZGxlSW50ZXJ2YWw9bnVsbCl9LHByZXZpb3VzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmp1bXBUbyh0aGlzLmN1cnJQb3MtMSx0KX0sbmV4dDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5qdW1wVG8odGhpcy5jdXJyUG9zKzEsdCl9LGp1bXBUbzpmdW5jdGlvbih0LGUsaSl7dmFyIGEscyxyLGMsbCx1LGQscD10aGlzLGg9cC5ncm91cC5sZW5ndGg7aWYoIShwLmlzRHJhZ2dpbmd8fHAuaXNDbG9zaW5nfHxwLmlzQW5pbWF0aW5nJiZwLmZpcnN0UnVuKSl7aWYodD1wYXJzZUludCh0LDEwKSxzPXAuY3VycmVudD9wLmN1cnJlbnQub3B0cy5sb29wOnAub3B0cy5sb29wLCFzJiYodDwwfHx0Pj1oKSlyZXR1cm4hMTtpZihhPXAuZmlyc3RSdW49bnVsbD09PXAuZmlyc3RSdW4sIShoPDImJiFhJiZwLmlzRHJhZ2dpbmcpKXtpZihjPXAuY3VycmVudCxwLnByZXZJbmRleD1wLmN1cnJJbmRleCxwLnByZXZQb3M9cC5jdXJyUG9zLHI9cC5jcmVhdGVTbGlkZSh0KSxoPjEmJigoc3x8ci5pbmRleD4wKSYmcC5jcmVhdGVTbGlkZSh0LTEpLChzfHxyLmluZGV4PGgtMSkmJnAuY3JlYXRlU2xpZGUodCsxKSkscC5jdXJyZW50PXIscC5jdXJySW5kZXg9ci5pbmRleCxwLmN1cnJQb3M9ci5wb3MscC50cmlnZ2VyKFwiYmVmb3JlU2hvd1wiLGEpLHAudXBkYXRlQ29udHJvbHMoKSx1PW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKHIuJHNsaWRlKSxyLmlzTW92ZWQ9KDAhPT11LmxlZnR8fDAhPT11LnRvcCkmJiFyLiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpLHIuZm9yY2VkRHVyYXRpb249byxuLmlzTnVtZXJpYyhlKT9yLmZvcmNlZER1cmF0aW9uPWU6ZT1yLm9wdHNbYT9cImFuaW1hdGlvbkR1cmF0aW9uXCI6XCJ0cmFuc2l0aW9uRHVyYXRpb25cIl0sZT1wYXJzZUludChlLDEwKSxhKXJldHVybiByLm9wdHMuYW5pbWF0aW9uRWZmZWN0JiZlJiZwLiRyZWZzLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsZStcIm1zXCIpLHAuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLGYocC4kcmVmcy5jb250YWluZXIpLHAuJHJlZnMuY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtb3BlblwiKSxyLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpLHAubG9hZFNsaWRlKHIpLHZvaWQgcC5wcmVsb2FkKFwiaW1hZ2VcIik7bi5lYWNoKHAuc2xpZGVzLGZ1bmN0aW9uKHQsZSl7bi5mYW5jeWJveC5zdG9wKGUuJHNsaWRlKX0pLHIuJHNsaWRlLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIiksci5pc01vdmVkPyhsPU1hdGgucm91bmQoci4kc2xpZGUud2lkdGgoKSksbi5lYWNoKHAuc2xpZGVzLGZ1bmN0aW9uKHQsbyl7dmFyIGk9by5wb3Mtci5wb3M7bi5mYW5jeWJveC5hbmltYXRlKG8uJHNsaWRlLHt0b3A6MCxsZWZ0OmkqbCtpKm8ub3B0cy5ndXR0ZXJ9LGUsZnVuY3Rpb24oKXtvLiRzbGlkZS5yZW1vdmVBdHRyKFwic3R5bGVcIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tbmV4dCBmYW5jeWJveC1zbGlkZS0tcHJldmlvdXNcIiksby5wb3M9PT1wLmN1cnJQb3MmJihyLmlzTW92ZWQ9ITEscC5jb21wbGV0ZSgpKX0pfSkpOnAuJHJlZnMuc3RhZ2UuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksci5pc0xvYWRlZD9wLnJldmVhbENvbnRlbnQocik6cC5sb2FkU2xpZGUocikscC5wcmVsb2FkKFwiaW1hZ2VcIiksYy5wb3MhPT1yLnBvcyYmKGQ9XCJmYW5jeWJveC1zbGlkZS0tXCIrKGMucG9zPnIucG9zP1wibmV4dFwiOlwicHJldmlvdXNcIiksYy4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGUgZmFuY3lib3gtc2xpZGUtLWN1cnJlbnQgZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpLGMuaXNDb21wbGV0ZT0hMSxlJiYoci5pc01vdmVkfHxyLm9wdHMudHJhbnNpdGlvbkVmZmVjdCkmJihyLmlzTW92ZWQ/Yy4kc2xpZGUuYWRkQ2xhc3MoZCk6KGQ9XCJmYW5jeWJveC1hbmltYXRlZCBcIitkK1wiIGZhbmN5Ym94LWZ4LVwiK3Iub3B0cy50cmFuc2l0aW9uRWZmZWN0LG4uZmFuY3lib3guYW5pbWF0ZShjLiRzbGlkZSxkLGUsZnVuY3Rpb24oKXtjLiRzbGlkZS5yZW1vdmVDbGFzcyhkKS5yZW1vdmVBdHRyKFwic3R5bGVcIil9KSkpKX19fSxjcmVhdGVTbGlkZTpmdW5jdGlvbih0KXt2YXIgZSxvLGk9dGhpcztyZXR1cm4gbz10JWkuZ3JvdXAubGVuZ3RoLG89bzwwP2kuZ3JvdXAubGVuZ3RoK286bywhaS5zbGlkZXNbdF0mJmkuZ3JvdXBbb10mJihlPW4oJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zbGlkZVwiPjwvZGl2PicpLmFwcGVuZFRvKGkuJHJlZnMuc3RhZ2UpLGkuc2xpZGVzW3RdPW4uZXh0ZW5kKCEwLHt9LGkuZ3JvdXBbb10se3Bvczp0LCRzbGlkZTplLGlzTG9hZGVkOiExfSksaS51cGRhdGVTbGlkZShpLnNsaWRlc1t0XSkpLGkuc2xpZGVzW3RdfSxzY2FsZVRvQWN0dWFsOmZ1bmN0aW9uKHQsZSxpKXt2YXIgYSxzLHIsYyxsLHU9dGhpcyxkPXUuY3VycmVudCxmPWQuJGNvbnRlbnQscD1wYXJzZUludChkLiRzbGlkZS53aWR0aCgpLDEwKSxoPXBhcnNlSW50KGQuJHNsaWRlLmhlaWdodCgpLDEwKSxnPWQud2lkdGgsYj1kLmhlaWdodDtcImltYWdlXCIhPWQudHlwZXx8ZC5oYXNFcnJvcnx8IWZ8fHUuaXNBbmltYXRpbmd8fChuLmZhbmN5Ym94LnN0b3AoZiksdS5pc0FuaW1hdGluZz0hMCx0PXQ9PT1vPy41KnA6dCxlPWU9PT1vPy41Kmg6ZSxhPW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGYpLGM9Zy9hLndpZHRoLGw9Yi9hLmhlaWdodCxzPS41KnAtLjUqZyxyPS41KmgtLjUqYixnPnAmJihzPWEubGVmdCpjLSh0KmMtdCkscz4wJiYocz0wKSxzPHAtZyYmKHM9cC1nKSksYj5oJiYocj1hLnRvcCpsLShlKmwtZSkscj4wJiYocj0wKSxyPGgtYiYmKHI9aC1iKSksdS51cGRhdGVDdXJzb3IoZyxiKSxuLmZhbmN5Ym94LmFuaW1hdGUoZix7dG9wOnIsbGVmdDpzLHNjYWxlWDpjLHNjYWxlWTpsfSxpfHwzMzAsZnVuY3Rpb24oKXt1LmlzQW5pbWF0aW5nPSExfSksdS5TbGlkZVNob3cmJnUuU2xpZGVTaG93LmlzQWN0aXZlJiZ1LlNsaWRlU2hvdy5zdG9wKCkpfSxzY2FsZVRvRml0OmZ1bmN0aW9uKHQpe3ZhciBlLG89dGhpcyxpPW8uY3VycmVudCxhPWkuJGNvbnRlbnQ7XCJpbWFnZVwiIT1pLnR5cGV8fGkuaGFzRXJyb3J8fCFhfHxvLmlzQW5pbWF0aW5nfHwobi5mYW5jeWJveC5zdG9wKGEpLG8uaXNBbmltYXRpbmc9ITAsZT1vLmdldEZpdFBvcyhpKSxvLnVwZGF0ZUN1cnNvcihlLndpZHRoLGUuaGVpZ2h0KSxuLmZhbmN5Ym94LmFuaW1hdGUoYSx7dG9wOmUudG9wLGxlZnQ6ZS5sZWZ0LHNjYWxlWDplLndpZHRoL2Eud2lkdGgoKSxzY2FsZVk6ZS5oZWlnaHQvYS5oZWlnaHQoKX0sdHx8MzMwLGZ1bmN0aW9uKCl7by5pc0FuaW1hdGluZz0hMX0pKX0sZ2V0Rml0UG9zOmZ1bmN0aW9uKHQpe3ZhciBlLG8saSxhLHMscj10aGlzLGM9dC4kY29udGVudCxsPXQud2lkdGgsdT10LmhlaWdodCxkPXQub3B0cy5tYXJnaW47cmV0dXJuISghY3x8IWMubGVuZ3RofHwhbCYmIXUpJiYoXCJudW1iZXJcIj09PW4udHlwZShkKSYmKGQ9W2QsZF0pLDI9PWQubGVuZ3RoJiYoZD1bZFswXSxkWzFdLGRbMF0sZFsxXV0pLGU9cGFyc2VJbnQoci4kcmVmcy5zdGFnZS53aWR0aCgpLDEwKS0oZFsxXStkWzNdKSxvPXBhcnNlSW50KHIuJHJlZnMuc3RhZ2UuaGVpZ2h0KCksMTApLShkWzBdK2RbMl0pLGk9TWF0aC5taW4oMSxlL2wsby91KSxhPU1hdGguZmxvb3IoaSpsKSxzPU1hdGguZmxvb3IoaSp1KSx7dG9wOk1hdGguZmxvb3IoLjUqKG8tcykpK2RbMF0sbGVmdDpNYXRoLmZsb29yKC41KihlLWEpKStkWzNdLHdpZHRoOmEsaGVpZ2h0OnN9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztuLmVhY2godC5zbGlkZXMsZnVuY3Rpb24oZSxuKXt0LnVwZGF0ZVNsaWRlKG4pfSl9LHVwZGF0ZVNsaWRlOmZ1bmN0aW9uKHQsZSl7dmFyIG89dGhpcyxpPXQmJnQuJGNvbnRlbnQ7aSYmKHQud2lkdGh8fHQuaGVpZ2h0KSYmKG8uaXNBbmltYXRpbmc9ITEsbi5mYW5jeWJveC5zdG9wKGkpLG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKGksby5nZXRGaXRQb3ModCkpLHQucG9zPT09by5jdXJyUG9zJiZvLnVwZGF0ZUN1cnNvcigpKSx0LiRzbGlkZS50cmlnZ2VyKFwicmVmcmVzaFwiKSxvLnRyaWdnZXIoXCJvblVwZGF0ZVwiLHQpfSxjZW50ZXJTbGlkZTpmdW5jdGlvbih0LGUpe3ZhciBpLGEscz10aGlzO3MuY3VycmVudCYmKGk9TWF0aC5yb3VuZCh0LiRzbGlkZS53aWR0aCgpKSxhPXQucG9zLXMuY3VycmVudC5wb3Msbi5mYW5jeWJveC5hbmltYXRlKHQuJHNsaWRlLHt0b3A6MCxsZWZ0OmEqaSthKnQub3B0cy5ndXR0ZXIsb3BhY2l0eToxfSxlPT09bz8wOmUsbnVsbCwhMSkpfSx1cGRhdGVDdXJzb3I6ZnVuY3Rpb24odCxlKXt2YXIgbixpPXRoaXMsYT1pLiRyZWZzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXpvb21hYmxlIGZhbmN5Ym94LWNhbi16b29tSW4gZmFuY3lib3gtY2FuLWRyYWcgZmFuY3lib3gtY2FuLXpvb21PdXRcIik7aS5jdXJyZW50JiYhaS5pc0Nsb3NpbmcmJihpLmlzWm9vbWFibGUoKT8oYS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXpvb21hYmxlXCIpLG49dCE9PW8mJmUhPT1vP3Q8aS5jdXJyZW50LndpZHRoJiZlPGkuY3VycmVudC5oZWlnaHQ6aS5pc1NjYWxlZERvd24oKSxuP2EuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tem9vbUluXCIpOmkuY3VycmVudC5vcHRzLnRvdWNoP2EuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tZHJhZ1wiKTphLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLXpvb21PdXRcIikpOmkuY3VycmVudC5vcHRzLnRvdWNoJiZhLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLWRyYWdcIikpfSxpc1pvb21hYmxlOmZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLG89ZS5jdXJyZW50O2lmKG8mJiFlLmlzQ2xvc2luZylyZXR1cm4hIShcImltYWdlXCI9PT1vLnR5cGUmJm8uaXNMb2FkZWQmJiFvLmhhc0Vycm9yJiYoXCJ6b29tXCI9PT1vLm9wdHMuY2xpY2tDb250ZW50fHxuLmlzRnVuY3Rpb24oby5vcHRzLmNsaWNrQ29udGVudCkmJlwiem9vbVwiPT09by5vcHRzLmNsaWNrQ29udGVudChvKSkmJih0PWUuZ2V0Rml0UG9zKG8pLG8ud2lkdGg+dC53aWR0aHx8by5oZWlnaHQ+dC5oZWlnaHQpKX0saXNTY2FsZWREb3duOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuY3VycmVudCxvPWUuJGNvbnRlbnQsaT0hMTtyZXR1cm4gbyYmKGk9bi5mYW5jeWJveC5nZXRUcmFuc2xhdGUobyksaT1pLndpZHRoPGUud2lkdGh8fGkuaGVpZ2h0PGUuaGVpZ2h0KSxpfSxjYW5QYW46ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5jdXJyZW50LG49ZS4kY29udGVudCxvPSExO3JldHVybiBuJiYobz10LmdldEZpdFBvcyhlKSxvPU1hdGguYWJzKG4ud2lkdGgoKS1vLndpZHRoKT4xfHxNYXRoLmFicyhuLmhlaWdodCgpLW8uaGVpZ2h0KT4xKSxvfSxsb2FkU2xpZGU6ZnVuY3Rpb24odCl7dmFyIGUsbyxpLGE9dGhpcztpZighdC5pc0xvYWRpbmcmJiF0LmlzTG9hZGVkKXtzd2l0Y2godC5pc0xvYWRpbmc9ITAsYS50cmlnZ2VyKFwiYmVmb3JlTG9hZFwiLHQpLGU9dC50eXBlLG89dC4kc2xpZGUsby5vZmYoXCJyZWZyZXNoXCIpLnRyaWdnZXIoXCJvblJlc2V0XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiKyhlfHxcInVua25vd25cIikpLmFkZENsYXNzKHQub3B0cy5zbGlkZUNsYXNzKSxlKXtjYXNlXCJpbWFnZVwiOmEuc2V0SW1hZ2UodCk7YnJlYWs7Y2FzZVwiaWZyYW1lXCI6YS5zZXRJZnJhbWUodCk7YnJlYWs7Y2FzZVwiaHRtbFwiOmEuc2V0Q29udGVudCh0LHQuc3JjfHx0LmNvbnRlbnQpO2JyZWFrO2Nhc2VcImlubGluZVwiOm4odC5zcmMpLmxlbmd0aD9hLnNldENvbnRlbnQodCxuKHQuc3JjKSk6YS5zZXRFcnJvcih0KTticmVhaztjYXNlXCJhamF4XCI6YS5zaG93TG9hZGluZyh0KSxpPW4uYWpheChuLmV4dGVuZCh7fSx0Lm9wdHMuYWpheC5zZXR0aW5ncyx7dXJsOnQuc3JjLHN1Y2Nlc3M6ZnVuY3Rpb24oZSxuKXtcInN1Y2Nlc3NcIj09PW4mJmEuc2V0Q29udGVudCh0LGUpfSxlcnJvcjpmdW5jdGlvbihlLG4pe2UmJlwiYWJvcnRcIiE9PW4mJmEuc2V0RXJyb3IodCl9fSkpLG8ub25lKFwib25SZXNldFwiLGZ1bmN0aW9uKCl7aS5hYm9ydCgpfSk7YnJlYWs7Y2FzZVwidmlkZW9cIjphLnNldENvbnRlbnQodCwnPHZpZGVvIGNvbnRyb2xzPjxzb3VyY2Ugc3JjPVwiJyt0LnNyYysnXCIgdHlwZT1cIicrdC5vcHRzLnZpZGVvRm9ybWF0K1wiXFxcIj5Zb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEhUTUw1IHZpZGVvPC92aWRlbz5cIik7YnJlYWs7ZGVmYXVsdDphLnNldEVycm9yKHQpfXJldHVybiEwfX0sc2V0SW1hZ2U6ZnVuY3Rpb24oZSl7dmFyIG8saSxhLHMscj10aGlzLGM9ZS5vcHRzLnNyY3NldHx8ZS5vcHRzLmltYWdlLnNyY3NldDtpZihjKXthPXQuZGV2aWNlUGl4ZWxSYXRpb3x8MSxzPXQuaW5uZXJXaWR0aCphLGk9Yy5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiB0LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCxuKXt2YXIgbz1wYXJzZUludCh0LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpLDEwKTtyZXR1cm4gMD09PW4/ZS51cmw9dDp2b2lkKG8mJihlLnZhbHVlPW8sZS5wb3N0Zml4PXRbdC5sZW5ndGgtMV0pKX0pLGV9KSxpLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC52YWx1ZS1lLnZhbHVlfSk7Zm9yKHZhciBsPTA7bDxpLmxlbmd0aDtsKyspe3ZhciB1PWlbbF07aWYoXCJ3XCI9PT11LnBvc3RmaXgmJnUudmFsdWU+PXN8fFwieFwiPT09dS5wb3N0Zml4JiZ1LnZhbHVlPj1hKXtvPXU7YnJlYWt9fSFvJiZpLmxlbmd0aCYmKG89aVtpLmxlbmd0aC0xXSksbyYmKGUuc3JjPW8udXJsLGUud2lkdGgmJmUuaGVpZ2h0JiZcIndcIj09by5wb3N0Zml4JiYoZS5oZWlnaHQ9ZS53aWR0aC9lLmhlaWdodCpvLnZhbHVlLGUud2lkdGg9by52YWx1ZSkpfWUuJGNvbnRlbnQ9bignPGRpdiBjbGFzcz1cImZhbmN5Ym94LWltYWdlLXdyYXBcIj48L2Rpdj4nKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKS5hcHBlbmRUbyhlLiRzbGlkZSksZS5vcHRzLnByZWxvYWQhPT0hMSYmZS5vcHRzLndpZHRoJiZlLm9wdHMuaGVpZ2h0JiYoZS5vcHRzLnRodW1ifHxlLm9wdHMuJHRodW1iKT8oZS53aWR0aD1lLm9wdHMud2lkdGgsZS5oZWlnaHQ9ZS5vcHRzLmhlaWdodCxlLiRnaG9zdD1uKFwiPGltZyAvPlwiKS5vbmUoXCJlcnJvclwiLGZ1bmN0aW9uKCl7bih0aGlzKS5yZW1vdmUoKSxlLiRnaG9zdD1udWxsLHIuc2V0QmlnSW1hZ2UoZSl9KS5vbmUoXCJsb2FkXCIsZnVuY3Rpb24oKXtyLmFmdGVyTG9hZChlKSxyLnNldEJpZ0ltYWdlKGUpfSkuYWRkQ2xhc3MoXCJmYW5jeWJveC1pbWFnZVwiKS5hcHBlbmRUbyhlLiRjb250ZW50KS5hdHRyKFwic3JjXCIsZS5vcHRzLnRodW1ifHxlLm9wdHMuJHRodW1iLmF0dHIoXCJzcmNcIikpKTpyLnNldEJpZ0ltYWdlKGUpfSxzZXRCaWdJbWFnZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLG89bihcIjxpbWcgLz5cIik7dC4kaW1hZ2U9by5vbmUoXCJlcnJvclwiLGZ1bmN0aW9uKCl7ZS5zZXRFcnJvcih0KX0pLm9uZShcImxvYWRcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0LnRpbW91dHMpLHQudGltb3V0cz1udWxsLGUuaXNDbG9zaW5nfHwodC53aWR0aD10Lm9wdHMud2lkdGh8fHRoaXMubmF0dXJhbFdpZHRoLHQuaGVpZ2h0PXQub3B0cy5oZWlnaHR8fHRoaXMubmF0dXJhbEhlaWdodCx0Lm9wdHMuaW1hZ2Uuc3Jjc2V0JiZvLmF0dHIoXCJzaXplc1wiLFwiMTAwdndcIikuYXR0cihcInNyY3NldFwiLHQub3B0cy5pbWFnZS5zcmNzZXQpLGUuaGlkZUxvYWRpbmcodCksdC4kZ2hvc3Q/dC50aW1vdXRzPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnRpbW91dHM9bnVsbCx0LiRnaG9zdC5oaWRlKCl9LE1hdGgubWluKDMwMCxNYXRoLm1heCgxZTMsdC5oZWlnaHQvMTYwMCkpKTplLmFmdGVyTG9hZCh0KSl9KS5hZGRDbGFzcyhcImZhbmN5Ym94LWltYWdlXCIpLmF0dHIoXCJzcmNcIix0LnNyYykuYXBwZW5kVG8odC4kY29udGVudCksKG9bMF0uY29tcGxldGV8fFwiY29tcGxldGVcIj09b1swXS5yZWFkeVN0YXRlKSYmb1swXS5uYXR1cmFsV2lkdGgmJm9bMF0ubmF0dXJhbEhlaWdodD9vLnRyaWdnZXIoXCJsb2FkXCIpOm9bMF0uZXJyb3I/by50cmlnZ2VyKFwiZXJyb3JcIik6dC50aW1vdXRzPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvWzBdLmNvbXBsZXRlfHx0Lmhhc0Vycm9yfHxlLnNob3dMb2FkaW5nKHQpfSwxMDApfSxzZXRJZnJhbWU6ZnVuY3Rpb24odCl7dmFyIGUsaT10aGlzLGE9dC5vcHRzLmlmcmFtZSxzPXQuJHNsaWRlO3QuJGNvbnRlbnQ9bignPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNvbnRlbnQnKyhhLnByZWxvYWQ/XCIgZmFuY3lib3gtaXMtaGlkZGVuXCI6XCJcIikrJ1wiPjwvZGl2PicpLmNzcyhhLmNzcykuYXBwZW5kVG8ocyksZT1uKGEudHBsLnJlcGxhY2UoL1xce3JuZFxcfS9nLChuZXcgRGF0ZSkuZ2V0VGltZSgpKSkuYXR0cihhLmF0dHIpLmFwcGVuZFRvKHQuJGNvbnRlbnQpLGEucHJlbG9hZD8oaS5zaG93TG9hZGluZyh0KSxlLm9uKFwibG9hZC5mYiBlcnJvci5mYlwiLGZ1bmN0aW9uKGUpe3RoaXMuaXNSZWFkeT0xLHQuJHNsaWRlLnRyaWdnZXIoXCJyZWZyZXNoXCIpLGkuYWZ0ZXJMb2FkKHQpfSkscy5vbihcInJlZnJlc2guZmJcIixmdW5jdGlvbigpe3ZhciBuLGkscyxyPXQuJGNvbnRlbnQsYz1hLmNzcy53aWR0aCxsPWEuY3NzLmhlaWdodDtpZigxPT09ZVswXS5pc1JlYWR5KXt0cnl7aT1lLmNvbnRlbnRzKCkscz1pLmZpbmQoXCJib2R5XCIpfWNhdGNoKHQpe31zJiZzLmxlbmd0aCYmKGM9PT1vJiYobj1lWzBdLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLGM9TWF0aC5jZWlsKHMub3V0ZXJXaWR0aCghMCkrKHIud2lkdGgoKS1uKSksYys9ci5vdXRlcldpZHRoKCktci5pbm5lcldpZHRoKCkpLGw9PT1vJiYobD1NYXRoLmNlaWwocy5vdXRlckhlaWdodCghMCkpLGwrPXIub3V0ZXJIZWlnaHQoKS1yLmlubmVySGVpZ2h0KCkpLGMmJnIud2lkdGgoYyksbCYmci5oZWlnaHQobCkpLHIucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIil9fSkpOnRoaXMuYWZ0ZXJMb2FkKHQpLGUuYXR0cihcInNyY1wiLHQuc3JjKSx0Lm9wdHMuc21hbGxCdG49PT0hMCYmdC4kY29udGVudC5wcmVwZW5kKGkudHJhbnNsYXRlKHQsdC5vcHRzLmJ0blRwbC5zbWFsbEJ0bikpLHMub25lKFwib25SZXNldFwiLGZ1bmN0aW9uKCl7dHJ5e24odGhpcykuZmluZChcImlmcmFtZVwiKS5oaWRlKCkuYXR0cihcInNyY1wiLFwiLy9hYm91dDpibGFua1wiKX1jYXRjaCh0KXt9bih0aGlzKS5lbXB0eSgpLHQuaXNMb2FkZWQ9ITF9KX0sc2V0Q29udGVudDpmdW5jdGlvbih0LGUpe3ZhciBvPXRoaXM7by5pc0Nsb3Npbmd8fChvLmhpZGVMb2FkaW5nKHQpLHQuJHNsaWRlLmVtcHR5KCksbChlKSYmZS5wYXJlbnQoKS5sZW5ndGg/KGUucGFyZW50KFwiLmZhbmN5Ym94LXNsaWRlLS1pbmxpbmVcIikudHJpZ2dlcihcIm9uUmVzZXRcIiksdC4kcGxhY2Vob2xkZXI9bihcIjxkaXY+PC9kaXY+XCIpLmhpZGUoKS5pbnNlcnRBZnRlcihlKSxlLmNzcyhcImRpc3BsYXlcIixcImlubGluZS1ibG9ja1wiKSk6dC5oYXNFcnJvcnx8KFwic3RyaW5nXCI9PT1uLnR5cGUoZSkmJihlPW4oXCI8ZGl2PlwiKS5hcHBlbmQobi50cmltKGUpKS5jb250ZW50cygpLDM9PT1lWzBdLm5vZGVUeXBlJiYoZT1uKFwiPGRpdj5cIikuaHRtbChlKSkpLHQub3B0cy5maWx0ZXImJihlPW4oXCI8ZGl2PlwiKS5odG1sKGUpLmZpbmQodC5vcHRzLmZpbHRlcikpKSx0LiRzbGlkZS5vbmUoXCJvblJlc2V0XCIsZnVuY3Rpb24oKXtuKHRoaXMpLmZpbmQoXCJ2aWRlbyxhdWRpb1wiKS50cmlnZ2VyKFwicGF1c2VcIiksdC4kcGxhY2Vob2xkZXImJih0LiRwbGFjZWhvbGRlci5hZnRlcihlLmhpZGUoKSkucmVtb3ZlKCksdC4kcGxhY2Vob2xkZXI9bnVsbCksdC4kc21hbGxCdG4mJih0LiRzbWFsbEJ0bi5yZW1vdmUoKSx0LiRzbWFsbEJ0bj1udWxsKSx0Lmhhc0Vycm9yfHwobih0aGlzKS5lbXB0eSgpLHQuaXNMb2FkZWQ9ITEpfSksdC4kY29udGVudD1uKGUpLmFwcGVuZFRvKHQuJHNsaWRlKSx0aGlzLmFmdGVyTG9hZCh0KSl9LHNldEVycm9yOmZ1bmN0aW9uKHQpe3QuaGFzRXJyb3I9ITAsdC4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIrdC50eXBlKSx0aGlzLnNldENvbnRlbnQodCx0aGlzLnRyYW5zbGF0ZSh0LHQub3B0cy5lcnJvclRwbCkpfSxzaG93TG9hZGluZzpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3Q9dHx8ZS5jdXJyZW50LHQmJiF0LiRzcGlubmVyJiYodC4kc3Bpbm5lcj1uKGUub3B0cy5zcGlubmVyVHBsKS5hcHBlbmRUbyh0LiRzbGlkZSkpfSxoaWRlTG9hZGluZzpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3Q9dHx8ZS5jdXJyZW50LHQmJnQuJHNwaW5uZXImJih0LiRzcGlubmVyLnJlbW92ZSgpLGRlbGV0ZSB0LiRzcGlubmVyKX0sYWZ0ZXJMb2FkOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7ZS5pc0Nsb3Npbmd8fCh0LmlzTG9hZGluZz0hMSx0LmlzTG9hZGVkPSEwLGUudHJpZ2dlcihcImFmdGVyTG9hZFwiLHQpLGUuaGlkZUxvYWRpbmcodCksdC5vcHRzLnNtYWxsQnRuJiYhdC4kc21hbGxCdG4mJih0LiRzbWFsbEJ0bj1uKGUudHJhbnNsYXRlKHQsdC5vcHRzLmJ0blRwbC5zbWFsbEJ0bikpLmFwcGVuZFRvKHQuJGNvbnRlbnQuZmlsdGVyKFwiZGl2LGZvcm1cIikuZmlyc3QoKSkpLHQub3B0cy5wcm90ZWN0JiZ0LiRjb250ZW50JiYhdC5oYXNFcnJvciYmKHQuJGNvbnRlbnQub24oXCJjb250ZXh0bWVudS5mYlwiLGZ1bmN0aW9uKHQpe3JldHVybiAyPT10LmJ1dHRvbiYmdC5wcmV2ZW50RGVmYXVsdCgpLCEwfSksXCJpbWFnZVwiPT09dC50eXBlJiZuKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc3BhY2ViYWxsXCI+PC9kaXY+JykuYXBwZW5kVG8odC4kY29udGVudCkpLGUucmV2ZWFsQ29udGVudCh0KSl9LHJldmVhbENvbnRlbnQ6ZnVuY3Rpb24odCl7dmFyIGUsaSxhLHMscixjPXRoaXMsbD10LiRzbGlkZSx1PSExO3JldHVybiBlPXQub3B0c1tjLmZpcnN0UnVuP1wiYW5pbWF0aW9uRWZmZWN0XCI6XCJ0cmFuc2l0aW9uRWZmZWN0XCJdLGE9dC5vcHRzW2MuZmlyc3RSdW4/XCJhbmltYXRpb25EdXJhdGlvblwiOlwidHJhbnNpdGlvbkR1cmF0aW9uXCJdLGE9cGFyc2VJbnQodC5mb3JjZWREdXJhdGlvbj09PW8/YTp0LmZvcmNlZER1cmF0aW9uLDEwKSwhdC5pc01vdmVkJiZ0LnBvcz09PWMuY3VyclBvcyYmYXx8KGU9ITEpLFwiem9vbVwiIT09ZXx8dC5wb3M9PT1jLmN1cnJQb3MmJmEmJlwiaW1hZ2VcIj09PXQudHlwZSYmIXQuaGFzRXJyb3ImJih1PWMuZ2V0VGh1bWJQb3ModCkpfHwoZT1cImZhZGVcIiksXCJ6b29tXCI9PT1lPyhyPWMuZ2V0Rml0UG9zKHQpLHIuc2NhbGVYPXIud2lkdGgvdS53aWR0aCxyLnNjYWxlWT1yLmhlaWdodC91LmhlaWdodCxkZWxldGUgci53aWR0aCxkZWxldGUgci5oZWlnaHQscz10Lm9wdHMuem9vbU9wYWNpdHksXCJhdXRvXCI9PXMmJihzPU1hdGguYWJzKHQud2lkdGgvdC5oZWlnaHQtdS53aWR0aC91LmhlaWdodCk+LjEpLHMmJih1Lm9wYWNpdHk9LjEsci5vcGFjaXR5PTEpLG4uZmFuY3lib3guc2V0VHJhbnNsYXRlKHQuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIiksdSksZih0LiRjb250ZW50KSx2b2lkIG4uZmFuY3lib3guYW5pbWF0ZSh0LiRjb250ZW50LHIsYSxmdW5jdGlvbigpe2MuY29tcGxldGUoKX0pKTooYy51cGRhdGVTbGlkZSh0KSxlPyhuLmZhbmN5Ym94LnN0b3AobCksaT1cImZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LXNsaWRlLS1cIisodC5wb3M+PWMucHJldlBvcz9cIm5leHRcIjpcInByZXZpb3VzXCIpK1wiIGZhbmN5Ym94LWZ4LVwiK2UsbC5yZW1vdmVBdHRyKFwic3R5bGVcIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudCBmYW5jeWJveC1zbGlkZS0tbmV4dCBmYW5jeWJveC1zbGlkZS0tcHJldmlvdXNcIikuYWRkQ2xhc3MoaSksdC4kY29udGVudC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLWhpZGRlblwiKSxmKGwpLHZvaWQgbi5mYW5jeWJveC5hbmltYXRlKGwsXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiLGEsZnVuY3Rpb24oZSl7bC5yZW1vdmVDbGFzcyhpKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksdC5wb3M9PT1jLmN1cnJQb3MmJmMuY29tcGxldGUoKX0sITApKTooZihsKSx0LiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLHZvaWQodC5wb3M9PT1jLmN1cnJQb3MmJmMuY29tcGxldGUoKSkpKX0sZ2V0VGh1bWJQb3M6ZnVuY3Rpb24obyl7dmFyIGksYT10aGlzLHM9ITEscj1mdW5jdGlvbihlKXtmb3IodmFyIG8saT1lWzBdLGE9aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPVtdO251bGwhPT1pLnBhcmVudEVsZW1lbnQ7KVwiaGlkZGVuXCIhPT1uKGkucGFyZW50RWxlbWVudCkuY3NzKFwib3ZlcmZsb3dcIikmJlwiYXV0b1wiIT09bihpLnBhcmVudEVsZW1lbnQpLmNzcyhcIm92ZXJmbG93XCIpfHxzLnB1c2goaS5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxpPWkucGFyZW50RWxlbWVudDtyZXR1cm4gbz1zLmV2ZXJ5KGZ1bmN0aW9uKHQpe3ZhciBlPU1hdGgubWluKGEucmlnaHQsdC5yaWdodCktTWF0aC5tYXgoYS5sZWZ0LHQubGVmdCksbj1NYXRoLm1pbihhLmJvdHRvbSx0LmJvdHRvbSktTWF0aC5tYXgoYS50b3AsdC50b3ApO3JldHVybiBlPjAmJm4+MH0pLG8mJmEuYm90dG9tPjAmJmEucmlnaHQ+MCYmYS5sZWZ0PG4odCkud2lkdGgoKSYmYS50b3A8bih0KS5oZWlnaHQoKX0sYz1vLm9wdHMuJHRodW1iLGw9Yz9jLm9mZnNldCgpOjA7cmV0dXJuIGwmJmNbMF0ub3duZXJEb2N1bWVudD09PWUmJnIoYykmJihpPWEuJHJlZnMuc3RhZ2Uub2Zmc2V0KCkscz17dG9wOmwudG9wLWkudG9wK3BhcnNlRmxvYXQoYy5jc3MoXCJib3JkZXItdG9wLXdpZHRoXCIpfHwwKSxsZWZ0OmwubGVmdC1pLmxlZnQrcGFyc2VGbG9hdChjLmNzcyhcImJvcmRlci1sZWZ0LXdpZHRoXCIpfHwwKSx3aWR0aDpjLndpZHRoKCksaGVpZ2h0OmMuaGVpZ2h0KCksc2NhbGVYOjEsc2NhbGVZOjF9KSxzfSxjb21wbGV0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsbz10LmN1cnJlbnQsaT17fTtvLmlzTW92ZWR8fCFvLmlzTG9hZGVkfHxvLmlzQ29tcGxldGV8fChvLmlzQ29tcGxldGU9ITAsby4kc2xpZGUuc2libGluZ3MoKS50cmlnZ2VyKFwib25SZXNldFwiKSx0LnByZWxvYWQoXCJpbmxpbmVcIiksZihvLiRzbGlkZSksby4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGVcIiksbi5lYWNoKHQuc2xpZGVzLGZ1bmN0aW9uKGUsbyl7by5wb3M+PXQuY3VyclBvcy0xJiZvLnBvczw9dC5jdXJyUG9zKzE/aVtvLnBvc109bzpvJiYobi5mYW5jeWJveC5zdG9wKG8uJHNsaWRlKSxvLiRzbGlkZS5vZmYoKS5yZW1vdmUoKSl9KSx0LnNsaWRlcz1pLHQudXBkYXRlQ3Vyc29yKCksdC50cmlnZ2VyKFwiYWZ0ZXJTaG93XCIpLG8uJHNsaWRlLmZpbmQoXCJ2aWRlbyxhdWRpb1wiKS5maXJzdCgpLnRyaWdnZXIoXCJwbGF5XCIpLChuKGUuYWN0aXZlRWxlbWVudCkuaXMoXCJbZGlzYWJsZWRdXCIpfHxvLm9wdHMuYXV0b0ZvY3VzJiZcImltYWdlXCIhPW8udHlwZSYmXCJpZnJhbWVcIiE9PW8udHlwZSkmJnQuZm9jdXMoKSl9LHByZWxvYWQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPWUuc2xpZGVzW2UuY3VyclBvcysxXSxvPWUuc2xpZGVzW2UuY3VyclBvcy0xXTtuJiZuLnR5cGU9PT10JiZlLmxvYWRTbGlkZShuKSxvJiZvLnR5cGU9PT10JiZlLmxvYWRTbGlkZShvKX0sZm9jdXM6ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuY3VycmVudDt0aGlzLmlzQ2xvc2luZ3x8KGUmJmUuaXNDb21wbGV0ZSYmKHQ9ZS4kc2xpZGUuZmluZChcImlucHV0W2F1dG9mb2N1c106ZW5hYmxlZDp2aXNpYmxlOmZpcnN0XCIpLHQubGVuZ3RofHwodD1lLiRzbGlkZS5maW5kKFwiYnV0dG9uLDppbnB1dCxbdGFiaW5kZXhdLGFcIikuZmlsdGVyKFwiOmVuYWJsZWQ6dmlzaWJsZTpmaXJzdFwiKSkpLHQ9dCYmdC5sZW5ndGg/dDp0aGlzLiRyZWZzLmNvbnRhaW5lcix0LmZvY3VzKCkpfSxhY3RpdmF0ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7bihcIi5mYW5jeWJveC1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPW4odGhpcykuZGF0YShcIkZhbmN5Qm94XCIpO2UmJmUuaWQhPT10LmlkJiYhZS5pc0Nsb3NpbmcmJihlLnRyaWdnZXIoXCJvbkRlYWN0aXZhdGVcIiksZS5yZW1vdmVFdmVudHMoKSxlLmlzVmlzaWJsZT0hMSl9KSx0LmlzVmlzaWJsZT0hMCwodC5jdXJyZW50fHx0LmlzSWRsZSkmJih0LnVwZGF0ZSgpLHQudXBkYXRlQ29udHJvbHMoKSksdC50cmlnZ2VyKFwib25BY3RpdmF0ZVwiKSx0LmFkZEV2ZW50cygpfSxjbG9zZTpmdW5jdGlvbih0LGUpe3ZhciBvLGksYSxzLHIsYyxsPXRoaXMscD1sLmN1cnJlbnQsaD1mdW5jdGlvbigpe2wuY2xlYW5VcCh0KX07cmV0dXJuIWwuaXNDbG9zaW5nJiYobC5pc0Nsb3Npbmc9ITAsbC50cmlnZ2VyKFwiYmVmb3JlQ2xvc2VcIix0KT09PSExPyhsLmlzQ2xvc2luZz0hMSx1KGZ1bmN0aW9uKCl7bC51cGRhdGUoKX0pLCExKToobC5yZW1vdmVFdmVudHMoKSxwLnRpbW91dHMmJmNsZWFyVGltZW91dChwLnRpbW91dHMpLGE9cC4kY29udGVudCxvPXAub3B0cy5hbmltYXRpb25FZmZlY3QsaT1uLmlzTnVtZXJpYyhlKT9lOm8/cC5vcHRzLmFuaW1hdGlvbkR1cmF0aW9uOjAscC4kc2xpZGUub2ZmKGQpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlIGZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1hbmltYXRlZFwiKSxwLiRzbGlkZS5zaWJsaW5ncygpLnRyaWdnZXIoXCJvblJlc2V0XCIpLnJlbW92ZSgpLGkmJmwuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtb3BlblwiKS5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLWNsb3NpbmdcIiksbC5oaWRlTG9hZGluZyhwKSxsLmhpZGVDb250cm9scygpLGwudXBkYXRlQ3Vyc29yKCksXCJ6b29tXCIhPT1vfHx0IT09ITAmJmEmJmkmJlwiaW1hZ2VcIj09PXAudHlwZSYmIXAuaGFzRXJyb3ImJihjPWwuZ2V0VGh1bWJQb3MocCkpfHwobz1cImZhZGVcIiksXCJ6b29tXCI9PT1vPyhuLmZhbmN5Ym94LnN0b3AoYSkscj1uLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShhKSxyLndpZHRoPXIud2lkdGgqci5zY2FsZVgsci5oZWlnaHQ9ci5oZWlnaHQqci5zY2FsZVkscz1wLm9wdHMuem9vbU9wYWNpdHksXCJhdXRvXCI9PXMmJihzPU1hdGguYWJzKHAud2lkdGgvcC5oZWlnaHQtYy53aWR0aC9jLmhlaWdodCk+LjEpLHMmJihjLm9wYWNpdHk9MCksci5zY2FsZVg9ci53aWR0aC9jLndpZHRoLHIuc2NhbGVZPXIuaGVpZ2h0L2MuaGVpZ2h0LHIud2lkdGg9Yy53aWR0aCxyLmhlaWdodD1jLmhlaWdodCxuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShwLiRjb250ZW50LHIpLGYocC4kY29udGVudCksbi5mYW5jeWJveC5hbmltYXRlKHAuJGNvbnRlbnQsYyxpLGgpLCEwKToobyYmaT90PT09ITA/c2V0VGltZW91dChoLGkpOm4uZmFuY3lib3guYW5pbWF0ZShwLiRzbGlkZS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIpLFwiZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzIGZhbmN5Ym94LWZ4LVwiK28saSxoKTpoKCksITApKSl9LGNsZWFuVXA6ZnVuY3Rpb24odCl7dmFyIG8saSxhPXRoaXMscj1uKFwiYm9keVwiKTthLmN1cnJlbnQuJHNsaWRlLnRyaWdnZXIoXCJvblJlc2V0XCIpLGEuJHJlZnMuY29udGFpbmVyLmVtcHR5KCkucmVtb3ZlKCksYS50cmlnZ2VyKFwiYWZ0ZXJDbG9zZVwiLHQpLGEuJGxhc3RGb2N1cyYmYS5jdXJyZW50Lm9wdHMuYmFja0ZvY3VzJiZhLiRsYXN0Rm9jdXMuZm9jdXMoKSxhLmN1cnJlbnQ9bnVsbCxvPW4uZmFuY3lib3guZ2V0SW5zdGFuY2UoKSxvP28uYWN0aXZhdGUoKToocy5zY3JvbGxUb3AoYS5zY3JvbGxUb3ApLnNjcm9sbExlZnQoYS5zY3JvbGxMZWZ0KSxyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYWN0aXZlIGNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiKSxyLmhhc0NsYXNzKFwiZmFuY3lib3gtaW9zZml4XCIpJiYoaT1wYXJzZUludChlLmJvZHkuc3R5bGUudG9wLDEwKSxyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaW9zZml4XCIpLmNzcyhcInRvcFwiLFwiXCIpLnNjcm9sbFRvcChpKi0xKSksbihcIiNmYW5jeWJveC1zdHlsZS1ub3Njcm9sbFwiKS5yZW1vdmUoKSl9LHRyaWdnZXI6ZnVuY3Rpb24odCxlKXt2YXIgbyxpPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxhPXRoaXMscz1lJiZlLm9wdHM/ZTphLmN1cnJlbnQ7cmV0dXJuIHM/aS51bnNoaWZ0KHMpOnM9YSxpLnVuc2hpZnQoYSksbi5pc0Z1bmN0aW9uKHMub3B0c1t0XSkmJihvPXMub3B0c1t0XS5hcHBseShzLGkpKSxvPT09ITE/bzp2b2lkKFwiYWZ0ZXJDbG9zZVwiIT09dCYmYS4kcmVmcz9hLiRyZWZzLmNvbnRhaW5lci50cmlnZ2VyKHQrXCIuZmJcIixpKTpyLnRyaWdnZXIodCtcIi5mYlwiLGkpKX0sdXBkYXRlQ29udHJvbHM6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPWUuY3VycmVudCxvPW4uaW5kZXgsaT1uLm9wdHMuY2FwdGlvbixhPWUuJHJlZnMuY29udGFpbmVyLHM9ZS4kcmVmcy5jYXB0aW9uO24uJHNsaWRlLnRyaWdnZXIoXCJyZWZyZXNoXCIpLGUuJGNhcHRpb249aSYmaS5sZW5ndGg/cy5odG1sKGkpOm51bGwsZS5pc0hpZGRlbkNvbnRyb2xzfHxlLmlzSWRsZXx8ZS5zaG93Q29udHJvbHMoKSxhLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1jb3VudF1cIikuaHRtbChlLmdyb3VwLmxlbmd0aCksYS5maW5kKFwiW2RhdGEtZmFuY3lib3gtaW5kZXhdXCIpLmh0bWwobysxKSxhLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwhbi5vcHRzLmxvb3AmJm88PTApLGEuZmluZChcIltkYXRhLWZhbmN5Ym94LW5leHRdXCIpLnByb3AoXCJkaXNhYmxlZFwiLCFuLm9wdHMubG9vcCYmbz49ZS5ncm91cC5sZW5ndGgtMSksXCJpbWFnZVwiPT09bi50eXBlP2EuZmluZChcIltkYXRhLWZhbmN5Ym94LWRvd25sb2FkXVwiKS5hdHRyKFwiaHJlZlwiLG4ub3B0cy5pbWFnZS5zcmN8fG4uc3JjKS5zaG93KCk6YS5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdLFtkYXRhLWZhbmN5Ym94LXpvb21dXCIpLmhpZGUoKX0saGlkZUNvbnRyb2xzOmZ1bmN0aW9uKCl7dGhpcy5pc0hpZGRlbkNvbnRyb2xzPSEwLHRoaXMuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1pbmZvYmFyIGZhbmN5Ym94LXNob3ctdG9vbGJhciBmYW5jeWJveC1zaG93LWNhcHRpb24gZmFuY3lib3gtc2hvdy1uYXZcIil9LHNob3dDb250cm9sczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmN1cnJlbnQ/dC5jdXJyZW50Lm9wdHM6dC5vcHRzLG49dC4kcmVmcy5jb250YWluZXI7dC5pc0hpZGRlbkNvbnRyb2xzPSExLHQuaWRsZVNlY29uZHNDb3VudGVyPTAsbi50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctdG9vbGJhclwiLCEoIWUudG9vbGJhcnx8IWUuYnV0dG9ucykpLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1pbmZvYmFyXCIsISEoZS5pbmZvYmFyJiZ0Lmdyb3VwLmxlbmd0aD4xKSkudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LW5hdlwiLCEhKGUuYXJyb3dzJiZ0Lmdyb3VwLmxlbmd0aD4xKSkudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy1tb2RhbFwiLCEhZS5tb2RhbCksdC4kY2FwdGlvbj9uLmFkZENsYXNzKFwiZmFuY3lib3gtc2hvdy1jYXB0aW9uIFwiKTpuLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2hvdy1jYXB0aW9uXCIpfSx0b2dnbGVDb250cm9sczpmdW5jdGlvbigpe3RoaXMuaXNIaWRkZW5Db250cm9scz90aGlzLnNob3dDb250cm9scygpOnRoaXMuaGlkZUNvbnRyb2xzKCl9fSksbi5mYW5jeWJveD17dmVyc2lvbjpcIjMuMi4xMFwiLGRlZmF1bHRzOmEsZ2V0SW5zdGFuY2U6ZnVuY3Rpb24odCl7dmFyIGU9bignLmZhbmN5Ym94LWNvbnRhaW5lcjpub3QoXCIuZmFuY3lib3gtaXMtY2xvc2luZ1wiKTpsYXN0JykuZGF0YShcIkZhbmN5Qm94XCIpLG89QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiBlIGluc3RhbmNlb2YgcCYmKFwic3RyaW5nXCI9PT1uLnR5cGUodCk/ZVt0XS5hcHBseShlLG8pOlwiZnVuY3Rpb25cIj09PW4udHlwZSh0KSYmdC5hcHBseShlLG8pLGUpfSxvcGVuOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gbmV3IHAodCxlLG4pfSxjbG9zZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldEluc3RhbmNlKCk7ZSYmKGUuY2xvc2UoKSx0PT09ITAmJnRoaXMuY2xvc2UoKSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKCEwKSxyLm9mZihcImNsaWNrLmZiLXN0YXJ0XCIpfSxpc01vYmlsZTplLmNyZWF0ZVRvdWNoIT09byYmL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHVzZTNkOmZ1bmN0aW9uKCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LmdldENvbXB1dGVkU3R5bGUmJnQuZ2V0Q29tcHV0ZWRTdHlsZShuKS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpJiYhKGUuZG9jdW1lbnRNb2RlJiZlLmRvY3VtZW50TW9kZTwxMSl9KCksZ2V0VHJhbnNsYXRlOmZ1bmN0aW9uKHQpe3ZhciBlO2lmKCF0fHwhdC5sZW5ndGgpcmV0dXJuITE7aWYoZT10LmVxKDApLmNzcyhcInRyYW5zZm9ybVwiKSxlJiZlLmluZGV4T2YoXCJtYXRyaXhcIikhPT0tMT8oZT1lLnNwbGl0KFwiKFwiKVsxXSxlPWUuc3BsaXQoXCIpXCIpWzBdLGU9ZS5zcGxpdChcIixcIikpOmU9W10sZS5sZW5ndGgpZT1lLmxlbmd0aD4xMD9bZVsxM10sZVsxMl0sZVswXSxlWzVdXTpbZVs1XSxlWzRdLGVbMF0sZVszXV0sZT1lLm1hcChwYXJzZUZsb2F0KTtlbHNle2U9WzAsMCwxLDFdO3ZhciBuPS9cXC4qdHJhbnNsYXRlXFwoKC4qKXB4LCguKilweFxcKS9pLG89bi5leGVjKHQuZXEoMCkuYXR0cihcInN0eWxlXCIpKTtvJiYoZVswXT1wYXJzZUZsb2F0KG9bMl0pLGVbMV09cGFyc2VGbG9hdChvWzFdKSl9cmV0dXJue3RvcDplWzBdLGxlZnQ6ZVsxXSxzY2FsZVg6ZVsyXSxzY2FsZVk6ZVszXSxvcGFjaXR5OnBhcnNlRmxvYXQodC5jc3MoXCJvcGFjaXR5XCIpKSx3aWR0aDp0LndpZHRoKCksaGVpZ2h0OnQuaGVpZ2h0KCl9fSxzZXRUcmFuc2xhdGU6ZnVuY3Rpb24odCxlKXt2YXIgbj1cIlwiLGk9e307aWYodCYmZSlyZXR1cm4gZS5sZWZ0PT09byYmZS50b3A9PT1vfHwobj0oZS5sZWZ0PT09bz90LnBvc2l0aW9uKCkubGVmdDplLmxlZnQpK1wicHgsIFwiKyhlLnRvcD09PW8/dC5wb3NpdGlvbigpLnRvcDplLnRvcCkrXCJweFwiLG49dGhpcy51c2UzZD9cInRyYW5zbGF0ZTNkKFwiK24rXCIsIDBweClcIjpcInRyYW5zbGF0ZShcIituK1wiKVwiKSxlLnNjYWxlWCE9PW8mJmUuc2NhbGVZIT09byYmKG49KG4ubGVuZ3RoP24rXCIgXCI6XCJcIikrXCJzY2FsZShcIitlLnNjYWxlWCtcIiwgXCIrZS5zY2FsZVkrXCIpXCIpLG4ubGVuZ3RoJiYoaS50cmFuc2Zvcm09biksZS5vcGFjaXR5IT09byYmKGkub3BhY2l0eT1lLm9wYWNpdHkpLGUud2lkdGghPT1vJiYoaS53aWR0aD1lLndpZHRoKSxlLmhlaWdodCE9PW8mJihpLmhlaWdodD1lLmhlaWdodCksdC5jc3MoaSl9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLGksYSxzKXtuLmlzRnVuY3Rpb24oaSkmJihhPWksaT1udWxsKSxuLmlzUGxhaW5PYmplY3QoZSl8fHQucmVtb3ZlQXR0cihcInN0eWxlXCIpLHQub24oZCxmdW5jdGlvbihpKXsoIWl8fCFpLm9yaWdpbmFsRXZlbnR8fHQuaXMoaS5vcmlnaW5hbEV2ZW50LnRhcmdldCkmJlwiei1pbmRleFwiIT1pLm9yaWdpbmFsRXZlbnQucHJvcGVydHlOYW1lKSYmKG4uZmFuY3lib3guc3RvcCh0KSxuLmlzUGxhaW5PYmplY3QoZSk/KGUuc2NhbGVYIT09byYmZS5zY2FsZVkhPT1vJiYodC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsXCJcIiksZS53aWR0aD1NYXRoLnJvdW5kKHQud2lkdGgoKSplLnNjYWxlWCksZS5oZWlnaHQ9TWF0aC5yb3VuZCh0LmhlaWdodCgpKmUuc2NhbGVZKSxlLnNjYWxlWD0xLGUuc2NhbGVZPTEsbi5mYW5jeWJveC5zZXRUcmFuc2xhdGUodCxlKSkscz09PSExJiZ0LnJlbW92ZUF0dHIoXCJzdHlsZVwiKSk6cyE9PSEwJiZ0LnJlbW92ZUNsYXNzKGUpLG4uaXNGdW5jdGlvbihhKSYmYShpKSl9KSxuLmlzTnVtZXJpYyhpKSYmdC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsaStcIm1zXCIpLG4uaXNQbGFpbk9iamVjdChlKT9uLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSh0LGUpOnQuYWRkQ2xhc3MoZSksZS5zY2FsZVgmJnQuaGFzQ2xhc3MoXCJmYW5jeWJveC1pbWFnZS13cmFwXCIpJiZ0LnBhcmVudCgpLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtc2NhbGluZ1wiKSx0LmRhdGEoXCJ0aW1lclwiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnRyaWdnZXIoXCJ0cmFuc2l0aW9uZW5kXCIpfSxpKzE2KSl9LHN0b3A6ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHQuZGF0YShcInRpbWVyXCIpKSx0Lm9mZihcInRyYW5zaXRpb25lbmRcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLFwiXCIpLHQuaGFzQ2xhc3MoXCJmYW5jeWJveC1pbWFnZS13cmFwXCIpJiZ0LnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2NhbGluZ1wiKX19LG4uZm4uZmFuY3lib3g9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIHQ9dHx8e30sZT10LnNlbGVjdG9yfHwhMSxlP24oXCJib2R5XCIpLm9mZihcImNsaWNrLmZiLXN0YXJ0XCIsZSkub24oXCJjbGljay5mYi1zdGFydFwiLGUse29wdGlvbnM6dH0saSk6dGhpcy5vZmYoXCJjbGljay5mYi1zdGFydFwiKS5vbihcImNsaWNrLmZiLXN0YXJ0XCIse2l0ZW1zOnRoaXMsb3B0aW9uczp0fSxpKSx0aGlzfSxyLm9uKFwiY2xpY2suZmItc3RhcnRcIixcIltkYXRhLWZhbmN5Ym94XVwiLGkpfX0od2luZG93LGRvY3VtZW50LHdpbmRvdy5qUXVlcnl8fGpRdWVyeSksZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ZnVuY3Rpb24oZSxuLG8pe2lmKGUpcmV0dXJuIG89b3x8XCJcIixcIm9iamVjdFwiPT09dC50eXBlKG8pJiYobz10LnBhcmFtKG8sITApKSx0LmVhY2gobixmdW5jdGlvbih0LG4pe2U9ZS5yZXBsYWNlKFwiJFwiK3Qsbnx8XCJcIil9KSxvLmxlbmd0aCYmKGUrPShlLmluZGV4T2YoXCI/XCIpPjA/XCImXCI6XCI/XCIpK28pLGV9LG49e3lvdXR1YmU6e21hdGNoZXI6Lyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmV8eW91dHViZVxcLW5vY29va2llXFwuY29tKVxcLyh3YXRjaFxcPyguKiYpP3Y9fHZcXC98dVxcL3xlbWJlZFxcLz8pPyh2aWRlb3Nlcmllc1xcP2xpc3Q9KC4qKXxbXFx3LV17MTF9fFxcP2xpc3RUeXBlPSguKikmbGlzdD0oLiopKSguKikvaSxwYXJhbXM6e2F1dG9wbGF5OjEsYXV0b2hpZGU6MSxmczoxLHJlbDowLGhkOjEsd21vZGU6XCJ0cmFuc3BhcmVudFwiLGVuYWJsZWpzYXBpOjEsaHRtbDU6MX0scGFyYW1QbGFjZTo4LHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8kNFwiLHRodW1iOlwiLy9pbWcueW91dHViZS5jb20vdmkvJDQvaHFkZWZhdWx0LmpwZ1wiXHJcbn0sdmltZW86e21hdGNoZXI6L14uK3ZpbWVvLmNvbVxcLyguKlxcLyk/KFtcXGRdKykoLiopPy8scGFyYW1zOnthdXRvcGxheToxLGhkOjEsc2hvd190aXRsZToxLHNob3dfYnlsaW5lOjEsc2hvd19wb3J0cmFpdDowLGZ1bGxzY3JlZW46MSxhcGk6MX0scGFyYW1QbGFjZTozLHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJDJcIn0sbWV0YWNhZmU6e21hdGNoZXI6L21ldGFjYWZlLmNvbVxcL3dhdGNoXFwvKFxcZCspXFwvKC4qKT8vLHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3d3dy5tZXRhY2FmZS5jb20vZW1iZWQvJDEvP2FwPTFcIn0sZGFpbHltb3Rpb246e21hdGNoZXI6L2RhaWx5bW90aW9uLmNvbVxcL3ZpZGVvXFwvKC4qKVxcLz8oLiopLyxwYXJhbXM6e2FkZGl0aW9uYWxJbmZvczowLGF1dG9TdGFydDoxfSx0eXBlOlwiaWZyYW1lXCIsdXJsOlwiLy93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvLyQxXCJ9LHZpbmU6e21hdGNoZXI6L3ZpbmUuY29cXC92XFwvKFthLXpBLVowLTlcXD9cXD1cXC1dKykvLHR5cGU6XCJpZnJhbWVcIix1cmw6XCIvL3ZpbmUuY28vdi8kMS9lbWJlZC9zaW1wbGVcIn0saW5zdGFncmFtOnttYXRjaGVyOi8oaW5zdGFnclxcLmFtfGluc3RhZ3JhbVxcLmNvbSlcXC9wXFwvKFthLXpBLVowLTlfXFwtXSspXFwvPy9pLHR5cGU6XCJpbWFnZVwiLHVybDpcIi8vJDEvcC8kMi9tZWRpYS8/c2l6ZT1sXCJ9LGdtYXBfcGxhY2U6e21hdGNoZXI6LyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLygoKG1hcHNcXC8ocGxhY2VcXC8oLiopXFwvKT9cXEAoLiopLChcXGQrLj9cXGQrPyl6KSl8KFxcP2xsPSkpKC4qKT8vaSx0eXBlOlwiaWZyYW1lXCIsdXJsOmZ1bmN0aW9uKHQpe3JldHVyblwiLy9tYXBzLmdvb2dsZS5cIit0WzJdK1wiLz9sbD1cIisodFs5XT90WzldK1wiJno9XCIrTWF0aC5mbG9vcih0WzEwXSkrKHRbMTJdP3RbMTJdLnJlcGxhY2UoL15cXC8vLFwiJlwiKTpcIlwiKTp0WzEyXSkrXCImb3V0cHV0PVwiKyh0WzEyXSYmdFsxMl0uaW5kZXhPZihcImxheWVyPWNcIik+MD9cInN2ZW1iZWRcIjpcImVtYmVkXCIpfX0sZ21hcF9zZWFyY2g6e21hdGNoZXI6LyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLyhtYXBzXFwvc2VhcmNoXFwvKSguKikvaSx0eXBlOlwiaWZyYW1lXCIsdXJsOmZ1bmN0aW9uKHQpe3JldHVyblwiLy9tYXBzLmdvb2dsZS5cIit0WzJdK1wiL21hcHM/cT1cIit0WzVdLnJlcGxhY2UoXCJxdWVyeT1cIixcInE9XCIpLnJlcGxhY2UoXCJhcGk9MVwiLFwiXCIpK1wiJm91dHB1dD1lbWJlZFwifX19O3QoZG9jdW1lbnQpLm9uKFwib2JqZWN0TmVlZHNUeXBlLmZiXCIsZnVuY3Rpb24obyxpLGEpe3ZhciBzLHIsYyxsLHUsZCxmLHA9YS5zcmN8fFwiXCIsaD0hMTtzPXQuZXh0ZW5kKCEwLHt9LG4sYS5vcHRzLm1lZGlhKSx0LmVhY2gocyxmdW5jdGlvbihuLG8pe2lmKGM9cC5tYXRjaChvLm1hdGNoZXIpKXtpZihoPW8udHlwZSxkPXt9LG8ucGFyYW1QbGFjZSYmY1tvLnBhcmFtUGxhY2VdKXt1PWNbby5wYXJhbVBsYWNlXSxcIj9cIj09dVswXSYmKHU9dS5zdWJzdHJpbmcoMSkpLHU9dS5zcGxpdChcIiZcIik7Zm9yKHZhciBpPTA7aTx1Lmxlbmd0aDsrK2kpe3ZhciBzPXVbaV0uc3BsaXQoXCI9XCIsMik7Mj09cy5sZW5ndGgmJihkW3NbMF1dPWRlY29kZVVSSUNvbXBvbmVudChzWzFdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSkpfX1yZXR1cm4gbD10LmV4dGVuZCghMCx7fSxvLnBhcmFtcyxhLm9wdHNbbl0sZCkscD1cImZ1bmN0aW9uXCI9PT10LnR5cGUoby51cmwpP28udXJsLmNhbGwodGhpcyxjLGwsYSk6ZShvLnVybCxjLGwpLHI9XCJmdW5jdGlvblwiPT09dC50eXBlKG8udGh1bWIpP28udGh1bWIuY2FsbCh0aGlzLGMsbCxhKTplKG8udGh1bWIsYyksXCJ2aW1lb1wiPT09biYmKHA9cC5yZXBsYWNlKFwiJiUyM1wiLFwiI1wiKSksITF9fSksaD8oYS5zcmM9cCxhLnR5cGU9aCxhLm9wdHMudGh1bWJ8fGEub3B0cy4kdGh1bWImJmEub3B0cy4kdGh1bWIubGVuZ3RofHwoYS5vcHRzLnRodW1iPXIpLFwiaWZyYW1lXCI9PT1oJiYodC5leHRlbmQoITAsYS5vcHRzLHtpZnJhbWU6e3ByZWxvYWQ6ITEsYXR0cjp7c2Nyb2xsaW5nOlwibm9cIn19fSksYS5jb250ZW50UHJvdmlkZXI9ZixhLm9wdHMuc2xpZGVDbGFzcys9XCIgZmFuY3lib3gtc2xpZGUtLVwiKyhcImdtYXBfcGxhY2VcIj09Znx8XCJnbWFwX3NlYXJjaFwiPT1mP1wibWFwXCI6XCJ2aWRlb1wiKSkpOnAmJihhLnR5cGU9YS5vcHRzLmRlZmF1bHRUeXBlKX0pfSh3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1mdW5jdGlvbigpe3JldHVybiB0LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8dC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3JldHVybiB0LnNldFRpbWVvdXQoZSwxZTMvNjApfX0oKSxpPWZ1bmN0aW9uKCl7cmV0dXJuIHQuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHQud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHQubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHQub0NhbmNlbEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihlKXt0LmNsZWFyVGltZW91dChlKX19KCksYT1mdW5jdGlvbihlKXt2YXIgbj1bXTtlPWUub3JpZ2luYWxFdmVudHx8ZXx8dC5lLGU9ZS50b3VjaGVzJiZlLnRvdWNoZXMubGVuZ3RoP2UudG91Y2hlczplLmNoYW5nZWRUb3VjaGVzJiZlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aD9lLmNoYW5nZWRUb3VjaGVzOltlXTtmb3IodmFyIG8gaW4gZSllW29dLnBhZ2VYP24ucHVzaCh7eDplW29dLnBhZ2VYLHk6ZVtvXS5wYWdlWX0pOmVbb10uY2xpZW50WCYmbi5wdXNoKHt4OmVbb10uY2xpZW50WCx5OmVbb10uY2xpZW50WX0pO3JldHVybiBufSxzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gZSYmdD9cInhcIj09PW4/dC54LWUueDpcInlcIj09PW4/dC55LWUueTpNYXRoLnNxcnQoTWF0aC5wb3codC54LWUueCwyKStNYXRoLnBvdyh0LnktZS55LDIpKTowfSxyPWZ1bmN0aW9uKHQpe2lmKHQuaXMoJ2EsYXJlYSxidXR0b24sW3JvbGU9XCJidXR0b25cIl0saW5wdXQsbGFiZWwsc2VsZWN0LHN1bW1hcnksdGV4dGFyZWEnKXx8bi5pc0Z1bmN0aW9uKHQuZ2V0KDApLm9uY2xpY2spfHx0LmRhdGEoXCJzZWxlY3RhYmxlXCIpKXJldHVybiEwO2Zvcih2YXIgZT0wLG89dFswXS5hdHRyaWJ1dGVzLGk9by5sZW5ndGg7ZTxpO2UrKylpZihcImRhdGEtZmFuY3lib3gtXCI9PT1vW2VdLm5vZGVOYW1lLnN1YnN0cigwLDE0KSlyZXR1cm4hMDtyZXR1cm4hMX0sYz1mdW5jdGlvbihlKXt2YXIgbj10LmdldENvbXB1dGVkU3R5bGUoZSlbXCJvdmVyZmxvdy15XCJdLG89dC5nZXRDb21wdXRlZFN0eWxlKGUpW1wib3ZlcmZsb3cteFwiXSxpPShcInNjcm9sbFwiPT09bnx8XCJhdXRvXCI9PT1uKSYmZS5zY3JvbGxIZWlnaHQ+ZS5jbGllbnRIZWlnaHQsYT0oXCJzY3JvbGxcIj09PW98fFwiYXV0b1wiPT09bykmJmUuc2Nyb2xsV2lkdGg+ZS5jbGllbnRXaWR0aDtyZXR1cm4gaXx8YX0sbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9ITE7Oyl7aWYoZT1jKHQuZ2V0KDApKSlicmVhaztpZih0PXQucGFyZW50KCksIXQubGVuZ3RofHx0Lmhhc0NsYXNzKFwiZmFuY3lib3gtc3RhZ2VcIil8fHQuaXMoXCJib2R5XCIpKWJyZWFrfXJldHVybiBlfSx1PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7ZS5pbnN0YW5jZT10LGUuJGJnPXQuJHJlZnMuYmcsZS4kc3RhZ2U9dC4kcmVmcy5zdGFnZSxlLiRjb250YWluZXI9dC4kcmVmcy5jb250YWluZXIsZS5kZXN0cm95KCksZS4kY29udGFpbmVyLm9uKFwidG91Y2hzdGFydC5mYi50b3VjaCBtb3VzZWRvd24uZmIudG91Y2hcIixuLnByb3h5KGUsXCJvbnRvdWNoc3RhcnRcIikpfTt1LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy4kY29udGFpbmVyLm9mZihcIi5mYi50b3VjaFwiKX0sdS5wcm90b3R5cGUub250b3VjaHN0YXJ0PWZ1bmN0aW9uKG8pe3ZhciBpPXRoaXMsYz1uKG8udGFyZ2V0KSx1PWkuaW5zdGFuY2UsZD11LmN1cnJlbnQsZj1kLiRjb250ZW50LHA9XCJ0b3VjaHN0YXJ0XCI9PW8udHlwZTtpZihwJiZpLiRjb250YWluZXIub2ZmKFwibW91c2Vkb3duLmZiLnRvdWNoXCIpLCghby5vcmlnaW5hbEV2ZW50fHwyIT1vLm9yaWdpbmFsRXZlbnQuYnV0dG9uKSYmYy5sZW5ndGgmJiFyKGMpJiYhcihjLnBhcmVudCgpKSYmKGMuaXMoXCJpbWdcIil8fCEoby5vcmlnaW5hbEV2ZW50LmNsaWVudFg+Y1swXS5jbGllbnRXaWR0aCtjLm9mZnNldCgpLmxlZnQpKSl7aWYoIWR8fGkuaW5zdGFuY2UuaXNBbmltYXRpbmd8fGkuaW5zdGFuY2UuaXNDbG9zaW5nKXJldHVybiBvLnN0b3BQcm9wYWdhdGlvbigpLHZvaWQgby5wcmV2ZW50RGVmYXVsdCgpO2lmKGkucmVhbFBvaW50cz1pLnN0YXJ0UG9pbnRzPWEobyksaS5zdGFydFBvaW50cyl7aWYoby5zdG9wUHJvcGFnYXRpb24oKSxpLnN0YXJ0RXZlbnQ9byxpLmNhblRhcD0hMCxpLiR0YXJnZXQ9YyxpLiRjb250ZW50PWYsaS5vcHRzPWQub3B0cy50b3VjaCxpLmlzUGFubmluZz0hMSxpLmlzU3dpcGluZz0hMSxpLmlzWm9vbWluZz0hMSxpLmlzU2Nyb2xsaW5nPSExLGkuc2xpZGVyU3RhcnRQb3M9aS5zbGlkZXJMYXN0UG9zfHx7dG9wOjAsbGVmdDowfSxpLmNvbnRlbnRTdGFydFBvcz1uLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShpLiRjb250ZW50KSxpLmNvbnRlbnRMYXN0UG9zPW51bGwsaS5zdGFydFRpbWU9KG5ldyBEYXRlKS5nZXRUaW1lKCksaS5kaXN0YW5jZVg9aS5kaXN0YW5jZVk9aS5kaXN0YW5jZT0wLGkuY2FudmFzV2lkdGg9TWF0aC5yb3VuZChkLiRzbGlkZVswXS5jbGllbnRXaWR0aCksaS5jYW52YXNIZWlnaHQ9TWF0aC5yb3VuZChkLiRzbGlkZVswXS5jbGllbnRIZWlnaHQpLG4oZSkub2ZmKFwiLmZiLnRvdWNoXCIpLm9uKHA/XCJ0b3VjaGVuZC5mYi50b3VjaCB0b3VjaGNhbmNlbC5mYi50b3VjaFwiOlwibW91c2V1cC5mYi50b3VjaCBtb3VzZWxlYXZlLmZiLnRvdWNoXCIsbi5wcm94eShpLFwib250b3VjaGVuZFwiKSkub24ocD9cInRvdWNobW92ZS5mYi50b3VjaFwiOlwibW91c2Vtb3ZlLmZiLnRvdWNoXCIsbi5wcm94eShpLFwib250b3VjaG1vdmVcIikpLG4uZmFuY3lib3guaXNNb2JpbGUmJmUuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGkub25zY3JvbGwsITApLCFpLm9wdHMmJiF1LmNhblBhbigpfHwhYy5pcyhpLiRzdGFnZSkmJiFpLiRzdGFnZS5maW5kKGMpLmxlbmd0aClyZXR1cm4gdm9pZChjLmlzKFwiaW1nXCIpJiZvLnByZXZlbnREZWZhdWx0KCkpO24uZmFuY3lib3guaXNNb2JpbGUmJihsKGMpfHxsKGMucGFyZW50KCkpKXx8by5wcmV2ZW50RGVmYXVsdCgpLDE9PT1pLnN0YXJ0UG9pbnRzLmxlbmd0aCYmKFwiaW1hZ2VcIj09PWQudHlwZSYmKGkuY29udGVudFN0YXJ0UG9zLndpZHRoPmkuY2FudmFzV2lkdGgrMXx8aS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0PmkuY2FudmFzSGVpZ2h0KzEpPyhuLmZhbmN5Ym94LnN0b3AoaS4kY29udGVudCksaS4kY29udGVudC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsXCJcIiksaS5pc1Bhbm5pbmc9ITApOmkuaXNTd2lwaW5nPSEwLGkuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWNvbnRyb2xzLS1pc0dyYWJiaW5nXCIpKSwyIT09aS5zdGFydFBvaW50cy5sZW5ndGh8fHUuaXNBbmltYXRpbmd8fGQuaGFzRXJyb3J8fFwiaW1hZ2VcIiE9PWQudHlwZXx8IWQuaXNMb2FkZWQmJiFkLiRnaG9zdHx8KGkuY2FuVGFwPSExLGkuaXNTd2lwaW5nPSExLGkuaXNQYW5uaW5nPSExLGkuaXNab29taW5nPSEwLG4uZmFuY3lib3guc3RvcChpLiRjb250ZW50KSxpLiRjb250ZW50LmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIixcIlwiKSxpLmNlbnRlclBvaW50U3RhcnRYPS41KihpLnN0YXJ0UG9pbnRzWzBdLngraS5zdGFydFBvaW50c1sxXS54KS1uKHQpLnNjcm9sbExlZnQoKSxpLmNlbnRlclBvaW50U3RhcnRZPS41KihpLnN0YXJ0UG9pbnRzWzBdLnkraS5zdGFydFBvaW50c1sxXS55KS1uKHQpLnNjcm9sbFRvcCgpLGkucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYPShpLmNlbnRlclBvaW50U3RhcnRYLWkuY29udGVudFN0YXJ0UG9zLmxlZnQpL2kuY29udGVudFN0YXJ0UG9zLndpZHRoLGkucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZPShpLmNlbnRlclBvaW50U3RhcnRZLWkuY29udGVudFN0YXJ0UG9zLnRvcCkvaS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0LGkuc3RhcnREaXN0YW5jZUJldHdlZW5GaW5nZXJzPXMoaS5zdGFydFBvaW50c1swXSxpLnN0YXJ0UG9pbnRzWzFdKSl9fX0sdS5wcm90b3R5cGUub25zY3JvbGw9ZnVuY3Rpb24odCl7c2VsZi5pc1Njcm9sbGluZz0hMH0sdS5wcm90b3R5cGUub250b3VjaG1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxvPW4odC50YXJnZXQpO3JldHVybiBlLmlzU2Nyb2xsaW5nfHwhby5pcyhlLiRzdGFnZSkmJiFlLiRzdGFnZS5maW5kKG8pLmxlbmd0aD92b2lkKGUuY2FuVGFwPSExKTooZS5uZXdQb2ludHM9YSh0KSx2b2lkKChlLm9wdHN8fGUuaW5zdGFuY2UuY2FuUGFuKCkpJiZlLm5ld1BvaW50cyYmZS5uZXdQb2ludHMubGVuZ3RoJiYoZS5pc1N3aXBpbmcmJmUuaXNTd2lwaW5nPT09ITB8fHQucHJldmVudERlZmF1bHQoKSxlLmRpc3RhbmNlWD1zKGUubmV3UG9pbnRzWzBdLGUuc3RhcnRQb2ludHNbMF0sXCJ4XCIpLGUuZGlzdGFuY2VZPXMoZS5uZXdQb2ludHNbMF0sZS5zdGFydFBvaW50c1swXSxcInlcIiksZS5kaXN0YW5jZT1zKGUubmV3UG9pbnRzWzBdLGUuc3RhcnRQb2ludHNbMF0pLGUuZGlzdGFuY2U+MCYmKGUuaXNTd2lwaW5nP2Uub25Td2lwZSh0KTplLmlzUGFubmluZz9lLm9uUGFuKCk6ZS5pc1pvb21pbmcmJmUub25ab29tKCkpKSkpfSx1LnByb3RvdHlwZS5vblN3aXBlPWZ1bmN0aW9uKGUpe3ZhciBhLHM9dGhpcyxyPXMuaXNTd2lwaW5nLGM9cy5zbGlkZXJTdGFydFBvcy5sZWZ0fHwwO2lmKHIhPT0hMClcInhcIj09ciYmKHMuZGlzdGFuY2VYPjAmJihzLmluc3RhbmNlLmdyb3VwLmxlbmd0aDwyfHwwPT09cy5pbnN0YW5jZS5jdXJyZW50LmluZGV4JiYhcy5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCk/Yys9TWF0aC5wb3cocy5kaXN0YW5jZVgsLjgpOnMuZGlzdGFuY2VYPDAmJihzLmluc3RhbmNlLmdyb3VwLmxlbmd0aDwyfHxzLmluc3RhbmNlLmN1cnJlbnQuaW5kZXg9PT1zLmluc3RhbmNlLmdyb3VwLmxlbmd0aC0xJiYhcy5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCk/Yy09TWF0aC5wb3coLXMuZGlzdGFuY2VYLC44KTpjKz1zLmRpc3RhbmNlWCkscy5zbGlkZXJMYXN0UG9zPXt0b3A6XCJ4XCI9PXI/MDpzLnNsaWRlclN0YXJ0UG9zLnRvcCtzLmRpc3RhbmNlWSxsZWZ0OmN9LHMucmVxdWVzdElkJiYoaShzLnJlcXVlc3RJZCkscy5yZXF1ZXN0SWQ9bnVsbCkscy5yZXF1ZXN0SWQ9byhmdW5jdGlvbigpe3Muc2xpZGVyTGFzdFBvcyYmKG4uZWFjaChzLmluc3RhbmNlLnNsaWRlcyxmdW5jdGlvbih0LGUpe3ZhciBvPWUucG9zLXMuaW5zdGFuY2UuY3VyclBvcztuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShlLiRzbGlkZSx7dG9wOnMuc2xpZGVyTGFzdFBvcy50b3AsbGVmdDpzLnNsaWRlckxhc3RQb3MubGVmdCtvKnMuY2FudmFzV2lkdGgrbyplLm9wdHMuZ3V0dGVyfSl9KSxzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1zbGlkaW5nXCIpKX0pO2Vsc2UgaWYoTWF0aC5hYnMocy5kaXN0YW5jZSk+MTApe2lmKHMuY2FuVGFwPSExLHMuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoPDImJnMub3B0cy52ZXJ0aWNhbD9zLmlzU3dpcGluZz1cInlcIjpzLmluc3RhbmNlLmlzRHJhZ2dpbmd8fHMub3B0cy52ZXJ0aWNhbD09PSExfHxcImF1dG9cIj09PXMub3B0cy52ZXJ0aWNhbCYmbih0KS53aWR0aCgpPjgwMD9zLmlzU3dpcGluZz1cInhcIjooYT1NYXRoLmFicygxODAqTWF0aC5hdGFuMihzLmRpc3RhbmNlWSxzLmRpc3RhbmNlWCkvTWF0aC5QSSkscy5pc1N3aXBpbmc9YT40NSYmYTwxMzU/XCJ5XCI6XCJ4XCIpLHMuY2FuVGFwPSExLFwieVwiPT09cy5pc1N3aXBpbmcmJm4uZmFuY3lib3guaXNNb2JpbGUmJihsKHMuJHRhcmdldCl8fGwocy4kdGFyZ2V0LnBhcmVudCgpKSkpcmV0dXJuIHZvaWQocy5pc1Njcm9sbGluZz0hMCk7cy5pbnN0YW5jZS5pc0RyYWdnaW5nPXMuaXNTd2lwaW5nLHMuc3RhcnRQb2ludHM9cy5uZXdQb2ludHMsbi5lYWNoKHMuaW5zdGFuY2Uuc2xpZGVzLGZ1bmN0aW9uKHQsZSl7bi5mYW5jeWJveC5zdG9wKGUuJHNsaWRlKSxlLiRzbGlkZS5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsXCJcIiksZS5pblRyYW5zaXRpb249ITEsZS5wb3M9PT1zLmluc3RhbmNlLmN1cnJlbnQucG9zJiYocy5zbGlkZXJTdGFydFBvcy5sZWZ0PW4uZmFuY3lib3guZ2V0VHJhbnNsYXRlKGUuJHNsaWRlKS5sZWZ0KX0pLHMuaW5zdGFuY2UuU2xpZGVTaG93JiZzLmluc3RhbmNlLlNsaWRlU2hvdy5pc0FjdGl2ZSYmcy5pbnN0YW5jZS5TbGlkZVNob3cuc3RvcCgpfX0sdS5wcm90b3R5cGUub25QYW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiBzKHQubmV3UG9pbnRzWzBdLHQucmVhbFBvaW50c1swXSk8KG4uZmFuY3lib3guaXNNb2JpbGU/MTA6NSk/dm9pZCh0LnN0YXJ0UG9pbnRzPXQubmV3UG9pbnRzKToodC5jYW5UYXA9ITEsdC5jb250ZW50TGFzdFBvcz10LmxpbWl0TW92ZW1lbnQoKSx0LnJlcXVlc3RJZCYmKGkodC5yZXF1ZXN0SWQpLHQucmVxdWVzdElkPW51bGwpLHZvaWQodC5yZXF1ZXN0SWQ9byhmdW5jdGlvbigpe24uZmFuY3lib3guc2V0VHJhbnNsYXRlKHQuJGNvbnRlbnQsdC5jb250ZW50TGFzdFBvcyl9KSkpfSx1LnByb3RvdHlwZS5saW1pdE1vdmVtZW50PWZ1bmN0aW9uKCl7dmFyIHQsZSxuLG8saSxhLHM9dGhpcyxyPXMuY2FudmFzV2lkdGgsYz1zLmNhbnZhc0hlaWdodCxsPXMuZGlzdGFuY2VYLHU9cy5kaXN0YW5jZVksZD1zLmNvbnRlbnRTdGFydFBvcyxmPWQubGVmdCxwPWQudG9wLGg9ZC53aWR0aCxnPWQuaGVpZ2h0O3JldHVybiBpPWg+cj9mK2w6ZixhPXArdSx0PU1hdGgubWF4KDAsLjUqci0uNSpoKSxlPU1hdGgubWF4KDAsLjUqYy0uNSpnKSxuPU1hdGgubWluKHItaCwuNSpyLS41KmgpLG89TWF0aC5taW4oYy1nLC41KmMtLjUqZyksaD5yJiYobD4wJiZpPnQmJihpPXQtMStNYXRoLnBvdygtdCtmK2wsLjgpfHwwKSxsPDAmJmk8biYmKGk9bisxLU1hdGgucG93KG4tZi1sLC44KXx8MCkpLGc+YyYmKHU+MCYmYT5lJiYoYT1lLTErTWF0aC5wb3coLWUrcCt1LC44KXx8MCksdTwwJiZhPG8mJihhPW8rMS1NYXRoLnBvdyhvLXAtdSwuOCl8fDApKSx7dG9wOmEsbGVmdDppLHNjYWxlWDpkLnNjYWxlWCxzY2FsZVk6ZC5zY2FsZVl9fSx1LnByb3RvdHlwZS5saW1pdFBvc2l0aW9uPWZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpPXRoaXMsYT1pLmNhbnZhc1dpZHRoLHM9aS5jYW52YXNIZWlnaHQ7cmV0dXJuIG4+YT8odD10PjA/MDp0LHQ9dDxhLW4/YS1uOnQpOnQ9TWF0aC5tYXgoMCxhLzItbi8yKSxvPnM/KGU9ZT4wPzA6ZSxlPWU8cy1vP3MtbzplKTplPU1hdGgubWF4KDAscy8yLW8vMikse3RvcDplLGxlZnQ6dH19LHUucHJvdG90eXBlLm9uWm9vbT1mdW5jdGlvbigpe3ZhciBlPXRoaXMsYT1lLmNvbnRlbnRTdGFydFBvcy53aWR0aCxyPWUuY29udGVudFN0YXJ0UG9zLmhlaWdodCxjPWUuY29udGVudFN0YXJ0UG9zLmxlZnQsbD1lLmNvbnRlbnRTdGFydFBvcy50b3AsdT1zKGUubmV3UG9pbnRzWzBdLGUubmV3UG9pbnRzWzFdKSxkPXUvZS5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMsZj1NYXRoLmZsb29yKGEqZCkscD1NYXRoLmZsb29yKHIqZCksaD0oYS1mKSplLnBlcmNlbnRhZ2VPZkltYWdlQXRQaW5jaFBvaW50WCxnPShyLXApKmUucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZLGI9KGUubmV3UG9pbnRzWzBdLngrZS5uZXdQb2ludHNbMV0ueCkvMi1uKHQpLnNjcm9sbExlZnQoKSxtPShlLm5ld1BvaW50c1swXS55K2UubmV3UG9pbnRzWzFdLnkpLzItbih0KS5zY3JvbGxUb3AoKSx5PWItZS5jZW50ZXJQb2ludFN0YXJ0WCx2PW0tZS5jZW50ZXJQb2ludFN0YXJ0WSx4PWMrKGgreSksdz1sKyhnK3YpLCQ9e3RvcDp3LGxlZnQ6eCxzY2FsZVg6ZS5jb250ZW50U3RhcnRQb3Muc2NhbGVYKmQsc2NhbGVZOmUuY29udGVudFN0YXJ0UG9zLnNjYWxlWSpkfTtlLmNhblRhcD0hMSxlLm5ld1dpZHRoPWYsZS5uZXdIZWlnaHQ9cCxlLmNvbnRlbnRMYXN0UG9zPSQsZS5yZXF1ZXN0SWQmJihpKGUucmVxdWVzdElkKSxlLnJlcXVlc3RJZD1udWxsKSxlLnJlcXVlc3RJZD1vKGZ1bmN0aW9uKCl7bi5mYW5jeWJveC5zZXRUcmFuc2xhdGUoZS4kY29udGVudCxlLmNvbnRlbnRMYXN0UG9zKX0pfSx1LnByb3RvdHlwZS5vbnRvdWNoZW5kPWZ1bmN0aW9uKHQpe3ZhciBvPXRoaXMscz1NYXRoLm1heCgobmV3IERhdGUpLmdldFRpbWUoKS1vLnN0YXJ0VGltZSwxKSxyPW8uaXNTd2lwaW5nLGM9by5pc1Bhbm5pbmcsbD1vLmlzWm9vbWluZyx1PW8uaXNTY3JvbGxpbmc7cmV0dXJuIG8uZW5kUG9pbnRzPWEodCksby4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtY29udHJvbHMtLWlzR3JhYmJpbmdcIiksbihlKS5vZmYoXCIuZmIudG91Y2hcIiksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsby5vbnNjcm9sbCwhMCksby5yZXF1ZXN0SWQmJihpKG8ucmVxdWVzdElkKSxvLnJlcXVlc3RJZD1udWxsKSxvLmlzU3dpcGluZz0hMSxvLmlzUGFubmluZz0hMSxvLmlzWm9vbWluZz0hMSxvLmlzU2Nyb2xsaW5nPSExLG8uaW5zdGFuY2UuaXNEcmFnZ2luZz0hMSxvLmNhblRhcD9vLm9uVGFwKHQpOihvLnNwZWVkPTM2NixvLnZlbG9jaXR5WD1vLmRpc3RhbmNlWC9zKi41LG8udmVsb2NpdHlZPW8uZGlzdGFuY2VZL3MqLjUsby5zcGVlZFg9TWF0aC5tYXgoLjUqby5zcGVlZCxNYXRoLm1pbigxLjUqby5zcGVlZCwxL01hdGguYWJzKG8udmVsb2NpdHlYKSpvLnNwZWVkKSksdm9pZChjP28uZW5kUGFubmluZygpOmw/by5lbmRab29taW5nKCk6by5lbmRTd2lwaW5nKHIsdSkpKX0sdS5wcm90b3R5cGUuZW5kU3dpcGluZz1mdW5jdGlvbih0LGUpe3ZhciBvPXRoaXMsaT0hMSxhPW8uaW5zdGFuY2UuZ3JvdXAubGVuZ3RoO28uc2xpZGVyTGFzdFBvcz1udWxsLFwieVwiPT10JiYhZSYmTWF0aC5hYnMoby5kaXN0YW5jZVkpPjUwPyhuLmZhbmN5Ym94LmFuaW1hdGUoby5pbnN0YW5jZS5jdXJyZW50LiRzbGlkZSx7dG9wOm8uc2xpZGVyU3RhcnRQb3MudG9wK28uZGlzdGFuY2VZKzE1MCpvLnZlbG9jaXR5WSxvcGFjaXR5OjB9LDE1MCksaT1vLmluc3RhbmNlLmNsb3NlKCEwLDMwMCkpOlwieFwiPT10JiZvLmRpc3RhbmNlWD41MCYmYT4xP2k9by5pbnN0YW5jZS5wcmV2aW91cyhvLnNwZWVkWCk6XCJ4XCI9PXQmJm8uZGlzdGFuY2VYPC01MCYmYT4xJiYoaT1vLmluc3RhbmNlLm5leHQoby5zcGVlZFgpKSxpIT09ITF8fFwieFwiIT10JiZcInlcIiE9dHx8KGV8fGE8Mj9vLmluc3RhbmNlLmNlbnRlclNsaWRlKG8uaW5zdGFuY2UuY3VycmVudCwxNTApOm8uaW5zdGFuY2UuanVtcFRvKG8uaW5zdGFuY2UuY3VycmVudC5pbmRleCkpLG8uJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXNsaWRpbmdcIil9LHUucHJvdG90eXBlLmVuZFBhbm5pbmc9ZnVuY3Rpb24oKXt2YXIgdCxlLG8saT10aGlzO2kuY29udGVudExhc3RQb3MmJihpLm9wdHMubW9tZW50dW09PT0hMT8odD1pLmNvbnRlbnRMYXN0UG9zLmxlZnQsZT1pLmNvbnRlbnRMYXN0UG9zLnRvcCk6KHQ9aS5jb250ZW50TGFzdFBvcy5sZWZ0K2kudmVsb2NpdHlYKmkuc3BlZWQsZT1pLmNvbnRlbnRMYXN0UG9zLnRvcCtpLnZlbG9jaXR5WSppLnNwZWVkKSxvPWkubGltaXRQb3NpdGlvbih0LGUsaS5jb250ZW50U3RhcnRQb3Mud2lkdGgsaS5jb250ZW50U3RhcnRQb3MuaGVpZ2h0KSxvLndpZHRoPWkuY29udGVudFN0YXJ0UG9zLndpZHRoLG8uaGVpZ2h0PWkuY29udGVudFN0YXJ0UG9zLmhlaWdodCxuLmZhbmN5Ym94LmFuaW1hdGUoaS4kY29udGVudCxvLDMzMCkpfSx1LnByb3RvdHlwZS5lbmRab29taW5nPWZ1bmN0aW9uKCl7dmFyIHQsZSxvLGksYT10aGlzLHM9YS5pbnN0YW5jZS5jdXJyZW50LHI9YS5uZXdXaWR0aCxjPWEubmV3SGVpZ2h0O2EuY29udGVudExhc3RQb3MmJih0PWEuY29udGVudExhc3RQb3MubGVmdCxlPWEuY29udGVudExhc3RQb3MudG9wLGk9e3RvcDplLGxlZnQ6dCx3aWR0aDpyLGhlaWdodDpjLHNjYWxlWDoxLHNjYWxlWToxfSxuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShhLiRjb250ZW50LGkpLHI8YS5jYW52YXNXaWR0aCYmYzxhLmNhbnZhc0hlaWdodD9hLmluc3RhbmNlLnNjYWxlVG9GaXQoMTUwKTpyPnMud2lkdGh8fGM+cy5oZWlnaHQ/YS5pbnN0YW5jZS5zY2FsZVRvQWN0dWFsKGEuY2VudGVyUG9pbnRTdGFydFgsYS5jZW50ZXJQb2ludFN0YXJ0WSwxNTApOihvPWEubGltaXRQb3NpdGlvbih0LGUscixjKSxuLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShhLmNvbnRlbnQsbi5mYW5jeWJveC5nZXRUcmFuc2xhdGUoYS4kY29udGVudCkpLG4uZmFuY3lib3guYW5pbWF0ZShhLiRjb250ZW50LG8sMTUwKSkpfSx1LnByb3RvdHlwZS5vblRhcD1mdW5jdGlvbih0KXt2YXIgZSxvPXRoaXMsaT1uKHQudGFyZ2V0KSxzPW8uaW5zdGFuY2Uscj1zLmN1cnJlbnQsYz10JiZhKHQpfHxvLnN0YXJ0UG9pbnRzLGw9Y1swXT9jWzBdLngtby4kc3RhZ2Uub2Zmc2V0KCkubGVmdDowLHU9Y1swXT9jWzBdLnktby4kc3RhZ2Uub2Zmc2V0KCkudG9wOjAsZD1mdW5jdGlvbihlKXt2YXIgaT1yLm9wdHNbZV07aWYobi5pc0Z1bmN0aW9uKGkpJiYoaT1pLmFwcGx5KHMsW3IsdF0pKSxpKXN3aXRjaChpKXtjYXNlXCJjbG9zZVwiOnMuY2xvc2Uoby5zdGFydEV2ZW50KTticmVhaztjYXNlXCJ0b2dnbGVDb250cm9sc1wiOnMudG9nZ2xlQ29udHJvbHMoITApO2JyZWFrO2Nhc2VcIm5leHRcIjpzLm5leHQoKTticmVhaztjYXNlXCJuZXh0T3JDbG9zZVwiOnMuZ3JvdXAubGVuZ3RoPjE/cy5uZXh0KCk6cy5jbG9zZShvLnN0YXJ0RXZlbnQpO2JyZWFrO2Nhc2VcInpvb21cIjpcImltYWdlXCI9PXIudHlwZSYmKHIuaXNMb2FkZWR8fHIuJGdob3N0KSYmKHMuY2FuUGFuKCk/cy5zY2FsZVRvRml0KCk6cy5pc1NjYWxlZERvd24oKT9zLnNjYWxlVG9BY3R1YWwobCx1KTpzLmdyb3VwLmxlbmd0aDwyJiZzLmNsb3NlKG8uc3RhcnRFdmVudCkpfX07aWYoKCF0Lm9yaWdpbmFsRXZlbnR8fDIhPXQub3JpZ2luYWxFdmVudC5idXR0b24pJiYoaS5pcyhcImltZ1wiKXx8IShsPmlbMF0uY2xpZW50V2lkdGgraS5vZmZzZXQoKS5sZWZ0KSkpe2lmKGkuaXMoXCIuZmFuY3lib3gtYmcsLmZhbmN5Ym94LWlubmVyLC5mYW5jeWJveC1vdXRlciwuZmFuY3lib3gtY29udGFpbmVyXCIpKWU9XCJPdXRzaWRlXCI7ZWxzZSBpZihpLmlzKFwiLmZhbmN5Ym94LXNsaWRlXCIpKWU9XCJTbGlkZVwiO2Vsc2V7aWYoIXMuY3VycmVudC4kY29udGVudHx8IXMuY3VycmVudC4kY29udGVudC5maW5kKGkpLmFkZEJhY2soKS5maWx0ZXIoaSkubGVuZ3RoKXJldHVybjtlPVwiQ29udGVudFwifWlmKG8udGFwcGVkKXtpZihjbGVhclRpbWVvdXQoby50YXBwZWQpLG8udGFwcGVkPW51bGwsTWF0aC5hYnMobC1vLnRhcFgpPjUwfHxNYXRoLmFicyh1LW8udGFwWSk+NTApcmV0dXJuIHRoaXM7ZChcImRibGNsaWNrXCIrZSl9ZWxzZSBvLnRhcFg9bCxvLnRhcFk9dSxyLm9wdHNbXCJkYmxjbGlja1wiK2VdJiZyLm9wdHNbXCJkYmxjbGlja1wiK2VdIT09ci5vcHRzW1wiY2xpY2tcIitlXT9vLnRhcHBlZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7by50YXBwZWQ9bnVsbCxkKFwiY2xpY2tcIitlKX0sNTAwKTpkKFwiY2xpY2tcIitlKTtyZXR1cm4gdGhpc319LG4oZSkub24oXCJvbkFjdGl2YXRlLmZiXCIsZnVuY3Rpb24odCxlKXtlJiYhZS5HdWVzdHVyZXMmJihlLkd1ZXN0dXJlcz1uZXcgdShlKSl9KX0od2luZG93LGRvY3VtZW50LHdpbmRvdy5qUXVlcnl8fGpRdWVyeSksZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtlLmV4dGVuZCghMCxlLmZhbmN5Ym94LmRlZmF1bHRzLHtidG5UcGw6e3NsaWRlU2hvdzonPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXBsYXkgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIGQ9XCJNMTMsMTIgTDI3LDIwIEwxMywyNyBaXCIgLz48cGF0aCBkPVwiTTE1LDEwIHYxOSBNMjMsMTAgdjE5XCIgLz48L3N2Zz48L2J1dHRvbj4nfSxzbGlkZVNob3c6e2F1dG9TdGFydDohMSxzcGVlZDozZTN9fSk7dmFyIG49ZnVuY3Rpb24odCl7dGhpcy5pbnN0YW5jZT10LHRoaXMuaW5pdCgpfTtlLmV4dGVuZChuLnByb3RvdHlwZSx7dGltZXI6bnVsbCxpc0FjdGl2ZTohMSwkYnV0dG9uOm51bGwsaW5pdDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC4kYnV0dG9uPXQuaW5zdGFuY2UuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtcGxheV1cIikub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7dC50b2dnbGUoKX0pLCh0Lmluc3RhbmNlLmdyb3VwLmxlbmd0aDwyfHwhdC5pbnN0YW5jZS5ncm91cFt0Lmluc3RhbmNlLmN1cnJJbmRleF0ub3B0cy5zbGlkZVNob3cpJiZ0LiRidXR0b24uaGlkZSgpfSxzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztlLmluc3RhbmNlJiZlLmluc3RhbmNlLmN1cnJlbnQmJih0PT09ITB8fGUuaW5zdGFuY2UuY3VycmVudC5vcHRzLmxvb3B8fGUuaW5zdGFuY2UuY3VyckluZGV4PGUuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoLTEpP2UudGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe2UuaXNBY3RpdmUmJmUuaW5zdGFuY2UuanVtcFRvKChlLmluc3RhbmNlLmN1cnJJbmRleCsxKSVlLmluc3RhbmNlLmdyb3VwLmxlbmd0aCl9LGUuaW5zdGFuY2UuY3VycmVudC5vcHRzLnNsaWRlU2hvdy5zcGVlZCk6KGUuc3RvcCgpLGUuaW5zdGFuY2UuaWRsZVNlY29uZHNDb3VudGVyPTAsZS5pbnN0YW5jZS5zaG93Q29udHJvbHMoKSl9LGNsZWFyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztjbGVhclRpbWVvdXQodC50aW1lciksdC50aW1lcj1udWxsfSxzdGFydDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lmluc3RhbmNlLmN1cnJlbnQ7ZSYmKHQuaXNBY3RpdmU9ITAsdC4kYnV0dG9uLmF0dHIoXCJ0aXRsZVwiLGUub3B0cy5pMThuW2Uub3B0cy5sYW5nXS5QTEFZX1NUT1ApLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wYXVzZVwiKSx0LnNldCghMCkpfSxzdG9wOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuaW5zdGFuY2UuY3VycmVudDt0LmNsZWFyKCksdC4kYnV0dG9uLmF0dHIoXCJ0aXRsZVwiLGUub3B0cy5pMThuW2Uub3B0cy5sYW5nXS5QTEFZX1NUQVJUKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tcGF1c2VcIikuYWRkQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBsYXlcIiksdC5pc0FjdGl2ZT0hMX0sdG9nZ2xlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzQWN0aXZlP3Quc3RvcCgpOnQuc3RhcnQoKX19KSxlKHQpLm9uKHtcIm9uSW5pdC5mYlwiOmZ1bmN0aW9uKHQsZSl7ZSYmIWUuU2xpZGVTaG93JiYoZS5TbGlkZVNob3c9bmV3IG4oZSkpfSxcImJlZm9yZVNob3cuZmJcIjpmdW5jdGlvbih0LGUsbixvKXt2YXIgaT1lJiZlLlNsaWRlU2hvdztvP2kmJm4ub3B0cy5zbGlkZVNob3cuYXV0b1N0YXJ0JiZpLnN0YXJ0KCk6aSYmaS5pc0FjdGl2ZSYmaS5jbGVhcigpfSxcImFmdGVyU2hvdy5mYlwiOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1lJiZlLlNsaWRlU2hvdztvJiZvLmlzQWN0aXZlJiZvLnNldCgpfSxcImFmdGVyS2V5ZG93bi5mYlwiOmZ1bmN0aW9uKG4sbyxpLGEscyl7dmFyIHI9byYmby5TbGlkZVNob3c7IXJ8fCFpLm9wdHMuc2xpZGVTaG93fHw4MCE9PXMmJjMyIT09c3x8ZSh0LmFjdGl2ZUVsZW1lbnQpLmlzKFwiYnV0dG9uLGEsaW5wdXRcIil8fChhLnByZXZlbnREZWZhdWx0KCksci50b2dnbGUoKSl9LFwiYmVmb3JlQ2xvc2UuZmIgb25EZWFjdGl2YXRlLmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZlLlNsaWRlU2hvdztuJiZuLnN0b3AoKX19KSxlKHQpLm9uKFwidmlzaWJpbGl0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIG49ZS5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLG89biYmbi5TbGlkZVNob3c7byYmby5pc0FjdGl2ZSYmKHQuaGlkZGVuP28uY2xlYXIoKTpvLnNldCgpKX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZSxuLG8saT1bW1wicmVxdWVzdEZ1bGxzY3JlZW5cIixcImV4aXRGdWxsc2NyZWVuXCIsXCJmdWxsc2NyZWVuRWxlbWVudFwiLFwiZnVsbHNjcmVlbkVuYWJsZWRcIixcImZ1bGxzY3JlZW5jaGFuZ2VcIixcImZ1bGxzY3JlZW5lcnJvclwiXSxbXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiLFwid2Via2l0RXhpdEZ1bGxzY3JlZW5cIixcIndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50XCIsXCJ3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZFwiLFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFwid2Via2l0ZnVsbHNjcmVlbmVycm9yXCJdLFtcIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuXCIsXCJ3ZWJraXRDYW5jZWxGdWxsU2NyZWVuXCIsXCJ3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnRcIixcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcIndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2VcIixcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiXSxbXCJtb3pSZXF1ZXN0RnVsbFNjcmVlblwiLFwibW96Q2FuY2VsRnVsbFNjcmVlblwiLFwibW96RnVsbFNjcmVlbkVsZW1lbnRcIixcIm1vekZ1bGxTY3JlZW5FbmFibGVkXCIsXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsXCJtb3pmdWxsc2NyZWVuZXJyb3JcIl0sW1wibXNSZXF1ZXN0RnVsbHNjcmVlblwiLFwibXNFeGl0RnVsbHNjcmVlblwiLFwibXNGdWxsc2NyZWVuRWxlbWVudFwiLFwibXNGdWxsc2NyZWVuRW5hYmxlZFwiLFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCIsXCJNU0Z1bGxzY3JlZW5FcnJvclwiXV0sYT17fTtmb3Iobj0wO248aS5sZW5ndGg7bisrKWlmKGU9aVtuXSxlJiZlWzFdaW4gdCl7Zm9yKG89MDtvPGUubGVuZ3RoO28rKylhW2lbMF1bb11dPWVbb107cmV0dXJuIGF9cmV0dXJuITF9KCk7aWYoIW4pcmV0dXJuIHZvaWQoZSYmZS5mYW5jeWJveCYmKGUuZmFuY3lib3guZGVmYXVsdHMuYnRuVHBsLmZ1bGxTY3JlZW49ITEpKTt2YXIgbz17cmVxdWVzdDpmdW5jdGlvbihlKXtlPWV8fHQuZG9jdW1lbnRFbGVtZW50LGVbbi5yZXF1ZXN0RnVsbHNjcmVlbl0oZS5BTExPV19LRVlCT0FSRF9JTlBVVCl9LGV4aXQ6ZnVuY3Rpb24oKXt0W24uZXhpdEZ1bGxzY3JlZW5dKCl9LHRvZ2dsZTpmdW5jdGlvbihlKXtlPWV8fHQuZG9jdW1lbnRFbGVtZW50LHRoaXMuaXNGdWxsc2NyZWVuKCk/dGhpcy5leGl0KCk6dGhpcy5yZXF1ZXN0KGUpfSxpc0Z1bGxzY3JlZW46ZnVuY3Rpb24oKXtyZXR1cm4gQm9vbGVhbih0W24uZnVsbHNjcmVlbkVsZW1lbnRdKX0sZW5hYmxlZDpmdW5jdGlvbigpe3JldHVybiBCb29sZWFuKHRbbi5mdWxsc2NyZWVuRW5hYmxlZF0pfX07ZS5leHRlbmQoITAsZS5mYW5jeWJveC5kZWZhdWx0cyx7YnRuVHBsOntmdWxsU2NyZWVuOic8YnV0dG9uIGRhdGEtZmFuY3lib3gtZnVsbHNjcmVlbiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWZ1bGxzY3JlZW5cIiB0aXRsZT1cInt7RlVMTF9TQ1JFRU59fVwiPjxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPjxwYXRoIGQ9XCJNOSwxMiBoMjIgdjE2IGgtMjIgdi0xNiB2MTYgaDIyIHYtMTYgWlwiIC8+PC9zdmc+PC9idXR0b24+J30sZnVsbFNjcmVlbjp7YXV0b1N0YXJ0OiExfX0pLGUodCkub24oe1wib25Jbml0LmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbjtlJiZlLmdyb3VwW2UuY3VyckluZGV4XS5vcHRzLmZ1bGxTY3JlZW4/KG49ZS4kcmVmcy5jb250YWluZXIsbi5vbihcImNsaWNrLmZiLWZ1bGxzY3JlZW5cIixcIltkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dXCIsZnVuY3Rpb24odCl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksby50b2dnbGUoblswXSl9KSxlLm9wdHMuZnVsbFNjcmVlbiYmZS5vcHRzLmZ1bGxTY3JlZW4uYXV0b1N0YXJ0PT09ITAmJm8ucmVxdWVzdChuWzBdKSxlLkZ1bGxTY3JlZW49byk6ZSYmZS4kcmVmcy50b29sYmFyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuXVwiKS5oaWRlKCl9LFwiYWZ0ZXJLZXlkb3duLmZiXCI6ZnVuY3Rpb24odCxlLG4sbyxpKXtlJiZlLkZ1bGxTY3JlZW4mJjcwPT09aSYmKG8ucHJldmVudERlZmF1bHQoKSxlLkZ1bGxTY3JlZW4udG9nZ2xlKGUuJHJlZnMuY29udGFpbmVyWzBdKSl9LFwiYmVmb3JlQ2xvc2UuZmJcIjpmdW5jdGlvbih0KXt0JiZ0LkZ1bGxTY3JlZW4mJm8uZXhpdCgpfX0pLGUodCkub24obi5mdWxsc2NyZWVuY2hhbmdlLGZ1bmN0aW9uKCl7dmFyIHQ9by5pc0Z1bGxzY3JlZW4oKSxuPWUuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtuJiYobi5jdXJyZW50JiZcImltYWdlXCI9PT1uLmN1cnJlbnQudHlwZSYmbi5pc0FuaW1hdGluZyYmKG4uY3VycmVudC4kY29udGVudC5jc3MoXCJ0cmFuc2l0aW9uXCIsXCJub25lXCIpLG4uaXNBbmltYXRpbmc9ITEsbi51cGRhdGUoITAsITAsMCkpLG4udHJpZ2dlcihcIm9uRnVsbHNjcmVlbkNoYW5nZVwiLHQpLG4uJHJlZnMuY29udGFpbmVyLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtaXMtZnVsbHNjcmVlblwiLHQpKX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5mYW5jeWJveC5kZWZhdWx0cz1lLmV4dGVuZCghMCx7YnRuVHBsOnt0aHVtYnM6JzxidXR0b24gZGF0YS1mYW5jeWJveC10aHVtYnMgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS10aHVtYnNcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgMTIwIDEyMFwiPjxwYXRoIGQ9XCJNMzAsMzAgaDE0IHYxNCBoLTE0IFogTTUwLDMwIGgxNCB2MTQgaC0xNCBaIE03MCwzMCBoMTQgdjE0IGgtMTQgWiBNMzAsNTAgaDE0IHYxNCBoLTE0IFogTTUwLDUwIGgxNCB2MTQgaC0xNCBaIE03MCw1MCBoMTQgdjE0IGgtMTQgWiBNMzAsNzAgaDE0IHYxNCBoLTE0IFogTTUwLDcwIGgxNCB2MTQgaC0xNCBaIE03MCw3MCBoMTQgdjE0IGgtMTQgWlwiIC8+PC9zdmc+PC9idXR0b24+J30sdGh1bWJzOnthdXRvU3RhcnQ6ITEsaGlkZU9uQ2xvc2U6ITAscGFyZW50RWw6XCIuZmFuY3lib3gtY29udGFpbmVyXCIsYXhpczpcInlcIn19LGUuZmFuY3lib3guZGVmYXVsdHMpO3ZhciBuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdCh0KX07ZS5leHRlbmQobi5wcm90b3R5cGUseyRidXR0b246bnVsbCwkZ3JpZDpudWxsLCRsaXN0Om51bGwsaXNWaXNpYmxlOiExLGlzQWN0aXZlOiExLGluaXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztlLmluc3RhbmNlPXQsdC5UaHVtYnM9ZTt2YXIgbj10Lmdyb3VwWzBdLG89dC5ncm91cFsxXTtlLm9wdHM9dC5ncm91cFt0LmN1cnJJbmRleF0ub3B0cy50aHVtYnMsZS4kYnV0dG9uPXQuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtdGh1bWJzXVwiKSxlLm9wdHMmJm4mJm8mJihcImltYWdlXCI9PW4udHlwZXx8bi5vcHRzLnRodW1ifHxuLm9wdHMuJHRodW1iKSYmKFwiaW1hZ2VcIj09by50eXBlfHxvLm9wdHMudGh1bWJ8fG8ub3B0cy4kdGh1bWIpPyhlLiRidXR0b24uc2hvdygpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2UudG9nZ2xlKCl9KSxlLmlzQWN0aXZlPSEwKTplLiRidXR0b24uaGlkZSgpfSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgdCxuLG89dGhpcyxpPW8uaW5zdGFuY2UsYT1vLm9wdHMucGFyZW50RWw7by4kZ3JpZD1lKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtdGh1bWJzIGZhbmN5Ym94LXRodW1icy0nK28ub3B0cy5heGlzKydcIj48L2Rpdj4nKS5hcHBlbmRUbyhpLiRyZWZzLmNvbnRhaW5lci5maW5kKGEpLmFkZEJhY2soKS5maWx0ZXIoYSkpLHQ9XCI8dWw+XCIsZS5lYWNoKGkuZ3JvdXAsZnVuY3Rpb24oZSxvKXtuPW8ub3B0cy50aHVtYnx8KG8ub3B0cy4kdGh1bWI/by5vcHRzLiR0aHVtYi5hdHRyKFwic3JjXCIpOm51bGwpLG58fFwiaW1hZ2VcIiE9PW8udHlwZXx8KG49by5zcmMpLG4mJm4ubGVuZ3RoJiYodCs9JzxsaSBkYXRhLWluZGV4PVwiJytlKydcIiAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYW5jeWJveC10aHVtYnMtbG9hZGluZ1wiPjxpbWcgZGF0YS1zcmM9XCInK24rJ1wiIC8+PC9saT4nKX0pLHQrPVwiPC91bD5cIixvLiRsaXN0PWUodCkuYXBwZW5kVG8oby4kZ3JpZCkub24oXCJjbGlja1wiLFwibGlcIixmdW5jdGlvbigpe2kuanVtcFRvKGUodGhpcykuZGF0YShcImluZGV4XCIpKX0pLG8uJGxpc3QuZmluZChcImltZ1wiKS5oaWRlKCkub25lKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIHQsbixvLGksYT1lKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtdGh1bWJzLWxvYWRpbmdcIikscz1hLm91dGVyV2lkdGgoKSxyPWEub3V0ZXJIZWlnaHQoKTt0PXRoaXMubmF0dXJhbFdpZHRofHx0aGlzLndpZHRoLG49dGhpcy5uYXR1cmFsSGVpZ2h0fHx0aGlzLmhlaWdodCxvPXQvcyxpPW4vcixvPj0xJiZpPj0xJiYobz5pPyh0Lz1pLG49cik6KHQ9cyxuLz1vKSksZSh0aGlzKS5jc3Moe3dpZHRoOk1hdGguZmxvb3IodCksaGVpZ2h0Ok1hdGguZmxvb3IobiksXCJtYXJnaW4tdG9wXCI6bj5yP01hdGguZmxvb3IoLjMqci0uMypuKTpNYXRoLmZsb29yKC41KnItLjUqbiksXCJtYXJnaW4tbGVmdFwiOk1hdGguZmxvb3IoLjUqcy0uNSp0KX0pLnNob3coKX0pLmVhY2goZnVuY3Rpb24oKXt0aGlzLnNyYz1lKHRoaXMpLmRhdGEoXCJzcmNcIil9KSxcInhcIj09PW8ub3B0cy5heGlzJiZvLiRsaXN0LndpZHRoKHBhcnNlSW50KG8uJGdyaWQuY3NzKFwicGFkZGluZy1yaWdodFwiKSkraS5ncm91cC5sZW5ndGgqby4kbGlzdC5jaGlsZHJlbigpLmVxKDApLm91dGVyV2lkdGgoITApK1wicHhcIil9LGZvY3VzOmZ1bmN0aW9uKHQpe3ZhciBlLG4sbz10aGlzLGk9by4kbGlzdDtvLmluc3RhbmNlLmN1cnJlbnQmJihlPWkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXRodW1icy1hY3RpdmVcIikuZmlsdGVyKCdbZGF0YS1pbmRleD1cIicrby5pbnN0YW5jZS5jdXJyZW50LmluZGV4KydcIl0nKS5hZGRDbGFzcyhcImZhbmN5Ym94LXRodW1icy1hY3RpdmVcIiksbj1lLnBvc2l0aW9uKCksXCJ5XCI9PT1vLm9wdHMuYXhpcyYmKG4udG9wPDB8fG4udG9wPmkuaGVpZ2h0KCktZS5vdXRlckhlaWdodCgpKT9pLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6aS5zY3JvbGxUb3AoKStuLnRvcH0sdCk6XCJ4XCI9PT1vLm9wdHMuYXhpcyYmKG4ubGVmdDxpLnBhcmVudCgpLnNjcm9sbExlZnQoKXx8bi5sZWZ0PmkucGFyZW50KCkuc2Nyb2xsTGVmdCgpKyhpLnBhcmVudCgpLndpZHRoKCktZS5vdXRlcldpZHRoKCkpKSYmaS5wYXJlbnQoKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsTGVmdDpuLmxlZnR9LHQpKX0sdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5pbnN0YW5jZS4kcmVmcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LXRodW1ic1wiLHRoaXMuaXNWaXNpYmxlKSx0aGlzLmlzVmlzaWJsZT8odGhpcy4kZ3JpZHx8dGhpcy5jcmVhdGUoKSx0aGlzLmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic1Nob3dcIiksdGhpcy5mb2N1cygwKSk6dGhpcy4kZ3JpZCYmdGhpcy5pbnN0YW5jZS50cmlnZ2VyKFwib25UaHVtYnNIaWRlXCIpLHRoaXMuaW5zdGFuY2UudXBkYXRlKCl9LGhpZGU6ZnVuY3Rpb24oKXt0aGlzLmlzVmlzaWJsZT0hMSx0aGlzLnVwZGF0ZSgpfSxzaG93OmZ1bmN0aW9uKCl7dGhpcy5pc1Zpc2libGU9ITAsdGhpcy51cGRhdGUoKX0sdG9nZ2xlOmZ1bmN0aW9uKCl7dGhpcy5pc1Zpc2libGU9IXRoaXMuaXNWaXNpYmxlLHRoaXMudXBkYXRlKCl9fSksZSh0KS5vbih7XCJvbkluaXQuZmJcIjpmdW5jdGlvbih0LGUpe3ZhciBvO2UmJiFlLlRodW1icyYmKG89bmV3IG4oZSksby5pc0FjdGl2ZSYmby5vcHRzLmF1dG9TdGFydD09PSEwJiZvLnNob3coKSl9LFwiYmVmb3JlU2hvdy5mYlwiOmZ1bmN0aW9uKHQsZSxuLG8pe3ZhciBpPWUmJmUuVGh1bWJzO2kmJmkuaXNWaXNpYmxlJiZpLmZvY3VzKG8/MDoyNTApfSxcImFmdGVyS2V5ZG93bi5mYlwiOmZ1bmN0aW9uKHQsZSxuLG8saSl7dmFyIGE9ZSYmZS5UaHVtYnM7YSYmYS5pc0FjdGl2ZSYmNzE9PT1pJiYoby5wcmV2ZW50RGVmYXVsdCgpLGEudG9nZ2xlKCkpfSxcImJlZm9yZUNsb3NlLmZiXCI6ZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZlLlRodW1icztuJiZuLmlzVmlzaWJsZSYmbi5vcHRzLmhpZGVPbkNsb3NlIT09ITEmJm4uJGdyaWQuaGlkZSgpfX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5KSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7dmFyIGU9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtyZXR1cm4gU3RyaW5nKHQpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0pfWUuZXh0ZW5kKCEwLGUuZmFuY3lib3guZGVmYXVsdHMse2J0blRwbDp7c2hhcmU6JzxidXR0b24gZGF0YS1mYW5jeWJveC1zaGFyZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXNoYXJlXCIgdGl0bGU9XCJ7e1NIQVJFfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj48cGF0aCBkPVwiTTYsMzAgQzgsMTggMTksMTYgMjMsMTYgTDIzLDE2IEwyMywxMCBMMzMsMjAgTDIzLDI5IEwyMywyNCBDMTksMjQgOCwyNyA2LDMwIFpcIj48L3N2Zz48L2J1dHRvbj4nfSxzaGFyZTp7dHBsOic8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc2hhcmVcIj48aDE+e3tTSEFSRX19PC9oMT48cCBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19saW5rc1wiPjxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS1mYlwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17e3VybH19XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0yODcgNDU2di0yOTljMC0yMSA2LTM1IDM1LTM1aDM4di02M2MtNy0xLTI5LTMtNTUtMy01NCAwLTkxIDMzLTkxIDk0djMwNm0xNDMtMjU0aC0yMDV2NzJoMTk2XCIgLz48L3N2Zz48c3Bhbj5GYWNlYm9vazwvc3Bhbj48L2E+PGEgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9fYnV0dG9uIGZhbmN5Ym94LXNoYXJlX19idXR0b24tLXB0XCIgaHJlZj1cImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD17e3VybH19JmRlc2NyaXB0aW9uPXt7ZGVzY3J9fSZtZWRpYT17e21lZGlhfX1cIj48c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTI2NSA1NmMtMTA5IDAtMTY0IDc4LTE2NCAxNDQgMCAzOSAxNSA3NCA0NyA4NyA1IDIgMTAgMCAxMi01bDQtMTljMi02IDEtOC0zLTEzLTktMTEtMTUtMjUtMTUtNDUgMC01OCA0My0xMTAgMTEzLTExMCA2MiAwIDk2IDM4IDk2IDg4IDAgNjctMzAgMTIyLTczIDEyMi0yNCAwLTQyLTE5LTM2LTQ0IDYtMjkgMjAtNjAgMjAtODEgMC0xOS0xMC0zNS0zMS0zNS0yNSAwLTQ0IDI2LTQ0IDYwIDAgMjEgNyAzNiA3IDM2bC0zMCAxMjVjLTggMzctMSA4MyAwIDg3IDAgMyA0IDQgNSAyIDItMyAzMi0zOSA0Mi03NWwxNi02NGM4IDE2IDMxIDI5IDU2IDI5IDc0IDAgMTI0LTY3IDEyNC0xNTcgMC02OS01OC0xMzItMTQ2LTEzMnpcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz48c3Bhbj5QaW50ZXJlc3Q8L3NwYW4+PC9hPjxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS10d1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9e3t1cmx9fSZ0ZXh0PXt7ZGVzY3J9fVwiPjxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDU2IDEzM2MtMTQgNy0zMSAxMS00NyAxMyAxNy0xMCAzMC0yNyAzNy00Ni0xNSAxMC0zNCAxNi01MiAyMC02MS02Mi0xNTctNy0xNDEgNzUtNjgtMy0xMjktMzUtMTY5LTg1LTIyIDM3LTExIDg2IDI2IDEwOS0xMyAwLTI2LTQtMzctOSAwIDM5IDI4IDcyIDY1IDgwLTEyIDMtMjUgNC0zNyAyIDEwIDMzIDQxIDU3IDc3IDU3LTQyIDMwLTc3IDM4LTEyMiAzNCAxNzAgMTExIDM3OC0zMiAzNTktMjA4IDE2LTExIDMwLTI1IDQxLTQyelwiIC8+PC9zdmc+PHNwYW4+VHdpdHRlcjwvc3Bhbj48L2E+PC9wPjxwPjxpbnB1dCBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ7e3VybF9yYXd9fVwiIC8+PC9wPjwvZGl2Pid9fSksZSh0KS5vbihcImNsaWNrXCIsXCJbZGF0YS1mYW5jeWJveC1zaGFyZV1cIixmdW5jdGlvbigpe3ZhciB0LG8saT1lLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7aSYmKHQ9aS5jdXJyZW50Lm9wdHMuaGFzaD09PSExP2kuY3VycmVudC5zcmM6d2luZG93LmxvY2F0aW9uLG89aS5jdXJyZW50Lm9wdHMuc2hhcmUudHBsLnJlcGxhY2UoL1xce1xce21lZGlhXFx9XFx9L2csXCJpbWFnZVwiPT09aS5jdXJyZW50LnR5cGU/ZW5jb2RlVVJJQ29tcG9uZW50KGkuY3VycmVudC5zcmMpOlwiXCIpLnJlcGxhY2UoL1xce1xce3VybFxcfVxcfS9nLGVuY29kZVVSSUNvbXBvbmVudCh0KSkucmVwbGFjZSgvXFx7XFx7dXJsX3Jhd1xcfVxcfS9nLG4odCkpLnJlcGxhY2UoL1xce1xce2Rlc2NyXFx9XFx9L2csaS4kY2FwdGlvbj9lbmNvZGVVUklDb21wb25lbnQoaS4kY2FwdGlvbi50ZXh0KCkpOlwiXCIpLGUuZmFuY3lib3gub3Blbih7c3JjOmkudHJhbnNsYXRlKGksbyksdHlwZTpcImh0bWxcIixvcHRzOnthbmltYXRpb25FZmZlY3Q6XCJmYWRlXCIsYW5pbWF0aW9uRHVyYXRpb246MjUwLGFmdGVyTG9hZDpmdW5jdGlvbih0LGUpe2UuJGNvbnRlbnQuZmluZChcIi5mYW5jeWJveC1zaGFyZV9fbGlua3MgYVwiKS5jbGljayhmdW5jdGlvbigpe3JldHVybiB3aW5kb3cub3Blbih0aGlzLmhyZWYsXCJTaGFyZVwiLFwid2lkdGg9NTUwLCBoZWlnaHQ9NDUwXCIpLCExfSl9fX0pKX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKCl7dmFyIHQ9ZS5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSxuPXQuc3BsaXQoXCItXCIpLG89bi5sZW5ndGg+MSYmL15cXCs/XFxkKyQvLnRlc3QobltuLmxlbmd0aC0xXSk/cGFyc2VJbnQobi5wb3AoLTEpLDEwKXx8MToxLGk9bi5qb2luKFwiLVwiKTtyZXR1cm4gbzwxJiYobz0xKSx7aGFzaDp0LGluZGV4Om8sZ2FsbGVyeTppfX1mdW5jdGlvbiBpKHQpe3ZhciBlO1wiXCIhPT10LmdhbGxlcnkmJihlPW4oXCJbZGF0YS1mYW5jeWJveD0nXCIrbi5lc2NhcGVTZWxlY3Rvcih0LmdhbGxlcnkpK1wiJ11cIikuZXEodC5pbmRleC0xKSxlLmxlbmd0aHx8KGU9bihcIiNcIituLmVzY2FwZVNlbGVjdG9yKHQuZ2FsbGVyeSkpKSxlLmxlbmd0aCYmKHM9ITEsZS50cmlnZ2VyKFwiY2xpY2tcIikpKX1mdW5jdGlvbiBhKHQpe3ZhciBlO3JldHVybiEhdCYmKGU9dC5jdXJyZW50P3QuY3VycmVudC5vcHRzOnQub3B0cyxlLmhhc2h8fChlLiRvcmlnP2UuJG9yaWcuZGF0YShcImZhbmN5Ym94XCIpOlwiXCIpKX1uLmVzY2FwZVNlbGVjdG9yfHwobi5lc2NhcGVTZWxlY3Rvcj1mdW5jdGlvbih0KXt2YXIgZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXHg4MC1cXHVGRkZGXFx3LV0vZyxuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGU/XCJcXDBcIj09PXQ/XCLvv71cIjp0LnNsaWNlKDAsLTEpK1wiXFxcXFwiK3QuY2hhckNvZGVBdCh0Lmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrdH07cmV0dXJuKHQrXCJcIikucmVwbGFjZShlLG4pfSk7dmFyIHM9ITAscj1udWxsLGM9bnVsbDtuKGZ1bmN0aW9uKCl7bi5mYW5jeWJveC5kZWZhdWx0cy5oYXNoIT09ITEmJihuKHQpLm9uKHtcIm9uSW5pdC5mYlwiOmZ1bmN0aW9uKHQsZSl7dmFyIG4saTtlLmdyb3VwW2UuY3VyckluZGV4XS5vcHRzLmhhc2ghPT0hMSYmKG49bygpLGk9YShlKSxpJiZuLmdhbGxlcnkmJmk9PW4uZ2FsbGVyeSYmKGUuY3VyckluZGV4PW4uaW5kZXgtMSkpfSxcImJlZm9yZVNob3cuZmJcIjpmdW5jdGlvbihuLG8saSl7dmFyIGw7aSYmaS5vcHRzLmhhc2ghPT0hMSYmKGw9YShvKSxsJiZcIlwiIT09bCYmKGUubG9jYXRpb24uaGFzaC5pbmRleE9mKGwpPDAmJihvLm9wdHMub3JpZ0hhc2g9ZS5sb2NhdGlvbi5oYXNoKSxyPWwrKG8uZ3JvdXAubGVuZ3RoPjE/XCItXCIrKGkuaW5kZXgrMSk6XCJcIiksXCJyZXBsYWNlU3RhdGVcImluIGUuaGlzdG9yeT8oYyYmY2xlYXJUaW1lb3V0KGMpLGM9c2V0VGltZW91dChmdW5jdGlvbigpe2UuaGlzdG9yeVtzP1wicHVzaFN0YXRlXCI6XCJyZXBsYWNlU3RhdGVcIl0oe30sdC50aXRsZSxlLmxvY2F0aW9uLnBhdGhuYW1lK2UubG9jYXRpb24uc2VhcmNoK1wiI1wiK3IpLGM9bnVsbCxzPSExfSwzMDApKTplLmxvY2F0aW9uLmhhc2g9cikpfSxcImJlZm9yZUNsb3NlLmZiXCI6ZnVuY3Rpb24obyxpLHMpe3ZhciBsLHU7YyYmY2xlYXJUaW1lb3V0KGMpLHMub3B0cy5oYXNoIT09ITEmJihsPWEoaSksdT1pJiZpLm9wdHMub3JpZ0hhc2g/aS5vcHRzLm9yaWdIYXNoOlwiXCIsbCYmXCJcIiE9PWwmJihcInJlcGxhY2VTdGF0ZVwiaW4gaGlzdG9yeT9lLmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LHQudGl0bGUsZS5sb2NhdGlvbi5wYXRobmFtZStlLmxvY2F0aW9uLnNlYXJjaCt1KTooZS5sb2NhdGlvbi5oYXNoPXUsbihlKS5zY3JvbGxUb3AoaS5zY3JvbGxUb3ApLnNjcm9sbExlZnQoaS5zY3JvbGxMZWZ0KSkpLHI9bnVsbCl9fSksbihlKS5vbihcImhhc2hjaGFuZ2UuZmJcIixmdW5jdGlvbigpe3ZhciB0PW8oKTtuLmZhbmN5Ym94LmdldEluc3RhbmNlKCk/IXJ8fHI9PT10LmdhbGxlcnkrXCItXCIrdC5pbmRleHx8MT09PXQuaW5kZXgmJnI9PXQuZ2FsbGVyeXx8KHI9bnVsbCxuLmZhbmN5Ym94LmNsb3NlKCkpOlwiXCIhPT10LmdhbGxlcnkmJmkodCl9KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aShvKCkpfSw1MCkpfSl9KGRvY3VtZW50LHdpbmRvdyx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpLGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49KG5ldyBEYXRlKS5nZXRUaW1lKCk7ZSh0KS5vbih7XCJvbkluaXQuZmJcIjpmdW5jdGlvbih0LGUsbyl7ZS4kcmVmcy5zdGFnZS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwgd2hlZWwgTW96TW91c2VQaXhlbFNjcm9sbFwiLGZ1bmN0aW9uKHQpe3ZhciBvPWUuY3VycmVudCxpPShuZXcgRGF0ZSkuZ2V0VGltZSgpO2UuZ3JvdXAubGVuZ3RoPDF8fG8ub3B0cy53aGVlbD09PSExfHxcImF1dG9cIj09PW8ub3B0cy53aGVlbCYmXCJpbWFnZVwiIT09by50eXBlfHwodC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksby4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKXx8KHQ9dC5vcmlnaW5hbEV2ZW50fHx0LGktbjwyNTB8fChuPWksZVsoLXQuZGVsdGFZfHwtdC5kZWx0YVh8fHQud2hlZWxEZWx0YXx8LXQuZGV0YWlsKTwwP1wibmV4dFwiOlwicHJldmlvdXNcIl0oKSkpKX0pfX0pfShkb2N1bWVudCx3aW5kb3cualF1ZXJ5fHxqUXVlcnkpOyIsIi8qXHJcbiBfIF8gICAgICBfICAgICAgIF9cclxuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXHJcbiAvIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XHJcbiBcXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxyXG4gfF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXHJcbiB8X18vXHJcbiBWZXJzaW9uOiAxLjguMVxyXG4gQXV0aG9yOiBLZW4gV2hlZWxlclxyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXHJcbiBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcclxuIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcclxuIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcclxuICovXHJcbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cclxuOyhmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XHJcbiAgICB9XHJcblxyXG59KGZ1bmN0aW9uKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcclxuXHJcbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xyXG5cclxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcclxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcm93czogMSxcclxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcclxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXHJcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcclxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XHJcblxyXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XHJcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcclxuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XHJcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcclxuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xyXG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuXHJcbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcclxuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcclxuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcclxuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xyXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcclxuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcclxuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcclxuXHJcbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xyXG5cclxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcclxuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxyXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXHJcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XHJcblxyXG5cclxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XHJcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gU2xpY2s7XHJcblxyXG4gICAgfSgpKTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xyXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXHJcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XHJcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcclxuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xyXG5cclxuICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcclxuICAgICAgICAgICAgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcclxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcclxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkKHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcclxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcclxuXHJcbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xyXG5cclxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcclxuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xyXG5cclxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgaSwgZG90O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPVxyXG4gICAgICAgICAgICBfLiRzbGlkZXJcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XHJcbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcclxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xyXG5cclxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG5cclxuXHJcbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xyXG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcclxuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xyXG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxyXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxyXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cclxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxyXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcclxuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XHJcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcclxuXHJcbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xyXG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xyXG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xyXG5cclxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XHJcblxyXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XHJcblxyXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG5cclxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XHJcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcclxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxyXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xyXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xyXG5cclxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXHJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuXHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXJcclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXHJcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcclxuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcclxuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcclxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxyXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcclxuICAgICAgICAgICAgY29lZjtcclxuXHJcbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XHJcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcclxuICAgICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcclxuICAgICAgICAgICAgbWF4O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xyXG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XHJcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xyXG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XHJcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG5cclxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xyXG5cclxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcclxuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xyXG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XHJcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XHJcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xyXG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcclxuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcclxuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XHJcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xyXG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5pbml0QURBKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcclxuICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xyXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcclxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xyXG4gICAgICAgICAgICB9KS5lbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcclxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcclxuICAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXHJcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XHJcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XHJcblxyXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xyXG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcclxuXHJcbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XHJcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxyXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xyXG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcclxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcclxuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcclxuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIF8uaW5pdFVJKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcclxuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XHJcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XHJcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xyXG5cclxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxyXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcclxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XHJcblxyXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xyXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xyXG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XHJcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xyXG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcclxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XHJcblxyXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG5cclxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxyXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cclxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXHJcbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG5cclxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XHJcblxyXG4gICAgICAgIF8uaW5pdCgpO1xyXG5cclxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcclxuXHJcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XHJcblxyXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XHJcblxyXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcclxuXHJcbiAgICAgICAgXy5zZXRQcm9wcygpO1xyXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xyXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcclxuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xyXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XHJcbiAgICAgICAgXy5idWlsZERvdHMoKTtcclxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcclxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xyXG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XHJcblxyXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xyXG5cclxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XHJcbiAgICAgICAgXy5hdXRvUGxheSgpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xyXG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XHJcblxyXG4gICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXHJcbiAgICAgICAgICAgIHgsIHk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcclxuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xyXG5cclxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xyXG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XHJcblxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XHJcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XHJcbiAgICAgICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XHJcbiAgICAgICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XHJcbiAgICAgICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxyXG4gICAgICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XHJcblxyXG4gICAgICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLS07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCByZWZyZXNoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICBfLnNldEhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XHJcblxyXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XHJcblxyXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcclxuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcclxuXHJcbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXHJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAuZXEoaW5kZXgpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XHJcblxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xyXG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XHJcbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xyXG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcclxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xyXG5cclxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxyXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xyXG5cclxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XHJcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcclxuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcclxuXHJcbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcclxuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcclxuXHJcbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcclxuXHJcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XHJcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcclxuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVDb3VudCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcclxuXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcclxuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XHJcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxyXG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XHJcblxyXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XHJcblxyXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XHJcblxyXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcclxuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0b3VjaGVzO1xyXG5cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuXHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcclxuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcclxuICAgICAgICBfLmRlc3Ryb3koKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcclxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxyXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuZW5kKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxyXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcclxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXHJcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgcmV0O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF87XHJcbiAgICB9O1xyXG5cclxufSkpOyIsInZhciByZXZpZXdQb3BVcCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBidG4gPSAkKCcucmV2aWV3LWl0ZW1fX3BvcFVwJyksXHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gJCgnLnJldmlldy1pdGVtX190ZXh0JyksXHJcbiAgICAgICAgICAgICAgICBidG5fX3RleHQgPSAkKCcucG9wVXBfX3RleHQnKTtcclxuICAgICAgICAgICAgYnRuLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnJldmlldy1pdGVtX190ZXh0Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5wb3BVcF9faWNvbicpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIHN0aWNreUhlYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJTdGF0aWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJvdHRvbScpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEwNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3RhdGljLmNsYXNzTGlzdC5hZGQoJ2ZpeCcpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclN0YXRpYy5jbGFzc0xpc3QucmVtb3ZlKCdmaXgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsInZhciB1cEJ0biA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjdXAtYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IDAgfSwgODAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVsb2FkZXInKS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XHJcblxyXG4gICAgdXBCdG4uaW5pdCgpO1xyXG4gICAgc3RpY2t5SGVhZGVyLmluaXQoKTtcclxuICAgIHJldmlld1BvcFVwLmluaXQoKTtcclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFRBQlMgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBTTElERVJTIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgICQoJyN0b3Atc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOiA2MDAwLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYWtjaWktc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNjAwMCxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgRFJPUC1ET1dOIE1FTlUgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgJCggJy5kcm9wZG93bi1tZW51IGEuZHJvcGRvd24tdG9nZ2xlJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciAkZWwgPSAkKCB0aGlzICk7XHJcbiAgICAgICAgdmFyICRwYXJlbnQgPSAkKCB0aGlzICkub2Zmc2V0UGFyZW50KCBcIi5kcm9wZG93bi1tZW51XCIgKTtcclxuICAgICAgICBpZiAoICEkKCB0aGlzICkubmV4dCgpLmhhc0NsYXNzKCAnc2hvdycgKSApIHtcclxuICAgICAgICAgICAgJCggdGhpcyApLnBhcmVudHMoICcuZHJvcGRvd24tbWVudScgKS5maXJzdCgpLmZpbmQoICcuc2hvdycgKS5yZW1vdmVDbGFzcyggXCJzaG93XCIgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyICRzdWJNZW51ID0gJCggdGhpcyApLm5leHQoIFwiLmRyb3Bkb3duLW1lbnVcIiApO1xyXG4gICAgICAgICRzdWJNZW51LnRvZ2dsZUNsYXNzKCAnc2hvdycgKTtcclxuXHJcbiAgICAgICAgJCggdGhpcyApLnBhcmVudCggXCJsaVwiICkudG9nZ2xlQ2xhc3MoICdzaG93JyApO1xyXG5cclxuICAgICAgICAkKCB0aGlzICkucGFyZW50cyggJ2xpLm5hdi1pdGVtLmRyb3Bkb3duLnNob3cnICkub24oICdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoIGUgKSB7XHJcbiAgICAgICAgICAgICQoICcuZHJvcGRvd24tbWVudSAuc2hvdycgKS5yZW1vdmVDbGFzcyggXCJzaG93XCIgKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGlmICggISRwYXJlbnQucGFyZW50KCkuaGFzQ2xhc3MoICduYXZiYXItbmF2JyApICkge1xyXG4gICAgICAgICAgICAkZWwubmV4dCgpLmNzcyggeyBcInRvcFwiOiAkZWxbMF0ub2Zmc2V0VG9wLCBcImxlZnRcIjogJHBhcmVudC5vdXRlcldpZHRoKCkgLSA0IH0gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gKTtcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEdyaWQgZ2FsbGVyeSB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB2YXIgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJyk7XHJcbiAgICBpZihncmlkKXtcclxuICAgICAgICB2YXIgbXNucnkgPSBuZXcgTWFzb25yeSggZ3JpZCwge1xyXG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcbiAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsYXlvdXQgTWFzb25yeSBhZnRlciBlYWNoIGltYWdlIGxvYWRzXHJcbiAgICAgICAgbXNucnkubGF5b3V0KCk7XHJcbiAgICB9XHJcblxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgZm9ybSB2YWxpZGF0aW9uIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIGZ1bmN0aW9uIHNlbmRGb3JtKHNlbmRCdXR0b24sIGZvcm1zLCBmb3JtRmllbGQpIHtcclxuICAgICAgICAkKHNlbmRCdXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcykuY2xvc2VzdChmb3JtcyksXHJcbiAgICAgICAgICAgICAgICBpbnB1dHMgPSAgZm9ybS5maW5kKGZvcm1GaWVsZCksXHJcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHZhbGlkYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzTXNnID0gJCgnI21zZy1zdWNjc2VzcycpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cgPSAkKCcjbXNnLWVycm9yJyksXHJcbiAgICAgICAgICAgICAgICBub3RWYWxpZE1zZyA9ICQoJyNtc2ctbm90VmFsaWQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZSAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dHMuZWFjaCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICQodGhpcykudmFsKCkgPT09ICcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93TWVzc2FnZShlbCkge1xyXG4gICAgICAgICAgICAgICAgZWwuZmFkZUluKDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0YPRgdC/0LXRiNC90L4g0LTQvtGB0YLQsNCy0LvQtdC90L4hJywgJ9Cd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0YLQtdGH0LXQvdC40LUgNSDQvNC40L3Rg9GCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSW5kaWNhdG9yLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2JhKDgyLCAxNzIsIDk4LCAxKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKGVycm9yTXNnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1zZy5mYWRlT3V0KDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHN1Y2Nlc3NNc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NNc2cuZmFkZU91dCg1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2Uobm90VmFsaWRNc2cpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdFZhbGlkTXNnLmZhZGVPdXQoNTAwKTtcclxuICAgICAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZigkKCcjY29uc3VsdEZvcm0nKSl7XHJcbiAgICAgICAgc2VuZEZvcm0oJyNjb25zdWx0LWJ0bicsICcjY29uc3VsdEZvcm0nLCAnLmNvbnN1bHQtZm9ybV9faW5wdXQnICk7XHJcbiAgICB9XHJcbiAgICBpZigkKCcjemFtZXItZm9ybScpKXtcclxuICAgICAgICBzZW5kRm9ybSgnI3phbWVyLWZvcm1CdG4nLCAnI3phbWVyLWZvcm0nLCAnLnphbWVyLWZvcm1fX2lucHV0JyApO1xyXG4gICAgfVxyXG4gICAgaWYoJCgnI3F1ZXN0aW9uLWZvcm0nKSl7XHJcbiAgICAgICAgc2VuZEZvcm0oJyNxdWVzdGlvbi1mb3JtQnRuJywgJyNxdWVzdGlvbi1mb3JtJywgJy5xdWVzdGlvbi1mb3JtX19pbnB1dCcgKTtcclxuICAgIH1cclxuICAgIGlmKCQoJyNmYXEnKSl7XHJcbiAgICAgICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEYuQS5RIEFjb3JkaW9uIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICAgICAgJCgnLmFjYy1idG4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuYWNjLWJ0bl9faWNvbicpLnRvZ2dsZUNsYXNzKCdyb3RhdGUnKTtcclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuYWNjLWJ0bl9faWNvbicpLmhhc0NsYXNzKCdyb3RhdGUnKSl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5hY2MtYnRuX19pY29uJykucmVtb3ZlQ2xhc3MoJ3JvdGF0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggJCh0aGlzKS5uZXh0KCkuaXMoIFwiOmhpZGRlblwiICkgKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYWNjLWNvbnRlbnQnKS5zbGlkZVVwKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
