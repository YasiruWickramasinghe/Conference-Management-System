import axios from "axios";
import React from "react";
import jwt_decode from "jwt-decode";

export const register = (newUser) => {
  return axios
    .post("http://localhost:5050/users/registerUser", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      con_number: newUser.con_number,
      position: newUser.position,
      register_fee: newUser.register_fee,
      email: newUser.email,
      password: newUser.password,
    })
    .then((res) => {
      window.alert("Registered Successfully");
      return res.data;
    });
};

export const login = (user) => {
  console.log(user);
  return axios
    .post("http://localhost:5050/users/loginUser", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data);

      const token = localStorage.usertoken;
      const decode = jwt_decode(token);
      console.log(decode.position);
      if (decode.position == "Researcher") {
        localStorage.setItem("Reasearcher", true);
      } else if (decode.position == "Workshop Presenter") {
        localStorage.setItem("Workshop_Presenter", true);
      }

      return decode.position;
    })
    .catch((err) => {
      console.log(err);
    });
};
