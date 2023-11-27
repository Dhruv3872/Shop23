## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. Added 'ProductDetails' component to render a detailed view of the product  
   when a user clicks on any of the product cards.
1. Integrated newly created Firebase project 'Shop23' with this React Native project  
   using third-party package [react-native-firebase](https://rnfirebase.io/).

### Changes in mind to be introduced in future commits:

1. Add Google Analytics to the app to record various actions performed by users.
1. The ProductList component should be rendered from the beginning when  
   the chosen filter value changes instead of staying at its place  
   in the scrollable view.
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.
