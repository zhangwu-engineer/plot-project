import { Component, OnInit } from '@angular/core';
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

  constructor(public scenarioService: ScenarioService) { 
    this.scenariosList = [];
    this.statusList = StatusList;
  }

  ngOnInit() {
    this.scenarioService.isLoading = true;
    this.scenarioService.getAll()
      .subscribe(res => {
        this.scenariosList = res.data;
        this.scenarioService.isLoading = false;
      });
}

}
