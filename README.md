## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. Updated the package version to 0.0.3.
1. Made arrangements to make a GET API call with Product id  
   on clicking any of the Product cards.
1. Added Google Analytics to the app to record various actions performed by users.  
   This includes logging the selected product's category and id when a product card  
   is clicked using Google Analytics's 'logSelectedContent method.

### Changes in mind to be introduced in future commits:

1. Add Google Analytics to the app to record various actions performed by users.
1. The ProductList component should be rendered from the beginning when  
   the chosen filter value changes instead of staying at its place  
   in the scrollable view.
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.
