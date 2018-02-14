var admin = (function () {
    return {
        init: function () {
            $('.tab-controls__link').on('click', function (e) {
                e.preventDefault();
                var item = $(this).closest('.tab-controls__item'),
                    contentItem = $('.tabs__item'),
                    itemPosition = item.index();
                contentItem.eq(itemPosition)
                    .addClass('active')
                    .siblings()
                    .removeClass('active');
                item.addClass('active')
                    .siblings()
                    .removeClass('active');
            })
        }
    }
})();
var blogScroll = (function () {
    var sidebar = document.querySelector('.sidebar');
    function _fixMenu() {
        var nav = document.querySelector('.blog-nav__list'),
            navCoords = sidebar.getBoundingClientRect().top;

        if (window.innerWidth >= 780) {
            if (navCoords <= -50) {
                nav.style.position = 'fixed';
                nav.style.top = '2px';
                nav.style.width = '20%';
            } else {
                nav.style.position = 'static';
                nav.style.width = 'auto';
            }
        } else {
            nav.style.position = 'absolute';
            nav.style.top = '';
            nav.style.width = 'auto';
        }

    }
    return{
        init: _fixMenu
    };
})();
// var blur = (function () {
//     var wrapper = document.querySelector('.contact-form'),
//         form = document.querySelector('.contact-form__blur');
//     return{
//         set: function () {
//             var imgWidth = document.querySelector('.comments__bg').offsetWidth,
//                 posLeft = -wrapper.offsetLeft,
//                 posTop =  -wrapper.offsetTop,
//                 blurCss = form.style;
//             blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
//             blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
//         }
//     }
// })();
var flipper = (function () {
    var frontButton = document.querySelector('.login-button'),
        flip = document.querySelector('.flipper'),
        backButton = document.querySelector('.btn-return');
    function _frontFlip(){
        frontButton.addEventListener('click',function (e) {
            e.preventDefault();
            frontButton.style.display = 'none';
            flip.style.transform = 'rotateY(180deg)';
        })
    }
    function _backFlip() {
        backButton.addEventListener('click',function (e) {
            e.preventDefault();
            flip.style.transform = 'rotateY(0deg)';
            frontButton.style.display = 'flex';
        })
    }
    return{
        front: _frontFlip,
        back: _backFlip
    }
})();
var validation = (function () {
    var errorField = document.querySelector('.input-error-msg'),
        captchaError = $('.robot-error'),
        formContainer = document.querySelector('.form__container');

    var _init = function (form) {
        var elems = form.elements;
        return _validate(elems) ? true : false;
    };
    function _validate(inputs) {

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].tagName === 'BUTTON') continue;
            var elem = inputs[i];
                if (elem.value == '') {
                    return _showError(elem)
                }
                if (elem.type === 'checkbox' || elem.type === 'radio') {
                    if (elem.checked && elem.value === 'yes') {
                        return true;
                }
                if (!elem.checked) {
                    captchaError.css({
                        'display': 'block'
                    })
                }

            }
        }

        return true;

    }
    function _showError  (elem) {
        var text = elem.getAttribute('placeholder').toLowerCase();
        var position = elem.parentNode.offsetTop + elem.parentNode.offsetHeight;
        elem.parentNode.classList.add('input-group_error');
        errorField.style.display = 'block';
        errorField.innerText = 'Вы не ввели ' + text;
        errorField.style.top = position + 'px';
    }


    function _clearError(elem) {
        elem.parentNode.classList.remove('input-group_error');
        errorField.style.display = 'none';
    }


    return {
        init: _init,
        clear: _clearError
    }
})();
var map = document.querySelector('#map');
if(map!==null){function initMap () {
    var pointer = new google.maps.LatLng(52.102177, 23.782596),
        center = new google.maps.LatLng(52.097381,  23.745337);

    var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#96d7c8"},{"visibility":"on"}]}];

    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    var mapSettings = {
        center: center,
        scrollwheel: false,
        zoom: 14,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapSettings);

    var marker = new google.maps.Marker({
        icon: 'assets/img/map_marker.png',
        position: pointer,
        map: map,
        title: "I'm here!",
        animation: google.maps.Animation.BOUNCE
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}
}
var mainMenu = (function () {
    return{
        init: function () {
            var menu = $('.main-nav__wrapper'),
                hamburger = $('.hamburger');
            hamburger.on('click',function (e) {
                e.preventDefault();
                menu.toggle();
                this.classList.toggle('hamburger_closed');
            })
        }
    }
})();
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
var parallax = (function () {
    var bg = document.querySelector('.hero__bg');
    var user = document.querySelector('.user');
    var userBgPic = document.querySelector('.hero-title-pic');
    return{
        move: function (block,windowScroll,strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe + ',0)';
            var style = block.style;
            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function (wScroll) {
            this.move(bg,wScroll,30);
            this.move(userBgPic,wScroll,7);
            this.move(user,wScroll,3);
        }
    }
})();

var pageScroll = (function () {
    return{
        scrolDown: function () {
            var downButton = $('.arrow');
            downButton.on('click',function (e) {
                e.preventDefault();
                $('body,html').animate({scrollTop: 827}, 1500);
            })
        },
        scrolUp: function () {
            var upButton = $('.arrow-up');
            upButton.on('click',function (e) {
                e.preventDefault();
                $('body,html').animate({scrollTop: 0}, 1200);
            })
        }
    }
})();
// var skillAnimate = (function () {
//     var skills = document.querySelectorAll('.skill'),
//         circlesAbove = document.querySelectorAll('.skills__circle-above'),
//         windowHeight = window.innerHeight;
//     var circleLength = function (circle) {
//         var circleRadius = circle.getAttribute('r'),
//             circleLength = 2 * Math.PI * circleRadius;
//         return circleLength;
//     };
//     [].slice.call(circlesAbove).forEach(function (circle) {
//
//         circle.style.strokeDashoffset = circleLength(circle);
//         circle.style.strokeDasharray = circleLength(circle);
//
//     });
//     var circleAnimation = function (skill) {
//
//         var circleFill = skill.querySelector('.skills__circle-above'),
//             skillPercent = skill.getAttribute('data-percent'),
//             length = circleLength(circleFill),
//             percent = length * (100 - skillPercent) / 100;
//
//         setTimeout(function () {
//             circleFill.style.strokeDashoffset = percent;
//             circleFill.style.transition = 'all 1s';
//
//             if (skillPercent < 50) {
//                 skill.style.opacity = 0.4;
//                 skill.style.transition = 'all 1s';
//             }
//         }, 500);
//
//     };
//
//     return {
//         init: function () {
//             [].slice.call(skills).forEach(function (skill) {
//
//                 var circleRect = skill.getBoundingClientRect(),
//                     circlePos = circleRect.bottom,
//                     startAnimation = circlePos - windowHeight;
//
//                 if (startAnimation <= 0) {
//                     circleAnimation(skill);
//                 }
//
//             });
//         }
//     }
// })();
var Slider = (function() {

    var $container = $( '#ps-container' ),
        $contentwrapper = $container.children( 'div.ps-contentwrapper' ),

        $items = $contentwrapper.children( 'div.ps-content' ),
        itemsCount = $items.length,
        $slidewrapper = $container.children( 'div.ps-slidewrapper' ),

        $slidescontainer = $slidewrapper.find( 'div.ps-slides' ),
        $slides = $slidescontainer.children( 'div' ),
        // стрелки навигации
        $navprev = $slidewrapper.find( 'nav > a.ps-prev' ),
        $navnext = $slidewrapper.find( 'nav > a.ps-next' ),
        // текущий индекс для элементов и слайдов
        current = 0,
        // проверяет выполняется ли сейчас переход
        isAnimating = false,
        // поддержка CSS переходов
        support = Modernizr.csstransitions,

        transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        },

        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

        init = function() {

            // первый элемент
            var $currentItem = $items.eq( current ),
                $currentSlide = $slides.eq( current ),
                initCSS = {
                    top : 0,
                    zIndex : 999
                };

            $currentItem.css( initCSS );
            $currentSlide.css( initCSS );

            // обновляем изображения на фоне навигации
            updateNavImages();

            initEvents();

        },
        updateNavImages = function() {

            // обновляем изображения на фоне навигации
            var configPrev = ( current > 0 ) ? $slides.eq( current - 1 ).css( 'background-image' ) : $slides.eq( itemsCount - 1 ).css( 'background-image' ),
                configNext = ( current < itemsCount - 1 ) ? $slides.eq( current + 1 ).css( 'background-image' ) : $slides.eq( 0 ).css( 'background-image' );

            $navprev.css( 'background-image', configPrev );
            $navnext.css( 'background-image', configNext );

        },
        initEvents = function() {

            $navprev.on( 'click', function( event ) {

                if( !isAnimating ) {

                    slide( 'prev' );

                }
                return false;

            } );

            $navnext.on( 'click', function( event ) {

                if( !isAnimating ) {

                    slide( 'next' );

                }
                return false;

            } );

            $items.on( transEndEventName, removeTransition );
            $slides.on( transEndEventName, removeTransition );

        },
        removeTransition = function() {

            isAnimating = false;
            $(this).removeClass('ps-move');

        },
        slide = function( dir ) {

            isAnimating = true;

            var $currentItem = $items.eq( current ),
                $currentSlide = $slides.eq( current );

            if( dir === 'next' ) {

                ( current < itemsCount - 1 ) ? ++current : current = 0;

            }
            else if( dir === 'prev' ) {

                ( current > 0 ) ? --current : current = itemsCount - 1;

            }
            var $newItem = $items.eq( current ),
                $newSlide = $slides.eq( current );

            $newItem.css( {
                top : ( dir === 'next' ) ? '-100%' : '100%',
                zIndex : 999
            } );

            $newSlide.css( {
                top : ( dir === 'next' ) ? '100%' : '-100%',
                zIndex : 999
            } );

            setTimeout( function() {

                $currentItem.addClass( 'ps-move' ).css( {
                    top : ( dir === 'next' ) ? '100%' : '-100%',
                    zIndex : 1
                } );

                $currentSlide.addClass( 'ps-move' ).css( {
                    top : ( dir === 'next' ) ? '-100%' : '100%',
                    zIndex : 1
                } );

                $newItem.addClass( 'ps-move' ).css( 'top', 0 );
                $newSlide.addClass( 'ps-move' ).css( 'top', 0 );

                // если CSS переходы не поддерживаются, тогда флаг изменяем на false
                if( !support ) {

                    isAnimating = false;

                }

            }, 0 );

            // еще раз обновляем изображения на фоне навигации
            updateNavImages();

        };

    return { init : init };

})();



// var Slider = (function () {
//     var items = $('.work-slider__item', '.work-slider__list_next'),
//         index = 1,
//         ndx,
//         duration = 500,
//         title = $('.work__title'),
//         skills = $('.work__technology'),
//         imgContainer = $('.work__pic');
//
//     function _init() {
//         var activeItem = items.eq(index),
//             imgSrc = activeItem.find('img').attr('src'),
//             activeTitle = activeItem.data('title'),
//             activeSlill = activeItem.data('technology');
//
//         imgContainer.attr('src', imgSrc);
//         title.text(activeTitle);
//         skills.text(activeSlill);
//
//         var nextItem = $('.work-slider__item', '.work-slider__list_next').eq(index + 1);
//         nextItem.addClass('work-slider__item_current');
//         var prevItem = $('.work-slider__item', '.work-slider__list_prev').eq(index - 1);
//         prevItem.addClass('work-slider__item_current');
//     }
//
//     function animateSlide(ndx, container, direction) {
//         var nextItems = $('.work-slider__item', container),
//             currentItem = nextItems.filter('.work-slider__item_current'),
//             reqItem = nextItems.eq(ndx);
//         direction = direction === 'up' ? -100 : 100;
//
//         currentItem.animate({
//             'top': direction + '%'
//         }, duration);
//
//         reqItem.animate({
//             'top': 0
//         }, duration, function () {
//             currentItem.removeClass('work-slider__item_current').css('top', -direction + '%');
//             reqItem.addClass('work-slider__item_current');
//         })
//     }
//
//     function _moveNext() {
//         var container = $('.work-slider__list_next'),
//             direction = 'up';
//
//         if (index == items.length - 1) {
//             ndx = 0;
//         } else if (index < 0) {
//             ndx = items.length - 1;
//         } else {
//             ndx = index + 1;
//         }
//
//         animateSlide(ndx, container, direction);
//     }
//
//     function _movePrev() {
//         var container = $('.work-slider__list_prev'),
//             direction = 'down';
//
//         if (index > items.length - 1) {
//             ndx = 0;
//         } else if (index <= 0) {
//             ndx = items.length - 1;
//         } else {
//             ndx = index - 1;
//         }
//
//         animateSlide(ndx, container, direction);
//     }
//
//     function _slideShow() {
//         var fadedOut = $.Deferred(),
//             loaded = $.Deferred(),
//             nextSrc = items.eq(index).find('img').attr('src'),
//             nextTitle = items.eq(index).data('title'),
//             nextSkills = items.eq(index).data('technology');
//
//         _moveNext();
//         _movePrev();
//
//         imgContainer.fadeOut(function () {
//             title.slideUp();
//             skills.fadeOut();
//             fadedOut.resolve();
//         });
//
//         fadedOut.done(function () {
//             title.text(nextTitle);
//             skills.text(nextSkills);
//             imgContainer.attr('src', nextSrc).on('load', function () {
//                 loaded.resolve();
//             })
//         });
//         loaded.done(function () {
//             title.slideDown();
//             skills.fadeIn();
//             imgContainer.fadeIn();
//         });
//     }
//     return {
//         init: _init,
//         move: function () {
//
//             $('.toggle__link').on('click', function (e) {
//                 e.preventDefault();
//
//                 if ($(this).hasClass('toggle__link_next')) {
//                     index++;
//                 } else if ($(this).hasClass('toggle__link_prev')) {
//                     index--;
//                 }
//
//                 if (index > items.length - 1) {
//                     index = 0;
//                 } else if (index < 0) {
//                     index = items.length - 1;
//                 }
//
//                 _slideShow();
//
//             })
//         }
//     }
// })
// ();

var welcomeParallax = (function () {
    var _show = function () {
        var parallaxContainer = document.querySelector('.parallax'),
            layers = parallaxContainer.children;
        window.addEventListener('mousemove',function (e) {
            var pageX = e.pageX,
                pageY = e.pageY,
                initialX = (window.innerWidth / 2) - pageX,
                initialY = (window.innerHeight / 2) - pageY;
            [].slice.call(layers).forEach(function (layer, i) {
                var divider = i / 100,
                    bottomPosition = (window.innerHeight / 2) * divider,
                    leftPosition = (window.innerWidth / 2) * divider,
                    rightPosition = (window.innerWidth / 2) * divider,
                    positionX = initialX * divider,
                    positionY = initialY * divider,
                    layerStyle = layer.style,
                    transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px,0)';
                layerStyle.transform = transformString;
                layerStyle.bottom = '-' + bottomPosition + 'px';
                layerStyle.left = '-' + leftPosition + 'px';
                layerStyle.right = '-' + rightPosition + 'px';
            });

        });
    };
    return{
        init: _show
    }
})();

//###############################################| Parallax Mousemove |###############################
var paral = document.querySelector('.parallax');
if (paral !== null) {
    welcomeParallax.init();
}
window.onload = function () {
    //###############################################| Preloader |########################################



// //###############################################| Flipper |#######################################
    var flip = document.querySelector('.flipper');
    if(flip!==null){
        flipper.front();
        flipper.back();
    }
//
//  //###############################################| Parallax Scroll |##################################
    var hero = document.querySelector('.hero__bg');
    if(hero!==null){
        window.onscroll = function () {
            var wScroll = window.pageYOffset;
            parallax.init(wScroll);
        }
    }
//
// //###############################################| Main Menu |#######################################
    mainMenu.init();
//
// //###############################################| Scroll Buttons |##################################
    var downButton = document.querySelector('.arrow');
    var upButton = document.querySelector('.arrow-up');
    if(downButton !== null){pageScroll.scrolDown();}
    if(upButton !==null){pageScroll.scrolUp();}

// //###############################################| Slider |##########################################
// var slider = document.querySelector('.work__slider');
// if (slider !== null) {
//         Slider.init();
//         Slider.move();
// }
    Slider.init();
// //###############################################| Blog Nav Scroll |#################################
    var blogNav = document.querySelector('.blog-nav__list');
    if(blogNav !== null){
        document.onscroll = function () {
            blogScroll.init();
        };
    }

// //###############################################| ADMIN TABS |#########################################
    admin.init();
//
// //###############################################| GOOGLE MAP |#########################################
//
//
// //###############################################| SKILLS ANIMATION |###################################
// // skills = document.querySelectorAll('.skill');
// // if (skills !== null) {
// //     window.onscroll = function () {
// //         skillAnimate.init();
// //     };
// //
// //###############################################| Blur |##########################################
// // var blr = document.querySelector('.contact-form__blur');
// // if(blr !== null){
// //     window.onresize = function () {
// //         blur.set();
// //     };
// // }
//

//###############################################| Forms validation |################################
    var form = document.querySelector('form');
    if (form !== null) {
        var inputs = form.elements;
        var closeError = document.querySelector('.robot-error__close');

        for (var i = 0; i < inputs.length; i++) {
            inputs[i].onfocus = function() {
                if (this.parentNode.classList.contains('input-group_error')) {
                    validation.clear(this);
                }
            }
        }
        if (closeError !== null) {
            closeError.onclick = function() {
                closeError.parentNode.parentNode.style.display = 'none';
            };
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var valid = validation.init(form);

            console.log(valid);
        })
    }
//###############################################| Preloader |################################
    var preloader = document.querySelector('#preloader');
    var prel = function () {
        var flipCard = document.querySelector('.flipper');
        var content = document.querySelector('.prelod-content');
        preloader.classList.add('disable');
        content.classList.add('active');
        if(flipCard){
            setTimeout(function () {
                flipCard.style.transform = 'rotate3d(1,0,0, 0deg)';
            },100);
        }
    };
    if(preloader){
        prel();
    }

};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluVGFicy5qcyIsImJsb2dOYXZTY3JvbGwuanMiLCJibHVyLmpzIiwiZmxpcHBlci5qcyIsImZvcm1zVmFsaWRhdGlvbi5qcyIsImdvb2dsZU1hcC5qcyIsIm1haW4tbWVudS5qcyIsIm1vZGVybml6ZXIuanMiLCJwYXJhbGxheFNjcm9sbC5qcyIsInByZWxvYWRlci5qcyIsInNjcm9sbEJ1dHRvbnMuanMiLCJza2lsbHNBbmltYXRpb24uanMiLCJzbGlkZXIuanMiLCJ3ZWxjb21lUGFyYWxsYXguanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhZG1pbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnRhYi1jb250cm9sc19fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYi1jb250cm9sc19faXRlbScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtID0gJCgnLnRhYnNfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUG9zaXRpb24gPSBpdGVtLmluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbS5lcShpdGVtUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJ2YXIgYmxvZ1Njcm9sbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICBmdW5jdGlvbiBfZml4TWVudSgpIHtcclxuICAgICAgICB2YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctbmF2X19saXN0JyksXHJcbiAgICAgICAgICAgIG5hdkNvb3JkcyA9IHNpZGViYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzgwKSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZDb29yZHMgPD0gLTUwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLnRvcCA9ICcycHgnO1xyXG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLndpZHRoID0gJzIwJSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgbmF2LnN0eWxlLndpZHRoID0gJ2F1dG8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogX2ZpeE1lbnVcclxuICAgIH07XHJcbn0pKCk7IiwiLy8gdmFyIGJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1mb3JtJyksXHJcbi8vICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWZvcm1fX2JsdXInKTtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgdmFyIGltZ1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzX19iZycpLm9mZnNldFdpZHRoLFxyXG4vLyAgICAgICAgICAgICAgICAgcG9zTGVmdCA9IC13cmFwcGVyLm9mZnNldExlZnQsXHJcbi8vICAgICAgICAgICAgICAgICBwb3NUb3AgPSAgLXdyYXBwZXIub2Zmc2V0VG9wLFxyXG4vLyAgICAgICAgICAgICAgICAgYmx1ckNzcyA9IGZvcm0uc3R5bGU7XHJcbi8vICAgICAgICAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArICdweCcgKyAnICcgKyAnYXV0byc7XHJcbi8vICAgICAgICAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zTGVmdCArICdweCcgKyAnICcgKyBwb3NUb3AgKyAncHgnO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSkoKTsiLCJ2YXIgZmxpcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZnJvbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyksXHJcbiAgICAgICAgZmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGVyJyksXHJcbiAgICAgICAgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmV0dXJuJyk7XHJcbiAgICBmdW5jdGlvbiBfZnJvbnRGbGlwKCl7XHJcbiAgICAgICAgZnJvbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZnJvbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZmxpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgxODBkZWcpJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2JhY2tGbGlwKCkge1xyXG4gICAgICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZmxpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgwZGVnKSc7XHJcbiAgICAgICAgICAgIGZyb250QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBmcm9udDogX2Zyb250RmxpcCxcclxuICAgICAgICBiYWNrOiBfYmFja0ZsaXBcclxuICAgIH1cclxufSkoKTsiLCJ2YXIgdmFsaWRhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1lcnJvci1tc2cnKSxcclxuICAgICAgICBjYXB0Y2hhRXJyb3IgPSAkKCcucm9ib3QtZXJyb3InKSxcclxuICAgICAgICBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgdmFyIGVsZW1zID0gZm9ybS5lbGVtZW50cztcclxuICAgICAgICByZXR1cm4gX3ZhbGlkYXRlKGVsZW1zKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBfdmFsaWRhdGUoaW5wdXRzKSB7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dHNbaV0udGFnTmFtZSA9PT0gJ0JVVFRPTicpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9IGlucHV0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zaG93RXJyb3IoZWxlbSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWxlbS50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hlY2tlZCAmJiBlbGVtLnZhbHVlID09PSAneWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZWxlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGNoYUVycm9yLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfc2hvd0Vycm9yICAoZWxlbSkge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGVtLnBhcmVudE5vZGUub2Zmc2V0VG9wICsgZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfZXJyb3InKTtcclxuICAgICAgICBlcnJvckZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGVycm9yRmllbGQuaW5uZXJUZXh0ID0gJ9CS0Ysg0L3QtSDQstCy0LXQu9C4ICcgKyB0ZXh0O1xyXG4gICAgICAgIGVycm9yRmllbGQuc3R5bGUudG9wID0gcG9zaXRpb24gKyAncHgnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfY2xlYXJFcnJvcihlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWdyb3VwX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IF9pbml0LFxyXG4gICAgICAgIGNsZWFyOiBfY2xlYXJFcnJvclxyXG4gICAgfVxyXG59KSgpOyIsInZhciBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7XHJcbmlmKG1hcCE9PW51bGwpe2Z1bmN0aW9uIGluaXRNYXAgKCkge1xyXG4gICAgdmFyIHBvaW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjEwMjE3NywgMjMuNzgyNTk2KSxcclxuICAgICAgICBjZW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjA5NzM4MSwgIDIzLjc0NTMzNyk7XHJcblxyXG4gICAgdmFyIHN0eWxlcyA9IFt7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjNDQ0NDQ0XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2YyZjJmMlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1wibGlnaHRuZXNzXCI6NDV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMuaWNvblwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwidHJhbnNpdFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM5NmQ3YzhcIn0se1widmlzaWJpbGl0eVwiOlwib25cIn1dfV07XHJcblxyXG4gICAgdmFyIHN0eWxlZE1hcCA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKHN0eWxlcyxcclxuICAgICAgICB7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcclxuXHJcbiAgICB2YXIgbWFwU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY2VudGVyOiBjZW50ZXIsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgIHpvb206IDE0LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xyXG4gICAgICAgICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsICdtYXBfc3R5bGUnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCBtYXBTZXR0aW5ncyk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIGljb246ICdhc3NldHMvaW1nL21hcF9tYXJrZXIucG5nJyxcclxuICAgICAgICBwb3NpdGlvbjogcG9pbnRlcixcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICB0aXRsZTogXCJJJ20gaGVyZSFcIixcclxuICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0VcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XHJcbiAgICBtYXAuc2V0TWFwVHlwZUlkKCdtYXBfc3R5bGUnKTtcclxufVxyXG59IiwidmFyIG1haW5NZW51ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW51ID0gJCgnLm1haW4tbmF2X193cmFwcGVyJyksXHJcbiAgICAgICAgICAgICAgICBoYW1idXJnZXIgPSAkKCcuaGFtYnVyZ2VyJyk7XHJcbiAgICAgICAgICAgIGhhbWJ1cmdlci5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBtZW51LnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIi8qIE1vZGVybml6ciAyLjYuMiAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxyXG4gKiBCdWlsZDogaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQvIy1jc3N0cmFuc2l0aW9ucy10b3VjaC1zaGl2LWNzc2NsYXNzZXMtcHJlZml4ZWQtdGVzdHN0eWxlcy10ZXN0cHJvcC10ZXN0YWxscHJvcHMtcHJlZml4ZXMtZG9tcHJlZml4ZXMtbG9hZFxyXG4gKi9cclxuO3dpbmRvdy5Nb2Rlcm5penI9ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIHooYSl7ai5jc3NUZXh0PWF9ZnVuY3Rpb24gQShhLGIpe3JldHVybiB6KG0uam9pbihhK1wiO1wiKSsoYnx8XCJcIikpfWZ1bmN0aW9uIEIoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PT1ifWZ1bmN0aW9uIEMoYSxiKXtyZXR1cm4hIX4oXCJcIithKS5pbmRleE9mKGIpfWZ1bmN0aW9uIEQoYSxiKXtmb3IodmFyIGQgaW4gYSl7dmFyIGU9YVtkXTtpZighQyhlLFwiLVwiKSYmaltlXSE9PWMpcmV0dXJuIGI9PVwicGZ4XCI/ZTohMH1yZXR1cm4hMX1mdW5jdGlvbiBFKGEsYixkKXtmb3IodmFyIGUgaW4gYSl7dmFyIGY9YlthW2VdXTtpZihmIT09YylyZXR1cm4gZD09PSExP2FbZV06QihmLFwiZnVuY3Rpb25cIik/Zi5iaW5kKGR8fGIpOmZ9cmV0dXJuITF9ZnVuY3Rpb24gRihhLGIsYyl7dmFyIGQ9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGU9KGErXCIgXCIrby5qb2luKGQrXCIgXCIpK2QpLnNwbGl0KFwiIFwiKTtyZXR1cm4gQihiLFwic3RyaW5nXCIpfHxCKGIsXCJ1bmRlZmluZWRcIik/RChlLGIpOihlPShhK1wiIFwiK3Auam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIiksRShlLGIsYykpfXZhciBkPVwiMi42LjJcIixlPXt9LGY9ITAsZz1iLmRvY3VtZW50RWxlbWVudCxoPVwibW9kZXJuaXpyXCIsaT1iLmNyZWF0ZUVsZW1lbnQoaCksaj1pLnN0eWxlLGssbD17fS50b1N0cmluZyxtPVwiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKSxuPVwiV2Via2l0IE1veiBPIG1zXCIsbz1uLnNwbGl0KFwiIFwiKSxwPW4udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikscT17fSxyPXt9LHM9e30sdD1bXSx1PXQuc2xpY2Usdix3PWZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmLGksaixrLGw9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG09Yi5ib2R5LG49bXx8Yi5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtpZihwYXJzZUludChkLDEwKSl3aGlsZShkLS0paj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksai5pZD1lP2VbZF06aCsoZCsxKSxsLmFwcGVuZENoaWxkKGopO3JldHVybiBmPVtcIiYjMTczO1wiLCc8c3R5bGUgaWQ9XCJzJyxoLCdcIj4nLGEsXCI8L3N0eWxlPlwiXS5qb2luKFwiXCIpLGwuaWQ9aCwobT9sOm4pLmlubmVySFRNTCs9ZixuLmFwcGVuZENoaWxkKGwpLG18fChuLnN0eWxlLmJhY2tncm91bmQ9XCJcIixuLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsaz1nLnN0eWxlLm92ZXJmbG93LGcuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixnLmFwcGVuZENoaWxkKG4pKSxpPWMobCxhKSxtP2wucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKToobi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLGcuc3R5bGUub3ZlcmZsb3c9ayksISFpfSx4PXt9Lmhhc093blByb3BlcnR5LHk7IUIoeCxcInVuZGVmaW5lZFwiKSYmIUIoeC5jYWxsLFwidW5kZWZpbmVkXCIpP3k9ZnVuY3Rpb24oYSxiKXtyZXR1cm4geC5jYWxsKGEsYil9Onk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYiBpbiBhJiZCKGEuY29uc3RydWN0b3IucHJvdG90eXBlW2JdLFwidW5kZWZpbmVkXCIpfSxGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7aWYodHlwZW9mIGMhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciBkPXUuY2FsbChhcmd1bWVudHMsMSksZT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBlKXt2YXIgYT1mdW5jdGlvbigpe307YS5wcm90b3R5cGU9Yy5wcm90b3R5cGU7dmFyIGY9bmV3IGEsZz1jLmFwcGx5KGYsZC5jb25jYXQodS5jYWxsKGFyZ3VtZW50cykpKTtyZXR1cm4gT2JqZWN0KGcpPT09Zz9nOmZ9cmV0dXJuIGMuYXBwbHkoYixkLmNvbmNhdCh1LmNhbGwoYXJndW1lbnRzKSkpfTtyZXR1cm4gZX0pLHEudG91Y2g9ZnVuY3Rpb24oKXt2YXIgYztyZXR1cm5cIm9udG91Y2hzdGFydFwiaW4gYXx8YS5Eb2N1bWVudFRvdWNoJiZiIGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaD9jPSEwOncoW1wiQG1lZGlhIChcIixtLmpvaW4oXCJ0b3VjaC1lbmFibGVkKSwoXCIpLGgsXCIpXCIsXCJ7I21vZGVybml6cnt0b3A6OXB4O3Bvc2l0aW9uOmFic29sdXRlfX1cIl0uam9pbihcIlwiKSxmdW5jdGlvbihhKXtjPWEub2Zmc2V0VG9wPT09OX0pLGN9LHEuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gRihcInRyYW5zaXRpb25cIil9O2Zvcih2YXIgRyBpbiBxKXkocSxHKSYmKHY9Ry50b0xvd2VyQ2FzZSgpLGVbdl09cVtHXSgpLHQucHVzaCgoZVt2XT9cIlwiOlwibm8tXCIpK3YpKTtyZXR1cm4gZS5hZGRUZXN0PWZ1bmN0aW9uKGEsYil7aWYodHlwZW9mIGE9PVwib2JqZWN0XCIpZm9yKHZhciBkIGluIGEpeShhLGQpJiZlLmFkZFRlc3QoZCxhW2RdKTtlbHNle2E9YS50b0xvd2VyQ2FzZSgpO2lmKGVbYV0hPT1jKXJldHVybiBlO2I9dHlwZW9mIGI9PVwiZnVuY3Rpb25cIj9iKCk6Yix0eXBlb2YgZiE9XCJ1bmRlZmluZWRcIiYmZiYmKGcuY2xhc3NOYW1lKz1cIiBcIisoYj9cIlwiOlwibm8tXCIpK2EpLGVbYV09Yn1yZXR1cm4gZX0seihcIlwiKSxpPWs9bnVsbCxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGsoYSxiKXt2YXIgYz1hLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLGQ9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF18fGEuZG9jdW1lbnRFbGVtZW50O3JldHVybiBjLmlubmVySFRNTD1cIng8c3R5bGU+XCIrYitcIjwvc3R5bGU+XCIsZC5pbnNlcnRCZWZvcmUoYy5sYXN0Q2hpbGQsZC5maXJzdENoaWxkKX1mdW5jdGlvbiBsKCl7dmFyIGE9ci5lbGVtZW50cztyZXR1cm4gdHlwZW9mIGE9PVwic3RyaW5nXCI/YS5zcGxpdChcIiBcIik6YX1mdW5jdGlvbiBtKGEpe3ZhciBiPWlbYVtnXV07cmV0dXJuIGJ8fChiPXt9LGgrKyxhW2ddPWgsaVtoXT1iKSxifWZ1bmN0aW9uIG4oYSxjLGYpe2N8fChjPWIpO2lmKGopcmV0dXJuIGMuY3JlYXRlRWxlbWVudChhKTtmfHwoZj1tKGMpKTt2YXIgZztyZXR1cm4gZi5jYWNoZVthXT9nPWYuY2FjaGVbYV0uY2xvbmVOb2RlKCk6ZS50ZXN0KGEpP2c9KGYuY2FjaGVbYV09Zi5jcmVhdGVFbGVtKGEpKS5jbG9uZU5vZGUoKTpnPWYuY3JlYXRlRWxlbShhKSxnLmNhbkhhdmVDaGlsZHJlbiYmIWQudGVzdChhKT9mLmZyYWcuYXBwZW5kQ2hpbGQoZyk6Z31mdW5jdGlvbiBvKGEsYyl7YXx8KGE9Yik7aWYoailyZXR1cm4gYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yz1jfHxtKGEpO3ZhciBkPWMuZnJhZy5jbG9uZU5vZGUoKSxlPTAsZj1sKCksZz1mLmxlbmd0aDtmb3IoO2U8ZztlKyspZC5jcmVhdGVFbGVtZW50KGZbZV0pO3JldHVybiBkfWZ1bmN0aW9uIHAoYSxiKXtiLmNhY2hlfHwoYi5jYWNoZT17fSxiLmNyZWF0ZUVsZW09YS5jcmVhdGVFbGVtZW50LGIuY3JlYXRlRnJhZz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsYi5mcmFnPWIuY3JlYXRlRnJhZygpKSxhLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYyl7cmV0dXJuIHIuc2hpdk1ldGhvZHM/bihjLGEsYik6Yi5jcmVhdGVFbGVtKGMpfSxhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXCJoLGZcIixcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFwiK2woKS5qb2luKCkucmVwbGFjZSgvXFx3Ky9nLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNyZWF0ZUVsZW0oYSksYi5mcmFnLmNyZWF0ZUVsZW1lbnQoYSksJ2MoXCInK2ErJ1wiKSd9KStcIik7cmV0dXJuIG59XCIpKHIsYi5mcmFnKX1mdW5jdGlvbiBxKGEpe2F8fChhPWIpO3ZhciBjPW0oYSk7cmV0dXJuIHIuc2hpdkNTUyYmIWYmJiFjLmhhc0NTUyYmKGMuaGFzQ1NTPSEhayhhLFwiYXJ0aWNsZSxhc2lkZSxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfW1hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9XCIpKSxqfHxwKGEsYyksYX12YXIgYz1hLmh0bWw1fHx7fSxkPS9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pLGU9L14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pLGYsZz1cIl9odG1sNXNoaXZcIixoPTAsaT17fSxqOyhmdW5jdGlvbigpe3RyeXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2EuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixmPVwiaGlkZGVuXCJpbiBhLGo9YS5jaGlsZE5vZGVzLmxlbmd0aD09MXx8ZnVuY3Rpb24oKXtiLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBhPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0eXBlb2YgYS5jbG9uZU5vZGU9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZUVsZW1lbnQ9PVwidW5kZWZpbmVkXCJ9KCl9Y2F0Y2goYyl7Zj0hMCxqPSEwfX0pKCk7dmFyIHI9e2VsZW1lbnRzOmMuZWxlbWVudHN8fFwiYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGltZSB2aWRlb1wiLHNoaXZDU1M6Yy5zaGl2Q1NTIT09ITEsc3VwcG9ydHNVbmtub3duRWxlbWVudHM6aixzaGl2TWV0aG9kczpjLnNoaXZNZXRob2RzIT09ITEsdHlwZTpcImRlZmF1bHRcIixzaGl2RG9jdW1lbnQ6cSxjcmVhdGVFbGVtZW50Om4sY3JlYXRlRG9jdW1lbnRGcmFnbWVudDpvfTthLmh0bWw1PXIscShiKX0odGhpcyxiKSxlLl92ZXJzaW9uPWQsZS5fcHJlZml4ZXM9bSxlLl9kb21QcmVmaXhlcz1wLGUuX2Nzc29tUHJlZml4ZXM9byxlLnRlc3RQcm9wPWZ1bmN0aW9uKGEpe3JldHVybiBEKFthXSl9LGUudGVzdEFsbFByb3BzPUYsZS50ZXN0U3R5bGVzPXcsZS5wcmVmaXhlZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI/RihhLGIsYyk6RihhLFwicGZ4XCIpfSxnLmNsYXNzTmFtZT1nLmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLyxcIiQxJDJcIikrKGY/XCIganMgXCIrdC5qb2luKFwiIFwiKTpcIlwiKSxlfSh0aGlzLHRoaXMuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09by5jYWxsKGEpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEpe3JldHVybiFhfHxcImxvYWRlZFwiPT1hfHxcImNvbXBsZXRlXCI9PWF8fFwidW5pbml0aWFsaXplZFwiPT1hfWZ1bmN0aW9uIGgoKXt2YXIgYT1wLnNoaWZ0KCk7cT0xLGE/YS50P20oZnVuY3Rpb24oKXsoXCJjXCI9PWEudD9CLmluamVjdENzczpCLmluamVjdEpzKShhLnMsMCxhLmEsYS54LGEuZSwxKX0sMCk6KGEoKSxoKCkpOnE9MH1mdW5jdGlvbiBpKGEsYyxkLGUsZixpLGope2Z1bmN0aW9uIGsoYil7aWYoIW8mJmcobC5yZWFkeVN0YXRlKSYmKHUucj1vPTEsIXEmJmgoKSxsLm9ubG9hZD1sLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGIpKXtcImltZ1wiIT1hJiZtKGZ1bmN0aW9uKCl7dC5yZW1vdmVDaGlsZChsKX0sNTApO2Zvcih2YXIgZCBpbiB5W2NdKXlbY10uaGFzT3duUHJvcGVydHkoZCkmJnlbY11bZF0ub25sb2FkKCl9fXZhciBqPWp8fEIuZXJyb3JUaW1lb3V0LGw9Yi5jcmVhdGVFbGVtZW50KGEpLG89MCxyPTAsdT17dDpkLHM6YyxlOmYsYTppLHg6an07MT09PXlbY10mJihyPTEseVtjXT1bXSksXCJvYmplY3RcIj09YT9sLmRhdGE9YzoobC5zcmM9YyxsLnR5cGU9YSksbC53aWR0aD1sLmhlaWdodD1cIjBcIixsLm9uZXJyb3I9bC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtrLmNhbGwodGhpcyxyKX0scC5zcGxpY2UoZSwwLHUpLFwiaW1nXCIhPWEmJihyfHwyPT09eVtjXT8odC5pbnNlcnRCZWZvcmUobCxzP251bGw6biksbShrLGopKTp5W2NdLnB1c2gobCkpfWZ1bmN0aW9uIGooYSxiLGMsZCxmKXtyZXR1cm4gcT0wLGI9Ynx8XCJqXCIsZShhKT9pKFwiY1wiPT1iP3Y6dSxhLGIsdGhpcy5pKyssYyxkLGYpOihwLnNwbGljZSh0aGlzLmkrKywwLGEpLDE9PXAubGVuZ3RoJiZoKCkpLHRoaXN9ZnVuY3Rpb24gaygpe3ZhciBhPUI7cmV0dXJuIGEubG9hZGVyPXtsb2FkOmosaTowfSxhfXZhciBsPWIuZG9jdW1lbnRFbGVtZW50LG09YS5zZXRUaW1lb3V0LG49Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxvPXt9LnRvU3RyaW5nLHA9W10scT0wLHI9XCJNb3pBcHBlYXJhbmNlXCJpbiBsLnN0eWxlLHM9ciYmISFiLmNyZWF0ZVJhbmdlKCkuY29tcGFyZU5vZGUsdD1zP2w6bi5wYXJlbnROb2RlLGw9YS5vcGVyYSYmXCJbb2JqZWN0IE9wZXJhXVwiPT1vLmNhbGwoYS5vcGVyYSksbD0hIWIuYXR0YWNoRXZlbnQmJiFsLHU9cj9cIm9iamVjdFwiOmw/XCJzY3JpcHRcIjpcImltZ1wiLHY9bD9cInNjcmlwdFwiOnUsdz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PW8uY2FsbChhKX0seD1bXSx5PXt9LHo9e3RpbWVvdXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5sZW5ndGgmJihhLnRpbWVvdXQ9YlswXSksYX19LEEsQjtCPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGE9YS5zcGxpdChcIiFcIiksYj14Lmxlbmd0aCxjPWEucG9wKCksZD1hLmxlbmd0aCxjPXt1cmw6YyxvcmlnVXJsOmMscHJlZml4ZXM6YX0sZSxmLGc7Zm9yKGY9MDtmPGQ7ZisrKWc9YVtmXS5zcGxpdChcIj1cIiksKGU9eltnLnNoaWZ0KCldKSYmKGM9ZShjLGcpKTtmb3IoZj0wO2Y8YjtmKyspYz14W2ZdKGMpO3JldHVybiBjfWZ1bmN0aW9uIGcoYSxlLGYsZyxoKXt2YXIgaT1iKGEpLGo9aS5hdXRvQ2FsbGJhY2s7aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpLGkuYnlwYXNzfHwoZSYmKGU9ZChlKT9lOmVbYV18fGVbZ118fGVbYS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSksaS5pbnN0ZWFkP2kuaW5zdGVhZChhLGUsZixnLGgpOih5W2kudXJsXT9pLm5vZXhlYz0hMDp5W2kudXJsXT0xLGYubG9hZChpLnVybCxpLmZvcmNlQ1NTfHwhaS5mb3JjZUpTJiZcImNzc1wiPT1pLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCk/XCJjXCI6YyxpLm5vZXhlYyxpLmF0dHJzLGkudGltZW91dCksKGQoZSl8fGQoaikpJiZmLmxvYWQoZnVuY3Rpb24oKXtrKCksZSYmZShpLm9yaWdVcmwsaCxnKSxqJiZqKGkub3JpZ1VybCxoLGcpLHlbaS51cmxdPTJ9KSkpfWZ1bmN0aW9uIGgoYSxiKXtmdW5jdGlvbiBjKGEsYyl7aWYoYSl7aWYoZShhKSljfHwoaj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfSksZyhhLGosYiwwLGgpO2Vsc2UgaWYoT2JqZWN0KGEpPT09YSlmb3IobiBpbiBtPWZ1bmN0aW9uKCl7dmFyIGI9MCxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmYisrO3JldHVybiBifSgpLGEpYS5oYXNPd25Qcm9wZXJ0eShuKSYmKCFjJiYhLS1tJiYoZChqKT9qPWZ1bmN0aW9uKCl7dmFyIGE9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2suYXBwbHkodGhpcyxhKSxsKCl9Ompbbl09ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2EmJmEuYXBwbHkodGhpcyxiKSxsKCl9fShrW25dKSksZyhhW25dLGosYixuLGgpKX1lbHNlIWMmJmwoKX12YXIgaD0hIWEudGVzdCxpPWEubG9hZHx8YS5ib3RoLGo9YS5jYWxsYmFja3x8ZixrPWosbD1hLmNvbXBsZXRlfHxmLG0sbjtjKGg/YS55ZXA6YS5ub3BlLCEhaSksaSYmYyhpKX12YXIgaSxqLGw9dGhpcy55ZXBub3BlLmxvYWRlcjtpZihlKGEpKWcoYSwwLGwsMCk7ZWxzZSBpZih3KGEpKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspaj1hW2ldLGUoaik/ZyhqLDAsbCwwKTp3KGopP0Ioaik6T2JqZWN0KGopPT09aiYmaChqLGwpO2Vsc2UgT2JqZWN0KGEpPT09YSYmaChhLGwpfSxCLmFkZFByZWZpeD1mdW5jdGlvbihhLGIpe3pbYV09Yn0sQi5hZGRGaWx0ZXI9ZnVuY3Rpb24oYSl7eC5wdXNoKGEpfSxCLmVycm9yVGltZW91dD0xZTQsbnVsbD09Yi5yZWFkeVN0YXRlJiZiLmFkZEV2ZW50TGlzdGVuZXImJihiLnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsYi5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEE9ZnVuY3Rpb24oKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQSwwKSxiLnJlYWR5U3RhdGU9XCJjb21wbGV0ZVwifSwwKSksYS55ZXBub3BlPWsoKSxhLnllcG5vcGUuZXhlY3V0ZVN0YWNrPWgsYS55ZXBub3BlLmluamVjdEpzPWZ1bmN0aW9uKGEsYyxkLGUsaSxqKXt2YXIgaz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbCxvLGU9ZXx8Qi5lcnJvclRpbWVvdXQ7ay5zcmM9YTtmb3IobyBpbiBkKWsuc2V0QXR0cmlidXRlKG8sZFtvXSk7Yz1qP2g6Y3x8ZixrLm9ucmVhZHlzdGF0ZWNoYW5nZT1rLm9ubG9hZD1mdW5jdGlvbigpeyFsJiZnKGsucmVhZHlTdGF0ZSkmJihsPTEsYygpLGsub25sb2FkPWsub25yZWFkeXN0YXRlY2hhbmdlPW51bGwpfSxtKGZ1bmN0aW9uKCl7bHx8KGw9MSxjKDEpKX0sZSksaT9rLm9ubG9hZCgpOm4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoayxuKX0sYS55ZXBub3BlLmluamVjdENzcz1mdW5jdGlvbihhLGMsZCxlLGcsaSl7dmFyIGU9Yi5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxqLGM9aT9oOmN8fGY7ZS5ocmVmPWEsZS5yZWw9XCJzdHlsZXNoZWV0XCIsZS50eXBlPVwidGV4dC9jc3NcIjtmb3IoaiBpbiBkKWUuc2V0QXR0cmlidXRlKGosZFtqXSk7Z3x8KG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSxuKSxtKGMsMCkpfX0odGhpcyxkb2N1bWVudCksTW9kZXJuaXpyLmxvYWQ9ZnVuY3Rpb24oKXt5ZXBub3BlLmFwcGx5KHdpbmRvdyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSl9OyIsInZhciBwYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYmcnKTtcclxuICAgIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcclxuICAgIHZhciB1c2VyQmdQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10aXRsZS1waWMnKTtcclxuICAgIHJldHVybntcclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssd2luZG93U2Nyb2xsLHN0cmFmZUFtb3VudCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgKyBzdHJhZmUgKyAnLDApJztcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLHdTY3JvbGwsMzApO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodXNlckJnUGljLHdTY3JvbGwsNyk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh1c2VyLHdTY3JvbGwsMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIiIsInZhciBwYWdlU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBzY3JvbERvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRvd25CdXR0b24gPSAkKCcuYXJyb3cnKTtcclxuICAgICAgICAgICAgZG93bkJ1dHRvbi5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IDgyN30sIDE1MDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xVcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXBCdXR0b24gPSAkKCcuYXJyb3ctdXAnKTtcclxuICAgICAgICAgICAgdXBCdXR0b24ub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMTIwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIi8vIHZhciBza2lsbEFuaW1hdGUgPSAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdmFyIHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbCcpLFxyXG4vLyAgICAgICAgIGNpcmNsZXNBYm92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbHNfX2NpcmNsZS1hYm92ZScpLFxyXG4vLyAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuLy8gICAgIHZhciBjaXJjbGVMZW5ndGggPSBmdW5jdGlvbiAoY2lyY2xlKSB7XHJcbi8vICAgICAgICAgdmFyIGNpcmNsZVJhZGl1cyA9IGNpcmNsZS5nZXRBdHRyaWJ1dGUoJ3InKSxcclxuLy8gICAgICAgICAgICAgY2lyY2xlTGVuZ3RoID0gMiAqIE1hdGguUEkgKiBjaXJjbGVSYWRpdXM7XHJcbi8vICAgICAgICAgcmV0dXJuIGNpcmNsZUxlbmd0aDtcclxuLy8gICAgIH07XHJcbi8vICAgICBbXS5zbGljZS5jYWxsKGNpcmNsZXNBYm92ZSkuZm9yRWFjaChmdW5jdGlvbiAoY2lyY2xlKSB7XHJcbi8vXHJcbi8vICAgICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBjaXJjbGVMZW5ndGgoY2lyY2xlKTtcclxuLy8gICAgICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gY2lyY2xlTGVuZ3RoKGNpcmNsZSk7XHJcbi8vXHJcbi8vICAgICB9KTtcclxuLy8gICAgIHZhciBjaXJjbGVBbmltYXRpb24gPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuLy9cclxuLy8gICAgICAgICB2YXIgY2lyY2xlRmlsbCA9IHNraWxsLnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHNfX2NpcmNsZS1hYm92ZScpLFxyXG4vLyAgICAgICAgICAgICBza2lsbFBlcmNlbnQgPSBza2lsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVyY2VudCcpLFxyXG4vLyAgICAgICAgICAgICBsZW5ndGggPSBjaXJjbGVMZW5ndGgoY2lyY2xlRmlsbCksXHJcbi8vICAgICAgICAgICAgIHBlcmNlbnQgPSBsZW5ndGggKiAoMTAwIC0gc2tpbGxQZXJjZW50KSAvIDEwMDtcclxuLy9cclxuLy8gICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgY2lyY2xlRmlsbC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcGVyY2VudDtcclxuLy8gICAgICAgICAgICAgY2lyY2xlRmlsbC5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAxcyc7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGlmIChza2lsbFBlcmNlbnQgPCA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgc2tpbGwuc3R5bGUub3BhY2l0eSA9IDAuNDtcclxuLy8gICAgICAgICAgICAgICAgIHNraWxsLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDFzJztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0sIDUwMCk7XHJcbi8vXHJcbi8vICAgICB9O1xyXG4vL1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwoc2tpbGxzKS5mb3JFYWNoKGZ1bmN0aW9uIChza2lsbCkge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIGNpcmNsZVJlY3QgPSBza2lsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICBjaXJjbGVQb3MgPSBjaXJjbGVSZWN0LmJvdHRvbSxcclxuLy8gICAgICAgICAgICAgICAgICAgICBzdGFydEFuaW1hdGlvbiA9IGNpcmNsZVBvcyAtIHdpbmRvd0hlaWdodDtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIGlmIChzdGFydEFuaW1hdGlvbiA8PSAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2lyY2xlQW5pbWF0aW9uKHNraWxsKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KSgpOyIsInZhciBTbGlkZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyICRjb250YWluZXIgPSAkKCAnI3BzLWNvbnRhaW5lcicgKSxcclxuICAgICAgICAkY29udGVudHdyYXBwZXIgPSAkY29udGFpbmVyLmNoaWxkcmVuKCAnZGl2LnBzLWNvbnRlbnR3cmFwcGVyJyApLFxyXG5cclxuICAgICAgICAkaXRlbXMgPSAkY29udGVudHdyYXBwZXIuY2hpbGRyZW4oICdkaXYucHMtY29udGVudCcgKSxcclxuICAgICAgICBpdGVtc0NvdW50ID0gJGl0ZW1zLmxlbmd0aCxcclxuICAgICAgICAkc2xpZGV3cmFwcGVyID0gJGNvbnRhaW5lci5jaGlsZHJlbiggJ2Rpdi5wcy1zbGlkZXdyYXBwZXInICksXHJcblxyXG4gICAgICAgICRzbGlkZXNjb250YWluZXIgPSAkc2xpZGV3cmFwcGVyLmZpbmQoICdkaXYucHMtc2xpZGVzJyApLFxyXG4gICAgICAgICRzbGlkZXMgPSAkc2xpZGVzY29udGFpbmVyLmNoaWxkcmVuKCAnZGl2JyApLFxyXG4gICAgICAgIC8vINGB0YLRgNC10LvQutC4INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgICAgICRuYXZwcmV2ID0gJHNsaWRld3JhcHBlci5maW5kKCAnbmF2ID4gYS5wcy1wcmV2JyApLFxyXG4gICAgICAgICRuYXZuZXh0ID0gJHNsaWRld3JhcHBlci5maW5kKCAnbmF2ID4gYS5wcy1uZXh0JyApLFxyXG4gICAgICAgIC8vINGC0LXQutGD0YnQuNC5INC40L3QtNC10LrRgSDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyINC4INGB0LvQsNC50LTQvtCyXHJcbiAgICAgICAgY3VycmVudCA9IDAsXHJcbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdGCINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0LvQuCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXRhdC+0LRcclxuICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlLFxyXG4gICAgICAgIC8vINC/0L7QtNC00LXRgNC20LrQsCBDU1Mg0L/QtdGA0LXRhdC+0LTQvtCyXHJcbiAgICAgICAgc3VwcG9ydCA9IE1vZGVybml6ci5jc3N0cmFuc2l0aW9ucyxcclxuXHJcbiAgICAgICAgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xyXG4gICAgICAgICAgICAnV2Via2l0VHJhbnNpdGlvbicgOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdNb3pUcmFuc2l0aW9uJyA6ICd0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICAgICAgJ09UcmFuc2l0aW9uJyA6ICdvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdtc1RyYW5zaXRpb24nIDogJ01TVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyA6ICd0cmFuc2l0aW9uZW5kJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRyYW5zRW5kRXZlbnROYW1lID0gdHJhbnNFbmRFdmVudE5hbWVzWyBNb2Rlcm5penIucHJlZml4ZWQoICd0cmFuc2l0aW9uJyApIF0sXHJcblxyXG4gICAgICAgIGluaXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8vINC/0LXRgNCy0YvQuSDRjdC70LXQvNC10L3RglxyXG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRJdGVtID0gJGl0ZW1zLmVxKCBjdXJyZW50ICksXHJcbiAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlID0gJHNsaWRlcy5lcSggY3VycmVudCApLFxyXG4gICAgICAgICAgICAgICAgaW5pdENTUyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleCA6IDk5OVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRjdXJyZW50SXRlbS5jc3MoIGluaXRDU1MgKTtcclxuICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5jc3MoIGluaXRDU1MgKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQuNC30L7QsdGA0LDQttC10L3QuNGPINC90LAg0YTQvtC90LUg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICAgICAgICAgIHVwZGF0ZU5hdkltYWdlcygpO1xyXG5cclxuICAgICAgICAgICAgaW5pdEV2ZW50cygpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZU5hdkltYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDRhNC+0L3QtSDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgICAgICAgICAgdmFyIGNvbmZpZ1ByZXYgPSAoIGN1cnJlbnQgPiAwICkgPyAkc2xpZGVzLmVxKCBjdXJyZW50IC0gMSApLmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnICkgOiAkc2xpZGVzLmVxKCBpdGVtc0NvdW50IC0gMSApLmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnICksXHJcbiAgICAgICAgICAgICAgICBjb25maWdOZXh0ID0gKCBjdXJyZW50IDwgaXRlbXNDb3VudCAtIDEgKSA/ICRzbGlkZXMuZXEoIGN1cnJlbnQgKyAxICkuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScgKSA6ICRzbGlkZXMuZXEoIDAgKS5jc3MoICdiYWNrZ3JvdW5kLWltYWdlJyApO1xyXG5cclxuICAgICAgICAgICAgJG5hdnByZXYuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScsIGNvbmZpZ1ByZXYgKTtcclxuICAgICAgICAgICAgJG5hdm5leHQuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScsIGNvbmZpZ05leHQgKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbml0RXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAkbmF2cHJldi5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCAhaXNBbmltYXRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlKCAncHJldicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAkbmF2bmV4dC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCAhaXNBbmltYXRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlKCAnbmV4dCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAkaXRlbXMub24oIHRyYW5zRW5kRXZlbnROYW1lLCByZW1vdmVUcmFuc2l0aW9uICk7XHJcbiAgICAgICAgICAgICRzbGlkZXMub24oIHRyYW5zRW5kRXZlbnROYW1lLCByZW1vdmVUcmFuc2l0aW9uICk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncHMtbW92ZScpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlID0gZnVuY3Rpb24oIGRpciApIHtcclxuXHJcbiAgICAgICAgICAgIGlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkY3VycmVudEl0ZW0gPSAkaXRlbXMuZXEoIGN1cnJlbnQgKSxcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUgPSAkc2xpZGVzLmVxKCBjdXJyZW50ICk7XHJcblxyXG4gICAgICAgICAgICBpZiggZGlyID09PSAnbmV4dCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgKCBjdXJyZW50IDwgaXRlbXNDb3VudCAtIDEgKSA/ICsrY3VycmVudCA6IGN1cnJlbnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKCBkaXIgPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAoIGN1cnJlbnQgPiAwICkgPyAtLWN1cnJlbnQgOiBjdXJyZW50ID0gaXRlbXNDb3VudCAtIDE7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciAkbmV3SXRlbSA9ICRpdGVtcy5lcSggY3VycmVudCApLFxyXG4gICAgICAgICAgICAgICAgJG5ld1NsaWRlID0gJHNsaWRlcy5lcSggY3VycmVudCApO1xyXG5cclxuICAgICAgICAgICAgJG5ld0l0ZW0uY3NzKCB7XHJcbiAgICAgICAgICAgICAgICB0b3AgOiAoIGRpciA9PT0gJ25leHQnICkgPyAnLTEwMCUnIDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgekluZGV4IDogOTk5XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICRuZXdTbGlkZS5jc3MoIHtcclxuICAgICAgICAgICAgICAgIHRvcCA6ICggZGlyID09PSAnbmV4dCcgKSA/ICcxMDAlJyA6ICctMTAwJScsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXggOiA5OTlcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRJdGVtLmFkZENsYXNzKCAncHMtbW92ZScgKS5jc3MoIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgOiAoIGRpciA9PT0gJ25leHQnICkgPyAnMTAwJScgOiAnLTEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleCA6IDFcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmFkZENsYXNzKCAncHMtbW92ZScgKS5jc3MoIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgOiAoIGRpciA9PT0gJ25leHQnICkgPyAnLTEwMCUnIDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleCA6IDFcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkbmV3SXRlbS5hZGRDbGFzcyggJ3BzLW1vdmUnICkuY3NzKCAndG9wJywgMCApO1xyXG4gICAgICAgICAgICAgICAgJG5ld1NsaWRlLmFkZENsYXNzKCAncHMtbW92ZScgKS5jc3MoICd0b3AnLCAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LXRgdC70LggQ1NTINC/0LXRgNC10YXQvtC00Ysg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNGO0YLRgdGPLCDRgtC+0LPQtNCwINGE0LvQsNCzINC40LfQvNC10L3Rj9C10Lwg0L3QsCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYoICFzdXBwb3J0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIDAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC10YnQtSDRgNCw0Lcg0L7QsdC90L7QstC70Y/QtdC8INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDRhNC+0L3QtSDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgICAgICAgICAgdXBkYXRlTmF2SW1hZ2VzKCk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgaW5pdCA6IGluaXQgfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbi8vIHZhciBTbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdmFyIGl0ZW1zID0gJCgnLndvcmstc2xpZGVyX19pdGVtJywgJy53b3JrLXNsaWRlcl9fbGlzdF9uZXh0JyksXHJcbi8vICAgICAgICAgaW5kZXggPSAxLFxyXG4vLyAgICAgICAgIG5keCxcclxuLy8gICAgICAgICBkdXJhdGlvbiA9IDUwMCxcclxuLy8gICAgICAgICB0aXRsZSA9ICQoJy53b3JrX190aXRsZScpLFxyXG4vLyAgICAgICAgIHNraWxscyA9ICQoJy53b3JrX190ZWNobm9sb2d5JyksXHJcbi8vICAgICAgICAgaW1nQ29udGFpbmVyID0gJCgnLndvcmtfX3BpYycpO1xyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gX2luaXQoKSB7XHJcbi8vICAgICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBpdGVtcy5lcShpbmRleCksXHJcbi8vICAgICAgICAgICAgIGltZ1NyYyA9IGFjdGl2ZUl0ZW0uZmluZCgnaW1nJykuYXR0cignc3JjJyksXHJcbi8vICAgICAgICAgICAgIGFjdGl2ZVRpdGxlID0gYWN0aXZlSXRlbS5kYXRhKCd0aXRsZScpLFxyXG4vLyAgICAgICAgICAgICBhY3RpdmVTbGlsbCA9IGFjdGl2ZUl0ZW0uZGF0YSgndGVjaG5vbG9neScpO1xyXG4vL1xyXG4vLyAgICAgICAgIGltZ0NvbnRhaW5lci5hdHRyKCdzcmMnLCBpbWdTcmMpO1xyXG4vLyAgICAgICAgIHRpdGxlLnRleHQoYWN0aXZlVGl0bGUpO1xyXG4vLyAgICAgICAgIHNraWxscy50ZXh0KGFjdGl2ZVNsaWxsKTtcclxuLy9cclxuLy8gICAgICAgICB2YXIgbmV4dEl0ZW0gPSAkKCcud29yay1zbGlkZXJfX2l0ZW0nLCAnLndvcmstc2xpZGVyX19saXN0X25leHQnKS5lcShpbmRleCArIDEpO1xyXG4vLyAgICAgICAgIG5leHRJdGVtLmFkZENsYXNzKCd3b3JrLXNsaWRlcl9faXRlbV9jdXJyZW50Jyk7XHJcbi8vICAgICAgICAgdmFyIHByZXZJdGVtID0gJCgnLndvcmstc2xpZGVyX19pdGVtJywgJy53b3JrLXNsaWRlcl9fbGlzdF9wcmV2JykuZXEoaW5kZXggLSAxKTtcclxuLy8gICAgICAgICBwcmV2SXRlbS5hZGRDbGFzcygnd29yay1zbGlkZXJfX2l0ZW1fY3VycmVudCcpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gYW5pbWF0ZVNsaWRlKG5keCwgY29udGFpbmVyLCBkaXJlY3Rpb24pIHtcclxuLy8gICAgICAgICB2YXIgbmV4dEl0ZW1zID0gJCgnLndvcmstc2xpZGVyX19pdGVtJywgY29udGFpbmVyKSxcclxuLy8gICAgICAgICAgICAgY3VycmVudEl0ZW0gPSBuZXh0SXRlbXMuZmlsdGVyKCcud29yay1zbGlkZXJfX2l0ZW1fY3VycmVudCcpLFxyXG4vLyAgICAgICAgICAgICByZXFJdGVtID0gbmV4dEl0ZW1zLmVxKG5keCk7XHJcbi8vICAgICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAndXAnID8gLTEwMCA6IDEwMDtcclxuLy9cclxuLy8gICAgICAgICBjdXJyZW50SXRlbS5hbmltYXRlKHtcclxuLy8gICAgICAgICAgICAgJ3RvcCc6IGRpcmVjdGlvbiArICclJ1xyXG4vLyAgICAgICAgIH0sIGR1cmF0aW9uKTtcclxuLy9cclxuLy8gICAgICAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4vLyAgICAgICAgICAgICAndG9wJzogMFxyXG4vLyAgICAgICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnJlbW92ZUNsYXNzKCd3b3JrLXNsaWRlcl9faXRlbV9jdXJyZW50JykuY3NzKCd0b3AnLCAtZGlyZWN0aW9uICsgJyUnKTtcclxuLy8gICAgICAgICAgICAgcmVxSXRlbS5hZGRDbGFzcygnd29yay1zbGlkZXJfX2l0ZW1fY3VycmVudCcpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBfbW92ZU5leHQoKSB7XHJcbi8vICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy53b3JrLXNsaWRlcl9fbGlzdF9uZXh0JyksXHJcbi8vICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd1cCc7XHJcbi8vXHJcbi8vICAgICAgICAgaWYgKGluZGV4ID09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuLy8gICAgICAgICAgICAgbmR4ID0gMDtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xyXG4vLyAgICAgICAgICAgICBuZHggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIG5keCA9IGluZGV4ICsgMTtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgYW5pbWF0ZVNsaWRlKG5keCwgY29udGFpbmVyLCBkaXJlY3Rpb24pO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gX21vdmVQcmV2KCkge1xyXG4vLyAgICAgICAgIHZhciBjb250YWluZXIgPSAkKCcud29yay1zbGlkZXJfX2xpc3RfcHJldicpLFxyXG4vLyAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnZG93bic7XHJcbi8vXHJcbi8vICAgICAgICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4vLyAgICAgICAgICAgICBuZHggPSAwO1xyXG4vLyAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPD0gMCkge1xyXG4vLyAgICAgICAgICAgICBuZHggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIG5keCA9IGluZGV4IC0gMTtcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgYW5pbWF0ZVNsaWRlKG5keCwgY29udGFpbmVyLCBkaXJlY3Rpb24pO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gX3NsaWRlU2hvdygpIHtcclxuLy8gICAgICAgICB2YXIgZmFkZWRPdXQgPSAkLkRlZmVycmVkKCksXHJcbi8vICAgICAgICAgICAgIGxvYWRlZCA9ICQuRGVmZXJyZWQoKSxcclxuLy8gICAgICAgICAgICAgbmV4dFNyYyA9IGl0ZW1zLmVxKGluZGV4KS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcclxuLy8gICAgICAgICAgICAgbmV4dFRpdGxlID0gaXRlbXMuZXEoaW5kZXgpLmRhdGEoJ3RpdGxlJyksXHJcbi8vICAgICAgICAgICAgIG5leHRTa2lsbHMgPSBpdGVtcy5lcShpbmRleCkuZGF0YSgndGVjaG5vbG9neScpO1xyXG4vL1xyXG4vLyAgICAgICAgIF9tb3ZlTmV4dCgpO1xyXG4vLyAgICAgICAgIF9tb3ZlUHJldigpO1xyXG4vL1xyXG4vLyAgICAgICAgIGltZ0NvbnRhaW5lci5mYWRlT3V0KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgdGl0bGUuc2xpZGVVcCgpO1xyXG4vLyAgICAgICAgICAgICBza2lsbHMuZmFkZU91dCgpO1xyXG4vLyAgICAgICAgICAgICBmYWRlZE91dC5yZXNvbHZlKCk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAgICAgZmFkZWRPdXQuZG9uZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRpdGxlLnRleHQobmV4dFRpdGxlKTtcclxuLy8gICAgICAgICAgICAgc2tpbGxzLnRleHQobmV4dFNraWxscyk7XHJcbi8vICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5hdHRyKCdzcmMnLCBuZXh0U3JjKS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgICAgIGxvYWRlZC5yZXNvbHZlKCk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgbG9hZGVkLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICB0aXRsZS5zbGlkZURvd24oKTtcclxuLy8gICAgICAgICAgICAgc2tpbGxzLmZhZGVJbigpO1xyXG4vLyAgICAgICAgICAgICBpbWdDb250YWluZXIuZmFkZUluKCk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIGluaXQ6IF9pbml0LFxyXG4vLyAgICAgICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgJCgnLnRvZ2dsZV9fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygndG9nZ2xlX19saW5rX25leHQnKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3RvZ2dsZV9fbGlua19wcmV2JykpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgX3NsaWRlU2hvdygpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy8gKCk7XHJcbiIsInZhciB3ZWxjb21lUGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9zaG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpLFxyXG4gICAgICAgICAgICBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgcGFnZVggPSBlLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBwYWdlWTtcclxuICAgICAgICAgICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2aWRlciA9IGkgLyAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnRQb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICByaWdodFBvc2l0aW9uID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnICsgcG9zaXRpb25YICsgJ3B4LCcgKyBwb3NpdGlvblkgKyAncHgsMCknO1xyXG4gICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIGJvdHRvbVBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGxheWVyU3R5bGUubGVmdCA9ICctJyArIGxlZnRQb3NpdGlvbiArICdweCc7XHJcbiAgICAgICAgICAgICAgICBsYXllclN0eWxlLnJpZ2h0ID0gJy0nICsgcmlnaHRQb3NpdGlvbiArICdweCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogX3Nob3dcclxuICAgIH1cclxufSkoKTtcclxuIiwiLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgUGFyYWxsYXggTW91c2Vtb3ZlIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbnZhciBwYXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpO1xyXG5pZiAocGFyYWwgIT09IG51bGwpIHtcclxuICAgIHdlbGNvbWVQYXJhbGxheC5pbml0KCk7XHJcbn1cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFByZWxvYWRlciB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuXHJcblxyXG4vLyAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBGbGlwcGVyIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHZhciBmbGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsaXBwZXInKTtcclxuICAgIGlmKGZsaXAhPT1udWxsKXtcclxuICAgICAgICBmbGlwcGVyLmZyb250KCk7XHJcbiAgICAgICAgZmxpcHBlci5iYWNrKCk7XHJcbiAgICB9XHJcbi8vXHJcbi8vICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBQYXJhbGxheCBTY3JvbGwgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHZhciBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2JnJyk7XHJcbiAgICBpZihoZXJvIT09bnVsbCl7XHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAgICAgcGFyYWxsYXguaW5pdCh3U2Nyb2xsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IE1haW4gTWVudSB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICBtYWluTWVudS5pbml0KCk7XHJcbi8vXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFNjcm9sbCBCdXR0b25zIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB2YXIgZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xyXG4gICAgdmFyIHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LXVwJyk7XHJcbiAgICBpZihkb3duQnV0dG9uICE9PSBudWxsKXtwYWdlU2Nyb2xsLnNjcm9sRG93bigpO31cclxuICAgIGlmKHVwQnV0dG9uICE9PW51bGwpe3BhZ2VTY3JvbGwuc2Nyb2xVcCgpO31cclxuXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFNsaWRlciB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya19fc2xpZGVyJyk7XHJcbi8vIGlmIChzbGlkZXIgIT09IG51bGwpIHtcclxuLy8gICAgICAgICBTbGlkZXIuaW5pdCgpO1xyXG4vLyAgICAgICAgIFNsaWRlci5tb3ZlKCk7XHJcbi8vIH1cclxuICAgIFNsaWRlci5pbml0KCk7XHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEJsb2cgTmF2IFNjcm9sbCB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB2YXIgYmxvZ05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nLW5hdl9fbGlzdCcpO1xyXG4gICAgaWYoYmxvZ05hdiAhPT0gbnVsbCl7XHJcbiAgICAgICAgZG9jdW1lbnQub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJsb2dTY3JvbGwuaW5pdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4vLyAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBBRE1JTiBUQUJTIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgYWRtaW4uaW5pdCgpO1xyXG4vL1xyXG4vLyAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBHT09HTEUgTUFQIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vL1xyXG4vL1xyXG4vLyAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBTS0lMTFMgQU5JTUFUSU9OIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyBza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGwnKTtcclxuLy8gLy8gaWYgKHNraWxscyAhPT0gbnVsbCkge1xyXG4vLyAvLyAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4vLyAvLyAgICAgICAgIHNraWxsQW5pbWF0ZS5pbml0KCk7XHJcbi8vIC8vICAgICB9O1xyXG4vLyAvL1xyXG4vLyAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBCbHVyIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gLy8gdmFyIGJsciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWZvcm1fX2JsdXInKTtcclxuLy8gLy8gaWYoYmxyICE9PSBudWxsKXtcclxuLy8gLy8gICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gLy8gICAgICAgICBibHVyLnNldCgpO1xyXG4vLyAvLyAgICAgfTtcclxuLy8gLy8gfVxyXG4vL1xyXG5cclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgRm9ybXMgdmFsaWRhdGlvbiB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgaWYgKGZvcm0gIT09IG51bGwpIHtcclxuICAgICAgICB2YXIgaW5wdXRzID0gZm9ybS5lbGVtZW50cztcclxuICAgICAgICB2YXIgY2xvc2VFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb2JvdC1lcnJvcl9fY2xvc2UnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaW5wdXRzW2ldLm9uZm9jdXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1ncm91cF9lcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbi5jbGVhcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xvc2VFcnJvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZUVycm9yLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRXJyb3IucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2YWxpZCA9IHZhbGlkYXRpb24uaW5pdChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBQcmVsb2FkZXIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB2YXIgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWxvYWRlcicpO1xyXG4gICAgdmFyIHByZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZsaXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsaXBwZXInKTtcclxuICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2QtY29udGVudCcpO1xyXG4gICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpZihmbGlwQ2FyZCl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZmxpcENhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDEsMCwwLCAwZGVnKSc7XHJcbiAgICAgICAgICAgIH0sMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYocHJlbG9hZGVyKXtcclxuICAgICAgICBwcmVsKCk7XHJcbiAgICB9XHJcblxyXG59OyJdfQ==
