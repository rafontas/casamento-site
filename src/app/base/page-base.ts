import { OnInit } from "@angular/core";

// Tem as funcionalidades que devem ser importadas em todas as páginas
export class PageBase {

    carouselOptions = {

    }

    constructor(doc : HTMLDocument){
        console.log("Entrou o initialize.");

        doc.onload = function(){
            console.log("Entrou o initialize 2.");

            // Carousel
            var element = document.querySelector('.carousel');

            document.addEventListener('DOMContentLoaded', function() {
                $('.carousel').carousel();
                console.log("Entrou o initialize 3.");
            });

        }
    }
}