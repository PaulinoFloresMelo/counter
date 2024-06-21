import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
 import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Gokú',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 7500
  },{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  addCharacter(character: Character):void {

    const newCharecter: Character = {
      id: uuid(), ...character
    };

    this.characters.push(newCharecter);
  }

  // onDeleteCharacterFather(indexCharacter: number):void {
  //   this.characters.splice(indexCharacter,1);
  // }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter( character => character.id !== id)
  }

}
