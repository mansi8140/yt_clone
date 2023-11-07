import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import CategoriesBar from '../../componenets/categoriesBar/CategoriesBar'
import Video from '../../componenets/video/Video'

const HomeScreen = () => {
  return (
    <Container>
        <CategoriesBar />
        <Row>
            {[...new Array(20)].map(() => (
                <Col lg={3} md={4}>
                    <Video />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default HomeScreen
