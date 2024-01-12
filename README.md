## Shop23:

A shopping app created using React native.  
It consumes a Product List REST API- [dummyjson](https://dummyjson.com/docs) and exhibits an interface  
with a filter dropdown menu.

### Changes introduced in this commit:

1. Used Three.js and compatible React Native packages to add  
   a functionality to offer the user the ability to rotate and zoom in,  
   zoom out a 3D product using their fingers. Just to showcase this,  
   I made use of the bottom tab 'Favourites' for now.

### Changes in mind to be introduced in future commits:

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

2. Then, the command line command to build the bundle would be

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

3. Then, delete the folders present in  
   'android\app\build\generated\res\createBundleReleaseJsAndAssets' from  
    '/android/app/src/main/res', otherwise the following step will fail with  
    'Duplicate resources' error at the last step of assembling the bundle into APK.  
    Note: The contents of this directory are created when you perform the  
    next step for the first time in the history of the project.

4. Then, to assemble the bundle into a release APK, we will run  
   the following command from 'android' directory:

```
gradlew -PRELEASE_STORE_PASSWORD=***** -PRELEASE_KEY_ALIAS=******** -P RELEASE_KEY_PASSWORD=******* assembleRelease
```

where you replace \*\*\*\* with relevant secret details without any quotes around them.
