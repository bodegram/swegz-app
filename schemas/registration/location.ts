import * as Yup from 'yup'

const locationSchema = Yup.object().shape({
    location: Yup.string().required('location is required')
})

export default locationSchema;