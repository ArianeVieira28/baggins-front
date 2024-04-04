import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import api from '../../services/api';
// import moment from 'moment';

import { Link } from 'react-router-dom';

import {
  Container,
  InnerContainer,
  ContentWrapper,
  CotentHeader,
  CotentBody,
  Header,
  ContentsHeader,
  ContentsBody,
  ContentsFooter,
  ContentsContainer,
  ContentsWrapper,
  SearchOptions,
} from './styles';

import SideBar from '../../partials/SideBar';

// import headerImage from '../../assets/imgs/search/header1.jpg';
import headerImage from '../../assets/imgs/general/kombi5.jpg';

import testImage1 from '../../assets/imgs/testimages/test1.jpg';
// import testImage2 from '../../assets/imgs/testimages/test2.jpg';
// import testImage3 from '../../assets/imgs/testimages/test3.jpg';
// import testImage4 from '../../assets/imgs/testimages/test4.jpg';
// import testImage5 from '../../assets/imgs/testimages/test5.jpg';
// import testImage6 from '../../assets/imgs/testimages/test6.jpg';
// import testImage7 from '../../assets/imgs/testimages/test7.jpg';
// import testImage8 from '../../assets/imgs/testimages/test8.jpg';

export default class Search extends Component {
  state = {
    palavraChave: '',
    dataInicio: '',
    dataFinal: '',
    tipoAnfitriao: '',
    Vagas: [],
  };

  async componentDidMount() {
    const token = localStorage.getItem('token');

    const headerParams = { Authorization: `Bearer ${token}` };

    const response = await api.get('/alloportunidades', {
      headers: headerParams,
    });

    this.setState({ Vagas: response.data });
  }

  async componentDidUpdate(_, prevState) {
    const { palavraChave, dataInicio, dataFinal, tipoAnfitriao } = this.state;

    if (
      prevState.palavraChave !== palavraChave ||
      prevState.dataInicio !== dataInicio ||
      prevState.dataFinal !== dataFinal ||
      prevState.tipoAnfitriao !== tipoAnfitriao
    ) {
      const token = localStorage.getItem('token');

      const headerParams = { Authorization: `Bearer ${token}` };

      const response = (
        await api.get('/oportunidade', {
          headers: headerParams,
          params: { palavraChave, dataInicio, dataFinal, tipoAnfitriao },
        })
      ).data;

      this.setState({ Vagas: response.data });
    }
  }

  handleInputChange = async (key, e) => {
    const name = key;

    const value = e;

    switch (name) {
      case 'palavraChave':
        this.setState({ palavraChave: value });
        break;
      case 'dataInicio':
        this.setState({ dataInicio: value });
        break;
      case 'dataFinal':
        this.setState({ dataFinal: value });
        break;
      case 'tipoAnfitriao':
        this.setState({ tipoAnfitriao: value });
        break;
      default:
        break;
    }
  };

  render() {
    const { Vagas } = this.state;
    return (
      <Container>
        <InnerContainer>
          <SideBar />
          <ContentWrapper>
            <CotentHeader>
              <Header background={headerImage}>
                <div>
                  <h1> Qual será o seu próximo destino? </h1>
                </div>
              </Header>
            </CotentHeader>
            <CotentBody>
              <SearchOptions>
                <Form>
                  <Form.Group controlId="">
                    <Form.Label>Palavra Chave</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={e =>
                        this.handleInputChange('palavraChave', e.target.value)
                      }
                      placeholder=""
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Tipo de Anfitrião</Form.Label>
                    <Form.Control
                      as="select"
                      name="tipoAnfitriao"
                      onChange={e => {
                        this.handleInputChange('tipoAnfitriao', e.target.value);
                      }}
                      custom
                    >
                      <option> </option>
                      <option>ONG</option>
                      <option>Empresa</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Data Inicial</Form.Label>
                    <DatePicker
                      selected={this.state.dataInicio}
                      className="form-control"
                      name="dataInicio"
                      onChange={e => {
                        this.handleInputChange('dataInicio', e);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Data Final</Form.Label>
                    <DatePicker
                      selected={this.state.dataFinal}
                      className="form-control"
                      name="dataFinal"
                      onChange={e => {
                        this.handleInputChange('dataFinal', e);
                      }}
                    />
                  </Form.Group>
                </Form>
              </SearchOptions>

              <ContentsWrapper>
                {Vagas.map(content => (
                  <ContentsContainer key={content.id}>
                    <Link to={`/jobopening/${content.id}`}>
                      <ContentsHeader banner={testImage1} />
                      <ContentsBody>
                        {content.titulo && content.titulo.length > 20 ? (
                          <span>{content.titulo.substring(0, 20)}...</span>
                        ) : (
                          <span>{content.titulo}</span>
                        )}
                      </ContentsBody>
                      <ContentsFooter>
                        {content.descricao && content.descricao.length > 120 ? (
                          <span>{content.descricao.substring(0, 120)}...</span>
                        ) : (
                          <span>{content.descricao}</span>
                        )}
                      </ContentsFooter>
                    </Link>
                  </ContentsContainer>
                ))}
              </ContentsWrapper>
            </CotentBody>
          </ContentWrapper>
        </InnerContainer>
      </Container>
    );
  }
}
