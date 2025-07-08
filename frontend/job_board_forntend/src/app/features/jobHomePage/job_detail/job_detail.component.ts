import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job_detail',
  templateUrl: './job_detail.component.html',
  styleUrls: ['./job_detail.component.css'],
})
export class Job_detailComponent implements OnInit {
  job: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(id).subscribe((res: any) => {
      this.job = res.data;
    });
  }
}
