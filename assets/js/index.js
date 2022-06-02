
    let modal = document.getElementById('modal');
    document.getElementById('modal-close').addEventListener('click', () => {
        modal.style.display = "none";
    })
    
    let addButton = document.getElementById('button-add');
    addButton.addEventListener('click', () => {
        modal.style.display = "block";
    })
    
    function deleteCar(carId) {
        if(confirm('Supprimer la voiture')) {
            fetch(`http://localhost:4400/api/cars/${carId}`, { method: 'DELETE' })
            .then(function (response) {
                return response.json()
            })
            .then(data => console.log(data))
        setTimeout(() => {
            document.location.reload();
        }, 500);
    }
    }
    
    function addCar() {
        let labelField = document.getElementById('label').value;
        let marqueField = document.getElementById('marque').value;
        let kilometersField = document.getElementById('kilometers').value;
        if (labelField.length < 3) {
            alert('Label field must be completed with more than 3 characters');
            return;
        }
        if (marqueField.length < 3) {
            alert('Marque field must be completed with more than 3 characters');
            return;
        }
        if (kilometersField.length < 1) {
            alert('Kilometers field must be completed with more than 3 characters');
            return;
        }
        fetch(`http://localhost:4400/api/cars`, {
            method: 'POST',
            body: JSON.stringify({
                label: labelField,
                marque: marqueField,
                kilometers: kilometersField
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => console.log(data))
            alert('Voiture crée avec succés')   
            document.location.reload();
    }