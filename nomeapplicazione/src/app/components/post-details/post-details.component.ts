import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipost } from '../../interfaces/ipost';
import { IJSONresponse } from '../../interfaces/i-jsonresponse';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  post!: Ipost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);

      fetch('db.json')
        .then((res) => {
          if (res.ok) {
            return <Promise<IJSONresponse>>res.json();
          } else {
            throw new Error('la risposta del server non è ok');
          }
        })
        .then((dati) => {
          let found = dati.posts.find((p) => p.id == params['id']);

          if (found) {
            this.post = found;
            console.log(this.post);
          }
        })
        .catch((errore) => {
          console.log(errore);
        });
    });
  }
}
