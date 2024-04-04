import React from 'react';

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
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

import { Container, IconDiv, NameDiv } from './styles';

export default function DynamicIconList(props) {
  const { icons } = props;

  function switchIcon(icon) {
    switch (icon) {
      case 'Dormitório Privado':
        return faLock;
      case 'Quarto Compartilhado':
        return faUsers;
      case 'Camping':
        return faCampground;
      case 'Café da manhã':
        return faCoffee;
      case 'Cozinha equipada':
        return faUtensils;
      case 'Descontos em tours/hospedagem':
        return faPercent;
      case 'Desconto com restaurantes':
        return faPercent;
      case 'Passeios de graça':
        return faMapMarked;
      case 'Carona na chegada':
        return faCar;
      case 'Bicicletas a vontade':
        return faBicycle;
      case 'Desconto em pubs e/ou festas':
        return faGlassCheers;
      case 'Certificado':
        return faCertificate;
      case 'Almoço':
        return faDrumstickBite;
      case 'Jantar':
        return faHotdog;
      case 'Aulas de Idiomas':
        return faLanguage;
      case 'Jardinagem':
        return faSeedling;
      case 'Ajuda em Cultivos e Colheitas':
        return faTractor;
      case 'Bartender':
        return faCocktail;
      case 'Consertos Gerais':
        return faTools;
      case 'Recepção':
        return faConciergeBell;
      case 'Administração':
        return faUsersCog;
      case 'Desenvolvimento Web':
        return faLaptopCode;
      case 'Mídias Sociais':
        return faAd;
      case 'Ensinar Idiomas':
        return faLanguage;
      case 'Pintura e Decoração':
        return faPaintRoller;
      case 'Tarefas Domésticas':
        return faBed;
      case 'Ajuda na Limpeza':
        return faBroom;
      case 'Organizar eventos e festas':
        return faCalendar;
      case 'Guia Local':
        return faMap;
      case 'Trabalho Social':
        return faHandsHelping;
      case 'Fotografia':
        return faCameraRetro;
      case 'Música':
        return faMusic;
      case 'Preparar Refeições':
        return faUtensils;
      case 'Ajudante de Cozinha':
        return faHamburger;
      case 'Produção de vídeo':
        return faVideo;
      case 'Ensinar Esportes':
        return faRunning;
      case 'Turno da Noite':
        return faMoon;
      case 'Cuidado de Crianças':
        return faBaby;
      case 'Cuidado de Animais':
        return faPaw;
      case '1 dia livre por semana':
        return faUmbrellaBeach;
      case '2 dias livres por semana':
        return faUmbrellaBeach;
      case '3 dias livres por semana':
        return faUmbrellaBeach;

      default:
        return null;
    }
  }

  return (
    <Container>
      {icons &&
        icons.map(i => (
          <IconDiv key={i[props.label]}>
            {switchIcon(i[props.label]) && (
              <FontAwesomeIcon icon={switchIcon(i[props.label])} />
            )}
            <NameDiv>{i[props.label]}</NameDiv>
          </IconDiv>
        ))}
    </Container>
  );
}
