import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import Colors from "../../shared/colors.enum";

enum ButtonColor {
  DEFAULT = "default",
  PROCESS = "process",
  APPROVE = "approve",
  RETURN = "return",
  REJECT = "reject",
}

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = "Button";

  @Input()
  size: "small" | "medium" | "large" = "medium";

  @Input()
  backgroundColor: string = "#FFFFFF";

  @Output()
  clicked = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}
}
