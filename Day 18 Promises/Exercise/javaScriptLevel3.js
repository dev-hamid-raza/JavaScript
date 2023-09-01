
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Fetch data from the API
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        // Calculate the average weight
        const weights = data.map(cat => parseFloat(cat.weight.metric));
        const sumWeights = weights.reduce((sum, weight) => sum + weight, 0);
        const averageWeight = sumWeights / weights.length;

        // Display the average weight
        console.log(`Average Weight of Cats: ${averageWeight.toFixed(2)} kg`);
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });



// Fetch data from the API
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        // Sort countries based on area in descending order
        const sortedCountries = data.sort((a, b) => b.area - a.area);

        // Get the top 10 largest countries
        const top10LargestCountries = sortedCountries.slice(0, 10);

        // Display the names of the top 10 largest countries
        console.log('Top 10 Largest Countries:');
        top10LargestCountries.forEach(country => {
            console.log(country.name);
        });
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });


// Fetch data from the API
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        // Collect all official languages
        const languages = new Set();
        data.forEach(country => {
            const officialLanguages = country.languages;
            officialLanguages.forEach(language => {
                languages.add(language.name);
            });
        });

        // Count the total number of official languages
        const totalLanguages = languages.size;

        // Display the total number of official languages
        console.log(`Total Number of Official Languages: ${totalLanguages}`);
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });
