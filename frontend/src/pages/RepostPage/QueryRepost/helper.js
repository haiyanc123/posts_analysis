const userDataMapper = {
  postUserName: "username",
  postSocialMedia: "social_media",
};

export const createQueryUrl = (userData) => {
  let url = "http://127.0.0.1:5000/repost/";
  const params = [];
  Object.keys(userData).forEach((key) => {
    if (userData[key]) {
      params.push(`${userDataMapper[key]}=${userData[key]}`);
    }
  });
  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }
  return url;
};
