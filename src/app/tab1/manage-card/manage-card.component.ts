import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manage-card',
  standalone: false,
  templateUrl: './manage-card.component.html',
  styleUrls: ['./manage-card.component.scss'],
})
export class ManageCardComponent implements OnInit {

  constructor() { }

  public transactionDetail = [
    { transactionName: 'Transaction 1', value: '$10,000', isEmiEnable: false },
    { transactionName: 'Transaction 2', value: '$11,000', isEmiEnable: false },
    { transactionName: 'Transaction 3', value: '$12,000', isEmiEnable: false },
    { transactionName: 'Transaction 4', value: '$13,000', isEmiEnable: false },
    { transactionName: 'Transaction 5', value: '$14,000', isEmiEnable: false }

  ];

  public controlAndAlertsOption = [
    {
      name: "Location", value: 'location', controlAndAlertToggleOption: [
        { name: "United States of America", controlValue: true, alertValue: false },
        { name: "Asia", controlValue: false, alertValue: false },
        { name: "International", controlValue: false, alertValue: false },
      ]
    },
    {
      name: "Merchant Types", value: 'merchantTypes', controlAndAlertToggleOption: [
        { name: "Retail", controlValue: false, alertValue: false },
        { name: "E-Commerce", controlValue: false, alertValue: false },
        { name: "Wholeseller", controlValue: false, alertValue: false },
      ]
    },
    {
      name: "Transaction Types", value: 'transactionTypes', controlAndAlertToggleOption: [
        { name: "Enable Transaction Control", controlValue: false, alertValue: false },
        { name: "In Store", controlValue: false, alertValue: false },
        { name: "E-Commerce", controlValue: false, alertValue: false },
        { name: "ATM", controlValue: false, alertValue: false }
      ]
    },
    {
      name: "Spend Limits", value: 'spendLimits', controlAndAlertToggleOption: [
        { name: "Under $10,000", controlValue: false, alertValue: false },
        { name: "Under $25,000", controlValue: false, alertValue: false },
        { name: "Under $50,000", controlValue: false, alertValue: false },
        { name: "Under $100,000", controlValue: false, alertValue: false }
      ]
    }
  ]
  public cardStatus: boolean = true;
  public selectedAlertOption: string = "";
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
  public showConvertToEmiButton: boolean = false;
  public enableSaveButton:boolean = false;
  public originalCopyOfControlAndAlertsOption:any;
  ngOnInit() { 
    this.originalCopyOfControlAndAlertsOption = JSON.parse(JSON.stringify(this.controlAndAlertsOption))
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  public showHideConverToEmiButton() {
    for (let i = 0; i < this.transactionDetail.length; i++) {
      if (this.transactionDetail[i].isEmiEnable) {
        this.showConvertToEmiButton = true;
        break;
      }
      this.showConvertToEmiButton = false;
    }
  }

  public setAlerts(){
    if(this.selectedAlertOption == 'none' || this.selectedAlertOption == 'allTransaction'){
      this.controlAndAlertsOption.forEach((item)=>{
        item.controlAndAlertToggleOption.forEach((alertControl)=>{
          alertControl.alertValue = this.selectedAlertOption == 'none' ? false : true;
        })
      })
    }
    this.checkIfSaveButtonEnable();
  }

  public checkIfSaveButtonEnable(){
  this.enableSaveButton = JSON.stringify(this.originalCopyOfControlAndAlertsOption) === JSON.stringify(this.controlAndAlertsOption) ? false : true
  }
}
