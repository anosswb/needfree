document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Setup download button click handler
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create and inject the three scripts as specified
            const script1 = document.createElement('script');
            script1.type = 'text/javascript';
            script1.text = 'var ogblock=true;';
            document.body.appendChild(script1);
            
            const script2 = document.createElement('script');
            script2.type = 'text/javascript';
            script2.id = 'ogjs';
            script2.src = 'https://appinstallcheck.com/cl/js/ndrkxk';
            document.body.appendChild(script2);
            
            const script3 = document.createElement('script');
            script3.type = 'text/javascript';
            script3.text = 'if(ogblock) window.location.href = "https://appinstallcheck.com/adblock";';
            document.body.appendChild(script3);
        });
    }
});
