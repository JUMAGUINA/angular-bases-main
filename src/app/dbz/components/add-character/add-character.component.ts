import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent
{
  @Output() public onNewcharacter: EventEmitter<character> = new EventEmitter();

  public character: character ={
    name: "",
    power:0
  }

  emitcharacter():void
  {
    if(this.character.name.length === 0)return;

    this.onNewcharacter.emit(this.character);

    this.character ={
      name: "",
      power:0
    }
  }

}
