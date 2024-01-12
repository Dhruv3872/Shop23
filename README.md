## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and exhibits an interface  
with a filter dropdown menu.

### Changes introduced in this commit:

1. Made some comments; removed some redundant commented code.

### Changes in mind to be introduced in future commits:

1. Show a 3D scrollable product.  
   You may temporarily use one of the bottom tabs.
1. The ProductList component should be rendered from the beginning  
   when the chosen filter value changes instead of staying at its place  
    in the scrollable view.
1. The ProductCard components rendered in the adjascent columns  
   are not rendered precisely side-by-side but are rather displaced.  
   Putting a border around the FastImage component shows it clearly.  
   We need to make the two adjascent components symmetric.

### Build instructions:

1. Referred to [this](https://instamobile.io/android-development/generate-react-native-release-build-android/) article with the following changes:  
   At the time of this commit, daemon had an open issue causing  
   the return of null when using `System.console()` in build.gradle file.  
   Hence, we used the following code:

```
release{
   storeFile file('oneKeyStore.keystore')
   storePassword RELEASE_STORE_PASSWORD
   keyAlias RELEASE_KEY_ALIAS
   keyPassword RELEASE_KEY_PASSWORD
}
```

where 'oneKeyStore' is the name of our keystore file.  
 This is done to avoid committing keystore password and other details
to the VCS.

1. Then, the command line command to build the bundle would be

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

1. Then, to assemble the bundle into a release APK, we will run  
   the following command from 'android' directory:

```
gradlew -PRELEASE_STORE_PASSWORD=***** -PRELEASE_KEY_ALIAS=******** -P RELEASE_KEY_PASSWORD=******* assembleRelease
```

where you replace \*\*\*\* with relevant secret details.
