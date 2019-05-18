#### How to run the project ? ####

## Prerequisite:
1. Make sure the nodejs is installed
2. Install Protractor globally 
	* npm install -g protractor
3. Make sure to update the webdriver-manager
    * webdriver-manager update

## Run the project:
1. Start the webdriver-manager
	* webdriver-manager start
2. Make sure the server started running in local with port 4444 by default, see info http://localhost:4444/wd/hub
3. Clone the project repo into your local
	* git clone https://github.com/raj2989/isentia-test-project.git
4. Open a new terminal and change the current directory into the project directory
5. Run the test cases
	* protractor config.js --suite demo