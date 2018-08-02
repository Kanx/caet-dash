export interface IWikiNavItem {
  Title: string;
  TopicID: string;
  ID: number;
  Content?: string;
  Author?: any;
  Created?: any;
  Modified?: any;
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

export interface IUser {
  AccountName: string;
  DirectReports: Object;
  DisplayName: string;
  Email: string;
  ExtendedManagers: Object;
  ExtendedReports: Object;
  IsFollowed: boolean;
  Peers: Object;
  PersonalUrl: string;
  PictureUrl: string;
  UserProfileProperties?: any;
  UserUrl: string;
  Title?: any;
  LatestPost?: any;
  __metadata?: any;
}


export interface IHSubNavConfig {
  label: string;
  target: string;
}
