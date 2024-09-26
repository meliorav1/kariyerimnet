document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message').innerHTML = "Your CV has been successfully submitted!";
});
