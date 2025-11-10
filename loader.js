// Go on NHD editor and in devtools type:
// editor.ToFileName = src => src; document.getElementById("new-page-name").value = '<script src="https://cdn.jsdelivr.net/gh/ioB-ybbolB/Blobe-Games@main/loader.js"></script>'; editor.Page.Save(this);

(async()=>{await new Promise(r=>setTimeout(r,1000));document.open();document.write(await(await fetch('https://raw.githubusercontent.com/ioB-ybbolB/Blobe-Games/refs/heads/main/index.html')).text());document.close();})();
