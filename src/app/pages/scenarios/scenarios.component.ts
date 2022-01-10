import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { StatusCollection, StatusList } from './scenarios.config';
import { ScenarioService } from '../../services/scenario.service';
import { Scenario } from '../../services/models/scenario';
@Component({
  selector: 'app-scenarios',
  templateUrl: 'scenarios.component.html'
})

export class ScenariosComponent implements OnInit  {
  scenariosList: Scenario[];
  statusList: StatusCollection;
  page: number;
  pageSize: number;
  collectionSize: number;
  closeResult: string;
  scenarioName: string;
  newComment: any;
  model: NgbDateStruct;

  public uploadedFiles: Array<File> = [];

  constructor(public scenarioService: ScenarioService, private modalService: NgbModal) { 
    this.scenariosList = [];
    this.statusList = StatusList;
  }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.collectionSize = 0;
    this.scenarioName = '';
    this.closeResult = '';
    this.getScenariosList();
  }

  getScenariosList() {
    this.scenarioService.isLoading = true;
    this.scenarioService.getAll(this.page, this.pageSize)
      .subscribe(
        res => {
          this.scenariosList = res.data;
          this.scenarioService.isLoading = false;
          this.collectionSize = res.totalPages * 10;
        },
        error => {
          this.scenarioService.isLoading = false;
          this.scenariosList = [];
          console.log('The server connection has been failed!');
        }
      );
  }

  onSubmitNewScenario() {
    this.scenarioService.isLoading = true;
    let formData = new FormData();
    formData.append('file', this.uploadedFiles[0]);
    formData.append("document", JSON.stringify({
      name: this.scenarioName,
      comment: this.newComment,
      date: this.model && `${this.model.year}-${this.model.month}-${this.model.day}`,
    }));
    this.scenarioService.addNew(formData)
      .subscribe(
        res => {
          console.log(res);
          this.scenarioService.isLoading = false;
          this.modalService.dismissAll();
        },
        error => {
          this.scenarioService.isLoading = false;
          console.log('The request has been failed!');
        },
      );
  }

  onChangePage(pageNumber: number) {
    this.page = pageNumber;
    this.getScenariosList();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}
