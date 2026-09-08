const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
const searchBox = document.getElementById('search-box');

// 費用フィルターボタンの処理（ボタンが存在する場合のみ実行）
if (filterButtons.length > 0) {
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
            
            if (searchBox) {
                searchBox.value = '';
            }
        });
    });
}

// サイト内検索の処理（検索ボックスが存在する場合のみ実行）
if (searchBox) {
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
}

// ハンバーガーメニューの開閉処理
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // メニュー内のリンクをクリックしたら自動で閉じる
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}