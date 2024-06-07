import dayjs from "dayjs";

export const SIDEBAR = [
  {
    icon: 'HomeIcon',
    name: 'Trang chủ',
    link: '/'
  },
  {
    icon: 'CalendarIcon',
    name: 'Lịch',
    link: '/calendar'
  },
  {
    icon: 'TaskIcon',
    name: 'Nhiệm vụ',
    link: '/task'
  },
  {
    icon: 'EvaluationIcon',
    name: 'Đánh giá',
    link: '/evaluation'
  },
  {
    icon: 'TreeIcon',
    name: 'Cây của tôi',
    link: '/tree'
  },
  {
    icon: 'SettingIcon',
    name: 'Cài đặt',
    link: '/setting'
  },
]

export const TASKS = {
  1: [
    {
      id: 1,
      name: "UIUX",
      status: "2",
      date: "June 7",
      time: "7:30 - 9:30",
      place: "D9-401",
      number_file: 3,
      time_completed: "2",
      percent_work: "100%"
    },
    {
      id: 2,
      name: "Project Planning",
      status: "1",
      date: "June 7",
      time: "10:00 - 11:00",
      place: "Office",
      number_file: 2,
      time_completed: "0",
      percent_work: "80%"
    },
    {
      id: 3,
      name: "Học N3",
      status: "1",
      date: "June 7",
      time: "12:00 - 14:00",
      place: "D9-401",
      number_file: 5,
      time_completed: "0",
      percent_work: "60%"
    },
    {
      id: 4,
      name: "Data Analysis",
      status: "1",
      date: "June 7",
      time: "16:00 - 17:00",
      place: "Data Lab",
      number_file: 3,
      time_completed: "0",
      percent_work: "80%"
    },
    {
      id: 5,
      name: "HTML/CSS",
      status: "1",
      date: "June 7",
      time: "19:00 - 20:00",
      place: "Office",
      number_file: 3,
      time_completed: "0",
      percent_work: "0"
    },
    {
      id: 6,
      name: "Đọc hiểu N2",
      status: "2",
      date: "June 6",
      time: "7:30 - 9:30",
      place: "Home",
      number_file: 3,
      time_completed: "1",
      percent_work: "100%"
    }
  ],
  2: [
    {
      id: 7,
      name: "Gặp đối tác",
      status: "1",
      date: "June 6",
      time: "14:00 - 16:00",
      place: "Công ty",
      number_file: 3,
      time_completed: "0",
      percent_work: "90%"
    },
    {
      id: 8,
      name: "Team Standup",
      status: "1",
      date: "June 5",
      time: "9:00 - 9:30",
      place: "Office",
      number_file: 1,
      time_completed: "0",
      percent_work: "100%"
    },
    {
      id: 9,
      name: "Gặp khách hàng",
      status: "2",
      date: "June 5",
      time: "10:00 - 11:30",
      place: "Coffee",
      number_file: 4,
      time_completed: "1",
      percent_work: "100%"
    },
    {
      id: 10,
      name: "Code Review",
      status: "1",
      date: "June 5",
      time: "15:00 - 16:00",
      place: "Home",
      number_file: 2,
      time_completed: "0",
      percent_work: "80%"
    },
    {
      id: 11,
      name: "User Testing",
      status: "1",
      date: "June 4",
      time: "11:00 - 13:00",
      place: "Testing Lab",
      number_file: 6,
      time_completed: "0",
      percent_work: "70%"
    },
    {
      id: 12,
      name: "HTML/CSS",
      status: "1",
      date: "June 4",
      time: "14:30 - 16:30",
      place: "Home",
      number_file: 2,
      time_completed: "0",
      percent_work: "90%"
    }
  ],
  3: [
  {
    id: 13,
    name: "Product Workshop",
    status: "1",
    date: "June 3",
    time: "10:00 - 12:00",
    place: "B1 HUST",
    number_file: 4,
    time_completed: "0",
    percent_work: "80%"
  },
  {
    id: 14,
    name: "Team Building",
    status: "1",
    date: "June 3",
    time: "14:00 - 16:00",
    place: "Tay Leak",
    number_file: 0,
    time_completed: "0",
    percent_work: "100%"
  },
  {
    id: 15,
    name: "Product Demo",
    status: "1",
    date: "June 2",
    time: "15:00 - 16:30",
    place: "Demo Room",
    number_file: 3,
    time_completed: "0",
    percent_work: "80%"
  },
  {
    id: 16,
    name: "Team Meeting",
    status: "2",
    date: "June 2",
    time: "17:00 - 18:00",
    place: "Coffee",
    number_file: 1,
    time_completed: "1",
    percent_work: "100%"
  },
  {
    id: 17,
    name: "Training HTML",
    status: "1",
    date: "June 1",
    time: "9:30 - 11:00",
    place: "Home",
    number_file: 3,
    time_completed: "0",
    percent_work: "70%"
  },
  {
    id: 18,
    name: "Client Meeting",
    status: "1",
    date: "June 1",
    time: "14:00 - 15:30",
    place: "Coffee",
    number_file: 2,
    time_completed: "0",
    percent_work: "90%"
  },
  ],
  4: [
{
    id: 19,
    name: "Brainstorming",
    status: "1",
    date: "June 1",
    time: "16:00 - 17:30",
    place: "Office",
    number_file: 3,
    time_completed: "0",
    percent_work: "80%"
  },
  {
    id: 20,
    name: "Team Training",
    status: "1",
    date: "June 8",
    time: "8:30 - 12:00",
    place: "Beach",
    number_file: 4,
    time_completed: "0",
    percent_work: "70%"
  },
  {
    id: 21,
    name: "Client Meeting",
    status: "1",
    date: "June 8",
    time: "14:00 - 15:00",
    place: "Client Office",
    number_file: 2,
    time_completed: "0",
    percent_work: "90%"
  },
  {
    id: 22,
    name: "Product Demo",
    status: "2",
    date: "June 9",
    time: "10:00 - 11:30",
    place: "Demo Room",
    number_file: 3,
    time_completed: "1",
    percent_work: "100%"
  },
  {
    id: 23,
    name: "Project Review",
    status: "1",
    date: "May 31",
    time: "16:00 - 17:00",
    place: "Office",
    number_file: 2,
    time_completed: "0",
    percent_work: "80%"
  },
  {
    id: 24,
    name: "Team Building",
    status: "1",
    date: "May 30",
    time: "14:00 - 16:00",
    place: "Beach",
    number_file: 0,
    time_completed: "0",
    percent_work: "100%"
  }
  ],
  5: [
    {
    id: 25,
    name: "Project Review",
    status: "1",
    date: "May 31",
    time: "16:00 - 17:00",
    place: "Office",
    number_file: 2,
    time_completed: "0",
    percent_work: "80%"
  },
  {
    id: 26,
    name: "Team Building",
    status: "1",
    date: "May 30",
    time: "14:00 - 16:00",
    place: "Coffee",
    number_file: 0,
    time_completed: "0",
    percent_work: "100%"
  },
  {
    id: 27,
    name: "Client Meeting",
    status: "1",
    date: "May 30",
    time: "10:00 - 11:30",
    place: "Client Office",
    number_file: 2,
    time_completed: "0",
    percent_work: "90%"
  },
  {
    id: 28,
    name: "Training Gyms",
    status: "1",
    date: "May 29",
    time: "9:30 - 11:00",
    place: "Gyms ",
    number_file: 3,
    time_completed: "0",
    percent_work: "70%"
  },
  {
    id: 29,
    name: "Team Meeting",
    status: "2",
    date: "May 29",
    time: "17:00 - 18:30",
    place: "Coffee",
    number_file: 1,
    time_completed: "1",
    percent_work: "100%"
  },
  {
    id: 30,
    name: "Product Demo",
    status: "1",
    date: "May 28",
    time: "15:00 - 16:30",
    place: "Demo Room",
    number_file: 3,
    time_completed: "0",
    percent_work: "80%"
  },
  ]
};

