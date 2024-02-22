function end_show(id){
    hideImage(id)
}
function start_show(id, truckid){

    setTimeout(function() { showImage(id); }, 4000);
    setTimeout(function() { showImage(truckid, 100); }, 6000);
}
function showImage(id, y) {
    if (id == "Truck") {
        var truck = document.getElementById(id);
        var katze = document.getElementById("Katze");
        truck.style.display = "block";
        truck.style.position = "absolute";
        truck.style.left = katze.offsetLeft + katze.offsetWidth + 200 + "px";
        truck.style.top = y + "px"; // Set the top position
    } else {
        var image = document.getElementById(id);
        image.style.display = "block";
        image.style.top = y + "px"; // Set the top position
    }
}
function hideallImage(id,id2){
    hideImage(id)
    hideImage(id2)
}
function killcounter(id){
    var counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.innerHTML) + id;
}
function hideImage(id) {
    document.getElementById(id).style.display = "none";
}

function movepic(id) {
    console.log("Moving the image");
    var img = document.getElementById('hamptermoving');
    img.style.display = "block";
    img.style.position = 'absolute';
    img.style.left = '0px';
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
            setTimeout(hideImage, 4000); // Add setTimeout before hiding the image
        } else {
            pos++;
            img.style.left = pos + 'px';
        }
    }
}