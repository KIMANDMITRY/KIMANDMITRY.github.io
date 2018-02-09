let weatherApp = (function () {
    return{
        init:function () {
            const updatingInterval = 6000;
            const stopBtn = document.querySelector('#stopBtn');
            const  submitBtn = document.querySelector('#submitBtn');
            let updatingStatus = true; //status of interval send xhr

            const preloader = document.querySelector('#preloader');
            const form = document.querySelector('#search');
            const latInput = document.querySelector('#input-latitude');
            const lonInput = document.querySelector('#input-longitude');
            let errorMsg = 'Please, enter correct coordinates: Latitude(from -90 to 90), Longitude(from -180 to 180)!';
            const errorModal = document.querySelector('#error-modal');
            let infoTitle = document.querySelector('#info-title');

            //unloading page

            function stopUnloading(e) {
                e.returnValue = false;
            }
            window.addEventListener('beforeunload', stopUnloading);

            //search error

            function showError() {
                errorModal.innerText = errorMsg;
                errorModal.classList.add('show');
                setTimeout(function () {
                    errorModal.classList.remove('show');
                }, 4000);
            }

            //getting local position

            navigator.geolocation.getCurrentPosition(function(geo) {

                //initial coordinates

                let localLat = geo.coords.latitude.toFixed(4);
                let localLon = geo.coords.longitude.toFixed(4);

                //form validation

                form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    if(Number(latInput.value) > 90 || Number(latInput.value) < -90 || latInput.value == ''){
                        showError();
                    }else if(Number(lonInput.value) > 180 || Number(lonInput.value) < -180 || lonInput.value == ''){
                        showError();
                    }else{
                        localLat = latInput.value;
                        localLon = lonInput.value;
                        infoTitle.innerText = 'Location';
                        updateData();
                    }
                });

                //getting data from api service

                function getWeather() {
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

                function renderData(coord1,coord2,t,st,w) {
                    let lat = document.querySelector('#latitude'),
                        lon = document.querySelector('#longitude'),
                        temp = document.querySelector('#tempreture'),
                        weatherStatus = document.querySelector('#weather-status'),
                        windSpeed = document.querySelector('#wind-speed');
                    lat.innerText = coord1 + ", ";
                    lon.innerText = coord2;
                    temp.innerText = t.toFixed(1) + ' °C';
                    weatherStatus.innerText = st;
                    windSpeed.innerText = w + 'mph';
                }

                //updating all data and rendering it on the page

                function updateData() {
                    return getWeather()
                        .then(function (weather) {
                            let temp = (weather.main.temp / 10 - 32) * (5/9),
                                weatherStatus = weather.weather[0].main,
                                windSpeed = weather.wind.speed;
                            renderData(localLat,localLon,temp,weatherStatus,windSpeed);
                        }, function () {
                            console.error("Что-то пошло не так!!!");
                        });
                }

                //interval updating

                let timerId = setInterval(updateData, updatingInterval);

                stopBtn.addEventListener("click",function (e) {
                    e.preventDefault();
                    updatingStatus = false;
                    clearInterval(timerId);
                    window.removeEventListener('beforeunload', stopUnloading);
                });
                updateData();
            });
        }
    }
})();
document.addEventListener('DOMContentLoaded', function(){
    weatherApp.init();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXJBcHAuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSEE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHdlYXRoZXJBcHAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGluZ0ludGVydmFsID0gNjAwMDtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9wQnRuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnRuJyk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGluZ1N0YXR1cyA9IHRydWU7IC8vc3RhdHVzIG9mIGludGVydmFsIHNlbmQgeGhyXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlbG9hZGVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWxhdGl0dWRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWxvbmdpdHVkZScpO1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JNc2cgPSAnUGxlYXNlLCBlbnRlciBjb3JyZWN0IGNvb3JkaW5hdGVzOiBMYXRpdHVkZShmcm9tIC05MCB0byA5MCksIExvbmdpdHVkZShmcm9tIC0xODAgdG8gMTgwKSEnO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLW1vZGFsJyk7XHJcbiAgICAgICAgICAgIGxldCBpbmZvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mby10aXRsZScpO1xyXG5cclxuICAgICAgICAgICAgLy91bmxvYWRpbmcgcGFnZVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFVubG9hZGluZyhlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHN0b3BVbmxvYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgLy9zZWFyY2ggZXJyb3JcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dFcnJvcigpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yTW9kYWwuaW5uZXJUZXh0ID0gZXJyb3JNc2c7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZ2V0dGluZyBsb2NhbCBwb3NpdGlvblxyXG5cclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihnZW8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luaXRpYWwgY29vcmRpbmF0ZXNcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxMYXQgPSBnZW8uY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoNCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxMb24gPSBnZW8uY29vcmRzLmxvbmdpdHVkZS50b0ZpeGVkKDQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZm9ybSB2YWxpZGF0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIobGF0SW5wdXQudmFsdWUpID4gOTAgfHwgTnVtYmVyKGxhdElucHV0LnZhbHVlKSA8IC05MCB8fCBsYXRJbnB1dC52YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKE51bWJlcihsb25JbnB1dC52YWx1ZSkgPiAxODAgfHwgTnVtYmVyKGxvbklucHV0LnZhbHVlKSA8IC0xODAgfHwgbG9uSW5wdXQudmFsdWUgPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxMYXQgPSBsYXRJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxMb24gPSBsb25JbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb1RpdGxlLmlubmVyVGV4dCA9ICdMb2NhdGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2dldHRpbmcgZGF0YSBmcm9tIGFwaSBzZXJ2aWNlXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xvY2FsTGF0fSZsb249JHtsb2NhbExvbn0mYXBwaWQ9NDAzYWUyMjc2YThhYjRmYjA4OWVmOWUwZWEwZDI3OWVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3ZWF0aGVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXIgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh3ZWF0aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3JlbmRlcmluZyBkYXRhXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVuZGVyRGF0YShjb29yZDEsY29vcmQyLHQsc3Qsdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGF0aXR1ZGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvbmdpdHVkZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXByZXR1cmUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLXN0YXR1cycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdC5pbm5lclRleHQgPSBjb29yZDEgKyBcIiwgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9uLmlubmVyVGV4dCA9IGNvb3JkMjtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wLmlubmVyVGV4dCA9IHQudG9GaXhlZCgxKSArICcgwrBDJztcclxuICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyU3RhdHVzLmlubmVyVGV4dCA9IHN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRTcGVlZC5pbm5lclRleHQgPSB3ICsgJ21waCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy91cGRhdGluZyBhbGwgZGF0YSBhbmQgcmVuZGVyaW5nIGl0IG9uIHRoZSBwYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGF0YSgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0V2VhdGhlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh3ZWF0aGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9ICh3ZWF0aGVyLm1haW4udGVtcCAvIDEwIC0gMzIpICogKDUvOSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlclN0YXR1cyA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRTcGVlZCA9IHdlYXRoZXIud2luZC5zcGVlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckRhdGEobG9jYWxMYXQsbG9jYWxMb24sdGVtcCx3ZWF0aGVyU3RhdHVzLHdpbmRTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLQp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6ISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2ludGVydmFsIHVwZGF0aW5nXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVySWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVEYXRhLCB1cGRhdGluZ0ludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0aW5nU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgc3RvcFVubG9hZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgd2VhdGhlckFwcC5pbml0KCk7XHJcbn0pO1xyXG4iXX0=
