import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-race-page',
  templateUrl: './race-page.component.html',
  styleUrls: ['./race-page.component.css']
})
export class RacePageComponent {

    constructor(public playerService: PlayerService) {}

    onHumanButton() {
      this.playerService.setPlayer('race', 'Human');
      console.log(this.playerService.Player.gender);
    }
    onElfButton() {
      this.playerService.setPlayer('race', 'Elf');
      console.log(this.playerService.Player.gender);
    }
    onHalfElfButton() {
      this.playerService.setPlayer('race', 'Half-Elf');
      console.log(this.playerService.Player.gender);
    }
    onGnomeButton() {
      this.playerService.setPlayer('race', 'Gnome');
      console.log(this.playerService.Player.gender);
    }
    onHalflingButton() {
      this.playerService.setPlayer('race', 'Halfling');
      console.log(this.playerService.Player.gender);
    }
    onDwarfButton() {
      this.playerService.setPlayer('race', 'Dwarf');
      console.log(this.playerService.Player.gender);
    }
    onHalfOrcButton() {
      this.playerService.setPlayer('race', 'Half-Orc');
      console.log(this.playerService.Player.gender);
    }
  }

