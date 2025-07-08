import { Router, RouterModule } from '@angular/router';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job_list',
  imports: [CommonModule, RouterModule],
  templateUrl: './job_list.component.html',
  styleUrls: ['./job_list.component.css'],
})
export class Job_listComponent implements OnInit {
  constructor(private JobService: JobService, private router: Router) {}
  jobs: any[] = [];
  ngOnInit() {
    this.JobService.getJobs().subscribe({
      next: (data) => {
        console.log(data);
        this.jobs = data.data;
      },
      error: (error) => {
        console.error('Error fetching jobs:', error);
      },
    });
  }
  goToDetail(id: number) {
    this.router.navigate(['/jobs', id]);
  }

  goToEdit(id: number) {
    this.router.navigate(['/jobs/edit', id]);
  }
  deleteJob(id: number) {
    this.JobService.deleteJob(id).subscribe({
      next: () => {
        this.jobs = this.jobs.filter((job) => job.id !== id);
      },
      error: (error) => {
        console.error('Error deleting job:', error);
      },
    });
  }
}
