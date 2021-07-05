$(document).ready(function () {
    $('.modal').modal();
});

$(document).ready(function () {
    $('.datepicker').datepicker();
});

$('.chips-placeholder').chips({
    placeholder: "Adicione palavras chaves para a ocorrência:",
    secondaryPlaceholder: '+Tag',
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});

const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});
