document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Formun otomatik gönderilmesini durdur

    // CV formunu al ve verileri topla
    var formData = new FormData(this);

    // Formu manuel olarak gönder
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('message').innerHTML = "CV'niz başarıyla gönderildi!";
        } else {
            response.json().then(data => {
                if (data.errors) {
                    document.getElementById('message').innerHTML = data.errors.map(error => error.message).join(", ");
                }
            });
        }
    }).catch(error => {
        document.getElementById('message').innerHTML = "CV'niz gönderilirken bir hata oluştu.";
    });
});
