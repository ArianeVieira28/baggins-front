import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TrashFill } from 'react-bootstrap-icons';
import { ContentAccount } from './styles';
import {
  getAllIdiomRequest,
  getAllProfRequest,
  createIdiomRequest,
  getUserIdiomRequest,
  deleteIdiomRequest,
} from '../../store/modules/idiom/actions';

export default function Tab1() {
  const dispatch = useDispatch();
  const idiom = useSelector(state => state.idiom);
  const [idioma, setIdioma] = useState('');
  const [proficiencia, setProficiencia] = useState('');
  const [listIdiom, setListIdiom] = useState([]);
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getAllIdiomRequest(token));
    dispatch(getAllProfRequest(token));
    dispatch(getUserIdiomRequest(token, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setListIdiom(idiom.listIdiom);
  }, [idiom]);

  useEffect(() => {
    dispatch(getUserIdiomRequest(token, id));
  }, [dispatch, id, idiom.idiom, token]);

  function sendRequest() {
    dispatch(
      createIdiomRequest(token, {
        idPessoa: id,
        idIdioma: idioma,
        idProficiencia: proficiencia,
      })
    );
  }

  function deleteIdiom(ididioma) {
    dispatch(deleteIdiomRequest(token, ididioma, id));
  }
  return (
    <>
      <ContentAccount>
        {/* <div className="buttons">
          <Button
            size="sm"
            className="col-md-1 col-sm-2"
            variant="outline-secondary"
          >
            Adicionar <Plus size={20} />
          </Button>
        </div> */}
        <Form className="row col-sm-8">
          <Form.Group controlId="exampleForm.SelectCustom" className="col-sm-4">
            <Form.Label>Idioma</Form.Label>
            <Form.Control
              as="select"
              custom
              value={idioma}
              onChange={e => setIdioma(e.target.value)}
            >
              {idiom.idiomas.map(m => (
                <option value={m.id} key={m.id}>
                  {m.idioma}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.SelectCustom" className="col-sm-4">
            <Form.Label>Proficiência</Form.Label>
            <Form.Control
              as="select"
              custom
              value={proficiencia}
              onChange={e => setProficiencia(e.target.value)}
            >
              {idiom.proficiencias.map(m => (
                <option value={m.id} key={m.id}>
                  {m.proficiencia}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
        <div className="col-md-2 text-center save">
          <button
            onClick={sendRequest}
            type="button"
            className="btn btn-outline-secondary"
          >
            Adicionar
          </button>
        </div>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Meus Idiomas</Form.Label>
            {listIdiom &&
              listIdiom.map(m => (
                <>
                  <div className="row col-md-6">
                    <Form.Control
                      disabled
                      custom
                      value={m.idioma}
                      className="form-control col-md-4"
                    />
                    <Form.Control
                      disabled
                      custom
                      value={m.proficiencia}
                      className="form-control col-md-4"
                    />
                    <Button
                      onClick={() => deleteIdiom(m.idIdioma)}
                      size="md"
                      className="btn-delete col-md-1 col-sm-12"
                      variant="outline-secondary"
                    >
                      <TrashFill size={20} />
                    </Button>
                  </div>
                </>
              ))}
          </Form.Group>
        </Form>
      </ContentAccount>
    </>
  );
}
