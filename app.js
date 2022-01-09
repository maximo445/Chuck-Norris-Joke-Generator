document.querySelector('#get-jokes-button').addEventListener('click', function (e) {
    const xhr = new XMLHttpRequest();
    const numJokes = document.querySelector('input[type="number"]').value;
    console.log(numJokes);
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numJokes}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            let output = '';
            jokes.value.forEach(joke => {
                output += `<li>${joke.joke}</li>`                
            });

            document.querySelector('#jokes').innerHTML = output;

        } else {
            console.log(this.responseText);
        }
    }

    xhr.send();

    e.preventDefault();
});