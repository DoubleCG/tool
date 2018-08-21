const express = require('express');
const app = express();
const server = require('http').Server(app);
const router = express.Router();

const fs = require('fs')   //文件系统


// 图片上传
const multer = require('multer');
const upload = multer({ dest: 'min-imgs/' });




const port = '8666';
const ip = '127.0.0.1';
server.listen(port, ip, function(){
  console.log("释放端口："+ip+':'+port);
});

//设置公共静态路由
app.use(express.static('./'));
app.use(router);

//-------------------------Entry--------------------------
router.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
});



router.post('/uploadImg', upload.any(), (req,res) => {
  console.log('uploadImg')
});