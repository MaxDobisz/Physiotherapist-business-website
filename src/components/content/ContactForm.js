import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, IconButton, Snackbar, Stack, TextField, Alert, Checkbox, FormControlLabel, Box } from '@mui/material';
import { Field, useFormik } from 'formik';
import * as yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    message: yup
        .string('Enter your message')
        .min(8, 'message should be of minimum 8 characters length')
        .required('message is required'),
    checked: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions'),
});

export const ContactForm = () => {
    const form = useRef();
    const [open, setOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            checked: false,
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            sendEmail()
        },
    });

    const sendEmail = () => {
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                result.text === 'OK' && setOpen(true);
            }, (error) => {
                console.log(error.text);
            });
        formik.resetForm();
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <>
            <form className='contact__form' ref={form} onSubmit={formik.handleSubmit} >
                <TextField
                    variant="standard"
                    id="email"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ mb: '.5rem' }}
                />
                <TextField
                    variant="standard"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ mb: '.5rem' }}
                />
                <TextField
                    variant="standard"
                    multiline
                    maxRows={10}
                    id="email"
                    name="message"
                    label="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={{ mb: '.5rem' }}
                />
                <Stack display={'flex'} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Checkbox name='checked' value={formik.values.checked} onChange={formik.handleChange} />
                    <PrivacyPolicyModal />
                </Stack>
                {formik.touched.checked && Boolean(formik.errors.checked) && <Box fontSize={'.75rem'} color={'error.main'} textAlign='center'>You need to agree to the privacy policy to send your message.</Box>}
                <Button type='submit' variant='contained' sx={{ color: 'white', p: '.5em 2em', fontSize: '1rem', width: 'max-content', m: '1rem auto' }}>SEND</Button>
            </form>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                action={action}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your message has been sent
                </Alert>
            </Snackbar>
        </>
    );
}