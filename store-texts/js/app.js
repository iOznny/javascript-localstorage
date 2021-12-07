// Variables
const form = document.querySelector('#formulario');
const list = document.querySelector('#lista-tweets');
let tweets = [];

// Events Listeners
eventListeners();
function eventListeners() {
    // When user add tweet
    form.addEventListener('submit', addTweet);

    // Document ready
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        createHTML();
    });
}

// Functions
function addTweet(e) {
    e.preventDefault();

    // Textarea get value
    const tweet = document.querySelector('#tweet').value;
    if (tweet === '') {
        showErros('El tweet no puede ir vacio.');
        return;
    }
    const tweetObj = {
        id: Date.now(),
        tweet
    };

    // Add tweet
    tweets = [...tweets, tweetObj];
    
    // Create html
    createHTML();

    // Reset form
    form.reset();
}

// Show errors
function showErros(error) {
    const msg = document.createElement('p');
    msg.textContent = error;
    msg.classList.add('error');

    // Insert into container
    const container = document.querySelector('#contenido');
    container.appendChild(msg);

    // Clear msg error
    setTimeout(() => {
        msg.remove();
    }, 3000);
}

// Create html
function createHTML() {
    clearHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            // Add button for delete tweet
            const btn = document.createElement('a');
            btn.classList.add('borrar-tweet');
            btn.innerHTML = 'X';
            
            // Add function delete in button
            btn.onclick = () => {
                deleteTweet(tweet.id);
            }
            
            // Create html
            const li = document.createElement('li');
            
            // Add text
            li.innerHTML = tweet.tweet;
            // Add button
            li.appendChild(btn);

            list.appendChild(li);
        });
    }

    // Async Storage
    asyncStorage();
}

// Set tweets in local storage
function asyncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Clean html
function clearHTML() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

// Delete tweet
function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);    
    createHTML();
}