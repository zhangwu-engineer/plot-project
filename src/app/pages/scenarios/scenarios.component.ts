import { Component } from '@angular/core';
import { ScenarioObject, StatusCollection, TopScenarios, StatusList } from './scenarios-data';
@Component({
    selector: 'app-scenarios',
    templateUrl: 'scenarios.component.html'
})

export class ScenariosComponent {
  topScenarios: ScenarioObject[];
  statusList: StatusCollection;

  constructor() { 
    this.topScenarios = TopScenarios;
    this.statusList = StatusList;
  }
}
