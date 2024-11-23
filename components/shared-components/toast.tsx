import { useToast } from '@chakra-ui/react'

export interface ToasterPropTypes {
    display: boolean
    status: 'success' | 'error' | 'warning' | 'info'
    title: string
    message: string
}


const Toaster: React.FC<ToasterPropTypes> = ({display, status, title, message}) => {
    const toast = useToast()
    return(
        <>
        {
            display && (
                    toast({
                    title: title,
                    status: status,
                    duration: 10000,
                    isClosable: true,
                    description: message,
                })
            ) 
            
        }
        </>
    )
}

export default Toaster