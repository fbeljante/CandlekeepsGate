import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
})
export class InitialPageComponent {
  constructor(public playerService: PlayerService) {}

  onMaleButton() {
    this.playerService.setPlayer('gender', 'Male');
    console.log(this.playerService.Player.gender);
  }
  onFemaleButton() {
    this.playerService.setPlayer('gender', 'Female');
    console.log(this.playerService.Player.gender);
  }
}
