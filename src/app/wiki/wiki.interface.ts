export interface WikiNavItem {
  Title: string;
  TopicID: string;
  ID: number;
}

export interface WikiArticle extends WikiNavItem {
  Content: string;
}


export interface PrimaryTopic {
  ID: number;
  Title: string;
  PrimaryTopicID: string;
}

export interface SecondaryTopic extends PrimaryTopic {
  SecondaryTopicID: string;
}
