var view = {
    displayMessage: function(msg){
        var msgDisplay = document.getElementById('messageArea');
        msgDisplay.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = model.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    },
    ships: [ { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] },
        { locations: [0, 0, 0], hits: ["", "", ""] } ],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var locations = ship.locations;
            var index = locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " +
                    this.guesses + " guesses");
            }
        }
    }
};
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    }else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}
window.onload = init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZpZXcgPSB7XHJcbiAgICBkaXNwbGF5TWVzc2FnZTogZnVuY3Rpb24obXNnKXtcclxuICAgICAgICB2YXIgbXNnRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlQXJlYScpO1xyXG4gICAgICAgIG1zZ0Rpc3BsYXkuaW5uZXJIVE1MID0gbXNnO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlIaXQ6IGZ1bmN0aW9uIChsb2NhdGlvbikge1xyXG4gICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24pO1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoaXRcIik7XHJcbiAgICB9LFxyXG4gICAgZGlzcGxheU1pc3M6IGZ1bmN0aW9uIChsb2NhdGlvbikge1xyXG4gICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24pO1xyXG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtaXNzXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG1vZGVsID0ge1xyXG4gICAgYm9hcmRTaXplOiA3LFxyXG4gICAgbnVtU2hpcHM6IDMsXHJcbiAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgc2hpcHNTdW5rOiAwLFxyXG4gICAgZ2VuZXJhdGVTaGlwTG9jYXRpb25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbG9jYXRpb25zO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1TaGlwczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTaGlwKCk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuY29sbGlzaW9uKGxvY2F0aW9ucykpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzW2ldLmxvY2F0aW9ucyA9IGxvY2F0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2VuZXJhdGVTaGlwOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgdmFyIHJvdywgY29sO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcclxuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ib2FyZFNpemUpO1xyXG4gICAgICAgICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5ib2FyZFNpemUgLSB0aGlzLnNoaXBMZW5ndGgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5ib2FyZFNpemUgLSB0aGlzLnNoaXBMZW5ndGgpKTtcclxuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ib2FyZFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV3U2hpcExvY2F0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2hpcExvY2F0aW9ucy5wdXNoKHJvdyArIFwiXCIgKyAoY29sICsgaSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3U2hpcExvY2F0aW9ucy5wdXNoKChyb3cgKyBpKSArIFwiXCIgKyBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTaGlwTG9jYXRpb25zO1xyXG4gICAgfSxcclxuICAgIGNvbGxpc2lvbjogZnVuY3Rpb24obG9jYXRpb25zKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVNoaXBzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHNoaXAgPSBtb2RlbC5zaGlwc1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsb2NhdGlvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaGlwLmxvY2F0aW9ucy5pbmRleE9mKGxvY2F0aW9uc1tqXSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaGlwczogWyB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSxcclxuICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSxcclxuICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSBdLFxyXG4gICAgZmlyZTogZnVuY3Rpb24oZ3Vlc3MpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtU2hpcHM7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgc2hpcCA9IHRoaXMuc2hpcHNbaV07XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbnMgPSBzaGlwLmxvY2F0aW9ucztcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gbG9jYXRpb25zLmluZGV4T2YoZ3Vlc3MpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2hpcC5oaXRzW2luZGV4XSA9IFwiaGl0XCI7XHJcbiAgICAgICAgICAgICAgICB2aWV3LmRpc3BsYXlIaXQoZ3Vlc3MpO1xyXG4gICAgICAgICAgICAgICAgdmlldy5kaXNwbGF5TWVzc2FnZShcIkhJVCFcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1N1bmsoc2hpcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3LmRpc3BsYXlNZXNzYWdlKFwiWW91IHNhbmsgbXkgYmF0dGxlc2hpcCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwc1N1bmsrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZXcuZGlzcGxheU1pc3MoZ3Vlc3MpO1xyXG4gICAgICAgIHZpZXcuZGlzcGxheU1lc3NhZ2UoXCJZb3UgbWlzc2VkLlwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgaXNTdW5rOiBmdW5jdGlvbihzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzW2ldICE9PSBcImhpdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY29udHJvbGxlciA9IHtcclxuICAgIGd1ZXNzZXM6IDAsXHJcbiAgICBwcm9jZXNzR3Vlc3M6IGZ1bmN0aW9uKGd1ZXNzKSB7XHJcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gcGFyc2VHdWVzcyhndWVzcyk7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Vlc3NlcysrO1xyXG4gICAgICAgICAgICB2YXIgaGl0ID0gbW9kZWwuZmlyZShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChoaXQgJiYgbW9kZWwuc2hpcHNTdW5rID09PSBtb2RlbC5udW1TaGlwcykge1xyXG4gICAgICAgICAgICAgICAgdmlldy5kaXNwbGF5TWVzc2FnZShcIllvdSBzYW5rIGFsbCBteSBiYXR0bGVzaGlwcywgaW4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3Vlc3NlcyArIFwiIGd1ZXNzZXNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIHBhcnNlR3Vlc3MoZ3Vlc3MpIHtcclxuICAgIHZhciBhbHBoYWJldCA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIl07XHJcbiAgICBpZiAoZ3Vlc3MgPT09IG51bGwgfHwgZ3Vlc3MubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgYWxlcnQoXCJPb3BzLCBwbGVhc2UgZW50ZXIgYSBsZXR0ZXIgYW5kIGEgbnVtYmVyIG9uIHRoZSBib2FyZC5cIik7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgZmlyc3RDaGFyID0gZ3Vlc3MuY2hhckF0KDApO1xyXG4gICAgICAgIHZhciByb3cgPSBhbHBoYWJldC5pbmRleE9mKGZpcnN0Q2hhcik7XHJcbiAgICAgICAgdmFyIGNvbHVtbiA9IGd1ZXNzLmNoYXJBdCgxKTtcclxuICAgICAgICBpZiAoaXNOYU4ocm93KSB8fCBpc05hTihjb2x1bW4pKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiT29wcywgdGhhdCBpc24ndCBvbiB0aGUgYm9hcmQuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm93IDwgMCB8fCByb3cgPj0gbW9kZWwuYm9hcmRTaXplIHx8XHJcbiAgICAgICAgICAgIGNvbHVtbiA8IDAgfHwgY29sdW1uID49IG1vZGVsLmJvYXJkU2l6ZSkge1xyXG4gICAgICAgICAgICBhbGVydChcIk9vcHMsIHRoYXQncyBvZmYgdGhlIGJvYXJkIVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcm93ICsgY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVGaXJlQnV0dG9uKCkge1xyXG4gICAgdmFyIGd1ZXNzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXNzSW5wdXRcIik7XHJcbiAgICB2YXIgZ3Vlc3MgPSBndWVzc0lucHV0LnZhbHVlO1xyXG4gICAgY29udHJvbGxlci5wcm9jZXNzR3Vlc3MoZ3Vlc3MpO1xyXG4gICAgZ3Vlc3NJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGUpIHtcclxuICAgIHZhciBmaXJlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJlQnV0dG9uXCIpO1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICBmaXJlQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIGZpcmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcmVCdXR0b25cIik7XHJcbiAgICBmaXJlQnV0dG9uLm9uY2xpY2sgPSBoYW5kbGVGaXJlQnV0dG9uO1xyXG4gICAgdmFyIGd1ZXNzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1ZXNzSW5wdXRcIik7XHJcbiAgICBndWVzc0lucHV0Lm9ua2V5cHJlc3MgPSBoYW5kbGVLZXlQcmVzcztcclxuICAgIG1vZGVsLmdlbmVyYXRlU2hpcExvY2F0aW9ucygpO1xyXG59XHJcbndpbmRvdy5vbmxvYWQgPSBpbml0KCk7Il19
