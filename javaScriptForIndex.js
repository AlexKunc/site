let currentIndex = 0;
const images = [
    'https://157008.lp.tobiz.net/img/900x1200/160820f082624e658a984c66cee784d3.jpg',
    'https://157008.lp.tobiz.net/img/900x1200/e92289a45486ed4df5a474fbf1c2f827.jpg',
    'https://157008.lp.tobiz.net/img/900x1200/335a41c96b172ab684b086d077610d7e.jpg',
    'https://157008.lp.tobiz.net/img/900x1200/ec80d2454a46073e3f7d16f0701a8364.jpg',
];

const imageElement = document.getElementById('carousel-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function showImage(index) {
    imageElement.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);
