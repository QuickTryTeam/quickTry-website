import { Component } from '@angular/core';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isLoading$ = this.loadingService.isLoading$;

  constructor(
    private loadingService: LoadingService
  ) {}
}
