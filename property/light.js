class  RayTracing{
   constructor(blocks,distance) {
      this.blocks = blocks;
      this.distance = distance;
      this.radian=Math.PI/180;
      
   }
   setRay(start,ends,angle){
      this.start=start;
      this.ends=ends;
      this.angle=angle
   }
   update(){
      let intersect=new Intersect(this.start);
      for (var i = 0; i < this.ends.length; i++) {
         let minmum=this.distance;
         let point=this.ends[i];
         for (var v = 0; v < this.blocks.length; v++) {
            let result=intersect.intersect(this.angle[i],this.blocks[v]);
            if (result) {
               if (result.t<minmum) {
                  minmum=result.t;
                  point=result.point;
               }
            }
         }
         this.ends[i]=point
      }
   }
}