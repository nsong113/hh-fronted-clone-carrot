import axios from "axios";
import React from "react";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request
  .use

  // request 보내기 전 수행
  //   function (config) {
  //     console.log("인터셉트 요청 성공!");
  //     return config;
  //   },
  // request 오류 요청을 보내기 전 수행
  //   function (error) {
  //     console.log("인터셉트 요청 오류!");
  //     return Promise.reject(error);
  //   }
  ();
