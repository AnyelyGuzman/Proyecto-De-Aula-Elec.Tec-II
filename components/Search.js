import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react'

export default function Cabecera() {
   
    const [search] = useState('')

    const updateSearch = (search) => {
        this.setState({ search });
    };

    return (
        <SearchBar containerStyle={{backgroundColor: '#ffffff'}} inputStyle={{backgroundColor: '#ffffff'}} inputContainerStyle ={{backgroundColor: '#ffffff'}}
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
        />
    );
}
