import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-add',
  templateUrl: './job_add.component.html',
  styleUrls: ['./job_add.component.css'],
})
export class JobAddComponent {
  job = {
    title: '',
    company: '',
    location: '',
    salaryRange: 0, // ✅ number
    remote: false,
    description: '',
  };

  constructor(private jobService: JobService, private router: Router) {}

  addJob() {
    const payload = { data: this.job }; // ✅ Wrap payload in 'data'

    this.jobService.createJob(payload).subscribe({
      next: () => {
        this.router.navigate(['/jobs']);
      },
      error: (err) => {
        console.error('Error creating job:', err);
      },
    });
  }
}
