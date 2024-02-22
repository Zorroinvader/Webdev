function end_show(id){
    hideImage(id)
}
function start_show(id, truckid){

    setTimeout(function() { showImage(id); }, 4000);
    setTimeout(function() { showImage(truckid, 100); }, 6000);
    setTimeout(function() { move_Truck_to_KATZE(truckid); }, 8000);
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
function move_Truck_to_KATZE(Truckid){
    var truck = document.getElementById("Truck");
    var katze = document.getElementById("Katze");
    var img = document.getElementById(Truckid);
    truck.style.display = "block";
    truck.style.position = 'absolute';
    truck.style.left = '0px';
    katze.style.display = "block";
    katze.style.position = 'absolute';
    katze.style.left = '0px';
    catwidth = 70;
    var pos = catwidth + 200;
    var id = setInterval(frame, 5);
    var pos = catwidth + 200;
   
    function frame() {
        if (truckRect.left <= katzeRect.right && truckRect.left >= katzeRect.left) {
            setTimeout(function() { killcounter(1); }, 4000);
            setTimeout(function() { clearInterval(); }, 6000);
            setTimeout(hideImage, 4000); // Add setTimeout before hiding the image
        } else {
            console.log(pos);
            setTimeout(2000);
            pos--;
            img.style.left = pos + 'px';
        }
    }
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