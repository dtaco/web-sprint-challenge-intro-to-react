//Character details go here.
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CharacterDetails(props) {
    const [details, setDetails] = useState(null);

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/people/?format=json`)
    }, [])
}