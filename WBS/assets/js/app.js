$(function(){
    $('.tabs-controls__link').click(function(){
        var tabId = $(this).attr('data-tab');

        $('.tabs-controls__link').removeClass('active');
        $('.projects-block__container').removeClass('active');

        $(this).addClass('active');
        $('#'+tabId).addClass('active');
    });

});
//#######################################| NAV SCROLLING |###################
var navScrolling = (function () {
    return{
        init: function () {
            var navItem  = $('.nav__link'),
                navTarget = $('section');
            $('a[href*="#"]').on("click", function(e){
                e.preventDefault();
                var elementClick =  $(this).attr("href"),
                    destination =   $(elementClick).offset().top;
                $('html, body').animate({scrollTop: destination}, 1000);
            });
        }
    }
})();
navScrolling.init();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhc3ktdGFicy5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy50YWJzLWNvbnRyb2xzX19saW5rJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGFiSWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFiJyk7XHJcblxyXG4gICAgICAgICQoJy50YWJzLWNvbnRyb2xzX19saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5wcm9qZWN0cy1ibG9ja19fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcjJyt0YWJJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG59KTsiLCIvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI3wgTkFWIFNDUk9MTElORyB8IyMjIyMjIyMjIyMjIyMjIyMjI1xyXG52YXIgbmF2U2Nyb2xsaW5nID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZJdGVtICA9ICQoJy5uYXZfX2xpbmsnKSxcclxuICAgICAgICAgICAgICAgIG5hdlRhcmdldCA9ICQoJ3NlY3Rpb24nKTtcclxuICAgICAgICAgICAgJCgnYVtocmVmKj1cIiNcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uID0gICAkKGVsZW1lbnRDbGljaykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogZGVzdGluYXRpb259LCAxMDAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpO1xyXG5uYXZTY3JvbGxpbmcuaW5pdCgpO1xyXG4iXX0=
