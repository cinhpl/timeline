const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(imageContainer => {
    imageContainer.addEventListener('click', () => {
        imageContainer.classList.toggle('clicked');
    });
});

