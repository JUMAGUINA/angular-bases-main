
import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';

import {v4 as uuid} from 'uuid'

@Injectable({
              providedIn: 'root'
            })

export class DbzService
{
  public personajesList: character[] =
  [
    { id:uuid(),name:"Krillin", power:500 },
    { id:uuid(),name:"Vegeta", power:700 },
    { id:uuid(),name:"Goku", power:900 }
  ];

  onNewcharacterService(obje:character):void
  {
    const ObjetoSetado: character = { id:uuid(), ...obje }
    this.personajesList.push(ObjetoSetado);
  }

  // onDeletecharacterMain(index:number):void
  // {
  //   this.personajesList.splice(index,1);
  // }

  onDeletecharacterByIdService(idRegistro:string):void
  {
    this.personajesList = this.personajesList.filter( x => x.id !== idRegistro);
  }

}
