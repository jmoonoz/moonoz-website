import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default class Portfolio extends Component {
  state = {
    onGraphicDesign: false,
    onWebDesign: false,
    isOpen: false,
  };
  render() {
    const allElement = (event) => {
      event.preventDefault();
      this.setState({
        onGraphicDesign: true,
        onWebDesign: true,
      });
    };

    const graphicDesign = (event) => {
      event.preventDefault();
      this.setState({
        onGraphicDesign: true,
        onWebDesign: false,
        isOpen: true,
      });
    };

    const webDesign = (event) => {
      event.preventDefault();
      this.setState({
        onWebDesign: true,
        onGraphicDesign: false,
        isOpen: true,
      });
    };

    console.log(this.state.onWebDesign);

    return (
      <section id="portfolio" className="gallery-section">
        <Container>
          <Row>
            <Col xs={12} className="sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title">
                  <span>Portfolio</span>
                  <h2>Work I Have Done</h2>
                </div>
                <ul>
                  <li>
                    <a
                      data-filter="*"
                      href="#"
                      className="current"
                      onClick={allElement}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Web-Design" href="#" onClick={webDesign}>
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".graphic-design"
                      href="#"
                      onClick={graphicDesign}
                    >
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
                <div
                  className={
                    this.state.onGraphicDesign
                      ? "grid active"
                      : "grid" && this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_1} className="img img-responsive" alt="" />
                  <div className="icon">
                    {/* <a href="#" className="view-icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </a> */}
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onGraphicDesign
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_1} className="img img-responsive" alt="" />
                  <div className="icon">
                    {/* <a href="#" className="view-icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </a> */}
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onGraphicDesign
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_1} className="img img-responsive" alt="" />
                  <div className="icon">
                    {/* <a href="#" className="view-icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </a> */}
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onGraphicDesign
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_1} className="img img-responsive" alt="" />
                  <div className="icon">
                    {/* <a href="#" className="view-icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </a> */}
                  </div>
                </div>
                <div
                  className={
                    this.state.onGraphicDesign
                      ? "grid active"
                      : "grid" && this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_1} className="img img-responsive" alt="" />
                  <div className="icon">
                    {/* <a href="#" className="view-icon">
                      <FontAwesomeIcon icon={faPlus} />
                    </a> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
