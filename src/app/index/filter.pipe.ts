import { Pipe,PipeTransform} from '@angular/core'

@Pipe({
 
name:'filter'

})

export class FilterPipe implements PipeTransform {

transform (value :any, filterstring:string)
{

if(value.length===0)
{return value}



const user  :any = [];
for (const user of value)
{

if(user['name']===filterstring)
user.push(user);
}
return user ;

}

}