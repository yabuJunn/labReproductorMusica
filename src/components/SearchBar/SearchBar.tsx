import './SearchBar.css'

import search from '../../assets/svg/search.svg'
import { useState } from 'react'

interface SearchBarProps {
    searchText: string,
    handleSetSearch: (textToSearch: string) => void
}

export const SearchBar = ({ searchText, handleSetSearch }: SearchBarProps) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        console.log(e.target.value)
        handleSetSearch(e.target.value)
    }

    return <>
        <div id='SearchBar'>
            <img src={search} alt="" />
            <input type="text" placeholder='Buscar una canción' value={searchText} onChange={handleChange} />
        </div>
    </>
}