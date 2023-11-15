## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. The ProductCard component's two simultaneously scrollable columns  
   have been put in the ProductList using numColumns prop of the FlatList.
1. Showed image of the product in its ProductCard using [FastImage](https://www.npmjs.com/package/react-native-fast-image).

### Changes in mind to be introduced in the near-future commits:

1. Include relevant details of the product in the ProductCard.
1. Create the desired user interface.
