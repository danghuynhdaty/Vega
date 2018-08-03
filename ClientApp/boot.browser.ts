import "reflect-metadata";
import "zone.js";
import "bootstrap";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.browser.module";

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    // before restarting the app, we create a new root element and dispose the old one
    const oldRootElem: any = document.querySelector("app");
    const newRootElem: any = document.createElement("app");
    oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
    modulePromise.then((appModule: any) => appModule.destroy());
  });
} else {
  enableProdMode();
}

// note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
const modulePromise: any = platformBrowserDynamic().bootstrapModule(AppModule);
