import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import Colors from "../../shared/enums/colors.enum";

/* enum ButtonColor {
  DEFAULT = "default",
  PROCESS = "process",
  APPROVE = "approve",
  RETURN = "return",
  REJECT = "reject",
} */

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  /**
   * Button text
   *
   * @required
   */
  @Input()
  label = "Button";
  /**
   * Button color
   *
   * @required
   */
  @Input()
  color: "primary" | "accent" | "warn" = "primary";

  /**
   * Button style
   *
   * @required
   */
  @Input()
  type: "basic" | "raised" | "stroked" | "flat" | "fab" | "icon" | "mini-fab" =
    "basic";

  @Output()
  clicked = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}
}
