import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Scenario } from './models/scenario';
import { API_BASE_URL } from './config/api';

interface ScenarioResponse {
  data: Scenario[],
  count: number,
  totalPages: number,
}

interface NewScenarioResponse {
  status: number,
  message: string,
}

@Injectable({ providedIn: 'root' })
export class ScenarioService {
  public isLoading: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  getAll(pageNumber: number, pageSize = 10) {
    return this.http.get<ScenarioResponse>(`${API_BASE_URL}/scenarios/?page=${pageNumber}&size=${pageSize}`);
  }

  addNew(request: FormData) {
    return this.http.post<NewScenarioResponse>(`${API_BASE_URL}/scenarios/`, request);
  }

}