import { Component} from '@angular/core';
import {FilmeService} from '../services/filme/filme.service';
import{Film} from '../home/shared/models/filme';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filme: Film[];
  showFilmName = false;
  constructor(private filmeService: FilmeService) {
    this.filme= [];
  }
  

  ngOnInit(): void {
    this.filme = this.filmeService.getAll();
  }

 
}
