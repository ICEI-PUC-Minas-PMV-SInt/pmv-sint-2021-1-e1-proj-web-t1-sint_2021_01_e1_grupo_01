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

document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('input-dark-mode')
				
    inputDarkMode.addEventListener('change', () => {
        if(inputDarkMode.checked){
            html.setAttribute("dark", "true")
        }else{
            html.removeAttribute("dark")
        }
    })
})