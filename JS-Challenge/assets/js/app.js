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
if(document.querySelector('.day1')){
    day1.init();
}








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheTEuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF5MSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicscGxheVNvdW5kKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheVNvdW5kKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5rZXlfX2l0ZW1bZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGlmKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZS5wcm9wZXJ0eU5hbWUgIT0gJ3RyYW5zZm9ybScpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlfX2l0ZW0nKTtcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcscmVtb3ZlVHJhbnNpdGlvbikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwiaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEnKSl7XHJcbiAgICBkYXkxLmluaXQoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
