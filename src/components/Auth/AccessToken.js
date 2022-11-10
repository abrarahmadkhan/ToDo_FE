async function AccessToken(props) {
  await sessionStorage.setItem("AccessToken", JSON.stringify(props)); 
}

export default AccessToken;
