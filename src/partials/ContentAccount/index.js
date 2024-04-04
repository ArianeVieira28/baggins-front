import React from 'react';
// import { useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab7 from './Tab7';
import Tab8 from './Tab8';
import { ContentTab } from './styles';

export default function ContentAccount({ avatar, file }) {
  // const userInfo = useSelector(state => state.user);
  return (
    <>
      <ContentTab>
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1">Informações Pessoais</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Informações de Endereço</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Informações de Contato</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="4">Trocar Senha</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">Excluir Conta</Nav.Link>
                </Nav.Item> */}

                {/* <Nav.Item
                  style={{
                    display: userInfo.user.anfitriao === 1 ? 'flex' : 'none',
                  }}
                >
                  <Nav.Link eventKey="6">Deixar de ser Anfitriao</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="8">Alterar Senha</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="7">Alterar Foto</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <Tab1 />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <Tab2 />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <Tab3 />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <Tab4 />
                </Tab.Pane>
                <Tab.Pane eventKey="7">
                  <Tab7 avatar={avatar} file={file} />
                </Tab.Pane>
                <Tab.Pane eventKey="8">
                  <Tab8 />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </ContentTab>
    </>
  );
}
