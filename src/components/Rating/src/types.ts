interface IDefault {
  id: string;
  name: string;
}

interface IData extends IDefault {
  technique: IDefault[];
}

interface iFormOverallRating {
  overallRating: string;
}

interface ITopTabsProps {
  data: Array<IDefault>;
  hideAdd: boolean;
}

export type { IData, IDefault, iFormOverallRating, ITopTabsProps };
