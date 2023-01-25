const baseUrl = "http://localhost:3000";

export function loginUser(userData, setSuccess) {
  setSuccess(false);
  return async (dispatch) => {
    fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((json) => {
        localStorage.setItem("access_token", json.access_token);
        setSuccess(true);
      })
      .catch((response) => {
        console.log(response.status, response.statusText);
        response.json().then((json) => {
          console.log(json);
        });
      });
  };
}
