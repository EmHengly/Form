navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
}).then((stream) =>{
    var video = document.querySelector('video');
    video.srcObject = stream;
   

}).catch((err) => {
    console.log('navigator.mediaDevices.getUserMedia error: ',err.message, err.name);
});


(function loop(){
    
    if(playing){
        var canvas = document.getElementById('canvas')
        canvas.getContext('2d').drawImage(video,0,0,400,300);
        setTimeout(loop, 1000/30,video,canvas); //drawing at 30fps
    }
    
 });
