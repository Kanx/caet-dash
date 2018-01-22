export interface IWikiNavItem {
  Title: string;
  TopicID: string;
  ID: number;
}

export interface IWikiArticle extends IWikiNavItem {
  Content: string;
}

export interface IPrimaryTopic {
  ID: number;
  Title: string;
  PrimaryTopicID: string;
}

export interface ISecondaryTopic extends IPrimaryTopic {
  SecondaryTopicID: string;
}

export interface ISource {
  Title: string;
  Medium: string;
  ID: number;
}
