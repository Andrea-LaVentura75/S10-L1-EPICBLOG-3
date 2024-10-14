import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../interfaces/ipost';
import { IJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Correzione: "styleUrls" al posto di "styleUrl"
})
export class HomeComponent implements OnInit {
  postCasuale: Ipost[] = [];
  arrayPost: Ipost[] = [];
  selectedPost: Ipost | null = null;

  ngOnInit() {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json() as Promise<IJSONresponse>;
        } else {
          throw new Error('La risposta del server non è ok');
        }
      })
      .then((dati) => {
        this.arrayPost = dati.posts;
        this.generaPostsCasuali();
      })
      .catch((errore) => {
        console.log(errore);
      });
  }

  generaPostsCasuali() {
    for (let i = 0; i <= 4; i++) {
      if (this.arrayPost.length > 0) {
        const numeroCasuale = Math.floor(Math.random() * this.arrayPost.length);
        this.postCasuale.push(this.arrayPost[numeroCasuale]);
      } else {
        console.warn("L'array dei post è vuoto!");
      }
    }
  }

  selectPostForEdit(post: Ipost) {
    this.selectedPost = { ...post };
  }

  updatePost(updatedPost: Ipost) {
    const index = this.arrayPost.findIndex((p) => p.id === updatedPost.id);
    if (index > -1) {
      this.arrayPost[index] = updatedPost;
    }
    this.selectedPost = null;
  }
}
