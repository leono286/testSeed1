import { IItem } from './item/item.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: IItem[] = [
    {
      'id': 1,
      'firstName': 'Augustin',
      'lastName': 'McDuffy',
      'email': 'amcduffy0@china.com.cn',
      'gender': 'Male',
      'isValid': false,
      'birthday': '2017-02-03 02:41:13'
    },
    {
      'id': 2,
      'firstName': 'Adan',
      'lastName': 'Gaze',
      'email': 'agaze1@bluehost.com',
      'gender': 'Male',
      'isValid': true,
      'birthday': '2017-06-25 22:01:11'
    },
    {
      'id': 3,
      'firstName': 'Mitch',
      'lastName': 'Pursey',
      'email': 'mpursey2@xrea.com',
      'gender': 'Male',
      'isValid': true,
      'birthday': '2017-02-12 00:39:17'
    },
    {
      'id': 4,
      'firstName': 'Finlay',
      'lastName': 'O\'Kenny',
      'email': 'fokenny3@blog.com',
      'gender': 'Male',
      'isValid': false,
      'birthday': '2017-07-08 02:17:56'
    },
    {
      'id': 5,
      'firstName': 'Adriena',
      'lastName': 'Kenen',
      'email': 'akenen4@dedecms.com',
      'gender': 'Female',
      'isValid': true,
      'birthday': '2017-07-03 18:41:14'
    },
    {
      'id': 6,
      'firstName': 'Aurelia',
      'lastName': 'Keenor',
      'email': 'akeenor5@tripadvisor.com',
      'gender': 'Female',
      'isValid': true,
      'birthday': '2017-11-26 23:21:10'
    },
    {
      'id': 7,
      'firstName': 'Antonio',
      'lastName': 'Kinahan',
      'email': 'akinahan6@java.com',
      'gender': 'Male',
      'isValid': false,
      'birthday': '2017-07-15 01:32:18'
    },
    {
      'id': 8,
      'firstName': 'Alyssa',
      'lastName': 'Blackhall',
      'email': 'ablackhall7@chicagotribune.com',
      'gender': 'Female',
      'isValid': false,
      'birthday': '2017-03-10 07:32:28'
    },
    {
      'id': 9,
      'firstName': 'Ilario',
      'lastName': 'Ciardo',
      'email': 'iciardo8@clickbank.net',
      'gender': 'Male',
      'isValid': false,
      'birthday': '2017-07-12 20:42:55'
    },
    {
      'id': 10,
      'firstName': 'Daisey',
      'lastName': 'Paddle',
      'email': 'dpaddle9@goodreads.com',
      'gender': 'Female',
      'isValid': false,
      'birthday': '2017-04-05 20:31:08'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
