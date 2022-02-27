
![image](https://user-images.githubusercontent.com/4914242/155867181-a748e51d-be6f-4ff1-bdec-a1dc19082b22.png)


# nab-automation-api
## Part 1.Test Design and Bug Challenge
Document in folder https://github.com/crocodile1992/nab-automation-api/blob/main/part1/ includes
- "Test Design and Bug Challenge.docx"
- "NAB_TP_V1.0_190222.xlsx"
- "NAB_TC_V1.0_190222.xlsx" 

## Part2. API Automation
Write API automated tests for the feature"search weather in your city" API.
API: api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
API Spec can be found here: Current weather data - OpenWeatherMa
### 1. Analysis Requirement and Solution
Follow requirement. We have requirements for automation such as:
![image](https://user-images.githubusercontent.com/4914242/155867428-2c44e092-cdda-450e-ab50-0904a658915a.png)

### 1.1. Solution Short term
For the target short term, I created tests in POSTMAN to save time, effort and meet deadlines. With steps:
 1. Create test cases for api
 ![Testcase for api](https://user-images.githubusercontent.com/4914242/155867693-c563e4b3-cfb2-4424-9802-d43003e63b3b.png)

 2. Create test data
 ![Create data test for](https://user-images.githubusercontent.com/4914242/155867721-4505e3b0-4a97-4b8c-95c8-df0b0eb90348.png)

 3. Create Request in POSTMAN and write test script verify response code, message, content in response body
  ![Create request for api](https://user-images.githubusercontent.com/4914242/155868854-42f86869-1a37-4249-b785-b43cb1fa3c6f.png)

  ![Write test scripts for api testcases](https://user-images.githubusercontent.com/4914242/155867751-1e00cedb-11c8-4737-a564-fb9f57748c6d.png)

 4.Create Runner, Import file data test and Run test
 ![Run testcases in POSTMAN](https://user-images.githubusercontent.com/4914242/155867819-962c5f35-23e1-4e21-87ee-edac140951f5.png)
 
 5.Check Report
 
 ![Summary Report](https://user-images.githubusercontent.com/4914242/155867849-c97ce754-2227-4a6c-b2b6-aad2345dfef7.png)

### 1.2. Solution long term
For the target long term
- Easy and cost-effective maintenance.
- Develop on multi platform

I build framework automation using:
- Language programming: java
- Framework test cucumber
- Library REST Assured
- Git hub: repository
- Maven: 
- Jenkins: 

Script feature, detail: https://github.com/crocodile1992/nab-automation-api/blob/main/src/test/java/features/SearchWeather.feature 
![image](https://user-images.githubusercontent.com/4914242/155869807-05245b05-359b-4433-9abf-08d60284f0a0.png)
Create job in Jenkin, config responsitory: read from github
![image](https://user-images.githubusercontent.com/4914242/155870078-d5967f52-8862-4a8f-812c-17cc6146f150.png)
Check result after job run
![image](https://user-images.githubusercontent.com/4914242/155869930-ba3ec03b-b4e2-4bd9-b6dc-747a91d1b36c.png)
Report test after job run successful
![image](https://user-images.githubusercontent.com/4914242/155869853-33b7540b-2a5a-4ecd-b3a3-2bd16c9c1548.png)
![image](https://user-images.githubusercontent.com/4914242/155869900-76e3d747-4cd6-49a9-8d9d-e7972f77fe5c.png)
Report Test has 2 test cases fail for when between city_name include space free, and expected system auto trim space free. This issue to business clean requirement.
We can set up a schedule run job periodically or Build after other projects are built...

## 2. Guidge run test in local
Precondition:
- Install jdk version 1.8
- Install maven
- Install git
Action:
- Create folder in local
- Open console git
 ![image](https://user-images.githubusercontent.com/4914242/155878530-8edd6e38-f8c7-424f-94b7-d92be67bda2b.png)
 ![image](https://user-images.githubusercontent.com/4914242/155878553-36c52fbc-f10c-46d5-82f1-37ec30dca531.png)
- Enter: git clone https://github.com/crocodile1992/nab-automation-api.git
 ![image](https://user-images.githubusercontent.com/4914242/155878680-5a103388-98c5-4b26-8509-a98cec8c95b1.png)
- Open cmd program, and cd to folder store code: 
 ![image](https://user-images.githubusercontent.com/4914242/155878759-e8bebc6d-bd60-44c6-ad1d-09e7c3f23de8.png)
- Run: mvn install
 ![image](https://user-images.githubusercontent.com/4914242/155878972-93a5909e-e236-4527-a690-11f56a60e100.png)
 ![image](https://user-images.githubusercontent.com/4914242/155878957-be6e6b69-4a04-4888-97fb-e67f4444e00c.png)
- After build success:
   +) Open file ../nab-automation-api/target/surefire-reports/index.html to check report summare
 ![image](https://user-images.githubusercontent.com/4914242/155879083-80fdfd1c-f62a-45d3-88f8-9f4fae04257d.png)
   +) Open file ../nab-automation-api/target/cucumber-reports/index.html to check report detail test suite, steps
 ![image](https://user-images.githubusercontent.com/4914242/155879158-1fd3d5b4-8b70-46f4-8c9b-ad194d2e81e2.png)
   
## 3. Guidge run test in Jenkins
Precondition:
- Install jdk version 1.8
- Install maven
- Install git
- Install jenkins
Action:
- Create Item in Jenkins 
![image](https://user-images.githubusercontent.com/4914242/155879632-39e7cb24-35a5-44b1-bf95-632f3560320c.png)
- Input link git into "Repository URL"
![image](https://user-images.githubusercontent.com/4914242/155879508-4020a35a-700a-4fd1-83f0-32158bfeeda8.png)
- Config schedule: Build periodically -  Build every hour at the beginning of the hour
![image](https://user-images.githubusercontent.com/4914242/155879706-ae9198c1-a0ff-4333-aba7-e4cec1098e00.png)
- Config Build -Execute Windows batch command
![image](https://user-images.githubusercontent.com/4914242/155879749-08730c13-ca2b-4f5c-94b4-0a397f5aca63.png)
- After job run, I can check status build.
- ![image](https://user-images.githubusercontent.com/4914242/155879836-794a9f58-4bbc-4358-97d6-05aaf7002a65.png)
- To check detail result every run test, we can go to the report folders in workspace
![image](https://user-images.githubusercontent.com/4914242/155879909-d2e9b4e9-eb2c-47f4-8111-31b3b5d9b898.png)
- We still can config send mail report after job run success
![image](https://user-images.githubusercontent.com/4914242/155880023-b7da3ead-adbb-4ac1-b5ae-c29cecbc18fc.png)

### THANK YOU FOR READING!
***************END ************





