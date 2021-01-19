import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { interval } from "rxjs";
import { AnalogClockComponent } from "./analog-clock/analog-clock.component";
import { DigitalClockComponent } from "./digital-clock/digital-clock.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "clockApp";

  @ViewChild(AnalogClockComponent, { static: false })
  analog: AnalogClockComponent;

  @ViewChild(DigitalClockComponent, { static: false })
  digital: DigitalClockComponent;

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.analog.addOneSec();
      this.analog.clockHandeler();
      this.digital.addOneSec();
      this.digital.setTime();
    });
  }

  incrementTime() {
    this.analog.addOneMin();
    this.digital.addOneMin();
  }

  decrementTime() {
    this.analog.reduceOneMin();
    this.digital.reduceOneMin();
  }
}
