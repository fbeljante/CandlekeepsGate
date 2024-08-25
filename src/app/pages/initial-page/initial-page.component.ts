import { Component } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent {

  public Player: Player;

  constructor() {
    this.Player = {
      gender: "Default",
      race: "",
      class: "",
      alignment: ""

    }
  }

  onMaleButton() {
    this.Player.gender = "Male";
    console.log(this.Player.gender)
  }
  onFemaleButton() {
    this.Player.gender = "Female";
    console.log(this.Player.gender)
  }
 }

