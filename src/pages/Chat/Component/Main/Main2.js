/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, withRouter } from 'react-router-dom';

import ReactLoading from 'react-loading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../../../assets/imgs/profile/profile1.png';
import { myFirebase, myFirestore } from '../../Config/MyFirebase';
import images from '../Themes/Images';
import WelcomeBoard from '../WelcomeBoard/WelcomeBoard';
import './Main.css';
import ChatBoard from '../ChatBoard/ChatBoard';
import { AppString } from '../Const';
import SideBar from '../../../../partials/SideBar';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentBody,
} from './styles';
import {
  getUsersChatRequest,
  getHostsChatRequest,
} from '../../../../store/modules/candidature/actions';
import { getHostRequest } from '../../../../store/modules/host/actions';
import { getUserRequest } from '../../../../store/modules/user/actions';

export default function CurriculumOpening() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPeerUser, setCurrentPeerUser] = useState(null);
  const [listUser, setListUser] = useState([]);
  const [listAnfitrioes, setListAnfitrioes] = useState([]);

  const currentUserId = localStorage.getItem(AppString.ID);
  const currentUserAvatar = localStorage.getItem(AppString.PHOTO_URL);
  const currentUserNickname = localStorage.getItem(AppString.NICKNAME);
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  const userInfo = useSelector(state => state.user);

  const candidature = useSelector(state => state.candidature);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersChatRequest(token, id));
    dispatch(getHostsChatRequest(token, id));
    dispatch(getHostRequest(token, id));
    dispatch(getUserRequest(id));
  }, [dispatch]);

  useEffect(() => {
    console.log(candidature.hosts);
  }, [candidature]);

  // useEffect(() => {
  //   console.log(candidature.listChat);
  // }, [candidature]);

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         isLoading: true,
  //         isOpenDialogConfirmLogout: false,
  //         currentPeerUser: null
  //     }
  //     this.currentUserId = localStorage.getItem(AppString.ID)
  //     this.currentUserAvatar = localStorage.getItem(AppString.PHOTO_URL)
  //     this.currentUserNickname = localStorage.getItem(AppString.NICKNAME)
  //     this.listUser = []
  // }

  // componentDidMount() {
  //     this.checkLogin()
  // }
  const history = useHistory();

  async function getListUser() {
    const result = await myFirestore.collection(AppString.NODE_USERS).get();
    console.log(result);
    if (result.docs.length > 0) {
      setListUser([...result.docs]);
      setIsLoading(false);
    }
  }
  function checkLogin() {
    if (!localStorage.getItem(AppString.ID)) {
      setIsLoading(false);
      history.push('/');
    } else {
      getListUser();
    }
  }

  // onProfileClick = () => {
  //     this.props.history.push('/profile')
  // }
  useEffect(() => {
    checkLogin();
  }, []);

  function renderListUser() {
    if (listUser.length > 0) {
      const viewListUser = [];
      if (userInfo.user.anfitriao === 1) {
        candidature.listChat.forEach(candidato => {
          listUser.forEach((item, index) => {
            console.log(item.data());
            if (candidato.email === item.data().email) {
              if (item.data().id !== currentUserId) {
                viewListUser.push(
                  <button
                    type="button"
                    key={index}
                    className={
                      currentPeerUser && currentPeerUser.id === item.data().id
                        ? 'viewWrapItemFocused'
                        : 'viewWrapItem'
                    }
                    onClick={() => {
                      setCurrentPeerUser(item.data());
                    }}
                  >
                    <img
                      className="viewAvatarItem"
                      src={item.data().photoUrl}
                      alt=""
                    />
                    <div className="viewWrapContentItem">
                      <span className="textItem">{`${
                        item.data().nickname
                      }`}</span>
                    </div>
                  </button>
                );
              }
            }
          });
        });
      } else {
        // eslint-disable-next-line no-unused-expressions
        candidature.hosts &&
          candidature.hosts.forEach(anfitriao => {
            listUser.forEach((item, index) => {
              if (anfitriao.email === item.data().email) {
                if (item.data().id !== currentUserId) {
                  viewListUser.push(
                    <button
                      type="button"
                      key={index}
                      className={
                        currentPeerUser && currentPeerUser.id === item.data().id
                          ? 'viewWrapItemFocused'
                          : 'viewWrapItem'
                      }
                      onClick={() => {
                        setCurrentPeerUser(item.data());
                      }}
                    >
                      <img
                        className="viewAvatarItem"
                        src={item.data().photoUrl}
                        alt=""
                      />
                      <div className="viewWrapContentItem">
                        <span className="textItem">{`${
                          item.data().nickname
                        }`}</span>
                      </div>
                    </button>
                  );
                }
              }
            });
          });
      }

      return viewListUser;
    }
    return null;
  }

  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentBody>
            <div className="body">
              <div className="viewListUser"> {renderListUser()}</div>
              <div className="viewBoard">
                {currentPeerUser ? (
                  <ChatBoard
                    currentPeerUser={currentPeerUser}
                    // showToast={this.props.showToast}
                  />
                ) : (
                  <WelcomeBoard
                    currentUserNickname={currentUserNickname}
                    currentUserAvatar={currentUserAvatar}
                  />
                )}
              </div>
            </div>
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
