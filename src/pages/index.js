import React from 'react';

import SEO from '../components/seo';
import Panel from '../components/panel';
import LinkOut from '../components/LinkOut';
import Layout from '../components/layout';
import TopPanel from '../components/topPanel';
import ButtonLink from '../components/buttonLink';

import VerticalTitle from '../components/verticalTitle';
import VerticalButtonsContainer from '../components/verticalButtonsContainer';

import HorizontalTitle from '../components/horizontalTitle';
import HorizontalButtonsContainer from '../components/horizontalButtonsContainer';

import ucsdBlue from '../images/UCSanDiegoLogo-BlueGold.png';
import ucsdSeal from '../images/ucsd_seal.png';
import ucsdSom from '../images/ucsd_som.png';
import ucsdLogo from '../images/ucsd_logo.png';

import styles from './pageStyles/index.module.css';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout>
    <SEO title='Title' />
    <TopPanel>
      <VerticalTitle title='Title' subtitle='Subtitle' />
      <VerticalButtonsContainer>
        <ButtonLink
          vertical={true}
          text='View in NDEx'
          link='https://test.ndexbio.org/viewer/networks/8853a85d-32b7-11eb-890f-0660b7976219'
          tooltip={true}
          tooltipPosition='top'
          tooltipText={
            <span>
              {'NDEx is an online commons for biological networks. '}
              <span
                style={{
                  display: 'inline-block',
                }}
              >
                <a href='#ndex' style={{ color: 'rgb(0, 0, 0, 0.8)' }}>
                  Learn more
                </a>
              </span>
              {'.'}
            </span>
          }
        />
        <ButtonLink
          vertical={true}
          text='Open in HiView'
          tooltip={true}
          tooltipPosition='bottom'
          link='http://hiview.ucsd.edu/9af4eb9a-77f4-11eb-8821-0660b7976219?type=test&server=https://test.ndexbio.org'
          tooltipText={
            <span>
              {'HiView is a tool for viewing large hierarchical networks. '}
              <a href='#hiview' style={{ color: 'rgb(0, 0, 0, 0.8)' }}>
                Learn more
              </a>
              {'.'}
            </span>
          }
        />
      </VerticalButtonsContainer>
    </TopPanel>

    <Panel>
      <h2>What is this about?</h2>
      <p>Some info about what this is about.</p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <a id='ndex'>
        <h2>What is NDEx?</h2>
      </a>
      <p>
        {'NDEx, the Network Data Exchange ('}
        <LinkOut link='https://ndexbio.org'>www.ndexbio.org</LinkOut>
        {', Pratt et. al. 2017 '}
        <LinkOut link='https://dx.doi.org/10.1158/0008-5472.CAN-17-0606'>
          DOI: 10.1158/0008-5472.CAN-17-0606
        </LinkOut>
        {
          '), is an online commons for biological networks where networks of many types and formats can be shared, accessed, and stored by users and applications. NDEx is tightly integrated with Cytoscape ('
        }
        <LinkOut link='https://cytoscape.org/'>https://cytoscape.org/</LinkOut>
        {'), and the '}
        <LinkOut link='https://ndexbio.org'>Title</LinkOut>
        {
          ' network can be downloaded to Cytoscape by clicking the “Open in Cytoscape” button at the bottom-right of the web page.'
        }
      </p>
      <a id='hiview'>
        <h2>What is HiView?</h2>
      </a>
      <p>
        {'The HiView web application ('}
        <LinkOut link='http://hiview.ucsd.edu/'>
          http://hiview.ucsd.edu/
        </LinkOut>
        {
          ') is an interactive visualization tool which supports exploration of the DDRAM network and any similar hierarchical models. HiView allows the user to (1) interactively zoom across many scales in the model, from an expansive view of the entire hierarchy to more focused views of particular subsystems; (2) browse the network data supporting the inference of each subsystem; and (3) search genes and subsystems based on their names or metadata.'
        }
      </p>
    </Panel>
    <Panel>
      <h2>Collaborators</h2>
      <p>
        <div className={styles.logosContainer}>
          <LinkOut link='https://ucsd.edu/'>
            <img src={ucsdSeal} alt='UCSD Seal' className={styles.smallLogo} />
          </LinkOut>
          <LinkOut link='https://ucsd.edu/'>
            <img src={ucsdLogo} alt='UCSD Logo' className={styles.smallLogo} />
          </LinkOut>
        </div>
        <div className={styles.logosContainer}>
          <LinkOut link='https://ucsd.edu/'>
            <img
              src={ucsdBlue}
              alt='UCSD Big Logo'
              className={styles.largeLogo}
            />
          </LinkOut>
          <LinkOut link='https://medschool.ucsd.edu/Pages/default.aspx'>
            <img
              src={ucsdSom}
              alt='UCSD School of Medicine Logo'
              className={styles.largeLogo}
            />
          </LinkOut>
        </div>
      </p>
    </Panel>
  </Layout>
);

export default IndexPage;
