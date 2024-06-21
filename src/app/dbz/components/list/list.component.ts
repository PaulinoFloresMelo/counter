import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[];

  @Output()
  public onDeleteChild: EventEmitter<string> = new EventEmitter();

  // onDelete = Index value: number
  onDeleteCharacter(id?: string):void {
    // TODO: Emitir el Id del personaje
    if ( !id ) return;
    console.log({id})
    this.onDeleteChild.emit(id);
  }

}
