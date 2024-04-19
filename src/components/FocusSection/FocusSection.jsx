import React from 'react'
import style from './ServicesSection2.module.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardGroup } from 'reactstrap';
import {Link} from 'react-router-dom'

const FocusSection = () => {
  return (
    <div className={style.servicesSection2}>
        <h4 className={style.intro}> <span></span> Our Approach <span></span> </h4>
        <div className={style.servicesSectionWrapper}>
            <div className={style.servicesCards}>
                <div className={style.serviceCard}>
                <CardGroup className='cardgroup'>
                <Card className='card'>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This card has supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                    </CardBody>
                </Card>
                </CardGroup>
                   
            </div>
        </div>
    </div>
    </div>
  )
}

export default FocusSection