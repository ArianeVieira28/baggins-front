import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

import { ContentTab } from './styles';

import { changeTab } from '../../store/modules/hostAds/actions';

export default function ContentProfile() {
  const dispatch = useDispatch();

  const hostAds = useSelector(state => state.hostAds);
  const key = hostAds.activeTab;

  return (
    <>
      <ContentTab>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => dispatch(changeTab(k))}
        >
          <Tab eventKey="1" title="Meus Anúncios">
            <Tab1 />
          </Tab>
          <Tab eventKey="2" title="Publicar">
            <Tab2 />
          </Tab>
          <Tab eventKey="3" title="Aprovar viajante">
            <Tab3 />
          </Tab>
        </Tabs>
      </ContentTab>
    </>
  );
}
