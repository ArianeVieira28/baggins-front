import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Avatar from 'react-avatar-edit';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  // Header,
  HeaderProfileAvatar,
  // ContentAvatar,
  CotentBody,
} from './styles';

import SideBar from '../../partials/SideBar';

// import headerImage from '../../assets/imgs/profile/header.jpg';
import profileImage from '../../assets/imgs/profile/profile1.png';
import ContentAccount from '../../partials/ContentAccount';
// import AvatarCrop from '../../components/AvatarCrop';
import { url } from '../../services/api';

import { getPhotoRequest } from '../../store/modules/photo/actions';

export default function Account() {
  // const src = '../../assets/imgs/profile/profile2.jpg';
  const dispatch = useDispatch();

  const photo = useSelector(state => state.photo);
  const token = localStorage.getItem('token');

  const [preview, setPreview] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [src, setSrc] = useState();
  const [fileLoad, setFileLoad] = useState();
  const userId = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getPhotoRequest(token, userId));
  }, [dispatch, token, userId]);

  useEffect(() => {
    // console.log(`${file.file}.jpg`);
    if (photo.file !== '') {
      setPreview(`${url}/avatar/${userId}`);
    }
  }, [photo.file, userId]);

  function onClose() {
    setPreview(null);
  }

  function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString, name: 'test' });
  }

  function onCrop(p) {
    setPreview(p);
    const file = DataURIToBlob(p);
    const data = new FormData();
    data.append('file', file, `photoUser-${userId}.png`);
    setFileLoad(data.get('file'));
    console.log(fileLoad);
  }
  // function onFileLoad(file) {
  //   setPreview(file);
  // }

  function avatar() {
    return (
      <Avatar
        className="avatar"
        width={250}
        height={250}
        onCrop={onCrop}
        // onFileLoad={onFileLoad}
        // onImageLoad={onImageLoad}
        onClose={onClose}
        src={src}
      />
    );
  }
  // function handleChange(e) {
  //   setPreview(preview);

  //   const photo = new FormData();
  //   photo.append('file', e.target.files[0]);
  //   // dispatch(uploadPhotoRequest(token, { file: preview }));
  // }
  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            {/* <Header background={headerImage}>
              <div />
            </Header> */}
            <HeaderProfileAvatar
              src={preview === null ? profileImage : preview}
              alt="Preview"
              accept="image/*"
            />
            {/* <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleChange}
            /> */}
          </CotentHeader>
          <CotentBody>
            <ContentAccount
              accept="image/*"
              avatar={avatar()}
              file={fileLoad}
            />
            {/* {avatar()} */}
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
