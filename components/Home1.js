import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
const Home1 = () => {
  return (
    <>
      <section className="home">
        <div className="overlay">
          <img src="/images/jj.png" className="w-100" />
        </div>
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>          
              <h1>Casinal Educations</h1>
              <h1 >Coachings</h1>
              <p className="">New website for Nextstep</p>
              <button
                type="button"
                className="btn-outline-light btn-lg rounded-0"
              >
                SEE CASE
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </section>
      <section className="mb-5">
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <h2 className="p"> Our</h2> <h2 className="r">&nbsp;Courses</h2>
        </div>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between mb-5">
            <img
              src="images/h3.jpg"
              style={{ width: 680, height: 300 }}
              className="ppp"
            />
            <img
              src="images/h44.jpg"
              style={{ width: 680, height: 300 }}
              className="ppp"
            />
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            <img
              src="images/h2.jpg"
              style={{ width: 680, height: 300 }}
              className="ppp"
            />
            <img
              src="images/h77.jpg"
              style={{ width: 680, height: 300 }}
              className="ppp"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-5">
          <div className="d-flex justify-content-center align-items-center mt-5 mb-1">
            <h2 className="r"> Our&nbsp;About</h2>
          </div>
          <p className="mb-5 d-flex justify-content-center">
            Here is the classic lorem ipsum passage followed by Boparai's odd,
            yet mesmerizing version
          </p>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center mt-4 ">
              <div className="card b px-5">
                <h6 className="mt-4">08 June 2022</h6>
                <h3>Make it Simple</h3>
                <p className="para mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <h6 className="mb-4">post by Arun</h6>
              </div>
            </div>

            <div className="col-md-6 mt-4">
              <img src="images/kids-reading.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center mt-5 mb-1">
            <h2 className="r"> Our&nbsp;Bolg</h2>
          </div>
          <p className="mb-5 d-flex justify-content-center">
            Leveraging agile frameworks to provide a robust synopsis” from eight
            to five.
          </p>
          <div className="card mb-5 b">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img
                  src="/images/g22.jfif"
                  className="card-img p-4"
                  alt="logo"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <div>
                    <h2 className="card-title u">Best Classes and Study</h2>
                    <p className="card-text para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn rounded-pill w mb-5 text-white">
            Read More
          </button>
        </div>
      </section> */}
    </>
  );
};

export default Home1;
