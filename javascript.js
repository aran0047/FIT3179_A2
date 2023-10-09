const dropdown = document.getElementById('scatterplot-dropdown');
const container = document.getElementById('scatterplot-container');

async function displayScatterplot(selectedValue) {
    let selectedSpec, explanation;

    try {
        const response = await fetch('scatter_index_${selectedValue}.json');
        if (!response.ok) {
            throw new Error('Error');
        }

        selectedSpec = await response.json();
        explanation p 
    }
}