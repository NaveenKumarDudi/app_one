import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private notifyService: NzMessageService,
    private notificationService: NzNotificationService
  ) { }

  notify(type: string, message: string): void {
    this.notifyService.create(type, message);
  }

  message(type: string, title: string, message: string) {
    this.notificationService.create(
      type,
      title,
      message
    );
  }

}
