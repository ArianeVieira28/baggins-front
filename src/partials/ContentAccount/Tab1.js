import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import moment from 'moment';
// import { DateRangePicker } from 'react-date-range';
import { ContentProfile } from './styles';

import {
  getUserRequest,
  userUpdateRequest,
} from '../../store/modules/user/actions';

export default function Tab1({ avatar }) {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.user);
  const { id } = userInfo.user;

  useEffect(() => {
    const userId = localStorage.getItem('id');
    dispatch(getUserRequest(userId));
  }, [dispatch]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanasc, setDatanasc] = useState('');

  useEffect(() => {
    // console.log(userInfo);
    // const date = moment(userInfo.user.datanasc).format('DD/MM/YYYY');
    // console.log(date);

    setNome(userInfo.user.nome);
    setEmail(userInfo.user.email);
    setDatanasc(userInfo.user.datanasc);
  }, [userInfo]);

  function sendRequest() {
    dispatch(userUpdateRequest(id, { nome, email, datanasc }));
  }

  return (
    <>
      <ContentProfile>
        <form>
          <div className="form-group col-md-6">
            <input
              type="name"
              className="form-control"
              id="nome"
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              id="datanasc"
              placeholder="Data de Aniversário"
              value={datanasc}
              onChange={e => setDatanasc(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">{avatar}</div>

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
