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
    console.log(document.getElementById("test"));
    document.getElementById("test").src = "images/" + randomImage;
    
}