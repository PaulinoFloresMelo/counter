import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iroman';
  public age: number = 13;

  get capitalizedName(): string{
    return this.name.toUpperCase()
  }

  getHeroDescription(): string{
    return `Nombre: ${ this.name } - Edad: ${ this.age}`;
  }

  changeName(): void{
    this.name = 'Spiderman';
    console.log(`Nombre: ${this.name}`)
  }

  changeAge(): void{
    this.age = 25;
    console.log(`Edad: ${this.age}`)
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 13;
    console.log(`Nombre: ${this.name}, Edad: ${this.age}`)
  }
}
