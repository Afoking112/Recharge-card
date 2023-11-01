const scoreSlider = document.getElementById('score');
const selectedCategory = document.querySelector('.selected-category');


scoreSlider.addEventListener('input', updateCategory);

function updateCategory() {
    const score = scoreSlider.Value;

    if (score <=33) {
        selectedCategory.textContent ='Category: Fair';
    }else if (score <= 70) {
        selectedCategory.textContent = 'Category: Good'
    }else {
        selectedCategory.textContent = 'Category:Excellent'
    }
}