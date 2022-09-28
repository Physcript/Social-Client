
import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/auth/context'   
import {mainPost} from '../hook/mainPost'


export function MainPage() {
  const [ data,setData ] = useState([])		  
  const [ loading,setLoading ] = useState<boolean>(false) 
  const [ limit,setLimit ] = useState<number>(10)
  const [ skip,setSkip ] = useState<number>(0)

  const userContext = useContext(AuthContext)
  const navigate = useNavigate()
  const { post } = mainPost(userContext.userState.USER.uid ?? '',loading,limit,skip) 
 
  if(userContext.userState.STATUS === true && userContext.userState.COMPLETION === false)
    {
      navigate('/complete')
    }

  useEffect(()=>{
     setData(post) 
  },[post])
  return (
    <div>
      Main page
    </div>
  )
}
