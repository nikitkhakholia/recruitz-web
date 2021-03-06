import { API } from "../../env";
import { isLoggedIn } from "../../Login/helper";

export const getAllApplications = (download = false) => {
  const { id, token } = isLoggedIn();
  document.getElementsByClassName("progress")[0].classList.remove("d-none");

  return fetch(`${API}apps/${id}?download=${download}`, {
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
