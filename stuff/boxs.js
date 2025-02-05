class Boxs {
   constructor(num) {
      this.num = num;
      this.size = {width:10,height:10};
      this.color = "rgb(125,0,255)";
      this.boxs = [];
   }
   setSize(size){
      this.size=size;
   }
   setColor(color){
      this.color=color
   }
   createBox(){
      for (var i = 0; i < this.num; i++) {
         let x_axis=Math.random()*width;
         let y_axis=Math.random()*height;
         let box={
            position:vector(x_axis,y_axis),
            size:this.size
         };
         this.boxs.push(box);
      }
   }
   draw(ctx){
      for (var i = 0; i < this.num; i++) {
         let box=this.boxs[i];
         ctx.fillStyle=this.color;
         ctx.fillRect(
            box.position.x,box.position.y,
            box.size.width,box.size.height
            )
      }
   }
}