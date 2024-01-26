const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit 🐉', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry 🪿', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry 🍯', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe 🍈', 'Honeydew 🍈', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine 🍑', 'Nance', 'Olive 🫒', 'Orange 🍊', 'Clementine 🍊', 'Mandarine 🍊', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon 🍅', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry 🐟', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit ⭐️', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	
	//loops over the values in the fruit array 
	for(let searchValue of fruit) {
		//checks the values against the user input string
		if(searchValue.toLowerCase().includes(str.toLowerCase())) {
			//adds mathing values to the results array
			results.push(searchValue);
		}
	}
	return results;
}

//event to activate the showSuggestions function
function searchHandler(e) {
	const searchValue = e.target.value;
	const results = search(searchValue);
	showSuggestions(results, searchValue);
}

//this function uses DOM manipulation to display the search results 
function showSuggestions(results, inputVal) {
	//start with an empty string
	suggestions.innerHTML = "";
	//looping through the results if the input is greater than 0
	if(inputVal.length > 0) {
		results.forEach(results => {
		//creating a list item for each result	
		const li = document.createElement('li');
		//setting the test of the list item
		li.innerHTML = results;
		//adding the click functionality
		li.addEventListener('click', useSuggestion);
		//adding the results to the ul in the suggestions div
		suggestions.appendChild(li);
	});
	}
}

//adds the clicked suggestion to the input
function useSuggestion(e) {
	//creating the selected suggestion variable
	const selectedFruit = e.target.textContent;
	//changing the input value to the selected suggestion 
	input.value = selectedFruit;
	//finally removes the suggestions
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);