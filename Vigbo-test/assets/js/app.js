/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
    d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else c=document.createElement("a"),c.href=a;return c.protocol.replace(/:/g,"")+c.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
    "true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,q=0;m();var f=document.getElementsByTagName("use");for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect()}catch(w){g=!1}var h=(a=f[c].getAttribute("href")||f[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[c].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var b=
    h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute("href")&&f[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),b.length&&(a=e[b],!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&(h=u(b),void 0!==h&&(a=new h,e[b]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",b),a.send(),q+=1)))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?e[b]=!0:e[b].onload&&(e[b].abort(),
                delete e[b].onload,e[b]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();

var mobileMenu = (function () {
    return {
        init: function () {
            var isActive = false;

            $('.js-menu').on('click', function() {
                if (isActive) {
                    $(this).removeClass('active');
                    $('.nav').removeClass('active');
                } else {
                    $(this).addClass('active');
                    $('.nav').addClass('active');
                }
                isActive = !isActive;
            });
        }
    }
})();

document.addEventListener('DOMContentLoaded', function(){
    // Textarea auto-size

    var textarea = document.querySelector('#message-input');
    textarea.addEventListener('keydown', autosize);
    function autosize(){
        var el = this;
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }
    // Disable submit btn
    var submitBtn = document.querySelector('#send-btn');
    submitBtn.addEventListener('click', function (e) {
        if(textarea.value == '') {
            e.preventDefault();
        }
    });

    //mobileMenu
    mobileMenu.init();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Z1VzZS5qcyIsIm1vYmlsZU1lbnUuanMiLCJ0ZXh0YXJlYS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNyBJY29Nb29uLmlvXHJcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcclxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL3N2Z3h1c2VcclxuICogQHZlcnNpb24gICAxLjIuNlxyXG4gKi9cclxuKGZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyKXt2YXIgZT1PYmplY3QuY3JlYXRlKG51bGwpLGwsZD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChsKTtsPXNldFRpbWVvdXQobiwxMDApfSxtPWZ1bmN0aW9uKCl7fSx0PWZ1bmN0aW9uKCl7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixkLCExKTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsZCwhMSk7aWYod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpe3ZhciBrPW5ldyBNdXRhdGlvbk9ic2VydmVyKGQpO2sub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLGF0dHJpYnV0ZXM6ITB9KTttPWZ1bmN0aW9uKCl7dHJ5e2suZGlzY29ubmVjdCgpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZCwhMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLFxyXG4gICAgZCwhMSl9Y2F0Y2godil7fX19ZWxzZSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLGQsITEpLG09ZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTVN1YnRyZWVNb2RpZmllZFwiLGQsITEpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZCwhMSk7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLGQsITEpfX0sdT1mdW5jdGlvbihrKXtmdW5jdGlvbiBlKGEpe2lmKHZvaWQgMCE9PWEucHJvdG9jb2wpdmFyIGM9YTtlbHNlIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksYy5ocmVmPWE7cmV0dXJuIGMucHJvdG9jb2wucmVwbGFjZSgvOi9nLFwiXCIpK2MuaG9zdH1pZih3aW5kb3cuWE1MSHR0cFJlcXVlc3Qpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDt2YXIgbT1lKGxvY2F0aW9uKTtrPWUoayk7ZD12b2lkIDA9PT1cclxuZC53aXRoQ3JlZGVudGlhbHMmJlwiXCIhPT1rJiZrIT09bT9YRG9tYWluUmVxdWVzdHx8dm9pZCAwOlhNTEh0dHBSZXF1ZXN0fXJldHVybiBkfTt2YXIgbj1mdW5jdGlvbigpe2Z1bmN0aW9uIGQoKXstLXE7MD09PXEmJihtKCksdCgpKX1mdW5jdGlvbiBsKGEpe3JldHVybiBmdW5jdGlvbigpeyEwIT09ZVthLmJhc2VdJiYoYS51c2VFbC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcInhsaW5rOmhyZWZcIixcIiNcIithLmhhc2gpLGEudXNlRWwuaGFzQXR0cmlidXRlKFwiaHJlZlwiKSYmYS51c2VFbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsXCIjXCIrYS5oYXNoKSl9fWZ1bmN0aW9uIHAoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9ZG9jdW1lbnQuYm9keSxiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ4XCIpO2Eub25sb2FkPW51bGw7Yi5pbm5lckhUTUw9YS5yZXNwb25zZVRleHQ7aWYoYj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdKWIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcclxuICAgIFwidHJ1ZVwiKSxiLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixiLnN0eWxlLndpZHRoPTAsYi5zdHlsZS5oZWlnaHQ9MCxiLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsYy5pbnNlcnRCZWZvcmUoYixjLmZpcnN0Q2hpbGQpO2QoKX19ZnVuY3Rpb24gbihhKXtyZXR1cm4gZnVuY3Rpb24oKXthLm9uZXJyb3I9bnVsbDthLm9udGltZW91dD1udWxsO2QoKX19dmFyIGEsYyxxPTA7bSgpO3ZhciBmPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpO2ZvcihjPTA7YzxmLmxlbmd0aDtjKz0xKXt0cnl7dmFyIGc9ZltjXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX1jYXRjaCh3KXtnPSExfXZhciBoPShhPWZbY10uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKXx8ZltjXS5nZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcImhyZWZcIil8fGZbY10uZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSkmJmEuc3BsaXQ/YS5zcGxpdChcIiNcIik6W1wiXCIsXCJcIl07dmFyIGI9XHJcbiAgICBoWzBdO2g9aFsxXTt2YXIgcj1nJiYwPT09Zy5sZWZ0JiYwPT09Zy5yaWdodCYmMD09PWcudG9wJiYwPT09Zy5ib3R0b207ZyYmMD09PWcud2lkdGgmJjA9PT1nLmhlaWdodCYmIXI/KGZbY10uaGFzQXR0cmlidXRlKFwiaHJlZlwiKSYmZltjXS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcInhsaW5rOmhyZWZcIixhKSxiLmxlbmd0aCYmKGE9ZVtiXSwhMCE9PWEmJnNldFRpbWVvdXQobCh7dXNlRWw6ZltjXSxiYXNlOmIsaGFzaDpofSksMCksdm9pZCAwPT09YSYmKGg9dShiKSx2b2lkIDAhPT1oJiYoYT1uZXcgaCxlW2JdPWEsYS5vbmxvYWQ9cChhKSxhLm9uZXJyb3I9bihhKSxhLm9udGltZW91dD1uKGEpLGEub3BlbihcIkdFVFwiLGIpLGEuc2VuZCgpLHErPTEpKSkpOnI/Yi5sZW5ndGgmJmVbYl0mJnNldFRpbWVvdXQobCh7dXNlRWw6ZltjXSxiYXNlOmIsaGFzaDpofSksMCk6dm9pZCAwPT09ZVtiXT9lW2JdPSEwOmVbYl0ub25sb2FkJiYoZVtiXS5hYm9ydCgpLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVbYl0ub25sb2FkLGVbYl09ITApfWY9XCJcIjtxKz0xO2QoKX07dmFyIHA9ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixwLCExKTtsPXNldFRpbWVvdXQobiwwKX07XCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixwLCExKTpwKCl9fSkoKTtcclxuIiwidmFyIG1vYmlsZU1lbnUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJCgnLmpzLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gVGV4dGFyZWEgYXV0by1zaXplXHJcblxyXG4gICAgdmFyIHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtaW5wdXQnKTtcclxuICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhdXRvc2l6ZSk7XHJcbiAgICBmdW5jdGlvbiBhdXRvc2l6ZSgpe1xyXG4gICAgICAgIHZhciBlbCA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDphdXRvOyBwYWRkaW5nOjAnO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJy1tb3otYm94LXNpemluZzpjb250ZW50LWJveCc7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OicgKyBlbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0sMCk7XHJcbiAgICB9XHJcbiAgICAvLyBEaXNhYmxlIHN1Ym1pdCBidG5cclxuICAgIHZhciBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VuZC1idG4nKTtcclxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYodGV4dGFyZWEudmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vbW9iaWxlTWVudVxyXG4gICAgbW9iaWxlTWVudS5pbml0KCk7XHJcbn0pO1xyXG4iXX0=
