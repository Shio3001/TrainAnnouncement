const width_size = document.documentElement.clientWidth
const hight_size = document.documentElement.clientHeight	

var Main_LCD_body = document.getElementById("LCD")!;
Main_LCD_body.style.position = "relative";

class AnimationRoot {
    constructor(){}
}
class WhileLoop{
    private class_data:any;
    private section_time:number;
    constructor(send_class:any,send_section_time:number= 100){
        this.class_data = send_class;
        this.section_time = send_section_time;
    }

}
class WhileMovLoop{
    private class_data:any;
    private section_time:number;
    private flag:boolean = true;

    constructor(send_class:any,send_section_time:number= 100){
        this.class_data = send_class;
        this.section_time = send_section_time;
    }

    start(){

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
    
    public main(y_plus:number=0){
        
    }
}

class TrainSecond extends AnimationRoot {
    private ctx:any;

    private delbool:boolean = true;
    private A_language1:string;
    private B_language1:string;
    private A_language2:string;
    private B_language2:string;
    private x:number;
    private y:number;
    private TYPE:string;
    private type_color:string;

    constructor(delbool:boolean,A_language1:string,B_language1:string,A_language2:string,B_language2:string,x:number=640,y:number=360,TYPE:string="A",type_color:string="#000000") {
        super();
        this.delbool = delbool;
        this.A_language1 = A_language1;
        this.B_language1 = B_language1;
        this.A_language2 = A_language2;
        this.B_language2 = B_language2;
        this.x =x;
        this.y =y;
        this.TYPE = TYPE;
        this.type_color = type_color;
    }

    main(){
    }
}

class AnimationCenterText extends AnimationRoot {
    private ctx:any;
    private delbool;
    private text_language1;
    private text_language2;
    private x;
    private y;


    constructor(delbool:boolean,text_language1:string,text_language2:string,x:number=640,y:number=360) {
        super();
        this.delbool =  delbool;
        this.text_language1 =  text_language1;
        this.text_language2 = text_language2;
        this.x= x;
        this. y= y;
    }

    main(){
        var text_language1Element = document.createElement("p"); // p要素作成
        var text_language1Content = document.createTextNode(this.text_language1); // テキストノードを作成
        text_language1Element.appendChild(text_language1Content); // p要素にテキストノードを追加
        text_language1Element.setAttribute("id","text_language1"+this.text_language1); // p要素にidを設定
        
        var text_language2Element = document.createElement("p"); // p要素作成
        var text_language2Content = document.createTextNode(this.text_language2); // テキストノードを作成
        text_language2Element.appendChild(text_language2Content); // p要素にテキストノードを追加
        text_language2Element.setAttribute("id","text_language2"+this.text_language2); // p要素にidを設定


        text_language1Element.style.fontSize = "50px" ;
        text_language2Element.style.fontSize = "30px" ;
        text_language1Element.style.fontFamily  = "Yu Gothic" ;
        text_language2Element.style.fontFamily  = "Yu Gothic" ;

        //text_language1Element.style.textAlign = "center";
        //text_language2Element.style.textAlign = "center";

        text_language1Element.style.position = "fixed";
        text_language2Element.style.position = "fixed";
        
        
        var LCD_body = document.getElementById("LCD")!;
        LCD_body.appendChild(text_language1Element);
        LCD_body.appendChild(text_language2Element);

        const text_1px_x = ((width_size / 2) - (text_language1Element.clientWidth / 2))
        const text_2px_x = ((width_size / 2) - (text_language2Element.clientWidth / 2))

        //text_language1Element.style.left =  text_1px_x + "px";
        //text_language2Element.style.left =  text_2px_x + "px";

        console.log(text_1px_x)
        console.log(text_2px_x)

        const text_1px_y = ((hight_size / 2) - (text_language1Element.clientHeight / 2)) -70
        const text_2px_y = ((hight_size / 2) - (text_language2Element.clientHeight / 2))

        //text_language1Element.style.top =  text_1px_y + "px";
        //text_language2Element.style.top =  text_2px_y + "px";

        console.log(text_1px_y)
        console.log(text_2px_y)

        //text_language1Element.className = "text_language1Element_sta";
        //text_language1Element.className = "text_language1Element_end";
        //text_language1Element.classList.add("text_language1Element_sta")
        text_language1Element.style.setProperty('--left_pos_A', text_1px_x-200+`px`);
        text_language1Element.style.setProperty('--left_pos_B', text_1px_x+`px`);
        
        text_language1Element.style.setProperty('--top_pos_A', text_1px_y+`px`);
        text_language1Element.style.setProperty('--top_pos_B', text_1px_y-(hight_size*0.3)+`px`);

        //text_language1Element.style.setProperty('--time', "2s");
        text_language1Element.classList.add("text_languageElement_sta")

        //(´・ω・`)

        text_language2Element.style.setProperty('--left_pos_A', text_2px_x-100+`px`);
        text_language2Element.style.setProperty('--left_pos_B', text_2px_x+`px`);
        
        text_language2Element.style.setProperty('--top_pos_A', text_2px_y+`px`);
        text_language2Element.style.setProperty('--top_pos_B', text_2px_y-(hight_size*0.3)+`px`);
        //text_language2Element.style.setProperty('--time', "3s");
        text_language2Element.classList.add("text_languageElement_sta")

        

    }

    del(){
        var text_language1 = document.getElementById("text_language1"+this.text_language1)!;
        text_language1.remove()
        var text_language2 = document.getElementById("text_language2"+this.text_language2)!;
        text_language2.remove()
    }
}

//https://qiita.com/takahiro_itazuri/items/559427278f315ed119fe