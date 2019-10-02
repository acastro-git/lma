$(document).ready(function() {
    $.ajax({
        url: "http://82.144.108.19:6001/API/CAMCTRL/COUNTER?CAMID=AXA"
    }).then(function(data) {
       $('.camera-status').append(data.status);
       $('.people-counter').append(data.counter);
    });
});