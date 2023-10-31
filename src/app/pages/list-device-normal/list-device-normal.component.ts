import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/classes/device/device';
import { DeviceService } from 'src/app/services/device/device.service';
import { UserserviceService } from 'src/app/services/user/userservice.service';

@Component({
  selector: 'app-list-device-normal',
  templateUrl: './list-device-normal.component.html',
  styleUrls: ['./list-device-normal.component.css']
})
export class ListDeviceNormalComponent implements OnInit {
  listOfDevice: Device[] | undefined;
  id!: number;
  token : String | undefined;
  device: Device= new Device;
  string: String="";
  constructor(private userService: UserserviceService,private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute){}
    ngOnInit(): void {
      this.token=this.route.snapshot.params['token'];
      this.id=this.route.snapshot.params['id'];
      this.getDevices();
    }
    private getDevices(){
      this.deviceService.getListOfDevices(this.id).subscribe(data =>
      {
        console.log(data)
        this.listOfDevice = data;
      });
    }
    logout()
  {
    this.router.navigate(['login']);
  }
}
