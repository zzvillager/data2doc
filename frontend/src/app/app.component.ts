import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  filesDz: File[] = [];


  canDrop(fileName:string):boolean {
    var fileType;
    fileType = fileName.slice(-3).toLowerCase();
    for (let i = 0; i < this.filesDz.length; i++){
      if (fileType===this.filesDz[i].name.slice(-3).toLowerCase())
        return false;
    }
    return true;
  }
  onSelectDz(event) {
    for (let i = 0; i < event.addedFiles.length; i++) {
      if (this.canDrop(event.addedFiles[i].name)===true){
        alert( event.addedFiles[i].name );
        this.filesDz.push(event.addedFiles[i]);
      }
    }
  }  
  onMenuClick(){
    alert("123");
    }
  
  onRemoveDz(event) {
    this.filesDz.splice(this.filesDz.indexOf(event), 1);
  }
  
}
