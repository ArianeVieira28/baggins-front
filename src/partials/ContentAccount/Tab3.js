import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentProfile } from './styles';

import {
  createUserContactRequest,
  updateUserContactRequest,
  getUserContactRequest,
} from '../../store/modules/user/actions';

export default function Tab3() {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.user);

  const { id } = userInfo.user;

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    dispatch(getUserContactRequest(token, userId));
  }, [dispatch]);

  const [numero, setNumero] = useState('');

  useEffect(() => {
    setNumero(userInfo.userContact.numero);
  }, [userInfo]);

  function sendRequest() {
    const idPessoa = id;
    const token = localStorage.getItem('token');
    if (userInfo.userContact.id == null) {
      dispatch(
        createUserContactRequest(token, {
          idPessoa,
          numero,
        })
      );
    } else {
      dispatch(
        updateUserContactRequest(id, token, {
          numero,
        })
      );
    }
  }
  return (
    <>
      <ContentProfile>
        <form>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="telefone"
              placeholder="Telefone"
              value={numero}
              onChange={e => setNumero(e.target.value)}
            />
          </div>
          <div className="col-md-6 text-center">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => sendRequest()}
            >
              Salvar
            </button>
          </div>
        </form>
      </ContentProfile>
    </>
  );
}
