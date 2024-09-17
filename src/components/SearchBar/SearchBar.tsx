import './SearchBar.css'

import search from '../../assets/svg/search.svg'

interface SearchBarProps {
    searchText: string,
    handleSetSearch: (textToSearch: string) => void
}

export const SearchBar = ({ searchText, handleSetSearch}: SearchBarProps) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        setTimeout(() => {
            console.log(e.target.value)
            handleSetSearch(e.target.value)
        }, 2500);
    }

    return <>
        <div id='SearchBar'>
            <img src={search} alt="" />
            <input type="text" placeholder='Buscar una canción' onChange={handleChange} />
        </div>
    </>
}