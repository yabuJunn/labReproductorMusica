import './SearchBar.css'

import search from '../../assets/svg/search.svg'

interface SearchBarProps {
    searchText: string
}

export const SearchBar = ({ searchText }: SearchBarProps) => {

    return <>
        <div id='SearchBar'>
            <img src={search} alt="" />
            <input type="text" placeholder='Buscar una canción' value={searchText} />
        </div>
    </>
}