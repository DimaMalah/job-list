import { Component, OnInit, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { HowLongService } from 'src/app/services/how-long.service'
import { JobItemService } from 'src/app/services/job-item.service'
import { ModalService } from 'src/app/services/modal.service'
import { PriceCustomizeService } from 'src/app/services/price-customize.service'
import { data } from '../../data'



@Component({
  selector: 'app-job-item-mobile',
  templateUrl: './job-item-mobile.component.html',
  styleUrls: ['./job-item-mobile.component.scss']
})
export class JobItemMobileComponent implements OnInit {

  itemId: any
  job: any
  @Output() link!: string
  isMobile = false


  ifIsMobile = ()=> {
    document.documentElement.clientWidth < 800
        ? this.isMobile = true
        : this.isMobile = false
  }


  onPictureClick = (e:any) => {
    this.modalService.open()
    this.link = e.target.currentSrc
  }

  onApplyClick = (id:string) => {
    this.jobItemService.onApplyClicked(id) //---- for doing some apply logic ------
    this.router.navigate(['job-list/', id, 'apply'])
  }

  onSaveClick = (id:string) => {
    this.jobItemService.onSaveClicked(id) //----- for doing some save logic -------
    this.router.navigate(['job-list/', id, 'save'])
  }

  onShareClick = (id:string) => {
    this.jobItemService.onShareClicked(id) //------ for doing some share logic -------
    this.router.navigate(['job-list/', id, 'share'])
  }


  constructor(private route: ActivatedRoute,
              private router: Router,
              private jobItemService: JobItemService,
              public correctPrice: PriceCustomizeService,
              public howLong: HowLongService,
              public modalService: ModalService) { }



  ngOnInit(): void {
    this.ifIsMobile()
    this.itemId = this.route.snapshot.paramMap.get('id')
    this.job = data.find(item => item.id === this.itemId)
  }

}
