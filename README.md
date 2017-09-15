# _Doctor Lookup_

#### _A web app that returns a list of doctors based of some search criteria, Sept 15, 2017_

#### By _**Charlie Kelson**_

## Description

_This web app will take user entered data such as affliction or name and return a list of doctors in the Seattle Area that fit the search query._


### User Story

| App Behavior |
|----|
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.|
| If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).|
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)|



## Setup/Installation Requirements

* _Clone repo and install npm and bower from terminal `install npm` & `install bower`_
* _Build by entering `gulp build` in terminal_

* _Get an API key from `https://developer.betterdoctor.com/` and place in in an .env file in root_


## Known Bugs

_No known Bugs_



## Technologies Used

* _Javascript ES6_
* _Npm, Gulp, Bower_
* _BetterDoctor API_

### License

MIT License

Copyright (c) 2017 **_Charlie Kelson_**
