import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CheesesList from "../components/cheese/CheesesList";
import request from "../utilities/api-request";


class HomeView extends Component {

    state = {
        cheeses: [],
      };

    async componentDidMount() {
      const cheeseRes = await request.get("/cheeses");
      const cheeses = cheeseRes.data;
  
      this.setState({ cheeses });
    }
  

    render() {
        const { cheeses } = this.state;
        return(
            <Container>
				<hr />
        <Row className="text-center">
          <Col xs={12} md={8} lg={4}>
            <h5>Welcome to your personal cheese repository!</h5>
          </Col>
        </Row>
        <CheesesList
          cheeses={cheeses}
        />
      </Container>
        );
      }
    }


export default HomeView;