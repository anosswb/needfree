document.addEventListener('DOMContentLoaded', function() {
    const downloadBtns = document.querySelectorAll('.download-btn');
    
    // Setup download button click handler for each button
    downloadBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the download link from the button's data attribute
            const downloadLink = button.getAttribute('data-download-link');
            
            // Create and inject the ogjs script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = 'ogjs';
            script.src = 'https://verifysuper.com/cl/js/ndrkxk';
            document.body.appendChild(script);
            
            // Define a global function to handle the redirection after locker is closed
            window.og_load_complete = function() {
                window.location.href = downloadLink;
            }
            
            // Load the content locker
            if (typeof og_load === 'function') {
                og_load();
            } else {
                script.onload = function() {
                    og_load();
                };
            }
        });
    });
});
