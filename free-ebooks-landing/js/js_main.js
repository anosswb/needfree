document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality can be added here if needed
    
    // Highlight current page in navigation
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });
    
    // Add any additional functionality for the main page here
});