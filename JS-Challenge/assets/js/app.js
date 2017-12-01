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
if(document.querySelector('.day1')){
    day1.init();
}
if(document.querySelector('.day2')){
    day2.init();
}








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheTEuanMiLCJkYXkyLmpzIiwiaGFtYnVyZ2VyLW1lbnUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRheTEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLHBsYXlTb3VuZCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXlTb3VuZChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAua2V5X19pdGVtW2RhdGEta2V5PVwiJHtlLmtleUNvZGV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZighYXVkaW8pIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGUucHJvcGVydHlOYW1lICE9ICd0cmFuc2Zvcm0nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5X19pdGVtJyk7XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLHJlbW92ZVRyYW5zaXRpb24pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXkyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZEhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjLWhhbmQnKTtcclxuICAgICAgICAgICAgY29uc3QgbWludXRlSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4taGFuZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBob3VySGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VyLWhhbmQnKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZERlZ3JlZSA9ICgoc2Vjb25kcyAvIDYwKSAqIDM2MCkgKyA5MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlc0RlZ3JlZSA9ICgobWludXRlcyAvIDYwKSAqIDM2MCkgKyA5MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Vyc0RlZ3JlZSA9ICgoaG91cnMgLyAxMikgKiAzNjApICsgOTA7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtzZWNvbmREZWdyZWV9ZGVnKWA7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHttaW51dGVzRGVncmVlfWRlZylgO1xyXG4gICAgICAgICAgICAgICAgaG91ckhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2hvdXJzRGVncmVlfWRlZylgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKHNldERhdGUsMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBtYWluTWVudSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaGFtYnVyZ2VyID0gJCgnLmhhbWJ1cmdlcicpO1xyXG4gICAgICAgICAgICBoYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnUgPSAkKCcubWFpbi1uYXZfX3dyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuZmFkZVRvZ2dsZSg1MDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsIm1haW5NZW51LmluaXQoKTtcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEnKSl7XHJcbiAgICBkYXkxLmluaXQoKTtcclxufVxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MicpKXtcclxuICAgIGRheTIuaW5pdCgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0=
