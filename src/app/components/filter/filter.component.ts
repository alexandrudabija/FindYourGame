import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  @Output() value = new EventEmitter<string>();

  ngOnInit(): void {
  }






  Action( ):void
  {
    this.value.emit("Action");

  }


  Strategy( )
  {
    this.value.emit("Strategy");


  }




  RPG( )
  {
    this.value.emit("RPG");

  }



  Shooter( )
  {

    this.value.emit("Shooter");
  }

  Adventure( )
  {

    this.value.emit("Adventure");
  }


  Racing( )
  {
    this.value.emit("Racing");


  }


  Sports( )
  {
    this.value.emit("Sports");

  }


  all( )
  {

    this.value.emit("");
  }

}
