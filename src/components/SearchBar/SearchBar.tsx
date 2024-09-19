import './SearchBar.css'
import debounce from 'just-debounce-it'

import search from '../../assets/svg/search.svg'
import { useCallback, useRef } from 'react'

interface SearchBarProps {
    handleSetSearch: (textToSearch: string) => void
}

export const SearchBar = ({ handleSetSearch }: SearchBarProps) => {

    const searchRef = useRef<HTMLInputElement | null>(null)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        e.preventDefault()
        debounceSearch(e.target.value)
    }

    const debounceSearch = useCallback(
        debounce((value: string) => handleSetSearch(value), 1000), [])


    return <>
        <div id='SearchBarContainer'>
            <div id='SearchBar'>
                <img src={search} alt="" />
                <input type="text" placeholder='Buscar una canción' onInput={handleChange} ref={searchRef} />
            </div>
        </div>
    </>
}