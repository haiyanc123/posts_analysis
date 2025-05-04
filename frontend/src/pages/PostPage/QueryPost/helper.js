const queryMapper = {
  socialMedia: "post_social_media",
  userName: "post_username",
  posterFirstName: "first_name",
  posterLastName: "last_name",
  fromDate: "start_time",
  toDate: "end_time",
};

export const createQueryUrl = (queryData) => {
  let url = "http://127.0.0.1:5000/post/";
  const params = [];
  Object.keys(queryData).forEach((key) => {
    if (queryData[key]) {
      params.push(`${queryMapper[key]}=${queryData[key]}`);
    }
  });
  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }
  return url;
};
