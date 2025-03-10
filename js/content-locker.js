document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    const contentLockModal = document.getElementById('contentLockModal');
    
    // Setup download button click handler
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Initialize content locker variables
            window.ogblock = true;
            
            // Create and inject the content locker script
            const ogScript = document.createElement('script');
            ogScript.type = 'text/javascript';
            ogScript.id = 'ogjs';
            ogScript.src = 'https://appinstallcheck.com/cl/js/ndrkxk';
            document.body.appendChild(ogScript);
            
            // Check if ad blocker is active after a short delay
            setTimeout(function() {
                if(window.ogblock) {
                    window.location.href = "https://appinstallcheck.com/adblock";
                }
                // If ogblock was set to false by the script, the locker will handle the download
            }, 500);
        });
    }
    
    // Add a noscript tag to handle users with JavaScript disabled
    const noscriptTag = document.createElement('noscript');
    const metaRefresh = document.createElement('meta');
    metaRefresh.setAttribute('http-equiv', 'refresh');
    metaRefresh.setAttribute('content', '0;url=https://appinstallcheck.com/noscript');
    noscriptTag.appendChild(metaRefresh);
    document.head.appendChild(noscriptTag);
});
