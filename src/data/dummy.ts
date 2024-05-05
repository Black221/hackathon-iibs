/* eslint-disable @typescript-eslint/no-unused-vars */

interface Data {
	[index: string]: string | number;
}


export const sort = (data: Data[], sens: boolean) => {
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


export const USER_COLUMS_NOTIFICATIONS = [
	{
		label: "",
		sort: sort
	},
	{
		label: "name",
		sort: sort
	},
	{
		label: "telephone",
		sort: sort
	},
	
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

// same for USER_DATA_NOTIFICATIONS inspiriang on USER_DATA with name telephone status
export const USER_DATA_NOTIFICATIONS = [
  {
    name: "user1",
    telephone: "+221773198354",
    
  },
  {
    name: "user2",
    telephone: "+221771900456",
    
  },
  {
    name: "user3",
    telephone: "+221780912390",
    
  },
  {
    name: "user4",
    telephone: "+221703458912",
    
  },
  {
    name: "user5",
    telephone: "+221760900506",
    
  },
  {
    name: "user6",
    telephone: "+221774155243",
    
  },
  {
    name: "user7",
    telephone: "+221773190056",
    status: "active",
  }
  
];

export const LISTNOTIFICATIONS = [
  // each notificaation : objet, nom , telephone,date
  {
    objet: "Notification 1",
    nom: "user1",
    telephone: "+221773198354",
    date: "12/12/2021"
  },
  {
    objet: "Notification 2",
    nom: "user2",
    telephone: "+221771900456",
    date: "12/12/2021"
  },
  {
    objet: "Notification 3",
    nom: "user3",
    telephone: "+221780912390",
    date: "12/12/2021"
  },
  {
    objet: "Notification 4",
    nom: "user4",
    telephone: "+221703458912",
    date: "12/12/2021"
  },
  {
    objet: "Notification 5",
    nom: "user5",
    telephone: "+221760900506",
    date: "12/12/2021"
  },
  {
    objet: "Notification 6",
    nom: "user6",
    telephone: "+221774155243",
    date: "12/12/2021"
  },
  {
    objet: "Notification 7",
    nom: "user7",
    telephone: "+221773190056",
    date: "12/12/2021"
  }]

  export const COLUMNS_NOTIFICATIONS = [
    {
      label: "objet",
      sort: sort
    },
    {
      label: "nom",
      sort: sort
    },
    {
      label: "telephone",
      sort: sort
    },
    {
      label: "date",
      sort: sort
    }
  ]