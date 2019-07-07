import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contato } from './contato';
import { RespostaRequisicao } from '../app-resposta-req';

@Injectable()
export class ContatoService {

    Url = "https://localhost:44347/api/Contato";
    UrlPrd = "https://back-casamento-03.azurewebsites.net/api/Contato";

    headers = new Headers();
    requestOptions = new RequestOptions();

    constructor(private http: HttpClient) {
    }

    saveData(contato : Contato) : Observable<RespostaRequisicao>{

        var options = { 
                headers: new HttpHeaders().set('Content-Type', 'application/json') 
        };

        return this.http.post(this.Url, JSON.stringify(contato), options)
            .pipe(
                map ((res: any) => {
                    console.log(res);
                    var respostaReq = new RespostaRequisicao();
                    respostaReq.status = res.status;
                    respostaReq.mensagem = res.mensagem;

                    return respostaReq;
                }
            )
        );
    }
}

