import * as moment from 'moment';

export const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const timeNow = moment().format(dateFormat);

export const socialMediaButtons = [
  {
    class: 'fab fa-facebook-f',
    bgColor: '#3d5b9b'
  },
  {
    class: 'fab fa-twitter',
    bgColor: '#20c0f0'
  },
  {
    class: 'fab fa-google-plus-g',
    bgColor: '#d01413'
  },
  {
    class: 'fab fa-youtube',
    bgColor: '#e04a32'
  },
  {
    class: 'fab fa-linkedin-in',
    bgColor: '#017cb8'
  },
  {
    class: 'fab fa-tumblr',
    bgColor: '#2d4865'
  }
];
