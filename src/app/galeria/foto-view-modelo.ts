import { stringify } from "@angular/core/src/util";

export class FotoView {
    
    static classesPdr : string = "center col ";
    static classesColunasPdr : string = "s12 m4";
    
    meuNome : string;
    classes : string = FotoView.classesPdr + FotoView.classesColunasPdr; 

    constructor (numero : number, classes : string = null) {
        this.meuNome = numero.toString();
        if (classes) { this.classes = classes; }
    }
    
    public getTemplatePre () : string {
        let template : string = "";

        template += `<div class="${this.classes}">`;
        template += `   <a href="../src/app/images/galeria/normal/${this.meuNome}.jpg" data-fancybox="images">`;
        template += `       <img src="../src/app/images/galeria/pequenas/${this.meuNome}.jpg">`;
        template += `   </a>`;
        template += `</div>`;

        return template;
    }

    public static getAbreDivPre(foto : FotoView, cont : number ) : boolean
    {
        if (cont % 3 == 1) return true;
        
        return false;
    }
    
    public static getFechaDivPre(foto : FotoView, cont : number ) : boolean
    {
        if (foto.meuNome == "33") return true;
        if ((cont % 3) == 0) return true;

        return false;
    }

    public static getFotosPre () : FotoView [] 
    {
        let fotosPre : FotoView[] = [
            new FotoView(4),
            new FotoView(2),
            new FotoView(3),
            new FotoView(5),
            new FotoView(7),
            new FotoView(8),
            new FotoView(9),
            new FotoView(10),
            new FotoView(11),
            new FotoView(12),
            new FotoView(13),
            new FotoView(14),
            new FotoView(15),
            new FotoView(16),
            new FotoView(17),
            new FotoView(18),
            new FotoView(19),
            new FotoView(20),
            new FotoView(22),
            new FotoView(23),
            new FotoView(40),
            new FotoView(24),
            new FotoView(25),
            new FotoView(26),
            new FotoView(44),
            new FotoView(46),
            new FotoView(35),
            new FotoView(36, "center col s12 m6"),
            new FotoView(33, "center col s12 m6"),
            new FotoView(27),
            new FotoView(28),
            new FotoView(29),
            new FotoView(30),
            new FotoView(21),
            new FotoView(31),
            new FotoView(37),
            new FotoView(38),
            new FotoView(34),
            new FotoView(39),
            new FotoView(41),
            new FotoView(32),
            new FotoView(42),
            new FotoView(43),
            new FotoView(0),
            new FotoView(6),
            new FotoView(1),
            new FotoView(21)
        ];

        return fotosPre;
    }
}