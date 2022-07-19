import { queryDoctors, registerDoctor } from 'api'
import { useAppSelector } from 'app/hooks';
import { setDoctors, setLoading, setMetadata } from 'features/doctors/doctorsSlice';
import { useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';


export const useDoctors = () => {
    const dispacth = useDispatch()
    const toast = useToast()
    const { company: { _id: companyId } } = useAppSelector(state => state.session)
    const { doctors, isLoading, metadata } = useAppSelector(state => state.doctors)



    const getDoctors = async () => {
        dispacth(setLoading(true))
        try {
            const { data } = await queryDoctors({ companyId })
            const { result: { docs, ...rest } } = data
            dispacth(setDoctors(docs))
            dispacth(setMetadata({ ...rest }))
        } catch (error: any) {
            toast({
                title: 'Opss',
                description: 'Algo salio mal al consultar  a los doctores',
                status: 'error'
            })
        } finally {
            dispacth(setLoading(false))
        }
    }

    interface AddDoctorProps { name: string, phone: string, resetForm: () => void }

    const addDoctor = async ({ name, phone, resetForm }: AddDoctorProps) => {
        dispacth(setLoading(true))
        try {
            await registerDoctor({ companyId, name, phone })
            toast({ title: 'Registro exitoso', status: 'success' })
            resetForm && resetForm()
        } catch (error) {
            toast({ title: 'Error', status: 'error', description: 'Algo salio mal mientras se registraba al doctor' })
            return false
        } finally {
            dispacth(setLoading(false))
        }
    }
    const updateDoctor = () => { }
    const deleteDoctor = () => { }


    return {
        getDoctors,
        addDoctor,
        updateDoctor,
        deleteDoctor,
        doctors,
        isLoading,
        metadata
    }
};
