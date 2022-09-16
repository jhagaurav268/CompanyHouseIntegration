import { api, LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Company extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    @api title;
    @api description;
    @api address;
    @api company_number;

    handleClick(){
        fireEvent(this.pageRef, "publisher", this.company_number);
    }
}