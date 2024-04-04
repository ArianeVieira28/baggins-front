import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { url } from '../../services/api';

import SideBar from '../../partials/SideBar';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  // Header,
  CotentBody,
  HeaderProfileAvatar,
} from './styles';

import profileImage from '../../assets/imgs/profile/profile1.png';
import ContentProfile from '../../partials/ContentProfile';
// import headerImage from '../../assets/imgs/profile/header2.jpg';

import { getPhotoRequest } from '../../store/modules/photo/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const [preview, setPreview] = useState(null);
  const photo = useSelector(state => state.photo);

  useEffect(() => {
    const userId = localStorage.getItem('id');

    if (photo.file !== '') {
      setPreview(`${url}/avatar/${userId}`);
    }
  }, [photo]);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    dispatch(getPhotoRequest(token, userId));
  }, [dispatch]);

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
            />
          </CotentHeader>
          <CotentBody>
            <ContentProfile />
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
