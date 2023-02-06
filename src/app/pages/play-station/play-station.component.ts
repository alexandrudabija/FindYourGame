import { Component, OnInit } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { GamesService } from 'src/app/services/games.service'; import {trigger,state, style,animate,transition} from '@angular/animations';



 @Component({
  selector: 'app-play-station',
  templateUrl: './play-station.component.html',
  styleUrls: ['./play-station.component.scss'],

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
export class PlayStationComponent implements OnInit {

  isOpen2 = false;
  isOpen = true;
  isOpen3=false;
  Nopen :any  ; // nu importam pentru ca  functia caluleaza index dupa cursor
  num :number=1;
  Pag :number=1;
  G: number =5;
   Filter:any =[]; //se importeaza doar functionalul functiei ! , nu o folosim aici !
  array  : any=[] ;
  indexGallery :number =0;
  filterstring :any =""; // ne trebuie sa importam  ,dar nu o sa folosiim !



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


                    })

            }


  filter(value :any , filterstring :any,platform: any ):any
  {


const users :any =[];



if(filterstring=="")
{
  value?.forEach((element :any )=> {

    for(const item of element.platforms )
              {


                        if(item.platform.name.toLowerCase()===platform.toLowerCase())



                            {



                                    users.push(element);

                                  }

              }

  })
return users
}







value?.forEach((element :any )=> {





            if(element.name.toString().toLowerCase().includes(filterstring.toString().toLowerCase()) )



    {


      for(const item of element.platforms )
              {


                        if(item.platform.name.toLowerCase()===platform.toLowerCase())

                            {



                                    users.push(element);

                             }

              }




   }







})


return users;


  }

}
