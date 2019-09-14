import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfirmaPresenca } from './confirma-presenca';
import { RespostaRequisicao } from '../app-resposta-req';

@Injectable()
export class ConfirmaPresencaService {

    Url = "https://localhost:44347/api/ConfirmacaoPresenca";
    UrlPrd = "https://back-casamento-03.azurewebsites.net/api/ConfirmacaoPresenca";

    headers = new Headers();
    requestOptions = new RequestOptions();

    constructor(private http: HttpClient) {
    }

    saveData(confirmaPresenca : ConfirmaPresenca) : Observable<RespostaRequisicao> {

        var options = { 
                headers: new HttpHeaders().set('Content-Type', 'application/json') 
        };

        // return this.http.post(this.Url, JSON.stringify(confirmaPresenca), options)
        return this.http.post(this.UrlPrd, JSON.stringify(confirmaPresenca), options)
            .pipe(
                map ((res: any) => {

                    console.log(res);
                    var respostaReq = new RespostaRequisicao();
                    respostaReq.status = res.status;
                    respostaReq.mensagem = res.mensagem;
                    respostaReq.situacao = res.situacao;

                    return respostaReq;
                }
            )
        );
    }
}

