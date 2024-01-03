import { ImageProps, ImageSourcePropType, ImageStyle, Image as RnImage } from 'react-native';

interface IImage extends ImageProps {
  width?: number;
  height: number;
  style?: ImageStyle;
  source: ImageSourcePropType;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

export const Image = ({ width, height, style, source, resizeMode }: IImage) => (
  <RnImage
    resizeMode={resizeMode || 'contain'}
    style={{
      width,
      height,
      ...style,
    }}
    source={source}
  />
);
