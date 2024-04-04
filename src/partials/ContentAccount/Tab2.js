import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentProfile } from './styles';

import {
  getUserAddressRequest,
  createUserAddressRequest,
  userAddressUpdateRequest,
} from '../../store/modules/user/actions';

export default function Tab2() {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.user);

  const { id } = userInfo.user;
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getUserAddressRequest(token, userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');

  useEffect(() => {
    setCidade(userInfo.userAddress.cidade);
    setPais(userInfo.userAddress.pais);
    setEstado(userInfo.userAddress.estado);
    setEndereco(userInfo.userAddress.endereco);
    setComplemento(userInfo.userAddress.complemento);
  }, [userInfo]);

  function sendRequest() {
    const idPessoa = id;
    if (userInfo.userAddress.id == null) {
      dispatch(
        createUserAddressRequest(token, {
          idPessoa,
          cidade,
          estado,
          pais,
          endereco,
          complemento,
        })
      );
    } else {
      dispatch(
        userAddressUpdateRequest(id, token, {
          cidade,
          estado,
          pais,
          endereco,
          complemento,
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
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="País"
              value={pais}
              onChange={e => setPais(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Estado"
              value={estado}
              onChange={e => setEstado(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <input
              className="form-control"
              id="exampleFormControlInput5"
              placeholder="Endereço"
              value={endereco}
              onChange={e => setEndereco(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              className="form-control"
              id="exampleFormControlInput6"
              placeholder="Complemento"
              value={complemento}
              onChange={e => setComplemento(e.target.value)}
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
