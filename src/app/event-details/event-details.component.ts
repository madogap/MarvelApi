import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { MarvelEvent } from '../contracts/marvel-event.contract';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  public eventDetail?: MarvelEvent;

  constructor(private marvelService: MarvelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param: Data) => {
        debugger;
        this.marvelService.getEvent(parseInt(param['id'] || 0)).subscribe(
          data => this.eventDetail = data
        );
      }

    });
    

  }
}
