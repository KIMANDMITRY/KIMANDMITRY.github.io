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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXJBcHAuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9IQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgd2VhdGhlckFwcCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB1cGRhdGluZ0ludGVydmFsID0gMzAwMDA7XHJcbiAgICBjb25zdCBzdG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3BCdG4nKTtcclxuICAgIGNvbnN0ICBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnRuJyk7XHJcbiAgICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlbG9hZGVyJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xyXG4gICAgY29uc3QgbGF0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbGF0aXR1ZGUnKTtcclxuICAgIGNvbnN0IGxvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWxvbmdpdHVkZScpO1xyXG4gICAgbGV0IGVycm9yTXNnID0gJ1BsZWFzZSwgZW50ZXIgY29ycmVjdCBjb29yZGluYXRlczogTGF0aXR1ZGUoZnJvbSAtOTAgdG8gOTApLCBMb25naXR1ZGUoZnJvbSAtMTgwIHRvIDE4MCkhJztcclxuICAgIGNvbnN0IGVycm9yTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3ItbW9kYWwnKTtcclxuICAgIGxldCBpbmZvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mby10aXRsZScpO1xyXG4gICAgbGV0IGxvY2FsTGF0ID0gbnVsbDtcclxuICAgIGxldCBsb2NhbExvbiA9IG51bGw7XHJcbiAgICBsZXQgdGltZXJJZCA9IHNldEludGVydmFsKF91cGRhdGVEYXRhLCB1cGRhdGluZ0ludGVydmFsKTsvL2ludGVydmFsIHVwZGF0aW5nXHJcblxyXG4gICAgLy9mb3JtIGVycm9yXHJcblxyXG4gICAgZnVuY3Rpb24gX3Nob3dFcnJvcigpIHtcclxuICAgICAgICBlcnJvck1vZGFsLmlubmVyVGV4dCA9IGVycm9yTXNnO1xyXG4gICAgICAgIGVycm9yTW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlcnJvck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2Zvcm0gdmFsaWRhdGlvblxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoTnVtYmVyKGxhdElucHV0LnZhbHVlKSA+IDkwIHx8IE51bWJlcihsYXRJbnB1dC52YWx1ZSkgPCAtOTAgfHwgbGF0SW5wdXQudmFsdWUgPT0gJycpe1xyXG4gICAgICAgICAgICBfc2hvd0Vycm9yKCk7XHJcbiAgICAgICAgICAgIGxhdElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGxvbklucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfWVsc2UgaWYoTnVtYmVyKGxvbklucHV0LnZhbHVlKSA+IDE4MCB8fCBOdW1iZXIobG9uSW5wdXQudmFsdWUpIDwgLTE4MCB8fCBsb25JbnB1dC52YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgIF9zaG93RXJyb3IoKTtcclxuICAgICAgICAgICAgbG9uSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgbGF0SW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbG9jYWxMYXQgPSBsYXRJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgbG9jYWxMb24gPSBsb25JbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgaW5mb1RpdGxlLmlubmVyVGV4dCA9ICdMb2NhdGlvbic7XHJcbiAgICAgICAgICAgIF91cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9nZXR0aW5nIGRhdGEgZnJvbSBhcGkgc2VydmljZVxyXG5cclxuICAgIGZ1bmN0aW9uIF9nZXRXZWF0aGVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bG9jYWxMYXR9Jmxvbj0ke2xvY2FsTG9ufSZhcHBpZD00MDNhZTIyNzZhOGFiNGZiMDg5ZWY5ZTBlYTBkMjc5ZWA7XHJcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbGV0IHdlYXRoZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkZXIuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VhdGhlciA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdlYXRoZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vcmVuZGVyaW5nIGRhdGFcclxuXHJcbiAgICBmdW5jdGlvbiBfcmVuZGVyRGF0YShjb29yZDEsY29vcmQyLHQsc3Qsdykge1xyXG4gICAgICAgIGxldCBsYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKSxcclxuICAgICAgICAgICAgbG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvbmdpdHVkZScpLFxyXG4gICAgICAgICAgICB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXByZXR1cmUnKSxcclxuICAgICAgICAgICAgd2VhdGhlclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLXN0YXR1cycpLFxyXG4gICAgICAgICAgICB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCcpO1xyXG4gICAgICAgIGxhdC5pbm5lclRleHQgPSBjb29yZDEgKyBcIiwgXCI7XHJcbiAgICAgICAgbG9uLmlubmVyVGV4dCA9IGNvb3JkMjtcclxuICAgICAgICB0ZW1wLmlubmVyVGV4dCA9IHQudG9GaXhlZCgxKSArICcgwrBDJztcclxuICAgICAgICB3ZWF0aGVyU3RhdHVzLmlubmVyVGV4dCA9IHN0O1xyXG4gICAgICAgIHdpbmRTcGVlZC5pbm5lclRleHQgPSB3ICsgJ20vcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLy91cGRhdGluZyBhbGwgZGF0YSBhbmQgcmVuZGVyaW5nIGl0IG9uIHRoZSBwYWdlXHJcblxyXG4gICAgZnVuY3Rpb24gX3VwZGF0ZURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9nZXRXZWF0aGVyKClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHdlYXRoZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gd2VhdGhlci5tYWluLnRlbXAgLSAyNzMsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VhdGhlclN0YXR1cyA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRTcGVlZCA9IHdlYXRoZXIud2luZC5zcGVlZDtcclxuICAgICAgICAgICAgICAgIF9yZW5kZXJEYXRhKGxvY2FsTGF0LGxvY2FsTG9uLHRlbXAsd2VhdGhlclN0YXR1cyx3aW5kU3BlZWQpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi0KfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiEhIVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy91bmxvYWRpbmcgcGFnZVxyXG5cclxuICAgIGZ1bmN0aW9uIF9zdG9wVW5sb2FkaW5nKGUpIHtcclxuICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0aW5nIGxvY2FsIHBvc2l0aW9uXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIF9zdG9wVW5sb2FkaW5nKTtcclxuXHJcbiAgICAvL3N0b3AgdXBkYXRpbmcgZGF0YVxyXG4gICAgc3RvcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBfc3RvcFVubG9hZGluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2ZpcnN0IGluaXRpYWxpemF0aW9uXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIF9zdGFydCgpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihnZW8pIHtcclxuICAgICAgICAgICAgLy9pbml0aWFsIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgIGxvY2FsTGF0ID0gZ2VvLmNvb3Jkcy5sYXRpdHVkZS50b0ZpeGVkKDQpO1xyXG4gICAgICAgICAgICBsb2NhbExvbiA9IGdlby5jb29yZHMubG9uZ2l0dWRlLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgIF91cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBfc3RhcnRcclxuICAgIH1cclxufSkoKTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICAgIHdlYXRoZXJBcHAuaW5pdCgpO1xyXG59KTtcclxuIl19
