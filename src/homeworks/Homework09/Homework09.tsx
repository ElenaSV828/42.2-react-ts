//import { ChangeEvent, useEffect, useState } from "react";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework09Component, DogImg,ErrorMessage,Spinner } from "./styles";
import axios from "axios";

//URL адресс,на который нуно отправить запрос и получить данные
const DOG_URL='https://dog.ceo/api/breeds/image/random';


function Homework09(){
const [search,setSearch]=useState<string>('');
const [note,setNote]=useState<string>('');
const[dogImageUrl,setDogImageUrl]=useState< string | undefined>(undefined);
//создаем место где будем хранить ошибку 2 useState
const[error,setError]=useState<any>(undefined);
const[isLooding,setIsLooding]=useState<boolean>(false);

const onSearchChange=(event:ChangeEvent<HTMLInputElement>)=>{
setSearch(event.target.value)
}

const onNoteChange=(event:ChangeEvent<HTMLInputElement>)=>{
setNote(event.target.value)
}

//Обработка запроса Запишем отдельну функци
const getDogPhoto = async ()=>{
//чтобы при новом запросе картинка исчезла,затем появился спинер
setDogImageUrl(undefined) ;
setError(undefined) 

try{
    setIsLooding(true)    
const response =await axios.get(DOG_URL);
//пример работы с отправкой запроса POST (к домашней работе не имеет отношения)
      // const response = await axios.post(url, {
      //    name: 'Bob',
      //    email: 'bob@gmail.com'
      // });

      
//для отображения запроса.обьекта,который при вводе в поле приходит в виде обекта
//console.log(response);
//для отображения картинки
setDogImageUrl(response.data.message)
}catch (error: any){
//console.log(error);
setError(error)
}finally{
    setIsLooding(false)

}

};

useEffect(()=>{
getDogPhoto ()
},[search])

return(
<Homework09Component>
 <Input name='search'  placeholder="Enter word" value={search} onChange={onSearchChange}/> 
 <Input name='note'  placeholder="Enter note" value={note} onChange={onNoteChange}/> 
{dogImageUrl  && <DogImg src={dogImageUrl}alt='random dog'/>}
{error && <ErrorMessage>{error.message}</ErrorMessage>}
{isLooding && <Spinner></Spinner>}


</Homework09Component>



)
}

export default Homework09;


