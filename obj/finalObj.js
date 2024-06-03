/*

final obj={
  user_name: 'fawas',
  user_address_personal_city: 'calicut',
  user_address_personal_state: 'kerala',
  user_address_office_city: 'kochi',
  user_address_office_area_landmark: 'edappally'
}
*/

let user = {
  name: "fawas",
  address: {
    personal: {
      city: "calicut",
      state: "kerala",
    },
    office: {
      city: "kochi",
      area: {
        landmark: "edappally",
      },
    },
  },
};

let finalobj = {};
let magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      finalobj[parent + "_" + key] = obj[key];
    }
  }
};
magic(user, "user");
console.log(finalobj);
