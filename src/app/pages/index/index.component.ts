
// npm install ng-circle-progress --save

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import {trigger,state, style,animate,transition} from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
   ,



   animations: [
    trigger('openClose', [

          state('open', style({

            height: '70px',

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





  ]  })




export class IndexComponent implements OnInit {



 filterstring :any ="";  // for filter to generes and name


  isOpen2 = false;    // for open html components
   isOpen = true;  // for open html components
    Nopen :any  ;  // for verify index to open more detailes
     isOpen3=false;
indexGallery :number =0; //  indexGallery , each objects have personal gallery


     G: number =1;      // for change  page number
array  : any=  [] ; // on this array i save api data



  // col : any= ['#0275d8','#d9534f','#5bc0de','#5cb85c']


changeHandler(value: string) {
  this.filterstring =value;
}





  constructor(private game :GamesService  )
  {



  }




  ngOnInit(): void {



    this.game.getData(1).subscribe((data1 :any)=>
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






// For retunr number to see new page on API
    RetApi (num :number):any
  {

        if(num===0){return this.G=0}
        else if  (num===1) {

          return this.G=1}
        else if  (num===2) { return this.G=2}
        else if  (num===3) { return this.G=3}
        else if  (num===4) {return this.G=4}
        else if  (num===5) {return this.G=5}
        else if  (num===6) {return this.G=6}
        else if  (num===7) {return this.G=7}


  }






  openForMore(id:number) :any
  {

        this.array[this.G].results.filter((item :any ,index:any) =>
          {

              if(index===id){


                this.Nopen=index;



          }


            })





  }


  ReturnColor(title:string):any


  {

let value

if (title==="recommended")

{
return value='#0275d8'

}
else if (title==="exceptional")
{
  return value='#d9534f'
}
else if (title==="meh")
{
  return value='#5bc0de'
}
else if (title==="skip")
{
  return  value='#5cb85c'
}


  }



 filter(value :any , filterstring :any ,platform:any):any
{





if (filterstring===""&& platform==="all") {

      return value;
      }

const users :any =[];



  value?.filter((obj:any , index:any )=>{


    if (obj.name.toString().toLowerCase().includes(filterstring.toLowerCase()))
    {
  //  include face afisarea dinamica !
       users.push(obj);



    }




    obj.genres?.map((item:any) =>
    {



        if (item.name.toString().toLowerCase().includes(filterstring.toLowerCase())

        )
      {
    //  include face afisarea dinamica !
        users.push(obj);



      }


          })


})


  return users

 }



  // outerStrokeColor = (percent: number) : string => {
  //   if(percent >= 100){
  //     return "Congratulations!"
  //   }else if(percent >= 50){
  //     return "Half"
  //   }else if(percent > 0){
  //     return "Just began"
  //   }else {
  //     return "Not started"
  //   }





}



