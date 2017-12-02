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
if(document.querySelector('.day3')){
    day3.init();
}








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheTEuanMiLCJkYXkyLmpzIiwiZGF5My5qcyIsImhhbWJ1cmdlci1tZW51LmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBkYXkxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxwbGF5U291bmQpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBwbGF5U291bmQoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmtleV9faXRlbVtkYXRhLWtleT1cIiR7ZS5rZXlDb2RlfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgaWYoIWF1ZGlvKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlLnByb3BlcnR5TmFtZSAhPSAndHJhbnNmb3JtJykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleV9faXRlbScpO1xyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IGtleS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJyxyZW1vdmVUcmFuc2l0aW9uKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5MiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYy1oYW5kJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZUhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLWhhbmQnKTtcclxuICAgICAgICAgICAgY29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91ci1oYW5kJyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldERhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IG5vdy5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmREZWdyZWUgPSAoKHNlY29uZHMgLyA2MCkgKiAzNjApICsgOTA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNEZWdyZWUgPSAoKG1pbnV0ZXMgLyA2MCkgKiAzNjApICsgOTA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnNEZWdyZWUgPSAoKGhvdXJzIC8gMTIpICogMzYwKSArIDkwO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7c2Vjb25kRGVncmVlfWRlZylgO1xyXG4gICAgICAgICAgICAgICAgbWludXRlSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bWludXRlc0RlZ3JlZX1kZWcpYDtcclxuICAgICAgICAgICAgICAgIGhvdXJIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtob3Vyc0RlZ3JlZX1kZWcpYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChzZXREYXRlLDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5MyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRheTMtaW5wdXQnKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMuZGF0YXNldC5zaXppbmcgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt0aGlzLm5hbWV9YCwgdGhpcy52YWx1ZSArIHN1ZmZpeCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVIYW5kbGVyKSk7XHJcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHVwZGF0ZUhhbmRsZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IG1haW5NZW51ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW1idXJnZXIgPSAkKCcuaGFtYnVyZ2VyJyk7XHJcbiAgICAgICAgICAgIGhhbWJ1cmdlci5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVudSA9ICQoJy5tYWluLW5hdl9fd3JhcHBlcicpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbWVudS5mYWRlVG9nZ2xlKDUwMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJ1cmdlcl9jbG9zZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibWFpbk1lbnUuaW5pdCgpO1xyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MScpKXtcclxuICAgIGRheTEuaW5pdCgpO1xyXG59XHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkyJykpe1xyXG4gICAgZGF5Mi5pbml0KCk7XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTMnKSl7XHJcbiAgICBkYXkzLmluaXQoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
