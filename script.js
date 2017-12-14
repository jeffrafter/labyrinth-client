(function() {
  let current = {
    x: 0,
    y: 0
  }

  let sent = {
    x: null,
    y: null
  }

  window.addEventListener('deviceorientation', function(e) {
    var xAxis = e.beta; // -180, 180
    var yAxis = e.gamma; // -90, 90

    current.x = xAxis
    current.y = yAxis

    console.log(current)
  });

  setInterval(function() {
    tilt()
  }, 100)

  function tilt() {
    var x = current.x
    var y = current.y
    // Adjust
    x = Math.round(x * 10) / 10
    y = Math.round(y * 10) / 10

    let max = 18

    if (x > max) x = max
    if (x < -max) x = -max

    if (y > max) y = max
    if (y < -max) y = -max

    // Would be cool to account for jitter

    // If it is changed, update it
    if (x == sent.x && y == sent.y) return
    sent.x = x
    sent.y = y

    let xRatio = (x + max) / (max * 2)
    let yRatio = (y + max) / (max * 2)

    // x servo range is 10..80
    let xMinServoDegrees = 10
    let xMaxServoDegrees = 80

    // y servo range is 20..90
    let yMinServoDegrees = 20
    let yMaxServoDegrees = 90

    let xPercent = Math.floor(((xMaxServoDegrees - xMinServoDegrees) * xRatio) + xMinServoDegrees)
    let yPercent = Math.floor((yMaxServoDegrees - (yMaxServoDegrees - yMinServoDegrees) * yRatio)) // inverted

    fetch("http://192.168.1.225:3000/tilts?x=" + xPercent + "&y=" + yPercent)
    // fetch("http://192.168.1.225:3000/tilt/1?percent=" + xPercent)
    // fetch("http://192.168.1.225:3000/tilt/2?percent=" + yPercent)
  }
}());
