import { Component, EventEmitter, Input, Output} from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent
{
  @Input()
  public personajesList: character[] =
  [
    { id:undefined,name:"", power:500 }  // Data por defecto
  ];

  @Output() public EmitcharacterIndex: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(idRegistro?:string):void
  {
    if(!idRegistro)return;
    this.EmitcharacterIndex.emit(idRegistro);
  }

}


