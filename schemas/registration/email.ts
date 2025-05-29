import * as Yup from 'yup'

const emailSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email address is required')
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        )
})

export default emailSchema