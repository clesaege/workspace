import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import GithubCorner from 'react-github-corner';
import { Button, Jumbotron, Tooltip, TooltipContent, Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';

import 'styles/App.scss'

class App extends Component {

  state = {
    escrowDetails: false,
    emergencyMechanism: false,
    neutral: false,
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({value: event.target.value});
  }

  onEscrowDiv = () => {
    this.setState({ escrowDetails: !this.state.escrowDetails })
  }

  onEmergencyMechanismDiv = () => {
    this.setState({ emergencyMechanism: !this.state.emergencyMechanism })
  }

  onNeutralDiv = () => {
    this.setState({ neutral: !this.state.neutral })
  }

  render() {

    return (
      <div>
      <div>
        <Menu />
        <Container>
          <Row className="vertical_center">
            <Col xs="12" md="8">
              <Jumbotron className="jumbotron-header">
                <h1 className="display-5">Decentralized court</h1>
                <p className="lead">The decentralized court would act as an opt-in legal crypto-institution.</p>
                <p>
                  Parties would select the court to arbitrate their contracts in case of disputes.
                  <br/>Dispute will be first handled by arbitrators, but parties will have the possibility to appeal to a jury system.
                  Both arbitrators and jury members will have game theoretical incentive to arbitrate disputes in an honest manner.
                </p>
                <p className="lead">
                  <a className="btn btn-outline-danger" href="https://docs.google.com/document/d/1aL_ypp2hKOo0lI7XKtOpxMkt3kBIky7Q5eb3jsPMq80/edit">Vote for the project</a>
                </p>
              </Jumbotron>
            </Col>
            <Col md="4" className="hidden-xs-down iconUniversity">
              <FontAwesome name='university' size='5x' />
            </Col>
          </Row>
          <hr className="my-2" />
          <Row>
            <Col>
              <h2>Use cases</h2>
              <Row className="useCases">
                <Col xs="12" md="4" onMouseEnter={this.onEscrowDiv} onMouseLeave={this.onEscrowDiv}>
                  {!this.state.escrowDetails
                    ? <FontAwesome className="icon" name='gavel' size='5x' />
                    :
                    <p>
                    A buyer and a seller would create a contract where the funds
                    can be retrieved by two out of three parties. The court would
                    be the third party. In most cases the court would do nothing,
                    but in case of a dispute, the court would arbitrate and give
                    the fund to either the buyer or the seller.
                    </p>
                  }
                  <br/>Escrow system
                </Col>
                <Col xs="12" md="4" onMouseEnter={this.onEmergencyMechanismDiv} onMouseLeave={this.onEmergencyMechanismDiv}>
                  {!this.state.emergencyMechanism
                    ? <FontAwesome className="icon" name='gears' size='5x' />
                    :
                    <p>
                    When some funds are at risk or stucked in a smart contract
                    because of conceptual or programming mistakes, the court
                    could agree to move them into a new version of the smart
                    contract.
                    </p>
                  }
                  <br/>Emergency mechanism in smart contracts
                </Col>
                <Col xs="12" md="4" onMouseEnter={this.onNeutralDiv} onMouseLeave={this.onNeutralDiv}>
                  {!this.state.neutral
                    ? <FontAwesome className="icon" name='circle-o-notch' size='5x' />
                    :
                    <p>
                    For example in an insurance contract, where the insurer
                    refuse to pay the policyholder, the case would be arbitrated
                    by the decentralized court.
                    </p>
                  }
                  <br/>Neutral party for smart-contract
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row>
            <Col>
              <h2>How ?</h2>
              <p className="lead" className="how">
                Smart contract would explicitly allow the court to call some
                functions.
                <br/>Developers won't have to give it full control on
                their contracts but they would define in which case arbitration
                by the court may be necessary.
              </p>
            </Col>
          </Row>
          <hr className="my-2" />
          <Row>
            <Col>
              <h2>Team</h2>
              <Row>
                <Col xs="12" md="3">
                  <figure>
                    <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkMAAAAJGE2MTdkMWRkLTQ1MGMtNDU1OC04Yzg3LWYyMzJhOTdjZDY1OA.jpg" width="200px" alt="Wagner Nicolas" className="desaturate" />
                    <figcaption>
                      Nicolas - <em>Developer</em>
                    </figcaption>
                  </figure>
                </Col>
                <Col xs="12" md="3">
                  <figure>
                    <img src="https://media.licdn.com/media/AAEAAQAAAAAAAAddAAAAJDBkZTdmYWY3LWEyN2ItNGU2Mi1hMmU4LTkzMTdlNWNmMjFhNA.jpg" width="200px" alt="Clément" className="desaturate" />
                    <figcaption>
                      Clément - <em>Computer scientist</em>
                    </figcaption>
                  </figure>
                </Col>
                <Col xs="12" md="3">
                  <figure>
                    <img src="https://media.licdn.com/media/p/2/000/0d1/3e5/3c74c8e.jpg" width="200px" alt="Sergey Kutsev" className="desaturate" />
                    <figcaption>
                      Sergey - <em>Internet entrepreneur</em>
                    </figcaption>
                  </figure>
                </Col>
                <Col xs="12" md="3">
                  <figure>
                    <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/09a/38a/1e7e6bb.jpg" width="200px" alt="Abdoulaye" className="desaturate" />
                    <figcaption>
                      Abdoulaye - <em>Sustainable financing</em>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <hr className="my-2" />
        <footer>EtherCourt.io</footer>
      </div>
      <GithubCorner href="https://github.com/ethercourt" />
      </div>
    )
  }
}

export default App
