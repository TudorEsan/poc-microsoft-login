import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  const imgOptions = {
    method: "GET",
    headers: headers,
    "Content-Type": "image/jpg",
  };

  const userDataRes = await fetch(graphConfig.graphMeEndpoint, options);
  console.log(userDataRes);
  const userData = await userDataRes.json();
  const userPhoto = await (
    await fetch(graphConfig.graphProfilePhotoEndpoint, imgOptions)
  ).blob();

  return {
    ...userData,
    photo: userPhoto,
  };
}
