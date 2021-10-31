const http = require('http')
const fs = require('fs');
const path = require('path')

const app = http.createServer((req, res) => {
    const url = req.url
    console.log(__dirname);
    if (url.includes('.html')) {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Cross-Origin-Opener-Policy','same-origin');
        res.setHeader('Cross-Origin-Embedder-Policy','require-corp');
        let html = fs.readFileSync(path.join(__dirname, url), 'utf-8')
        res.end(html)
        return
    } else if (url.includes('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
        let js = fs.readFileSync(path.join(__dirname, url), 'utf-8')
        res.end(js)
        return
    }

    res.end('Hello Word')
})

app.listen(3000, () => {
    console.log('服务开启');
})