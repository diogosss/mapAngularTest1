import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Monitoreo } from '../../models/monitoreo.model';
import { MonitoreoSService } from '../../services/monitoreo.service';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {

  @Input() monitoreo?: Monitoreo;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentMonitoreo: Monitoreo = {
    sensor1: '',
    sensor2: '',
    sensor3: '',
    sensor4: '',
    sensor5: '',
    statusAlarm: '',
    nombre: '',
    direccion: '',
    latitud: '',
    longitud: '',
    user:'',
    pass:'',
  };

  message = '';

  constructor(private monitoreoService: MonitoreoSService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentMonitoreo = { ...this.monitoreo };
  }



  updateTutorial(): void {
    const data = {
      nombre: this.currentMonitoreo.nombre,
      direccion: this.currentMonitoreo.direccion,
      latitud: this.currentMonitoreo.latitud,
      longitud: this.currentMonitoreo.longitud,
      user: this.currentMonitoreo.user,
      pass: this.currentMonitoreo.pass
    };

    if (this.currentMonitoreo.key) {
      this.monitoreoService.update(this.currentMonitoreo.key, data)
        .then(() => this.message = 'The node was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentMonitoreo.key) {
      this.monitoreoService.delete(this.currentMonitoreo.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The node was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
