var colors = [];
var square = document.querySelectorAll('.square');
var colorCode = document.querySelector('#colorCode');
generateColor(6);
var picked = colors[Math.floor(Math.random() * 6)];
var message = document.querySelector('#message');
var top = document.querySelector('#top');
var reset = document.querySelector('#reset');
var h1 = document.querySelector('h1');
var easyMode = document.querySelector('#easy');
var hardMode = document.querySelector('#hard');
colorCode.textContent = picked;
function generateColor(c) {
    for (var a = 0; a < c; a++) {
        colors.push('rgb(' + Math.floor(Math.random() * 257) + ', ' + Math.floor(Math.random() * 257) + ', ' + Math.floor(Math.random() * 257) + ')');
    }
};
easyMode.addEventListener('click', function () {
    easyMode.classList.add('selected');
    hardMode.classList.remove('selected');
    reset.textContent = 'New Colors';
    message.textContent = '';
    colors = [];
    generateColor(3);
    picked = colors[Math.floor(Math.random() * 3)];
    h1.style.backgroundColor = 'steelblue';
    for (var i = 0; i < 3; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    colorCode.textContent = picked;
    for (var m = 3; m < square.length; m++) {
        square[m].style.display = 'none';
    };
});
hardMode.addEventListener('click', function () {
    hardMode.classList.add('selected');
    easyMode.classList.remove('selected');
    reset.textContent = 'New Colors';
    message.textContent = '';
    colors = [];
    generateColor(6);
    picked = colors[Math.floor(Math.random() * 6)];
    h1.style.backgroundColor = 'steelblue';
    for (var i = 0; i < 6; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    colorCode.textContent = picked;
    for (var m = 0; m < square.length; m++) {
        square[m].style.display = 'block';
    };
});
reset.addEventListener('click', function () {
    message.textContent = '';
    if (colors.length === 3) {
        for (var a = 0; a < square.length/2; a++) {
            colors = [];
            generateColor(3);
            picked = colors[Math.floor(Math.random() * 3)];
            reset.textContent = 'New Colors';
            h1.style.backgroundColor = 'steelblue';
            colorCode.textContent = picked;
            message.textContent = '';
            for (var i = 0; i < 3; i++) {
                square[i].style.backgroundColor = colors[i];
            }
        }
    };
    if (colors.length === 6) {
        for (var a = 0; a < square.length; a++) {
            colors[a] = ('rgb(' + Math.floor(Math.random() * 257) + ', ' + Math.floor(Math.random() * 257) + ', ' + Math.floor(Math.random() * 257) + ')');
            picked = colors[Math.floor(Math.random() * 6)]
            reset.textContent = 'New Colors';
            h1.style.backgroundColor = 'steelblue';
            colorCode.textContent = picked;
            for (var i = 0; i < 6; i++) {
                square[i].style.backgroundColor = colors[i];
            }
        }
    };
});
for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener('click', function () {
        if (this.style.backgroundColor == picked) {
            message.textContent = 'Corret';
            message.style.color = 'green';
            h1.style.backgroundColor = picked;
            reset.textContent = 'Play Again?';
            for (var n = 0; n < square.length; n++) {
                square[n].style.backgroundColor = picked;
            }
        }
        else {
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try Again';
            message.style.color = 'red';
        }
    });
}