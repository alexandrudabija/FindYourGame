import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { GamesService } from 'src/app/services/games.service';
 import {trigger,state, style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],


    animations: [

    trigger('openClose', [

      state('open', style({

        height: '50px',


                        } )


        ),
      state('closed', style({
        height: '0px',

      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
]),







    ]

})
export class OtherComponent implements OnInit {
  isOpen3=false;
isOpen2 = false;
isOpen = true;

Nopen :any  ; // nu importam pentru ca  functia caluleaza index dupa cursor
num :number=1;
// Pag :number=1;
G: number =5;
 Filter:any =[]; //se importeaza doar functionalul functiei ! , nu o folosim aici !
array  : any=[] ;
indexGallery :number =0;
filterstring :any =""; // ne trebuie sa importam  ,dar nu o sa folosiim !




// this.game.fetchData()

// this.game.dataSource.subscribe(data=>{

// if(Object.keys(data).length !== 0)
// { this.array.push(data)

// }

// })


  constructor(private data : IndexComponent ,private game :GamesService )

{

  this.game.getData(1).subscribe((data1 :any)=>
  this.array.push(data1)
 )

 this.game.getData(2).subscribe((data1 :any)=>
 this.array.push(data1)
 )
 this.game.getData(3).subscribe((data1 :any)=>
 this.array.push(data1)
 )
 this.game.getData(4).subscribe((data1 :any)=>
 this.array.push(data1)
 )
 this.game.getData(5).subscribe((data1 :any)=>
 this.array.push(data1)
 )
 this.game.getData(6).subscribe((data1 :any)=>
 this.array.push(data1)
 )
 this.game.getData(7).subscribe((data1 :any)=>
 this.array.push(data1))

 this.game.getData(8).subscribe((data1 :any)=>
 this.array.push(data1) )




}




  ngOnInit(): void {


  }


  RetApi(num :number):any  {
  this.G= this.data.RetApi(num);
console.log( this.G);


          }

ReturnColor(title:string):any
{
 return this.data.ReturnColor(title);

}


openForMore(id:number) :any
  {

        this.array[this.G].results.filter((item :any ,index:any) =>
          {

              if(index===id){


                this.Nopen=index;



          }


            }) }


filter(value :any , filterstring :any ):any
{
 return this.data.filter(value,filterstring,"all");
}



changeHandler(value: string) {
  this.filterstring =value;
}



}


