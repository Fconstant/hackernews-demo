import * as GqlApi from "@server-api";
import { Link } from '@app/components';
import React from 'react';

export interface LinkListProps {
    links: GqlApi.Link[];
}

export class LinkList extends React.Component<LinkListProps> {
  
    render() {
        return this.props.links.map((link) => (
            <Link
                link={link}
            />
        ));
    }

}