export enum PageCategory {
  Courses,
  Books,
}

export interface HHData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export interface AdvantageData {
  description: string;
  id: string;
  title: string;
}

export interface PageModel {
  _id: string;
  title: string;
  alias: string;
  advantages: AdvantageData[];
  category: string;
  description: string;
  hh: HHData;
  tags: string[];
}