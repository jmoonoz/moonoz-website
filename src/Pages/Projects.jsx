import React, { useState, useEffect } from "react";
import CardItem from "../Components/CardItem";
import ProjectInfo from "../Asset/project";
import { Container, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import PageHero from "../Components/PageHero";
import { Swiper } from "swiper/react";
import "swiper/css/grid";
import Portfolio from "../Components/Portfolio"
import { Grid, Pagination } from "swiper/modules";
import SectionTemplate from "../Components/SectionTemplate";

const ProjectsStyle = styled.div`
  @media only screen and (max-width: 768px) {
    .project-search,
    .project-search form,
    .project-search input {
      width: 100%;
    }
    .project-all-item,
    .project-search input {
      display: flex;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 3rem;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  };
  return (
    <SectionTemplate idName={"project"}>
      <PageHero heroTitle="Explore My Creations" />
      {/* <section id="Project-Page" className="page-section">
        <Container className="project-display">
          <div className="section-title-alignment">
            <span>Projects</span>
            <h2 className="section-title-center">Explore My Creations</h2>
          </div>
          <div className="project-search">
            <Row>
              <Form>
                <Form.Control
                  type="text"
                  value={searchText}
                  onChange={handleChange}
                  placeholder="Project Name"
                />
              </Form>
            </Row>
          </div>
          <Swiper
            slidesPerView={1}
            grid={
              {
                // rows: 2,
              }
            }
            spaceBetween={20}
            modules={[Grid]}
            className="mySwiper"
          >
            <div className="project-all-item">
              {projectData.map((item) => (
                <CardItem
                  key={item.id}
                  title={item.name}
                  desc={item.desc}
                  img={item.img}
                />
              ))}
            </div>
          </Swiper>
        </Container>
      </section> */}
      <Portfolio />
    </SectionTemplate>
  );
}

// <div>
//   <PageHero heroTitle={"Dive into My Creative Outputs"} />
//   <ProjectsStyle></ProjectsStyle>
//   <Container>
//     <CardItem />
//   </Container>
// </div>;
