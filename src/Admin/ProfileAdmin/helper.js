import { API } from "../../env";
import { isLoggedIn } from "../../Login/helper";

export const getAllStudents = (download = false) => {
  const { id, token } = isLoggedIn();
  document.getElementsByClassName("progress")[0].classList.remove("d-none");

  return fetch(`${API}users/${id}?download=${download}`, {
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
export const uploadUsers = (data) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");

  return fetch(`${API}users/${isLoggedIn().id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
    },
    // body:JSON.stringify(data)
    body: data
  })
    .then((res) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");

      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
