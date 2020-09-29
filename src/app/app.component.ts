import { Component } from '@angular/core';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-angular-demo';

  constructor(private _electronService: ElectronService){
    if(this._electronService.isElectronApp) {
      this.pingPong();
      this.numberDoubled();
    }
  }

  openModal(){
    console.log("Open a modal");
    this._electronService.ipcRenderer.send("openModal");
  }

  async pingPong(){
    let pong: string = await this._electronService.ipcRenderer.invoke('ping');
    console.log(pong);
  }

  async numberDoubled(){
    let result: string = await this._electronService.ipcRenderer.invoke('numberDoubled', 5);
    console.log(result)
  }
}
