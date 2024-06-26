import { Component } from '@angular/core';
import { WorkshopDetail } from '../interface/workshop';
import { LoadingService } from '../service/loading.service';
import { WorkshopService } from '../service/workshop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  commonImageUrl: string = 'assets/img/mock.png'
  workshopList: WorkshopDetail[] = [];

  constructor(
    private loadingService: LoadingService,
    private workshopService: WorkshopService
  ) {}

  ngOnInit(): void {
    this.loadingService.show();
    this.workshopService.getWorkshops().subscribe((res) => {
      this.workshopList = res.data;

      this.workshopList.forEach(workshop => {
        if (workshop.workshop_category === 'record') {
          workshop.workshop_date = 'คลิปย้อนหลัง';
          workshop.total_customers = `${workshop.sum_customers}`;
          workshop.lecturer_name = `วิทยากร - คุณ${ workshop.lecturer_name }`;
        } else {
          workshop.total_customers = `${workshop.sum_customers} / ${workshop.max_customers}`;
          workshop.lecturer_name = `วิทยากร - คุณ${ workshop.lecturer_name }`;
        }
      });

      this.loadingService.hide();
    });
  }

  redirectToForm() {
    window.open('https://forms.gle/ZThJTzwtPCV9qSbc7', '_blank');
  }
}
