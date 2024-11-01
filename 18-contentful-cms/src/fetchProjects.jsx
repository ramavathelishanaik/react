import { createClient } from 'contentful';
import { useState,useEffect } from 'react';

const client = createClient({
  space: 'pu9hujf66y4h',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});


const GetProjectsData=()=>{
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([])

    const getData=async()=>{
        try {
            const response = await client.getEntries({ content_type: 'projects' });
            const data=response.items.map((item)=>{
                const {title,url,image} = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return {title,url,id, img}
            })
            setProjects(data);
            setLoading(false)
            
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }

    }

    useEffect(()=>{
        getData()

    },[])


    return {loading,projects}

    

}
export default GetProjectsData;

