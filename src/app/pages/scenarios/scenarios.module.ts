import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { ScenariosComponent } from "./scenarios.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Scenarios",
      urls: [{ title: "Scenarios", url: "/scenarios" }, { title: "Scenarios" }],
    },
    component: ScenariosComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ScenariosComponent,
  ],
})
export class ScenariosModule {}
