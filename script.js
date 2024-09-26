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
            document.getElementById('message').innerHTML = "Yazık kafana";
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


function startCountdown(endDate) {
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        // Hesaplamalar
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Geri sayımı göster
        countdownElement.innerHTML = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;

        // Geri sayım tamamlandığında
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Geri sayım tamamlandı!";
        }
    }, 1000);
}

// Belirli bir bitiş tarihi (örneğin: 1 Ekim 2024 23:59:59)
const endDate = new Date("2024-10-01T23:59:59").getTime();
startCountdown(endDate);
