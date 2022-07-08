# NG Mat queue bar

Stack snackbars on top of one another. Display multiple snackbars at once.

This library is a forked copy of [NgxQueueBar](https://github.com/ANovokmet/NgxQueueBar) with updated dependencies and added support for snackbars opened from component

NgxQueueBar is basically a copy of [MatSnackBar](https://github.com/angular/components/tree/master/src/material/snack-bar), with some key methods changed. Because of this you can use it using the API identical to MatSnackBar one.

## Demo

Try out the [Demo](https://anovokmet.github.io/NgxQueueBar/)

## Usage

Install the package:

```
npm install ngx-mat-queue-bar --save
```

Import QueueBarModule:

```
import { QueueBarModule } from 'ngx-mat-queue-bar';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ...
        QueueBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Queue a snackbar:
```
constructor(private queueBarService: QueueBarService) {}

open(message: string, action: string) {
    this.queueBarService.open(message, action, {
        duration: 2000,
    });
}
```

Queue a snackbar from component:
```

export type NotificationData = { text: string; icon?: string; style?: 'warn' | 'error' };

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  constructor(@Inject(QUEUE_BAR_DATA) public data: NotificationData) {}
}

constructor(private queueBarService: QueueBarService) {}

open(message: string, action: string) {
    this.queueBarService.openFromComponent(NotificationComponent, {
        duration: 2000,
    });
}
```

## Note

You should really only use MatSnackBar because [Material specification](https://material.io/components/snackbars#behavior) discourages stacking snackbars or displaying them consecutively side by side.  

