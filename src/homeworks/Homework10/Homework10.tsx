import { Homework10Container,CatContainer, CatImg,ButtonContainer} from "./styles";
import {  useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";


const CAT_URL=' https://catfact.ninja/fact';

function Homework10 (){
const  [catFact,setCatFact]=useState<string>('')
const[isLooding,setIsLooding]=useState<boolean>(false);
//const[error,setError]=useState<any>(undefined);
const getCatFact=async()=>{
  
try{
    
        setIsLooding(true);
const response =await axios.get(CAT_URL);

setCatFact(response.data.fact)
}catch (error){
console.log(error);
//setError(error)
}finally{
    setIsLooding(false)

}

};
const clearCatFact=() =>{
    setCatFact('');
}






useEffect(()=>{
    getCatFact()
    },[catFact])
    


return(

<Homework10Container>
<CatContainer>
<CatImg src=''alt='random cat'/>
</CatContainer>

<ButtonContainer>
<Button name='GET MORE INFO' onClick={getCatFact} />
<Button name='DELETE ALL DATA' onClick={clearCatFact}disabled={isLooding}/>
</ButtonContainer> 

</Homework10Container>


)



}

export default Homework10;