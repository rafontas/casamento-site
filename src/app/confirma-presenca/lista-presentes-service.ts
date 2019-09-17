import { DatePipe } from '@angular/common';

export class Convidado {
    data : Date;
    dtEnviado : Date;
    email : string;
    enviado : boolean;
    id : number;
    mensagem : string;
    nome : string;
    quantidadeAdultos : number;
    quantidadeCrianca : number = 0;

    constructor(private datePipe: DatePipe) {}

    parse (item : any) {
        if (item.data) { this.data = item.data; }
        if (item.dtEnviado) { this.data = item.data };
        if (item.email) { this.email = item.email };
        if (item.id) { this.id = item.id };
        if (item.nome) { this.nome = item.nome };
        if (item.quantidadeAdultos) { this.quantidadeAdultos = item.quantidadeAdultos };
        if (item.quantidadeCrianca) { this.quantidadeCrianca = item.quantidadeCrianca };
        if (item.mensagem) { this.mensagem = item.mensagem };
        if (item.enviado) { this.enviado = item.enviado };
    }
    
    template () : string {
        var txtTemplate : string;
        
        txtTemplate = '<tr style="color:white;">';
        txtTemplate += `<td>${this.nome}</td>`;
        txtTemplate += `<td>${this.datePipe.transform(this.data, "dd/MM/yyyy HH:mm")}</td>`;
        txtTemplate += `<td class='centered'>${this.quantidadeAdultos}</td>`;
        txtTemplate += `<td class='centered'>${this.quantidadeCrianca}</td>`;
        txtTemplate += '</tr> </br >';

        return txtTemplate;
    }
}