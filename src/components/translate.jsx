import { useEffect, useState } from "react"

const Translate =()=>{
    let[language,setLanguages]= useState(null);
    useEffect(()=>{
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};
    fetch(url,options)
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data.data.languages);
        setLanguages(data.data.languages)})
    },[])
    
    return (
        <div className="translate-page">
            <h1>Language Translator</h1>
            <hr />
            <textarea name="" id="" cols="100" rows="1"></textarea>

            {language!=null &&<select>
                <option value="">---SELECT---</option>
                {
                    language.map((v)=>{return(<option>{v.language}</option>)})
                }
            </select>}
        </div>
    );
}
export default Translate;