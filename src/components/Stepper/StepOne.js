import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import {
  getTypeCompanyRequest,
  // setEmpresa,
} from '../../store/modules/host/actions';

export default function StepOne() {
  const dispatch = useDispatch();

  const host = useSelector(state => state.host);

  const [list, setList] = useState([]);
  const [tipoEmpresa, setTipoEmpresa] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(getTypeCompanyRequest(token));
  }, [dispatch]);

  useEffect(() => {
    setList(host.typeList);
  }, [host]);
  useEffect(() => {
    setTipoEmpresa(host.anfitriao.tipoEmpresa);
  }, [host.anfitriao]);

  useEffect(() => {
    host.anfitriao.tipoEmpresa = tipoEmpresa;
  });

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom" className="col-6">
          <Form.Label>Selecione uma opção, please..</Form.Label>
          <Form.Control
            as="select"
            custom
            value={tipoEmpresa}
            onChange={e => setTipoEmpresa(e.target.value)}
          >
            {list.map(m => (
              <option value={m.id} key={m.id}>
                {m.tipo_oportunidade}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
