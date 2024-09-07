import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  public Player: Player = {
    gender: 'Default',
    race: 'Default',
    class: '',
    alignment: '',
  };

  constructor() {}

  setPlayer(key: keyof Player, value: string) {
    this.Player[key] = value;
  }

  getPlayer(key: keyof Player, value: string) {
    this.Player[key] = value;
  }
}
