
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function LoginPage() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            background: '#807777',
            paddingTop: 15
        }}>
            <Stack spacing={6} direction="column" sx={{
                minWidth: "450px",
                maxHeight: "500px",
                background: '#ECECEC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="h2" component="h1">
                    Log in
                </Typography>
                <form>
                    <Stack spacing={2} direction="column">
                        <TextField id="username" label="Username" variant="outlined" sx={{ width: "27ch" }} />
                        <TextField id="password" label="Password" variant="outlined" sx={{ width: "27ch" }} />
                        <Link href="/forgot">Forgot password?</Link>
                    </Stack>
                </form>
                <Box sx={{
                    marginX: 20,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button variant="contained" sx={{
                        width: 100
                    }}>Sign in</Button>
                </Box>
                <Typography variant="body1">
                    Don't have an account? <Link href="/register">Register here</Link>
                </Typography>
            </Stack>
        </Box>

    );
}
