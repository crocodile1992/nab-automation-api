
![image](https://user-images.githubusercontent.com/4914242/155867181-a748e51d-be6f-4ff1-bdec-a1dc19082b22.png)


# nab-automation-api
## 1. Requirement
Write API automated tests for the feature"search weather in your city" API.
API: api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
API Spec can be found here: Current weather data - OpenWeatherMa
## 2. Analysis Requirement and Solution
Follow requirement. We have requirements for automation such as:
![image](https://user-images.githubusercontent.com/4914242/155867428-2c44e092-cdda-450e-ab50-0904a658915a.png)

### 2.1. Solution Short term
For target short term, I created tests in POSTMAN to save time, effor,t and meet deadlines.
Result after 1d:
![Plan automation](https://user-images.githubusercontent.com/4914242/155867602-1e0a001b-87da-4b4a-9dec-3d760b7a846f.png)
Steps:
 1. Create testcase for api
 ![Testcase for api](https://user-images.githubusercontent.com/4914242/155867693-c563e4b3-cfb2-4424-9802-d43003e63b3b.png)

 2. Create data test
 ![Create data test for](https://user-images.githubusercontent.com/4914242/155867721-4505e3b0-4a97-4b8c-95c8-df0b0eb90348.png)

 3. Create Request in POSTMAN and write script test verify response
  ![Create request for api](https://user-images.githubusercontent.com/4914242/155867735-e5af71d4-a4c6-43e4-93b6-bd491f36475f.png)
  ![Write test scripts for api testcases](https://user-images.githubusercontent.com/4914242/155867751-1e00cedb-11c8-4737-a564-fb9f57748c6d.png)

 4.Create Runner, Import file data test, Run test
 ![Run testcases in POSTMAN](https://user-images.githubusercontent.com/4914242/155867819-962c5f35-23e1-4e21-87ee-edac140951f5.png)
 
 5.Check Report
 ![Summary Report](https://user-images.githubusercontent.com/4914242/155867849-c97ce754-2227-4a6c-b2b6-aad2345dfef7.png)



Build framework automation test for API Search Weather you city
Depend into deadline, lifecycle, resource... of project to we choose technique, framework automation test for project.
With project less reuse, comp short lifecycle. We can using Postman, SOAPUI to write script check fastest.
With project large, maintain. long lifecycle. We can build frameworks as: serenity, selenium, robot framework.
With project I prepared 2 example to demo.
Write script test in Postman. And create 
