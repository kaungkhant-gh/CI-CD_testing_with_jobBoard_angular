import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not_found',
  templateUrl: './not_found.component.html',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./not_found.component.css'],
})
export class Not_foundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
