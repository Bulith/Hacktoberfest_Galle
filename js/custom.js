// Set the date we're counting down to
var countDownDate = new Date("OCT 6, 2018 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("clock_D").innerHTML = ("0" + days).slice(-2);
    document.getElementById("clock_H").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("clock_M").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("clock_S").innerHTML = ("0" + seconds).slice(-2);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clock_D").innerHTML = "00";
        document.getElementById("clock_H").innerHTML = "00";
        document.getElementById("clock_M").innerHTML = "00";
        document.getElementById("clock_S").innerHTML = "00";
    }
}, 1000);