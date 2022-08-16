import { useContext, useState, useEffect } from 'react'

// Dependencies
import { AuthContext } from 'lnx-core-token'

type ToolBox = {
  isReady: boolean,
  generateColor: () => string
}


export const useColor = () : ToolBox => {

  const [isReady, setIsReady] = useState(false)
  const { token } = useContext( AuthContext )

  useEffect(() => {
    
    if (token) setIsReady(true)

  }, [token])

  const generateColor = () : string => {
    
    if (!token) throw new Error("No has configurado un token");

    let color = '#';
    const letters = '0123456789ABCDEF';
  
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;

  }

  return {
    isReady,
    generateColor
  }
}
