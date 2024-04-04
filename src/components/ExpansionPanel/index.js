import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';

import { Btn, HeaderProfileAvatar } from './styles';

import img from '../../assets/imgs/profile/profile1.png';

import { getAdsByHostRequest } from '../../store/modules/hostAds/actions';
import {
  updateCandidatureRequest,
  deleteCandidatureRequest,
} from '../../store/modules/candidature/actions';

// import { getPhotoRequest } from '../../store/modules/photo/actions';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const dispatch = useDispatch();
  const host = useSelector(state => state.host);
  const hostAds = useSelector(state => state.hostAds);
  const [listAds, setListaAds] = useState([{}]);
  const token = localStorage.getItem('token');

  // const [preview, setPreview] = useState(null);
  // const photo = useSelector(state => state.photo);

  useEffect(() => {
    dispatch(getAdsByHostRequest(token, host.host.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, host]);

  useEffect(() => {
    setListaAds(hostAds.Ads);
  }, [hostAds]);

  function aprovarCandidato(idPessoa, idOportunidade) {
    dispatch(
      updateCandidatureRequest(token, idPessoa, idOportunidade, { aprovado: 1 })
    );
  }
  function cancelarCandidato(idOportunidade, idPessoa) {
    dispatch(deleteCandidatureRequest(token, idOportunidade, idPessoa));
  }
  return (
    <div>
      {listAds.map(m => (
        <ExpansionPanel
          square
          expanded={expanded === m.titulo}
          onChange={handleChange(m.titulo)}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Vaga: {m.titulo}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <CardGroup className="col-md-12">
              {m.candidaturas &&
                m.candidaturas.map(content => (
                  <div className="col-md-2">
                    <Card key={content.nome}>
                      <Link
                        to={`/curriculo/${content.pivot.idPessoa}`}
                        style={{ margin: '0 auto' }}
                      >
                        <HeaderProfileAvatar
                          src={
                            `http://34.95.136.148/api/avatar/${content.pivot.idPessoa}` ===
                            null
                              ? img
                              : `http://34.95.136.148/api/avatar/${content.pivot.idPessoa}`
                          }
                        />
                        {/* <Image src={img} className="roundedimg" roundedCircle /> */}
                      </Link>
                      <Card.Body>
                        <Card.Title>{content.nome}</Card.Title>
                        <Btn>
                          <Button
                            disabled={content.pivot.aprovado === 1}
                            className="col-md-12"
                            variant="primary"
                            onClick={() =>
                              aprovarCandidato(
                                content.pivot.idPessoa,
                                content.pivot.idOportunidade
                              )
                            }
                          >
                            {content.pivot.aprovado === 1
                              ? 'Aprovado'
                              : 'Aprovar'}
                          </Button>
                          <Button
                            disabled={content.pivot.aprovado === 1}
                            className="col-md-12"
                            variant="primary"
                            onClick={() =>
                              cancelarCandidato(
                                content.pivot.idOportunidade,
                                content.pivot.idPessoa
                              )
                            }
                          >
                            Cancelar
                          </Button>
                        </Btn>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </CardGroup>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
