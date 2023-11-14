import { Component, OnInit } from '@angular/core';
import { GiantBombService } from '../../services/giant-bomb.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  gameId!: string; // Define a property to store the game ID
  gameDetails: any; // Define a property to store the game details

  constructor(private giantBombService: GiantBombService) {}

  ngOnInit() {
    // Ensure you have a valid gameId before making the API request
    this.gameId = 'YOUR_GAME_ID'; // Replace 'YOUR_GAME_ID' with the actual game ID

    // Call the service method to fetch game details
    this.giantBombService.getGameDetails(this.gameId).subscribe((data) => {
      this.gameDetails = data;
    });
  }
}