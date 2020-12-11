document.addEventListener('DOMContentLoaded', function(){

    cmdPersonnes.addEventListener("click", function () {
        hideAll()
        personnes.classList.remove("hidden")
    })
    cmdTransport.addEventListener("click", function () {
        hideAll()
        transport.classList.remove("hidden")
    })
    cmdLogement.addEventListener("click", function () {
        hideAll()
        logement.classList.remove("hidden")
    })
    cmdActivites.addEventListener("click", function () {
        hideAll()
        activites.classList.remove("hidden")
    })



})

textehoteldata02.addEventListener("change", function (){

    var npa = {}
    var villes = {}

    textehoteldata03.value = "";
    for (i=0, i<npa.lenght, i++){
        if (textehoteldata02.value == npa [i]){
            textehoteldata03.value = villes [i]
        }
    }

})



// Load image tags with the name in the input field
document.querySelectorAll(".actimg").forEach(img => {
    img.src = document.getElementById('txt' + img.id.substring(3)).value
});





function hideAll() {
    personnes.classList.add("hidden")
    transport.classList.add("hidden")
    logement.classList.add("hidden")
    activites.classList.add("hidden")
}

