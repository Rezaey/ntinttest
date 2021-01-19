import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { ClockSevice } from "../services/clock.service";

@Component({
  selector: "app-digital-clock",
  templateUrl: "./digital-clock.component.html",
  styleUrls: ["./digital-clock.component.scss"],
})
export class DigitalClockComponent implements OnInit {
  hour = "00";
  min = "00";
  day: Date = new Date();

  @ViewChild("colon", { static: false })
  colon: ElementRef;

  constructor(private renderer: Renderer2, private clkService: ClockSevice) {}

  ngOnInit() {
    this.day = this.clkService.getTime();
    this.setTime();
  }

  setTime() {
    this.hour = this.day.getHours().toString();
    this.min = this.day.getMinutes().toString();
  }

  addOneMin() {
    this.day.setMinutes(this.day.getMinutes() + 1);
    this.setTime();
  }

  addOneSec() {
    this.day.setSeconds(this.day.getSeconds() + 1);
    this.renderer.setStyle(this.colon.nativeElement, "opacity", "0");
    setTimeout(() => {
      this.renderer.setStyle(this.colon.nativeElement, "opacity", "1");
    }, 500);
    this.setTime();
  }

  reduceOneMin() {
    this.day.setMinutes(this.day.getMinutes() - 1);
    this.setTime();
  }
}
