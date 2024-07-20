const catContainer = document.getElementById('cat-container');
const loadCatButton = document.getElementById('load-cat');

/**
 * Function to fetch and display a random cat image
 */
async function fetchCatImage() {
    try {const catContainer = document.getElementById('cat-container');
        const loadCatButton = document.getElementById('load-cat');
        
        /**
         * Function to fetch and display a random cat image
         */
        async function fetchCatImage() {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await response.json();
                const img = document.createElement('img');
                img.src = data[0].url;
                img.alt = 'A cute cat';
                img.className = 'cat-image';
                catContainer.appendChild(img);
            } catch (error) {
                console.error('Error fetching cat image:', error);
            }
        }
        
        // Event listener to load a new cat image when the button is clicked
        loadCatButton.addEventListener('click', fetchCatImage);
        
        // Load initial cat image when the page loads
        document.addEventListener('DOMContentLoaded', fetchCatImage);
        
        const response = await fetch('https://cdn2.thecatapi.com/images/mt.jpg');
        const data = await response.json();
        const img = document.createElement('img');
        img.src = data[0].url;
        img.alt = 'A cute cat';
        img.className = 'cat-image';
        catContainer.appendChild(img);
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// Event listener to load a new cat image when the button is clicked
loadCatButton.addEventListener('click', fetchCatImage);

// Load initial cat image when the page loads
document.addEventListener('DOMContentLoaded', fetchCatImage);
