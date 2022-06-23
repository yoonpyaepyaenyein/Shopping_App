import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Logout = props => (
  <Svg width={props.width} height={props.height} viewBox="0 0 90 60">
    <Path
      d="M40.36 9.8a2 2 0 1 0-1.24 3.8 22.77 22.77 0 1 1-14.24 0 1.998 1.998 0 0 0 1.353-2.544A2 2 0 0 0 23.64 9.8a26.77 26.77 0 1 0 16.72 0Z"
      fill="#ff8800"
    />
    <Path
      d="M32 25.06a2 2 0 0 0 2-2V4a2 2 0 1 0-4 0v19.06a2 2 0 0 0 2 2Z"
      fill="#ff8800"
    />
  </Svg>
);

export default Logout;
