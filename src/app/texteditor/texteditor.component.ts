import { Component, OnInit } from '@angular/core';
import { ITexteditor } from './texteditor';


export interface ITexteditor {
    text: string;
}

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})

export class TexteditorComponent implements OnInit {
  
  content: any;
  myContentSaved: any;
  angular: any;

  constructor() {

  }
  /**
  * Fonction onload
  *
  */

  ngOnInit(): void {

  	this.content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor enim velit, vitae fringilla nulla sollicitudin vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur et cursus augue, convallis ullamcorper neque. Nunc justo velit, molestie eu tempus non, scelerisque in mauris. Morbi felis ipsum, imperdiet ac laoreet sit amet, mollis nec nibh. Nunc sed sem odio. Aenean varius mollis accumsan. Etiam molestie, purus eget fringilla aliquet, tellus nunc dignissim sapien, quis vulputate velit nibh quis diam. Curabitur at mollis massa. Sed ac auctor odio." ;

    if(localStorage.getItem('myContentSaved') != undefined && localStorage.getItem('myContentSaved') != ""){
       var myContentSaved = JSON.parse(localStorage.getItem('myContentSaved'));   
           this.content = myContentSaved;
    }
  }

    /**
    * Fonction qui stock mon texte en local 
    */

    submitText(event): void {
      let elem: HTMLInputElement;
      elem = document.querySelector('#mytext');
      const text = elem.value;
      this.content = text.trim();
      localStorage.setItem('myContentSaved', JSON.stringify(this.content));
    }
}

