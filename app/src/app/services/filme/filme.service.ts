import { Injectable } from '@angular/core';
import{Film} from '../../home/shared/models/filme';
@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor() { }

  getAll(): Film[] {
    return [
     {
      id:1,
      nume: 'Peaky Blinders',
      gen: 'Drama Actiune',
      imageUrl: '/assets/imagini/filme/kikiblinders.jpg'
     },
     {
      id:2,
      nume: 'Eroi de sacrificiu 1',
      gen: 'Actiune',
      imageUrl: '/assets/imagini/filme/eroisacrif.jpg'
     },

     {
      id:3,
      nume: 'WrongTurn 1',
      gen: 'Horror',
      imageUrl: '/assets/imagini/filme/wrongturn.jpg'
     },
      
     {
      id:4,
      nume: 'The Last Kingdom',
      gen: 'Actiune',
      imageUrl: '/assets/imagini/filme/lastkingdom.jpg'
     },
      
     {
      id:5,
      nume: 'Transformers 1',
      gen: 'Actiune SF',
      imageUrl: '/assets/imagini/filme/transformers1.jpg'
     },

     {
      id:6,
      nume: 'Harry Potter 1',
      gen: 'Actiune',
      imageUrl: '/assets/imagini/filme/harypoter.jpg'
     },

     {
      id:7,
      nume: 'Spider-Man',
      gen: 'Actiune',
      imageUrl: 'assets/imagini/filme/spiderman.jpg'
     }



    ];
  }
}

