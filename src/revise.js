


const Toolbar = styled(MuiToolbar)({
    width: '100%',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '12px',
    flexShrink: 0,
    [`& ${tabsClasses.flexContainer}`]: {
        gap: '8px',
        p: '8px',
        pb: 0,
    },
});

export default function AppNavbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
         position="fixed"
         sx={{
            display: { xs: 'auto', md: 'none'},
            boxShadow: 0,
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider',
            top: 'var(--template-frame-height, 0px)'
         }}
        >

        </AppBar>
    )
}