const EVENTS = [
  {
    id: 1,
    start: dayjs("2024-06-07T07:30:00").toDate(),
    end: dayjs("2024-06-07T09:30:00").toDate(),
    title: "UIUX",
    data: {
      number_file: 3,
      time_completed: "2",
      percent_work: "100%",
    },
    status: 2,
  },
  {
    id: 2,
    start: dayjs("2024-06-07T10:00:00").toDate(),
    end: dayjs("2024-06-07T11:30:00").toDate(),
    title: "Project Planning",
    data: {
      number_file: 2,
      time_completed: "0",
      percent_work: "80%",
    },
    status: 1,
  },
  {
    id: 3, 
    start: dayjs("2024-06-07T12:00:00").toDate(),
    end: dayjs("2024-06-07T14:00:00").toDate(),
    title: "Học N3",
    data: {
      number_file: 5,
      time_completed: "0",
      percent_work: "60%",
    },
    status: 1,
  },
  {
    id: 4,
    start: dayjs("2024-06-06T07:30:00").toDate(),
    end: dayjs("2024-06-06T09:30:00").toDate(),
    title: "Đọc hiểu N2",
    data: {
      number_file: 3,
      time_completed: "1",
      percent_work: "100%",
    },
    status: 2,
  },
  {
    id: 5,
    start: dayjs("2024-06-06T14:00:00").toDate(),
    end: dayjs("2024-06-06T16:00:00").toDate(),
    title: "Gặp đối tác",
    data: {
      number_file: 3,
      time_completed: "0",
      percent_work: "90%",
    },
    status: 1,
  },
  {
    id: 6,
    start: dayjs("2024-06-05T09:00:00").toDate(),
    end: dayjs("2024-06-05T09:30:00").toDate(),
    title: "Team Standup",
    data: {
      number_file: 1,
      time_completed: "0",
      percent_work: "100%",
    },
    status: 1,
  },
  {
    id: 7,
    start: dayjs("2024-06-05T10:00:00").toDate(),
    end: dayjs("2024-06-05T11:30:00").toDate(),
    title: "Gặp khách hàng",
    data: {
      number_file: 4,
      time_completed: "1",
      percent_work: "100%",
    },
    status: 2,
  },
  {
    id: 8,
    start: dayjs("2024-06-05T15:00:00").toDate(),
    end: dayjs("2024-06-05T16:00:00").toDate(),
    title: "Code Review",
    data: {
      number_file: 2,
      time_completed: "0",
      percent_work: "80%",
    },
    status: 1,
  },
  {
    id: 9,
    start: dayjs("2024-06-04T11:00:00").toDate(),
    end: dayjs("2024-06-04T13:00:00").toDate(),
    title: "User Testing",
    data: {
      number_file: 6,
      time_completed: "0",
      percent_work: "70%",
    },
    status: 1,
  },
  {
    id: 10,
    start: dayjs("2024-06-04T14:30:00").toDate(),
    end: dayjs("2024-06-04T16:30:00").toDate(),
    title: "HTML/CSS",
    data: {
      number_file: 2,
      time_completed: "0",
      percent_work: "90%",
    },
    status: 1,
  },
  {
    id: 11,
    start: dayjs("2024-06-03T10:00:00").toDate(),
    end: dayjs("2024-06-03T12:00:00").toDate(),
    title: "Product Development Workshop",
    data: {
      number_file: 4,
      time_completed: "0",
      percent_work: "80%",
    },
    status: 1,
  },
  {
    id: 12,
    start: dayjs("2024-06-03T14:00:00").toDate(),
    end: dayjs("2024-06-03T16:00:00").toDate(),
    title: "Team Building Activity",
    data: {
      number_file: 0,
      time_completed: "0",
      percent_work: "100%",
    },
    status:1,
  },
  {
    id: 13,
    start: dayjs("2024-06-02T15:00:00").toDate(),
    end: dayjs("2024-06-02T16:30:00").toDate(),
    title: "Product Demo",
    data: {
      number_file: 3,
      time_completed: "0",
      percent_work: "80%",
    },
    status: 1,
  },
  {
    id: 14,
    start: dayjs("2024-06-01T09:30:00").toDate(),
    end: dayjs("2024-06-01T11:00:00").toDate(),
    title: "Training Session",
    data: {
      number_file: 3,
      time_completed: "0",
      percent_work: "70%",
    },
    status: 1,
  },
  {
    id: 15,
    start: dayjs("2024-06-01T14:00:00").toDate(),
    end: dayjs("2024-06-01T15:30:00").toDate(),
    title: "Client Meeting",
    data: {
      number_file: 2,
      time_completed: "0",
      percent_work: "90%",
    },
    status: 1,
  },
  {
    id: 16,
    start: dayjs("2024-05-31T14:00:00").toDate(),
    end: dayjs("2024-05-31T15:30:00").toDate(),
    title: "Client Feedback Meeting",
    data: {
      number_file: 2,
      time_completed: "0",
      percent_work: "90%",
    },
    status: 1,
  },
  {
    id: 18,
    start: dayjs("2024-05-30T08:30:00").toDate(),
    end: dayjs("2024-05-30T12:00:00").toDate(),
    title: "Team Training Workshop",
    data: {
      number_file: 4,
      time_completed: "0",
      percent_work: "70%",
    },
    status: 1,
  },
  {
    id: 19,
    start: dayjs("2024-05-30T14:00:00").toDate(),
    end: dayjs("2024-05-30T16:00:00").toDate(),
    title: "Client Meeting",
    data: {
      number_file: 2,
      time_completed: "0",
      percent_work: "90%",
    },
    status: 1,
  },
  {
    id: 20,
    start: dayjs("2024-05-29T14:00:00").toDate(),
    end: dayjs("2024-05-29T16:00:00").toDate(),
    title: "Team Building",
    data: {
      number_file: 0,
      time_completed: "0",
      percent_work: "100%",
    },
    status: 1,
  },
  {
    id: 22,
    start: dayjs("2024-05-28T14:00:00").toDate(),
    end: dayjs("2024-05-28T16:00:00").toDate(),
    title: "Product Demo",
    data: {
      number_file: 3,
      time_completed: "0",
      percent_work: "80%",
    },
    status: 1,
  },
];

export default EVENTS;

