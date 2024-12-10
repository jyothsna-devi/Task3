document.addEventListener('DOMContentLoaded', function () {
    // Interactive Navigation Menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = '#FF6347'; // Change color on hover
        });

        link.addEventListener('mouseout', function () {
            link.style.color = ''; // Reset color on mouse out
        });
    });

    // Button functionalities for dynamic actions
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    learnMoreBtns.forEach(button => {
        button.addEventListener('click', function () {
            alert('Learn more about this instrument!');
        });
    });

    const playSoundBtns = document.querySelectorAll('.play-sound-btn');
    playSoundBtns.forEach(button => {
        button.addEventListener('click', function () {
            alert('Playing sound of this instrument!');
        });
    });

    const watchVideoBtns = document.querySelectorAll('.watch-video-btn');
    watchVideoBtns.forEach(button => {
        button.addEventListener('click', function () {
            alert('Watch the video for this instrument!');
        });
    });

    const viewProductBtns = document.querySelectorAll('.view-product-btn');
    viewProductBtns.forEach(button => {
        button.addEventListener('click', function () {
            alert('View product details!');
        });
    });
});
