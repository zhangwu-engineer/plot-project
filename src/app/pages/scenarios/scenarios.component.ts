import { Component } from '@angular/core';
import { ScenarioObject, TopSelling, TableRows, Employee } from './scenarios-data';


@Component({
    selector: 'app-scenarios',
    templateUrl: 'scenarios.component.html'
})

export class ScenariosComponent {
  topScenarios: ScenarioObject[];

  constructor() { 
    this.topScenarios = TopSelling;
  }
}
