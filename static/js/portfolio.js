document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".carousel-thumbnails img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;

    function updateMainImage(index) {
        mainImage.src = thumbnails[index].src;
        thumbnails.forEach(thumb => thumb.classList.remove("active"));
        thumbnails[index].classList.add("active");
        currentIndex = index;
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => updateMainImage(index));
    });

    prevBtn.addEventListener("click", () => {
        let newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        updateMainImage(newIndex);
    });

    nextBtn.addEventListener("click", () => {
        let newIndex = (currentIndex + 1) % thumbnails.length;
        updateMainImage(newIndex);
    });
});
