const BASE_URL = "http://localhost:4000/api";

//SELECTORS

const loginViewEl = document.querySelector(".login-view");
const studentsViewEl = document.querySelector(".students-view");

studentsViewEl.style.display = "none";

const loginFormEl = document.querySelector("#loginForm");
const emailInputEL = document.querySelector("#email");
const passwordInputEL = document.querySelector("#password");

const studentsBtn = document.querySelector(".students-btn");
const logoutBtn = document.querySelector(".logout-btn");

//GLOBAL DATA VARIABLES

let user = null;
let accessToken = "";
let refreshToken = "";

//FUNCTIONS

const loginUser = async credentials => {
  console.log(credentials);

  const credentialsJSON = JSON.stringify(credentials);

  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentialsJSON,
  });

  if (response.status >= 400) return;

  accessToken = response.headers.get("access-token");
  refreshToken = response.headers.get("refresh-token");

  const user = await response.json();

  if (!user) return;

  //below we login the user in the ui
  loginViewEl.style.display = "none";
  studentsViewEl.style.display = "block";

  studentsViewEl.querySelector(
    ".username-heading"
  ).innerText = `${user.firstName} ${user.lastName}`;

  saveUserInLocalStorage(user, accessToken, refreshToken);
};

const saveUserInLocalStorage = (userData, accessToken, refreshToken) => {
  const userStringData = JSON.stringify({
    user: userData,
    accessToken,
    refreshToken,
  });

  window.localStorage.setItem("userData", userStringData);
};

const autoLoginUser = () => {
  const userStringData = window.localStorage.getItem("userData");

  if (!userStringData) return;

  const userData = JSON.parse(userStringData);

  user = userData.user;
  accessToken = userData.accessToken;
  refreshToken = userData.refreshToken;

  loginViewEl.style.display = "none";
  studentsViewEl.style.display = "block";

  studentsViewEl.querySelector(
    ".username-heading"
  ).innerText = `${userData.user.firstName} ${userData.user.lastName}`;
};

const fetchStudents = async () => {
  const response = await fetch(`${BASE_URL}/students`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  //1. If status is 403, try to refresh access token
  if (response.status === 403) {
    const refreshTokenRes = await fetch(`${BASE_URL}/refresh-token`, {
      headers: {
        "refresh-token": refreshToken,
      },
    });

    //2. If refresh token returns 403 logout user
    if (refreshTokenRes.status === 403) {
      logoutUser();
      return;
    }

    console.log(refreshTokenRes);

    console.log(
      "New Access Token",
      refreshTokenRes.headers.get("access-token")
    );

    accessToken = refreshTokenRes.headers.get("access-token");

    //3. If refresh token is successful try to fetch students again
    fetchStudents();
    return;
  }

  const students = await response.json();

  console.log(students);
};

const logoutUser = async () => {
  const logoutResponse = await fetch(`${BASE_URL}/logout`, {
    headers: {
      "refresh-token": refreshToken,
    },
  });

  console.log(logoutResponse);

  //Delete everything from local storage
  window.localStorage.clear();
  refreshToken = "";
  accessToken = "";
  user = null;

  loginViewEl.style.display = "block";
  studentsViewEl.style.display = "none";
};

autoLoginUser();

// LISTENERS

loginFormEl.addEventListener("submit", e => {
  e.preventDefault();

  const email = emailInputEL.value;
  const password = passwordInputEL.value;

  loginUser({ email, password });

  loginFormEl.reset();
});

studentsBtn.addEventListener("click", () => {
  fetchStudents();
});

logoutBtn.addEventListener("click", () => {
  logoutUser();
});
