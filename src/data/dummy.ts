/* eslint-disable @typescript-eslint/no-unused-vars */

export const USER_COLUMS = [
  {
    label: "",
    sort: (data: any[], sens: boolean) => {
      return data;
    },
  },
  {
    label: "name",
    sort: (data: any[], sens: boolean) => {
      return data.sort((a, b) => {
        if (sens) {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name < b.name ? 1 : -1;
        }
      });
    },
  },
  {
    label: "email",
    sort: (data: any[], sens: boolean) => {
      return data.sort((a, b) => {
        if (sens) {
          return a.email > b.email ? 1 : -1;
        } else {
          return a.email < b.email ? 1 : -1;
        }
      });
    },
  },
  {
    label: "role",
    sort: (data: any[], sens: boolean) => {
      return data.sort((a, b) => {
        if (sens) {
          return a.role > b.role ? 1 : -1;
        } else {
          return a.role < b.role ? 1 : -1;
        }
      });
    },
  },
  {
    label: "status",
    sort: (data: any[], sens: boolean) => {
      return data.sort((a, b) => {
        if (sens) {
          return a.status > b.status ? 1 : -1;
        } else {
          return a.status < b.status ? 1 : -1;
        }
      });
    },
  }
];

export const USER_DATA = [
  {
    name: "user1",
    email: "",
    role: "admin",
    status: "active",
  },
  {
    name: "user2",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user3",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user4",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user5",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user6",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user7",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user8",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user9",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user10",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user11",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user12",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user13",
    email: "",
    role: "user",
    status: "active",
  },
  {
    name: "user14",
    email: "",
    role: "user",
    status: "active",
  },
];
