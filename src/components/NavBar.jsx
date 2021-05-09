import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  
  const [activeItem, setActiveItem] = useState('Home')

  const handleItemClick = (name) => setActiveItem(name)

  const items = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Contact',
            to: '/contact'
        }
    ]

    return (
      <div>
        <Menu pointing secondary>
        {
            items.map((item, index) => {
                return(
                    <Link key={index} to={item.to}>
                        <Menu.Item
                            as={'span'}
                            key={index}
                            name={item.name}
                            active={activeItem === item.name}
                            onClick={(e) => {
                                handleItemClick(item.name)
                            }}
                        />
                    </Link>
                )
            })
        }
        </Menu>
      </div>
    )
}
