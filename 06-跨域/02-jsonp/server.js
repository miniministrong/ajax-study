// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send("console.log(hello jsonp-server);");
    const data = {
        name: "wenze"
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.send(`handle(${str})`);
})

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send("console.log(hello jsonp-server);");
    const data = {
        exist: 1,
        msg: "用户名已存在"
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.send(`handle(${str})`);
})

app.all('/jquery-jsonp-server', (request, response) => {
    // response.send("console.log(hello jsonp-server);");
    const data = {
        name: "wenze",
        city: ["天津", "甘肃"]
    };
    // 将数据转化为字符串
    let str = JSON.stringify(data);
    // 接收callback参数
    let cb = request.query.callback;
    // 返回结果
    response.send(`${cb}(${str})`);
})

// 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000端口监听中...");
})