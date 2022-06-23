import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const Live = props => (
  <Svg
    viewBox="0 0 24 20"
    fill="#fff"
    strokeWidth={1}
    width={props.width}
    height={props.height}>
    <Circle cx={12} cy={12} r={2} />
    <Path
      fill={'#fff'}
      d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
    />
  </Svg>
);

export default Live;
