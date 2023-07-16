enum GiftList {
  Rose = 5655,
  Barbell = 5760,
  FingerHeart = 5487,
  Gnome = 7002,
}

interface UserDetails {
  createTime: string;
  bioDescription: string;
  profilePictureUrls: string[];
}

interface FollowInfo {
  followingCount: number;
  followerCount: number;
  followStatus: number;
  pushStatus: number;
}

interface Gift {
  gift_id: number;
  repeat_count: number;
  repeat_end: number;
  gift_type: number;
}

interface User {
  userId: string;
  secUid: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  followRole: number;
  userBadges: any[];
  userDetails: UserDetails;
  followInfo: FollowInfo;
  isModerator: boolean;
  isNewGifter: boolean;
  isSubscriber: boolean;
  topGifterRank: null | number;
  createTime: string;
}

interface GiftObject {
  giftId: number;
  repeatCount: number;
  userId: string;
  secUid: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  followRole: number;
  userBadges: any[];
  userDetails: UserDetails;
  followInfo: FollowInfo;
  isModerator: boolean;
  isNewGifter: boolean;
  isSubscriber: boolean;
  topGifterRank: null | number;
  createTime: string;
  msgId: string;
  displayType: string;
  label: string;
  repeatEnd: boolean;
  gift: Gift;
  giftName: string;
  describe: string;
  giftType: number;
  diamondCount: number;
  giftPictureUrl: string;
  timestamp: number;
  receiverUserId: string;
  groupId: string;
}

interface LikeObject {
  likeCount: number;
  totalLikeCount: number;
  userId: string;
  secUid: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  followRole: number;
  userBadges: any[];
  userDetails: UserDetails;
  followInfo: FollowInfo;
  isModerator: boolean;
  isNewGifter: boolean;
  isSubscriber: boolean;
  topGifterRank: null;
  createTime: string;
  msgId: string;
  displayType: string;
  label: string;
  senderUser: User;
}

interface ChatObject {
  comment: string;
  userId: string;
  secUid: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  followRole: number;
  userBadges: any[];
  userDetails: UserDetails;
  followInfo: FollowInfo;
  isModerator: boolean;
  isNewGifter: boolean;
  isSubscriber: boolean;
  topGifterRank: null;
  msgId: string;
  createTime: string;
}

export { GiftObject, LikeObject, GiftList, ChatObject };
