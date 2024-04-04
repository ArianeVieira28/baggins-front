import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
  Btn,
} from './styles';
import {
  getHostsRequest,
  aprovarAnfitriaoRequest,
} from '../../store/modules/host/actions';
import img from '../../assets/imgs/profile/profile1.png';

import SideBar from '../../partials/SideBar/indexAdmin';
import headerImage from '../../assets/imgs/mainpage/header5.png';

export default function MainPage() {
  const dispatch = useDispatch();
  const host = useSelector(state => state.host);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(getHostsRequest(token));
  }, [dispatch]);

  function aprovarAnfitriao(idPessoa) {
    const token = localStorage.getItem('token');
    dispatch(aprovarAnfitriaoRequest(token, idPessoa, { anfitriao: 1 }));
  }

  return (
    <Container>
      <InnerContainer>
        <SideBar />
        <ContentWrapper>
          <CotentHeader>
            <Header background={headerImage}>
              <div>
                <h1> Página do Administrador </h1>
                {/* <input type="text" placeholder="Canadá" /> */}
              </div>
            </Header>
          </CotentHeader>
          <CotentBody>
            {host.hosts &&
              host.hosts.map(content => (
                <div className="col-md-2" key={content.idAnfitriao}>
                  <Card>
                    <Link
                      to={`/hostopening/${content.idAnfitriao}`}
                      style={{ margin: '0 auto' }}
                    >
                      <Image src={img} className="roundedimg" roundedCircle />
                    </Link>
                    <Card.Body>
                      <Card.Title>{content.nome}</Card.Title>
                      <Btn>
                        <Button
                          // disabled={content.pivot.aprovado === 1}
                          className="col-md-12"
                          variant="primary"
                          onClick={() => aprovarAnfitriao(content.idPessoa)}
                        >
                          Aprovar
                        </Button>
                        {/* <Button
                          // disabled={content.pivot.aprovado === 1}
                          className="col-md-12"
                          variant="primary"
                          // onClick={() =>
                          //   cancelarCandidato(
                          //     content.pivot.idOportunidade,
                          //     content.pivot.idPessoa
                          //   )
                          // }
                        >
                          Cancelar
                        </Button> */}
                      </Btn>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </CotentBody>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}
