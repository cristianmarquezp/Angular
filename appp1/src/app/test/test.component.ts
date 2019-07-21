import { Component, OnInit } from '@angular/core';
import { fromStringWithSourceMap } from 'source-list-map';

@Component({
  selector: 'app-test',
  template: `
      <h2>
        Hello {{name}}
        <br>
        {{"this is a concatenation" + name}}
        <br>
        {{2+2}}
        <br>
        {{name.length}}
        <br>
        {{getUser()}}
        <br>
        {{siteUrl}}
      <h2>

      <hr>
      <h2>
        PROPERTY BIDING
      </h2>
      <input type = "text" value = "Cristian">
      <input [disabled]= "false" type = "text" value = "Cristian">
      <input [disabled]= "isDisabled" type = "text" value = "Cristian">
      <input  type = "text" value = "Cristian" [id]="myId" >
      <input  type = "text" value = "Cristian" id={{myId}} >

      <hr>
      <h2 [style.color] = "'Orange'"> Style Binding </h2>
      <h3 [style.color] = "isActive ? 'Green': 'Red'"> Style binding 2 </h3>
      <h4 [ngStyle] = "titleStyles">  Multiple Styles binding </h4>

      <hr>
      <h2>Event Binding</h2>
      <button (click) = "miFunc($event)"> Click me!</button> <br>{{greet}}

      <hr>
      <h2>Templante Variable </h2>
      <div>
        <p>This is something lik e getElementsbyId and get information about any DOM element</p>  
      </div>

      <input #name type="text"/>
       <button (click) = "onKeyUp(name.value)"> Click me 2 </button>

      <hr>
      <h2>Two way binding </h2>
      <div>
        <p>Allows us to update a property and at the same time show the value</p>  
      </div>
      <input type="text" [(ngModel)] = "nombre"/>
       {{nombre}}

       <hr>
       <h1>Structural Directives</h1>

       <h2>ngIf</h2>
        <p *ngIf = "condition; else elsecondition"> Text </p>

        <ng-template #elsecondition>
        <p> Text is hidden </p>
        </ng-template>

        <hr>
        <h2>ngSwitch</h2>
        <div [ngSwitch] = "color">
          <div *ngSwitchCase = "'blue'"> You Pick blue color </div>
          <div *ngSwitchCase = "'green'"> You Pick green color </div>
          <div *ngSwitchCase = "'red'"> You Pick red color </div>
          <div *ngSwitchDefault> Pick  again</div>
        </div> 

        <h2>ngFor</h2>
        <div *ngFor= "let color of colors; index as i">
          <h4>{{i+1}} {{color}} </h4>
        </div>



      



  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red","blue","orange","yellow"];

  public color = "bldsue";

  public condition = true;

  public nombre  ="";

  onKeyUp(usuario){
    console.log(usuario);
  }
  public greet = "";
  miFunc() {
      console.log("You've clicked the button");
      this.greet = "You've clicked the button";
  }

  

  public titleStyles={
    color: "blue",
    fontStyle: "italic"

  }
  public isActive = true;
  public name = "Cristian";
  public myId = "TestId";
  public isDisabled  = true;
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  getUser(){
    return "Hello Users my name is " +  this.name;
  }



}
