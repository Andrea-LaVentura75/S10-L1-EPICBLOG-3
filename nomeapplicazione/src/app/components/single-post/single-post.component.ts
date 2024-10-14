import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ipost } from '../../interfaces/ipost';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  @Input() post!: Ipost;
  @Output() onUpdateRequest = new EventEmitter<Ipost>();

  update() {
    if (this.post) {
      this.onUpdateRequest.emit(this.post);
    }
  }
}
