import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from 'c/pubsub';
import getCompanyDetails from '@salesforce/apex/CompanyHouse.getCompanyDetails';

export default class CompanyInformation extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    
    @track viewMessage;
    @track error;

    storeAllInformation = [];
    storeAddress = [];
    branchCompanyDetails = [];

    connectedCallback(){
        registerListener("publisher", this.showDetails, this);
    }

    showDetails(data){
        this.viewMessage = data;
    }

    @wire(getCompanyDetails, {details : '$viewMessage'}) 
    storeCompanyInformation({ error, data }){
        if(data){
            this.storeAllInformation = JSON.parse(data);
            this.storeAddress = this.storeAllInformation.registered_office_address;
            this.branchCompanyDetails = this.storeAllInformation.branch_company_details;
            console.log(this.storeAddress);
        }else if(error){
            this.error = error;
            console.log(this.error)
        }
    }

}