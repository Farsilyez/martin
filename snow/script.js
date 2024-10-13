document.addEventListener('DOMContentLoaded', function() {
    const snowContainer = document.querySelector('.snow-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        const size = Math.random() * 10 + 5; // Size between 5 and 15px
        const delay = Math.random() * 10; // Delay before snowflake starts falling
        const duration = Math.random() * 5 + 5; // Duration of fall between 5 and 10 seconds
        const position = Math.random() * 100; // Position along the width of the screen

        snowflake.classList.add('snowflake');
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${position}vw`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;

        snowContainer.appendChild(snowflake);

        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000);
    }

    // Generate snowflakes at a regular interval
    setInterval(createSnowflake, 200);
});
<script>
    let likeCount = 0; // Initialize the like count

    document.getElementById('likeButton').addEventListener('click', function() {
        likeCount++; // Increment the like count
        document.getElementById('likeCount').textContent = likeCount; // Update the displayed like count
    });
</script>