import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  @Input()
  photoCover: string = '';

  @Input()
  id: string = "0";

  constructor(){}

  ngOnInit(): void {}

}
