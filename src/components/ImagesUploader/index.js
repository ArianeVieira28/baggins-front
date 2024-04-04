import React from 'react';

import ImageUploader from 'react-images-upload';

import { Container } from './styles';

export default function ImagesUploader(props) {
  const { singleImage, buttonText, onDrop } = props;

  // const [images, setImages] = useState('');

  // function onDrop(picture) {
  //   setImages(images.concat(picture));
  // }

  return (
    <Container>
      <ImageUploader
        withIcon
        withPreview
        buttonText={buttonText}
        onChange={onDrop}
        imgExtension={['.jpg', '.png']}
        maxFileSize={5242880}
        singleImage={singleImage}
        label="Max file size: 5mb accepted:jpg|png"
      />
    </Container>
  );
}
