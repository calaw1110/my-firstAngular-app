import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-server',
    templateUrl: './server.component.html'
  }
)
export class ServerComponent {
  serverID: number = 1;
  serverStatus: string = '不在線上';
  getServerStatus() {
    return this.serverStatus;
  }
}
