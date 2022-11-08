import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-picture',
  templateUrl: './modal-picture.component.html',
  styleUrls: ['./modal-picture.component.scss']
})
export class ModalPictureComponent implements OnInit {

  @Input() pictureLink!: string;
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
