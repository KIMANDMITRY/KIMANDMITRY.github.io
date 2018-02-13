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
//###############################################| Parallax Mousemove |###############################
    var paral = document.querySelector('.parallax');
    if (paral !== null) {
        welcomeParallax.init();
    }
//###############################################| Preloader |################################
    var preloader = document.querySelector('#preloader');
    var prel = function () {
        preloader.classList.add('disable');
        var flipCard = document.querySelector('.flipper');
        if(flipCard){
            setTimeout(function () {
                flipCard.style.transform = 'rotate3d(1,0,0, 0deg)';
            }, 1500);
        }
    };
    if(preloader){
        prel();
    }

};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluVGFicy5qcyIsImJsb2dOYXZTY3JvbGwuanMiLCJibHVyLmpzIiwiZmxpcHBlci5qcyIsImZvcm1zVmFsaWRhdGlvbi5qcyIsImdvb2dsZU1hcC5qcyIsIm1haW4tbWVudS5qcyIsIm1vZGVybml6ZXIuanMiLCJwYXJhbGxheFNjcm9sbC5qcyIsInByZWxvYWRlci5qcyIsInNjcm9sbEJ1dHRvbnMuanMiLCJza2lsbHNBbmltYXRpb24uanMiLCJzbGlkZXIuanMiLCJ3ZWxjb21lUGFyYWxsYXguanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWRtaW4gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy50YWItY29udHJvbHNfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmNsb3Nlc3QoJy50YWItY29udHJvbHNfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50SXRlbSA9ICQoJy50YWJzX19pdGVtJyksXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBvc2l0aW9uID0gaXRlbS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGVudEl0ZW0uZXEoaXRlbVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIGJsb2dTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgZnVuY3Rpb24gX2ZpeE1lbnUoKSB7XHJcbiAgICAgICAgdmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nLW5hdl9fbGlzdCcpLFxyXG4gICAgICAgICAgICBuYXZDb29yZHMgPSBzaWRlYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc4MCkge1xyXG4gICAgICAgICAgICBpZiAobmF2Q29vcmRzIDw9IC01MCkge1xyXG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS50b3AgPSAnMnB4JztcclxuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS53aWR0aCA9ICcyMCUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBuYXYuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IF9maXhNZW51XHJcbiAgICB9O1xyXG59KSgpOyIsIi8vIHZhciBibHVyID0gKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtZm9ybScpLFxyXG4vLyAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1mb3JtX19ibHVyJyk7XHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHZhciBpbWdXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50c19fYmcnKS5vZmZzZXRXaWR0aCxcclxuLy8gICAgICAgICAgICAgICAgIHBvc0xlZnQgPSAtd3JhcHBlci5vZmZzZXRMZWZ0LFxyXG4vLyAgICAgICAgICAgICAgICAgcG9zVG9wID0gIC13cmFwcGVyLm9mZnNldFRvcCxcclxuLy8gICAgICAgICAgICAgICAgIGJsdXJDc3MgPSBmb3JtLnN0eWxlO1xyXG4vLyAgICAgICAgICAgICBibHVyQ3NzLmJhY2tncm91bmRTaXplID0gaW1nV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nO1xyXG4vLyAgICAgICAgICAgICBibHVyQ3NzLmJhY2tncm91bmRQb3NpdGlvbiA9IHBvc0xlZnQgKyAncHgnICsgJyAnICsgcG9zVG9wICsgJ3B4JztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0pKCk7IiwidmFyIGZsaXBwZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZyb250QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpLFxyXG4gICAgICAgIGZsaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxpcHBlcicpLFxyXG4gICAgICAgIGJhY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXJldHVybicpO1xyXG4gICAgZnVuY3Rpb24gX2Zyb250RmxpcCgpe1xyXG4gICAgICAgIGZyb250QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZyb250QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGZsaXAuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVkoMTgwZGVnKSc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIF9iYWNrRmxpcCgpIHtcclxuICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZsaXAuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVkoMGRlZyknO1xyXG4gICAgICAgICAgICBmcm9udEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZnJvbnQ6IF9mcm9udEZsaXAsXHJcbiAgICAgICAgYmFjazogX2JhY2tGbGlwXHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIHZhbGlkYXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVycm9yRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZXJyb3ItbXNnJyksXHJcbiAgICAgICAgY2FwdGNoYUVycm9yID0gJCgnLnJvYm90LWVycm9yJyksXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19jb250YWluZXInKTtcclxuXHJcbiAgICB2YXIgX2luaXQgPSBmdW5jdGlvbiAoZm9ybSkge1xyXG4gICAgICAgIHZhciBlbGVtcyA9IGZvcm0uZWxlbWVudHM7XHJcbiAgICAgICAgcmV0dXJuIF92YWxpZGF0ZShlbGVtcykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gX3ZhbGlkYXRlKGlucHV0cykge1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXRzW2ldLnRhZ05hbWUgPT09ICdCVVRUT04nKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdmFyIGVsZW0gPSBpbnB1dHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfc2hvd0Vycm9yKGVsZW0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS50eXBlID09PSAnY2hlY2tib3gnIHx8IGVsZW0udHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmNoZWNrZWQgJiYgZWxlbS52YWx1ZSA9PT0gJ3llcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRjaGFFcnJvci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdibG9jaydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX3Nob3dFcnJvciAgKGVsZW0pIHtcclxuICAgICAgICB2YXIgdGV4dCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbS5wYXJlbnROb2RlLm9mZnNldFRvcCArIGVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWdyb3VwX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBlcnJvckZpZWxkLmlubmVyVGV4dCA9ICfQktGLINC90LUg0LLQstC10LvQuCAnICsgdGV4dDtcclxuICAgICAgICBlcnJvckZpZWxkLnN0eWxlLnRvcCA9IHBvc2l0aW9uICsgJ3B4JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gX2NsZWFyRXJyb3IoZWxlbSkge1xyXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1ncm91cF9lcnJvcicpO1xyXG4gICAgICAgIGVycm9yRmllbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBfaW5pdCxcclxuICAgICAgICBjbGVhcjogX2NsZWFyRXJyb3JcclxuICAgIH1cclxufSkoKTsiLCJ2YXIgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpO1xyXG5pZihtYXAhPT1udWxsKXtmdW5jdGlvbiBpbml0TWFwICgpIHtcclxuICAgIHZhciBwb2ludGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi4xMDIxNzcsIDIzLjc4MjU5NiksXHJcbiAgICAgICAgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1Mi4wOTczODEsICAyMy43NDUzMzcpO1xyXG5cclxuICAgIHZhciBzdHlsZXMgPSBbe1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzQ0NDQ0NFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGVcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNmMmYyZjJcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjQ1fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLmljb25cIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjOTZkN2M4XCJ9LHtcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX1dO1xyXG5cclxuICAgIHZhciBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsXHJcbiAgICAgICAge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XHJcblxyXG4gICAgdmFyIG1hcFNldHRpbmdzID0ge1xyXG4gICAgICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICB6b29tOiAxNCxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCAnbWFwX3N0eWxlJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX1RPUFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgbWFwU2V0dGluZ3MpO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBpY29uOiAnYXNzZXRzL2ltZy9tYXBfbWFya2VyLnBuZycsXHJcbiAgICAgICAgcG9zaXRpb246IHBvaW50ZXIsXHJcbiAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgdGl0bGU6IFwiSSdtIGhlcmUhXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAubWFwVHlwZXMuc2V0KCdtYXBfc3R5bGUnLCBzdHlsZWRNYXApO1xyXG4gICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XHJcbn1cclxufSIsInZhciBtYWluTWVudSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWVudSA9ICQoJy5tYWluLW5hdl9fd3JhcHBlcicpLFxyXG4gICAgICAgICAgICAgICAgaGFtYnVyZ2VyID0gJCgnLmhhbWJ1cmdlcicpO1xyXG4gICAgICAgICAgICBoYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbWVudS50b2dnbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyX2Nsb3NlZCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCIvKiBNb2Rlcm5penIgMi42LjIgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcclxuICogQnVpbGQ6IGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLyMtY3NzdHJhbnNpdGlvbnMtdG91Y2gtc2hpdi1jc3NjbGFzc2VzLXByZWZpeGVkLXRlc3RzdHlsZXMtdGVzdHByb3AtdGVzdGFsbHByb3BzLXByZWZpeGVzLWRvbXByZWZpeGVzLWxvYWRcclxuICovXHJcbjt3aW5kb3cuTW9kZXJuaXpyPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiB6KGEpe2ouY3NzVGV4dD1hfWZ1bmN0aW9uIEEoYSxiKXtyZXR1cm4geihtLmpvaW4oYStcIjtcIikrKGJ8fFwiXCIpKX1mdW5jdGlvbiBCKGEsYil7cmV0dXJuIHR5cGVvZiBhPT09Yn1mdW5jdGlvbiBDKGEsYil7cmV0dXJuISF+KFwiXCIrYSkuaW5kZXhPZihiKX1mdW5jdGlvbiBEKGEsYil7Zm9yKHZhciBkIGluIGEpe3ZhciBlPWFbZF07aWYoIUMoZSxcIi1cIikmJmpbZV0hPT1jKXJldHVybiBiPT1cInBmeFwiP2U6ITB9cmV0dXJuITF9ZnVuY3Rpb24gRShhLGIsZCl7Zm9yKHZhciBlIGluIGEpe3ZhciBmPWJbYVtlXV07aWYoZiE9PWMpcmV0dXJuIGQ9PT0hMT9hW2VdOkIoZixcImZ1bmN0aW9uXCIpP2YuYmluZChkfHxiKTpmfXJldHVybiExfWZ1bmN0aW9uIEYoYSxiLGMpe3ZhciBkPWEuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxlPShhK1wiIFwiK28uam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIik7cmV0dXJuIEIoYixcInN0cmluZ1wiKXx8QihiLFwidW5kZWZpbmVkXCIpP0QoZSxiKTooZT0oYStcIiBcIitwLmpvaW4oZCtcIiBcIikrZCkuc3BsaXQoXCIgXCIpLEUoZSxiLGMpKX12YXIgZD1cIjIuNi4yXCIsZT17fSxmPSEwLGc9Yi5kb2N1bWVudEVsZW1lbnQsaD1cIm1vZGVybml6clwiLGk9Yi5jcmVhdGVFbGVtZW50KGgpLGo9aS5zdHlsZSxrLGw9e30udG9TdHJpbmcsbT1cIiAtd2Via2l0LSAtbW96LSAtby0gLW1zLSBcIi5zcGxpdChcIiBcIiksbj1cIldlYmtpdCBNb3ogTyBtc1wiLG89bi5zcGxpdChcIiBcIikscD1uLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLHE9e30scj17fSxzPXt9LHQ9W10sdT10LnNsaWNlLHYsdz1mdW5jdGlvbihhLGMsZCxlKXt2YXIgZixpLGosayxsPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxtPWIuYm9keSxuPW18fGIuY3JlYXRlRWxlbWVudChcImJvZHlcIik7aWYocGFyc2VJbnQoZCwxMCkpd2hpbGUoZC0tKWo9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGouaWQ9ZT9lW2RdOmgrKGQrMSksbC5hcHBlbmRDaGlsZChqKTtyZXR1cm4gZj1bXCImIzE3MztcIiwnPHN0eWxlIGlkPVwicycsaCwnXCI+JyxhLFwiPC9zdHlsZT5cIl0uam9pbihcIlwiKSxsLmlkPWgsKG0/bDpuKS5pbm5lckhUTUwrPWYsbi5hcHBlbmRDaGlsZChsKSxtfHwobi5zdHlsZS5iYWNrZ3JvdW5kPVwiXCIsbi5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiLGs9Zy5zdHlsZS5vdmVyZmxvdyxnLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsZy5hcHBlbmRDaGlsZChuKSksaT1jKGwsYSksbT9sLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCk6KG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKSxnLnN0eWxlLm92ZXJmbG93PWspLCEhaX0seD17fS5oYXNPd25Qcm9wZXJ0eSx5OyFCKHgsXCJ1bmRlZmluZWRcIikmJiFCKHguY2FsbCxcInVuZGVmaW5lZFwiKT95PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHguY2FsbChhLGIpfTp5PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIgaW4gYSYmQihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZVtiXSxcInVuZGVmaW5lZFwiKX0sRnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihiKXt2YXIgYz10aGlzO2lmKHR5cGVvZiBjIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IFR5cGVFcnJvcjt2YXIgZD11LmNhbGwoYXJndW1lbnRzLDEpLGU9ZnVuY3Rpb24oKXtpZih0aGlzIGluc3RhbmNlb2YgZSl7dmFyIGE9ZnVuY3Rpb24oKXt9O2EucHJvdG90eXBlPWMucHJvdG90eXBlO3ZhciBmPW5ldyBhLGc9Yy5hcHBseShmLGQuY29uY2F0KHUuY2FsbChhcmd1bWVudHMpKSk7cmV0dXJuIE9iamVjdChnKT09PWc/ZzpmfXJldHVybiBjLmFwcGx5KGIsZC5jb25jYXQodS5jYWxsKGFyZ3VtZW50cykpKX07cmV0dXJuIGV9KSxxLnRvdWNoPWZ1bmN0aW9uKCl7dmFyIGM7cmV0dXJuXCJvbnRvdWNoc3RhcnRcImluIGF8fGEuRG9jdW1lbnRUb3VjaCYmYiBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2g/Yz0hMDp3KFtcIkBtZWRpYSAoXCIsbS5qb2luKFwidG91Y2gtZW5hYmxlZCksKFwiKSxoLFwiKVwiLFwieyNtb2Rlcm5penJ7dG9wOjlweDtwb3NpdGlvbjphYnNvbHV0ZX19XCJdLmpvaW4oXCJcIiksZnVuY3Rpb24oYSl7Yz1hLm9mZnNldFRvcD09PTl9KSxjfSxxLmNzc3RyYW5zaXRpb25zPWZ1bmN0aW9uKCl7cmV0dXJuIEYoXCJ0cmFuc2l0aW9uXCIpfTtmb3IodmFyIEcgaW4gcSl5KHEsRykmJih2PUcudG9Mb3dlckNhc2UoKSxlW3ZdPXFbR10oKSx0LnB1c2goKGVbdl0/XCJcIjpcIm5vLVwiKSt2KSk7cmV0dXJuIGUuYWRkVGVzdD1mdW5jdGlvbihhLGIpe2lmKHR5cGVvZiBhPT1cIm9iamVjdFwiKWZvcih2YXIgZCBpbiBhKXkoYSxkKSYmZS5hZGRUZXN0KGQsYVtkXSk7ZWxzZXthPWEudG9Mb3dlckNhc2UoKTtpZihlW2FdIT09YylyZXR1cm4gZTtiPXR5cGVvZiBiPT1cImZ1bmN0aW9uXCI/YigpOmIsdHlwZW9mIGYhPVwidW5kZWZpbmVkXCImJmYmJihnLmNsYXNzTmFtZSs9XCIgXCIrKGI/XCJcIjpcIm5vLVwiKSthKSxlW2FdPWJ9cmV0dXJuIGV9LHooXCJcIiksaT1rPW51bGwsZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBrKGEsYil7dmFyIGM9YS5jcmVhdGVFbGVtZW50KFwicFwiKSxkPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfHxhLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYy5pbm5lckhUTUw9XCJ4PHN0eWxlPlwiK2IrXCI8L3N0eWxlPlwiLGQuaW5zZXJ0QmVmb3JlKGMubGFzdENoaWxkLGQuZmlyc3RDaGlsZCl9ZnVuY3Rpb24gbCgpe3ZhciBhPXIuZWxlbWVudHM7cmV0dXJuIHR5cGVvZiBhPT1cInN0cmluZ1wiP2Euc3BsaXQoXCIgXCIpOmF9ZnVuY3Rpb24gbShhKXt2YXIgYj1pW2FbZ11dO3JldHVybiBifHwoYj17fSxoKyssYVtnXT1oLGlbaF09YiksYn1mdW5jdGlvbiBuKGEsYyxmKXtjfHwoYz1iKTtpZihqKXJldHVybiBjLmNyZWF0ZUVsZW1lbnQoYSk7Znx8KGY9bShjKSk7dmFyIGc7cmV0dXJuIGYuY2FjaGVbYV0/Zz1mLmNhY2hlW2FdLmNsb25lTm9kZSgpOmUudGVzdChhKT9nPShmLmNhY2hlW2FdPWYuY3JlYXRlRWxlbShhKSkuY2xvbmVOb2RlKCk6Zz1mLmNyZWF0ZUVsZW0oYSksZy5jYW5IYXZlQ2hpbGRyZW4mJiFkLnRlc3QoYSk/Zi5mcmFnLmFwcGVuZENoaWxkKGcpOmd9ZnVuY3Rpb24gbyhhLGMpe2F8fChhPWIpO2lmKGopcmV0dXJuIGEuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2M9Y3x8bShhKTt2YXIgZD1jLmZyYWcuY2xvbmVOb2RlKCksZT0wLGY9bCgpLGc9Zi5sZW5ndGg7Zm9yKDtlPGc7ZSsrKWQuY3JlYXRlRWxlbWVudChmW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBwKGEsYil7Yi5jYWNoZXx8KGIuY2FjaGU9e30sYi5jcmVhdGVFbGVtPWEuY3JlYXRlRWxlbWVudCxiLmNyZWF0ZUZyYWc9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50LGIuZnJhZz1iLmNyZWF0ZUZyYWcoKSksYS5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGMpe3JldHVybiByLnNoaXZNZXRob2RzP24oYyxhLGIpOmIuY3JlYXRlRWxlbShjKX0sYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PUZ1bmN0aW9uKFwiaCxmXCIsXCJyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1mLmNsb25lTm9kZSgpLGM9bi5jcmVhdGVFbGVtZW50O2guc2hpdk1ldGhvZHMmJihcIitsKCkuam9pbigpLnJlcGxhY2UoL1xcdysvZyxmdW5jdGlvbihhKXtyZXR1cm4gYi5jcmVhdGVFbGVtKGEpLGIuZnJhZy5jcmVhdGVFbGVtZW50KGEpLCdjKFwiJythKydcIiknfSkrXCIpO3JldHVybiBufVwiKShyLGIuZnJhZyl9ZnVuY3Rpb24gcShhKXthfHwoYT1iKTt2YXIgYz1tKGEpO3JldHVybiByLnNoaXZDU1MmJiFmJiYhYy5oYXNDU1MmJihjLmhhc0NTUz0hIWsoYSxcImFydGljbGUsYXNpZGUsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31tYXJre2JhY2tncm91bmQ6I0ZGMDtjb2xvcjojMDAwfVwiKSksanx8cChhLGMpLGF9dmFyIGM9YS5odG1sNXx8e30sZD0vXjx8Xig/OmJ1dHRvbnxtYXB8c2VsZWN0fHRleHRhcmVhfG9iamVjdHxpZnJhbWV8b3B0aW9ufG9wdGdyb3VwKSQvaSxlPS9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaSxmLGc9XCJfaHRtbDVzaGl2XCIsaD0wLGk9e30sajsoZnVuY3Rpb24oKXt0cnl7dmFyIGE9Yi5jcmVhdGVFbGVtZW50KFwiYVwiKTthLmlubmVySFRNTD1cIjx4eXo+PC94eXo+XCIsZj1cImhpZGRlblwiaW4gYSxqPWEuY2hpbGROb2Rlcy5sZW5ndGg9PTF8fGZ1bmN0aW9uKCl7Yi5jcmVhdGVFbGVtZW50KFwiYVwiKTt2YXIgYT1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtyZXR1cm4gdHlwZW9mIGEuY2xvbmVOb2RlPT1cInVuZGVmaW5lZFwifHx0eXBlb2YgYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PT1cInVuZGVmaW5lZFwifHx0eXBlb2YgYS5jcmVhdGVFbGVtZW50PT1cInVuZGVmaW5lZFwifSgpfWNhdGNoKGMpe2Y9ITAsaj0hMH19KSgpO3ZhciByPXtlbGVtZW50czpjLmVsZW1lbnRzfHxcImFiYnIgYXJ0aWNsZSBhc2lkZSBhdWRpbyBiZGkgY2FudmFzIGRhdGEgZGF0YWxpc3QgZGV0YWlscyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYXJrIG1ldGVyIG5hdiBvdXRwdXQgcHJvZ3Jlc3Mgc2VjdGlvbiBzdW1tYXJ5IHRpbWUgdmlkZW9cIixzaGl2Q1NTOmMuc2hpdkNTUyE9PSExLHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzOmosc2hpdk1ldGhvZHM6Yy5zaGl2TWV0aG9kcyE9PSExLHR5cGU6XCJkZWZhdWx0XCIsc2hpdkRvY3VtZW50OnEsY3JlYXRlRWxlbWVudDpuLGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6b307YS5odG1sNT1yLHEoYil9KHRoaXMsYiksZS5fdmVyc2lvbj1kLGUuX3ByZWZpeGVzPW0sZS5fZG9tUHJlZml4ZXM9cCxlLl9jc3NvbVByZWZpeGVzPW8sZS50ZXN0UHJvcD1mdW5jdGlvbihhKXtyZXR1cm4gRChbYV0pfSxlLnRlc3RBbGxQcm9wcz1GLGUudGVzdFN0eWxlcz13LGUucHJlZml4ZWQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiP0YoYSxiLGMpOkYoYSxcInBmeFwiKX0sZy5jbGFzc05hbWU9Zy5jbGFzc05hbWUucmVwbGFjZSgvKF58XFxzKW5vLWpzKFxcc3wkKS8sXCIkMSQyXCIpKyhmP1wiIGpzIFwiK3Quam9pbihcIiBcIik6XCJcIiksZX0odGhpcyx0aGlzLmRvY3VtZW50KSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PW8uY2FsbChhKX1mdW5jdGlvbiBlKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGYoKXt9ZnVuY3Rpb24gZyhhKXtyZXR1cm4hYXx8XCJsb2FkZWRcIj09YXx8XCJjb21wbGV0ZVwiPT1hfHxcInVuaW5pdGlhbGl6ZWRcIj09YX1mdW5jdGlvbiBoKCl7dmFyIGE9cC5zaGlmdCgpO3E9MSxhP2EudD9tKGZ1bmN0aW9uKCl7KFwiY1wiPT1hLnQ/Qi5pbmplY3RDc3M6Qi5pbmplY3RKcykoYS5zLDAsYS5hLGEueCxhLmUsMSl9LDApOihhKCksaCgpKTpxPTB9ZnVuY3Rpb24gaShhLGMsZCxlLGYsaSxqKXtmdW5jdGlvbiBrKGIpe2lmKCFvJiZnKGwucmVhZHlTdGF0ZSkmJih1LnI9bz0xLCFxJiZoKCksbC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxiKSl7XCJpbWdcIiE9YSYmbShmdW5jdGlvbigpe3QucmVtb3ZlQ2hpbGQobCl9LDUwKTtmb3IodmFyIGQgaW4geVtjXSl5W2NdLmhhc093blByb3BlcnR5KGQpJiZ5W2NdW2RdLm9ubG9hZCgpfX12YXIgaj1qfHxCLmVycm9yVGltZW91dCxsPWIuY3JlYXRlRWxlbWVudChhKSxvPTAscj0wLHU9e3Q6ZCxzOmMsZTpmLGE6aSx4Omp9OzE9PT15W2NdJiYocj0xLHlbY109W10pLFwib2JqZWN0XCI9PWE/bC5kYXRhPWM6KGwuc3JjPWMsbC50eXBlPWEpLGwud2lkdGg9bC5oZWlnaHQ9XCIwXCIsbC5vbmVycm9yPWwub25sb2FkPWwub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ay5jYWxsKHRoaXMscil9LHAuc3BsaWNlKGUsMCx1KSxcImltZ1wiIT1hJiYocnx8Mj09PXlbY10/KHQuaW5zZXJ0QmVmb3JlKGwscz9udWxsOm4pLG0oayxqKSk6eVtjXS5wdXNoKGwpKX1mdW5jdGlvbiBqKGEsYixjLGQsZil7cmV0dXJuIHE9MCxiPWJ8fFwialwiLGUoYSk/aShcImNcIj09Yj92OnUsYSxiLHRoaXMuaSsrLGMsZCxmKToocC5zcGxpY2UodGhpcy5pKyssMCxhKSwxPT1wLmxlbmd0aCYmaCgpKSx0aGlzfWZ1bmN0aW9uIGsoKXt2YXIgYT1CO3JldHVybiBhLmxvYWRlcj17bG9hZDpqLGk6MH0sYX12YXIgbD1iLmRvY3VtZW50RWxlbWVudCxtPWEuc2V0VGltZW91dCxuPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF0sbz17fS50b1N0cmluZyxwPVtdLHE9MCxyPVwiTW96QXBwZWFyYW5jZVwiaW4gbC5zdHlsZSxzPXImJiEhYi5jcmVhdGVSYW5nZSgpLmNvbXBhcmVOb2RlLHQ9cz9sOm4ucGFyZW50Tm9kZSxsPWEub3BlcmEmJlwiW29iamVjdCBPcGVyYV1cIj09by5jYWxsKGEub3BlcmEpLGw9ISFiLmF0dGFjaEV2ZW50JiYhbCx1PXI/XCJvYmplY3RcIjpsP1wic2NyaXB0XCI6XCJpbWdcIix2PWw/XCJzY3JpcHRcIjp1LHc9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT1vLmNhbGwoYSl9LHg9W10seT17fSx6PXt0aW1lb3V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGIubGVuZ3RoJiYoYS50aW1lb3V0PWJbMF0pLGF9fSxBLEI7Qj1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe3ZhciBhPWEuc3BsaXQoXCIhXCIpLGI9eC5sZW5ndGgsYz1hLnBvcCgpLGQ9YS5sZW5ndGgsYz17dXJsOmMsb3JpZ1VybDpjLHByZWZpeGVzOmF9LGUsZixnO2ZvcihmPTA7ZjxkO2YrKylnPWFbZl0uc3BsaXQoXCI9XCIpLChlPXpbZy5zaGlmdCgpXSkmJihjPWUoYyxnKSk7Zm9yKGY9MDtmPGI7ZisrKWM9eFtmXShjKTtyZXR1cm4gY31mdW5jdGlvbiBnKGEsZSxmLGcsaCl7dmFyIGk9YihhKSxqPWkuYXV0b0NhbGxiYWNrO2kudXJsLnNwbGl0KFwiLlwiKS5wb3AoKS5zcGxpdChcIj9cIikuc2hpZnQoKSxpLmJ5cGFzc3x8KGUmJihlPWQoZSk/ZTplW2FdfHxlW2ddfHxlW2Euc3BsaXQoXCIvXCIpLnBvcCgpLnNwbGl0KFwiP1wiKVswXV0pLGkuaW5zdGVhZD9pLmluc3RlYWQoYSxlLGYsZyxoKTooeVtpLnVybF0/aS5ub2V4ZWM9ITA6eVtpLnVybF09MSxmLmxvYWQoaS51cmwsaS5mb3JjZUNTU3x8IWkuZm9yY2VKUyYmXCJjc3NcIj09aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpP1wiY1wiOmMsaS5ub2V4ZWMsaS5hdHRycyxpLnRpbWVvdXQpLChkKGUpfHxkKGopKSYmZi5sb2FkKGZ1bmN0aW9uKCl7aygpLGUmJmUoaS5vcmlnVXJsLGgsZyksaiYmaihpLm9yaWdVcmwsaCxnKSx5W2kudXJsXT0yfSkpKX1mdW5jdGlvbiBoKGEsYil7ZnVuY3Rpb24gYyhhLGMpe2lmKGEpe2lmKGUoYSkpY3x8KGo9ZnVuY3Rpb24oKXt2YXIgYT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ay5hcHBseSh0aGlzLGEpLGwoKX0pLGcoYSxqLGIsMCxoKTtlbHNlIGlmKE9iamVjdChhKT09PWEpZm9yKG4gaW4gbT1mdW5jdGlvbigpe3ZhciBiPTAsYztmb3IoYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJmIrKztyZXR1cm4gYn0oKSxhKWEuaGFzT3duUHJvcGVydHkobikmJighYyYmIS0tbSYmKGQoaik/aj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfTpqW25dPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTthJiZhLmFwcGx5KHRoaXMsYiksbCgpfX0oa1tuXSkpLGcoYVtuXSxqLGIsbixoKSl9ZWxzZSFjJiZsKCl9dmFyIGg9ISFhLnRlc3QsaT1hLmxvYWR8fGEuYm90aCxqPWEuY2FsbGJhY2t8fGYsaz1qLGw9YS5jb21wbGV0ZXx8ZixtLG47YyhoP2EueWVwOmEubm9wZSwhIWkpLGkmJmMoaSl9dmFyIGksaixsPXRoaXMueWVwbm9wZS5sb2FkZXI7aWYoZShhKSlnKGEsMCxsLDApO2Vsc2UgaWYodyhhKSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKWo9YVtpXSxlKGopP2coaiwwLGwsMCk6dyhqKT9CKGopOk9iamVjdChqKT09PWomJmgoaixsKTtlbHNlIE9iamVjdChhKT09PWEmJmgoYSxsKX0sQi5hZGRQcmVmaXg9ZnVuY3Rpb24oYSxiKXt6W2FdPWJ9LEIuYWRkRmlsdGVyPWZ1bmN0aW9uKGEpe3gucHVzaChhKX0sQi5lcnJvclRpbWVvdXQ9MWU0LG51bGw9PWIucmVhZHlTdGF0ZSYmYi5hZGRFdmVudExpc3RlbmVyJiYoYi5yZWFkeVN0YXRlPVwibG9hZGluZ1wiLGIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixBPWZ1bmN0aW9uKCl7Yi5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEEsMCksYi5yZWFkeVN0YXRlPVwiY29tcGxldGVcIn0sMCkpLGEueWVwbm9wZT1rKCksYS55ZXBub3BlLmV4ZWN1dGVTdGFjaz1oLGEueWVwbm9wZS5pbmplY3RKcz1mdW5jdGlvbihhLGMsZCxlLGksail7dmFyIGs9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGwsbyxlPWV8fEIuZXJyb3JUaW1lb3V0O2suc3JjPWE7Zm9yKG8gaW4gZClrLnNldEF0dHJpYnV0ZShvLGRbb10pO2M9aj9oOmN8fGYsay5vbnJlYWR5c3RhdGVjaGFuZ2U9ay5vbmxvYWQ9ZnVuY3Rpb24oKXshbCYmZyhrLnJlYWR5U3RhdGUpJiYobD0xLGMoKSxrLm9ubG9hZD1rLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsKX0sbShmdW5jdGlvbigpe2x8fChsPTEsYygxKSl9LGUpLGk/ay5vbmxvYWQoKTpuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGssbil9LGEueWVwbm9wZS5pbmplY3RDc3M9ZnVuY3Rpb24oYSxjLGQsZSxnLGkpe3ZhciBlPWIuY3JlYXRlRWxlbWVudChcImxpbmtcIiksaixjPWk/aDpjfHxmO2UuaHJlZj1hLGUucmVsPVwic3R5bGVzaGVldFwiLGUudHlwZT1cInRleHQvY3NzXCI7Zm9yKGogaW4gZCllLnNldEF0dHJpYnV0ZShqLGRbal0pO2d8fChuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsbiksbShjLDApKX19KHRoaXMsZG9jdW1lbnQpLE1vZGVybml6ci5sb2FkPWZ1bmN0aW9uKCl7eWVwbm9wZS5hcHBseSh3aW5kb3csW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMCkpfTsiLCJ2YXIgcGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX2JnJyk7XHJcbiAgICB2YXIgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyJyk7XHJcbiAgICB2YXIgdXNlckJnUGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGl0bGUtcGljJyk7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLHdpbmRvd1Njcm9sbCxzdHJhZmVBbW91bnQpIHtcclxuICAgICAgICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1zdHJhZmVBbW91bnQgKyAnJSc7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoMCwnICsgc3RyYWZlICsgJywwKSc7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZShiZyx3U2Nyb2xsLDMwKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHVzZXJCZ1BpYyx3U2Nyb2xsLDcpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodXNlcix3U2Nyb2xsLDMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCIiLCJ2YXIgcGFnZVNjcm9sbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc2Nyb2xEb3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkb3duQnV0dG9uID0gJCgnLmFycm93Jyk7XHJcbiAgICAgICAgICAgIGRvd25CdXR0b24ub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiA4Mjd9LCAxNTAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjcm9sVXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHVwQnV0dG9uID0gJCgnLmFycm93LXVwJyk7XHJcbiAgICAgICAgICAgIHVwQnV0dG9uLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDEyMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCIvLyB2YXIgc2tpbGxBbmltYXRlID0gKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHZhciBza2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGwnKSxcclxuLy8gICAgICAgICBjaXJjbGVzQWJvdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2tpbGxzX19jaXJjbGUtYWJvdmUnKSxcclxuLy8gICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbi8vICAgICB2YXIgY2lyY2xlTGVuZ3RoID0gZnVuY3Rpb24gKGNpcmNsZSkge1xyXG4vLyAgICAgICAgIHZhciBjaXJjbGVSYWRpdXMgPSBjaXJjbGUuZ2V0QXR0cmlidXRlKCdyJyksXHJcbi8vICAgICAgICAgICAgIGNpcmNsZUxlbmd0aCA9IDIgKiBNYXRoLlBJICogY2lyY2xlUmFkaXVzO1xyXG4vLyAgICAgICAgIHJldHVybiBjaXJjbGVMZW5ndGg7XHJcbi8vICAgICB9O1xyXG4vLyAgICAgW10uc2xpY2UuY2FsbChjaXJjbGVzQWJvdmUpLmZvckVhY2goZnVuY3Rpb24gKGNpcmNsZSkge1xyXG4vL1xyXG4vLyAgICAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gY2lyY2xlTGVuZ3RoKGNpcmNsZSk7XHJcbi8vICAgICAgICAgY2lyY2xlLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGNpcmNsZUxlbmd0aChjaXJjbGUpO1xyXG4vL1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICB2YXIgY2lyY2xlQW5pbWF0aW9uID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbi8vXHJcbi8vICAgICAgICAgdmFyIGNpcmNsZUZpbGwgPSBza2lsbC5xdWVyeVNlbGVjdG9yKCcuc2tpbGxzX19jaXJjbGUtYWJvdmUnKSxcclxuLy8gICAgICAgICAgICAgc2tpbGxQZXJjZW50ID0gc2tpbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXBlcmNlbnQnKSxcclxuLy8gICAgICAgICAgICAgbGVuZ3RoID0gY2lyY2xlTGVuZ3RoKGNpcmNsZUZpbGwpLFxyXG4vLyAgICAgICAgICAgICBwZXJjZW50ID0gbGVuZ3RoICogKDEwMCAtIHNraWxsUGVyY2VudCkgLyAxMDA7XHJcbi8vXHJcbi8vICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIGNpcmNsZUZpbGwuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IHBlcmNlbnQ7XHJcbi8vICAgICAgICAgICAgIGNpcmNsZUZpbGwuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMXMnO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBpZiAoc2tpbGxQZXJjZW50IDwgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIHNraWxsLnN0eWxlLm9wYWNpdHkgPSAwLjQ7XHJcbi8vICAgICAgICAgICAgICAgICBza2lsbC5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAxcyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LCA1MDApO1xyXG4vL1xyXG4vLyAgICAgfTtcclxuLy9cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICBbXS5zbGljZS5jYWxsKHNraWxscykuZm9yRWFjaChmdW5jdGlvbiAoc2tpbGwpIHtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIHZhciBjaXJjbGVSZWN0ID0gc2tpbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2lyY2xlUG9zID0gY2lyY2xlUmVjdC5ib3R0b20sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb24gPSBjaXJjbGVQb3MgLSB3aW5kb3dIZWlnaHQ7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoc3RhcnRBbmltYXRpb24gPD0gMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNpcmNsZUFuaW1hdGlvbihza2lsbCk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSkoKTsiLCJ2YXIgU2xpZGVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciAkY29udGFpbmVyID0gJCggJyNwcy1jb250YWluZXInICksXHJcbiAgICAgICAgJGNvbnRlbnR3cmFwcGVyID0gJGNvbnRhaW5lci5jaGlsZHJlbiggJ2Rpdi5wcy1jb250ZW50d3JhcHBlcicgKSxcclxuXHJcbiAgICAgICAgJGl0ZW1zID0gJGNvbnRlbnR3cmFwcGVyLmNoaWxkcmVuKCAnZGl2LnBzLWNvbnRlbnQnICksXHJcbiAgICAgICAgaXRlbXNDb3VudCA9ICRpdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgJHNsaWRld3JhcHBlciA9ICRjb250YWluZXIuY2hpbGRyZW4oICdkaXYucHMtc2xpZGV3cmFwcGVyJyApLFxyXG5cclxuICAgICAgICAkc2xpZGVzY29udGFpbmVyID0gJHNsaWRld3JhcHBlci5maW5kKCAnZGl2LnBzLXNsaWRlcycgKSxcclxuICAgICAgICAkc2xpZGVzID0gJHNsaWRlc2NvbnRhaW5lci5jaGlsZHJlbiggJ2RpdicgKSxcclxuICAgICAgICAvLyDRgdGC0YDQtdC70LrQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgICAgICAkbmF2cHJldiA9ICRzbGlkZXdyYXBwZXIuZmluZCggJ25hdiA+IGEucHMtcHJldicgKSxcclxuICAgICAgICAkbmF2bmV4dCA9ICRzbGlkZXdyYXBwZXIuZmluZCggJ25hdiA+IGEucHMtbmV4dCcgKSxcclxuICAgICAgICAvLyDRgtC10LrRg9GJ0LjQuSDQuNC90LTQtdC60YEg0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiDQuCDRgdC70LDQudC00L7QslxyXG4gICAgICAgIGN1cnJlbnQgPSAwLFxyXG4gICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0LXRgiDQstGL0L/QvtC70L3Rj9C10YLRgdGPINC70Lgg0YHQtdC50YfQsNGBINC/0LXRgNC10YXQvtC0XHJcbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZSxcclxuICAgICAgICAvLyDQv9C+0LTQtNC10YDQttC60LAgQ1NTINC/0LXRgNC10YXQvtC00L7QslxyXG4gICAgICAgIHN1cHBvcnQgPSBNb2Rlcm5penIuY3NzdHJhbnNpdGlvbnMsXHJcblxyXG4gICAgICAgIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcclxuICAgICAgICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgICAgICAnTW96VHJhbnNpdGlvbicgOiAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbicgOiAnb1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgICAgICAnbXNUcmFuc2l0aW9uJyA6ICdNU1RyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbicgOiAndHJhbnNpdGlvbmVuZCdcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0cmFuc0VuZEV2ZW50TmFtZSA9IHRyYW5zRW5kRXZlbnROYW1lc1sgTW9kZXJuaXpyLnByZWZpeGVkKCAndHJhbnNpdGlvbicgKSBdLFxyXG5cclxuICAgICAgICBpbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C10YDQstGL0Lkg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICAgICAgdmFyICRjdXJyZW50SXRlbSA9ICRpdGVtcy5lcSggY3VycmVudCApLFxyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZSA9ICRzbGlkZXMuZXEoIGN1cnJlbnQgKSxcclxuICAgICAgICAgICAgICAgIGluaXRDU1MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wIDogMCxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXggOiA5OTlcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkY3VycmVudEl0ZW0uY3NzKCBpbml0Q1NTICk7XHJcbiAgICAgICAgICAgICRjdXJyZW50U2xpZGUuY3NzKCBpbml0Q1NTICk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQvdCwINGE0L7QvdC1INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgICAgICAgICB1cGRhdGVOYXZJbWFnZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGluaXRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVOYXZJbWFnZXMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQuNC30L7QsdGA0LDQttC10L3QuNGPINC90LAg0YTQvtC90LUg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICAgICAgICAgIHZhciBjb25maWdQcmV2ID0gKCBjdXJyZW50ID4gMCApID8gJHNsaWRlcy5lcSggY3VycmVudCAtIDEgKS5jc3MoICdiYWNrZ3JvdW5kLWltYWdlJyApIDogJHNsaWRlcy5lcSggaXRlbXNDb3VudCAtIDEgKS5jc3MoICdiYWNrZ3JvdW5kLWltYWdlJyApLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnTmV4dCA9ICggY3VycmVudCA8IGl0ZW1zQ291bnQgLSAxICkgPyAkc2xpZGVzLmVxKCBjdXJyZW50ICsgMSApLmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnICkgOiAkc2xpZGVzLmVxKCAwICkuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScgKTtcclxuXHJcbiAgICAgICAgICAgICRuYXZwcmV2LmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnLCBjb25maWdQcmV2ICk7XHJcbiAgICAgICAgICAgICRuYXZuZXh0LmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnLCBjb25maWdOZXh0ICk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgJG5hdnByZXYub24oICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggIWlzQW5pbWF0aW5nICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZSggJ3ByZXYnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgJG5hdm5leHQub24oICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiggIWlzQW5pbWF0aW5nICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZSggJ25leHQnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgJGl0ZW1zLm9uKCB0cmFuc0VuZEV2ZW50TmFtZSwgcmVtb3ZlVHJhbnNpdGlvbiApO1xyXG4gICAgICAgICAgICAkc2xpZGVzLm9uKCB0cmFuc0VuZEV2ZW50TmFtZSwgcmVtb3ZlVHJhbnNpdGlvbiApO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3BzLW1vdmUnKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbGlkZSA9IGZ1bmN0aW9uKCBkaXIgKSB7XHJcblxyXG4gICAgICAgICAgICBpc0FuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgJGN1cnJlbnRJdGVtID0gJGl0ZW1zLmVxKCBjdXJyZW50ICksXHJcbiAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlID0gJHNsaWRlcy5lcSggY3VycmVudCApO1xyXG5cclxuICAgICAgICAgICAgaWYoIGRpciA9PT0gJ25leHQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICggY3VycmVudCA8IGl0ZW1zQ291bnQgLSAxICkgPyArK2N1cnJlbnQgOiBjdXJyZW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiggZGlyID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgKCBjdXJyZW50ID4gMCApID8gLS1jdXJyZW50IDogY3VycmVudCA9IGl0ZW1zQ291bnQgLSAxO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgJG5ld0l0ZW0gPSAkaXRlbXMuZXEoIGN1cnJlbnQgKSxcclxuICAgICAgICAgICAgICAgICRuZXdTbGlkZSA9ICRzbGlkZXMuZXEoIGN1cnJlbnQgKTtcclxuXHJcbiAgICAgICAgICAgICRuZXdJdGVtLmNzcygge1xyXG4gICAgICAgICAgICAgICAgdG9wIDogKCBkaXIgPT09ICduZXh0JyApID8gJy0xMDAlJyA6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIHpJbmRleCA6IDk5OVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAkbmV3U2xpZGUuY3NzKCB7XHJcbiAgICAgICAgICAgICAgICB0b3AgOiAoIGRpciA9PT0gJ25leHQnICkgPyAnMTAwJScgOiAnLTEwMCUnLFxyXG4gICAgICAgICAgICAgICAgekluZGV4IDogOTk5XHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICRjdXJyZW50SXRlbS5hZGRDbGFzcyggJ3BzLW1vdmUnICkuY3NzKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wIDogKCBkaXIgPT09ICduZXh0JyApID8gJzEwMCUnIDogJy0xMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXggOiAxXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hZGRDbGFzcyggJ3BzLW1vdmUnICkuY3NzKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wIDogKCBkaXIgPT09ICduZXh0JyApID8gJy0xMDAlJyA6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXggOiAxXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJG5ld0l0ZW0uYWRkQ2xhc3MoICdwcy1tb3ZlJyApLmNzcyggJ3RvcCcsIDAgKTtcclxuICAgICAgICAgICAgICAgICRuZXdTbGlkZS5hZGRDbGFzcyggJ3BzLW1vdmUnICkuY3NzKCAndG9wJywgMCApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4IENTUyDQv9C10YDQtdGF0L7QtNGLINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDRjtGC0YHRjywg0YLQvtCz0LTQsCDRhNC70LDQsyDQuNC30LzQtdC90Y/QtdC8INC90LAgZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmKCAhc3VwcG9ydCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LCAwICk7XHJcblxyXG4gICAgICAgICAgICAvLyDQtdGJ0LUg0YDQsNC3INC+0LHQvdC+0LLQu9GP0LXQvCDQuNC30L7QsdGA0LDQttC10L3QuNGPINC90LAg0YTQvtC90LUg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICAgICAgICAgIHVwZGF0ZU5hdkltYWdlcygpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGluaXQgOiBpbml0IH07XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG4vLyB2YXIgU2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHZhciBpdGVtcyA9ICQoJy53b3JrLXNsaWRlcl9faXRlbScsICcud29yay1zbGlkZXJfX2xpc3RfbmV4dCcpLFxyXG4vLyAgICAgICAgIGluZGV4ID0gMSxcclxuLy8gICAgICAgICBuZHgsXHJcbi8vICAgICAgICAgZHVyYXRpb24gPSA1MDAsXHJcbi8vICAgICAgICAgdGl0bGUgPSAkKCcud29ya19fdGl0bGUnKSxcclxuLy8gICAgICAgICBza2lsbHMgPSAkKCcud29ya19fdGVjaG5vbG9neScpLFxyXG4vLyAgICAgICAgIGltZ0NvbnRhaW5lciA9ICQoJy53b3JrX19waWMnKTtcclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIF9pbml0KCkge1xyXG4vLyAgICAgICAgIHZhciBhY3RpdmVJdGVtID0gaXRlbXMuZXEoaW5kZXgpLFxyXG4vLyAgICAgICAgICAgICBpbWdTcmMgPSBhY3RpdmVJdGVtLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxyXG4vLyAgICAgICAgICAgICBhY3RpdmVUaXRsZSA9IGFjdGl2ZUl0ZW0uZGF0YSgndGl0bGUnKSxcclxuLy8gICAgICAgICAgICAgYWN0aXZlU2xpbGwgPSBhY3RpdmVJdGVtLmRhdGEoJ3RlY2hub2xvZ3knKTtcclxuLy9cclxuLy8gICAgICAgICBpbWdDb250YWluZXIuYXR0cignc3JjJywgaW1nU3JjKTtcclxuLy8gICAgICAgICB0aXRsZS50ZXh0KGFjdGl2ZVRpdGxlKTtcclxuLy8gICAgICAgICBza2lsbHMudGV4dChhY3RpdmVTbGlsbCk7XHJcbi8vXHJcbi8vICAgICAgICAgdmFyIG5leHRJdGVtID0gJCgnLndvcmstc2xpZGVyX19pdGVtJywgJy53b3JrLXNsaWRlcl9fbGlzdF9uZXh0JykuZXEoaW5kZXggKyAxKTtcclxuLy8gICAgICAgICBuZXh0SXRlbS5hZGRDbGFzcygnd29yay1zbGlkZXJfX2l0ZW1fY3VycmVudCcpO1xyXG4vLyAgICAgICAgIHZhciBwcmV2SXRlbSA9ICQoJy53b3JrLXNsaWRlcl9faXRlbScsICcud29yay1zbGlkZXJfX2xpc3RfcHJldicpLmVxKGluZGV4IC0gMSk7XHJcbi8vICAgICAgICAgcHJldkl0ZW0uYWRkQ2xhc3MoJ3dvcmstc2xpZGVyX19pdGVtX2N1cnJlbnQnKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIGFuaW1hdGVTbGlkZShuZHgsIGNvbnRhaW5lciwgZGlyZWN0aW9uKSB7XHJcbi8vICAgICAgICAgdmFyIG5leHRJdGVtcyA9ICQoJy53b3JrLXNsaWRlcl9faXRlbScsIGNvbnRhaW5lciksXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRJdGVtID0gbmV4dEl0ZW1zLmZpbHRlcignLndvcmstc2xpZGVyX19pdGVtX2N1cnJlbnQnKSxcclxuLy8gICAgICAgICAgICAgcmVxSXRlbSA9IG5leHRJdGVtcy5lcShuZHgpO1xyXG4vLyAgICAgICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ3VwJyA/IC0xMDAgOiAxMDA7XHJcbi8vXHJcbi8vICAgICAgICAgY3VycmVudEl0ZW0uYW5pbWF0ZSh7XHJcbi8vICAgICAgICAgICAgICd0b3AnOiBkaXJlY3Rpb24gKyAnJSdcclxuLy8gICAgICAgICB9LCBkdXJhdGlvbik7XHJcbi8vXHJcbi8vICAgICAgICAgcmVxSXRlbS5hbmltYXRlKHtcclxuLy8gICAgICAgICAgICAgJ3RvcCc6IDBcclxuLy8gICAgICAgICB9LCBkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICBjdXJyZW50SXRlbS5yZW1vdmVDbGFzcygnd29yay1zbGlkZXJfX2l0ZW1fY3VycmVudCcpLmNzcygndG9wJywgLWRpcmVjdGlvbiArICclJyk7XHJcbi8vICAgICAgICAgICAgIHJlcUl0ZW0uYWRkQ2xhc3MoJ3dvcmstc2xpZGVyX19pdGVtX2N1cnJlbnQnKTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgZnVuY3Rpb24gX21vdmVOZXh0KCkge1xyXG4vLyAgICAgICAgIHZhciBjb250YWluZXIgPSAkKCcud29yay1zbGlkZXJfX2xpc3RfbmV4dCcpLFxyXG4vLyAgICAgICAgICAgICBkaXJlY3Rpb24gPSAndXAnO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmIChpbmRleCA9PSBpdGVtcy5sZW5ndGggLSAxKSB7XHJcbi8vICAgICAgICAgICAgIG5keCA9IDA7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcclxuLy8gICAgICAgICAgICAgbmR4ID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBuZHggPSBpbmRleCArIDE7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGFuaW1hdGVTbGlkZShuZHgsIGNvbnRhaW5lciwgZGlyZWN0aW9uKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIF9tb3ZlUHJldigpIHtcclxuLy8gICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnLndvcmstc2xpZGVyX19saXN0X3ByZXYnKSxcclxuLy8gICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuLy8gICAgICAgICAgICAgbmR4ID0gMDtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDw9IDApIHtcclxuLy8gICAgICAgICAgICAgbmR4ID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBuZHggPSBpbmRleCAtIDE7XHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgIGFuaW1hdGVTbGlkZShuZHgsIGNvbnRhaW5lciwgZGlyZWN0aW9uKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIF9zbGlkZVNob3coKSB7XHJcbi8vICAgICAgICAgdmFyIGZhZGVkT3V0ID0gJC5EZWZlcnJlZCgpLFxyXG4vLyAgICAgICAgICAgICBsb2FkZWQgPSAkLkRlZmVycmVkKCksXHJcbi8vICAgICAgICAgICAgIG5leHRTcmMgPSBpdGVtcy5lcShpbmRleCkuZmluZCgnaW1nJykuYXR0cignc3JjJyksXHJcbi8vICAgICAgICAgICAgIG5leHRUaXRsZSA9IGl0ZW1zLmVxKGluZGV4KS5kYXRhKCd0aXRsZScpLFxyXG4vLyAgICAgICAgICAgICBuZXh0U2tpbGxzID0gaXRlbXMuZXEoaW5kZXgpLmRhdGEoJ3RlY2hub2xvZ3knKTtcclxuLy9cclxuLy8gICAgICAgICBfbW92ZU5leHQoKTtcclxuLy8gICAgICAgICBfbW92ZVByZXYoKTtcclxuLy9cclxuLy8gICAgICAgICBpbWdDb250YWluZXIuZmFkZU91dChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRpdGxlLnNsaWRlVXAoKTtcclxuLy8gICAgICAgICAgICAgc2tpbGxzLmZhZGVPdXQoKTtcclxuLy8gICAgICAgICAgICAgZmFkZWRPdXQucmVzb2x2ZSgpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgIGZhZGVkT3V0LmRvbmUoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICB0aXRsZS50ZXh0KG5leHRUaXRsZSk7XHJcbi8vICAgICAgICAgICAgIHNraWxscy50ZXh0KG5leHRTa2lsbHMpO1xyXG4vLyAgICAgICAgICAgICBpbWdDb250YWluZXIuYXR0cignc3JjJywgbmV4dFNyYykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgICAgICBsb2FkZWQucmVzb2x2ZSgpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIGxvYWRlZC5kb25lKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgdGl0bGUuc2xpZGVEb3duKCk7XHJcbi8vICAgICAgICAgICAgIHNraWxscy5mYWRlSW4oKTtcclxuLy8gICAgICAgICAgICAgaW1nQ29udGFpbmVyLmZhZGVJbigpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBpbml0OiBfaW5pdCxcclxuLy8gICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICQoJy50b2dnbGVfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3RvZ2dsZV9fbGlua19uZXh0JykpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0b2dnbGVfX2xpbmtfcHJldicpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIF9zbGlkZVNob3coKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcbi8vICgpO1xyXG4iLCJ2YXIgd2VsY29tZVBhcmFsbGF4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgnKSxcclxuICAgICAgICAgICAgbGF5ZXJzID0gcGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICAgICAgICAgIHBhZ2VZID0gZS5wYWdlWSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcbiAgICAgICAgICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdmlkZXIgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0UG9zaXRpb24gPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRQb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoJyArIHBvc2l0aW9uWCArICdweCwnICsgcG9zaXRpb25ZICsgJ3B4LDApJztcclxuICAgICAgICAgICAgICAgIGxheWVyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XHJcbiAgICAgICAgICAgICAgICBsYXllclN0eWxlLmxlZnQgPSAnLScgKyBsZWZ0UG9zaXRpb24gKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5yaWdodCA9ICctJyArIHJpZ2h0UG9zaXRpb24gKyAncHgnO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IF9zaG93XHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsIlxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgUHJlbG9hZGVyIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5cclxuXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEZsaXBwZXIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgdmFyIGZsaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxpcHBlcicpO1xyXG4gICAgaWYoZmxpcCE9PW51bGwpe1xyXG4gICAgICAgIGZsaXBwZXIuZnJvbnQoKTtcclxuICAgICAgICBmbGlwcGVyLmJhY2soKTtcclxuICAgIH1cclxuLy9cclxuLy8gIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFBhcmFsbGF4IFNjcm9sbCB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgdmFyIGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYmcnKTtcclxuICAgIGlmKGhlcm8hPT1udWxsKXtcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICBwYXJhbGxheC5pbml0KHdTY3JvbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuLy9cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgTWFpbiBNZW51IHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIG1haW5NZW51LmluaXQoKTtcclxuLy9cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgU2Nyb2xsIEJ1dHRvbnMgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHZhciBkb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XHJcbiAgICB2YXIgdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctdXAnKTtcclxuICAgIGlmKGRvd25CdXR0b24gIT09IG51bGwpe3BhZ2VTY3JvbGwuc2Nyb2xEb3duKCk7fVxyXG4gICAgaWYodXBCdXR0b24gIT09bnVsbCl7cGFnZVNjcm9sbC5zY3JvbFVwKCk7fVxyXG5cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgU2xpZGVyIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrX19zbGlkZXInKTtcclxuLy8gaWYgKHNsaWRlciAhPT0gbnVsbCkge1xyXG4vLyAgICAgICAgIFNsaWRlci5pbml0KCk7XHJcbi8vICAgICAgICAgU2xpZGVyLm1vdmUoKTtcclxuLy8gfVxyXG4gICAgU2xpZGVyLmluaXQoKTtcclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgQmxvZyBOYXYgU2Nyb2xsIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHZhciBibG9nTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctbmF2X19saXN0Jyk7XHJcbiAgICBpZihibG9nTmF2ICE9PSBudWxsKXtcclxuICAgICAgICBkb2N1bWVudC5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmxvZ1Njcm9sbC5pbml0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEFETUlOIFRBQlMgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICBhZG1pbi5pbml0KCk7XHJcbi8vXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEdPT0dMRSBNQVAgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vXHJcbi8vXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFNLSUxMUyBBTklNQVRJT04gfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIC8vIHNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5za2lsbCcpO1xyXG4vLyAvLyBpZiAoc2tpbGxzICE9PSBudWxsKSB7XHJcbi8vIC8vICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbi8vIC8vICAgICAgICAgc2tpbGxBbmltYXRlLmluaXQoKTtcclxuLy8gLy8gICAgIH07XHJcbi8vIC8vXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEJsdXIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyB2YXIgYmxyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtZm9ybV9fYmx1cicpO1xyXG4vLyAvLyBpZihibHIgIT09IG51bGwpe1xyXG4vLyAvLyAgICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4vLyAvLyAgICAgICAgIGJsdXIuc2V0KCk7XHJcbi8vIC8vICAgICB9O1xyXG4vLyAvLyB9XHJcbi8vXHJcblxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBGb3JtcyB2YWxpZGF0aW9uIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBpZiAoZm9ybSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBpbnB1dHMgPSBmb3JtLmVsZW1lbnRzO1xyXG4gICAgICAgIHZhciBjbG9zZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvYm90LWVycm9yX19jbG9zZScpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpbnB1dHNbaV0ub25mb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWdyb3VwX2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmNsZWFyKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbG9zZUVycm9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsb3NlRXJyb3Iub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VFcnJvci5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbGlkID0gdmFsaWRhdGlvbi5pbml0KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsaWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFBhcmFsbGF4IE1vdXNlbW92ZSB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgdmFyIHBhcmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4Jyk7XHJcbiAgICBpZiAocGFyYWwgIT09IG51bGwpIHtcclxuICAgICAgICB3ZWxjb21lUGFyYWxsYXguaW5pdCgpO1xyXG4gICAgfVxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBQcmVsb2FkZXIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB2YXIgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWxvYWRlcicpO1xyXG4gICAgdmFyIHByZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcclxuICAgICAgICB2YXIgZmxpcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxpcHBlcicpO1xyXG4gICAgICAgIGlmKGZsaXBDYXJkKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmbGlwQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlM2QoMSwwLDAsIDBkZWcpJztcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmKHByZWxvYWRlcil7XHJcbiAgICAgICAgcHJlbCgpO1xyXG4gICAgfVxyXG5cclxufTsiXX0=
