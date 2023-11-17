## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

In ShopScreen component:

1. Added Dropdown menu for filtering products based on their categories.
1. Added logic for the Filter dropdown to work.

### Changes in mind to be introduced in the near-future commits:

1. Add logic for sorting in ShopScreen component.
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.
1. Create the desired user interface.
