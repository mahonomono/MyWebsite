const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
const searchBox = document.getElementById('search-box');

// 費用フィルターボタンの処理
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        cards.forEach(card => {
            const cardCost = card.getAttribute('data-cost');
            if (filterValue === 'all' || cardCost === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        searchBox.value = '';
    });
});

// サイト内検索の処理
searchBox.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});