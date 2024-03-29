import React, { Component }from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap';
import Results from '../../components/Results';

class Search extends Component {
    state = {
      book: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    componentDidMount() {
    }
  
    render() {
      return (

        <Container fluid>
          <Row>
          <Results></Results>
            <Col size="md-12">
              <Jumbotron>
                <h1>
                  {this.state.book.title} by {this.state.book.author}
                </h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-10 md-offset-1">
              <article>
                <h1>Synopsis</h1>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Authors</Link>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default Search;