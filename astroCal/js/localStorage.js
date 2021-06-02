window.onload = makeCard();
var localStorage = Window.localStorage;

function saveEvent() {
    var newEvent = new Object();

    newEvent.id = CreateGuid();
    newEvent.name = document.getElementById("name").value;
    newEvent.short_descripton = document.getElementById("short_description").value;
    //newEvent.data_event = document.getElementById("data_event").value;
    //newEvent.location = document.getElementById("location").value;
    //newEvent.tag = document.getElementById("tag").value;
    newEvent.photo = document.getElementById("photo").value;
    newEvent.full_descripton = document.getElementById("full_descripton").value;

    var stageLocalStorage = JSON.stringify(newEvent);

    localStorage.setItem(newEvent.id, stageLocalStorage);
}



function CreateGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}

function makeCard() {

   /* var currentId = localStorage.getItem('id');
    var currentName = localStorage.getItem('name');
    var currentShortDescription = localStorage.getItem('short_description');
    var currentPhoto = localStorage.getItem('photo'); */



    atual=document.getElementById("cards"); 
    var html=""; 
    var keys = Object.keys(localStorage);
    keys.forEach(function(chave, pos){ 
        let id = JSON.parse(localStorage.getItem(chave));
        html = html+'<div class="col s12 m6 l4">';
        html = html+'<div class="card">';
        html = html+'<div class="card-image" id="imageResponse">';
        html = html+'<img src="'+id.photo+'">';
        html = html+'<span class="card-title" id="nameResponse">'+id.name+'</span>';
        html = html+'</div>';
        html = html+'<div class="card-content" id="short_descripton">';
        html = html+'<p>'+id.full_descripton+'</p>';
        html = html+'</div>';
        html = html+'</div>';
        html = html+'</div>';

        document.getElementById("bodyCard").innerHTML=html;
   
    });
}