class AnimationRoot {
    constructor(){}
}

class AnimationCenterText extends AnimationRoot {
    private ctx:any;

    constructor(text_language1:string,text_language2:string) {
        super();
        var canvas = <HTMLCanvasElement>document.getElementById('LCD_CanvasMap')!;

        this.ctx = canvas.getContext('2d')!;
        this.ctx.textAlign = "center";

        this.ctx.font = "45px Yu Gothic"
        this.ctx.fillText(text_language1, 640 ,360)     

        if (text_language2 !== ""){
            this.ctx.font = "25px Yu Gothic"
            this.ctx.fillText(text_language2, 640 ,390)   
        }
  
    }
}

class AllDel{
    constructor(){
        var canvas = <HTMLCanvasElement>document.getElementById('LCD_CanvasMap')!;
        var ctx1 = canvas.getContext('2d')!;
        ctx1.clearRect(0,0,1280,720);
    }
}