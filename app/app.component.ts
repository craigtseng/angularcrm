import { Component ,OnInit } from '@angular/core';
//import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 
export class AppComponent {
  //title = 'app';
  ngOnInit() {
    console.table(this.users) 
    console.log(this.users[0].users[0])
   }
  title = 'Tour of Heroes';
  heroes = HEROES;
  users = user;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
export class Hero {
  id: number;
  name: string;
}
export interface Users{
    count: number,
    users: Hero[]
}

const user: Users[] = [
  { count: 11, users: [{id: 11, name: 'Mr. Nice'}, { id: 12, name: 'Narco' }] }
  
];
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];