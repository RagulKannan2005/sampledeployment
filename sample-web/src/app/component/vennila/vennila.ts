import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vennila',
  imports: [RouterLink, CommonModule],
  templateUrl: './vennila.html',
  styleUrl: './vennila.css',
})
export class Vennila {


  data=[
    {
      name:'Vennila Ice Cream',
      image:'assets/IceCream-Cones.webp',
      price:'$5.00',
      description:'Vennila Ice Cream is a classic frozen dessert made from a mixture of cream, sugar, and vanilla flavoring. It is known for its smooth and creamy texture, as well as its sweet and rich taste. Vennila Ice Cream can be enjoyed on its own or used as a base for various desserts, such as sundaes, milkshakes, and ice cream sandwiches.'
    },
    {
      name:'Vennila Ice Cream with Chocolate Chips',
      image:'assets/IceCream-With-Chocolate-Chips.webp',
      price:'$6.00',
      description:'Vennila Ice Cream with Chocolate Chips is a delightful twist on the classic vanilla ice cream, featuring rich chocolate chips scattered throughout for an extra burst of flavor in every bite.'
    },
    {
      name:'Vennila Ice Cream with Caramel Swirl',
      image:'assets/IceCream-With-Caramel-Swirl.webp',
      price:'$6.50',
      description:'Vennila Ice Cream with Caramel Swirl is a delectable frozen treat that combines the creamy goodness of vanilla ice cream with luscious ribbons of caramel sauce swirled throughout, creating a perfect balance of flavors.'
    },
    {
      name:'Vennila Ice Cream with Fresh Berries',
      image:'assets/IceCream-With-Fresh-Berries.webp',
      price:'$7.00',
      description:'Vennila Ice Cream with Fresh Berries is a refreshing and fruity dessert that pairs the smooth and creamy texture of vanilla ice cream with a medley of fresh, juicy berries, such as strawberries, blueberries, and raspberries.'
    }
  ]
}
