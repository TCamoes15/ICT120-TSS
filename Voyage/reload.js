txtAddress00.value = 'Rue de Cossonay-Gare 8'
txtNPA00.value = '1306'
txtCity00.value = 'Daillens'
txtFirstName00.value = 'Tiago'
txtLastName00.value = 'Santos'
txtPhone00.value = '0764361002'

    // Load image tags with the name in the input field
    document.querySelectorAll(".actimg").forEach(img => {
        img.src = document.getElementById('txt'+img.id.substring(3)).value
    });
    