async function AccessToken(props) {
  await sessionStorage.setItem("AccessToken", JSON.stringify(props));
  console.log("i am in AccessToken")
}

export default AccessToken;
