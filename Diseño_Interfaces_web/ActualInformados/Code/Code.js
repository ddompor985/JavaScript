function searchText() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const paragraphs = document.querySelectorAll('h2');
    const resultDiv = document.getElementById('result');
    let found = false;

    document.querySelectorAll('.highlight').forEach(el => {
        el.classList.remove('highlight');
    });

    paragraphs.forEach((para, index) => {
        const text = para.innerText.toLowerCase();
        if (text.includes(input)) {
            found = true;
            const highlightedText = para.innerHTML.replace(new RegExp(input, 'gi'), match => `<span class="highlight">${match}</span>`);
            para.innerHTML = highlightedText;

            para.scrollIntoView({ behavior: 'smooth' });
        }
    });

    resultDiv.textContent = found 
        ? `La palabra "${input}" se encontró en la página.` 
        : `La palabra "${input}" no se encontró en la página.`;
}