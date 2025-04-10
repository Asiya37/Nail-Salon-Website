// document.querySelectorAll('.slider-row').forEach(row => {
//     row.addEventListener('mouseenter', () => {
//         row.querySelector('.slider-track').style.animationPlayState = 'paused';
//     });

//     row.addEventListener('mouseleave', () => {
//         row.querySelector('.slider-track').style.animationPlayState = 'running';
//     });
// });

// document.querySelectorAll('.slider-row').forEach(row => {
//     row.addEventListener('mouseenter', () => {
//         row.querySelector('.slider-track').style.animationPlayState = 'paused';
//     });

//     row.addEventListener('mouseleave', () => {
//         row.querySelector('.slider-track').style.animationPlayState = 'running';
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const testimonials = document.querySelectorAll('.testimonial-item');
    const testimonialWidth = testimonials[0].offsetWidth + 20; // Width + margin
    let currentPosition = 0;

    // Function to move the track
    function moveTrack(direction) {
        if (direction === 'next') {
            currentPosition -= testimonialWidth; // Move 3 testimonials forward
        } else if (direction === 'prev') {
            currentPosition += testimonialWidth; // Move 3 testimonials backward
        }

        // Prevent sliding past the first or last set of testimonials
        const maxPosition = -testimonialWidth * (testimonials.length - 3);
        currentPosition = Math.max(maxPosition, Math.min(currentPosition, 0));

        track.style.transform = `translateX(${currentPosition}px)`;
    }

    // Event listener for the "Next" button
    nextButton.addEventListener('click', () => {
        moveTrack('next');
    });

    // Event listener for the "Previous" button
    prevButton.addEventListener('click', () => {
        moveTrack('prev');
    });
});