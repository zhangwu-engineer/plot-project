import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Scenario } from './models/scenario';
import { API_BASE_URL } from './config/api';

@Injectable({ providedIn: 'root' })
export class ScenarioService {
  public isLoading: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  getAll() {
    return this.http.get<{ data: Scenario[]}>(`${API_BASE_URL}/scenarios`);
  }

}