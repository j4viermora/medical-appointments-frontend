import {Container, Button, FormControl, FormLabel, Input, ButtonGroup} from '@chakra-ui/react'
import { useAppSelector } from 'app/hooks'
import { Card, GoToBackButton } from 'components/shared'
import { useFormik } from 'formik'
import { useDoctors } from 'hooks'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
export const DoctorDetails = () => {
  
    const navigate = useNavigate()
    const {currentDoctor} = useAppSelector(state => state.doctors)
    const {updateDoctor, isLoading} = useDoctors()
    const { getFieldProps, handleSubmit} = useFormik({
      initialValues:{
        name: currentDoctor?.name ?currentDoctor?.name : '' ,
        phone: currentDoctor?.phone ? currentDoctor?.phone: ''
      },
      onSubmit:(values) => {
        updateDoctor({name:values.name, phone: values.phone, id: currentDoctor?._id ? currentDoctor?._id  : ''})
      }
    })

    useEffect(() => {
      !currentDoctor?.name && navigate('app') 
    },[])


    return(
      <>
      <Helmet>
        <title>Doctor { `${currentDoctor?.name}`}</title>
      </Helmet>  
      <Container>
        <form onSubmit={handleSubmit}>
        <Card  >
        <FormControl mb='4'>
          <FormLabel>
            Nombre
          </FormLabel>
          <Input {...getFieldProps('name')}/>
        </FormControl>
        <FormControl mb='4'>
          <FormLabel>
            Telefono
          </FormLabel>
          <Input {...getFieldProps('phone')}/>
        </FormControl>
        <ButtonGroup width={'full'}>
          <Button isLoading={isLoading} type='submit' width={'full'} colorScheme='blue'>
            Guardar
          </Button>
        </ButtonGroup>
        </Card>
        </form>
      </Container>
      <GoToBackButton/>
      </> 
      )
}
