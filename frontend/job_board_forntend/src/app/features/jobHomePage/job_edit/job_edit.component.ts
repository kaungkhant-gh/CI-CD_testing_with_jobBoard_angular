import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job_edit',
  templateUrl: './job_edit.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./job_edit.component.css'],
})
export class Job_editComponent implements OnInit {
  jobId!: number;
  job: any = {};

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit() {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(this.jobId).subscribe((res: any) => {
      const j = res.data.attributes;
      this.job = {
        title: j.title,
        company: j.company,
        location: j.location,
        salaryRange: j.salaryRange,
        remote: j.remote,
        description: j.description,
      };
    });
  }

  updateJob() {
    this.jobService.updateJob(this.jobId, this.job).subscribe(() => {
      this.router.navigate(['/jobs']);
    });
  }
}
