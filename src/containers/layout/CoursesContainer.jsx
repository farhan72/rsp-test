import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { BannerComponent } from "../../components/BannerComponent";
import { CardComponent } from "../../components/CardComponent";
import { Wrapper } from "../../styled-components/banner";
import {
  CourseProgramming,
  JumbotronCourses,
  LearnMore,
  StartLearning,
  WrapperCourses,
} from "../../styled-components/courses";
import { Button } from "../../styled-components/home";
import { getDataAlumni } from "../../api/services/courseService";

export default function CoursesContainer() {
  const [alumniList, setAlumniList] = useState([]);

  useEffect(() => {
    getDataAlumni()
      .then((result) => setAlumniList(result.data.data))
      .catch((err) => alert(err.response.data));
  }, []);
  return (
    <>
      <BannerComponent
        heroImage={require("../../img/banner/hero-courses.jpg").default}
      >
        <Wrapper>
          <WrapperCourses>
            <div>
              <h1 className="text-center">
                Tingkatkan <b>skill pemrograman</b> kapan pun, dimana pun.
              </h1>
              <p>
                We’re a brand of passionate software engineers and educators
                with an engaging curriculum backed by real-world software
                projects ready to boost your career.
              </p>
            </div>
            <div className="mt-5 button">
              <Button>Masuk & Memulai Belajar</Button>
              <Button outline>Daftar Sekarang</Button>
            </div>
          </WrapperCourses>
        </Wrapper>
      </BannerComponent>
      <JumbotronCourses transparent="true">
        <Container>
          <Row className="pl-5 justify-content-center pr-0 align-items-center">
            <Col md={6} sm={6} className="learn-more">
              <div className="side-title">
                <h2>
                  Bagaimana Refactory Course membantu <b>meningkatkan skill</b>{" "}
                  anda.
                </h2>
              </div>
              <Button ml={false}>Pelajari Lebih</Button>
            </Col>
            <Col md={6} sm={6}>
              <img
                className="feature"
                src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?fit=839%2C481&ssl=1"
                loading="lazy"
                alt="feature"
              />
            </Col>
          </Row>
        </Container>
      </JumbotronCourses>
      <JumbotronCourses className="p-0">
        <CourseProgramming>
          <Col className="context offset-1 pb-sm-4 pt-sm-5">
            <h2>Kursus pemrograman untuk semua orang tanpa terkecuali</h2>
            <p>
              Refactory Course dirancang untuk memudahkan setiap orang mampu
              meningkatkan keahlian dalam software engineering tanpa dibatasi
              oleh kesulitan akses, kesulitan waktu, batasan keahlian, ataupun
              usia.
            </p>
            <p>
              Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan
              project, bagi pelajar/mahasiswa, Refactory Course akan melengkapi
              keahlian yang sudah diperoleh dalam studi sehingga dapat membuka
              kesempatan tak terbatas pada karir software engineering.
            </p>
            <p>
              Bagi karyawan atau tenaga profesional, Refactory Course dapat
              meningkatkan keahlian software engineer dalam menunjang
              menyelesaikan tugas pekerjaannya tanpa khawatir dengan
              keterbatasan waktu.
            </p>
            <p>
              Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk
              meningkatkan keahlian sehingga mampu berkarya dan mendapat
              keuntungan karir tanpa khawatir mahalnya belajar.
            </p>
            <Button>Daftar Sekarang</Button>
          </Col>
          <Col sm={12} md={6}>
            <div className="context-image text-right">
              <img
                src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1"
                loading="lazy"
                alt="learning"
              />
            </div>
          </Col>
          <Col md={12} className="text-center pt-5">
            <h2 className="text-muted subtitle">MEET OUR GRADUATES</h2>
            <h2 className="font-weight-bold review">Review</h2>
            <h2 className="report">
              Read what our alumni said on <b>Course Report</b>
            </h2>
          </Col>
        </CourseProgramming>
      </JumbotronCourses>
      <JumbotronCourses transparent="true">
        <Row className="justify-content-center">
          {alumniList?.map((item) => (
            <Col
              md={4}
              sm={6}
              key={item.id}
              className="d-flex align-items-stretch"
            >
              <CardComponent data={item} />
            </Col>
          ))}
        </Row>
      </JumbotronCourses>
      <StartLearning fluid>
        <Row className="justify-content-center align-items-center">
          <Col
            md={3}
            sm={3}
            style={{ fontSize: "24px" }}
            className="text-white text-center"
          >
            Ready to start Learning?
          </Col>
          <Col md={2} sm={2}>
            <Button>Daftar Sekarang</Button>
          </Col>
        </Row>
      </StartLearning>
      <LearnMore>
        <Container>
          <div>
            <h2>LANGKAH MUDAH</h2>
          </div>
          <div>
            <h1>Memulai Belajar di Refactory Course</h1>
          </div>
          <div>
            <img
              src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?fit=1024%2C199&ssl=1"
              alt="step"
            />
          </div>
          <div>
            <Button>Pelajari Lebih</Button>
          </div>
        </Container>
      </LearnMore>
    </>
  );
}
