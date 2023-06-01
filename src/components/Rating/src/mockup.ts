interface Answer {
  id: string;
  name: string;
}
interface QuestionGroup extends Answer {
  question: {
    id: string;
    name: string;
    answer: Answer[];
  }[];
}

export const questionGroup: QuestionGroup[] = [
  {
    id: "1",
    name: "Group 1",
    question: [
      {
        id: "1.1",
        name: "question 1",
        answer: [
          { id: "1", name: "Tốt" },
          { id: "2", name: "Khá" },
          { id: "3", name: "Trung bình" },
          { id: "4", name: "Yếu" },
          { id: "5", name: "Kém" },
        ],
      },
      {
        id: "1.2",
        name: "question 2",
        answer: [
          { id: "6", name: "Tốt" },
          { id: "7", name: "Khá" },
          { id: "8", name: "Trung bình" },
          { id: "9", name: "Yếu" },
          { id: "10", name: "Kém" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Group 2",
    question: [
      {
        id: "2.1",
        name: "question 1",
        answer: [
          { id: "11", name: "Tốt" },
          { id: "12", name: "Khá" },
          { id: "13", name: "Trung bình" },
          { id: "14", name: "Yếu" },
          { id: "15", name: "Kém" },
        ],
      },
      {
        id: "2.2",
        name: "question 2",
        answer: [
          { id: "16", name: "Tốt" },
          { id: "17", name: "Khá" },
          { id: "18", name: "Trung bình" },
          { id: "19", name: "Yếu" },
          { id: "20", name: "Kém" },
        ],
      },
    ],
  },
];

export const data = {
  dataInterview: [
    {
      id: "1",
      name: "Nguoi pv 1",
      technique: [
        {
          id: "tech1",
          name: "Tech1",
        },
        {
          id: "tech2",
          name: "Tech2",
        },
        {
          id: "tech3",
          name: "Tech3",
        },
      ],
    },
    {
      id: "2",
      name: "Nguoi pv 2",
      technique: [
        {
          id: "tech2",
          name: "Tech2",
        },
      ],
    },
    {
      id: "3",
      name: "Nguoi pv 3",
      technique: [
        {
          id: "tech3",
          name: "Tech3",
        },
      ],
    },
  ],
  overallRating: "Whattttttttttttttt the ............",
};
