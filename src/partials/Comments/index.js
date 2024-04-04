/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Rating from '@material-ui/lab/Rating';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  CommentWrapper,
  CommentHeader,
  CommentBody,
  UserPhoto,
  StarsRanking,
  CommentText,
  CommentDetails,
  CommentDate,
  UserLocation,
} from './styles';

import profileImage from '../../assets/imgs/profile/profile1.png';

import {
  createCommentRequest,
  getCommentsRequest,
} from '../../store/modules/comments/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));
export default function Comments({
  Contents = [],
  idOportunidade,
  idCandidatura,
  vagaAtiva,
  idPessoaVaga,
}) {
  const classes = useStyles();
  const [comentario, setComentario] = useState('');
  const [nota, setNota] = useState(0);
  const [comentarios, setComentarios] = useState(0);
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  const token = localStorage.getItem('token');
  const idPessoa = localStorage.getItem('id');

  useEffect(() => {
    dispatch(getCommentsRequest(token, idOportunidade));
  }, [dispatch]);

  useEffect(() => {
    setComentarios(comments.comments);
  }, [comments]);

  useEffect(() => {
    console.log(idCandidatura);
  });

  function createFilledStars(n) {
    const elements = [];
    for (let i = 0; i < n; i += 1) {
      elements.push(<AiFillStar key={i} />);
    }
    return elements;
  }
  function createOutlineStars(n) {
    const elements = [];
    for (let i = n; i < 5; i += 1) {
      elements.push(<AiOutlineStar key={i} />);
    }
    return elements;
  }

  function sendRequest() {
    dispatch(
      createCommentRequest(token, {
        comentario,
        nota,
        idPessoa,
        idOportunidade,
      })
    );
    setNota(0);
    setComentario('');
  }
  return (
    <Container>
      {comentarios &&
        comentarios.map(comment => (
          <CommentWrapper key={comment.id}>
            <CommentHeader>
              <UserPhoto src={profileImage} />
              <span> {comment.nome} </span>
            </CommentHeader>
            <CommentBody>
              <StarsRanking>
                {/* {createFilledStars(comment.nota)}
                {comment.nota < 5 && createOutlineStars(comment.nota)} */}
                <Rating
                  name="half-rating"
                  value={comment.nota}
                  precision={0.5}
                  readOnly
                />
              </StarsRanking>
              <CommentText>{comment.comentario}</CommentText>
              <CommentDetails>
                <CommentDate>{comment.created_at}</CommentDate>
                {/* <span> - </span> */}
                {/* <UserLocation>{comment.userLocation}</UserLocation> */}
              </CommentDetails>
            </CommentBody>
          </CommentWrapper>
        ))}
      <Form
        style={{
          display:
            idCandidatura === undefined ||
            idPessoaVaga === JSON.parse(localStorage.getItem('id'))
              ? 'none'
              : 'block',
        }}
      >
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deixe um comentário sobre o Anfitrião!</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            disabled={vagaAtiva === 0}
            className="col-md-6"
            value={comentario}
            onChange={e => setComentario(e.target.value)}
          />
        </Form.Group>
        <Form.Label>Deixe sua nota!</Form.Label>
        <div className={classes.root}>
          <Rating
            name="half-rating"
            value={nota}
            precision={0.5}
            onChange={(event, newValue) => {
              setNota(newValue);
            }}
            disabled={vagaAtiva === 0}
          />
        </div>

        <div className="col-md-2 text-center save">
          <button
            type="button"
            onClick={() => sendRequest()}
            disabled={vagaAtiva === 0}
            className="btn btn-outline-secondary"
          >
            Salvar
          </button>
        </div>
      </Form>
    </Container>
  );
}
