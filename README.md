### Requirements

- node ([minimum version](/.nvmrc))
- yarn
- java 8
- watchman
- Cocoapods
- Xcode for iOS
- Android Studio + API 30 ( with Google Play ) for Android

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

### Installation

After having installed all the required packages mentioned on `Requirements` section and done all the `Environment Configuration`

- Run `yarn` or `yarn install` to install the dependencies

#### iOS

For iOS preferably, use the XCode IDE for better project control ( dependencies, info.plist edit, Launch Images, etc.). Either use the IDE run action or execute `react-native run-ios` script from the Terminal

Example of steps, being on the root folder:

- Run `cd ios && pod install && cd ..`
- Run `yarn ios`
- Run `yarn start --reset-cache` # in case it's necessary

### Android

On initial launch for Android once the emulator is up and running either run the app from Android Studio or run the command below:

```
yarn android
```

### Debugging

In command line run `yarn react-native log-android` or `yarn react-native log-ios` depending on your platform to have live logging of the application actions.

### Troubleshoot
If app have some issues to init one option is to try clearing some cache data to check if it fixes after reinstallation. Example to clear cache `npx react-native-clean-project`
