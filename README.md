
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
For target short term, I created tests in POSTMAN to save time, effor,t and meet deadlines. With steps:
 1. Create testcase for api
 ![Testcase for api](https://user-images.githubusercontent.com/4914242/155867693-c563e4b3-cfb2-4424-9802-d43003e63b3b.png)

 2. Create data test
 ![Create data test for](https://user-images.githubusercontent.com/4914242/155867721-4505e3b0-4a97-4b8c-95c8-df0b0eb90348.png)

 3. Create Request in POSTMAN and write script test verify response
  ![Create request for api](https://user-images.githubusercontent.com/4914242/155868854-42f86869-1a37-4249-b785-b43cb1fa3c6f.png)

  ![Write test scripts for api testcases](https://user-images.githubusercontent.com/4914242/155867751-1e00cedb-11c8-4737-a564-fb9f57748c6d.png)

 4.Create Runner, Import file data test, Run test
 ![Run testcases in POSTMAN](https://user-images.githubusercontent.com/4914242/155867819-962c5f35-23e1-4e21-87ee-edac140951f5.png)
 
 5.Check Report
 
 ![Summary Report](https://user-images.githubusercontent.com/4914242/155867849-c97ce754-2227-4a6c-b2b6-aad2345dfef7.png)

### 1.2. Solution long term
For target long term
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

Report Test have 2 testcases fail for when between city_name include space free, and expected system auto trim space free. This issue to business clean requirement.

We can set up schedule run job periodically or Build after other projects are built...

