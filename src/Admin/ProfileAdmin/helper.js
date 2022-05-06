import { API } from "../../env";
import { isLoggedIn } from "../../Login/helper";

export const getAllStudents = () => {
  const { id, token } = isLoggedIn();
  document.getElementsByClassName("progress")[0].classList.remove("d-none");

  return fetch(`${API}users/${id}`, {
    method: "GET",
  })
    .then((resp) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");

      return resp.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const downloadAllStudents = () => {
  const { id, token } = isLoggedIn();
  document.getElementsByClassName("progress")[0].classList.remove("d-none");

  return fetch(`${API}users/${id}?download=true`, {
    method: "GET",
  })
    .then((res) => res.blob())
    .then((resp) => {
      // console.log(123);
      document.getElementsByClassName("progress")[0].classList.add("d-none");
      // var file = window.URL.createObjectURL(resp);
      // console.log(file);
      // window.location.assign(file);

      var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    // return function (file, fileName) {
        // var json = JSON.stringify(data),
            // blob = new Blob([json], {type: "octet/stream"}),
           var url = window.URL.createObjectURL(resp);
        a.href = url;
        a.download = "Student@" + new Date().toLocaleString();
        a.click();
        window.URL.revokeObjectURL(url);
    // };
    })
    .catch((err) => {
      console.log(err);
    });
};
export const uploadUsers = (data) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");

  return fetch(`${API}users/${isLoggedIn().id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
    },
    // body:JSON.stringify(data)
    body: data,
  })
    .then((res) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");

      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
