# Angular Material based Queue bars

Stack snackbars on top of one another. Display multiple snackbars at once.

This library is a forked copy of [NgxMatQueueBar](https://github.com/marcindz88/ngx-mat-queue-bar) with few small changes:
- overlay is now being disposed if queue of snackbars is empty
- added new `wrapperClass` setting in config to set a CSS class name for cdk-global-overlay-wrapper  
(it allows, for example, setting custom `z-index` for snackbar overlay to always display it on top of other overlays)

NgxMatQueueBar is an updated copy of [NgxQueueBar](https://github.com/ANovokmet/NgxQueueBar), which is basically a copy of [MatSnackBar](https://github.com/angular/components/tree/master/src/material/snack-bar), with some key methods changed. Because of this you can use it using the API identical to MatSnackBar one.

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

### Maximum number of snackbars config

The use of the queue with unlimited snackbars popping up is restricted to when there is small number of snackbars active
Hence I have added the ability to specify maximum amount of snackbars that can be active at a given moment.

Default max amount of visible snackbars is 4

You may change this setting using a provider of injection token QUEUE_BAR_CONFIG as follows:

```
const queueBarConfig: QueueBarConfig = { maxOpenedSnackbars: 20 };

...
providers: [
  {
    provide: QUEUE_BAR_CONFIG,
    useValue: queueBarConfig,
  }
]
```

It is important to note that this condition may be fulfilled only if the snackbars are timed that is have duration greater than 0.
Snackbars with duration equal to 0, can only be dismissed manually and hence if there are more than max untimed snackbars they will not be hidden.

## Note

You should really only use MatSnackBar because [Material specification](https://material.io/components/snackbars#behavior) discourages stacking snackbars or displaying them consecutively side by side.  

