interface BaseColors {
  transparent: string;
  black: string;
  white: string;
  primary: string[];
  secondary: string[];
  neutrals: string[];
  supportingA: string[];
  supportingB: string[];
  supportingC: string[];
}

const baseColors: BaseColors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  primary: [
    '#FFEFE6',
    '#FFD3BA',
    '#FAB38B',
    '#EF8E58',
    '#E67635',
    '#C65D21',
    '#AB4E19',
    '#8C3D10',
    '#77340D',
    '#572508',
  ],
  secondary: [
    '#F2FDE0',
    '#E2F7C2',
    '#C7EA8F',
    '#ABDB5E',
    '#94C843',
    '#7BB026',
    '#63921A',
    '#507712',
    '#42600C',
    '#2B4005',
  ],
  neutrals: [
    '#F5F7FA',
    '#E4E7EB',
    '#CBD2D9',
    '#9AA5B1',
    '#7B8794',
    '#616E7C',
    '#52606D',
    '#3E4C59',
    '#323F4B',
    '#1F2933',
  ],
  supportingA: [
    '#EBF8FF',
    '#D1EEFC',
    '#A7D8F0',
    '#7CC1E4',
    '#55AAD4',
    '#3994C1',
    '#2D83AE',
    '#1D6F98',
    '#166086',
    '#0B4F71',
  ],
  supportingB: [
    '#FFEEEE',
    '#FACDCD',
    '#F29B9B',
    '#E66A6A',
    '#D64545',
    '#BA2525',
    '#A61B1B',
    '#911111',
    '#780A0A',
    '#610404',
  ],
  supportingC: [
    '#FFFAEB',
    '#FCEFC7',
    '#F8E3A3',
    '#F9DA8B',
    '#F7D070',
    '#E9B949',
    '#C99A2E',
    '#A27C1A',
    '#7C5E10',
    '#513C06',
  ],
};

export default baseColors;
