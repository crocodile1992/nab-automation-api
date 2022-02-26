package com.nab.utilities;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Header;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Map;

public class RestAssuredExtension {
    public static RequestSpecification Request;

    public RestAssuredExtension() {
        // Specify the base URL to the RESTful web service
        RestAssured.baseURI = "http://api.openweathermap.org";
        // RequestSpecification using to sent request to the server.
        // The server is specified by the BaseURI that we have specified in the above step.
        Request = RestAssured.given();
        // Set ContentType is Json for request
        Request.contentType(ContentType.JSON);

    }

    public static ResponseOptions<Response> PostRequest(String url, JSONObject object) {
        Request.body(object.toString());
        return Request.post(url);

    }

    public static ResponseOptions<Response> GetRequest(String url, Map<String, String> params) {
        Request.params(params);
        Request.log();

        return  Request.get(url);

    }



    public static ResponseOptions<Response> PostRequestWithToken(String url, JSONObject object, String token) {
        Request.header(new Header("Authorization", "Bearer " + token));
        Request.body(object.toString());
        return Request.post(url);

    }

    public static ResponseOptions<Response> PutRequestWithToken(String url, JSONObject object, String token) {
        Request.header(new Header("Authorization", "Bearer " + token));
        Request.body(object.toString());
        return Request.put(url);

    }

    public static ResponseOptions<Response> PutRequestWithTokenAndParam(String url, Map<String, String> params, JSONObject object, String token) {
        Request.header(new Header("Authorization", "Bearer " + token));
        Request.pathParams(params);
        Request.body(object.toString());
        return Request.put(url);

    }

    public static ResponseOptions<Response> PostRequestBodyReadFromFileWithToken(String url, String path, String token) throws FileNotFoundException {
        Request.header(new Header("Authorization", "Bearer " + token));
        FileInputStream fileInputStream = new FileInputStream(new File(path));
        Request.body(fileInputStream);
        return Request.post(url);

    }

    public static ResponseOptions<Response> POSTOpsWithBodyFromFileToken(String url, String path, String token) throws FileNotFoundException {
        Request.header(new Header("Authorization", "Bearer " + token));

        FileInputStream fileInputStream = new FileInputStream(new File(path));
        Request.body(fileInputStream);

        return Request.post(url);
    }

    public static ResponseOptions<Response> GETRequestWithTokenAndParam(String url, Map<String, String> params, String token) {
        Request.header(new Header("Authorization", "Bearer " + token));
        Request.pathParams(params);
        return Request.get(url);

    }

    public static ResponseOptions<Response> DELETERequestWithTokenAndParam(String url, Map<String, String> params, String token) {
        Request.header(new Header("Authorization", "Bearer " + token));
        Request.pathParams(params);
        return Request.delete(url);

    }
}
