// Hamkhuneh Server (نسخه اولیه)

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("🏠 سرور همخونه با موفقیت اجرا شد.");
});

server.listen(PORT, () => {
    console.log(`Hamkhuneh Server Running On Port ${PORT}`);
});
