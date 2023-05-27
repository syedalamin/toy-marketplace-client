import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = ` BD Toys - ${title} `;
    },[title])
};

export default useTitle;