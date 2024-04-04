import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-rater/lib/react-rater.css';
import Form from 'react-bootstrap/Form';
import { DateRange } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBroom,
  faBed,
  faMoon,
  faConciergeBell,
  faHandsHelping,
  faLanguage,
  faRunning,
  faLaptopCode,
  faUsersCog,
  faPaw,
  faBaby,
  faCocktail,
  faUtensils,
  faSeedling,
  faTractor,
  faTools,
  faMusic,
  faPaintRoller,
  faCalendar,
  faCameraRetro,
  faAd,
  faMap,
  faVideo,
  faHamburger,
  faUsers,
  faLock,
  faCampground,
  faCoffee,
  faBicycle,
  faPercent,
  faCertificate,
  faCar,
  faDrumstickBite,
  faGlassCheers,
  faMapMarked,
  faHotdog,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { getHostRequest } from '../../store/modules/host/actions';
import {
  createHostAdsRequest,
  editAdsRequest,
  // uploadBannerImage,
  // uploadVagaImage,
} from '../../store/modules/hostAds/actions';

import LightButton from '../../components/buttons/LightButton';
import ImagesUploader from '../../components/ImagesUploader';

import { ContentMyAds, RowDiv, Div50, Div100, Div50Center } from './styles';

export default function Tab2() {
  const dispatch = useDispatch();

  const hostAds = useSelector(state => state.hostAds);
  const host = useSelector(state => state.host);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [titulo, setTitulo] = useState('');
  const [errorTitulo, setErrorTitulo] = useState(false);

  const [cidade, setCidade] = useState('');
  const [errorCidade, setErrorCidade] = useState(false);

  const [descricao, setDescricao] = useState('');
  const [errorDescricao, setErrorDescricao] = useState(false);

  const [horasSemanais, setHorasSemanais] = useState('');
  const [errorHorasSemanais, setErrorHorasSemanais] = useState(false);

  const [requisitos, setRequisitos] = useState('');
  const [errorRequisitos, setErrorRequisitos] = useState(false);

  const [salario, setSalario] = useState('');
  const [errorSalario, setErrorSalario] = useState(false);

  const [disponibilidadeInicio, setInicio] = useState('');
  const [errorData, setErrorData] = useState(false);

  const [disponibilidadeFinal, setFinal] = useState('');

  const [listaRequisitos, setListaReq] = useState([]);
  const [errorListaReq, setErrorListaReq] = useState(false);

  const [listaOfertas, setListaOferta] = useState([]);
  const [errorListaOferta, setErrorListaOferta] = useState(false);

  const [error, setError] = useState(false);

  // const [images, setImages] = useState([]);
  // const [errorImages, setErrorImages] = useState(false);

  const [bannerImage, setBannerImage] = useState([]);
  const [errorBanner, setErrorBanner] = useState(false);

  // function onDropImages(picture) {
  //   setImages(picture);
  // }

  function onDropBanner(picture) {
    setBannerImage([picture[0]]);
  }

  useEffect(() => {
    setTitulo(hostAds.oportunidade.titulo);
    setDescricao(hostAds.oportunidade.descricao);
    setHorasSemanais(hostAds.oportunidade.horasSemanais);
    setRequisitos(hostAds.oportunidade.requisitos);
    setDate([
      {
        startDate: moment(
          hostAds.oportunidade.disponibilidadeInicio,
          'DD-MM-YYYY'
        ).toDate(),
        endDate: moment(
          hostAds.oportunidade.disponibilidadeFinal,
          'DD-MM-YYYY'
        ).toDate(),
        key: 'selection',
      },
    ]);
    const ofertasHelper = hostAds.oportunidade.ofertas.map(o => o.id);
    setListaOferta(ofertasHelper);
    const habilidadesHelper = hostAds.oportunidade.habilidades.map(h => h.id);
    setListaReq(habilidadesHelper);
  }, [hostAds]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    dispatch(getHostRequest(token, id));
  }, [dispatch]);

  useEffect(() => {
    const start = moment(date[0].startDate).format('DD-MM-YYYY');
    setInicio(start);
    const end = moment(date[0].endDate).format('DD-MM-YYYY');
    setFinal(end);
  }, [date]);

  useEffect(() => {
    const inicioCompare = moment(new Date()).format('DD-MM-YYYY');
    const finalCompare = moment(new Date()).format('DD-MM-YYYY');

    setErrorTitulo(titulo === '');
    setErrorCidade(cidade === '');
    setErrorDescricao(descricao === '');
    setErrorHorasSemanais(horasSemanais === '');
    setErrorRequisitos(requisitos === '');
    setErrorSalario(host.host.tipoEmpresa !== 2 && salario === '');
    setErrorData(
      String(inicioCompare) === String(disponibilidadeInicio) &&
        String(finalCompare) === String(disponibilidadeFinal)
    );
    setErrorListaReq(listaRequisitos.length === 0);
    setErrorListaOferta(listaOfertas.length === 0);
    setErrorBanner(bannerImage.length === 0);
    // setErrorImages(images.length === 0);
  }, [
    cidade,
    descricao,
    disponibilidadeFinal,
    disponibilidadeInicio,
    horasSemanais,
    host.host.tipoEmpresa,
    listaOfertas,
    listaRequisitos,
    requisitos,
    salario,
    titulo,
    // images,
    bannerImage,
  ]);

  function sendRequest() {
    const token = localStorage.getItem('token');

    if (
      !errorTitulo &&
      !errorCidade &&
      !errorDescricao &&
      !errorHorasSemanais &&
      !errorRequisitos &&
      !errorSalario &&
      !errorData &&
      !errorListaReq &&
      !errorListaOferta &&
      !errorBanner
    ) {
      setError(false);
      if (hostAds.edit) {
        dispatch(
          editAdsRequest(
            token,
            hostAds.oportunidade,
            {
              cidade,
              titulo,
              descricao,
              horasSemanais,
              requisitos,
              salario,
              disponibilidadeInicio,
              disponibilidadeFinal,
            },
            listaOfertas,
            listaRequisitos
          )
        );
      } else {
        dispatch(
          createHostAdsRequest(
            token,
            {
              cidade,
              idAnfitriao: host.host.id,
              titulo,
              descricao,
              horasSemanais,
              requisitos,
              salario,
              disponibilidadeInicio,
              disponibilidadeFinal,
            },
            listaOfertas,
            listaRequisitos
          )
        );
      }
    } else {
      setError(true);
    }
  }

  const handleListaRequisitos = (e, idd) => {
    if (e.target.checked) {
      setListaReq([...listaRequisitos, idd]);
    } else {
      const listAux = listaRequisitos.filter(l => l !== idd);
      setListaReq(listAux);
    }
  };

  const handleListaOferta = (e, idd) => {
    if (e.target.checked) {
      setListaOferta([...listaOfertas, idd]);
    } else {
      const listAux = listaOfertas.filter(l => l !== idd);
      setListaOferta(listAux);
    }
  };

  const list1 = [
    { id: 1, Name: 'Dormitório Privado', icon: faLock },
    { id: 2, Name: 'Quarto Compartilhado', icon: faUsers },
    { id: 3, Name: 'Camping', icon: faCampground },
    { id: 4, Name: 'Café da manhã', icon: faCoffee },
    { id: 5, Name: '1 dia livre por semana' },
    { id: 6, Name: '2 dias livres por semana' },
    { id: 7, Name: '3 dias livres por semana' },
    { id: 8, Name: 'Cozinha equipada', icon: faUtensils },
    { id: 9, Name: 'Descontos em tours/hospedagem', icon: faPercent },
    { id: 10, Name: 'Desconto com restaurantes', icon: faPercent },
    { id: 11, Name: 'Passeios de graça', icon: faMapMarked },
    { id: 12, Name: 'Carona na chegada', icon: faCar },
    { id: 13, Name: 'Bicicletas a vontade', icon: faBicycle },
    { id: 14, Name: 'Desconto em pubs e/ou festas', icon: faGlassCheers },
    { id: 15, Name: 'Certificado', icon: faCertificate },
    { id: 16, Name: 'Almoço', icon: faDrumstickBite },
    { id: 17, Name: 'Jantar', icon: faHotdog },
    { id: 18, Name: 'Aulas de Idiomas', icon: faLanguage },
  ];
  const list2 = [
    { id: 1, Name: 'Jardinagem', icon: faSeedling },
    { id: 2, Name: 'Ajuda em Cultivos e Colheitas', icon: faTractor },
    { id: 3, Name: 'Bartender', icon: faCocktail },
    { id: 4, Name: 'Consertos Gerais', icon: faTools },
    { id: 5, Name: 'Recepção', icon: faConciergeBell },
    { id: 6, Name: 'Administração', icon: faUsersCog },
    { id: 7, Name: 'Desenvolvimento Web', icon: faLaptopCode },
    { id: 8, Name: 'Mídias Sociais', icon: faAd },
    { id: 9, Name: 'Ensinar Idiomas', icon: faLanguage },
    { id: 10, Name: 'Pintura e Decoração', icon: faPaintRoller },
    { id: 11, Name: 'Tarefas Domésticas', icon: faBed },
    { id: 12, Name: 'Ajuda na Limpeza', icon: faBroom },
    { id: 13, Name: 'Organizar eventos e festas', icon: faCalendar },
    { id: 14, Name: 'Guia Local', icon: faMap },
    { id: 15, Name: 'Trabalho Social', icon: faHandsHelping },
    { id: 16, Name: 'Fotografia', icon: faCameraRetro },
    { id: 17, Name: 'Música', icon: faMusic },
    { id: 18, Name: 'Preparar Refeições', icon: faUtensils },
    { id: 19, Name: 'Ajudante de Cozinha', icon: faHamburger },
    { id: 20, Name: 'Produção de vídeo', icon: faVideo },
    { id: 21, Name: 'Ensinar Esportes', icon: faRunning },
    { id: 22, Name: 'Turno da Noite', icon: faMoon },
    { id: 23, Name: 'Cuidado de Crianças', icon: faBaby },
    { id: 24, Name: 'Cuidado de Animais', icon: faPaw },
  ];

  const [locale] = React.useState('pt');
  return (
    <>
      <ContentMyAds>
        <Form>
          <RowDiv>
            <Div50>
              <Form.Group onChange={e => setTitulo(e.target.value)}>
                <Form.Label>Título</Form.Label>
                <Form.Control value={titulo} />
                {errorTitulo && (
                  <small className="redText form-text">
                    Campo obrigatório.
                  </small>
                )}
              </Form.Group>
            </Div50>

            <Div50>
              <Form.Group onChange={e => setCidade(e.target.value)}>
                <Form.Label>Cidade</Form.Label>
                <Form.Control value={cidade} />
                {errorCidade && (
                  <small className="redText form-text">
                    Campo obrigatório.
                  </small>
                )}
              </Form.Group>
            </Div50>
          </RowDiv>

          <RowDiv>
            <Div50>
              <Form.Group onChange={e => setDescricao(e.target.value)}>
                <Form.Label>Detalhes sobre a oportunidade:</Form.Label>
                <Form.Control value={descricao} as="textarea" rows="4" />
                {errorDescricao && (
                  <small className="redText form-text">
                    Campo obrigatório.
                  </small>
                )}
              </Form.Group>
            </Div50>

            <Div50>
              <Form.Group onChange={e => setRequisitos(e.target.value)}>
                <Form.Label>Quais são os requisitos para essa vaga?</Form.Label>
                <Form.Control value={requisitos} as="textarea" rows="4" />
                {errorRequisitos && (
                  <small className="redText form-text">
                    Campo obrigatório.
                  </small>
                )}
              </Form.Group>
            </Div50>
          </RowDiv>

          <RowDiv>
            <Div50>
              <Form.Group onChange={e => setHorasSemanais(e.target.value)}>
                <Form.Label>Horas semanais de trabalho</Form.Label>
                <Form.Control value={horasSemanais} type="number" />
                {errorHorasSemanais && (
                  <small className="redText form-text">
                    Campo obrigatório.
                  </small>
                )}
              </Form.Group>
            </Div50>

            <Div50>
              <Form.Group onChange={e => setSalario(e.target.value)}>
                <Form.Label>Salário</Form.Label>
                <Form.Control
                  value={salario}
                  disabled={host.host.tipoEmpresa === 2}
                  type="number"
                />
                {host.host.tipoEmpresa === 2 && (
                  <small className="text-muted form-text">
                    Você é uma ONG, não é necessário informar este campo!
                  </small>
                )}
                {errorSalario && (
                  <small className="redText form-text">
                    Campo obrigatório.
                  </small>
                )}
              </Form.Group>
            </Div50>
          </RowDiv>

          <RowDiv>
            <Div50>
              <Form.Group>
                <Form.Label>O que você irá oferecer?</Form.Label>
                {['checkbox'].map(type => (
                  <div key={`custom-inline-${type}`}>
                    {list1.map(m => (
                      <Form.Check
                        checked={listaOfertas.find(ch => ch === m.id)}
                        onChange={e => handleListaOferta(e, m.id)}
                        key={m.id + m.Name}
                        custom
                        inline
                        label={
                          <div>
                            <FontAwesomeIcon icon={m.icon} />
                            {m.Name}
                          </div>
                        }
                        type={type}
                        id={`custom-inline1-${type}-${m.id}-${m.name}`}
                        className="col-lg"
                      />
                    ))}
                  </div>
                ))}
                {errorListaOferta && (
                  <small className="redText form-text">
                    É necessário selecionar pelo menos um benefício.
                  </small>
                )}
              </Form.Group>
            </Div50>

            <Div50>
              <Form.Group>
                <Form.Label>Habilidades necessárias </Form.Label>
                {['checkbox'].map(type => (
                  <div key={`custom-inline-${type}`}>
                    {list2.map(v => (
                      <Form.Check
                        // className="col-lg-4"
                        custom
                        checked={listaRequisitos.find(ch => ch === v.id)}
                        onChange={e => handleListaRequisitos(e, v.id)}
                        key={v.id}
                        inline
                        label={
                          <div>
                            <FontAwesomeIcon icon={v.icon} />
                            {v.Name}
                          </div>
                        }
                        type={type}
                        id={`custom-inline2-${v.id}-${v.name}`}
                        className="col-lg"
                      />
                    ))}
                  </div>
                ))}
                {errorListaReq && (
                  <small className="redText form-text">
                    É necessário selecionar pelo menos uma habilidade.
                  </small>
                )}
              </Form.Group>
            </Div50>
          </RowDiv>

          <Div100>
            <Form.Group className="column">
              <Form.Label className="left">Disponibilidade </Form.Label>
              <DateRange
                editableDateInputs
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                locale={locales[locale]}
                months={4}
                direction="horizontal"
              />
              {errorData && (
                <small className="redText form-text">
                  É necessário informar as datas em que a vaga estará
                  disponível.
                </small>
              )}
            </Form.Group>
          </Div100>
        </Form>
        <RowDiv>
          <Div50Center>
            <ImagesUploader
              singleImage
              buttonText="Imagem de capa"
              onDrop={image => onDropBanner(image)}
            />
            {errorBanner && (
              <small className="redText form-text">
                É necessário uma imagem de capa
              </small>
            )}
          </Div50Center>
          {/* <Div50Center>
            <ImagesUploader
              buttonText="Fotos do lugar"
              onDrop={image => onDropImages(image)}
            />
            {errorImages && (
              <small className="redText form-text">
                É necessário pelo menos uma imagem para a vaga
              </small>
            )}
          </Div50Center> */}
        </RowDiv>
        <Div50>
          <LightButton
            text="Salvar"
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => sendRequest()}
          />
          {error && (
            <small className="redText form-text">
              Nem todos os campos foram preenchidos.
            </small>
          )}
        </Div50>
      </ContentMyAds>
    </>
  );
}
