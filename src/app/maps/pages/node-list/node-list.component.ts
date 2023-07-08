import { Component, OnInit } from '@angular/core';
import { Monitoreo } from '../../models/monitoreo.model';
import { MonitoreoSService } from '../../services/monitoreo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements OnInit {

  monitoreoM?: Monitoreo[];
  currentMonitoreo?: Monitoreo;
  currentIndex = -1;
  title = '';

  constructor(private monitoreoService: MonitoreoSService) { }

  ngOnInit(): void {
    this.retrieveMonitoreos();
  }

  refreshList(): void {
    this.currentMonitoreo = undefined;
    this.currentIndex = -1;
    this.retrieveMonitoreos();
  }

  retrieveMonitoreos(): void {
    this.monitoreoService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.monitoreoM = data;
    });
  }

  setActiveMonitoreo(monitoreo: Monitoreo, index: number): void {
    this.currentMonitoreo = monitoreo;
    this.currentIndex = index;
  }

}
