import React, { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react'
import axios from 'axios'

export default function Home() {

    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [mangaList, setMangaList] = useState([])
    useEffect(() => {
        const getDataFromSearch = async () => {
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
                setMangaList(response.data)
            } catch(error) {
                console.error(`Error: ${error.message}, while requesting Kitsu API`)
            } finally {
                setIsLoading(false)
            }
        }
        getDataFromSearch()
    }, [search])

    const handleSearchInput = (input) => {
        console.log('new search for:', input)
        setSearch(input)
    }

    console.log(mangaList)

    return(
        <>
            <h1>Search for Your favorite Manga!</h1>
            <Input value={search} icon='search' placeholder='Search...' onChange={(event) => handleSearchInput(event.target.value)}/>
        </>
    )
}