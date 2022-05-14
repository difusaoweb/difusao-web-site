import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  Link
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import Img from 'react-optimized-image'

import styles from './index.module.scss'
import logoMenu from '../../../assets/images/logo.png?ts-ignore'

export const HeaderBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const pages = [
    ['services', 'Soluções'],
    ['cases', 'Cases'],
    ['clients', 'Clientes'],
    ['about', 'Sobre'],
    ['contact', 'Contato']
  ]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <AppBar position="sticky" className={styles.header}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className={styles.divLogo}>
              <Img src={logoMenu} sizes={[137]} alt="Difusão Web logo" />
            </Box>

            <Box
              className={styles.divMenuMobile}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <IconButton
                size="large"
                aria-label="Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                className={styles.iconMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
                className={styles.menu}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link className={styles.a} href={`#${page[0]}`}>
                      {page[1]}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              className={styles.divMenuDesktop}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map((page, index) => (
                <Button key={index} href={`#${page[0]}`} className={styles.a}>
                  {page[1]}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
