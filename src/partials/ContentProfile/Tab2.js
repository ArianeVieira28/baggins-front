/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Rating from '@material-ui/lab/Rating';
import Row from 'react-bootstrap/Row';
import 'react-rater/lib/react-rater.css';

import { ContentAccount } from './styles';
import {
  // getSkillsRequest,
  updateUserSkillsRequest,
  createUserSkillsRequest,
  getUserSkillsRequest,
} from '../../store/modules/skills/actions';

const list2 = [
  { id: 1, habilidade: 'Jardinagem', icon: 'fa-seedling', rateStar: null },
  {
    id: 2,
    habilidade: 'Ajuda em Cultivos e Colheitas',
    icon: 'fa-tractor',
    rateStar: null,
  },
  { id: 3, habilidade: 'Bartender', icon: 'fa-cocktail', rateStar: null },
  { id: 4, habilidade: 'Consertos Gerais', icon: 'fa-tools', rateStar: null },
  { id: 5, habilidade: 'Recepção', icon: 'fa-concierge-bell', rateStar: null },
  { id: 6, habilidade: 'Administração', icon: 'fa-users-cog', rateStar: null },
  {
    id: 7,
    habilidade: 'Desenvolvimento Web',
    icon: 'fa-laptop-code',
    rateStar: null,
  },
  { id: 8, habilidade: 'Mídias Sociais', icon: 'fa-ad', rateStar: null },
  { id: 9, habilidade: 'Ensinar Idiomas', icon: 'fa-language', rateStar: null },
  {
    id: 10,
    habilidade: 'Pintura e Decoração',
    icon: 'fa-paint-roller',
    rateStar: null,
  },
  { id: 11, habilidade: 'Tarefas Domésticas', icon: 'fa-bed', rateStar: null },
  { id: 12, habilidade: 'Ajuda na Limpeza', icon: 'fa-broom', rateStar: null },
  {
    id: 13,
    habilidade: 'Organizar eventos e festas',
    icon: 'fa-calendar',
    rateStar: null,
  },
  { id: 14, habilidade: 'Guia Local', icon: 'fa-map', rateStar: null },
  {
    id: 15,
    habilidade: 'Trabalho Social',
    icon: 'fa-hands-helping',
    rateStar: null,
  },
  { id: 16, habilidade: 'Fotografia', icon: 'fa-camera-retro', rateStar: null },
  { id: 17, habilidade: 'Música', icon: 'fa-music', rateStar: null },
  {
    id: 18,
    habilidade: 'Preparar Refeições',
    icon: 'fa-utensils',
    rateStar: null,
  },
  {
    id: 19,
    habilidade: 'Ajudante de Cozinha',
    icon: 'fa-hamburger',
    rateStar: null,
  },
  { id: 20, habilidade: 'Produção de vídeo', icon: 'fa-video', rateStar: null },
  {
    id: 21,
    habilidade: 'Ensinar Esportes',
    icon: 'fa-running',
    rateStar: null,
  },
  { id: 22, habilidade: 'Turno da Noite', icon: 'fa-moon', rateStar: null },
  {
    id: 23,
    habilidade: 'Cuidado de Crianças',
    icon: 'fa-baby',
    rateStar: null,
  },
  { id: 24, habilidade: 'Cuidado de Animais', icon: 'fa-paw', rateStar: null },
];

export default function Tab2() {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.skills);
  const [value, setValue] = React.useState(0);
  const [listaHabilidade, setListaHab] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [userhabilidades, setUserHabilidades] = useState([]);

  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  useEffect(() => {
    // dispatch(getSkillsRequest(token));
    dispatch(getUserSkillsRequest(token, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setHabilidades(list2);
  }, []);
  useEffect(() => {
    setUserHabilidades(skills.userHabilidade);
  }, [skills.userHabilidade]);

  useEffect(() => {
    // eslint-disable-next-line no-var
    var temp2 = [];
    // if (skills) {
    list2.forEach(element2 => {
      Array.from(userhabilidades).forEach(element => {
        if (element.idHabilidade === element2.id) {
          element2.rateStar = element.rateStar;
        }
      });
      temp2.push(element2);
    });
    setHabilidades(temp2);
    // }
  }, [userhabilidades]);

  function sendRequest() {
    console.log(listaHabilidade);
    console.log(userhabilidades);

    if (userhabilidades.length === 0) {
      listaHabilidade.forEach(element => {
        dispatch(
          createUserSkillsRequest(token, {
            idHabilidade: element.idHabilidade,
            idPessoa: id,
            rateStar: element.rate,
          })
        );
      });
    } else {
      listaHabilidade.forEach(element => {
        Array.from(userhabilidades).forEach(element2 => {
          if (element.idHabilidade !== element2.idHabilidade) {
            dispatch(
              createUserSkillsRequest(token, {
                idHabilidade: element.idHabilidade,
                idPessoa: id,
                rateStar: element.rate,
              })
            );
          } else {
            console.log('update');
            dispatch(
              updateUserSkillsRequest(token, element.idHabilidade, id, {
                rateStar: element.rate,
              })
            );
          }
        });
      });
    }
  }

  // useEffect(() => {
  //   console.log(listaHabilidade);
  // }, [listaHabilidade]);

  function handleChange(newValue, habilidade) {
    setValue(newValue);
    if (newValue > 0 || newValue !== null) {
      const temp = listaHabilidade.find(x => x.idHabilidade === habilidade.id);
      if (temp) {
        const idx = listaHabilidade.indexOf(temp);
        if (idx !== -1) listaHabilidade.splice(idx, 1);
      }
      listaHabilidade.push({
        idHabilidade: habilidade.id,
        rate: newValue,
      });
      console.log(listaHabilidade);
    } else {
      const temp = listaHabilidade.filter(
        x => x.idHabilidade !== habilidade.id
      );
      setListaHab(temp);
    }
  }

  return (
    <>
      <ContentAccount>
        <Row>
          {habilidades.map(m => (
            <Col key={m.id} className="rounded border border-purple col-sm-3">
              <div className="title-habilidade">
                <i className={`svg-inline--fa fas ${m.icon}`} />

                {m.habilidade}
              </div>
              {m.rateStar && (
                <Rating
                  value={m.rateStar}
                  onChange={(event, newValue) => {
                    m.rateStar = newValue;
                    handleChange(newValue, m);
                  }}
                  size="large"
                />
              )}
              {!m.rateStar && (
                <Rating
                  onChange={(event, newValue) => handleChange(newValue, m)}
                  size="large"
                />
              )}
            </Col>
          ))}
        </Row>
        <div className="col-md-2 text-center save">
          <button
            onClick={() => sendRequest()}
            type="button"
            className="btn btn-outline-secondary"
          >
            Salvar
          </button>
        </div>
      </ContentAccount>
    </>
  );
}
