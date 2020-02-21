import React from 'react';
import { Card, CardText, CardHeader } from 'material-ui';
import FadeAndScale from '../animations/FadeAndScale';
import { relationInverse } from './emoji_picker/emojis';
import Emoji from './emoji_picker/Emoji';

export default class Visit extends React.Component {
    getShortCode() {
        if (!this.props.visit.reaction) return relationInverse["love"];
        return relationInverse[this.props.visit.reaction];
    }

    render() {
        return (
            <FadeAndScale in={this.props.in}>
                <div>
                    <Card style={{ 'textAlign': 'left', 'marginTop': '1em' }}>
                        <div className="row middle-xs">
                            <div className="col-xs">
                                <CardHeader title="Uriel"
                                    avatar={'https://f0.pngfuel.com/png/1006/584/hulk-hand-clip-art-png-clip-art.png'}
                                    subtitle={this.props.visit.observation}
                                ></CardHeader>
                            </div>
                            <div className="col-xs-2 col-sm-1">
                                <Emoji code ={this.getShortCode()}/>
                            </div>
                        </div>
                    </Card>
                </div>
            </FadeAndScale>
        )
    }
}