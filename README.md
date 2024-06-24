Title: Mobile application automation using BDD cucumber test framework.

Demo video drive link : https://drive.google.com/drive/folders/1kk_IMBw49KCqTd1V72Of8tgciXD2MrKd?usp=sharing

Pre-requisite:
  NodeJS v18.20.3 
  appium v2.5.4
  uiautomator2 v3.5.3
  Appium Inspector
  Android Device 

Packages:
  @wdio/allure-reporter   [test report generator]
  allure-commandline  [view test reports from command line ]
  chai [assertion library-Not mandatory]

Setup Instructions:
  Clone the repo
  Run npm install

  #Add below lines in wdio/config.js for allure reports.
  reporters: ['spec', [
           'allure', {
                outputDir: 'allure-results'
            }
    ]]

Run the test:
  #Run e2e all tests
  npm wdio

  #Run specific tests
  npx wdio --spec ./test/android/feature/applogin.feature

  **This will execute a scenario where it opens a application validates login UI elements and navigates to product screen where it validates 
  product text.

  #Report generation
  allure generate .\allure-results\   [execute this in vs-code terminal]
  allure open  [this will open HTML report in browser window]  


Issue's observed during setup / script run:
  1. appium server does'nt start automatically during test.
     Solution: comment out services array in wdio.config.js [from line 115 to line 125]
     now start appium server from command prompt using command "appium --allow-cors"

  2. Error: invalid session id: The session identified by 36ab778d-f4c5-4727-91c1-3c3172a07159 is not known.
     Solution : Un-install below apps from mobile device / simulators
     io.appium.uiautomator2.server
     io.appium.uiautomator2.server.test

  3. Error: driver is either terminatd or not started.
     Solution: To avoid this in webdriverio we have to add async , await for methods.
     or install npm sync globally , this should resolve issue.

  4. with uiautomator v3.5.3 : Feature file containing two scenario's [positive / negative ] while execution it is observed that
     when scenario 2 is invoked scripts fails as the driver session is deleted with script 1 execution and for second scenario
     execution driver is not availble so it throws error "No such Driver found"

     Note : Post some research found that it is issue with uiautomator v3.5.3 so to fix this will need to downgrade it to v2.0.0.
**********************************************************************************************************************************************************
     Hence in login.feature.steps.js file line 37 to 52 is commented out so that we can test positive scenario.


     
  
