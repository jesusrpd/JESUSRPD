import { useEffect, useState } from 'react';
import axios from 'axios';

const useSkill = (url)=>{

    const [skill, setSkill] = useState([]);

    useEffect(()=>{
        const getSkill = async ()=>{
            const res = await axios.get(url);
            setSkill(res.data);
        };
        getSkill();
    },[url]);

    return {skill};
};

export default useSkill;