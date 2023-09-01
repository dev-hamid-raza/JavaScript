// Sorting Countries by Name
countries_data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(countries_data);
// Sorting Countries by Capital
countries_data.sort((a, b) => {
    if (a.capital < b.capital) return -1;
    if (a.capital > b.capital) return 1;
    return 0;
});
console.log(countries_data);
// Sorting Countries by population
countries_data.sort((a, b) => {
    if (a.population < b.population) return -1;
    if (a.population > b.population) return 1;
    return 0;
});
console.log(countries_data);

// Finding Most Spoken Languages
const mostSpokenLanguage = (countries, number) => {
    const mostLanguage = {};
    countries.forEach((element) => {
        const language = element.languages;
        language.forEach((element) => {
            if (element in mostLanguage) {
                mostLanguage[element] += 1;
            } else {
                mostLanguage[element] = 1;
            }
        });
    });
    const languageArray = addingLanguageIntoArray(mostLanguage);
    const sortedArray = sortingDescend(languageArray);
    const ranged = range(sortedArray, number);
    console.log(ranged);
};
// Now adding objects values into array
const addingLanguageIntoArray = (obj) => {
    const languageArray = Object.entries(obj).map(([country, count]) => ({
        country,
        count,
    }));
    return languageArray;
};

// sorting the Array in descending order
const sortingDescend = (array) => {
    array.sort((a, b) => {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });
    return array;
};
// Showing language Range
const range = (array, range) => {
    const rangeArray = [];
    for (let i = 0; i < range; i++) {
        rangeArray.push(array[i]);
    }
    return rangeArray;
};

mostSpokenLanguage(countries_data, 5);

// Most populated countries

// main function
const mostPopulatedCountries = (data, number) => {
    const extractedData = extractData(data)
    const sorted = sortingForPop(extractedData);
    const ranged = range(extractedData, number)
    console.log(ranged)
};
const extractData = (data) => {
    const arr = [];
    countries_data.forEach((element) => {
        const country = element.name;
        const population = element.population;
        arr.push({ country, population });
    });
    return arr;
};
// sorting the Array in ascending order
const sortingForPop = (array) => {
    array.sort((a, b) => {
        if (a.population < b.population) return 1;
        if (a.population > b.population) return -1;
        return 0;
    });
    return array;
};
mostPopulatedCountries(countries_data, 10)

// Applying Statistics 
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
    sum: function () {
        let sum = 0
        ages.forEach((element) => {
            sum += element
        })
        return sum
    },
    count: function () {
        return ages.length
    },
    min: function () {
        let minValue = ages[0]
        ages.forEach((element) => {
            if (element < minValue)
                minValue = element
        })
        return minValue
    },
    max: function () {
        let maxValue = ages[0]
        ages.forEach((element) => {
            if (element > maxValue)
                maxValue = element
        })
        return maxValue
    },
    range: function () {
        return this.max() - this.min()
    },
    mean: function () {
        let mean = this.sum() / this.count()
        let roundOff = Math.floor(mean)
        return roundOff
    },
    mode: function () {
        let obj = {}
        let arr = []
        let count = 0
        let mode
        ages.forEach((element) => {
            let result = 0
            let pushing = false 
            count = 0
            ages.forEach((compare) => {
                    if (element == compare) 
                        count++
            })
            mode = element
                arr.push({ mode, count })
        })
        arr.sort((a, b) => {
            if (a.count < b.count) return 1
            if (a.count > b.count) return -1
            return 0
        })
        return `(${arr[0].mode} , ${arr[0].count})`
    },
    var: function () {
        let xi = []
        let sum = 0
        ages.forEach((element) => {
            let value = element - this.mean()
            let lastValue = value**2
            xi.push(lastValue)
        })
        xi.forEach((element) => {
            sum += element
        })
        
        return sum / this.count()
    },
    std: function () {
        return Math.sqrt(this.var()).toFixed(2)
    },
    median: function () {
        let median = Math.floor(this.count() / 2)
        ages.sort((a,b) => a - b)
        return ages[median]
    }
}
console.log(statistics.sum())
console.log(statistics.count())
console.log(statistics.min())
console.log(statistics.max())
console.log(statistics.range())
console.log(statistics.mean())
console.log(statistics.mode())
console.log(statistics.var())
console.log(statistics.std())
console.log(statistics.median())