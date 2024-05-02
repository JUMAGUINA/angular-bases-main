import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent
{

  constructor(private DbzService : DbzService)
  {

  }

  get personajes(): character[]{
    return [...this.DbzService.personajesList]
  }

  onNewcharacterMain(obje:character):void
  {
    this.DbzService.onNewcharacterService(obje);
  }

  onDeletecharacterByIdMain(idRegistro:string):void
  {
    this.DbzService.onDeletecharacterByIdService(idRegistro);
  }


}
