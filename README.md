# CPSC6175 Assignment Three - State

## Instructions
Watch the videos on React state and the store using Zustand. Using your existing Nasa + Spring API change the state storage for the API to use the react store to set the data from the API responses to state. If you only have one page on your application add a second page, using react router, to be able to see the information being stored in state and the application making only one api call instead of one at every page redirect.

Spring + react application that starts with just the grade start command. Webpack build should be configured for this as we did in class (Do not use create react app, if you did use this then you need to revert and move your code over to another app for this)

Your application should make use of Zustand, state, and the store to maintain your API information so it is available throughout the app. API calls should be made from the store.

## Notes
* Zustand implemented to manage state. API calls made from store functions which rely on a general caller function
* /current has no user control and will always refresh to the current image
* Other pages will initially continue to show the current set of images until the user chooses an option and submits
* Migrated from Maven to Gradle per Assn3 requirements
* Fixed from Assn2 - user attempting to navigate directly to /current, /random, /date-single, /date-range will now correctly be redirected to the app
* Fixed from Assn2 - webpack build incorporated into bootRun configuration via a defined task "webpackBuild"
* API key is set in application.properties if necessary, otherwise using DEMO_KEY
