let imgCropper = null;

let EID = function(id){
  return document.getElementById(id);
}

// 输出的图片大小
let width = 30;
let height = 30;


EID('input-getImg').onchange = function(){
  let r = new FileReader();
  r.readAsDataURL(EID('input-getImg').files[0]);
  r.onload = function(){
    console.log('read file 100%');
    console.log('DataURL:');
    console.log(r.result);
    EID('newPHeadImg').src=r.result;
    imgCropper = new Cropper(EID('newPHeadImg'), {
      //裁剪比例 w:h
      aspectRatio: width/height,
      crop: function(e) {
        console.log('crop...');
      }
    });
  }
}


EID('cac').onclick = function(){
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

