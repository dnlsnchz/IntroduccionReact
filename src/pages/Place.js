import React from 'react';
import { Card } from 'material-ui/Card'
import { FlatButton } from 'material-ui';
import { withRouter } from 'react-router-dom'

import Container from '../components/Container'
import { getPlace } from '../requests/places';
import VisitModal from '../components/visits/VisitModal';


class Place extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        const slug = props.match.params.slug;
        console.log(slug);

        this.loadPlace(slug);
        this.state = {
            place: {}
        }
    }
    loadPlace(slug) {
        getPlace(slug).then(json => {
            console.log(json);

            this.setState({
                place: json
            })
        })
    }
    render() {
        const { place } = this.state;
        return (
            <div className="Place-container">
                <VisitModal place={place}/>
                <header
                    className="Place-cover"
                    style={{ 'backgroundImage': 'url(' + place.coverImage + ')' }}>
                </header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="Place-card">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-lg-2">
                                        <img src={place.avatarImage} style={{ 'maxWidth': '100%' }} />
                                    </div>
                                    <div className="col-xs">
                                        <h1>{place.title}</h1>
                                        <address>{place.address}</address>
                                        <p>{place.description}</p>
                                    </div>
                                </div>
                                <div style={{ 'marginTop': '1em' }} >
                                    <FlatButton label="Agregar un comentario" secondary={true} />
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withRouter(Place);