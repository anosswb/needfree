document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const contentLockModal = document.getElementById('contentLockModal');
    const closeModalBtn = document.getElementById('closeModal');
    const socialBtns = document.querySelectorAll('.social-btn');
    
    // Open modal when download button is clicked
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            contentLockModal.style.display = 'flex';
        });
    }
    
    // Close modal when clicking the close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            contentLockModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === contentLockModal) {
            contentLockModal.style.display = 'none';
        }
    });
    
    // Handle social button clicks to unlock content
    if (socialBtns) {
        socialBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // This would normally open a popup for social sharing
                const socialNetwork = this.getAttribute('data-social');
                
                // Simulate successful sharing/following
                setTimeout(() => {
                    // Hide the modal
                    contentLockModal.style.display = 'none';
                    
                    // Show success message
                    alert(`Thank you for sharing on ${socialNetwork}! Your download is starting.`);
                    
                    // Here you would redirect to the actual download
                    // For demo purposes, we'll just simulate a download
                    const bookTitle = document.querySelector('.book-title').textContent;
                    const dummyLink = document.createElement('a');
                    dummyLink.setAttribute('href', `#${bookTitle.toLowerCase().replace(/\s+/g, '-')}-download`);
                    dummyLink.setAttribute('download', `${bookTitle}.pdf`);
                    document.body.appendChild(dummyLink);
                    dummyLink.click();
                    document.body.removeChild(dummyLink);
                    
                }, 1000);
                
                // In a real implementation, you'd include code to verify the share
                // happened before providing the download
            });
        });
    }
});