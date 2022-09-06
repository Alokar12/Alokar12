import { LightningElement,wire,track } from 'lwc';
import getContact from '@salesforce/apex/LoopDemo.getContact';

export default class Loopdemo extends LightningElement {
    @track data=[];

         @wire(getContact)
          Record;
} 