(function() {
  window.addEventListener('deviceorientation', function(e) {
    var xAxis = e.beta; // -180, 180
    var yAxis = e.gamma; // -90, 90

    console.log(xAxis);
    console.log(yAxis);
  });
}());
