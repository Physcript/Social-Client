

import React, { useState,useEffect,useCallback } from 'react'

export function mainPost (uid = '', _loading, _limit=5, _skip = 0) {
  
  const [ post, setPost ] = useState([])
  const [ loading,setLoading ] = useState(_loading)
  const [ error,setError ] = useState<any>()
  const [ limit, setLimit ] = useState<number>(_limit)
  const [ skip,setSkip ] = useState<number>(_skip)
  const url = 'http://localhost:1337/api/p/main'


  const body = JSON.stringify({
   limit,
   skip,
   uid
  })

  const _request = new Request(url, {
      headers: { "Content-Type": 'application/json', "token": localStorage.getItem('token') },
  }) 

  const refresh = () => {
    
    fetch(_request)
      .then((res) => {
        if(res.status === 200) 
          {
            res.json().then((val) => {
              setPost(val.message.post)
            })
          }
      }) 

    
         
  }

  useEffect(() => {
    
    refresh()

  },[])
  
  return { post }

}
