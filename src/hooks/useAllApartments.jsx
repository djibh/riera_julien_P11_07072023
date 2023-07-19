import { useEffect, useState } from "react";

function useAllApartments() {
    const [apartments, setApartments] = useState([])

    useEffect(() => {
        fetch("db.json")
            .then((res) => res.json())
            .then((res) => setApartments(res))
            .catch(console.error)
    }, [])
    return apartments
}

export default useAllApartments