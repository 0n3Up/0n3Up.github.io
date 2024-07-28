document.addEventListener('DOMContentLoaded', () => {
    const numberOfCards = 36; // Nombre total de cartes
    const cardContainer = document.getElementById('card-container');
    let currentIndex = 0;

    for (let i = 1; i <= numberOfCards; i++) {
        const frontImgPath = `images/GTAFront_${i}.jpg`;
        const backImgPath = `images/GTAback_${i}.jpg`;

        console.log(`Loading front image: ${frontImgPath}`);
        console.log(`Loading back image: ${backImgPath}`);

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <div class="card-inner" id="card-${i}">
                <img src="${frontImgPath}" alt="Front of card ${i}" class="front" onerror="this.onerror=null; console.error('Error loading', this.src);">
                <img src="${backImgPath}" alt="Back of card ${i}" class="back" onerror="this.onerror=null; console.error('Error loading', this.src);">
            </div>
        `;
        cardContainer.appendChild(cardElement);
    }

    const cardElements = document.querySelectorAll('.card-inner');

    cardElements.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentIndex < numberOfCards - 1) {
            currentIndex++;
            cardContainer.style.transform = `translateX(-${currentIndex * 400}px)`;
        }
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            cardContainer.style.transform = `translateX(-${currentIndex * 400}px)`;
        }
    });
});
