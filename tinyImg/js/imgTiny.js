let imgCropper = null;

let getId = function(id){
  return document.getElementById(id);
}


// 输出的图片大小
let width = 100;
let height = 100;


function ensureWH(){
  // 获取输出的宽高
  let w = parseInt(getId('output-width').value);
  let h = parseInt(getId('output-height').value);
  width = w || 100;
  height = h || 100;
  updateImgDisplay();
}



getId('input-getImg').onchange = updateImgDisplay;


function updateImgDisplay(){
  let r = new FileReader();
  r.readAsDataURL(getId('input-getImg').files[0]);
  r.onload = function(){
    console.log('read file 100%');
    console.log('DataURL:');
    console.log(r.result);
    getId('newPHeadImg').src=r.result;
    imgCropper = new Cropper(getId('newPHeadImg'), {
      //裁剪比例 w:h
      aspectRatio: width/height,
      crop: function(e) {
        console.log('crop...');
      }
    });
  }
}


getId('cac').onclick = function(){
  console.log('cac')
  if(!imgCropper) return ;

  let canvas = imgCropper.getCroppedCanvas({width,height});
  canvas.toBlob(d=>{
  	console.log(d);
    let formData = new FormData();
    formData.append('headImg',d);
    $.ajax('/uploadImg', {
      method: "POST",
      data: formData,
      mimeType: "multipart/form-data",
      processData: false,
      contentType: false,
      success: function () {
        console.log('success')
      },
      error: function () {
        console.log('Upload error');
      }
    });
  })
}

