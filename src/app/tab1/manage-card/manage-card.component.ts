import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manage-card',
  standalone : false,
  templateUrl: './manage-card.component.html',
  styleUrls: ['./manage-card.component.scss'],
})
export class ManageCardComponent  implements OnInit {

  constructor() { }

  public transactionDetail = [
    {transactionName :'Transaction 1', value:'$10,000' , isEmiEnable: false},
    {transactionName :'Transaction 2', value:'$11,000' , isEmiEnable: false},
    {transactionName :'Transaction 3', value:'$12,000' , isEmiEnable: false},
    {transactionName :'Transaction 4', value:'$13,000' , isEmiEnable: false},
    {transactionName :'Transaction 5', value:'$14,000' , isEmiEnable: false}

  ];
  public cardStatus:boolean = true;
  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        this.cardStatus = !this.cardStatus
      },
    },
    {
      text: 'Yes',
      role: 'confirm',
      handler: () => {
        
      },
    },
  ];
  public showConvertToEmiButton:boolean = false;
  ngOnInit() {}

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  public showHideConverToEmiButton(){
    for(let i=0;i<this.transactionDetail.length;i++){
      if(this.transactionDetail[i].isEmiEnable){
        this.showConvertToEmiButton = true;
        break;
      }
      this.showConvertToEmiButton = false;
    }
  }
}
