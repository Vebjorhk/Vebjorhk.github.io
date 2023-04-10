var countDownDate = new Date("June 15, 2023 12:00:00").getTime();

    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("title").innerHTML = "Tid igjen til hytteturen:<br>" + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("title").innerHTML = "I dag er det hyttetur!!!!!";
        }
    }, 0);

window.onload = function() {
    var images = [
        "champ.jpg",
        "gamere.jpg",
        "hytta.jpg",
        "jul.jpg",
        "russ.jpg"
    ];
    
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    
    document.getElementById("test").src = "images/" + randomImage;
}