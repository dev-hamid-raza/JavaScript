const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
// Calculating sum by chaining two or more array iterators
const price = products.map(element => element.price).filter((element) => typeof (element) == 'number').reduce((acc, element) => acc += element, 0)
console.log(price)
// Sum by using reduce method 
const totalPrice = products.reduce((sum, element) => typeof (element.price) == 'number' ? sum += element.price : sum += 0
    , 0)
// Main Function 
console.log(totalPrice)
const categorizeCountries = (element) => {
    const valueOne = element.filter(land)
    return valueOne
}
// Function which have to get 'Land' in  countries
const land = (value) => value.includes('land' || 'island' || 'stan')
console.log(categorizeCountries(countries))


// Collecting number of occurs of letter 

const gettingCharacter = (arr) => { 
    const data = []
    let count = 0
    arr.forEach(element => {
        const country = element.toUpperCase()
        const firstLetter = country.charAt(0)
        for (let char of country) {
            if (char == firstLetter)
                count++
        }
        data.push({ element, firstLetter, count })
        count = 0
    });
    return data
}
console.log(gettingCharacter(countries))

// Getting first ten countries
const getFirstTenCountries = (countries) => countries.slice(0, 10)
console.log(getFirstTenCountries(countries))

// Getting last ten countries 
const getLastTenCountries = (countries) => {
    const endingIndex = countries.length
    return countries.slice(endingIndex - 10, endingIndex + 1)
}
console.log(getLastTenCountries(countries))

const initialLetters = {};

countries.forEach((country) => {
    const initial = country[0].toUpperCase();
    if (initial.match(/[A-Z]/)) {
        if (initial in initialLetters) {
            initialLetters[initial] += 1
        } else {
            initialLetters[initial] = 1
        }
    }
});


let mostCommonInitial = "";
let maxOccurrences = 0;

for (const letter in initialLetters) {
    if (initialLetters[letter] > maxOccurrences) {
        maxOccurrences = initialLetters[letter];
        mostCommonInitial = letter
    }
}

console.log("The most common initial letter for country names is:", mostCommonInitial)
console.log("Number of occurrences:", maxOccurrences)