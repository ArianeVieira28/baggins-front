import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentProfile } from './styles';

import { uploadPhotoRequest } from '../../store/modules/photo/actions';

import { userUpdateRequest } from '../../store/modules/user/actions';

export default function Tab7({ avatar, file }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  const photo = useSelector(state => state.photo);

  function sendRequest() {
    dispatch(uploadPhotoRequest(token, file));
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(userUpdateRequest(userId, { idFile: photo.newFile.id }));
    }, 1000);
  }, [dispatch, photo.newFile, userId]);

  return (
    <>
      <ContentProfile>
        <form>
          <div className="form-group col-md-6">{avatar}</div>
          <div className="col-md-6 text-center">
            <button
              type="button"
              onClick={() => sendRequest()}
              className="btn btn-outline-primary"
            >
              Salvar
            </button>
          </div>
        </form>
      </ContentProfile>
    </>
  );
}
