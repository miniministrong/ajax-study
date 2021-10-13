// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// fetch
app.all('/fetch-server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*"); 
    response.setHeader("Access-Control-Allow-Headers", "*"); 
    const data = {
        name:"wenze"
    }
    response.send(JSON.stringify(data));
})

// 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中...");
})