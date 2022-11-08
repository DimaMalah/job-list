import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobItemService } from 'src/app/services/job-item.service';
import { HowLongService } from 'src/app/services/how-long.service';
import { IJob } from '../../models/job'


@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.scss']
})
export class JobListPageComponent implements OnInit {

  isLoading = false
  jobs: IJob[] = []
  totalLength!:number
  page: number = 1
  isDesktop = document.documentElement.clientWidth > 650 ? true : false


  checkWindowWidth = () =>{
    setInterval(()=>{
      console.log(document.documentElement.clientWidth);
    },500)
  }



// ---------- custom functions for displaying rating, cause it is absent in API response------
//____it may cause some console errors_____________

  randomInteger = (min: number, max: number) =>{
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  ratingFunc = (min: number, max: number)=>{
    const array:number[] = []
    let rand = this.randomInteger(min,max)
    array.length = rand
    return array
  }
//____it may cause some console errors_____________
// ---------- custom functions for displaying rating, cause it is absent in API response------


  constructor(public howLongService: HowLongService,
              private router: Router,
              private jobItemService: JobItemService
              ) {}

  ngOnInit(): void {
    this.isLoading = true
    this.totalLength = this.jobs.length
    this.jobItemService.getList().subscribe(jobs => {
      this.jobs = jobs
      this.isLoading = false
    })
  }

  onSelect = (id: string) => {
    this.router.navigate(['PET_Job_list_ANGULAR/job-list/', id])
  }

}
