class AnimationRoot {
    constructor(){}
}

class WhileLoop{
    private class_data:any;
    private section_time:number;
    private flag:boolean = true;

    constructor(send_class:any,send_section_time:number= 100){
        this.class_data = send_class;
        this.section_time = send_section_time;
    }

    private async sleep(sleep_time:number){
        return new Promise(function(resolve) {
            setTimeout(function() { resolve(0) }, sleep_time)
          })
    }

    private async loop() {
        var point = 0;
        while (this.flag){
            this.class_data.loop(point)
            point += 10;
            //await this.sleep(10);
        }
        return 1;
    }

    public start(){

    }

    public end(){
        this.flag = false
    }
}

class StopStation extends AnimationRoot {

    private ctx:any;
    private delbool:boolean = true;
    private stop_list_ja : string[]=[];
    private stop_list_en : string[]=[];
    private stop_list_num : string[]=[];
    private stop_list_color : string[]=[];

    constructor(send_delbool:boolean,send_stop_list_ja : string[]=[],send_stop_list_en : string[]=[],send_stop_list_num : string[]=[],send_stop_list_color : string[]=[]) {
        super();
        this.delbool = send_delbool
        this.stop_list_ja =send_stop_list_ja
        this.stop_list_en = send_stop_list_en
        this.stop_list_num = send_stop_list_num
        this.stop_list_color = send_stop_list_color
    }
    
    public loop(y_plus:number=0){
        
        if (this.delbool){
            new AllDel();
        }
        
        var canvas = <HTMLCanvasElement>document.getElementById('LCD_CanvasMap')!;

        this.ctx = canvas.getContext('2d')!;
        this.ctx.fillStyle = "#000000" ;

        const len_ja = stop_list_ja.length
        const len_en = stop_list_en.length
        const len_num = this.stop_list_num.length
        const len_color = this.stop_list_color.length

        var x_circle = 40;
        var x_base = 100;
        var x_text = 100;

        var y_base = 100 + y_plus;
        var y_one = 100;

        var circle_radius = 40;

        for (let i = 0; i < len_ja; i++) {

            const ja = stop_list_ja[i]

            this.ctx.arc( x_base, y_base, x_circle, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;

            this.ctx.fillStyle = "#000000" ;
            this.ctx.textAlign = "left";
            this.ctx.font = "45px Yu Gothic"
            const ja_x = x_base + (x_circle / 2) + 30
            this.ctx.fillText(ja, ja_x ,y_base+5)    


            if (i < len_color){
                const color = stop_list_en[i]
                this.ctx.fillStyle = color ;
            }
            else{
                this.ctx.fillStyle = "#000000" ;
            }

            this.ctx.fill() ;

            if (i < len_en){
                const en = stop_list_en[i]
                this.ctx.fillStyle = "#000000" ;
                this.ctx.textAlign = "left";
                this.ctx.font = "25px Yu Gothic"
                const en_x = x_base + (x_circle / 2) + 35
                this.ctx.fillText(en, en_x ,y_base+35)    

            }

            if (i < len_num){
                const num = stop_list_en[i]
                this.ctx.font = "25px Yu Gothic"
                this.ctx.textAlign = "center";
                this.ctx.fillStyle = "#ffffff" ;
                this.ctx.fillText(num,x_base ,y_base)     
            }


            y_base += y_one
        }
    }
}

class TrainSecond extends AnimationRoot {
    private ctx:any;

    constructor(delbool:boolean,A_language1:string,B_language1:string,A_language2:string,B_language2:string,x:number=640,y:number=360,TYPE:string="A",type_color:string="#000000") {
        var d_color:string="#000000"
        super();
        if (delbool){
            new AllDel();
        }
        
        var canvas = <HTMLCanvasElement>document.getElementById('LCD_CanvasMap')!;

        this.ctx = canvas.getContext('2d')!;
        this.ctx.fillStyle = "#000000" ;

        this.ctx.font = "45px Yu Gothic"

        this.ctx.textAlign = "center";
        var A_language1_textWidth = this.ctx.measureText(A_language1 ).width ;
        var B_language1_textWidth = this.ctx.measureText( B_language1 ).width ;

        var A_language1_X =  x - (A_language1_textWidth / 2) - 20;
        var B_language1_X =   x + (B_language1_textWidth / 2) + 20;

        if (TYPE === "A"){
            this.ctx.fillStyle = type_color
        }
        else{
            this.ctx.fillStyle = d_color
        }

        this.ctx.fillText(A_language1,A_language1_X ,y)     

        if (TYPE === "B"){
            this.ctx.fillStyle = type_color
        }
        else{
            this.ctx.fillStyle = d_color
        }
        this.ctx.fillText(B_language1, B_language1_X ,y)    

        this.ctx.font = "25px Yu Gothic"
        var A_language2_textWidth = this.ctx.measureText(A_language2 ).width ;
        var B_language2_textWidth = this.ctx.measureText( B_language2 ).width ;

        if (TYPE === "A"){
            this.ctx.fillStyle = type_color
        }
        else{
            this.ctx.fillStyle = d_color
        }
        this.ctx.fillText(A_language2, A_language1_X ,y+30)   
        if (TYPE === "B"){
            this.ctx.fillStyle = type_color
        }
        else{
            this.ctx.fillStyle = d_color
        }
        this.ctx.fillText(B_language2,B_language1_X  ,y+30)  
    }
}

class AnimationCenterText extends AnimationRoot {
    private ctx:any;

    constructor(delbool:boolean,text_language1:string,text_language2:string,x:number=640,y:number=360) {
        super();
        if (delbool){
            new AllDel();
        }
        
        var canvas = <HTMLCanvasElement>document.getElementById('LCD_CanvasMap')!;

        this.ctx = canvas.getContext('2d')!;
        this.ctx.fillStyle = "#000000" ;
        this.ctx.textAlign = "center";

        this.ctx.font = "45px Yu Gothic"
        this.ctx.fillText(text_language1, x ,y)     

        if (text_language2 !== ""){
            this.ctx.font = "25px Yu Gothic"

            this.ctx.fillText(text_language2, x ,y+30)   
        }
  
    }
}

class AllDel{
    constructor(){
        var canvas = <HTMLCanvasElement>document.getElementById('LCD_CanvasMap')!;
        var ctx = canvas.getContext('2d')!;
        ctx.clearRect(0,0,1280,720);
        ctx.fillStyle = "#000000" ;
    }
}