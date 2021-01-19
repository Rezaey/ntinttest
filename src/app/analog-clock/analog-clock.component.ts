import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { ClockSevice } from "../services/clock.service";

@Component({
  selector: "app-analog-clock",
  templateUrl: "./analog-clock.component.html",
  styleUrls: ["./analog-clock.component.scss"],
})
export class AnalogClockComponent implements OnInit, AfterViewInit {
  day: Date = new Date();

  deg = 6;
  hh = 0;
  mm = 0;
  ss = 0;

  constructor(private renderer: Renderer2, clkService: ClockSevice) {}

  @ViewChild("hr", { static: false })
  hr: ElementRef;
  @ViewChild("mn", { static: false })
  mn: ElementRef;
  @ViewChild("sc", { static: false })
  sc: ElementRef;

  ngOnInit() {
    this.setTime();
  }

  ngAfterViewInit() {
    this.clockHandeler();
  }

  setTime() {
    this.hh = this.day.getHours() * 30;
    this.mm = this.day.getMinutes() * this.deg;
    this.ss = this.day.getSeconds() * this.deg;
  }

  clockHandeler() {
    this.renderer.setStyle(
      this.hr.nativeElement,
      "transform",
      `rotateZ(${this.hh + this.mm / 12}deg)`
    );
    this.renderer.setStyle(
      this.mn.nativeElement,
      "transform",
      `rotateZ(${this.mm}deg)`
    );
    this.renderer.setStyle(
      this.sc.nativeElement,
      "transform",
      `rotateZ(${this.ss}deg)`
    );
  }

  addOneMin() {
    this.day.setMinutes(this.day.getMinutes() + 1);
    this.setTime();
  }

  addOneSec() {
    this.day.setSeconds(this.day.getSeconds() + 1);
    this.setTime();
  }

  reduceOneMin() {
    this.day.setMinutes(this.day.getMinutes() - 1);
    this.setTime();
  }
}
