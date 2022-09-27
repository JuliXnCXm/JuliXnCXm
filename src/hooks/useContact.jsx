import React from 'react'

const useContact = () => {

    const [form, setForm] = React.useState({
        name: '',
        email: '',
        topic: '',
        message: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return {
        form,
        handleChange,
        handleSubmit
    }
}

export default useContact