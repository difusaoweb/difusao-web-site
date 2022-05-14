import React from 'react'
import { Box, Container, Typography, Stack } from '@mui/material'

import Button from '../../atoms/Button'
import styles from './index.module.scss'
import HeroImageUrl from '../../../assets/images/hero/hero.jpg?url&ts-ignore'
import { contacts } from '../../../store/contacts'
import { theme } from '../../../styles/theme'

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{ backgroundImage: `url(${HeroImageUrl})` }}
      className={styles.section}
      component="section"
    >
      <Box className={styles.BackgoundOpacity} />
      <Container maxWidth="lg" className={styles.container}>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          className={styles.h1}
        >
          Torne{' '}
          <Box style={{ color: theme.colors.danger }} component="span">
            processos manuais
          </Box>{' '}
          mais{' '}
          <Box style={{ color: theme.colors.success }} component="span">
            simples
          </Box>
          ,{' '}
          <Box style={{ color: theme.colors.success }} component="span">
            rápidos
          </Box>{' '}
          e{' '}
          <Box style={{ color: theme.colors.success }} component="span">
            eficazes
          </Box>
          .
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          gutterBottom
          className={styles.h1}
        >
          Invista em uma aplicação mobile ou web.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button content="Solicitar orçamento" href={contacts.whatsapp} />
        </Stack>
      </Container>
    </Box>
  )
}
