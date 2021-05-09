import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

export default function Home() {

    const [search, setSearch] = useState('')

    const handleSearchInput = (input) => {
        setSearch(input)
    }

    return(
        <>
            <h1>Search for Your favorite Manga!</h1>
            <Input value={search} icon='search' placeholder='Search...' onChange={(event) => handleSearchInput(event.target.value)}/>
        </>
    )
}