import { ErrorHandler, Inject, NgZone } from "@angular/core";
import { ToastyService } from "../../node_modules/ng2-toasty";

export class AppErrorHandler implements ErrorHandler {
  constructor(
    @Inject(NgZone) private ngZone: NgZone,
    @Inject(ToastyService) private toastyService: ToastyService
  ) {}

  handleError(error: any): void {
    this.ngZone.run(() => {
      this.toastyService.error({
        title: "Error",
        msg: "An unexpected error happen.",
        theme: "bootstrap",
        showClose: true,
        timeout: 5000
      });
    });
  }
}
