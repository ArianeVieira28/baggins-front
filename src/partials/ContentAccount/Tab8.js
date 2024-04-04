import React, { useEffect, useState } from 'react';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';
// import moment from 'moment';
// import { DateRangePicker } from 'react-date-range';
import { ContentProfile } from './styles';

import {
  getUserRequest,
  // userUpdateRequest,
} from '../../store/modules/user/actions';

export default function Tab8() {
  const dispatch = useDispatch();

  // const userInfo = useSelector(state => state.user);
  // const { id } = userInfo.user;

  useEffect(() => {
    const userId = localStorage.getItem('id');
    dispatch(getUserRequest(userId));
  }, [dispatch]);

  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  // useEffect(() => {
  //   // console.log(userInfo);
  //   // const date = moment(userInfo.user.datanasc).format('DD/MM/YYYY');
  //   // console.log(date);

  // }, [userInfo]);

  function sendRequest() {
    // dispatch(userUpdateRequest(id, { nome, email, datanasc }));
  }

  return (
    <>
      <ContentProfile>
        <form>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              placeholder="Senha antiga"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              placeholder="Nova senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              placeholder="Confirmar senha"
              value={confirmaSenha}
              onChange={e => setConfirmaSenha(e.target.value)}
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
