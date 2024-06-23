// script.js
document.getElementById('myForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;

    if (name && email) {
        try {
            const response = await fetch('http://localhost:3000/user-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });

            const data = await response.json();
            document.getElementById('message').innerText = data.message;
        } catch (error) {
            document.getElementById('message').innerText = 'Error: ' + error.message;
        }
    } else {
        document.getElementById('message').innerText = 'Required Fields:Please fill in all fields';
    }
});
