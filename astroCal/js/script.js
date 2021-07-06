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

function contactSub() {
    if (document.getElementById('btn-contact-form')) {
        document.getElementById("text-submit-contact-form").innerHTML = 'Obrigado! Em breve entraremos em contato.';
    }
}