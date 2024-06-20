import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames : string[]= ['Spiderman', 'Ironman', 'Hulk', 'She hulk', 'Thor'];
  public deletedHero: string | undefined ='';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    console.log(`Heroes: ${this.heroNames}, heroe borrado:${this.deletedHero}`)
  }
}
