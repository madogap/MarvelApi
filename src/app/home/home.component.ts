import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { MarvelEvent } from '../contracts/marvel-event.contract';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public firstEvent?: MarvelEvent;
  public events: MarvelEvent[] = [];
  public thumbnail?: MarvelEvent[]
  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.marvelService.getEvents().subscribe(
      (data: MarvelEvent[]) => {
        this.firstEvent = data.shift();
        this.events = data;
      }
    );
  }

  public getImage (thumbnail?: { path?: string; extension?: string; }) {
    if (!thumbnail) return;

    return thumbnail.path + '.' + thumbnail.extension;
  }
}
