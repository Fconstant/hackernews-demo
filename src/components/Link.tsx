import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link as ILink } from '@server-api';

export class Link extends React.Component<{ link: ILink }> {

    render() {
        const { url, description } = this.props.link;
        return (
            <Button
                basic
                color='orange'
                content={description}
                onClick={() => { window.open(url) }}
            />
        );
    }

}