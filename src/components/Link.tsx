import React from 'react';
import { Button } from 'semantic-ui-react';

export interface LinkProps {
    uri: string;
    description: string;
}

export class Link extends React.Component<LinkProps> {

    render() {
        const { uri, description } = this.props;
        return (
            <Button
                basic
                color='orange'
                content={description}
                onClick={() => { window.open(uri) }}
            />
        );
    }

}