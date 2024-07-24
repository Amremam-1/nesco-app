import Cookies from "js-cookie";
import baseUrl from "./baseUrl";

export const useInsertData = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'api_password': '123456',
      'language': localStorage.getItem("i18nextLng"),
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    }
  }

  const res = await baseUrl.post(url, params, config);
  console.log("useInsertData-url: :", url)
  console.log("useInsertData-config: :", config)
  console.log("useInsertData-data: :", params)
  console.log("useInsertData-res: :", res)
  return res;
}

// ---------------------------------------------------------------------------------------
export const useInsertDataWithBody = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'api_password': '123456',
      // 'language': localStorage.getItem("i18nextLng"),
      language: localStorage.getItem("i18nextLng"),
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    },
    params: params
  }

  const res = await baseUrl.post(url, params, config);
  console.log("*****useInsertDataWithBody-res:", res)
  return res;
}


// ---------------------------------------------------------------------------------------

// 'multipart/form-data',
// headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'POST, GET',
//   'api_password': '123456',
//   'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
//   'Accept-Language': '*',
//   'language': 'ar',
//   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0',
// }

// const useInsertData = async (url, params) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
//   };

//   const res = await baseUrl.post(url, params, config);
//   return res;
// }

// export { useInsertDataWithImage, useInsertData };