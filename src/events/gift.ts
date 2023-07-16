import { GiftObject, GiftList } from '../types/types';

export default (data: GiftObject) => {
  const { giftId: id, uniqueId: uniqueName } = data;
  console.log(uniqueName);

  switch (id) {
    case GiftList.Rose:
      console.log('gifted a rose');
      break;
    case GiftList.Barbell:
      console.log('gifted a barbell');
      break;
    case GiftList.FingerHeart:
      console.log('gifted a finger-heart');
      break;
    case GiftList.Gnome:
      console.log('gifted a gnome');
      break;
    default:
      console.log('gifted something');
  }
};
