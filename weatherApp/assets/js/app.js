let weatherApp = (function () {
    const updatingInterval = 30000;
    const stopBtn = document.querySelector('#stopBtn');
    const  submitBtn = document.querySelector('#submitBtn');
    const preloader = document.querySelector('#preloader');
    const form = document.querySelector('#search');
    const latInput = document.querySelector('#input-latitude');
    const lonInput = document.querySelector('#input-longitude');
    let errorMsg = 'Please, enter correct coordinates: Latitude(from -90 to 90), Longitude(from -180 to 180)!';
    const errorModal = document.querySelector('#error-modal');
    let infoTitle = document.querySelector('#info-title');
    let localLat = null;
    let localLon = null;
    let timerId = setInterval(_updateData, updatingInterval);//interval updating

    //form error

    function _showError() {
        errorModal.innerText = errorMsg;
        errorModal.classList.add('show');
        setTimeout(function () {
            errorModal.classList.remove('show');
        }, 4000);
    }

    //form validation

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if(Number(latInput.value) > 90 || Number(latInput.value) < -90 || latInput.value == ''){
            _showError();
            latInput.value = '';
            lonInput.value = '';
        }else if(Number(lonInput.value) > 180 || Number(lonInput.value) < -180 || lonInput.value == ''){
            _showError();
            lonInput.value = '';
            latInput.value = '';
        }else{
            localLat = latInput.value;
            localLon = lonInput.value;
            infoTitle.innerText = 'Location';
            _updateData();
        }
    });

    //getting data from api service

    function _getWeather() {
        return new Promise(function (resolve, reject) {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${localLat}&lon=${localLon}&appid=403ae2276a8ab4fb089ef9e0ea0d279e`;
            let xhr = new XMLHttpRequest();
            let weather = null;
            xhr.responseType = 'json';
            xhr.open('GET', url, true);
            xhr.onload = function() {
                if (xhr.status < 400) {
                    preloader.classList.add("disable");
                    weather = xhr.response;
                    resolve(weather);
                } else {
                    reject();
                }
            };
            xhr.send();
        })
    }

    //rendering data

    function _renderData(coord1,coord2,t,st,w) {
        let lat = document.querySelector('#latitude'),
            lon = document.querySelector('#longitude'),
            temp = document.querySelector('#tempreture'),
            weatherStatus = document.querySelector('#weather-status'),
            windSpeed = document.querySelector('#wind-speed');
        lat.innerText = coord1 + ", ";
        lon.innerText = coord2;
        temp.innerText = t.toFixed(1) + ' °C';
        weatherStatus.innerText = st;
        windSpeed.innerText = w + 'm/s';
    }

    //updating all data and rendering it on the page

    function _updateData() {
        return _getWeather()
            .then(function (weather) {
                let temp = weather.main.temp - 273,
                    weatherStatus = weather.weather[0].main,
                    windSpeed = weather.wind.speed;
                _renderData(localLat,localLon,temp,weatherStatus,windSpeed);
            }, function () {
                console.error("Что-то пошло не так!!!");
            });
    }

    //unloading page

    function _stopUnloading(e) {
        e.returnValue = false;
    }

    //getting local position

    window.addEventListener('beforeunload', _stopUnloading);

    //stop updating data
    stopBtn.addEventListener("click",function (e) {
        e.preventDefault();
        clearInterval(timerId);
        window.removeEventListener('beforeunload', _stopUnloading);
    });

    //first initialization
    function _start() {
        return navigator.geolocation.getCurrentPosition(function(geo) {
            //initial coordinates
            localLat = geo.coords.latitude.toFixed(4);
            localLon = geo.coords.longitude.toFixed(4);
            _updateData();
        });
    }

    return {
        init: _start
    }
})();
document.addEventListener('DOMContentLoaded', function(){
    weatherApp.init();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXJBcHAuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SEE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHdlYXRoZXJBcHAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdXBkYXRpbmdJbnRlcnZhbCA9IDMwMDAwO1xyXG4gICAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9wQnRuJyk7XHJcbiAgICBjb25zdCAgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ0bicpO1xyXG4gICAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByZWxvYWRlcicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcclxuICAgIGNvbnN0IGxhdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWxhdGl0dWRlJyk7XHJcbiAgICBjb25zdCBsb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1sb25naXR1ZGUnKTtcclxuICAgIGxldCBlcnJvck1zZyA9ICdQbGVhc2UsIGVudGVyIGNvcnJlY3QgY29vcmRpbmF0ZXM6IExhdGl0dWRlKGZyb20gLTkwIHRvIDkwKSwgTG9uZ2l0dWRlKGZyb20gLTE4MCB0byAxODApISc7XHJcbiAgICBjb25zdCBlcnJvck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLW1vZGFsJyk7XHJcbiAgICBsZXQgaW5mb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm8tdGl0bGUnKTtcclxuICAgIGxldCBsb2NhbExhdCA9IG51bGw7XHJcbiAgICBsZXQgbG9jYWxMb24gPSBudWxsO1xyXG4gICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbChfdXBkYXRlRGF0YSwgdXBkYXRpbmdJbnRlcnZhbCk7Ly9pbnRlcnZhbCB1cGRhdGluZ1xyXG5cclxuICAgIC8vZm9ybSBlcnJvclxyXG5cclxuICAgIGZ1bmN0aW9uIF9zaG93RXJyb3IoKSB7XHJcbiAgICAgICAgZXJyb3JNb2RhbC5pbm5lclRleHQgPSBlcnJvck1zZztcclxuICAgICAgICBlcnJvck1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXJyb3JNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9mb3JtIHZhbGlkYXRpb25cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKE51bWJlcihsYXRJbnB1dC52YWx1ZSkgPiA5MCB8fCBOdW1iZXIobGF0SW5wdXQudmFsdWUpIDwgLTkwIHx8IGxhdElucHV0LnZhbHVlID09ICcnKXtcclxuICAgICAgICAgICAgX3Nob3dFcnJvcigpO1xyXG4gICAgICAgICAgICBsYXRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBsb25JbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1lbHNlIGlmKE51bWJlcihsb25JbnB1dC52YWx1ZSkgPiAxODAgfHwgTnVtYmVyKGxvbklucHV0LnZhbHVlKSA8IC0xODAgfHwgbG9uSW5wdXQudmFsdWUgPT0gJycpe1xyXG4gICAgICAgICAgICBfc2hvd0Vycm9yKCk7XHJcbiAgICAgICAgICAgIGxvbklucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGxhdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxvY2FsTGF0ID0gbGF0SW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGxvY2FsTG9uID0gbG9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIGluZm9UaXRsZS5pbm5lclRleHQgPSAnTG9jYXRpb24nO1xyXG4gICAgICAgICAgICBfdXBkYXRlRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vZ2V0dGluZyBkYXRhIGZyb20gYXBpIHNlcnZpY2VcclxuXHJcbiAgICBmdW5jdGlvbiBfZ2V0V2VhdGhlcigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xvY2FsTGF0fSZsb249JHtsb2NhbExvbn0mYXBwaWQ9NDAzYWUyMjc2YThhYjRmYjA4OWVmOWUwZWEwZDI3OWVgO1xyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGxldCB3ZWF0aGVyID0gbnVsbDtcclxuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYXRoZXIgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3ZWF0aGVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbmRlcmluZyBkYXRhXHJcblxyXG4gICAgZnVuY3Rpb24gX3JlbmRlckRhdGEoY29vcmQxLGNvb3JkMix0LHN0LHcpIHtcclxuICAgICAgICBsZXQgbGF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhdGl0dWRlJyksXHJcbiAgICAgICAgICAgIGxvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb25naXR1ZGUnKSxcclxuICAgICAgICAgICAgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wcmV0dXJlJyksXHJcbiAgICAgICAgICAgIHdlYXRoZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1zdGF0dXMnKSxcclxuICAgICAgICAgICAgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcclxuICAgICAgICBsYXQuaW5uZXJUZXh0ID0gY29vcmQxICsgXCIsIFwiO1xyXG4gICAgICAgIGxvbi5pbm5lclRleHQgPSBjb29yZDI7XHJcbiAgICAgICAgdGVtcC5pbm5lclRleHQgPSB0LnRvRml4ZWQoMSkgKyAnIMKwQyc7XHJcbiAgICAgICAgd2VhdGhlclN0YXR1cy5pbm5lclRleHQgPSBzdDtcclxuICAgICAgICB3aW5kU3BlZWQuaW5uZXJUZXh0ID0gdyArICdtL3MnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRpbmcgYWxsIGRhdGEgYW5kIHJlbmRlcmluZyBpdCBvbiB0aGUgcGFnZVxyXG5cclxuICAgIGZ1bmN0aW9uIF91cGRhdGVEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBfZ2V0V2VhdGhlcigpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh3ZWF0aGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHdlYXRoZXIubWFpbi50ZW1wIC0gMjczLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlYXRoZXJTdGF0dXMgPSB3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbixcclxuICAgICAgICAgICAgICAgICAgICB3aW5kU3BlZWQgPSB3ZWF0aGVyLndpbmQuc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBfcmVuZGVyRGF0YShsb2NhbExhdCxsb2NhbExvbix0ZW1wLHdlYXRoZXJTdGF0dXMsd2luZFNwZWVkKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcItCn0YLQvi3RgtC+INC/0L7RiNC70L4g0L3QtSDRgtCw0LohISFcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdW5sb2FkaW5nIHBhZ2VcclxuXHJcbiAgICBmdW5jdGlvbiBfc3RvcFVubG9hZGluZyhlKSB7XHJcbiAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0dGluZyBsb2NhbCBwb3NpdGlvblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBfc3RvcFVubG9hZGluZyk7XHJcblxyXG4gICAgLy9zdG9wIHVwZGF0aW5nIGRhdGFcclxuICAgIHN0b3BCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgX3N0b3BVbmxvYWRpbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9maXJzdCBpbml0aWFsaXphdGlvblxyXG4gICAgZnVuY3Rpb24gX3N0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKGdlbykge1xyXG4gICAgICAgICAgICAvL2luaXRpYWwgY29vcmRpbmF0ZXNcclxuICAgICAgICAgICAgbG9jYWxMYXQgPSBnZW8uY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgIGxvY2FsTG9uID0gZ2VvLmNvb3Jkcy5sb25naXR1ZGUudG9GaXhlZCg0KTtcclxuICAgICAgICAgICAgX3VwZGF0ZURhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IF9zdGFydFxyXG4gICAgfVxyXG59KSgpOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgd2VhdGhlckFwcC5pbml0KCk7XHJcbn0pO1xyXG4iXX0=
