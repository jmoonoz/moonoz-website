import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";
import projects from "../Asset/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjectSectionStyled = styled.div`
  .swiper {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: black;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .swiper-slide{
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    .project-all-item {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projects-item-img {
        width: 100%;
      }
    }
    .swiper-slide  {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function ProjectSection() {
  // console.log(projects.length());
  return (
    <ProjectSectionStyled>
      <section id="Projects" className="Porject-section">
        <Container>
          <div className="section-title-alignment">
            <span>Projects</span>
            <h2 className="section-title-center">Explore My Creations</h2>
          </div>
          <Row>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={project.id}>
                    <CardItem
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                      link={project.link}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </section>
    </ProjectSectionStyled>
  );
}
