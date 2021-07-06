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

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
