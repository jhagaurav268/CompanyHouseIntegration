import getCompany from '@salesforce/apex/CompanyHouse.getCompany';
import { LightningElement  } from 'lwc';

export default class CompanyDetails extends LightningElement {
  
  companies = [];
  
  fetchCompaniesByName() {
    const company = this.template.querySelector(".company-input").value;
    
    getCompany({ company })
      .then((data) => {
        this.companies = JSON.parse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}