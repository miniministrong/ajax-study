// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// cors服务
app.all('/cors-server', (request, response) => {
    // 设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Method", "*");
    response.send('hello cors');
})

// 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中...");
})