window.onload = makeCard();
var localStorage = Window.localStorage;

//não me orgulho deste codigo que foi criado, estava bebado. Alterar futuramente para uma function
document.querySelector("#photoEvent").addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        imageEvent = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
});

function saveEvent() {
    var newEvent = new Object();
    var numberTag;
    var tags = [];

    newEvent.id = CreateGuid();
    newEvent.name = document.getElementById("name").value;
    newEvent.short_description = document.getElementById("short_description").value;
    newEvent.data_event = document.getElementById("data_event").value;
    newEvent.location = document.getElementById("location").value;
    newEvent.photo = imageEvent;
    newEvent.full_descripton = document.getElementById("full_descripton").value;

    for (numberTag = 0; numberTag < document.querySelectorAll('[id="tag"]')[0].getElementsByTagName('div').length; numberTag++) {
        tags.push(document.querySelectorAll('[id="tag"]')[0].getElementsByTagName('div')[numberTag].innerText.replace("close","").replace(/(\r\n|\n|\r)/gm, ""));
    }
    newEvent.tag = tags;

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
        html = html+'<p>'+id.short_description+'</p>';
        html = html+'</div>';
        html = html+'</div>';
        html = html+'</div>';

        document.getElementById("bodyCard").innerHTML=html;
   
    });
}