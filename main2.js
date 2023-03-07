var gallery = document.getElementById("gallery");

window.onmousemove = function(e) {
  var mouseX = e.clientX,
      mouseY = e.clientY;

  var xDectimal = mouseX / window.innerWidth,
      yDectimal = mouseY / window.innerHeight;

  var maxX = gallery.offsetWidth - window.innerWidth,
      maxY = gallery.offsetHeight - window.innerHeight;

  var panX = maxX * xDectimal * -1,
      panY = maxY * yDectimal * -1;

  gallery.animate({
    transform: 'translate(' + panX + 'px,' + panY + 'px)'
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  });
};