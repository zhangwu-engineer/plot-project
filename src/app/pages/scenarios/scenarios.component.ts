import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult = '';

  constructor(public scenarioService: ScenarioService, private modalService: NgbModal) { 
    this.scenariosList = [];
    this.statusList = StatusList;
  }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.collectionSize = 0;
    this.getScenariosList();
  }

  getScenariosList() {
    this.scenarioService.isLoading = true;
    this.scenarioService.getAll(this.page, this.pageSize)
      .subscribe(res => {
        this.scenariosList = res.data;
        this.scenarioService.isLoading = false;
        this.collectionSize = res.totalPages * 10;
      });
  }

  onChangePage(pageNumber: number) {
    this.page = pageNumber;
    this.getScenariosList();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
