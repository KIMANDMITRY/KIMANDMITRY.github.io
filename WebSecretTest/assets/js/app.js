document.addEventListener('DOMContentLoaded', function(){
//#################################|  Acordion |############################
    $(function() {
        // (Optional) Active an item if it has the class "is-active"
        $(".accordion > .accordion-item.active").children(".accordion-panel").slideDown();

        $(".accordion > .accordion-item > .accordion-thumb").click(function() {

            $(this).parent('.accordion-item').toggleClass("active").children(".accordion-panel").slideToggle("ease-out");
        });
    });

    //################################| Hamburger Menu |#####################
    var navigationHamburger = (function () {
        return{
            init: function () {
                var hamburger = $('.hamburger'),
                    nav = $('.nav'),
                    navItem = $('.nav__link'),
                    overlay = $('.menu-overlay');
                if(document.querySelector('html').offsetWidth <= 840){
                    hamburger.on('click',function () {
                        nav.slideToggle(400);
                        overlay.toggleClass('active');
                    });
                    navItem.on('click',function () {
                        nav.slideToggle(400);
                        overlay.toggleClass('active');
                    });
                    overlay.on('click',function () {
                        nav.slideToggle(400);
                        overlay.toggleClass('active');
                    });
                }
            }
        }
    })();
    navigationHamburger.init();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8ICBBY29yZGlvbiB8IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAoT3B0aW9uYWwpIEFjdGl2ZSBhbiBpdGVtIGlmIGl0IGhhcyB0aGUgY2xhc3MgXCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICQoXCIuYWNjb3JkaW9uID4gLmFjY29yZGlvbi1pdGVtLmFjdGl2ZVwiKS5jaGlsZHJlbihcIi5hY2NvcmRpb24tcGFuZWxcIikuc2xpZGVEb3duKCk7XHJcblxyXG4gICAgICAgICQoXCIuYWNjb3JkaW9uID4gLmFjY29yZGlvbi1pdGVtID4gLmFjY29yZGlvbi10aHVtYlwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuYWNjb3JkaW9uLWl0ZW0nKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKS5jaGlsZHJlbihcIi5hY2NvcmRpb24tcGFuZWxcIikuc2xpZGVUb2dnbGUoXCJlYXNlLW91dFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyN8IEhhbWJ1cmdlciBNZW51IHwjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHZhciBuYXZpZ2F0aW9uSGFtYnVyZ2VyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYW1idXJnZXIgPSAkKCcuaGFtYnVyZ2VyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2ID0gJCgnLm5hdicpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdkl0ZW0gPSAkKCcubmF2X19saW5rJyksXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheSA9ICQoJy5tZW51LW92ZXJsYXknKTtcclxuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5vZmZzZXRXaWR0aCA8PSA4NDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbWJ1cmdlci5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2LnNsaWRlVG9nZ2xlKDQwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkl0ZW0ub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdi5zbGlkZVRvZ2dsZSg0MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5Lm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYuc2xpZGVUb2dnbGUoNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgbmF2aWdhdGlvbkhhbWJ1cmdlci5pbml0KCk7XHJcbn0pO1xyXG4iXX0=
