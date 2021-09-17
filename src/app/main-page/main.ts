export interface Main {
  tags: string;
  imageUrl: string;
  header: string;
  subheading: string;
  content: string;
  date: string;
  comments: IComment[]
}

export interface IComment{
  name: string;
  email?: string;
  commentdetail: string;
}
