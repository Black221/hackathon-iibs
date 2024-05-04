/* eslint-disable @typescript-eslint/no-unused-vars */

interface Data {
	[index: string]: string | number;
}


const sort = (data: Data[], sens: boolean) => {
	return data.sort((a, b) => {
		if (a.name < b.name) return sens ? -1 : 1;
		if (a.name > b.name) return sens ? 1 : -1;
		return 0;
	})	
}

export const USER_COLUMS = [
	{
		label: "",
		sort: sort
	},
	{
		label: "name",
		sort: sort
	},
	{
		label: "email",
		sort: sort
	},
	{
		label: "role",
		sort: sort
	},
	{
		label: "status",
		sort: sort
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
