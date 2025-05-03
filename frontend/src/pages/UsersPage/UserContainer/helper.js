const payloadMapper = {
  age: "age",
  birthCountry: "birth_country",
  firstName: "first_name",
  gender: "gender",
  isVerified: "is_verified",
  lastName: "last_name",
  residencyCountry: "residence_country",
  socialMedia: "social_media",
  userName: "username",
};

export const createPayload = (data) => {
  let payload = {};
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      payload = {
        ...payload,
        [payloadMapper[key]]: data[key],
      };
    }
    if (key === "isVerified" && data[key] !== null) {
      payload = {
        ...payload,
        is_verified: data[key],
      };
    }
    if (key === "gender" && data[key] !== null) {
      payload = {
        ...payload,
        gender: data[key],
      };
    }
  });

  return payload;
};
