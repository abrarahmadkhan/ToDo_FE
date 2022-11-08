async function Access_Token(props) {
  await sessionStorage.setItem("AccessToken", JSON.stringify(props)); 
}

export default Access_Token;
