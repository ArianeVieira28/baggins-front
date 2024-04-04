import React from 'react';
import Tab from 'react-bootstrap/Tab';

import Tabs from 'react-bootstrap/Tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
// import Tab3 from './Tab3';
// import Tab4 from './Tab4';
import Tab5 from './Tab5';
// import Tab6 from './Tab6';
// import Tab7 from './Tab7';
import { ContentTab } from './styles';

export default function ContentProfile() {
  return (
    <>
      <ContentTab>
        <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
          <Tab eventKey="1" title="Idiomas">
            <Tab1 />
          </Tab>
          <Tab eventKey="2" title="Habilidades">
            <Tab2 />
          </Tab>
          {/* <Tab eventKey="3" title="Experiência Profissional">
            <Tab3 />
          </Tab>
          <Tab eventKey="4" title="Formação">
            <Tab4 />
          </Tab> */}
          <Tab eventKey="5" title="Quem sou eu">
            <Tab5 />
          </Tab>
          {/* <Tab eventKey="6" title="Interesses">
            <Tab6 />
          </Tab> */}
          {/* <Tab eventKey="7" title="Redes Sociais">
            <Tab7 />
          </Tab> */}
        </Tabs>
      </ContentTab>
    </>
  );
}
