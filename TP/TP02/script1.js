


var imageInput = document.getElementById('image-input');
imageInput.addEventListener('change',handleImage);
function handleImage(uploadedImgFile){
    
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();// create image Object
        img.src = event.target.result;
        img.onload = function (){

            var myCanvas = document.getElementById('myCanvas')
            var myContext = myCanvas.getContext("2d")
            
            // myCanvas.width = img.width;
            // myCanvas.height = img.height;
            myContext.drawImage(img,0,0,myCanvas.width,myCanvas.height);
        }
        
    }
    reader.readAsDataURL(uploadedImgFile.target.files[0]);
}
