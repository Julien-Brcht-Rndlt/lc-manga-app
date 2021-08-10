import React, { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react'
import axios from 'axios'
import MangaCard from './MangaCard'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const FetchLoader = () =>
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>

export default function Home() {

    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [mangaList, setMangaList] = useState([])
    useEffect(() => {
        const getDataFromSearch = async () => {
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`)
                setMangaList(response.data.data)
            } catch(error) {
                console.error(`Error: ${error.message}, while requesting Kitsu API`)
            } finally {
                setIsLoading(false)
            }
        }
        setIsLoading(true)
        setTimeout(getDataFromSearch, 10)
    }, [search])

    const handleSearchInput = (input) => {
        console.log('new search for:', input)
        setSearch(input)
    }

    //if(isLoading) return <FetchLoader/>

    return(
        <>
            <h1>Search for Your favorite Manga!</h1>
            <Input value={search} icon='search' placeholder='Search...' onChange={(event) => handleSearchInput(event.target.value)}/>

            {
                mangaList && mangaList.length > 0 && (

                    mangaList.map((manga, index) => 
                        <MangaCard
                            key={index}
                            canonicalTitle={manga.attributes.canonicalTitle}
                            posterImage={manga.attributes.posterImage}
                            averagerating={manga.attributes.averagerating}
                        />)
                )

            }
        </>
    )
}