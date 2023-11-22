## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. Installed Redux Toolkit and React-Redux packages.
1. Added code to update the chosen Filter on  
   the FilterDropdown component and accordingly  
   the ProductList component using Redux.

### Changes in mind to be introduced in future commits:

1. Extract the API calls from the ProductList component,  
   and Add Async calls to dummyjson API using Redux-saga middleware(s).
1. The ProductList component should be rendered from the beginning when  
   the chosen filter value changes instead of staying at its place  
   in the scrollable view.
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.
