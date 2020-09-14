document.addEventListener('DOMContentLoaded', function(){
    chkTitle.addEventListener('click', function (){
        if (chkTitle.checked){
            lblTitle.classList.remove('hidden')
        } else {
            lblTitle.classList.add('hidden')
        }

    })

})
