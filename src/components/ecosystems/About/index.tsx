import React from 'react'
import { Container, Typography, Box, Grid, Divider } from '@mui/material'

import styles from './index.module.scss'
import SubestacaoImage from '../../../assets/images/about/subestacao.jpg?ts-ignore'

const About: React.FC = () => {
  return (
    <Box id="about" className={styles.section} component="section">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              alt="Saiba mais sobre nós"
              src={SubestacaoImage.src}
              className={styles.img}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" className={styles.h2}>
              Saiba mais sobre nós
            </Typography>
            <Box
              justifyContent="center"
              alignContent="center"
              className={styles.divDivider}
            >
              <Divider className={styles.divider} />
            </Box>
            <Typography component="p" variant="subtitle1" className={styles.p}>
              Somos a W3 ELÉTRICA, desde de 2019 trazendo para o mercado
              soluções em planejamento, execuções e manutenções em sistema de
              baixa, média e alta tensão.
            </Typography>
            <Typography component="p" variant="subtitle1" className={styles.p}>
              Atuando em todo o nordeste com projetos, instalações e manutenções
              em subestações e redes elétrica de 13.8k/69kv. Prestando serviços
              de alta qualidade nas maiores industriais, termoelétricas e usinas
              solar, com nossas equipes qualificadas treinadas e capacitadas com
              equipamentos qualidade.
            </Typography>
            <Typography component="p" variant="subtitle1" className={styles.p}>
              Nosso escritório está atualmente em: R. Francisco Nogueira Da
              Silva, 504 - Boa Vista, Fortaleza - CE, 60867-670
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
