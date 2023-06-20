class Alvo{
    constructor(x,y,raio){
        this.imagem=loadImage("board.png")
        this.body=Bodies.circle(x,y,100,{isStatic:true})
        World.add(world,this.body)
        this.x=x
        this.y=y
        this.raio=raio
    }

    destruir(i){
        setTimeout(()=>{
            World.remove(world,alvos[i].body)
            delete alvos[i]
        },300)
    }

    criar(){
       var pos=this.body.position
        image (this.imagem,pos.x,pos.y,200,200)
    }
}