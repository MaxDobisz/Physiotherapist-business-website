import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { fontStyle } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '50%' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    color: 'black',
    maxHeight: '80%',
    overflow: 'auto',
    textAlign: 'justify',
};

export const PrivacyPolicyModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box component={'span'} sx={{ color: 'black', fontStyle: 'italic' }}>I agree to the</Box>
            <Button onClick={handleOpen} sx={{ textDecorationLine: 'underline', color: 'black', fontWeight: 400, fontStyle: 'italic' }}>Privacy Policy</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Privacy Policy
                        <br />
                        <br />
                        1. We take your privacy seriously and are committed to protecting your personal data. This policy explains how we collect, use, and store your personal data when you use our website and the EmailJS.
                        <br />
                        <br />
                        2. Data Collection
                        <br />
                        When you use our website, we collect personal data such as your name and email address when you provide it to us. This information is used solely for the purpose of sending an email to us through the EmailJS service.
                        <br />
                        <br />
                        3. Use of Data
                        <br />
                        We use your personal data solely for the purpose of receiving an email from you through the EmailJS service and for replying to your email. We do not use your personal data for any other purposes.
                        <br />
                        <br />
                        4. Data Sharing
                        <br />
                        We do not share your personal data with any third parties, except for the EmailJS service, which is used to send us emails. EmailJS has access to your personal data only for the purpose of sending us emails and is contractually obligated to protect the confidentiality of your personal data.
                        <br />
                        <br />
                        5. Data Retention
                        <br />
                        We will retain your personal data only as long as necessary to fulfill the purpose for which it was collected.
                        <br />
                        <br />
                        6. Data Protection
                        <br />
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage. The EmailJS service also implements appropriate technical and organizational measures to protect your personal data.
                        <br />
                        <br />
                        7. Your Rights
                        <br />
                        You have the right to access, rectify, or delete your personal data that we hold. You can exercise these rights by contacting us at alejandro.physiotherapy@gmail.com.
                        <br />
                        <br />
                        8. By using our website and the EmailJS service, you consent to the collection, use, and storage of your personal data as described in this privacy policy. We reserve the right to update this privacy policy at any time, and any changes will be posted on this page.
                    </Typography>
                </Box>
            </Modal>
        </div >
    );
}