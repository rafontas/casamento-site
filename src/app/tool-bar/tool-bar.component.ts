import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  itemClickado : string = 'Home';

  constructor() { }

  ngOnInit() {
  }

  public clickToolbar($event) {
    alert('Opa!');
    console.log('Opa!');
  }

  public itemClicadoToolbar(itemId : string) {

  }

  public itemDesClicadoToolbar() {
    
  }

  ngAfterViewInit() {
    // jQuery('img.svg').each(function () {
    //   var $img = jQuery(this);
    //   var imgID = $img.attr('id');
    //   var imgClass = $img.attr('class');
    //   var imgURL = $img.attr('src');

    //   jQuery.get(imgURL, function (data) {
    //     // Get the SVG tag, ignore the rest
    //     var $svg = jQuery(data).find('svg');

    //     // Add replaced image's ID to the new SVG
    //     if (typeof imgID !== 'undefined') {
    //       $svg = $svg.attr('id', imgID);
    //     }

    //     // Add replaced image's classes to the new SVG
    //     if (typeof imgClass !== 'undefined') {
    //       $svg = $svg.attr('class', imgClass + ' replaced-svg');
    //     }

    //     // Remove any invalid XML tags as per http://validator.w3.org
    //     $svg = $svg.removeAttr('xmlns:a');

    //     // Replace image with new SVG
    //     $img.replaceWith($svg);

    //     $svg.css("height", "3em");
    //     $svg.css("width", "3em");
    //     $svg.css("padding-top", "10px");
    //     // $svg.css("position", "fixed");
    //     $svg.css("fill", "white !important");
    //     $svg.css("color", "white !important");

    //   }, 'xml');

    // });
  }

}
