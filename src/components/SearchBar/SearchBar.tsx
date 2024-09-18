import './SearchBar.css'

import search from '../../assets/svg/search.svg'
import { useRef } from 'react'

interface SearchBarProps {
    searchText: string,
    handleSetSearch: (textToSearch: string) => void
}

export const SearchBar = ({ searchText, handleSetSearch }: SearchBarProps) => {

    const searchRef = useRef<HTMLInputElement | null>(null)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        setTimeout(() => {
            handleSetSearch(e.target.value)

        }, 2500);
    }


    return <>
        <div id='SearchBar'>
            <img src={search} alt="" />
            <input type="text" placeholder='Buscar una canción' onInput={handleChange} ref={searchRef} />
        </div>
    </>
}