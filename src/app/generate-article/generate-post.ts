import { AuthorPost } from "./author-post.enum";

export interface GeneratePost {
  prettyUrl: string;
  isPublished: boolean;
  updatedOn: any;
  createdOn: any;
  vid: string;
  author: AuthorPost;
  previewImageSource: string;
  content: string
}
