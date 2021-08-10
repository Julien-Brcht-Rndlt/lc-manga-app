import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function MangaCard ({ canonicalTitle, posterImage, averagerating }) {
    return (
        <Card>
            <Image src={posterImage} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{canonicalTitle}</Card.Header>
            <Card.Meta>
            </Card.Meta>
            <Card.Description>
                {averagerating}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
        </Card>
    )
}