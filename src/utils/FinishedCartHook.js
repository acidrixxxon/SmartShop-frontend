import React from 'react'
import { useSelector } from 'react-redux'



function useFinishedCart() {
    const [ disabled,setDisabled ] = React.useState(true)

    const { cart: { data: { obtaining,payment,client } }} = useSelector(state => state)

    React.useEffect(() => {
        if (obtaining && payment  && client ) {
            setDisabled(false)
        }
    },[obtaining,payment,client])
    return [disabled]
}


export default useFinishedCart