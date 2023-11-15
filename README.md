## Shop23:

A shopping app created using React native.  
It will consume a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. ShopScreen component's ProductList component's View's onLayOut  
   now Performs a get query to fetch all products with limit set to 100.  
    This will fetch all the products enlisted in the API.
1. The title of these products are passed to their individual  
   instances of ProductCard component rendered via a FlatList under  
   the ProductList component.

### Changes in mind to be introduced in the near-future commits:

1. The ProductCard component's two simultaneously scrollable columns are  
   desired.
1. Include relevant details of the product in the ProductCard.
1. Show image of the product in its ProductCard using [FastImage](https://www.npmjs.com/package/react-native-fast-image).
1. Create the desired user interface.
