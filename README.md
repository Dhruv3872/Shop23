## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. Added price and discount information to the ProductCard component.
1. Added 'react-native-element-dropdown' package for adding  
   dropdown menu for sort and filter functionalities.

### Changes in mind to be introduced in the near-future commits:

1. Add logic for sorting in ShopScreen component.
1. Add Dropdown menu for filtering products.
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.
1. Create the desired user interface.
