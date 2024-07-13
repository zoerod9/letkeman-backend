import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import * as authenticationController from "../controllers/authentication"


export default function SignUpPage() {
    const [firstName, setFirstName] = useState("")
    const [lastNname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleFirstNameChange = (event) => { setFirstName(event.target.value) }
    const handleLastNameChange = (event) => { setLastName(event.target.value) }
    const handleEmailAddressChange = (event) => { setEmail(event.target.value) }
    const handleUsernameChange = (event) => { setUsername(event.target.value) }
    const handlePasswordChange = (event) => { setPassword(event.target.value) }
    const handleConfirmPasswordChange = (event) => { setConfirmPassword(event.target.value) }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log("my username is", username)
        console.log("my password is", password)
        console.log("my email address is", email)
        authenticationController.createUser({username, password, email})
    }


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            background: '#807777',
            paddingTop: 10,
            paddingBottom: 10
        }}>
            <Stack spacing={6} direction="column" sx={{
                minWidth: "450px",
                maxHeight: "800px",
                background: '#ECECEC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h2" component="h1">
                    Register
                </Typography>
                <form id="register-form" onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="column">
                        <TextField onChange={handleFirstNameChange} id="First name" label="First name" variant="outlined" sx={{ width: "27ch" }} />
                        <TextField onChange={handleLastNameChange} id="Last name" label="Last name" variant="outlined" sx={{ width: "27ch" }} />
                        <TextField onChange={handleEmailAddressChange} id="Email address" label="Email address" variant="outlined" sx={{ width: "27ch" }} />
                        <TextField onChange={handleUsernameChange} id="username" label="Username" variant="outlined" sx={{ width: "27ch" }} />
                        <TextField onChange={handlePasswordChange} id="password" type="Password" label="Password" variant="outlined" sx={{ width: "27ch" }} />
                        <TextField onChange={handleConfirmPasswordChange} id="confirmPassword" type="Confirm password" label="Confirm password" variant="outlined" sx={{ width: "27ch" }} />
                        <FormControlLabel required control={<Checkbox />} label="I accept the terms and conditions " /> 
                    </Stack>
                </form>
                <Box sx={{
                    marginX: 90,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button form="register-form" type="submit" variant="contained" sx={{
                        width: 100
                    }}>Register</Button>
                </Box>
                <Typography variant="body1">
                    Already have an account? <Link href="/login">Sign in here</Link>
                </Typography>
            </Stack>
        </Box>

    );
}
