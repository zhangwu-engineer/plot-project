import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from '@iplab/ngx-file-upload';
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
    NgbModule,
    FileUploadModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ScenariosComponent,
  ],
})
export class ScenariosModule {}
