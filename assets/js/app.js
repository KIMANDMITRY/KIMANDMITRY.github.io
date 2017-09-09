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
var preloader = (function () {
    var loader = document.querySelector('.preloader'),
        wrapper = document.querySelector('.welcome'),
        images = document.querySelectorAll('img'),
        flipCard = document.querySelector('.flipper'),
        procentField = document.querySelector('.preloader__percent'),
        percent = 0,
        percentStep = 100 / (images.length );

    function _loadImage(img) {
        return new Promise(function (resolve, reject) {
            img.onload = function () {
                percent = Math.ceil(percent + percentStep);
                procentField.innerHTML = percent + '%';
                resolve(img);
            };
            img.onerror = function () {
                reject(img);
            }
        });
    }
    function _showLoader(imgList) {
        var promiseImg = imgList.map(_loadImage);

        Promise.all(promiseImg)
            .then(function (value) {
                wrapper.style.display = 'block';
                percent = 100;
                procentField.innerHTML = percent + '%';
                setTimeout(function () {
                    loader.style.opacity = '0';
                    loader.style.display = 'none';
                }, 1500)
            })
            .then(function () {
                setTimeout(function () {
                    flipCard.style.transform = 'rotate3d(1,0,0, 0deg)';
                }, 1500)
            })
    }
    function _closeLoader() {
        var imgArr = Array.prototype.slice.call(images);

        _showLoader(imgArr);
    }
    return {
        init: _closeLoader
    }
})
();
var pageScroll = (function () {
    return{
        scrolDown: function () {
            var downButton = $('.arrow');
            downButton.on('click',function (e) {
                e.preventDefault();
                $('body,html').animate({scrollTop: 640}, 1500);
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

//###############################################| Preloader |########################################
var preload = document.querySelector('.preloader');
if (preload !== null) preloader.init();

//###############################################| Parallax Mousemove |###############################
var paral = document.querySelector('.parallax');
if (paral !== null) {
    welcomeParallax.init();
}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluVGFicy5qcyIsImJsb2dOYXZTY3JvbGwuanMiLCJibHVyLmpzIiwiZmxpcHBlci5qcyIsImZvcm1zVmFsaWRhdGlvbi5qcyIsImdvb2dsZU1hcC5qcyIsIm1haW4tbWVudS5qcyIsIm1vZGVybml6ZXIuanMiLCJwYXJhbGxheFNjcm9sbC5qcyIsInByZWxvYWRlci5qcyIsInNjcm9sbEJ1dHRvbnMuanMiLCJza2lsbHNBbmltYXRpb24uanMiLCJzbGlkZXIuanMiLCJ3ZWxjb21lUGFyYWxsYXguanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhZG1pbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnRhYi1jb250cm9sc19fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYi1jb250cm9sc19faXRlbScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtID0gJCgnLnRhYnNfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUG9zaXRpb24gPSBpdGVtLmluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SXRlbS5lcShpdGVtUG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJ2YXIgYmxvZ1Njcm9sbCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICBmdW5jdGlvbiBfZml4TWVudSgpIHtcclxuICAgICAgICB2YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctbmF2X19saXN0JyksXHJcbiAgICAgICAgICAgIG5hdkNvb3JkcyA9IHNpZGViYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzgwKSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZDb29yZHMgPD0gLTUwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLnRvcCA9ICcycHgnO1xyXG4gICAgICAgICAgICAgICAgbmF2LnN0eWxlLndpZHRoID0gJzIwJSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXYuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgICAgICAgICAgICAgIG5hdi5zdHlsZS53aWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgbmF2LnN0eWxlLndpZHRoID0gJ2F1dG8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogX2ZpeE1lbnVcclxuICAgIH07XHJcbn0pKCk7IiwiLy8gdmFyIGJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1mb3JtJyksXHJcbi8vICAgICAgICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWZvcm1fX2JsdXInKTtcclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgdmFyIGltZ1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzX19iZycpLm9mZnNldFdpZHRoLFxyXG4vLyAgICAgICAgICAgICAgICAgcG9zTGVmdCA9IC13cmFwcGVyLm9mZnNldExlZnQsXHJcbi8vICAgICAgICAgICAgICAgICBwb3NUb3AgPSAgLXdyYXBwZXIub2Zmc2V0VG9wLFxyXG4vLyAgICAgICAgICAgICAgICAgYmx1ckNzcyA9IGZvcm0uc3R5bGU7XHJcbi8vICAgICAgICAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFNpemUgPSBpbWdXaWR0aCArICdweCcgKyAnICcgKyAnYXV0byc7XHJcbi8vICAgICAgICAgICAgIGJsdXJDc3MuYmFja2dyb3VuZFBvc2l0aW9uID0gcG9zTGVmdCArICdweCcgKyAnICcgKyBwb3NUb3AgKyAncHgnO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSkoKTsiLCJ2YXIgZmxpcHBlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZnJvbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyksXHJcbiAgICAgICAgZmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGVyJyksXHJcbiAgICAgICAgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcmV0dXJuJyk7XHJcbiAgICBmdW5jdGlvbiBfZnJvbnRGbGlwKCl7XHJcbiAgICAgICAgZnJvbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZnJvbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZmxpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgxODBkZWcpJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2JhY2tGbGlwKCkge1xyXG4gICAgICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZmxpcC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWSgwZGVnKSc7XHJcbiAgICAgICAgICAgIGZyb250QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBmcm9udDogX2Zyb250RmxpcCxcclxuICAgICAgICBiYWNrOiBfYmFja0ZsaXBcclxuICAgIH1cclxufSkoKTsiLCJ2YXIgdmFsaWRhdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1lcnJvci1tc2cnKSxcclxuICAgICAgICBjYXB0Y2hhRXJyb3IgPSAkKCcucm9ib3QtZXJyb3InKSxcclxuICAgICAgICBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgdmFyIGVsZW1zID0gZm9ybS5lbGVtZW50cztcclxuICAgICAgICByZXR1cm4gX3ZhbGlkYXRlKGVsZW1zKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBfdmFsaWRhdGUoaW5wdXRzKSB7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dHNbaV0udGFnTmFtZSA9PT0gJ0JVVFRPTicpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgZWxlbSA9IGlucHV0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zaG93RXJyb3IoZWxlbSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWxlbS50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hlY2tlZCAmJiBlbGVtLnZhbHVlID09PSAneWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZWxlbS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGNoYUVycm9yLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBfc2hvd0Vycm9yICAoZWxlbSkge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGVtLnBhcmVudE5vZGUub2Zmc2V0VG9wICsgZWxlbS5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZ3JvdXBfZXJyb3InKTtcclxuICAgICAgICBlcnJvckZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGVycm9yRmllbGQuaW5uZXJUZXh0ID0gJ9CS0Ysg0L3QtSDQstCy0LXQu9C4ICcgKyB0ZXh0O1xyXG4gICAgICAgIGVycm9yRmllbGQuc3R5bGUudG9wID0gcG9zaXRpb24gKyAncHgnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBfY2xlYXJFcnJvcihlbGVtKSB7XHJcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWdyb3VwX2Vycm9yJyk7XHJcbiAgICAgICAgZXJyb3JGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IF9pbml0LFxyXG4gICAgICAgIGNsZWFyOiBfY2xlYXJFcnJvclxyXG4gICAgfVxyXG59KSgpOyIsInZhciBtYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7XHJcbmlmKG1hcCE9PW51bGwpe2Z1bmN0aW9uIGluaXRNYXAgKCkge1xyXG4gICAgdmFyIHBvaW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjEwMjE3NywgMjMuNzgyNTk2KSxcclxuICAgICAgICBjZW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUyLjA5NzM4MSwgIDIzLjc0NTMzNyk7XHJcblxyXG4gICAgdmFyIHN0eWxlcyA9IFt7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjNDQ0NDQ0XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2YyZjJmMlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1wibGlnaHRuZXNzXCI6NDV9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuYXJ0ZXJpYWxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMuaWNvblwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwidHJhbnNpdFwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiM5NmQ3YzhcIn0se1widmlzaWJpbGl0eVwiOlwib25cIn1dfV07XHJcblxyXG4gICAgdmFyIHN0eWxlZE1hcCA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKHN0eWxlcyxcclxuICAgICAgICB7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcclxuXHJcbiAgICB2YXIgbWFwU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY2VudGVyOiBjZW50ZXIsXHJcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgIHpvb206IDE0LFxyXG4gICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xyXG4gICAgICAgICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsICdtYXBfc3R5bGUnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCBtYXBTZXR0aW5ncyk7XHJcblxyXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIGljb246ICdhc3NldHMvaW1nL21hcF9tYXJrZXIucG5nJyxcclxuICAgICAgICBwb3NpdGlvbjogcG9pbnRlcixcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICB0aXRsZTogXCJJJ20gaGVyZSFcIixcclxuICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0VcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XHJcbiAgICBtYXAuc2V0TWFwVHlwZUlkKCdtYXBfc3R5bGUnKTtcclxufVxyXG59IiwidmFyIG1haW5NZW51ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW51ID0gJCgnLm1haW4tbmF2X193cmFwcGVyJyksXHJcbiAgICAgICAgICAgICAgICBoYW1idXJnZXIgPSAkKCcuaGFtYnVyZ2VyJyk7XHJcbiAgICAgICAgICAgIGhhbWJ1cmdlci5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBtZW51LnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIi8qIE1vZGVybml6ciAyLjYuMiAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxyXG4gKiBCdWlsZDogaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQvIy1jc3N0cmFuc2l0aW9ucy10b3VjaC1zaGl2LWNzc2NsYXNzZXMtcHJlZml4ZWQtdGVzdHN0eWxlcy10ZXN0cHJvcC10ZXN0YWxscHJvcHMtcHJlZml4ZXMtZG9tcHJlZml4ZXMtbG9hZFxyXG4gKi9cclxuO3dpbmRvdy5Nb2Rlcm5penI9ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIHooYSl7ai5jc3NUZXh0PWF9ZnVuY3Rpb24gQShhLGIpe3JldHVybiB6KG0uam9pbihhK1wiO1wiKSsoYnx8XCJcIikpfWZ1bmN0aW9uIEIoYSxiKXtyZXR1cm4gdHlwZW9mIGE9PT1ifWZ1bmN0aW9uIEMoYSxiKXtyZXR1cm4hIX4oXCJcIithKS5pbmRleE9mKGIpfWZ1bmN0aW9uIEQoYSxiKXtmb3IodmFyIGQgaW4gYSl7dmFyIGU9YVtkXTtpZighQyhlLFwiLVwiKSYmaltlXSE9PWMpcmV0dXJuIGI9PVwicGZ4XCI/ZTohMH1yZXR1cm4hMX1mdW5jdGlvbiBFKGEsYixkKXtmb3IodmFyIGUgaW4gYSl7dmFyIGY9YlthW2VdXTtpZihmIT09YylyZXR1cm4gZD09PSExP2FbZV06QihmLFwiZnVuY3Rpb25cIik/Zi5iaW5kKGR8fGIpOmZ9cmV0dXJuITF9ZnVuY3Rpb24gRihhLGIsYyl7dmFyIGQ9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGU9KGErXCIgXCIrby5qb2luKGQrXCIgXCIpK2QpLnNwbGl0KFwiIFwiKTtyZXR1cm4gQihiLFwic3RyaW5nXCIpfHxCKGIsXCJ1bmRlZmluZWRcIik/RChlLGIpOihlPShhK1wiIFwiK3Auam9pbihkK1wiIFwiKStkKS5zcGxpdChcIiBcIiksRShlLGIsYykpfXZhciBkPVwiMi42LjJcIixlPXt9LGY9ITAsZz1iLmRvY3VtZW50RWxlbWVudCxoPVwibW9kZXJuaXpyXCIsaT1iLmNyZWF0ZUVsZW1lbnQoaCksaj1pLnN0eWxlLGssbD17fS50b1N0cmluZyxtPVwiIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtIFwiLnNwbGl0KFwiIFwiKSxuPVwiV2Via2l0IE1veiBPIG1zXCIsbz1uLnNwbGl0KFwiIFwiKSxwPW4udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikscT17fSxyPXt9LHM9e30sdD1bXSx1PXQuc2xpY2Usdix3PWZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmLGksaixrLGw9Yi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG09Yi5ib2R5LG49bXx8Yi5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtpZihwYXJzZUludChkLDEwKSl3aGlsZShkLS0paj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksai5pZD1lP2VbZF06aCsoZCsxKSxsLmFwcGVuZENoaWxkKGopO3JldHVybiBmPVtcIiYjMTczO1wiLCc8c3R5bGUgaWQ9XCJzJyxoLCdcIj4nLGEsXCI8L3N0eWxlPlwiXS5qb2luKFwiXCIpLGwuaWQ9aCwobT9sOm4pLmlubmVySFRNTCs9ZixuLmFwcGVuZENoaWxkKGwpLG18fChuLnN0eWxlLmJhY2tncm91bmQ9XCJcIixuLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsaz1nLnN0eWxlLm92ZXJmbG93LGcuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixnLmFwcGVuZENoaWxkKG4pKSxpPWMobCxhKSxtP2wucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKToobi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pLGcuc3R5bGUub3ZlcmZsb3c9ayksISFpfSx4PXt9Lmhhc093blByb3BlcnR5LHk7IUIoeCxcInVuZGVmaW5lZFwiKSYmIUIoeC5jYWxsLFwidW5kZWZpbmVkXCIpP3k9ZnVuY3Rpb24oYSxiKXtyZXR1cm4geC5jYWxsKGEsYil9Onk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYiBpbiBhJiZCKGEuY29uc3RydWN0b3IucHJvdG90eXBlW2JdLFwidW5kZWZpbmVkXCIpfSxGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7aWYodHlwZW9mIGMhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciBkPXUuY2FsbChhcmd1bWVudHMsMSksZT1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBlKXt2YXIgYT1mdW5jdGlvbigpe307YS5wcm90b3R5cGU9Yy5wcm90b3R5cGU7dmFyIGY9bmV3IGEsZz1jLmFwcGx5KGYsZC5jb25jYXQodS5jYWxsKGFyZ3VtZW50cykpKTtyZXR1cm4gT2JqZWN0KGcpPT09Zz9nOmZ9cmV0dXJuIGMuYXBwbHkoYixkLmNvbmNhdCh1LmNhbGwoYXJndW1lbnRzKSkpfTtyZXR1cm4gZX0pLHEudG91Y2g9ZnVuY3Rpb24oKXt2YXIgYztyZXR1cm5cIm9udG91Y2hzdGFydFwiaW4gYXx8YS5Eb2N1bWVudFRvdWNoJiZiIGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaD9jPSEwOncoW1wiQG1lZGlhIChcIixtLmpvaW4oXCJ0b3VjaC1lbmFibGVkKSwoXCIpLGgsXCIpXCIsXCJ7I21vZGVybml6cnt0b3A6OXB4O3Bvc2l0aW9uOmFic29sdXRlfX1cIl0uam9pbihcIlwiKSxmdW5jdGlvbihhKXtjPWEub2Zmc2V0VG9wPT09OX0pLGN9LHEuY3NzdHJhbnNpdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gRihcInRyYW5zaXRpb25cIil9O2Zvcih2YXIgRyBpbiBxKXkocSxHKSYmKHY9Ry50b0xvd2VyQ2FzZSgpLGVbdl09cVtHXSgpLHQucHVzaCgoZVt2XT9cIlwiOlwibm8tXCIpK3YpKTtyZXR1cm4gZS5hZGRUZXN0PWZ1bmN0aW9uKGEsYil7aWYodHlwZW9mIGE9PVwib2JqZWN0XCIpZm9yKHZhciBkIGluIGEpeShhLGQpJiZlLmFkZFRlc3QoZCxhW2RdKTtlbHNle2E9YS50b0xvd2VyQ2FzZSgpO2lmKGVbYV0hPT1jKXJldHVybiBlO2I9dHlwZW9mIGI9PVwiZnVuY3Rpb25cIj9iKCk6Yix0eXBlb2YgZiE9XCJ1bmRlZmluZWRcIiYmZiYmKGcuY2xhc3NOYW1lKz1cIiBcIisoYj9cIlwiOlwibm8tXCIpK2EpLGVbYV09Yn1yZXR1cm4gZX0seihcIlwiKSxpPWs9bnVsbCxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGsoYSxiKXt2YXIgYz1hLmNyZWF0ZUVsZW1lbnQoXCJwXCIpLGQ9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF18fGEuZG9jdW1lbnRFbGVtZW50O3JldHVybiBjLmlubmVySFRNTD1cIng8c3R5bGU+XCIrYitcIjwvc3R5bGU+XCIsZC5pbnNlcnRCZWZvcmUoYy5sYXN0Q2hpbGQsZC5maXJzdENoaWxkKX1mdW5jdGlvbiBsKCl7dmFyIGE9ci5lbGVtZW50cztyZXR1cm4gdHlwZW9mIGE9PVwic3RyaW5nXCI/YS5zcGxpdChcIiBcIik6YX1mdW5jdGlvbiBtKGEpe3ZhciBiPWlbYVtnXV07cmV0dXJuIGJ8fChiPXt9LGgrKyxhW2ddPWgsaVtoXT1iKSxifWZ1bmN0aW9uIG4oYSxjLGYpe2N8fChjPWIpO2lmKGopcmV0dXJuIGMuY3JlYXRlRWxlbWVudChhKTtmfHwoZj1tKGMpKTt2YXIgZztyZXR1cm4gZi5jYWNoZVthXT9nPWYuY2FjaGVbYV0uY2xvbmVOb2RlKCk6ZS50ZXN0KGEpP2c9KGYuY2FjaGVbYV09Zi5jcmVhdGVFbGVtKGEpKS5jbG9uZU5vZGUoKTpnPWYuY3JlYXRlRWxlbShhKSxnLmNhbkhhdmVDaGlsZHJlbiYmIWQudGVzdChhKT9mLmZyYWcuYXBwZW5kQ2hpbGQoZyk6Z31mdW5jdGlvbiBvKGEsYyl7YXx8KGE9Yik7aWYoailyZXR1cm4gYS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yz1jfHxtKGEpO3ZhciBkPWMuZnJhZy5jbG9uZU5vZGUoKSxlPTAsZj1sKCksZz1mLmxlbmd0aDtmb3IoO2U8ZztlKyspZC5jcmVhdGVFbGVtZW50KGZbZV0pO3JldHVybiBkfWZ1bmN0aW9uIHAoYSxiKXtiLmNhY2hlfHwoYi5jYWNoZT17fSxiLmNyZWF0ZUVsZW09YS5jcmVhdGVFbGVtZW50LGIuY3JlYXRlRnJhZz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQsYi5mcmFnPWIuY3JlYXRlRnJhZygpKSxhLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oYyl7cmV0dXJuIHIuc2hpdk1ldGhvZHM/bihjLGEsYik6Yi5jcmVhdGVFbGVtKGMpfSxhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9RnVuY3Rpb24oXCJoLGZcIixcInJldHVybiBmdW5jdGlvbigpe3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7aC5zaGl2TWV0aG9kcyYmKFwiK2woKS5qb2luKCkucmVwbGFjZSgvXFx3Ky9nLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNyZWF0ZUVsZW0oYSksYi5mcmFnLmNyZWF0ZUVsZW1lbnQoYSksJ2MoXCInK2ErJ1wiKSd9KStcIik7cmV0dXJuIG59XCIpKHIsYi5mcmFnKX1mdW5jdGlvbiBxKGEpe2F8fChhPWIpO3ZhciBjPW0oYSk7cmV0dXJuIHIuc2hpdkNTUyYmIWYmJiFjLmhhc0NTUyYmKGMuaGFzQ1NTPSEhayhhLFwiYXJ0aWNsZSxhc2lkZSxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsaGVhZGVyLGhncm91cCxuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfW1hcmt7YmFja2dyb3VuZDojRkYwO2NvbG9yOiMwMDB9XCIpKSxqfHxwKGEsYyksYX12YXIgYz1hLmh0bWw1fHx7fSxkPS9ePHxeKD86YnV0dG9ufG1hcHxzZWxlY3R8dGV4dGFyZWF8b2JqZWN0fGlmcmFtZXxvcHRpb258b3B0Z3JvdXApJC9pLGU9L14oPzphfGJ8Y29kZXxkaXZ8ZmllbGRzZXR8aDF8aDJ8aDN8aDR8aDV8aDZ8aXxsYWJlbHxsaXxvbHxwfHF8c3BhbnxzdHJvbmd8c3R5bGV8dGFibGV8dGJvZHl8dGR8dGh8dHJ8dWwpJC9pLGYsZz1cIl9odG1sNXNoaXZcIixoPTAsaT17fSxqOyhmdW5jdGlvbigpe3RyeXt2YXIgYT1iLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2EuaW5uZXJIVE1MPVwiPHh5ej48L3h5ej5cIixmPVwiaGlkZGVuXCJpbiBhLGo9YS5jaGlsZE5vZGVzLmxlbmd0aD09MXx8ZnVuY3Rpb24oKXtiLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZhciBhPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO3JldHVybiB0eXBlb2YgYS5jbG9uZU5vZGU9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9PVwidW5kZWZpbmVkXCJ8fHR5cGVvZiBhLmNyZWF0ZUVsZW1lbnQ9PVwidW5kZWZpbmVkXCJ9KCl9Y2F0Y2goYyl7Zj0hMCxqPSEwfX0pKCk7dmFyIHI9e2VsZW1lbnRzOmMuZWxlbWVudHN8fFwiYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGZpZ2NhcHRpb24gZmlndXJlIGZvb3RlciBoZWFkZXIgaGdyb3VwIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwcm9ncmVzcyBzZWN0aW9uIHN1bW1hcnkgdGltZSB2aWRlb1wiLHNoaXZDU1M6Yy5zaGl2Q1NTIT09ITEsc3VwcG9ydHNVbmtub3duRWxlbWVudHM6aixzaGl2TWV0aG9kczpjLnNoaXZNZXRob2RzIT09ITEsdHlwZTpcImRlZmF1bHRcIixzaGl2RG9jdW1lbnQ6cSxjcmVhdGVFbGVtZW50Om4sY3JlYXRlRG9jdW1lbnRGcmFnbWVudDpvfTthLmh0bWw1PXIscShiKX0odGhpcyxiKSxlLl92ZXJzaW9uPWQsZS5fcHJlZml4ZXM9bSxlLl9kb21QcmVmaXhlcz1wLGUuX2Nzc29tUHJlZml4ZXM9byxlLnRlc3RQcm9wPWZ1bmN0aW9uKGEpe3JldHVybiBEKFthXSl9LGUudGVzdEFsbFByb3BzPUYsZS50ZXN0U3R5bGVzPXcsZS5wcmVmaXhlZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI/RihhLGIsYyk6RihhLFwicGZ4XCIpfSxnLmNsYXNzTmFtZT1nLmNsYXNzTmFtZS5yZXBsYWNlKC8oXnxcXHMpbm8tanMoXFxzfCQpLyxcIiQxJDJcIikrKGY/XCIganMgXCIrdC5qb2luKFwiIFwiKTpcIlwiKSxlfSh0aGlzLHRoaXMuZG9jdW1lbnQpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09by5jYWxsKGEpfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEpe3JldHVybiFhfHxcImxvYWRlZFwiPT1hfHxcImNvbXBsZXRlXCI9PWF8fFwidW5pbml0aWFsaXplZFwiPT1hfWZ1bmN0aW9uIGgoKXt2YXIgYT1wLnNoaWZ0KCk7cT0xLGE/YS50P20oZnVuY3Rpb24oKXsoXCJjXCI9PWEudD9CLmluamVjdENzczpCLmluamVjdEpzKShhLnMsMCxhLmEsYS54LGEuZSwxKX0sMCk6KGEoKSxoKCkpOnE9MH1mdW5jdGlvbiBpKGEsYyxkLGUsZixpLGope2Z1bmN0aW9uIGsoYil7aWYoIW8mJmcobC5yZWFkeVN0YXRlKSYmKHUucj1vPTEsIXEmJmgoKSxsLm9ubG9hZD1sLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGIpKXtcImltZ1wiIT1hJiZtKGZ1bmN0aW9uKCl7dC5yZW1vdmVDaGlsZChsKX0sNTApO2Zvcih2YXIgZCBpbiB5W2NdKXlbY10uaGFzT3duUHJvcGVydHkoZCkmJnlbY11bZF0ub25sb2FkKCl9fXZhciBqPWp8fEIuZXJyb3JUaW1lb3V0LGw9Yi5jcmVhdGVFbGVtZW50KGEpLG89MCxyPTAsdT17dDpkLHM6YyxlOmYsYTppLHg6an07MT09PXlbY10mJihyPTEseVtjXT1bXSksXCJvYmplY3RcIj09YT9sLmRhdGE9YzoobC5zcmM9YyxsLnR5cGU9YSksbC53aWR0aD1sLmhlaWdodD1cIjBcIixsLm9uZXJyb3I9bC5vbmxvYWQ9bC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtrLmNhbGwodGhpcyxyKX0scC5zcGxpY2UoZSwwLHUpLFwiaW1nXCIhPWEmJihyfHwyPT09eVtjXT8odC5pbnNlcnRCZWZvcmUobCxzP251bGw6biksbShrLGopKTp5W2NdLnB1c2gobCkpfWZ1bmN0aW9uIGooYSxiLGMsZCxmKXtyZXR1cm4gcT0wLGI9Ynx8XCJqXCIsZShhKT9pKFwiY1wiPT1iP3Y6dSxhLGIsdGhpcy5pKyssYyxkLGYpOihwLnNwbGljZSh0aGlzLmkrKywwLGEpLDE9PXAubGVuZ3RoJiZoKCkpLHRoaXN9ZnVuY3Rpb24gaygpe3ZhciBhPUI7cmV0dXJuIGEubG9hZGVyPXtsb2FkOmosaTowfSxhfXZhciBsPWIuZG9jdW1lbnRFbGVtZW50LG09YS5zZXRUaW1lb3V0LG49Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxvPXt9LnRvU3RyaW5nLHA9W10scT0wLHI9XCJNb3pBcHBlYXJhbmNlXCJpbiBsLnN0eWxlLHM9ciYmISFiLmNyZWF0ZVJhbmdlKCkuY29tcGFyZU5vZGUsdD1zP2w6bi5wYXJlbnROb2RlLGw9YS5vcGVyYSYmXCJbb2JqZWN0IE9wZXJhXVwiPT1vLmNhbGwoYS5vcGVyYSksbD0hIWIuYXR0YWNoRXZlbnQmJiFsLHU9cj9cIm9iamVjdFwiOmw/XCJzY3JpcHRcIjpcImltZ1wiLHY9bD9cInNjcmlwdFwiOnUsdz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihhKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PW8uY2FsbChhKX0seD1bXSx5PXt9LHo9e3RpbWVvdXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi5sZW5ndGgmJihhLnRpbWVvdXQ9YlswXSksYX19LEEsQjtCPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGE9YS5zcGxpdChcIiFcIiksYj14Lmxlbmd0aCxjPWEucG9wKCksZD1hLmxlbmd0aCxjPXt1cmw6YyxvcmlnVXJsOmMscHJlZml4ZXM6YX0sZSxmLGc7Zm9yKGY9MDtmPGQ7ZisrKWc9YVtmXS5zcGxpdChcIj1cIiksKGU9eltnLnNoaWZ0KCldKSYmKGM9ZShjLGcpKTtmb3IoZj0wO2Y8YjtmKyspYz14W2ZdKGMpO3JldHVybiBjfWZ1bmN0aW9uIGcoYSxlLGYsZyxoKXt2YXIgaT1iKGEpLGo9aS5hdXRvQ2FsbGJhY2s7aS51cmwuc3BsaXQoXCIuXCIpLnBvcCgpLnNwbGl0KFwiP1wiKS5zaGlmdCgpLGkuYnlwYXNzfHwoZSYmKGU9ZChlKT9lOmVbYV18fGVbZ118fGVbYS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdXSksaS5pbnN0ZWFkP2kuaW5zdGVhZChhLGUsZixnLGgpOih5W2kudXJsXT9pLm5vZXhlYz0hMDp5W2kudXJsXT0xLGYubG9hZChpLnVybCxpLmZvcmNlQ1NTfHwhaS5mb3JjZUpTJiZcImNzc1wiPT1pLnVybC5zcGxpdChcIi5cIikucG9wKCkuc3BsaXQoXCI/XCIpLnNoaWZ0KCk/XCJjXCI6YyxpLm5vZXhlYyxpLmF0dHJzLGkudGltZW91dCksKGQoZSl8fGQoaikpJiZmLmxvYWQoZnVuY3Rpb24oKXtrKCksZSYmZShpLm9yaWdVcmwsaCxnKSxqJiZqKGkub3JpZ1VybCxoLGcpLHlbaS51cmxdPTJ9KSkpfWZ1bmN0aW9uIGgoYSxiKXtmdW5jdGlvbiBjKGEsYyl7aWYoYSl7aWYoZShhKSljfHwoaj1mdW5jdGlvbigpe3ZhciBhPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtrLmFwcGx5KHRoaXMsYSksbCgpfSksZyhhLGosYiwwLGgpO2Vsc2UgaWYoT2JqZWN0KGEpPT09YSlmb3IobiBpbiBtPWZ1bmN0aW9uKCl7dmFyIGI9MCxjO2ZvcihjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmYisrO3JldHVybiBifSgpLGEpYS5oYXNPd25Qcm9wZXJ0eShuKSYmKCFjJiYhLS1tJiYoZChqKT9qPWZ1bmN0aW9uKCl7dmFyIGE9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2suYXBwbHkodGhpcyxhKSxsKCl9Ompbbl09ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2EmJmEuYXBwbHkodGhpcyxiKSxsKCl9fShrW25dKSksZyhhW25dLGosYixuLGgpKX1lbHNlIWMmJmwoKX12YXIgaD0hIWEudGVzdCxpPWEubG9hZHx8YS5ib3RoLGo9YS5jYWxsYmFja3x8ZixrPWosbD1hLmNvbXBsZXRlfHxmLG0sbjtjKGg/YS55ZXA6YS5ub3BlLCEhaSksaSYmYyhpKX12YXIgaSxqLGw9dGhpcy55ZXBub3BlLmxvYWRlcjtpZihlKGEpKWcoYSwwLGwsMCk7ZWxzZSBpZih3KGEpKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspaj1hW2ldLGUoaik/ZyhqLDAsbCwwKTp3KGopP0Ioaik6T2JqZWN0KGopPT09aiYmaChqLGwpO2Vsc2UgT2JqZWN0KGEpPT09YSYmaChhLGwpfSxCLmFkZFByZWZpeD1mdW5jdGlvbihhLGIpe3pbYV09Yn0sQi5hZGRGaWx0ZXI9ZnVuY3Rpb24oYSl7eC5wdXNoKGEpfSxCLmVycm9yVGltZW91dD0xZTQsbnVsbD09Yi5yZWFkeVN0YXRlJiZiLmFkZEV2ZW50TGlzdGVuZXImJihiLnJlYWR5U3RhdGU9XCJsb2FkaW5nXCIsYi5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEE9ZnVuY3Rpb24oKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQSwwKSxiLnJlYWR5U3RhdGU9XCJjb21wbGV0ZVwifSwwKSksYS55ZXBub3BlPWsoKSxhLnllcG5vcGUuZXhlY3V0ZVN0YWNrPWgsYS55ZXBub3BlLmluamVjdEpzPWZ1bmN0aW9uKGEsYyxkLGUsaSxqKXt2YXIgaz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksbCxvLGU9ZXx8Qi5lcnJvclRpbWVvdXQ7ay5zcmM9YTtmb3IobyBpbiBkKWsuc2V0QXR0cmlidXRlKG8sZFtvXSk7Yz1qP2g6Y3x8ZixrLm9ucmVhZHlzdGF0ZWNoYW5nZT1rLm9ubG9hZD1mdW5jdGlvbigpeyFsJiZnKGsucmVhZHlTdGF0ZSkmJihsPTEsYygpLGsub25sb2FkPWsub25yZWFkeXN0YXRlY2hhbmdlPW51bGwpfSxtKGZ1bmN0aW9uKCl7bHx8KGw9MSxjKDEpKX0sZSksaT9rLm9ubG9hZCgpOm4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoayxuKX0sYS55ZXBub3BlLmluamVjdENzcz1mdW5jdGlvbihhLGMsZCxlLGcsaSl7dmFyIGU9Yi5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxqLGM9aT9oOmN8fGY7ZS5ocmVmPWEsZS5yZWw9XCJzdHlsZXNoZWV0XCIsZS50eXBlPVwidGV4dC9jc3NcIjtmb3IoaiBpbiBkKWUuc2V0QXR0cmlidXRlKGosZFtqXSk7Z3x8KG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSxuKSxtKGMsMCkpfX0odGhpcyxkb2N1bWVudCksTW9kZXJuaXpyLmxvYWQ9ZnVuY3Rpb24oKXt5ZXBub3BlLmFwcGx5KHdpbmRvdyxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKSl9OyIsInZhciBwYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYmcnKTtcclxuICAgIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKTtcclxuICAgIHZhciB1c2VyQmdQaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10aXRsZS1waWMnKTtcclxuICAgIHJldHVybntcclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssd2luZG93U2Nyb2xsLHN0cmFmZUFtb3VudCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsIC8gLXN0cmFmZUFtb3VudCArICclJztcclxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgKyBzdHJhZmUgKyAnLDApJztcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGJnLHdTY3JvbGwsMzApO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodXNlckJnUGljLHdTY3JvbGwsNyk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh1c2VyLHdTY3JvbGwsMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsInZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKSxcclxuICAgICAgICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUnKSxcclxuICAgICAgICBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKSxcclxuICAgICAgICBmbGlwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGVyJyksXHJcbiAgICAgICAgcHJvY2VudEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fcGVyY2VudCcpLFxyXG4gICAgICAgIHBlcmNlbnQgPSAwLFxyXG4gICAgICAgIHBlcmNlbnRTdGVwID0gMTAwIC8gKGltYWdlcy5sZW5ndGggKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfbG9hZEltYWdlKGltZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gTWF0aC5jZWlsKHBlcmNlbnQgKyBwZXJjZW50U3RlcCk7XHJcbiAgICAgICAgICAgICAgICBwcm9jZW50RmllbGQuaW5uZXJIVE1MID0gcGVyY2VudCArICclJztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX3Nob3dMb2FkZXIoaW1nTGlzdCkge1xyXG4gICAgICAgIHZhciBwcm9taXNlSW1nID0gaW1nTGlzdC5tYXAoX2xvYWRJbWFnZSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VJbWcpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICBwcm9jZW50RmllbGQuaW5uZXJIVE1MID0gcGVyY2VudCArICclJztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSwgMTUwMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcENhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDEsMCwwLCAwZGVnKSc7XHJcbiAgICAgICAgICAgICAgICB9LCAxNTAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gX2Nsb3NlTG9hZGVyKCkge1xyXG4gICAgICAgIHZhciBpbWdBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpbWFnZXMpO1xyXG5cclxuICAgICAgICBfc2hvd0xvYWRlcihpbWdBcnIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBfY2xvc2VMb2FkZXJcclxuICAgIH1cclxufSlcclxuKCk7IiwidmFyIHBhZ2VTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHNjcm9sRG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZG93bkJ1dHRvbiA9ICQoJy5hcnJvdycpO1xyXG4gICAgICAgICAgICBkb3duQnV0dG9uLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogNjQwfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbFVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB1cEJ1dHRvbiA9ICQoJy5hcnJvdy11cCcpO1xyXG4gICAgICAgICAgICB1cEJ1dHRvbi5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAxMjAwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwiLy8gdmFyIHNraWxsQW5pbWF0ZSA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB2YXIgc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNraWxsJyksXHJcbi8vICAgICAgICAgY2lyY2xlc0Fib3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNraWxsc19fY2lyY2xlLWFib3ZlJyksXHJcbi8vICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4vLyAgICAgdmFyIGNpcmNsZUxlbmd0aCA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcclxuLy8gICAgICAgICB2YXIgY2lyY2xlUmFkaXVzID0gY2lyY2xlLmdldEF0dHJpYnV0ZSgncicpLFxyXG4vLyAgICAgICAgICAgICBjaXJjbGVMZW5ndGggPSAyICogTWF0aC5QSSAqIGNpcmNsZVJhZGl1cztcclxuLy8gICAgICAgICByZXR1cm4gY2lyY2xlTGVuZ3RoO1xyXG4vLyAgICAgfTtcclxuLy8gICAgIFtdLnNsaWNlLmNhbGwoY2lyY2xlc0Fib3ZlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaXJjbGUpIHtcclxuLy9cclxuLy8gICAgICAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGNpcmNsZUxlbmd0aChjaXJjbGUpO1xyXG4vLyAgICAgICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBjaXJjbGVMZW5ndGgoY2lyY2xlKTtcclxuLy9cclxuLy8gICAgIH0pO1xyXG4vLyAgICAgdmFyIGNpcmNsZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4vL1xyXG4vLyAgICAgICAgIHZhciBjaXJjbGVGaWxsID0gc2tpbGwucXVlcnlTZWxlY3RvcignLnNraWxsc19fY2lyY2xlLWFib3ZlJyksXHJcbi8vICAgICAgICAgICAgIHNraWxsUGVyY2VudCA9IHNraWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJjZW50JyksXHJcbi8vICAgICAgICAgICAgIGxlbmd0aCA9IGNpcmNsZUxlbmd0aChjaXJjbGVGaWxsKSxcclxuLy8gICAgICAgICAgICAgcGVyY2VudCA9IGxlbmd0aCAqICgxMDAgLSBza2lsbFBlcmNlbnQpIC8gMTAwO1xyXG4vL1xyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICBjaXJjbGVGaWxsLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwZXJjZW50O1xyXG4vLyAgICAgICAgICAgICBjaXJjbGVGaWxsLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDFzJztcclxuLy9cclxuLy8gICAgICAgICAgICAgaWYgKHNraWxsUGVyY2VudCA8IDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBza2lsbC5zdHlsZS5vcGFjaXR5ID0gMC40O1xyXG4vLyAgICAgICAgICAgICAgICAgc2tpbGwuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMXMnO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSwgNTAwKTtcclxuLy9cclxuLy8gICAgIH07XHJcbi8vXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgW10uc2xpY2UuY2FsbChza2lsbHMpLmZvckVhY2goZnVuY3Rpb24gKHNraWxsKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICB2YXIgY2lyY2xlUmVjdCA9IHNraWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNpcmNsZVBvcyA9IGNpcmNsZVJlY3QuYm90dG9tLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uID0gY2lyY2xlUG9zIC0gd2luZG93SGVpZ2h0O1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0QW5pbWF0aW9uIDw9IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltYXRpb24oc2tpbGwpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0pKCk7IiwidmFyIFNsaWRlciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoICcjcHMtY29udGFpbmVyJyApLFxyXG4gICAgICAgICRjb250ZW50d3JhcHBlciA9ICRjb250YWluZXIuY2hpbGRyZW4oICdkaXYucHMtY29udGVudHdyYXBwZXInICksXHJcblxyXG4gICAgICAgICRpdGVtcyA9ICRjb250ZW50d3JhcHBlci5jaGlsZHJlbiggJ2Rpdi5wcy1jb250ZW50JyApLFxyXG4gICAgICAgIGl0ZW1zQ291bnQgPSAkaXRlbXMubGVuZ3RoLFxyXG4gICAgICAgICRzbGlkZXdyYXBwZXIgPSAkY29udGFpbmVyLmNoaWxkcmVuKCAnZGl2LnBzLXNsaWRld3JhcHBlcicgKSxcclxuXHJcbiAgICAgICAgJHNsaWRlc2NvbnRhaW5lciA9ICRzbGlkZXdyYXBwZXIuZmluZCggJ2Rpdi5wcy1zbGlkZXMnICksXHJcbiAgICAgICAgJHNsaWRlcyA9ICRzbGlkZXNjb250YWluZXIuY2hpbGRyZW4oICdkaXYnICksXHJcbiAgICAgICAgLy8g0YHRgtGA0LXQu9C60Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICAgICAgJG5hdnByZXYgPSAkc2xpZGV3cmFwcGVyLmZpbmQoICduYXYgPiBhLnBzLXByZXYnICksXHJcbiAgICAgICAgJG5hdm5leHQgPSAkc2xpZGV3cmFwcGVyLmZpbmQoICduYXYgPiBhLnBzLW5leHQnICksXHJcbiAgICAgICAgLy8g0YLQtdC60YPRidC40Lkg0LjQvdC00LXQutGBINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0Lgg0YHQu9Cw0LnQtNC+0LJcclxuICAgICAgICBjdXJyZW50ID0gMCxcclxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10YIg0LLRi9C/0L7Qu9C90Y/QtdGC0YHRjyDQu9C4INGB0LXQudGH0LDRgSDQv9C10YDQtdGF0L7QtFxyXG4gICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2UsXHJcbiAgICAgICAgLy8g0L/QvtC00LTQtdGA0LbQutCwIENTUyDQv9C10YDQtdGF0L7QtNC+0LJcclxuICAgICAgICBzdXBwb3J0ID0gTW9kZXJuaXpyLmNzc3RyYW5zaXRpb25zLFxyXG5cclxuICAgICAgICB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XHJcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJyA6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ01velRyYW5zaXRpb24nIDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnT1RyYW5zaXRpb24nIDogJ29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ21zVHJhbnNpdGlvbicgOiAnTVNUcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nIDogJ3RyYW5zaXRpb25lbmQnXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdHJhbnNFbmRFdmVudE5hbWUgPSB0cmFuc0VuZEV2ZW50TmFtZXNbIE1vZGVybml6ci5wcmVmaXhlZCggJ3RyYW5zaXRpb24nICkgXSxcclxuXHJcbiAgICAgICAgaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLy8g0L/QtdGA0LLRi9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgIHZhciAkY3VycmVudEl0ZW0gPSAkaXRlbXMuZXEoIGN1cnJlbnQgKSxcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUgPSAkc2xpZGVzLmVxKCBjdXJyZW50ICksXHJcbiAgICAgICAgICAgICAgICBpbml0Q1NTID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4IDogOTk5XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJGN1cnJlbnRJdGVtLmNzcyggaW5pdENTUyApO1xyXG4gICAgICAgICAgICAkY3VycmVudFNsaWRlLmNzcyggaW5pdENTUyApO1xyXG5cclxuICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDRhNC+0L3QtSDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgICAgICAgICAgdXBkYXRlTmF2SW1hZ2VzKCk7XHJcblxyXG4gICAgICAgICAgICBpbml0RXZlbnRzKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlTmF2SW1hZ2VzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQvdCwINGE0L7QvdC1INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgICAgICAgICB2YXIgY29uZmlnUHJldiA9ICggY3VycmVudCA+IDAgKSA/ICRzbGlkZXMuZXEoIGN1cnJlbnQgLSAxICkuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScgKSA6ICRzbGlkZXMuZXEoIGl0ZW1zQ291bnQgLSAxICkuY3NzKCAnYmFja2dyb3VuZC1pbWFnZScgKSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ05leHQgPSAoIGN1cnJlbnQgPCBpdGVtc0NvdW50IC0gMSApID8gJHNsaWRlcy5lcSggY3VycmVudCArIDEgKS5jc3MoICdiYWNrZ3JvdW5kLWltYWdlJyApIDogJHNsaWRlcy5lcSggMCApLmNzcyggJ2JhY2tncm91bmQtaW1hZ2UnICk7XHJcblxyXG4gICAgICAgICAgICAkbmF2cHJldi5jc3MoICdiYWNrZ3JvdW5kLWltYWdlJywgY29uZmlnUHJldiApO1xyXG4gICAgICAgICAgICAkbmF2bmV4dC5jc3MoICdiYWNrZ3JvdW5kLWltYWdlJywgY29uZmlnTmV4dCApO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGluaXRFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICRuYXZwcmV2Lm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICFpc0FuaW1hdGluZyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUoICdwcmV2JyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICRuYXZuZXh0Lm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICFpc0FuaW1hdGluZyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUoICduZXh0JyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICRpdGVtcy5vbiggdHJhbnNFbmRFdmVudE5hbWUsIHJlbW92ZVRyYW5zaXRpb24gKTtcclxuICAgICAgICAgICAgJHNsaWRlcy5vbiggdHJhbnNFbmRFdmVudE5hbWUsIHJlbW92ZVRyYW5zaXRpb24gKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdwcy1tb3ZlJyk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2xpZGUgPSBmdW5jdGlvbiggZGlyICkge1xyXG5cclxuICAgICAgICAgICAgaXNBbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyICRjdXJyZW50SXRlbSA9ICRpdGVtcy5lcSggY3VycmVudCApLFxyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZSA9ICRzbGlkZXMuZXEoIGN1cnJlbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBkaXIgPT09ICduZXh0JyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAoIGN1cnJlbnQgPCBpdGVtc0NvdW50IC0gMSApID8gKytjdXJyZW50IDogY3VycmVudCA9IDA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIGRpciA9PT0gJ3ByZXYnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICggY3VycmVudCA+IDAgKSA/IC0tY3VycmVudCA6IGN1cnJlbnQgPSBpdGVtc0NvdW50IC0gMTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyICRuZXdJdGVtID0gJGl0ZW1zLmVxKCBjdXJyZW50ICksXHJcbiAgICAgICAgICAgICAgICAkbmV3U2xpZGUgPSAkc2xpZGVzLmVxKCBjdXJyZW50ICk7XHJcblxyXG4gICAgICAgICAgICAkbmV3SXRlbS5jc3MoIHtcclxuICAgICAgICAgICAgICAgIHRvcCA6ICggZGlyID09PSAnbmV4dCcgKSA/ICctMTAwJScgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXggOiA5OTlcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgJG5ld1NsaWRlLmNzcygge1xyXG4gICAgICAgICAgICAgICAgdG9wIDogKCBkaXIgPT09ICduZXh0JyApID8gJzEwMCUnIDogJy0xMDAlJyxcclxuICAgICAgICAgICAgICAgIHpJbmRleCA6IDk5OVxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkY3VycmVudEl0ZW0uYWRkQ2xhc3MoICdwcy1tb3ZlJyApLmNzcygge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA6ICggZGlyID09PSAnbmV4dCcgKSA/ICcxMDAlJyA6ICctMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4IDogMVxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYWRkQ2xhc3MoICdwcy1tb3ZlJyApLmNzcygge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA6ICggZGlyID09PSAnbmV4dCcgKSA/ICctMTAwJScgOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4IDogMVxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICRuZXdJdGVtLmFkZENsYXNzKCAncHMtbW92ZScgKS5jc3MoICd0b3AnLCAwICk7XHJcbiAgICAgICAgICAgICAgICAkbmV3U2xpZGUuYWRkQ2xhc3MoICdwcy1tb3ZlJyApLmNzcyggJ3RvcCcsIDAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCBDU1Mg0L/QtdGA0LXRhdC+0LTRiyDQvdC1INC/0L7QtNC00LXRgNC20LjQstCw0Y7RgtGB0Y8sINGC0L7Qs9C00LAg0YTQu9Cw0LMg0LjQt9C80LXQvdGP0LXQvCDQvdCwIGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpZiggIXN1cHBvcnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSwgMCApO1xyXG5cclxuICAgICAgICAgICAgLy8g0LXRidC1INGA0LDQtyDQvtCx0L3QvtCy0LvRj9C10Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDQvdCwINGE0L7QvdC1INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgICAgICAgICB1cGRhdGVOYXZJbWFnZXMoKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBpbml0IDogaW5pdCB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuLy8gdmFyIFNsaWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB2YXIgaXRlbXMgPSAkKCcud29yay1zbGlkZXJfX2l0ZW0nLCAnLndvcmstc2xpZGVyX19saXN0X25leHQnKSxcclxuLy8gICAgICAgICBpbmRleCA9IDEsXHJcbi8vICAgICAgICAgbmR4LFxyXG4vLyAgICAgICAgIGR1cmF0aW9uID0gNTAwLFxyXG4vLyAgICAgICAgIHRpdGxlID0gJCgnLndvcmtfX3RpdGxlJyksXHJcbi8vICAgICAgICAgc2tpbGxzID0gJCgnLndvcmtfX3RlY2hub2xvZ3knKSxcclxuLy8gICAgICAgICBpbWdDb250YWluZXIgPSAkKCcud29ya19fcGljJyk7XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBfaW5pdCgpIHtcclxuLy8gICAgICAgICB2YXIgYWN0aXZlSXRlbSA9IGl0ZW1zLmVxKGluZGV4KSxcclxuLy8gICAgICAgICAgICAgaW1nU3JjID0gYWN0aXZlSXRlbS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcclxuLy8gICAgICAgICAgICAgYWN0aXZlVGl0bGUgPSBhY3RpdmVJdGVtLmRhdGEoJ3RpdGxlJyksXHJcbi8vICAgICAgICAgICAgIGFjdGl2ZVNsaWxsID0gYWN0aXZlSXRlbS5kYXRhKCd0ZWNobm9sb2d5Jyk7XHJcbi8vXHJcbi8vICAgICAgICAgaW1nQ29udGFpbmVyLmF0dHIoJ3NyYycsIGltZ1NyYyk7XHJcbi8vICAgICAgICAgdGl0bGUudGV4dChhY3RpdmVUaXRsZSk7XHJcbi8vICAgICAgICAgc2tpbGxzLnRleHQoYWN0aXZlU2xpbGwpO1xyXG4vL1xyXG4vLyAgICAgICAgIHZhciBuZXh0SXRlbSA9ICQoJy53b3JrLXNsaWRlcl9faXRlbScsICcud29yay1zbGlkZXJfX2xpc3RfbmV4dCcpLmVxKGluZGV4ICsgMSk7XHJcbi8vICAgICAgICAgbmV4dEl0ZW0uYWRkQ2xhc3MoJ3dvcmstc2xpZGVyX19pdGVtX2N1cnJlbnQnKTtcclxuLy8gICAgICAgICB2YXIgcHJldkl0ZW0gPSAkKCcud29yay1zbGlkZXJfX2l0ZW0nLCAnLndvcmstc2xpZGVyX19saXN0X3ByZXYnKS5lcShpbmRleCAtIDEpO1xyXG4vLyAgICAgICAgIHByZXZJdGVtLmFkZENsYXNzKCd3b3JrLXNsaWRlcl9faXRlbV9jdXJyZW50Jyk7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBhbmltYXRlU2xpZGUobmR4LCBjb250YWluZXIsIGRpcmVjdGlvbikge1xyXG4vLyAgICAgICAgIHZhciBuZXh0SXRlbXMgPSAkKCcud29yay1zbGlkZXJfX2l0ZW0nLCBjb250YWluZXIpLFxyXG4vLyAgICAgICAgICAgICBjdXJyZW50SXRlbSA9IG5leHRJdGVtcy5maWx0ZXIoJy53b3JrLXNsaWRlcl9faXRlbV9jdXJyZW50JyksXHJcbi8vICAgICAgICAgICAgIHJlcUl0ZW0gPSBuZXh0SXRlbXMuZXEobmR4KTtcclxuLy8gICAgICAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICd1cCcgPyAtMTAwIDogMTAwO1xyXG4vL1xyXG4vLyAgICAgICAgIGN1cnJlbnRJdGVtLmFuaW1hdGUoe1xyXG4vLyAgICAgICAgICAgICAndG9wJzogZGlyZWN0aW9uICsgJyUnXHJcbi8vICAgICAgICAgfSwgZHVyYXRpb24pO1xyXG4vL1xyXG4vLyAgICAgICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbi8vICAgICAgICAgICAgICd0b3AnOiAwXHJcbi8vICAgICAgICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgY3VycmVudEl0ZW0ucmVtb3ZlQ2xhc3MoJ3dvcmstc2xpZGVyX19pdGVtX2N1cnJlbnQnKS5jc3MoJ3RvcCcsIC1kaXJlY3Rpb24gKyAnJScpO1xyXG4vLyAgICAgICAgICAgICByZXFJdGVtLmFkZENsYXNzKCd3b3JrLXNsaWRlcl9faXRlbV9jdXJyZW50Jyk7XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGZ1bmN0aW9uIF9tb3ZlTmV4dCgpIHtcclxuLy8gICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnLndvcmstc2xpZGVyX19saXN0X25leHQnKSxcclxuLy8gICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3VwJztcclxuLy9cclxuLy8gICAgICAgICBpZiAoaW5kZXggPT0gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4vLyAgICAgICAgICAgICBuZHggPSAwO1xyXG4vLyAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwKSB7XHJcbi8vICAgICAgICAgICAgIG5keCA9IGl0ZW1zLmxlbmd0aCAtIDE7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgbmR4ID0gaW5kZXggKyAxO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBhbmltYXRlU2xpZGUobmR4LCBjb250YWluZXIsIGRpcmVjdGlvbik7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBfbW92ZVByZXYoKSB7XHJcbi8vICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy53b3JrLXNsaWRlcl9fbGlzdF9wcmV2JyksXHJcbi8vICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdkb3duJztcclxuLy9cclxuLy8gICAgICAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxKSB7XHJcbi8vICAgICAgICAgICAgIG5keCA9IDA7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8PSAwKSB7XHJcbi8vICAgICAgICAgICAgIG5keCA9IGl0ZW1zLmxlbmd0aCAtIDE7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgbmR4ID0gaW5kZXggLSAxO1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICBhbmltYXRlU2xpZGUobmR4LCBjb250YWluZXIsIGRpcmVjdGlvbik7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBfc2xpZGVTaG93KCkge1xyXG4vLyAgICAgICAgIHZhciBmYWRlZE91dCA9ICQuRGVmZXJyZWQoKSxcclxuLy8gICAgICAgICAgICAgbG9hZGVkID0gJC5EZWZlcnJlZCgpLFxyXG4vLyAgICAgICAgICAgICBuZXh0U3JjID0gaXRlbXMuZXEoaW5kZXgpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxyXG4vLyAgICAgICAgICAgICBuZXh0VGl0bGUgPSBpdGVtcy5lcShpbmRleCkuZGF0YSgndGl0bGUnKSxcclxuLy8gICAgICAgICAgICAgbmV4dFNraWxscyA9IGl0ZW1zLmVxKGluZGV4KS5kYXRhKCd0ZWNobm9sb2d5Jyk7XHJcbi8vXHJcbi8vICAgICAgICAgX21vdmVOZXh0KCk7XHJcbi8vICAgICAgICAgX21vdmVQcmV2KCk7XHJcbi8vXHJcbi8vICAgICAgICAgaW1nQ29udGFpbmVyLmZhZGVPdXQoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICB0aXRsZS5zbGlkZVVwKCk7XHJcbi8vICAgICAgICAgICAgIHNraWxscy5mYWRlT3V0KCk7XHJcbi8vICAgICAgICAgICAgIGZhZGVkT3V0LnJlc29sdmUoKTtcclxuLy8gICAgICAgICB9KTtcclxuLy9cclxuLy8gICAgICAgICBmYWRlZE91dC5kb25lKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgdGl0bGUudGV4dChuZXh0VGl0bGUpO1xyXG4vLyAgICAgICAgICAgICBza2lsbHMudGV4dChuZXh0U2tpbGxzKTtcclxuLy8gICAgICAgICAgICAgaW1nQ29udGFpbmVyLmF0dHIoJ3NyYycsIG5leHRTcmMpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICAgICAgbG9hZGVkLnJlc29sdmUoKTtcclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICBsb2FkZWQuZG9uZShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRpdGxlLnNsaWRlRG93bigpO1xyXG4vLyAgICAgICAgICAgICBza2lsbHMuZmFkZUluKCk7XHJcbi8vICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5mYWRlSW4oKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgaW5pdDogX2luaXQsXHJcbi8vICAgICAgICAgbW92ZTogZnVuY3Rpb24gKCkge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAkKCcudG9nZ2xlX19saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0b2dnbGVfX2xpbmtfbmV4dCcpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcygndG9nZ2xlX19saW5rX3ByZXYnKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGluZGV4LS07XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICBfc2xpZGVTaG93KCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyAoKTtcclxuIiwidmFyIHdlbGNvbWVQYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX3Nob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4JyksXHJcbiAgICAgICAgICAgIGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICBwYWdlWSA9IGUucGFnZVksXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gcGFnZVgsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG4gICAgICAgICAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXZpZGVyID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdFBvc2l0aW9uID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0UG9zaXRpb24gPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICAgICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKCcgKyBwb3NpdGlvblggKyAncHgsJyArIHBvc2l0aW9uWSArICdweCwwKSc7XHJcbiAgICAgICAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgbGF5ZXJTdHlsZS5sZWZ0ID0gJy0nICsgbGVmdFBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGxheWVyU3R5bGUucmlnaHQgPSAnLScgKyByaWdodFBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBfc2hvd1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCIvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBQcmVsb2FkZXIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxudmFyIHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJyk7XHJcbmlmIChwcmVsb2FkICE9PSBudWxsKSBwcmVsb2FkZXIuaW5pdCgpO1xyXG5cclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgUGFyYWxsYXggTW91c2Vtb3ZlIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbnZhciBwYXJhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpO1xyXG5pZiAocGFyYWwgIT09IG51bGwpIHtcclxuICAgIHdlbGNvbWVQYXJhbGxheC5pbml0KCk7XHJcbn1cclxuXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEZsaXBwZXIgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG52YXIgZmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwcGVyJyk7XHJcbmlmKGZsaXAhPT1udWxsKXtcclxuICAgIGZsaXBwZXIuZnJvbnQoKTtcclxuICAgIGZsaXBwZXIuYmFjaygpO1xyXG59XHJcbi8vXHJcbi8vICAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBQYXJhbGxheCBTY3JvbGwgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxudmFyIGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYmcnKTtcclxuaWYoaGVybyE9PW51bGwpe1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XHJcbiAgICB9XHJcbn1cclxuLy9cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgTWFpbiBNZW51IHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxubWFpbk1lbnUuaW5pdCgpO1xyXG4vL1xyXG4vLyAvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjfCBTY3JvbGwgQnV0dG9ucyB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG52YXIgZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xyXG52YXIgdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctdXAnKTtcclxuaWYoZG93bkJ1dHRvbiAhPT0gbnVsbCl7cGFnZVNjcm9sbC5zY3JvbERvd24oKTt9XHJcbmlmKHVwQnV0dG9uICE9PW51bGwpe3BhZ2VTY3JvbGwuc2Nyb2xVcCgpO31cclxuXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IFNsaWRlciB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya19fc2xpZGVyJyk7XHJcbi8vIGlmIChzbGlkZXIgIT09IG51bGwpIHtcclxuLy8gICAgICAgICBTbGlkZXIuaW5pdCgpO1xyXG4vLyAgICAgICAgIFNsaWRlci5tb3ZlKCk7XHJcbi8vIH1cclxuU2xpZGVyLmluaXQoKTtcclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgQmxvZyBOYXYgU2Nyb2xsIHwjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxudmFyIGJsb2dOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZy1uYXZfX2xpc3QnKTtcclxuaWYoYmxvZ05hdiAhPT0gbnVsbCl7XHJcbiAgICBkb2N1bWVudC5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBibG9nU2Nyb2xsLmluaXQoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEFETUlOIFRBQlMgfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmFkbWluLmluaXQoKTtcclxuLy9cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgR09PR0xFIE1BUCB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy9cclxuLy9cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgU0tJTExTIEFOSU1BVElPTiB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gLy8gc2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNraWxsJyk7XHJcbi8vIC8vIGlmIChza2lsbHMgIT09IG51bGwpIHtcclxuLy8gLy8gICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gLy8gICAgICAgICBza2lsbEFuaW1hdGUuaW5pdCgpO1xyXG4vLyAvLyAgICAgfTtcclxuLy8gLy9cclxuLy8gLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgQmx1ciB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIC8vIHZhciBibHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1mb3JtX19ibHVyJyk7XHJcbi8vIC8vIGlmKGJsciAhPT0gbnVsbCl7XHJcbi8vIC8vICAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbi8vIC8vICAgICAgICAgYmx1ci5zZXQoKTtcclxuLy8gLy8gICAgIH07XHJcbi8vIC8vIH1cclxuLy9cclxuXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEZvcm1zIHZhbGlkYXRpb24gfCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbnZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5pZiAoZm9ybSAhPT0gbnVsbCkge1xyXG4gICAgdmFyIGlucHV0cyA9IGZvcm0uZWxlbWVudHM7XHJcbiAgICB2YXIgY2xvc2VFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb2JvdC1lcnJvcl9fY2xvc2UnKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlucHV0c1tpXS5vbmZvY3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dC1ncm91cF9lcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uLmNsZWFyKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGNsb3NlRXJyb3IgIT09IG51bGwpIHtcclxuICAgICAgICBjbG9zZUVycm9yLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VFcnJvci5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciB2YWxpZCA9IHZhbGlkYXRpb24uaW5pdChmb3JtKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsaWQpO1xyXG4gICAgfSlcclxufSJdfQ==
