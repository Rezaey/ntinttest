import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AnalogClockComponent } from "./analog-clock/analog-clock.component";
import { DigitalClockComponent } from "./digital-clock/digital-clock.component";
import { ClockSevice } from "./services/clock.service";

@NgModule({
  declarations: [AppComponent, AnalogClockComponent, DigitalClockComponent],
  imports: [BrowserModule],
  providers: [ClockSevice],
  bootstrap: [AppComponent],
})
export class AppModule {}
