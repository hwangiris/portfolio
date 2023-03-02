"use strict";

var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
  button.onclick = function (e) {
    var x = e.layerX;
    var y = e.layerY;
    var ripple = document.createElement('span');
    ripple.style.left = "".concat(x, "px");
    ripple.style.top = "".concat(y, "px");
    this.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 1000); // 1second = 1000ms
  };
});
//# sourceMappingURL=all.js.map
