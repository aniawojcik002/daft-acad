import {useState, useEffect} from "react";


const localStorageKey = 'inputValue';

export const InputForm = (props) => {
  const [displayError, setDisplayError] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (event) => {
    const messageLength = event.target.value.length;
    setInputValue(event.target.value);
    if (messageLength < 3 || messageLength > 20) {
        if (messageLength < 3) {
            setErrorMessage('User name are to short')
        }
        if (messageLength > 20) {
            setErrorMessage('User name are to long')
        }
        setDisplayError(true)
    } else {
        setDisplayError(false)
        setErrorMessage('')
    }
  }
  const handleSubmit = () => {
    if ( !(displayError || !inputValue)) {
        localStorage.setItem(localStorageKey, inputValue)
    }
  }
    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(localStorageKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props.defaultProps) {
                valueToSet = props.defaultProps;
            }
        }

    setInputValue(valueToSet);
}, [])
    return <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
            {displayError && <div>{errorMessage}</div>}
            <div>User name:</div>
            <input onInput={handleInputChange} value={inputValue} type="text"/>
            <br/>
            <button className={'submitButton'} onClick={handleSubmit} disabled={(displayError || !inputValue)}>Submit</button>
        </div>
}
