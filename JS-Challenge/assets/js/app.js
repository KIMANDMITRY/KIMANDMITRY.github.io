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
let day10 = (function () {
    return{
        init: function () {
            const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

            let lastChecked;

            function handleCheck(e) {
                // Check if they had the shift key down
                // AND check that they are checking it
                let inBetween = false;
                if (e.shiftKey && this.checked) {
                    // go ahead and do what we please
                    // loop over every single checkbox
                    checkboxes.forEach(checkbox => {
                        console.log(checkbox);
                        if (checkbox === this || checkbox === lastChecked) {
                            inBetween = !inBetween;
                            console.log('STarting to check them inbetween!');
                        }

                        if (inBetween) {
                            checkbox.checked = true;
                        }
                    });
                }

                lastChecked = this;
            }

            checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
        }
    }
})();
let day11 = (function () {
    return{
        init: function () {
            /* Get Our Elements */
            const player = document.querySelector('.player');
            const video = player.querySelector('.viewer');
            const progress = player.querySelector('.progress');
            const progressBar = player.querySelector('.progress__filled');
            const toggle = player.querySelector('.toggle');
            const skipButtons = player.querySelectorAll('[data-skip]');
            const ranges = player.querySelectorAll('.player__slider');

            /* Build out functions */
            function togglePlay() {
                const method = video.paused ? 'play' : 'pause';
                video[method]();
            }

            function updateButton() {
                const icon = this.paused ? '>' : '||';
                console.log(icon);
                toggle.textContent = icon;
            }

            function skip() {
                video.currentTime += parseFloat(this.dataset.skip);
            }

            function handleRangeUpdate() {
                video[this.name] = this.value;
            }

            function handleProgress() {
                const percent = (video.currentTime / video.duration) * 100;
                progressBar.style.flexBasis = `${percent}%`;
            }

            function scrub(e) {
                const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
                video.currentTime = scrubTime;
            }

            /* Hook up the event listeners */
            video.addEventListener('click', togglePlay);
            video.addEventListener('play', updateButton);
            video.addEventListener('pause', updateButton);
            video.addEventListener('timeupdate', handleProgress);

            toggle.addEventListener('click', togglePlay);
            skipButtons.forEach(button => button.addEventListener('click', skip));
            ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
            ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

            let mousedown = false;
            progress.addEventListener('click', scrub);
            progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
            progress.addEventListener('mousedown', () => mousedown = true);
            progress.addEventListener('mouseup', () => mousedown = false);

        }
    }
})();
let day12 = (function () {
    return{
        init: function () {
            const pressed = [];
            const secretCode = 'wesbos';

            window.addEventListener('keyup', (e) => {
                console.log(e.key);
                pressed.push(e.key);
                pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
                if (pressed.join('').includes(secretCode)) {
                    console.log('DING DING!');
                    cornify_add();
                }
                console.log(pressed);
            });
        }
    }
})();
let day13 = (function () {
    return{
        init: function () {
            function debounce(func, wait = 20, immediate = true) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            };

            const sliderImages = document.querySelectorAll('.slide-in');

            function checkSlide() {
                sliderImages.forEach(sliderImage => {
                    // half way through the image
                    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
                    // bottom of the image
                    const imageBottom = sliderImage.offsetTop + sliderImage.height;
                    const isHalfShown = slideInAt > sliderImage.offsetTop;
                    const isNotScrolledPast = window.scrollY < imageBottom;
                    if (isHalfShown && isNotScrolledPast) {
                        sliderImage.classList.add('active');
                    } else {
                        sliderImage.classList.remove('active');
                    }
                });
            }

            window.addEventListener('scroll', debounce(checkSlide));
        }
    }
})();
let day14 = (function () {
    return{
        init: function () {
            // start with strings, numbers and booleans
            // let age = 100;
            // let age2 = age;
            // console.log(age, age2);
            // age = 200;
            // console.log(age, age2);

            // let name = 'Wes';
            // let name2 = name;
            // console.log(name, name2);
            // name = 'wesley';
            // console.log(name, name2);

            // Let's say we have an array
            const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

            // and we want to make a copy of it.
            const team = players;

            console.log(players, team);
            // You might think we can just do something like this:
            // team[3] = 'Lux';

            // however what happens when we update that array?

            // now here is the problem!

            // oh no - we have edited the original array too!

            // Why? It's because that is an array reference, not an array copy. They both point to the same array!

            // So, how do we fix this? We take a copy instead!
            const team2 = players.slice();

            // one day

            // or create a new array and concat the old one in
            const team3 = [].concat(players);

            // or use the new ES6 Spread
            const team4 = [...players];
            team4[3] = 'heeee hawww';
            console.log(team4);

            const team5 = Array.from(players);

            // now when we update it, the original one isn't changed

            // The same thing goes for objects, let's say we have a person object

            // with Objects
            const person = {
                name: 'Wes Bos',
                age: 80
            };

            // and think we make a copy:
            // const captain = person;
            // captain.number = 99;

            // how do we take a copy instead?
            const cap2 = Object.assign({}, person, { number: 99, age: 12 });
            console.log(cap2);

            // We will hopefully soon see the object ...spread
            // const cap3 = {...person};

            // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

            const wes = {
                name: 'Wes',
                age: 100,
                social: {
                    twitter: '@wesbos',
                    facebook: 'wesbos.developer'
                }
            };

            console.clear();
            console.log(wes);

            const dev = Object.assign({}, wes);

            const dev2 = JSON.parse(JSON.stringify(wes));
        }
    }
})();
let day15 = (function () {
    return{
        init: function () {
            const addItems = document.querySelector('.add-items');
            const itemsList = document.querySelector('.plates');
            const items = JSON.parse(localStorage.getItem('items')) || [];

            function addItem(e) {
                e.preventDefault();
                const text = (this.querySelector('[name=item]')).value;
                const item = {
                    text,
                    done: false
                };

                items.push(item);
                populateList(items, itemsList);
                localStorage.setItem('items', JSON.stringify(items));
                this.reset();
            }

            function populateList(plates = [], platesList) {
                platesList.innerHTML = plates.map((plate, i) => {
                    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
                }).join('');
            }

            function toggleDone(e) {
                if (!e.target.matches('input')) return; // skip this unless it's an input
                const el = e.target;
                const index = el.dataset.index;
                items[index].done = !items[index].done;
                localStorage.setItem('items', JSON.stringify(items));
                populateList(items, itemsList);
            }

            addItems.addEventListener('submit', addItem);
            itemsList.addEventListener('click', toggleDone);

            populateList(items, itemsList);
        }
    }
})();
let day16 = (function () {
    return{
        init: function () {
            const hero = document.querySelector('.hero');
            const text = hero.querySelector('h1');
            const walk = 500; // 100px

            function shadow(e) {
                const { offsetWidth: width, offsetHeight: height } = hero;
                let { offsetX: x, offsetY: y } = e;

                if (this !== e.target) {
                    x = x + e.target.offsetLeft;
                    y = y + e.target.offsetTop;
                }

                const xWalk = Math.round((x / width * walk) - (walk / 2));
                const yWalk = Math.round((y / height * walk) - (walk / 2));

                text.style.textShadow = `
                      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
                      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
                      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
                      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
                    `;

            }

            hero.addEventListener('mousemove', shadow);
        }
    }
})();
let day17 = (function () {
    return{
        init: function () {
            let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
            let newBands = [];
            newBands = bands.map(function (band) {
                return band.replace(/^(a |the |an )/i, '').trim();
            });

            const sortedBands = newBands.sort((a, b) => a > b ? 1 : -1);

            document.querySelector('#bands').innerHTML =
                newBands
                    .map(band => `<li>${band}</li>`)
                    .join('');
        }
    }
})();
let day18 = (function () {
    return{
        init: function () {
            const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

            const seconds = timeNodes
                .map(node => node.dataset.time)
                .map(timeCode => {
                    const [mins, secs] = timeCode.split(':').map(parseFloat);
                    return (mins * 60) + secs;
                })
                .reduce((total, vidSeconds) => total + vidSeconds);

            let secondsLeft = seconds;
            const hours = Math.floor(secondsLeft / 3600);
            secondsLeft = secondsLeft % 3600;

            const mins = Math.floor(secondsLeft / 60);
            secondsLeft = secondsLeft % 60;

            console.log(hours, mins, secondsLeft);
        }
    }
})();
let day19 = (function () {
    return{
        init: function () {
            const video = document.querySelector('.player');
            const canvas = document.querySelector('.photo');
            const ctx = canvas.getContext('2d');
            const strip = document.querySelector('.strip');
            const snap = document.querySelector('.snap');

            function getVideo() {
                navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                    .then(localMediaStream => {
                        console.log(localMediaStream);
                        video.src = window.URL.createObjectURL(localMediaStream);
                        video.play();
                    })
                    .catch(err => {
                        console.error(`OH NO!!!`, err);
                    });
            }

            function paintToCanvas() {
                const width = video.videoWidth;
                const height = video.videoHeight;
                canvas.width = width;
                canvas.height = height;

                return setInterval(() => {
                    ctx.drawImage(video, 0, 0, width, height);
                    // take the pixels out
                    let pixels = ctx.getImageData(0, 0, width, height);
                    // mess with them
                    // pixels = redEffect(pixels);

                    pixels = rgbSplit(pixels);
                    // ctx.globalAlpha = 0.8;

                    // pixels = greenScreen(pixels);
                    // put them back
                    ctx.putImageData(pixels, 0, 0);
                }, 16);
            }

            function takePhoto() {
                // played the sound
                snap.currentTime = 0;
                snap.play();

                // take the data out of the canvas
                const data = canvas.toDataURL('image/jpeg');
                const link = document.createElement('a');
                link.href = data;
                link.setAttribute('download', 'handsome');
                link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
                strip.insertBefore(link, strip.firsChild);
            }

            function redEffect(pixels) {
                for(let i = 0; i < pixels.data.length; i+=4) {
                    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
                    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
                    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
                }
                return pixels;
            }

            function rgbSplit(pixels) {
                for(let i = 0; i < pixels.data.length; i+=4) {
                    pixels.data[i - 150] = pixels.data[i + 0]; // RED
                    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
                    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
                }
                return pixels;
            }

            function greenScreen(pixels) {
                const levels = {};

                document.querySelectorAll('.rgb input').forEach((input) => {
                    levels[input.name] = input.value;
                });

                for (i = 0; i < pixels.data.length; i = i + 4) {
                    red = pixels.data[i + 0];
                    green = pixels.data[i + 1];
                    blue = pixels.data[i + 2];
                    alpha = pixels.data[i + 3];

                    if (red >= levels.rmin
                        && green >= levels.gmin
                        && blue >= levels.bmin
                        && red <= levels.rmax
                        && green <= levels.gmax
                        && blue <= levels.bmax) {
                        // take it out!
                        pixels.data[i + 3] = 0;
                    }
                }

                return pixels;
            }

            getVideo();

            video.addEventListener('canplay', paintToCanvas);

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
let day20 = (function () {
    return{
        init: function () {
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            const recognition = new SpeechRecognition();
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            let p = document.createElement('p');
            const words = document.querySelector('.words');
            words.appendChild(p);

            recognition.addEventListener('result', e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');

                const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
                p.textContent = poopScript;

                if (e.results[0].isFinal) {
                    p = document.createElement('p');
                    words.appendChild(p);
                }
            });

            recognition.addEventListener('end', recognition.start);

            recognition.start();
        }
    }
})();
let day21 = (function () {
    return{
        init: function () {
            const arrow = document.querySelector('.arrow');
            const speed = document.querySelector('.speed-value');

            navigator.geolocation.watchPosition((data) => {
                console.log(data);
                speed.textContent = data.coords.speed;
                arrow.style.transform = `rotate(${data.coords.heading}deg)`;
            }, (err) => {
                console.error(err);
            });
        }
    }
})();
let day22 = (function () {
    return{
        init: function () {
            const triggers = document.querySelectorAll('a');
            const highlight = document.createElement('span');
            highlight.classList.add('highlight');
            document.body.appendChild(highlight);

            function highlightLink() {
                const linkCoords = this.getBoundingClientRect();
                console.log(linkCoords);
                const coords = {
                    width: linkCoords.width,
                    height: linkCoords.height,
                    top: linkCoords.top + window.scrollY,
                    left: linkCoords.left + window.scrollX
                };

                highlight.style.width = `${coords.width}px`;
                highlight.style.height = `${coords.height}px`;
                highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

            }

            triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
        }
    }
})();
let day23 = (function () {
    return{
        init: function () {
            const msg = new SpeechSynthesisUtterance();
            let voices = [];
            const voicesDropdown = document.querySelector('[name="voice"]');
            const options = document.querySelectorAll('[type="range"], [name="text"]');
            const speakButton = document.querySelector('#speak');
            const stopButton = document.querySelector('#stop');
            msg.text = document.querySelector('[name="text"]').value;

            function populateVoices() {
                voices = this.getVoices();
                voicesDropdown.innerHTML = voices
                    .filter(voice => voice.lang.includes('en'))
                    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
                    .join('');
            }

            function setVoice() {
                msg.voice = voices.find(voice => voice.name === this.value);
                toggle();
            }

            function toggle(startOver = true) {
                speechSynthesis.cancel();
                if (startOver) {
                    speechSynthesis.speak(msg);
                }
            }

            function setOption() {
                console.log(this.name, this.value);
                msg[this.name] = this.value;
                toggle();
            }

            speechSynthesis.addEventListener('voiceschanged', populateVoices);
            voicesDropdown.addEventListener('change', setVoice);
            options.forEach(option => option.addEventListener('change', setOption));
            speakButton.addEventListener('click', toggle);
            stopButton.addEventListener('click', () => toggle(false));
        }
    }
})();
let day24 = (function () {
    return{
        init: function () {
            const nav = document.querySelector('#main');
            const siteBody = document.querySelector('.day__content');
            let topOfNav = nav.offsetTop;

            function fixNav() {
                if(window.scrollY >= topOfNav) {
                    siteBody.style.paddingTop = nav.offsetHeight + 'px';
                    siteBody.classList.add('fixed-nav');
                } else {
                    siteBody.classList.remove('fixed-nav');
                    siteBody.style.paddingTop = 0;
                }
            }

            window.addEventListener('scroll', fixNav);
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
let day4 = (function () {
    return{
        init: function () {
            // Get your shorts on - this is an array workout!
            // ## Array Cardio Day 1

            // Some data we can work with
            const inventors = [
                { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
                { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
                { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
                { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
                { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
                { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
                { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
                { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
                { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
                { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
                { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
                { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
            ];

            const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
            // Array.prototype.filter()
            // 1. Filter the list of inventors for those who were born in the 1500's
            let fifteens = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
            console.table(fifteens);
            // Array.prototype.map()
            // 2. Give us an array of the inventor first and last names
            let fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
            console.log(fullNames);
            // Array.prototype.sort()
            // 3. Sort the inventors by birthdate, oldest to youngest
            let ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
            console.table(ordered);
            // Array.prototype.reduce()
            // 4. How many years did all the inventors live?
            let totalYears = inventors.reduce((total, inventor) => {
                    return total + (inventor.passed - inventor.year);
                }
            ,0);
            console.log(totalYears);
            // 5. Sort the inventors by years lived
            let oldest = inventors.sort(function (a,b) {
                let lastGuy = a.passed - a.year;
                let firstGuy = b.passed - b.year;
                return lastGuy > firstGuy ? 1 : -1;
            });
            console.table(oldest);
            // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
            // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
            // const category = document.querySelector('.mw-category');
            // const links = Array.from(category.querySelectorAll('a'));
            // const de = links
            //     .map(link => link.textContent)
            //     .filter(streetName => streetName.includes('de'));

            // 7. sort Exercise
            // Sort the people alphabetically by last name
            const alpha = people.sort((lastOne, nextOne) => {
                const [aLast, aFirst] = lastOne.split(', ');
                const [bLast, bFirst] = nextOne.split(', ');
                return aLast > bLast ? 1 : -1;
            });
            console.log(alpha);

        }
    }
})();
let day5 = (function () {
    return{
        init: function () {
            const panels = document.querySelectorAll('.panel');

            function toggleOpen() {
                this.classList.toggle('open');
            }

            function toggleActive(e) {
                console.log(e.propertyName);
                if (e.propertyName.includes('flex')) {
                    this.classList.toggle('open-active');
                }
            }

            panels.forEach(panel => panel.addEventListener('click', toggleOpen));
            panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
        }
    }
})();
let day6 = (function () {
    return{
        init: function () {
            const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

            const cities = [];
            fetch(endpoint)
                .then(blob => blob.json())
                .then(data => cities.push(...data));

            function findMatches(wordToMatch, cities) {
                return cities.filter(place => {
                    // here we need to figure out if the city or state matches what was searched
                    const regex = new RegExp(wordToMatch, 'gi');
                    return place.city.match(regex) || place.state.match(regex)
                });
            }

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            function displayMatches() {
               const matchArray = findMatches(this.value, cities);
               const html = matchArray.map(place => {
                   const regex = new RegExp(this.value, 'gi');
                   const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
                   const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
                   return `<li>
                            <span class="name">${cityName}, ${stateName}</span>
                            <span class="population">${numberWithCommas(place.population)}</span>
                          </li>`
               }).join(' ');
               suggestions.innerHTML = html;
            }

            const searchInput = document.querySelector('.search');
            const suggestions = document.querySelector('.suggestions');

            searchInput.addEventListener('change', displayMatches);
            searchInput.addEventListener('keyup', displayMatches);
        }
    }
})();
let day7 = (function () {
    return{
        init: function () {
            // ## Array Cardio Day 2

            const people = [
                { name: 'Wes', year: 1988 },
                { name: 'Kait', year: 1986 },
                { name: 'Irv', year: 1970 },
                { name: 'Lux', year: 2015 },
            ];

            const comments = [
                { text: 'Love this!', id: 523423 },
                { text: 'Super good', id: 823423 },
                { text: 'You are the best', id: 2039842 },
                { text: 'Ramen is my fav food ever', id: 123523 },
                { text: 'Nice Nice Nice!', id: 542328 }
            ];
            // Some and Every Checks
            // Array.prototype.some() // is at least one person 19?
            // const isAdult = people.some(function(person) {
            //   const currentYear = (new Date()).getFullYear();
            //   if(currentYear - person.year >= 19) {
            //     return true;
            //   }
            // });

            const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

            console.log({isAdult});
            // Array.prototype.every() // is everyone 19?

            const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
            console.log({allAdults});

            // Array.prototype.find()
            // Find is like filter, but instead returns just the one you are looking for
            // find the comment with the ID of 823423


            const comment = comments.find(comment => comment.id === 823423);

            console.log(comment);

            // Array.prototype.findIndex()
            // Find the comment with this ID
            // delete the comment with the ID of 823423
            const index = comments.findIndex(comment => comment.id === 823423);
            console.log(index);

            // comments.splice(index, 1);

            const newComments = [
                ...comments.slice(0, index),
                ...comments.slice(index + 1)
            ];
        }
    }
})();
let day8 = (function () {
    return{
        init: function () {
            const canvas = document.querySelector('#draw');
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#BADA55';
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

            let isDrawing = false;
            let lastX = 0;
            let lastY = 0;
            let hue = 0;
            let direction = true;

            function draw(e) {
                if (!isDrawing) return; // stop the fn from running when they are not moused down
                ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.beginPath();
                // start from
                ctx.moveTo(lastX, lastY);
                // go to
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                [lastX, lastY] = [e.offsetX, e.offsetY];

                hue++;
                if (hue >= 360) {
                    hue = 0;
                }
                if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                    direction = !direction;
                }

                if(direction) {
                    ctx.lineWidth++;
                } else {
                    ctx.lineWidth--;
                }

            }

            canvas.addEventListener('mousedown', (e) => {
                isDrawing = true;
                [lastX, lastY] = [e.offsetX, e.offsetY];
            });


            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', () => isDrawing = false);
            canvas.addEventListener('mouseout', () => isDrawing = false);

        }
    }
})();
let day9 = (function () {
    return{
        init: function () {
            const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
            const par = document.querySelector('.p');
            par.addEventListener('click', function makeGreen() {
                par.style.color = '#BADA55';
                par.style.fontSize = '50px';
            } );
            // Regular
            console.log('hello');

            // Interpolated
            console.log('Hello I am a %s string!', '💩');

            // Styled
            // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

            // warning!
            console.warn('OH NOOO');

            // Error :|
            console.error('Shit!');

            // Info
            console.info('Crocodiles eat 3-4 people per year');

            // Testing
            const p = document.querySelector('p');

            console.assert(p.classList.contains('ouch'), 'That is wrong!');

            // clearing
            console.clear();

            // Viewing DOM Elements
            console.log(p);
            console.dir(p);

            console.clear();

            // Grouping together
            dogs.forEach(dog => {
                console.groupCollapsed(`${dog.name}`);
                console.log(`This is ${dog.name}`);
                console.log(`${dog.name} is ${dog.age} years old`);
                console.log(`${dog.name} is ${dog.age * 7} dog years old`);
                console.groupEnd(`${dog.name}`);
            });

            // counting

            console.count('Wes');
            console.count('Wes');
            console.count('Steve');
            console.count('Steve');
            console.count('Wes');
            console.count('Steve');
            console.count('Wes');
            console.count('Steve');
            console.count('Steve');
            console.count('Steve');
            console.count('Steve');
            console.count('Steve');

            // timing
            console.time('fetching data');
            fetch('https://api.github.com/users/wesbos')
                .then(data => data.json())
                .then(data => {
                    console.timeEnd('fetching data');
                    console.log(data);
                });

            console.table(dogs);

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
document.addEventListener('DOMContentLoaded', function(){
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
    if(document.querySelector('.day4')){
        day4.init();
    }
    if(document.querySelector('.day5')){
        day5.init();
    }
    if(document.querySelector('.day6')){
        day6.init();
    }
    if(document.querySelector('.day7')){
        day7.init();
    }
    if(document.querySelector('.day8')){
        day8.init();
    }
    if(document.querySelector('.day9')){
        day9.init();
    }
    if(document.querySelector('.day10')){
        day10.init();
    }
    if(document.querySelector('.day11')){
        day11.init();
    }
    if(document.querySelector('.day12')){
        day12.init();
    }
    if(document.querySelector('.day13')){
        day13.init();
    }
    if(document.querySelector('.day14')){
        day14.init();
    }
    if(document.querySelector('.day15')){
        day15.init();
    }
    if(document.querySelector('.day16')){
        day16.init();
    }
    if(document.querySelector('.day17')){
        day17.init();
    }
    if(document.querySelector('.day18')){
        day18.init();
    }
    if(document.querySelector('.day19')){
        day19.init();
    }
    if(document.querySelector('.day20')){
        day20.init();
    }
    if(document.querySelector('.day21')){
        day21.init();
    }
    if(document.querySelector('.day22')){
        day22.init();
    }
    if(document.querySelector('.day23')){
        day23.init();
    }
    if(document.querySelector('.day24')){
        day24.init();
    }
});











//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheTEuanMiLCJkYXkxMC5qcyIsImRheTExLmpzIiwiZGF5MTIuanMiLCJkYXkxMy5qcyIsImRheTE0LmpzIiwiZGF5MTUuanMiLCJkYXkxNi5qcyIsImRheTE3LmpzIiwiZGF5MTguanMiLCJkYXkxOS5qcyIsImRheTIuanMiLCJkYXkyMC5qcyIsImRheTIxLmpzIiwiZGF5MjIuanMiLCJkYXkyMy5qcyIsImRheTI0LmpzIiwiZGF5My5qcyIsImRheTQuanMiLCJkYXk1LmpzIiwiZGF5Ni5qcyIsImRheTcuanMiLCJkYXk4LmpzIiwiZGF5OS5qcyIsImhhbWJ1cmdlci1tZW51LmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF5MSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicscGxheVNvdW5kKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheVNvdW5kKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5rZXlfX2l0ZW1bZGF0YS1rZXk9XCIke2Uua2V5Q29kZX1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGlmKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAga2V5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZS5wcm9wZXJ0eU5hbWUgIT0gJ3RyYW5zZm9ybScpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlfX2l0ZW0nKTtcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiBrZXkuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcscmVtb3ZlVHJhbnNpdGlvbikpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTEwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5ib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGFzdENoZWNrZWQ7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDaGVjayhlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGV5IGhhZCB0aGUgc2hpZnQga2V5IGRvd25cclxuICAgICAgICAgICAgICAgIC8vIEFORCBjaGVjayB0aGF0IHRoZXkgYXJlIGNoZWNraW5nIGl0XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5CZXR3ZWVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSAmJiB0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBnbyBhaGVhZCBhbmQgZG8gd2hhdCB3ZSBwbGVhc2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIG92ZXIgZXZlcnkgc2luZ2xlIGNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3ggPT09IHRoaXMgfHwgY2hlY2tib3ggPT09IGxhc3RDaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbkJldHdlZW4gPSAhaW5CZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NUYXJ0aW5nIHRvIGNoZWNrIHRoZW0gaW5iZXR3ZWVuIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5CZXR3ZWVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RDaGVja2VkID0gdGhpcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2hlY2spKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTExID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8qIEdldCBPdXIgRWxlbWVudHMgKi9cclxuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcicpO1xyXG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IHBsYXllci5xdWVyeVNlbGVjdG9yKCcudmlld2VyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gcGxheWVyLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IHBsYXllci5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2ZpbGxlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBwbGF5ZXIucXVlcnlTZWxlY3RvcignLnRvZ2dsZScpO1xyXG4gICAgICAgICAgICBjb25zdCBza2lwQnV0dG9ucyA9IHBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1za2lwXScpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZXMgPSBwbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcl9fc2xpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAvKiBCdWlsZCBvdXQgZnVuY3Rpb25zICovXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXRob2QgPSB2aWRlby5wYXVzZWQgPyAncGxheScgOiAncGF1c2UnO1xyXG4gICAgICAgICAgICAgICAgdmlkZW9bbWV0aG9kXSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gdGhpcy5wYXVzZWQgPyAnPicgOiAnfHwnO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWNvbik7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUudGV4dENvbnRlbnQgPSBpY29uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBza2lwKCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgKz0gcGFyc2VGbG9hdCh0aGlzLmRhdGFzZXQuc2tpcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJhbmdlVXBkYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9ICh2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmZsZXhCYXNpcyA9IGAke3BlcmNlbnR9JWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNjcnViKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcnViVGltZSA9IChlLm9mZnNldFggLyBwcm9ncmVzcy5vZmZzZXRXaWR0aCkgKiB2aWRlby5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gc2NydWJUaW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBIb29rIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgKi9cclxuICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQbGF5KTtcclxuICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHVwZGF0ZUJ1dHRvbik7XHJcbiAgICAgICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdXBkYXRlQnV0dG9uKTtcclxuICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGhhbmRsZVByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBsYXkpO1xyXG4gICAgICAgICAgICBza2lwQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBza2lwKSk7XHJcbiAgICAgICAgICAgIHJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZVJhbmdlVXBkYXRlKSk7XHJcbiAgICAgICAgICAgIHJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZVJhbmdlVXBkYXRlKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2NydWIpO1xyXG4gICAgICAgICAgICBwcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4gbW91c2Vkb3duICYmIHNjcnViKGUpKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gbW91c2Vkb3duID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiBtb3VzZWRvd24gPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5MTIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJlc3NlZCA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNyZXRDb2RlID0gJ3dlc2Jvcyc7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgcHJlc3NlZC5wdXNoKGUua2V5KTtcclxuICAgICAgICAgICAgICAgIHByZXNzZWQuc3BsaWNlKC1zZWNyZXRDb2RlLmxlbmd0aCAtIDEsIHByZXNzZWQubGVuZ3RoIC0gc2VjcmV0Q29kZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQuam9pbignJykuaW5jbHVkZXMoc2VjcmV0Q29kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRElORyBESU5HIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcm5pZnlfYWRkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVzc2VkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXkxMyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0ID0gMjAsIGltbWVkaWF0ZSA9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzbGlkZXJJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGUtaW4nKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrU2xpZGUoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJJbWFnZXMuZm9yRWFjaChzbGlkZXJJbWFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFsZiB3YXkgdGhyb3VnaCB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZUluQXQgPSAod2luZG93LnNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQpIC0gc2xpZGVySW1hZ2UuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib3R0b20gb2YgdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VCb3R0b20gPSBzbGlkZXJJbWFnZS5vZmZzZXRUb3AgKyBzbGlkZXJJbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNIYWxmU2hvd24gPSBzbGlkZUluQXQgPiBzbGlkZXJJbWFnZS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNOb3RTY3JvbGxlZFBhc3QgPSB3aW5kb3cuc2Nyb2xsWSA8IGltYWdlQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0hhbGZTaG93biAmJiBpc05vdFNjcm9sbGVkUGFzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKGNoZWNrU2xpZGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTE0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IHdpdGggc3RyaW5ncywgbnVtYmVycyBhbmQgYm9vbGVhbnNcclxuICAgICAgICAgICAgLy8gbGV0IGFnZSA9IDEwMDtcclxuICAgICAgICAgICAgLy8gbGV0IGFnZTIgPSBhZ2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFnZSwgYWdlMik7XHJcbiAgICAgICAgICAgIC8vIGFnZSA9IDIwMDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWdlLCBhZ2UyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBuYW1lID0gJ1dlcyc7XHJcbiAgICAgICAgICAgIC8vIGxldCBuYW1lMiA9IG5hbWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUsIG5hbWUyKTtcclxuICAgICAgICAgICAgLy8gbmFtZSA9ICd3ZXNsZXknO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCBuYW1lMik7XHJcblxyXG4gICAgICAgICAgICAvLyBMZXQncyBzYXkgd2UgaGF2ZSBhbiBhcnJheVxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gWydXZXMnLCAnU2FyYWgnLCAnUnlhbicsICdQb3BweSddO1xyXG5cclxuICAgICAgICAgICAgLy8gYW5kIHdlIHdhbnQgdG8gbWFrZSBhIGNvcHkgb2YgaXQuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBwbGF5ZXJzO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVycywgdGVhbSk7XHJcbiAgICAgICAgICAgIC8vIFlvdSBtaWdodCB0aGluayB3ZSBjYW4ganVzdCBkbyBzb21ldGhpbmcgbGlrZSB0aGlzOlxyXG4gICAgICAgICAgICAvLyB0ZWFtWzNdID0gJ0x1eCc7XHJcblxyXG4gICAgICAgICAgICAvLyBob3dldmVyIHdoYXQgaGFwcGVucyB3aGVuIHdlIHVwZGF0ZSB0aGF0IGFycmF5P1xyXG5cclxuICAgICAgICAgICAgLy8gbm93IGhlcmUgaXMgdGhlIHByb2JsZW0hXHJcblxyXG4gICAgICAgICAgICAvLyBvaCBubyAtIHdlIGhhdmUgZWRpdGVkIHRoZSBvcmlnaW5hbCBhcnJheSB0b28hXHJcblxyXG4gICAgICAgICAgICAvLyBXaHk/IEl0J3MgYmVjYXVzZSB0aGF0IGlzIGFuIGFycmF5IHJlZmVyZW5jZSwgbm90IGFuIGFycmF5IGNvcHkuIFRoZXkgYm90aCBwb2ludCB0byB0aGUgc2FtZSBhcnJheSFcclxuXHJcbiAgICAgICAgICAgIC8vIFNvLCBob3cgZG8gd2UgZml4IHRoaXM/IFdlIHRha2UgYSBjb3B5IGluc3RlYWQhXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW0yID0gcGxheWVycy5zbGljZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gb25lIGRheVxyXG5cclxuICAgICAgICAgICAgLy8gb3IgY3JlYXRlIGEgbmV3IGFycmF5IGFuZCBjb25jYXQgdGhlIG9sZCBvbmUgaW5cclxuICAgICAgICAgICAgY29uc3QgdGVhbTMgPSBbXS5jb25jYXQocGxheWVycyk7XHJcblxyXG4gICAgICAgICAgICAvLyBvciB1c2UgdGhlIG5ldyBFUzYgU3ByZWFkXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW00ID0gWy4uLnBsYXllcnNdO1xyXG4gICAgICAgICAgICB0ZWFtNFszXSA9ICdoZWVlZSBoYXd3dyc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlYW00KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW01ID0gQXJyYXkuZnJvbShwbGF5ZXJzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vdyB3aGVuIHdlIHVwZGF0ZSBpdCwgdGhlIG9yaWdpbmFsIG9uZSBpc24ndCBjaGFuZ2VkXHJcblxyXG4gICAgICAgICAgICAvLyBUaGUgc2FtZSB0aGluZyBnb2VzIGZvciBvYmplY3RzLCBsZXQncyBzYXkgd2UgaGF2ZSBhIHBlcnNvbiBvYmplY3RcclxuXHJcbiAgICAgICAgICAgIC8vIHdpdGggT2JqZWN0c1xyXG4gICAgICAgICAgICBjb25zdCBwZXJzb24gPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnV2VzIEJvcycsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDgwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBhbmQgdGhpbmsgd2UgbWFrZSBhIGNvcHk6XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGNhcHRhaW4gPSBwZXJzb247XHJcbiAgICAgICAgICAgIC8vIGNhcHRhaW4ubnVtYmVyID0gOTk7XHJcblxyXG4gICAgICAgICAgICAvLyBob3cgZG8gd2UgdGFrZSBhIGNvcHkgaW5zdGVhZD9cclxuICAgICAgICAgICAgY29uc3QgY2FwMiA9IE9iamVjdC5hc3NpZ24oe30sIHBlcnNvbiwgeyBudW1iZXI6IDk5LCBhZ2U6IDEyIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXAyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIHdpbGwgaG9wZWZ1bGx5IHNvb24gc2VlIHRoZSBvYmplY3QgLi4uc3ByZWFkXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGNhcDMgPSB7Li4ucGVyc29ufTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaW5ncyB0byBub3RlIC0gdGhpcyBpcyBvbmx5IDEgbGV2ZWwgZGVlcCAtIGJvdGggZm9yIEFycmF5cyBhbmQgT2JqZWN0cy4gbG9kYXNoIGhhcyBhIGNsb25lRGVlcCBtZXRob2QsIGJ1dCB5b3Ugc2hvdWxkIHRoaW5rIHR3aWNlIGJlZm9yZSB1c2luZyBpdC5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdlcyA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdXZXMnLFxyXG4gICAgICAgICAgICAgICAgYWdlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBzb2NpYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICB0d2l0dGVyOiAnQHdlc2JvcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZWJvb2s6ICd3ZXNib3MuZGV2ZWxvcGVyJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3ZXMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGV2ID0gT2JqZWN0LmFzc2lnbih7fSwgd2VzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRldjIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHdlcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5MTUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYWRkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW1zJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF0ZXMnKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtcycpKSB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEl0ZW0oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9ICh0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWl0ZW1dJykpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZUxpc3QoaXRlbXMsIGl0ZW1zTGlzdCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbXMnLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwb3B1bGF0ZUxpc3QocGxhdGVzID0gW10sIHBsYXRlc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgIHBsYXRlc0xpc3QuaW5uZXJIVE1MID0gcGxhdGVzLm1hcCgocGxhdGUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWluZGV4PSR7aX0gaWQ9XCJpdGVtJHtpfVwiICR7cGxhdGUuZG9uZSA/ICdjaGVja2VkJyA6ICcnfSAvPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0ke2l9XCI+JHtwbGF0ZS50ZXh0fTwvbGFiZWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB0b2dnbGVEb25lKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnaW5wdXQnKSkgcmV0dXJuOyAvLyBza2lwIHRoaXMgdW5sZXNzIGl0J3MgYW4gaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGVsLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0uZG9uZSA9ICFpdGVtc1tpbmRleF0uZG9uZTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZUxpc3QoaXRlbXMsIGl0ZW1zTGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEb25lKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVsYXRlTGlzdChpdGVtcywgaXRlbXNMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTE2ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gaGVyby5xdWVyeVNlbGVjdG9yKCdoMScpO1xyXG4gICAgICAgICAgICBjb25zdCB3YWxrID0gNTAwOyAvLyAxMDBweFxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2hhZG93KGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gaGVybztcclxuICAgICAgICAgICAgICAgIGxldCB7IG9mZnNldFg6IHgsIG9mZnNldFk6IHkgfSA9IGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHggKyBlLnRhcmdldC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSB5ICsgZS50YXJnZXQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHhXYWxrID0gTWF0aC5yb3VuZCgoeCAvIHdpZHRoICogd2FsaykgLSAod2FsayAvIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlXYWxrID0gTWF0aC5yb3VuZCgoeSAvIGhlaWdodCAqIHdhbGspIC0gKHdhbGsgLyAyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGV4dC5zdHlsZS50ZXh0U2hhZG93ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgJHt4V2Fsa31weCAke3lXYWxrfXB4IDAgcmdiYSgyNTUsMCwyNTUsMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICR7eFdhbGsgKiAtMX1weCAke3lXYWxrfXB4IDAgcmdiYSgwLDI1NSwyNTUsMC43KSxcclxuICAgICAgICAgICAgICAgICAgICAgICR7eVdhbGt9cHggJHt4V2FsayAqIC0xfXB4IDAgcmdiYSgwLDI1NSwwLDAuNyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAke3lXYWxrICogLTF9cHggJHt4V2Fsa31weCAwIHJnYmEoMCwwLDI1NSwwLjcpXHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhlcm8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTE3ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBiYW5kcyA9IFsnVGhlIFBsb3QgaW4gWW91JywgJ1RoZSBEZXZpbCBXZWFycyBQcmFkYScsICdQaWVyY2UgdGhlIFZlaWwnLCAnTm9ybWEgSmVhbicsICdUaGUgQmxlZCcsICdTYXkgQW55dGhpbmcnLCAnVGhlIE1pZHdheSBTdGF0ZScsICdXZSBDYW1lIGFzIFJvbWFucycsICdDb3VudGVycGFydHMnLCAnT2gsIFNsZWVwZXInLCAnQSBTa3lsaXQgRHJpdmUnLCAnQW55d2hlcmUgQnV0IEhlcmUnLCAnQW4gT2xkIERvZyddO1xyXG4gICAgICAgICAgICBsZXQgbmV3QmFuZHMgPSBbXTtcclxuICAgICAgICAgICAgbmV3QmFuZHMgPSBiYW5kcy5tYXAoZnVuY3Rpb24gKGJhbmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYW5kLnJlcGxhY2UoL14oYSB8dGhlIHxhbiApL2ksICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc29ydGVkQmFuZHMgPSBuZXdCYW5kcy5zb3J0KChhLCBiKSA9PiBhID4gYiA/IDEgOiAtMSk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFuZHMnKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgbmV3QmFuZHNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGJhbmQgPT4gYDxsaT4ke2JhbmR9PC9saT5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTE4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVOb2RlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGltZV0nKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gdGltZU5vZGVzXHJcbiAgICAgICAgICAgICAgICAubWFwKG5vZGUgPT4gbm9kZS5kYXRhc2V0LnRpbWUpXHJcbiAgICAgICAgICAgICAgICAubWFwKHRpbWVDb2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbWlucywgc2Vjc10gPSB0aW1lQ29kZS5zcGxpdCgnOicpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1pbnMgKiA2MCkgKyBzZWNzO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCB2aWRTZWNvbmRzKSA9PiB0b3RhbCArIHZpZFNlY29uZHMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlY29uZHNMZWZ0ID0gc2Vjb25kcztcclxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHNMZWZ0IC8gMzYwMCk7XHJcbiAgICAgICAgICAgIHNlY29uZHNMZWZ0ID0gc2Vjb25kc0xlZnQgJSAzNjAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3Ioc2Vjb25kc0xlZnQgLyA2MCk7XHJcbiAgICAgICAgICAgIHNlY29uZHNMZWZ0ID0gc2Vjb25kc0xlZnQgJSA2MDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhvdXJzLCBtaW5zLCBzZWNvbmRzTGVmdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXkxOSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXInKTtcclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJpcCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzbmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNuYXAnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFZpZGVvKCkge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSwgYXVkaW86IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obG9jYWxNZWRpYVN0cmVhbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsTWVkaWFTdHJlYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChsb2NhbE1lZGlhU3RyZWFtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE9IIE5PISEhYCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcGFpbnRUb0NhbnZhcygpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFrZSB0aGUgcGl4ZWxzIG91dFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwaXhlbHMgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1lc3Mgd2l0aCB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGl4ZWxzID0gcmVkRWZmZWN0KHBpeGVscyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBpeGVscyA9IHJnYlNwbGl0KHBpeGVscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3R4Lmdsb2JhbEFscGhhID0gMC44O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBwaXhlbHMgPSBncmVlblNjcmVlbihwaXhlbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHB1dCB0aGVtIGJhY2tcclxuICAgICAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHBpeGVscywgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxNik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRha2VQaG90bygpIHtcclxuICAgICAgICAgICAgICAgIC8vIHBsYXllZCB0aGUgc291bmRcclxuICAgICAgICAgICAgICAgIHNuYXAuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgc25hcC5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGFrZSB0aGUgZGF0YSBvdXQgb2YgdGhlIGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2hhbmRzb21lJyk7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZGF0YX1cIiBhbHQ9XCJIYW5kc29tZSBNYW5cIiAvPmA7XHJcbiAgICAgICAgICAgICAgICBzdHJpcC5pbnNlcnRCZWZvcmUobGluaywgc3RyaXAuZmlyc0NoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVkRWZmZWN0KHBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBpeGVscy5kYXRhLmxlbmd0aDsgaSs9NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpeGVscy5kYXRhW2kgKyAwXSA9IHBpeGVscy5kYXRhW2kgKyAwXSArIDIwMDsgLy8gUkVEXHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDFdID0gcGl4ZWxzLmRhdGFbaSArIDFdIC0gNTA7IC8vIEdSRUVOXHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDJdID0gcGl4ZWxzLmRhdGFbaSArIDJdICogMC41OyAvLyBCbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZ2JTcGxpdChwaXhlbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwaXhlbHMuZGF0YS5sZW5ndGg7IGkrPTQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwaXhlbHMuZGF0YVtpIC0gMTUwXSA9IHBpeGVscy5kYXRhW2kgKyAwXTsgLy8gUkVEXHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxzLmRhdGFbaSArIDUwMF0gPSBwaXhlbHMuZGF0YVtpICsgMV07IC8vIEdSRUVOXHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxzLmRhdGFbaSAtIDU1MF0gPSBwaXhlbHMuZGF0YVtpICsgMl07IC8vIEJsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwaXhlbHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdyZWVuU2NyZWVuKHBpeGVscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWxzID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJnYiBpbnB1dCcpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGl4ZWxzLmRhdGEubGVuZ3RoOyBpID0gaSArIDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWQgPSBwaXhlbHMuZGF0YVtpICsgMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JlZW4gPSBwaXhlbHMuZGF0YVtpICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgYmx1ZSA9IHBpeGVscy5kYXRhW2kgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICBhbHBoYSA9IHBpeGVscy5kYXRhW2kgKyAzXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZCA+PSBsZXZlbHMucm1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBncmVlbiA+PSBsZXZlbHMuZ21pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBibHVlID49IGxldmVscy5ibWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHJlZCA8PSBsZXZlbHMucm1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBncmVlbiA8PSBsZXZlbHMuZ21heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBibHVlIDw9IGxldmVscy5ibWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRha2UgaXQgb3V0IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaXhlbHMuZGF0YVtpICsgM10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnZXRWaWRlbygpO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHBhaW50VG9DYW52YXMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kSGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWMtaGFuZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1oYW5kJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXJIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXItaGFuZCcpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXREYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBub3cuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kRGVncmVlID0gKChzZWNvbmRzIC8gNjApICogMzYwKSArIDkwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzRGVncmVlID0gKChtaW51dGVzIC8gNjApICogMzYwKSArIDkwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzRGVncmVlID0gKChob3VycyAvIDEyKSAqIDM2MCkgKyA5MDtcclxuICAgICAgICAgICAgICAgIHNlY29uZEhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3NlY29uZERlZ3JlZX1kZWcpYDtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZUhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke21pbnV0ZXNEZWdyZWV9ZGVnKWA7XHJcbiAgICAgICAgICAgICAgICBob3VySGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7aG91cnNEZWdyZWV9ZGVnKWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoc2V0RGF0ZSwxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTIwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiA9IHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xyXG4gICAgICAgICAgICByZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlY29nbml0aW9uLmxhbmcgPSAnZW4tVVMnO1xyXG5cclxuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmRzJyk7XHJcbiAgICAgICAgICAgIHdvcmRzLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICAgICAgcmVjb2duaXRpb24uYWRkRXZlbnRMaXN0ZW5lcigncmVzdWx0JywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2NyaXB0ID0gQXJyYXkuZnJvbShlLnJlc3VsdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0WzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC50cmFuc2NyaXB0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb29wU2NyaXB0ID0gdHJhbnNjcmlwdC5yZXBsYWNlKC9wb29wfHBvb3xzaGl0fGR1bXAvZ2ksICfwn5KpJyk7XHJcbiAgICAgICAgICAgICAgICBwLnRleHRDb250ZW50ID0gcG9vcFNjcmlwdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5yZXN1bHRzWzBdLmlzRmluYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRzLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY29nbml0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZCcsIHJlY29nbml0aW9uLnN0YXJ0KTtcclxuXHJcbiAgICAgICAgICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXkyMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVlZC12YWx1ZScpO1xyXG5cclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc3BlZWQudGV4dENvbnRlbnQgPSBkYXRhLmNvb3Jkcy5zcGVlZDtcclxuICAgICAgICAgICAgICAgIGFycm93LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtkYXRhLmNvb3Jkcy5oZWFkaW5nfWRlZylgO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5MjIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHRMaW5rKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0Nvb3JkcyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaW5rQ29vcmRzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGlua0Nvb3Jkcy53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxpbmtDb29yZHMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogbGlua0Nvb3Jkcy50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsaW5rQ29vcmRzLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQuc3R5bGUud2lkdGggPSBgJHtjb29yZHMud2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0LnN0eWxlLmhlaWdodCA9IGAke2Nvb3Jkcy5oZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtjb29yZHMubGVmdH1weCwgJHtjb29yZHMudG9wfXB4KWA7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cmlnZ2Vycy5mb3JFYWNoKGEgPT4gYS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGlnaGxpZ2h0TGluaykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5MjMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgpO1xyXG4gICAgICAgICAgICBsZXQgdm9pY2VzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHZvaWNlc0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2b2ljZVwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9XCJyYW5nZVwiXSwgW25hbWU9XCJ0ZXh0XCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWFrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZWFrJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3BCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcCcpO1xyXG4gICAgICAgICAgICBtc2cudGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGV4dFwiXScpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVWb2ljZXMoKSB7XHJcbiAgICAgICAgICAgICAgICB2b2ljZXMgPSB0aGlzLmdldFZvaWNlcygpO1xyXG4gICAgICAgICAgICAgICAgdm9pY2VzRHJvcGRvd24uaW5uZXJIVE1MID0gdm9pY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih2b2ljZSA9PiB2b2ljZS5sYW5nLmluY2x1ZGVzKCdlbicpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodm9pY2UgPT4gYDxvcHRpb24gdmFsdWU9XCIke3ZvaWNlLm5hbWV9XCI+JHt2b2ljZS5uYW1lfSAoJHt2b2ljZS5sYW5nfSk8L29wdGlvbj5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0Vm9pY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBtc2cudm9pY2UgPSB2b2ljZXMuZmluZCh2b2ljZSA9PiB2b2ljZS5uYW1lID09PSB0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiB0b2dnbGUoc3RhcnRPdmVyID0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0T3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayhtc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRPcHRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgbXNnW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwZWVjaFN5bnRoZXNpcy5hZGRFdmVudExpc3RlbmVyKCd2b2ljZXNjaGFuZ2VkJywgcG9wdWxhdGVWb2ljZXMpO1xyXG4gICAgICAgICAgICB2b2ljZXNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRWb2ljZSk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldE9wdGlvbikpO1xyXG4gICAgICAgICAgICBzcGVha0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XHJcbiAgICAgICAgICAgIHN0b3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGUoZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTI0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheV9fY29udGVudCcpO1xyXG4gICAgICAgICAgICBsZXQgdG9wT2ZOYXYgPSBuYXYub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZml4TmF2KCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gdG9wT2ZOYXYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaXRlQm9keS5zdHlsZS5wYWRkaW5nVG9wID0gbmF2Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l0ZUJvZHkuY2xhc3NMaXN0LmFkZCgnZml4ZWQtbmF2Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpdGVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLW5hdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpdGVCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZml4TmF2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXkzLWlucHV0Jyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWZmaXggPSB0aGlzLmRhdGFzZXQuc2l6aW5nIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dGhpcy5uYW1lfWAsIHRoaXMudmFsdWUgKyBzdWZmaXgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlSGFuZGxlcikpO1xyXG4gICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVIYW5kbGVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXk0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCB5b3VyIHNob3J0cyBvbiAtIHRoaXMgaXMgYW4gYXJyYXkgd29ya291dCFcclxuICAgICAgICAgICAgLy8gIyMgQXJyYXkgQ2FyZGlvIERheSAxXHJcblxyXG4gICAgICAgICAgICAvLyBTb21lIGRhdGEgd2UgY2FuIHdvcmsgd2l0aFxyXG4gICAgICAgICAgICBjb25zdCBpbnZlbnRvcnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnQWxiZXJ0JywgbGFzdDogJ0VpbnN0ZWluJywgeWVhcjogMTg3OSwgcGFzc2VkOiAxOTU1IH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnSXNhYWMnLCBsYXN0OiAnTmV3dG9uJywgeWVhcjogMTY0MywgcGFzc2VkOiAxNzI3IH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnR2FsaWxlbycsIGxhc3Q6ICdHYWxpbGVpJywgeWVhcjogMTU2NCwgcGFzc2VkOiAxNjQyIH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnTWFyaWUnLCBsYXN0OiAnQ3VyaWUnLCB5ZWFyOiAxODY3LCBwYXNzZWQ6IDE5MzQgfSxcclxuICAgICAgICAgICAgICAgIHsgZmlyc3Q6ICdKb2hhbm5lcycsIGxhc3Q6ICdLZXBsZXInLCB5ZWFyOiAxNTcxLCBwYXNzZWQ6IDE2MzAgfSxcclxuICAgICAgICAgICAgICAgIHsgZmlyc3Q6ICdOaWNvbGF1cycsIGxhc3Q6ICdDb3Blcm5pY3VzJywgeWVhcjogMTQ3MywgcGFzc2VkOiAxNTQzIH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnTWF4JywgbGFzdDogJ1BsYW5jaycsIHllYXI6IDE4NTgsIHBhc3NlZDogMTk0NyB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0thdGhlcmluZScsIGxhc3Q6ICdCbG9kZ2V0dCcsIHllYXI6IDE4OTgsIHBhc3NlZDogMTk3OSB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ0FkYScsIGxhc3Q6ICdMb3ZlbGFjZScsIHllYXI6IDE4MTUsIHBhc3NlZDogMTg1MiB9LFxyXG4gICAgICAgICAgICAgICAgeyBmaXJzdDogJ1NhcmFoIEUuJywgbGFzdDogJ0dvb2RlJywgeWVhcjogMTg1NSwgcGFzc2VkOiAxOTA1IH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnTGlzZScsIGxhc3Q6ICdNZWl0bmVyJywgeWVhcjogMTg3OCwgcGFzc2VkOiAxOTY4IH0sXHJcbiAgICAgICAgICAgICAgICB7IGZpcnN0OiAnSGFubmEnLCBsYXN0OiAnSGFtbWFyc3Ryw7ZtJywgeWVhcjogMTgyOSwgcGFzc2VkOiAxOTA5IH1cclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBlb3BsZSA9IFsnQmVjaywgR2xlbm4nLCAnQmVja2VyLCBDYXJsJywgJ0JlY2tldHQsIFNhbXVlbCcsICdCZWRkb2VzLCBNaWNrJywgJ0JlZWNoZXIsIEhlbnJ5JywgJ0JlZXRob3ZlbiwgTHVkd2lnJywgJ0JlZ2luLCBNZW5hY2hlbScsICdCZWxsb2MsIEhpbGFpcmUnLCAnQmVsbG93LCBTYXVsJywgJ0JlbmNobGV5LCBSb2JlcnQnLCAnQmVuZW5zb24sIFBldGVyJywgJ0Jlbi1HdXJpb24sIERhdmlkJywgJ0JlbmphbWluLCBXYWx0ZXInLCAnQmVubiwgVG9ueScsICdCZW5uaW5ndG9uLCBDaGVzdGVyJywgJ0JlbnNvbiwgTGVhbmEnLCAnQmVudCwgU2lsYXMnLCAnQmVudHNlbiwgTGxveWQnLCAnQmVyZ2VyLCBSaWMnLCAnQmVyZ21hbiwgSW5nbWFyJywgJ0JlcmlvLCBMdWNpYW5vJywgJ0JlcmxlLCBNaWx0b24nLCAnQmVybGluLCBJcnZpbmcnLCAnQmVybmUsIEVyaWMnLCAnQmVybmhhcmQsIFNhbmRyYScsICdCZXJyYSwgWW9naScsICdCZXJyeSwgSGFsbGUnLCAnQmVycnksIFdlbmRlbGwnLCAnQmV0aGVhLCBFcmluJywgJ0JldmFuLCBBbmV1cmluJywgJ0JldmVsLCBLZW4nLCAnQmlkZW4sIEpvc2VwaCcsICdCaWVyY2UsIEFtYnJvc2UnLCAnQmlrbywgU3RldmUnLCAnQmlsbGluZ3MsIEpvc2gnLCAnQmlvbmRvLCBGcmFuaycsICdCaXJyZWxsLCBBdWd1c3RpbmUnLCAnQmxhY2sgRWxrJywgJ0JsYWlyLCBSb2JlcnQnLCAnQmxhaXIsIFRvbnknLCAnQmxha2UsIFdpbGxpYW0nXTtcclxuICAgICAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLmZpbHRlcigpXHJcbiAgICAgICAgICAgIC8vIDEuIEZpbHRlciB0aGUgbGlzdCBvZiBpbnZlbnRvcnMgZm9yIHRob3NlIHdobyB3ZXJlIGJvcm4gaW4gdGhlIDE1MDAnc1xyXG4gICAgICAgICAgICBsZXQgZmlmdGVlbnMgPSBpbnZlbnRvcnMuZmlsdGVyKGludmVudG9yID0+IChpbnZlbnRvci55ZWFyID49IDE1MDAgJiYgaW52ZW50b3IueWVhciA8IDE2MDApKTtcclxuICAgICAgICAgICAgY29uc29sZS50YWJsZShmaWZ0ZWVucyk7XHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5tYXAoKVxyXG4gICAgICAgICAgICAvLyAyLiBHaXZlIHVzIGFuIGFycmF5IG9mIHRoZSBpbnZlbnRvciBmaXJzdCBhbmQgbGFzdCBuYW1lc1xyXG4gICAgICAgICAgICBsZXQgZnVsbE5hbWVzID0gaW52ZW50b3JzLm1hcChpbnZlbnRvciA9PiBgJHtpbnZlbnRvci5maXJzdH0gJHtpbnZlbnRvci5sYXN0fWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmdWxsTmFtZXMpO1xyXG4gICAgICAgICAgICAvLyBBcnJheS5wcm90b3R5cGUuc29ydCgpXHJcbiAgICAgICAgICAgIC8vIDMuIFNvcnQgdGhlIGludmVudG9ycyBieSBiaXJ0aGRhdGUsIG9sZGVzdCB0byB5b3VuZ2VzdFxyXG4gICAgICAgICAgICBsZXQgb3JkZXJlZCA9IGludmVudG9ycy5zb3J0KChhLGIpID0+IGEueWVhciA+IGIueWVhciA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUob3JkZXJlZCk7XHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoKVxyXG4gICAgICAgICAgICAvLyA0LiBIb3cgbWFueSB5ZWFycyBkaWQgYWxsIHRoZSBpbnZlbnRvcnMgbGl2ZT9cclxuICAgICAgICAgICAgbGV0IHRvdGFsWWVhcnMgPSBpbnZlbnRvcnMucmVkdWNlKCh0b3RhbCwgaW52ZW50b3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyAoaW52ZW50b3IucGFzc2VkIC0gaW52ZW50b3IueWVhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICwwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG90YWxZZWFycyk7XHJcbiAgICAgICAgICAgIC8vIDUuIFNvcnQgdGhlIGludmVudG9ycyBieSB5ZWFycyBsaXZlZFxyXG4gICAgICAgICAgICBsZXQgb2xkZXN0ID0gaW52ZW50b3JzLnNvcnQoZnVuY3Rpb24gKGEsYikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RHdXkgPSBhLnBhc3NlZCAtIGEueWVhcjtcclxuICAgICAgICAgICAgICAgIGxldCBmaXJzdEd1eSA9IGIucGFzc2VkIC0gYi55ZWFyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhc3RHdXkgPiBmaXJzdEd1eSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUob2xkZXN0KTtcclxuICAgICAgICAgICAgLy8gNi4gY3JlYXRlIGEgbGlzdCBvZiBCb3VsZXZhcmRzIGluIFBhcmlzIHRoYXQgY29udGFpbiAnZGUnIGFueXdoZXJlIGluIHRoZSBuYW1lXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhdGVnb3J5OkJvdWxldmFyZHNfaW5fUGFyaXNcclxuICAgICAgICAgICAgLy8gY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXctY2F0ZWdvcnknKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgbGlua3MgPSBBcnJheS5mcm9tKGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlID0gbGlua3NcclxuICAgICAgICAgICAgLy8gICAgIC5tYXAobGluayA9PiBsaW5rLnRleHRDb250ZW50KVxyXG4gICAgICAgICAgICAvLyAgICAgLmZpbHRlcihzdHJlZXROYW1lID0+IHN0cmVldE5hbWUuaW5jbHVkZXMoJ2RlJykpO1xyXG5cclxuICAgICAgICAgICAgLy8gNy4gc29ydCBFeGVyY2lzZVxyXG4gICAgICAgICAgICAvLyBTb3J0IHRoZSBwZW9wbGUgYWxwaGFiZXRpY2FsbHkgYnkgbGFzdCBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gcGVvcGxlLnNvcnQoKGxhc3RPbmUsIG5leHRPbmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFthTGFzdCwgYUZpcnN0XSA9IGxhc3RPbmUuc3BsaXQoJywgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbYkxhc3QsIGJGaXJzdF0gPSBuZXh0T25lLnNwbGl0KCcsICcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFMYXN0ID4gYkxhc3QgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbHBoYSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5NSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWwnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU9wZW4oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLnByb3BlcnR5TmFtZS5pbmNsdWRlcygnZmxleCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYW5lbHMuZm9yRWFjaChwYW5lbCA9PiBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU9wZW4pKTtcclxuICAgICAgICAgICAgcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRvZ2dsZUFjdGl2ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTsiLCJsZXQgZGF5NiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01pc2VybG91L2M1Y2Q4MzY0YmY5YjI0MjBiYjI5L3Jhdy8yYmYyNTg3NjNjZGRkZDcwNGY4ZmZkM2VhOWEzZTgxZDI1ZTJjNmY2L2NpdGllcy5qc29uJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNpdGllcyA9IFtdO1xyXG4gICAgICAgICAgICBmZXRjaChlbmRwb2ludClcclxuICAgICAgICAgICAgICAgIC50aGVuKGJsb2IgPT4gYmxvYi5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IGNpdGllcy5wdXNoKC4uLmRhdGEpKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRNYXRjaGVzKHdvcmRUb01hdGNoLCBjaXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaXRpZXMuZmlsdGVyKHBsYWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZXJlIHdlIG5lZWQgdG8gZmlndXJlIG91dCBpZiB0aGUgY2l0eSBvciBzdGF0ZSBtYXRjaGVzIHdoYXQgd2FzIHNlYXJjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHdvcmRUb01hdGNoLCAnZ2knKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGxhY2UuY2l0eS5tYXRjaChyZWdleCkgfHwgcGxhY2Uuc3RhdGUubWF0Y2gocmVnZXgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlNYXRjaGVzKCkge1xyXG4gICAgICAgICAgICAgICBjb25zdCBtYXRjaEFycmF5ID0gZmluZE1hdGNoZXModGhpcy52YWx1ZSwgY2l0aWVzKTtcclxuICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IG1hdGNoQXJyYXkubWFwKHBsYWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh0aGlzLnZhbHVlLCAnZ2knKTtcclxuICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdHlOYW1lID0gcGxhY2UuY2l0eS5yZXBsYWNlKHJlZ2V4LCBgPHNwYW4gY2xhc3M9XCJobFwiPiR7dGhpcy52YWx1ZX08L3NwYW4+YCk7XHJcbiAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZU5hbWUgPSBwbGFjZS5zdGF0ZS5yZXBsYWNlKHJlZ2V4LCBgPHNwYW4gY2xhc3M9XCJobFwiPiR7dGhpcy52YWx1ZX08L3NwYW4+YCk7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7Y2l0eU5hbWV9LCAke3N0YXRlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvcHVsYXRpb25cIj4ke251bWJlcldpdGhDb21tYXMocGxhY2UucG9wdWxhdGlvbil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YFxyXG4gICAgICAgICAgICAgICB9KS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWdnZXN0aW9ucycpO1xyXG5cclxuICAgICAgICAgICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGlzcGxheU1hdGNoZXMpO1xyXG4gICAgICAgICAgICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRpc3BsYXlNYXRjaGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTcgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gIyMgQXJyYXkgQ2FyZGlvIERheSAyXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwZW9wbGUgPSBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdXZXMnLCB5ZWFyOiAxOTg4IH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdLYWl0JywgeWVhcjogMTk4NiB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXJ2JywgeWVhcjogMTk3MCB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTHV4JywgeWVhcjogMjAxNSB9LFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29tbWVudHMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdMb3ZlIHRoaXMhJywgaWQ6IDUyMzQyMyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnU3VwZXIgZ29vZCcsIGlkOiA4MjM0MjMgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1lvdSBhcmUgdGhlIGJlc3QnLCBpZDogMjAzOTg0MiB9LFxyXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUmFtZW4gaXMgbXkgZmF2IGZvb2QgZXZlcicsIGlkOiAxMjM1MjMgfSxcclxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ05pY2UgTmljZSBOaWNlIScsIGlkOiA1NDIzMjggfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAvLyBTb21lIGFuZCBFdmVyeSBDaGVja3NcclxuICAgICAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLnNvbWUoKSAvLyBpcyBhdCBsZWFzdCBvbmUgcGVyc29uIDE5P1xyXG4gICAgICAgICAgICAvLyBjb25zdCBpc0FkdWx0ID0gcGVvcGxlLnNvbWUoZnVuY3Rpb24ocGVyc29uKSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgY3VycmVudFllYXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgLy8gICBpZihjdXJyZW50WWVhciAtIHBlcnNvbi55ZWFyID49IDE5KSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNBZHVsdCA9IHBlb3BsZS5zb21lKHBlcnNvbiA9PiAoKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkpIC0gcGVyc29uLnllYXIgPj0gMTkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coe2lzQWR1bHR9KTtcclxuICAgICAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLmV2ZXJ5KCkgLy8gaXMgZXZlcnlvbmUgMTk/XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxBZHVsdHMgPSBwZW9wbGUuZXZlcnkocGVyc29uID0+ICgobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSkgLSBwZXJzb24ueWVhciA+PSAxOSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHthbGxBZHVsdHN9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5maW5kKClcclxuICAgICAgICAgICAgLy8gRmluZCBpcyBsaWtlIGZpbHRlciwgYnV0IGluc3RlYWQgcmV0dXJucyBqdXN0IHRoZSBvbmUgeW91IGFyZSBsb29raW5nIGZvclxyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBjb21tZW50IHdpdGggdGhlIElEIG9mIDgyMzQyM1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50cy5maW5kKGNvbW1lbnQgPT4gY29tbWVudC5pZCA9PT0gODIzNDIzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCgpXHJcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvbW1lbnQgd2l0aCB0aGlzIElEXHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgY29tbWVudCB3aXRoIHRoZSBJRCBvZiA4MjM0MjNcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjb21tZW50cy5maW5kSW5kZXgoY29tbWVudCA9PiBjb21tZW50LmlkID09PSA4MjM0MjMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjb21tZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3Q29tbWVudHMgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi5jb21tZW50cy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgICAgICAuLi5jb21tZW50cy5zbGljZShpbmRleCArIDEpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBkYXk4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcmF3Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI0JBREE1NSc7XHJcbiAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XHJcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDEwMDtcclxuLy8gY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNEcmF3aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBsYXN0WCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBsYXN0WSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBodWUgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXcoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0RyYXdpbmcpIHJldHVybjsgLy8gc3RvcCB0aGUgZm4gZnJvbSBydW5uaW5nIHdoZW4gdGhleSBhcmUgbm90IG1vdXNlZCBkb3duXHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgaHNsKCR7aHVlfSwgMTAwJSwgNTAlKWA7XHJcbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGFydCBmcm9tXHJcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKGxhc3RYLCBsYXN0WSk7XHJcbiAgICAgICAgICAgICAgICAvLyBnbyB0b1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICBbbGFzdFgsIGxhc3RZXSA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV07XHJcblxyXG4gICAgICAgICAgICAgICAgaHVlKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHVlID49IDM2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmxpbmVXaWR0aCA+PSAxMDAgfHwgY3R4LmxpbmVXaWR0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gIWRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGgtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNEcmF3aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFtsYXN0WCwgbGFzdFldID0gW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYXcpO1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IGlzRHJhd2luZyA9IGZhbHNlKTtcclxuICAgICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gaXNEcmF3aW5nID0gZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7IiwibGV0IGRheTkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9ncyA9IFt7IG5hbWU6ICdTbmlja2VycycsIGFnZTogMiB9LCB7IG5hbWU6ICdodWdvJywgYWdlOiA4IH1dO1xyXG4gICAgICAgICAgICBjb25zdCBwYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucCcpO1xyXG4gICAgICAgICAgICBwYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBtYWtlR3JlZW4oKSB7XHJcbiAgICAgICAgICAgICAgICBwYXIuc3R5bGUuY29sb3IgPSAnI0JBREE1NSc7XHJcbiAgICAgICAgICAgICAgICBwYXIuc3R5bGUuZm9udFNpemUgPSAnNTBweCc7XHJcbiAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgLy8gUmVndWxhclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRlZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gSSBhbSBhICVzIHN0cmluZyEnLCAn8J+SqScpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3R5bGVkXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCclYyBJIGFtIHNvbWUgZ3JlYXQgdGV4dCcsICdmb250LXNpemU6NTBweDsgYmFja2dyb3VuZDpyZWQ7IHRleHQtc2hhZG93OiAxMHB4IDEwcHggMCBibHVlJylcclxuXHJcbiAgICAgICAgICAgIC8vIHdhcm5pbmchXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignT0ggTk9PTycpO1xyXG5cclxuICAgICAgICAgICAgLy8gRXJyb3IgOnxcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2hpdCEnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluZm9cclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdDcm9jb2RpbGVzIGVhdCAzLTQgcGVvcGxlIHBlciB5ZWFyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0aW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChwLmNsYXNzTGlzdC5jb250YWlucygnb3VjaCcpLCAnVGhhdCBpcyB3cm9uZyEnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNsZWFyaW5nXHJcbiAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZpZXdpbmcgRE9NIEVsZW1lbnRzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdyb3VwaW5nIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgIGRvZ3MuZm9yRWFjaChkb2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgJHtkb2cubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzICR7ZG9nLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtkb2cubmFtZX0gaXMgJHtkb2cuYWdlfSB5ZWFycyBvbGRgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2RvZy5uYW1lfSBpcyAke2RvZy5hZ2UgKiA3fSBkb2cgeWVhcnMgb2xkYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKGAke2RvZy5uYW1lfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvdW50aW5nXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmNvdW50KCdXZXMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5jb3VudCgnV2VzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuY291bnQoJ1N0ZXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuY291bnQoJ1N0ZXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuY291bnQoJ1dlcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmNvdW50KCdTdGV2ZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmNvdW50KCdXZXMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5jb3VudCgnU3RldmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5jb3VudCgnU3RldmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5jb3VudCgnU3RldmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5jb3VudCgnU3RldmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5jb3VudCgnU3RldmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRpbWluZ1xyXG4gICAgICAgICAgICBjb25zb2xlLnRpbWUoJ2ZldGNoaW5nIGRhdGEnKTtcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvd2VzYm9zJylcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRpbWVFbmQoJ2ZldGNoaW5nIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS50YWJsZShkb2dzKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImxldCBtYWluTWVudSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaGFtYnVyZ2VyID0gJCgnLmhhbWJ1cmdlcicpO1xyXG4gICAgICAgICAgICBoYW1idXJnZXIub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnUgPSAkKCcubWFpbi1uYXZfX3dyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIG1lbnUuZmFkZVRvZ2dsZSg1MDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXJfY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgbWFpbk1lbnUuaW5pdCgpO1xyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEnKSl7XHJcbiAgICAgICAgZGF5MS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MicpKXtcclxuICAgICAgICBkYXkyLmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkzJykpe1xyXG4gICAgICAgIGRheTMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTQnKSl7XHJcbiAgICAgICAgZGF5NC5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5NScpKXtcclxuICAgICAgICBkYXk1LmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXk2Jykpe1xyXG4gICAgICAgIGRheTYuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTcnKSl7XHJcbiAgICAgICAgZGF5Ny5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5OCcpKXtcclxuICAgICAgICBkYXk4LmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXk5Jykpe1xyXG4gICAgICAgIGRheTkuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEwJykpe1xyXG4gICAgICAgIGRheTEwLmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkxMScpKXtcclxuICAgICAgICBkYXkxMS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MTInKSl7XHJcbiAgICAgICAgZGF5MTIuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTEzJykpe1xyXG4gICAgICAgIGRheTEzLmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkxNCcpKXtcclxuICAgICAgICBkYXkxNC5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MTUnKSl7XHJcbiAgICAgICAgZGF5MTUuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTE2Jykpe1xyXG4gICAgICAgIGRheTE2LmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkxNycpKXtcclxuICAgICAgICBkYXkxNy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MTgnKSl7XHJcbiAgICAgICAgZGF5MTguaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTE5Jykpe1xyXG4gICAgICAgIGRheTE5LmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkyMCcpKXtcclxuICAgICAgICBkYXkyMC5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MjEnKSl7XHJcbiAgICAgICAgZGF5MjEuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheTIyJykpe1xyXG4gICAgICAgIGRheTIyLmluaXQoKTtcclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXkyMycpKXtcclxuICAgICAgICBkYXkyMy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5MjQnKSl7XHJcbiAgICAgICAgZGF5MjQuaW5pdCgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
