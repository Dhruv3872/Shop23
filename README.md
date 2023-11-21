## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and will exhibit an interface  
similar to a shopping app i.e. filter, sort etc.  
And then we will go from there.

### Changes introduced in this commit:

1. In ShopScreen component:
   1. Removed the code for Sort dropdown UI component as  
      the API we are usiing does not provide sorting feature.
1. Added bottom margin to ProductList component to enable  
   showing last product(s) in the list properly.
1. Installed Redux-saga package for enabling handling of  
   API calls through that redux middleware, though that is  
   just the middleware. We will need to install Redux, too.  
   Over to next commit.

### Changes in mind to be introduced in future commits:

1. Add Redux in this app with Redux-saga middleware(s).
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.
