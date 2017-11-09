$(function(){
    $('.tabs-controls__link').click(function(){
        var tabId = $(this).attr('data-tab');

        $('.tabs-controls__link').removeClass('active');
        $('.projects-block__container').removeClass('active');

        $(this).addClass('active');
        $('#'+tabId).addClass('active');
    });

});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhc3ktdGFicy5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy50YWJzLWNvbnRyb2xzX19saW5rJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGFiSWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFiJyk7XHJcblxyXG4gICAgICAgICQoJy50YWJzLWNvbnRyb2xzX19saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5wcm9qZWN0cy1ibG9ja19fY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcjJyt0YWJJZCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG59KTsiLCJcclxuIl19
