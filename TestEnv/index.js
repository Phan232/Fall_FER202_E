// khai bao thu vien http( Http core) để tạo ra 1 web server
const http = require("http");

// khai báo các thông số cho web server
const hostname = "localhost";
const port = 8888;

//tạo 1 web server
const server = http.createServer((req, res) => {
    // thiết lập thông tin cho HttpResponse
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>hello, ATPHAN</h1>");

});

// lắng nghe các request từ Clinet gửi tới NodeJS web sever
server.listen(port, hostname, () => {
    console.log("Server running at http://" +hostname +", "+ port);
});