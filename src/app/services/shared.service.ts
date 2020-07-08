import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private notifyService: NzMessageService
  ) { }

  notify(type: string, message: string): void {
    this.notifyService.create(type, message);
  }

}
