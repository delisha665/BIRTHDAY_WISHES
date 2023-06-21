var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 position={top:0,left:0};

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(img) {
        img_img_object=img;
        img_img_object.scaleToWidth(700);
        img_img_object.scaleToHeight(510);
        img_img_object.set(position);
        canvas.add(img_img_object);
    });
	
}

function playsound(){
	x.play()
}
