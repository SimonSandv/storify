import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonComponent } from "./button.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
