!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});
//# sourceMappingURL=aos.js.map
let day1 = (function () {
    return{
        init: function () {
            window.addEventListener('keydown',playSound);
            function playSound(e) {
                const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
                const key = document.querySelector(`.key__item[data-key="${e.keyCode}"]`);
                if(!audio) return;
                audio.currentTime = 0;
                audio.play();
                key.classList.add('active');
            }
            function removeTransition(e) {
                if(e.propertyName != 'transform') return;
                this.classList.remove('active');
            }
            const keys = document.querySelectorAll('.key__item');
            keys.forEach(key => key.addEventListener('transitionend',removeTransition));
            console.log(keys);
        }
    }
})();
let day2 = (function () {
    return{
        init: function () {
            const secondHand = document.querySelector('.sec-hand');
            const minuteHand = document.querySelector('.min-hand');
            const hourHand = document.querySelector('.hour-hand');
            function setDate() {
                const now = new Date();
                const seconds = now.getSeconds();
                const secondDegree = ((seconds / 60) * 360) + 90;
                const minutes = now.getMinutes();
                const minutesDegree = ((minutes / 60) * 360) + 90;
                const hours = now.getHours();
                const hoursDegree = ((hours / 12) * 360) + 90;
                secondHand.style.transform = `rotate(${secondDegree}deg)`;
                minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
                hourHand.style.transform = `rotate(${hoursDegree}deg)`;
            }
            setInterval(setDate,1000);
        }
    }
})();
let day3 = (function () {
    return{
        init: function () {
            let inputs = document.querySelectorAll('.day3-input');
            function updateHandler() {
                const suffix = this.dataset.sizing || '';
                document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
                console.log(document.documentElement);
            }

            inputs.forEach(input => input.addEventListener('change', updateHandler));
            inputs.forEach(input => input.addEventListener('mousemove', updateHandler));
        }
    }
})();
let day4 = (function () {
    return{
        init: function () {
            // Get your shorts on - this is an array workout!
            // ## Array Cardio Day 1

            // Some data we can work with
            const inventors = [
                { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
                { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
                { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
                { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
                { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
                { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
                { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
                { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
                { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
                { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
                { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
                { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
            ];

            const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
            // Array.prototype.filter()
            // 1. Filter the list of inventors for those who were born in the 1500's
            let fifteens = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
            console.table(fifteens);
            // Array.prototype.map()
            // 2. Give us an array of the inventor first and last names
            let fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
            console.log(fullNames);
            // Array.prototype.sort()
            // 3. Sort the inventors by birthdate, oldest to youngest
            let ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
            console.table(ordered);
            // Array.prototype.reduce()
            // 4. How many years did all the inventors live?
            let totalYears = inventors.reduce((total, inventor) => {
                    return total + (inventor.passed - inventor.year);
                }
            ,0);
            console.log(totalYears);
            // 5. Sort the inventors by years lived
            let oldest = inventors.sort(function (a,b) {
                let lastGuy = a.passed - a.year;
                let firstGuy = b.passed - b.year;
                return lastGuy > firstGuy ? 1 : -1;
            });
            console.table(oldest);
            // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
            // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
            // const category = document.querySelector('.mw-category');
            // const links = Array.from(category.querySelectorAll('a'));
            // const de = links
            //     .map(link => link.textContent)
            //     .filter(streetName => streetName.includes('de'));

            // 7. sort Exercise
            // Sort the people alphabetically by last name
            const alpha = people.sort((lastOne, nextOne) => {
                const [aLast, aFirst] = lastOne.split(', ');
                const [bLast, bFirst] = nextOne.split(', ');
                return aLast > bLast ? 1 : -1;
            });
            console.log(alpha);

        }
    }
})();
let day5 = (function () {
    return{
        init: function () {
            const panels = document.querySelectorAll('.panel');

            function toggleOpen() {
                this.classList.toggle('open');
            }

            function toggleActive(e) {
                console.log(e.propertyName);
                if (e.propertyName.includes('flex')) {
                    this.classList.toggle('open-active');
                }
            }

            panels.forEach(panel => panel.addEventListener('click', toggleOpen));
            panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
        }
    }
})();
let day6 = (function () {
    return{
        init: function () {
            const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

            const cities = [];
            fetch(endpoint)
                .then(blob => blob.json())
                .then(data => cities.push(...data));

            function findMatches(wordToMatch, cities) {
                return cities.filter(place => {
                    // here we need to figure out if the city or state matches what was searched
                    const regex = new RegExp(wordToMatch, 'gi');
                    return place.city.match(regex) || place.state.match(regex)
                });
            }

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            function displayMatches() {
               const matchArray = findMatches(this.value, cities);
               const html = matchArray.map(place => {
                   const regex = new RegExp(this.value, 'gi');
                   const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
                   const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
                   return `<li>
                            <span class="name">${cityName}, ${stateName}</span>
                            <span class="population">${numberWithCommas(place.population)}</span>
                          </li>`
               }).join(' ');
               suggestions.innerHTML = html;
            }

            const searchInput = document.querySelector('.search');
            const suggestions = document.querySelector('.suggestions');

            searchInput.addEventListener('change', displayMatches);
            searchInput.addEventListener('keyup', displayMatches);
        }
    }
})();
let day7 = (function () {
    return{
        init: function () {
            // ## Array Cardio Day 2

            const people = [
                { name: 'Wes', year: 1988 },
                { name: 'Kait', year: 1986 },
                { name: 'Irv', year: 1970 },
                { name: 'Lux', year: 2015 },
            ];

            const comments = [
                { text: 'Love this!', id: 523423 },
                { text: 'Super good', id: 823423 },
                { text: 'You are the best', id: 2039842 },
                { text: 'Ramen is my fav food ever', id: 123523 },
                { text: 'Nice Nice Nice!', id: 542328 }
            ];
            // Some and Every Checks
            // Array.prototype.some() // is at least one person 19?
            // const isAdult = people.some(function(person) {
            //   const currentYear = (new Date()).getFullYear();
            //   if(currentYear - person.year >= 19) {
            //     return true;
            //   }
            // });

            const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

            console.log({isAdult});
            // Array.prototype.every() // is everyone 19?

            const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
            console.log({allAdults});

            // Array.prototype.find()
            // Find is like filter, but instead returns just the one you are looking for
            // find the comment with the ID of 823423


            const comment = comments.find(comment => comment.id === 823423);

            console.log(comment);

            // Array.prototype.findIndex()
            // Find the comment with this ID
            // delete the comment with the ID of 823423
            const index = comments.findIndex(comment => comment.id === 823423);
            console.log(index);

            // comments.splice(index, 1);

            const newComments = [
                ...comments.slice(0, index),
                ...comments.slice(index + 1)
            ];
        }
    }
})();
let day8 = (function () {
    return{
        init: function () {
            const canvas = document.querySelector('#draw');
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#BADA55';
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

            let isDrawing = false;
            let lastX = 0;
            let lastY = 0;
            let hue = 0;
            let direction = true;

            function draw(e) {
                if (!isDrawing) return; // stop the fn from running when they are not moused down
                ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.beginPath();
                // start from
                ctx.moveTo(lastX, lastY);
                // go to
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                [lastX, lastY] = [e.offsetX, e.offsetY];

                hue++;
                if (hue >= 360) {
                    hue = 0;
                }
                if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                    direction = !direction;
                }

                if(direction) {
                    ctx.lineWidth++;
                } else {
                    ctx.lineWidth--;
                }

            }

            canvas.addEventListener('mousedown', (e) => {
                isDrawing = true;
                [lastX, lastY] = [e.offsetX, e.offsetY];
            });


            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', () => isDrawing = false);
            canvas.addEventListener('mouseout', () => isDrawing = false);

        }
    }
})();
let mainMenu = (function () {
    return{
        init: function () {
            let hamburger = $('.hamburger');
            hamburger.on('click',function (e) {
                let menu = $('.main-nav__wrapper');
                e.preventDefault();
                menu.fadeToggle(500);
                this.classList.toggle('hamburger_closed');
            })
        }
    }
})();
mainMenu.init();
if(document.querySelector('.main-page')){
    AOS.init();
}
if(document.querySelector('.day1')){
    day1.init();
}
if(document.querySelector('.day2')){
    day2.init();
}
if(document.querySelector('.day3')){
    day3.init();
}
if(document.querySelector('.day4')){
    day4.init();
}
if(document.querySelector('.day5')){
    day5.init();
}
if(document.querySelector('.day6')){
    day6.init();
}
if(document.querySelector('.day7')){
    day7.init();
}
if(document.querySelector('.day8')){
    day8.init();
}








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFPUy5qcyIsImRheTEuanMiLCJkYXkyLmpzIiwiZGF5My5qcyIsImRheTQuanMiLCJkYXk1LmpzIiwiZGF5Ni5qcyIsImRheTcuanMiLCJkYXk4LmpzIiwiaGFtYnVyZ2VyLW1lbnUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQU9TPXQoKTplLkFPUz10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIGk9bltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJkaXN0L1wiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0scj1uKDEpLGE9KG8ociksbig2KSksdT1vKGEpLGM9big3KSxmPW8oYykscz1uKDgpLGQ9byhzKSxsPW4oOSkscD1vKGwpLG09bigxMCksYj1vKG0pLHY9bigxMSkseT1vKHYpLGc9bigxNCksaD1vKGcpLHc9W10saz0hMSx4PWRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iLGo9e29mZnNldDoxMjAsZGVsYXk6MCxlYXNpbmc6XCJlYXNlXCIsZHVyYXRpb246NDAwLGRpc2FibGU6ITEsb25jZTohMSxzdGFydEV2ZW50OlwiRE9NQ29udGVudExvYWRlZFwifSxPPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihlJiYoaz0hMCksaylyZXR1cm4gdz0oMCx5LmRlZmF1bHQpKHcsaiksKDAsYi5kZWZhdWx0KSh3LGoub25jZSksd30sUz1mdW5jdGlvbigpe3c9KDAsaC5kZWZhdWx0KSgpLE8oKX0sXz1mdW5jdGlvbigpe3cuZm9yRWFjaChmdW5jdGlvbihlLHQpe2Uubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIil9KX0sRT1mdW5jdGlvbihlKXtyZXR1cm4gZT09PSEwfHxcIm1vYmlsZVwiPT09ZSYmcC5kZWZhdWx0Lm1vYmlsZSgpfHxcInBob25lXCI9PT1lJiZwLmRlZmF1bHQucGhvbmUoKXx8XCJ0YWJsZXRcIj09PWUmJnAuZGVmYXVsdC50YWJsZXQoKXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpPT09ITB9LHo9ZnVuY3Rpb24oZSl7cmV0dXJuIGo9aShqLGUpLHc9KDAsaC5kZWZhdWx0KSgpLEUoai5kaXNhYmxlKXx8eD9fKCk6KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiLGouZWFzaW5nKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiLGouZHVyYXRpb24pLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIsai5kZWxheSksXCJET01Db250ZW50TG9hZGVkXCI9PT1qLnN0YXJ0RXZlbnQmJltcImNvbXBsZXRlXCIsXCJpbnRlcmFjdGl2ZVwiXS5pbmRleE9mKGRvY3VtZW50LnJlYWR5U3RhdGUpPi0xP08oITApOlwibG9hZFwiPT09ai5zdGFydEV2ZW50P3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKGouc3RhcnRFdmVudCxmdW5jdGlvbigpe08oITApfSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihqLnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtPKCEwKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKDAsZi5kZWZhdWx0KShPLDUwLCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCgwLGYuZGVmYXVsdCkoTyw1MCwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKDAsdS5kZWZhdWx0KShmdW5jdGlvbigpeygwLGIuZGVmYXVsdCkodyxqLm9uY2UpfSw5OSkpLGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlUmVtb3ZlZFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3QmJjE9PT10Lm5vZGVUeXBlJiZ0Lmhhc0F0dHJpYnV0ZSYmdC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiKSYmKDAsZi5kZWZhdWx0KShTLDUwLCEwKX0pLCgwLGQuZGVmYXVsdCkoXCJbZGF0YS1hb3NdXCIsUyksdyl9O2UuZXhwb3J0cz17aW5pdDp6LHJlZnJlc2g6TyxyZWZyZXNoSGFyZDpTfX0sZnVuY3Rpb24oZSx0KXt9LCwsLCxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBvKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLGs9dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBrPWUsaD1zZXRUaW1lb3V0KHMsdCksUz9vKGUpOmd9ZnVuY3Rpb24gYShlKXt2YXIgbj1lLXcsbz1lLWssaT10LW47cmV0dXJuIF8/aihpLHktbyk6aX1mdW5jdGlvbiBjKGUpe3ZhciBuPWUtdyxvPWUtaztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxfJiZvPj15fWZ1bmN0aW9uIHMoKXt2YXIgZT1PKCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChzLGEoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxFJiZiP28oZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxrPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChPKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1PKCksbj1jKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihfKXJldHVybiBoPXNldFRpbWVvdXQocyx0KSxvKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KHMsdCkpLGd9dmFyIGIsdix5LGcsaCx3LGs9MCxTPSExLF89ITEsRT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoZik7cmV0dXJuIHQ9dSh0KXx8MCxpKG4pJiYoUz0hIW4ubGVhZGluZyxfPVwibWF4V2FpdFwiaW4gbix5PV8/eCh1KG4ubWF4V2FpdCl8fDAsdCk6eSxFPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOkUpLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlLHQsbyl7dmFyIHI9ITAsYT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoZik7cmV0dXJuIGkobykmJihyPVwibGVhZGluZ1wiaW4gbz8hIW8ubGVhZGluZzpyLGE9XCJ0cmFpbGluZ1wiaW4gbz8hIW8udHJhaWxpbmc6YSksbihlLHQse2xlYWRpbmc6cixtYXhXYWl0OnQsdHJhaWxpbmc6YX0pfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl8fHIoZSkmJmsuY2FsbChlKT09ZH1mdW5jdGlvbiB1KGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGEoZSkpcmV0dXJuIHM7aWYoaShlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1pKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGwsXCJcIik7dmFyIG49bS50ZXN0KGUpO3JldHVybiBufHxiLnRlc3QoZSk/dihlLnNsaWNlKDIpLG4/Mjo4KTpwLnRlc3QoZSk/czorZX12YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxmPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLHM9TmFOLGQ9XCJbb2JqZWN0IFN5bWJvbF1cIixsPS9eXFxzK3xcXHMrJC9nLHA9L15bLStdMHhbMC05YS1mXSskL2ksbT0vXjBiWzAxXSskL2ksYj0vXjBvWzAtN10rJC9pLHY9cGFyc2VJbnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQsZz1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjpjKHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaD15fHxnfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdz1PYmplY3QucHJvdG90eXBlLGs9dy50b1N0cmluZyx4PU1hdGgubWF4LGo9TWF0aC5taW4sTz1mdW5jdGlvbigpe3JldHVybiBoLkRhdGUubm93KCl9O2UuZXhwb3J0cz1vfSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLE89dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBPPWUsaD1zZXRUaW1lb3V0KHMsdCksUz9pKGUpOmd9ZnVuY3Rpb24gdShlKXt2YXIgbj1lLXcsbz1lLU8saT10LW47cmV0dXJuIF8/eChpLHktbyk6aX1mdW5jdGlvbiBmKGUpe3ZhciBuPWUtdyxvPWUtTztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxfJiZvPj15fWZ1bmN0aW9uIHMoKXt2YXIgZT1qKCk7cmV0dXJuIGYoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChzLHUoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxFJiZiP2koZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxPPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChqKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1qKCksbj1mKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihfKXJldHVybiBoPXNldFRpbWVvdXQocyx0KSxpKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KHMsdCkpLGd9dmFyIGIsdix5LGcsaCx3LE89MCxTPSExLF89ITEsRT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYyk7cmV0dXJuIHQ9YSh0KXx8MCxvKG4pJiYoUz0hIW4ubGVhZGluZyxfPVwibWF4V2FpdFwiaW4gbix5PV8/ayhhKG4ubWF4V2FpdCl8fDAsdCk6eSxFPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOkUpLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBpKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl9ZnVuY3Rpb24gcihlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKXx8aShlKSYmdy5jYWxsKGUpPT1zfWZ1bmN0aW9uIGEoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYocihlKSlyZXR1cm4gZjtpZihvKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPW8odCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoZCxcIlwiKTt2YXIgbj1wLnRlc3QoZSk7cmV0dXJuIG58fG0udGVzdChlKT9iKGUuc2xpY2UoMiksbj8yOjgpOmwudGVzdChlKT9mOitlfXZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsZj1OYU4scz1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxwPS9eMGJbMDFdKyQvaSxtPS9eMG9bMC03XSskL2ksYj1wYXJzZUludCx2PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOnUodCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOnUoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixnPXZ8fHl8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxoPU9iamVjdC5wcm90b3R5cGUsdz1oLnRvU3RyaW5nLGs9TWF0aC5tYXgseD1NYXRoLm1pbixqPWZ1bmN0aW9uKCl7cmV0dXJuIGcuRGF0ZS5ub3coKX07ZS5leHBvcnRzPW59KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2EucHVzaCh7c2VsZWN0b3I6ZSxmbjp0fSksIXUmJnImJih1PW5ldyByKG8pLHUub2JzZXJ2ZShpLmRvY3VtZW50RWxlbWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITAscmVtb3ZlZE5vZGVzOiEwfSkpLG8oKX1mdW5jdGlvbiBvKCl7Zm9yKHZhciBlLHQsbj0wLG89YS5sZW5ndGg7bjxvO24rKyl7ZT1hW25dLHQ9aS5xdWVyeVNlbGVjdG9yQWxsKGUuc2VsZWN0b3IpO2Zvcih2YXIgcix1PTAsYz10Lmxlbmd0aDt1PGM7dSsrKXI9dFt1XSxyLnJlYWR5fHwoci5yZWFkeT0hMCxlLmZuLmNhbGwocixyKSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXdpbmRvdy5kb2N1bWVudCxyPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixhPVtdLHU9dm9pZCAwO3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oKXtyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhfHxcIlwifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksYT0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSx1PS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaSxjPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7bih0aGlzLGUpfXJldHVybiBpKGUsW3trZXk6XCJwaG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXIudGVzdChlKSYmIWEudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwibW9iaWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghdS50ZXN0KGUpJiYhYy50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJ0YWJsZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vYmlsZSgpJiYhdGhpcy5waG9uZSgpfX1dKSxlfSgpO3QuZGVmYXVsdD1uZXcgZn0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS5ub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9uY2VcIik7dD5lLnBvc2l0aW9uP2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWFuaW1hdGVcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8mJihcImZhbHNlXCI9PT1vfHwhbiYmXCJ0cnVlXCIhPT1vKSYmZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhb3MtYW5pbWF0ZVwiKX0sbz1mdW5jdGlvbihlLHQpe3ZhciBvPXdpbmRvdy5wYWdlWU9mZnNldCxpPXdpbmRvdy5pbm5lckhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSxyKXtuKGUsaStvLHQpfSl9O3QuZGVmYXVsdD1vfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMikscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtaW5pdFwiKSxlLnBvc2l0aW9uPSgwLHIuZGVmYXVsdCkoZS5ub2RlLHQub2Zmc2V0KX0pLGV9O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMykscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj0wLG89MCxpPXdpbmRvdy5pbm5lckhlaWdodCxhPXtvZmZzZXQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vZmZzZXRcIiksYW5jaG9yOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yXCIpLGFuY2hvclBsYWNlbWVudDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnRcIil9O3N3aXRjaChhLm9mZnNldCYmIWlzTmFOKGEub2Zmc2V0KSYmKG89cGFyc2VJbnQoYS5vZmZzZXQpKSxhLmFuY2hvciYmZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcikmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpWzBdKSxuPSgwLHIuZGVmYXVsdCkoZSkudG9wLGEuYW5jaG9yUGxhY2VtZW50KXtjYXNlXCJ0b3AtYm90dG9tXCI6YnJlYWs7Y2FzZVwiY2VudGVyLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwiYm90dG9tLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcInRvcC1jZW50ZXJcIjpuKz1pLzI7YnJlYWs7Y2FzZVwiYm90dG9tLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJjZW50ZXItY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwidG9wLXRvcFwiOm4rPWk7YnJlYWs7Y2FzZVwiYm90dG9tLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0K2k7YnJlYWs7Y2FzZVwiY2VudGVyLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0LzIraX1yZXR1cm4gYS5hbmNob3JQbGFjZW1lbnR8fGEub2Zmc2V0fHxpc05hTih0KXx8KG89dCksbitvfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7ZSYmIWlzTmFOKGUub2Zmc2V0TGVmdCkmJiFpc05hTihlLm9mZnNldFRvcCk7KXQrPWUub2Zmc2V0TGVmdC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbExlZnQ6MCksbis9ZS5vZmZzZXRUb3AtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxUb3A6MCksZT1lLm9mZnNldFBhcmVudDtyZXR1cm57dG9wOm4sbGVmdDp0fX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7ZT1lfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW9zXVwiKTt2YXIgdD1bXTtyZXR1cm5bXS5mb3JFYWNoLmNhbGwoZSxmdW5jdGlvbihlLG4pe3QucHVzaCh7bm9kZTplfSl9KSx0fTt0LmRlZmF1bHQ9bn1dKX0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hb3MuanMubWFwIiwibGV0IGRheTEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLHBsYXlTb3VuZCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXlTb3VuZChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2V5X19pdGVtW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZighYXVkaW8pIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGUucHJvcGVydHlOYW1lICE9ICd0cmFuc2Zvcm0nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5X19pdGVtJyk7XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLHJlbW92ZVRyYW5zaXRpb24pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXkyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZEhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjLWhhbmQnKTtcclxuICAgICAgICAgICAgY29uc3QgbWludXRlSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4taGFuZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBob3VySGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VyLWhhbmQnKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZERlZ3JlZSA9ICgoc2Vjb25kcyAvIDYwKSAqIDM2MCkgKyA5MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlc0RlZ3JlZSA9ICgobWludXRlcyAvIDYwKSAqIDM2MCkgKyA5MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Vyc0RlZ3JlZSA9ICgoaG91cnMgLyAxMikgKiAzNjApICsgOTA7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtzZWNvbmREZWdyZWV9ZGVnKWA7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHttaW51dGVzRGVncmVlfWRlZylgO1xyXG4gICAgICAgICAgICAgICAgaG91ckhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2hvdXJzRGVncmVlfWRlZylgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKHNldERhdGUsMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXkzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5My1pbnB1dCcpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gdGhpcy5kYXRhc2V0LnNpemluZyB8fCAnJztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShgLS0ke3RoaXMubmFtZX1gLCB0aGlzLnZhbHVlICsgc3VmZml4KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUhhbmRsZXIpKTtcclxuICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlSGFuZGxlcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5NCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgeW91ciBzaG9ydHMgb24gLSB0aGlzIGlzIGFuIGFycmF5IHdvcmtvdXQhXHJcbiAgICAgICAgICAgIC8vICMjIEFycmF5IENhcmRpbyBEYXkgMVxyXG5cclxuICAgICAgICAgICAgLy8gU29tZSBkYXRhIHdlIGNhbiB3b3JrIHdpdGhcclxuICAgICAgICAgICAgY29uc3QgaW52ZW50b3JzID0gW1xyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0FsYmVydCcsIGxhc3Q6ICdFaW5zdGVpbicsIHllYXI6IDE4NzksIHBhc3NlZDogMTk1NSB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0lzYWFjJywgbGFzdDogJ05ld3RvbicsIHllYXI6IDE2NDMsIHBhc3NlZDogMTcyNyB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0dhbGlsZW8nLCBsYXN0OiAnR2FsaWxlaScsIHllYXI6IDE1NjQsIHBhc3NlZDogMTY0MiB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ01hcmllJywgbGFzdDogJ0N1cmllJywgeWVhcjogMTg2NywgcGFzc2VkOiAxOTM0IH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnSm9oYW5uZXMnLCBsYXN0OiAnS2VwbGVyJywgeWVhcjogMTU3MSwgcGFzc2VkOiAxNjMwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnTmljb2xhdXMnLCBsYXN0OiAnQ29wZXJuaWN1cycsIHllYXI6IDE0NzMsIHBhc3NlZDogMTU0MyB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ01heCcsIGxhc3Q6ICdQbGFuY2snLCB5ZWFyOiAxODU4LCBwYXNzZWQ6IDE5NDcgfSxcclxuICAgICAgICAgICAgICAgIHsgZmlyc3Q6ICdLYXRoZXJpbmUnLCBsYXN0OiAnQmxvZGdldHQnLCB5ZWFyOiAxODk4LCBwYXNzZWQ6IDE5NzkgfSxcclxuICAgICAgICAgICAgICAgIHsgZmlyc3Q6ICdBZGEnLCBsYXN0OiAnTG92ZWxhY2UnLCB5ZWFyOiAxODE1LCBwYXNzZWQ6IDE4NTIgfSxcclxuICAgICAgICAgICAgICAgIHsgZmlyc3Q6ICdTYXJhaCBFLicsIGxhc3Q6ICdHb29kZScsIHllYXI6IDE4NTUsIHBhc3NlZDogMTkwNSB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0xpc2UnLCBsYXN0OiAnTWVpdG5lcicsIHllYXI6IDE4NzgsIHBhc3NlZDogMTk2OCB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0hhbm5hJywgbGFzdDogJ0hhbW1hcnN0csO2bScsIHllYXI6IDE4MjksIHBhc3NlZDogMTkwOSB9XHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwZW9wbGUgPSBbJ0JlY2ssIEdsZW5uJywgJ0JlY2tlciwgQ2FybCcsICdCZWNrZXR0LCBTYW11ZWwnLCAnQmVkZG9lcywgTWljaycsICdCZWVjaGVyLCBIZW5yeScsICdCZWV0aG92ZW4sIEx1ZHdpZycsICdCZWdpbiwgTWVuYWNoZW0nLCAnQmVsbG9jLCBIaWxhaXJlJywgJ0JlbGxvdywgU2F1bCcsICdCZW5jaGxleSwgUm9iZXJ0JywgJ0JlbmVuc29uLCBQZXRlcicsICdCZW4tR3VyaW9uLCBEYXZpZCcsICdCZW5qYW1pbiwgV2FsdGVyJywgJ0Jlbm4sIFRvbnknLCAnQmVubmluZ3RvbiwgQ2hlc3RlcicsICdCZW5zb24sIExlYW5hJywgJ0JlbnQsIFNpbGFzJywgJ0JlbnRzZW4sIExsb3lkJywgJ0JlcmdlciwgUmljJywgJ0JlcmdtYW4sIEluZ21hcicsICdCZXJpbywgTHVjaWFubycsICdCZXJsZSwgTWlsdG9uJywgJ0JlcmxpbiwgSXJ2aW5nJywgJ0Jlcm5lLCBFcmljJywgJ0Jlcm5oYXJkLCBTYW5kcmEnLCAnQmVycmEsIFlvZ2knLCAnQmVycnksIEhhbGxlJywgJ0JlcnJ5LCBXZW5kZWxsJywgJ0JldGhlYSwgRXJpbicsICdCZXZhbiwgQW5ldXJpbicsICdCZXZlbCwgS2VuJywgJ0JpZGVuLCBKb3NlcGgnLCAnQmllcmNlLCBBbWJyb3NlJywgJ0Jpa28sIFN0ZXZlJywgJ0JpbGxpbmdzLCBKb3NoJywgJ0Jpb25kbywgRnJhbmsnLCAnQmlycmVsbCwgQXVndXN0aW5lJywgJ0JsYWNrIEVsaycsICdCbGFpciwgUm9iZXJ0JywgJ0JsYWlyLCBUb255JywgJ0JsYWtlLCBXaWxsaWFtJ107XHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoKVxyXG4gICAgICAgICAgICAvLyAxLiBGaWx0ZXIgdGhlIGxpc3Qgb2YgaW52ZW50b3JzIGZvciB0aG9zZSB3aG8gd2VyZSBib3JuIGluIHRoZSAxNTAwJ3NcclxuICAgICAgICAgICAgbGV0IGZpZnRlZW5zID0gaW52ZW50b3JzLmZpbHRlcihpbnZlbnRvciA9PiAoaW52ZW50b3IueWVhciA+PSAxNTAwICYmIGludmVudG9yLnllYXIgPCAxNjAwKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUoZmlmdGVlbnMpO1xyXG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUubWFwKClcclxuICAgICAgICAgICAgLy8gMi4gR2l2ZSB1cyBhbiBhcnJheSBvZiB0aGUgaW52ZW50b3IgZmlyc3QgYW5kIGxhc3QgbmFtZXNcclxuICAgICAgICAgICAgbGV0IGZ1bGxOYW1lcyA9IGludmVudG9ycy5tYXAoaW52ZW50b3IgPT4gYCR7aW52ZW50b3IuZmlyc3R9ICR7aW52ZW50b3IubGFzdH1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZnVsbE5hbWVzKTtcclxuICAgICAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLnNvcnQoKVxyXG4gICAgICAgICAgICAvLyAzLiBTb3J0IHRoZSBpbnZlbnRvcnMgYnkgYmlydGhkYXRlLCBvbGRlc3QgdG8geW91bmdlc3RcclxuICAgICAgICAgICAgbGV0IG9yZGVyZWQgPSBpbnZlbnRvcnMuc29ydCgoYSxiKSA9PiBhLnllYXIgPiBiLnllYXIgPyAxIDogLTEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKG9yZGVyZWQpO1xyXG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUucmVkdWNlKClcclxuICAgICAgICAgICAgLy8gNC4gSG93IG1hbnkgeWVhcnMgZGlkIGFsbCB0aGUgaW52ZW50b3JzIGxpdmU/XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFllYXJzID0gaW52ZW50b3JzLnJlZHVjZSgodG90YWwsIGludmVudG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgKGludmVudG9yLnBhc3NlZCAtIGludmVudG9yLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvdGFsWWVhcnMpO1xyXG4gICAgICAgICAgICAvLyA1LiBTb3J0IHRoZSBpbnZlbnRvcnMgYnkgeWVhcnMgbGl2ZWRcclxuICAgICAgICAgICAgbGV0IG9sZGVzdCA9IGludmVudG9ycy5zb3J0KGZ1bmN0aW9uIChhLGIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0R3V5ID0gYS5wYXNzZWQgLSBhLnllYXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3RHdXkgPSBiLnBhc3NlZCAtIGIueWVhcjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0R3V5ID4gZmlyc3RHdXkgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKG9sZGVzdCk7XHJcbiAgICAgICAgICAgIC8vIDYuIGNyZWF0ZSBhIGxpc3Qgb2YgQm91bGV2YXJkcyBpbiBQYXJpcyB0aGF0IGNvbnRhaW4gJ2RlJyBhbnl3aGVyZSBpbiB0aGUgbmFtZVxyXG4gICAgICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DYXRlZ29yeTpCb3VsZXZhcmRzX2luX1BhcmlzXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm13LWNhdGVnb3J5Jyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGxpbmtzID0gQXJyYXkuZnJvbShjYXRlZ29yeS5xdWVyeVNlbGVjdG9yQWxsKCdhJykpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBkZSA9IGxpbmtzXHJcbiAgICAgICAgICAgIC8vICAgICAubWFwKGxpbmsgPT4gbGluay50ZXh0Q29udGVudClcclxuICAgICAgICAgICAgLy8gICAgIC5maWx0ZXIoc3RyZWV0TmFtZSA9PiBzdHJlZXROYW1lLmluY2x1ZGVzKCdkZScpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDcuIHNvcnQgRXhlcmNpc2VcclxuICAgICAgICAgICAgLy8gU29ydCB0aGUgcGVvcGxlIGFscGhhYmV0aWNhbGx5IGJ5IGxhc3QgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBhbHBoYSA9IHBlb3BsZS5zb3J0KChsYXN0T25lLCBuZXh0T25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbYUxhc3QsIGFGaXJzdF0gPSBsYXN0T25lLnNwbGl0KCcsICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2JMYXN0LCBiRmlyc3RdID0gbmV4dE9uZS5zcGxpdCgnLCAnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhTGFzdCA+IGJMYXN0ID8gMSA6IC0xO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWxwaGEpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhbmVsJyk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB0b2dnbGVPcGVuKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5wcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJ2ZsZXgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVPcGVuKSk7XHJcbiAgICAgICAgICAgIHBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0b2dnbGVBY3RpdmUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTYgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NaXNlcmxvdS9jNWNkODM2NGJmOWIyNDIwYmIyOS9yYXcvMmJmMjU4NzYzY2RkZGQ3MDRmOGZmZDNlYTlhM2U4MWQyNWUyYzZmNi9jaXRpZXMuanNvbic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaXRpZXMgPSBbXTtcclxuICAgICAgICAgICAgZmV0Y2goZW5kcG9pbnQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihibG9iID0+IGJsb2IuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBjaXRpZXMucHVzaCguLi5kYXRhKSk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5kTWF0Y2hlcyh3b3JkVG9NYXRjaCwgY2l0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2l0aWVzLmZpbHRlcihwbGFjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVyZSB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgaWYgdGhlIGNpdHkgb3Igc3RhdGUgbWF0Y2hlcyB3aGF0IHdhcyBzZWFyY2hlZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh3b3JkVG9NYXRjaCwgJ2dpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlLmNpdHkubWF0Y2gocmVnZXgpIHx8IHBsYWNlLnN0YXRlLm1hdGNoKHJlZ2V4KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG51bWJlcldpdGhDb21tYXMoeCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNwbGF5TWF0Y2hlcygpIHtcclxuICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hBcnJheSA9IGZpbmRNYXRjaGVzKHRoaXMudmFsdWUsIGNpdGllcyk7XHJcbiAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBtYXRjaEFycmF5Lm1hcChwbGFjZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy52YWx1ZSwgJ2dpJyk7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zdCBjaXR5TmFtZSA9IHBsYWNlLmNpdHkucmVwbGFjZShyZWdleCwgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3RoaXMudmFsdWV9PC9zcGFuPmApO1xyXG4gICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVOYW1lID0gcGxhY2Uuc3RhdGUucmVwbGFjZShyZWdleCwgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3RoaXMudmFsdWV9PC9zcGFuPmApO1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2NpdHlOYW1lfSwgJHtzdGF0ZU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1bGF0aW9uXCI+JHtudW1iZXJXaXRoQ29tbWFzKHBsYWNlLnBvcHVsYXRpb24pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmBcclxuICAgICAgICAgICAgICAgfSkuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICBzdWdnZXN0aW9ucy5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VnZ2VzdGlvbnMnKTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRpc3BsYXlNYXRjaGVzKTtcclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkaXNwbGF5TWF0Y2hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXk3ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICMjIEFycmF5IENhcmRpbyBEYXkgMlxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGVvcGxlID0gW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnV2VzJywgeWVhcjogMTk4OCB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnS2FpdCcsIHllYXI6IDE5ODYgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0lydicsIHllYXI6IDE5NzAgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0x1eCcsIHllYXI6IDIwMTUgfSxcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTG92ZSB0aGlzIScsIGlkOiA1MjM0MjMgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1N1cGVyIGdvb2QnLCBpZDogODIzNDIzIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdZb3UgYXJlIHRoZSBiZXN0JywgaWQ6IDIwMzk4NDIgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1JhbWVuIGlzIG15IGZhdiBmb29kIGV2ZXInLCBpZDogMTIzNTIzIH0sXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdOaWNlIE5pY2UgTmljZSEnLCBpZDogNTQyMzI4IH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgLy8gU29tZSBhbmQgRXZlcnkgQ2hlY2tzXHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lKCkgLy8gaXMgYXQgbGVhc3Qgb25lIHBlcnNvbiAxOT9cclxuICAgICAgICAgICAgLy8gY29uc3QgaXNBZHVsdCA9IHBlb3BsZS5zb21lKGZ1bmN0aW9uKHBlcnNvbikge1xyXG4gICAgICAgICAgICAvLyAgIGNvbnN0IGN1cnJlbnRZZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIC8vICAgaWYoY3VycmVudFllYXIgLSBwZXJzb24ueWVhciA+PSAxOSkge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQWR1bHQgPSBwZW9wbGUuc29tZShwZXJzb24gPT4gKChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpKSAtIHBlcnNvbi55ZWFyID49IDE5KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpc0FkdWx0fSk7XHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5ldmVyeSgpIC8vIGlzIGV2ZXJ5b25lIDE5P1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsQWR1bHRzID0gcGVvcGxlLmV2ZXJ5KHBlcnNvbiA9PiAoKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkpIC0gcGVyc29uLnllYXIgPj0gMTkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7YWxsQWR1bHRzfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuZmluZCgpXHJcbiAgICAgICAgICAgIC8vIEZpbmQgaXMgbGlrZSBmaWx0ZXIsIGJ1dCBpbnN0ZWFkIHJldHVybnMganVzdCB0aGUgb25lIHlvdSBhcmUgbG9va2luZyBmb3JcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY29tbWVudCB3aXRoIHRoZSBJRCBvZiA4MjM0MjNcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb21tZW50ID0gY29tbWVudHMuZmluZChjb21tZW50ID0+IGNvbW1lbnQuaWQgPT09IDgyMzQyMyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgoKVxyXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjb21tZW50IHdpdGggdGhpcyBJRFxyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIGNvbW1lbnQgd2l0aCB0aGUgSUQgb2YgODIzNDIzXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY29tbWVudHMuZmluZEluZGV4KGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gODIzNDIzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29tbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnRzID0gW1xyXG4gICAgICAgICAgICAgICAgLi4uY29tbWVudHMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgLi4uY29tbWVudHMuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5OCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJhdycpO1xyXG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNCQURBNTUnO1xyXG4gICAgICAgICAgICBjdHgubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxMDA7XHJcbi8vIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlzRHJhd2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbGFzdFggPSAwO1xyXG4gICAgICAgICAgICBsZXQgbGFzdFkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgaHVlID0gMDtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmF3KGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNEcmF3aW5nKSByZXR1cm47IC8vIHN0b3AgdGhlIGZuIGZyb20gcnVubmluZyB3aGVuIHRoZXkgYXJlIG5vdCBtb3VzZWQgZG93blxyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYGhzbCgke2h1ZX0sIDEwMCUsIDUwJSlgO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgZnJvbVxyXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhsYXN0WCwgbGFzdFkpO1xyXG4gICAgICAgICAgICAgICAgLy8gZ28gdG9cclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgW2xhc3RYLCBsYXN0WV0gPSBbZS5vZmZzZXRYLCBlLm9mZnNldFldO1xyXG5cclxuICAgICAgICAgICAgICAgIGh1ZSsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGh1ZSA+PSAzNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBodWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN0eC5saW5lV2lkdGggPj0gMTAwIHx8IGN0eC5saW5lV2lkdGggPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICFkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzRHJhd2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBbbGFzdFgsIGxhc3RZXSA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmF3KTtcclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiBpc0RyYXdpbmcgPSBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IGlzRHJhd2luZyA9IGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBtYWluTWVudSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaGFtYnVyZ2VyID0gJCgnLmhhbWJ1cmdlcicpO1xyXG4gICAgICAgICAgICBoYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnUgPSAkKCcubWFpbi1uYXZfX3dyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuZmFkZVRvZ2dsZSg1MDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIm1haW5NZW51LmluaXQoKTtcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpKXtcclxuICAgIEFPUy5pbml0KCk7XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEnKSl7XHJcbiAgICBkYXkxLmluaXQoKTtcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MicpKXtcclxuICAgIGRheTIuaW5pdCgpO1xyXG59XHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkzJykpe1xyXG4gICAgZGF5My5pbml0KCk7XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTQnKSl7XHJcbiAgICBkYXk0LmluaXQoKTtcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5NScpKXtcclxuICAgIGRheTUuaW5pdCgpO1xyXG59XHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXk2Jykpe1xyXG4gICAgZGF5Ni5pbml0KCk7XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTcnKSl7XHJcbiAgICBkYXk3LmluaXQoKTtcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5OCcpKXtcclxuICAgIGRheTguaW5pdCgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
