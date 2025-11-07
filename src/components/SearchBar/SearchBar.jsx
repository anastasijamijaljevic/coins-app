    import { Input } from "./SearchBar.styles"

    export const SearchBar = ({ searchTerm, onChange }) => {
        return(
            <Input
                type="text"
                placeholder="Search cryptos"
                value={searchTerm}
                onChange={onChange}
            />
        )

    }