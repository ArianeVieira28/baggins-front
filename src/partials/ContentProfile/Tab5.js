import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { ContentAccount } from './styles';
import {
  getCurriculumRequest,
  updateCurriculumRequest,
  createCurriculumRequest,
} from '../../store/modules/curriculum/actions';

export default function Tab5() {
  const dispatch = useDispatch();
  const curriculum = useSelector(state => state.curriculum);
  const [descricao, setDescricao] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');

  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getCurriculumRequest(token, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriculum.curriculum, dispatch, id, token]);

  useEffect(() => {
    setDescricao(curriculum.curriculum.descricao);
    setInstagram(curriculum.curriculum.instagram);
    setFacebook(curriculum.curriculum.facebook);
    setTwitter(curriculum.curriculum.twitter);
  }, [curriculum]);

  function sendRequest() {
    if (curriculum.curriculum.id == null) {
      dispatch(
        createCurriculumRequest(token, {
          idPessoa: id,
          descricao,
          instagram,
          facebook,
          twitter,
        })
      );
    } else {
      const idCurriculo = curriculum.curriculum.id;
      dispatch(
        updateCurriculumRequest(token, idCurriculo, {
          descricao,
          instagram,
          facebook,
          twitter,
        })
      );
    }
  }

  return (
    <>
      <ContentAccount>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Conte-nos um pouco sobre você!</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              className="col-md-6"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom" className="col-sm-4">
            <Form.Label>Redes Sociais</Form.Label>
            <Form.Control
              placeholder="Instagram"
              custom
              className="form-control col-md-6"
              value={instagram}
              onChange={e => setInstagram(e.target.value)}
            />
            <Form.Control
              placeholder="Facebook"
              custom
              className="form-control col-md-6"
              value={facebook}
              onChange={e => setFacebook(e.target.value)}
            />
            <Form.Control
              placeholder="Twitter"
              custom
              className="form-control col-md-6"
              value={twitter}
              onChange={e => setTwitter(e.target.value)}
            />
          </Form.Group>

          <div className="col-md-2 text-center save">
            <button
              type="button"
              onClick={sendRequest}
              className="btn btn-outline-secondary"
            >
              Salvar
            </button>
          </div>
        </Form>
      </ContentAccount>
    </>
  );
}
