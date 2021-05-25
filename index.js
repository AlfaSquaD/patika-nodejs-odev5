const http = require('http');
const { url } = require('inspector');

const port = 5000;



const server = http.createServer((req, res) => {
    let url = req.url;

    if(url == "/"){
        res.writeHead(200, { 'Content-Type': 'application/xhtml+xml; charset=utf-8' });
        res.write("<h2>Index sayfasına hoşgeldiniz</h2>");
    }
    else if(url == "/hakkimda"){
        res.writeHead(200, { 'Content-Type': 'application/xhtml+xml; charset=utf-8' });
        res.write("<h2>Hakkımda sayfasına hoşgeldiniz</h2>");
    }
    else if(url == "/iletisim"){
        res.writeHead(200, { 'Content-Type': 'application/xhtml+xml; charset=utf-8' });
        res.write("<h2>İletişim sayfasına hoşgeldiniz</h2>");
    }
    else{
        res.writeHead(404, { 'Content-Type': 'application/xhtml+xml; charset=utf-8' });
        res.write("<h2>Aradığınız sayfayı bulamadık</h2>");
    }
    res.end();
});

server.listen(port, () => console.log(`Sunucu port ${port} de başlatıldı.`));