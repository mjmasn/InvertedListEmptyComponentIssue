# Repro for react-native \#21196 'ListEmptyComponent is rendered upside down, when using inverted flag'

https://github.com/facebook/react-native/issues/21196

Repro steps:

1. Clone repo
2. Run yarn
3. Run yarn start
4. Run react-native run-android
5. Press button 1 to toggle between flat/section list
6. Press button 2 to toggle inverted on/off
7. In inverted mode, press button 3 to enable/disable the fix (`transform: [{scaleY: -1}]` on the `<View />` returned by `ListEmptyComponent`)
8. See that for inverted lists without the fix, the list empty component is rendered upside down
