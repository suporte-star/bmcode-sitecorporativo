'use client'
import Image from 'next/image';
import styles from './Aboutus.module.css';
import AnimatedSection from '@/components/utils/Animations/AnimatedSection'

export default function Aboutus() {
  return (
    <section className={styles.ContentAbout} id='aboutus'>
      <p className={styles.titleParagraf}>Quem Somos</p>
      <h1 className={styles.titleAbout}>EMPRESA DE TECNOLOGIA E DESENVOLVIMENTO</h1>

      <section className={styles.boxContentAbout}>
        <AnimatedSection className={styles.animatedSection}>
          <div className={styles.contentAbout}>
            <div className={styles.contentDescrition}>
              <p>Fundada em 2021, a BMcode nasceu com o propósito de impulsionar resultados por meio da tecnologia, oferecendo soluções inteligentes que otimizam processos, aumentam a eficiência operacional e potencializam o desempenho dos projetos de nossos clientes.</p>
              <br />
              <p>Atuamos com total responsabilidade, integridade e comprometimento, garantindo um atendimento ágil e suporte técnico contínuo, disponível 24 horas por dia. Nossa equipe é formada por profissionais altamente qualificados, especializados no desenvolvimento, implementação e gestão de sistemas corporativos personalizados, voltados para automação, produtividade e inovação.</p>
              <br />
              <p>Acreditamos que a tecnologia é o caminho para transformar desafios em oportunidades, promovendo crescimento sustentável, simplicidade nos processos e excelência em cada entrega. Na BMcode, nossa missão é conectar estratégia e inovação para elevar o potencial de cada negócio que confia em nossas soluções.</p>
            </div>
            <div className={styles.CardContainer}>
              <div className={styles.badge}>
                <span className={styles.Number}>4</span>
                <div className={styles.Text}>
                  <p>Anos De Experiência</p>
                  <p>Empresarial</p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.dimensionImage}>
                  <img
                    src="./image/Data-01.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className={styles.animatedSection}>
          <div className={styles.contentAbout}>
            <div className={styles.CardContainer}>
              <div className={styles.badge}>
                <div className={styles.Text}>
                  <p>Nosso Compromisso</p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.dimensionImage}>
                  <img
                    src="./image/Data.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.contentDescrition}>
              <p>Nosso objetivo é elevar o padrão do mercado de tecnologia, criando soluções que combinam inovação, eficiência e design de ponta. Acreditamos que a tecnologia deve ser mais do que funcional, ela deve inspirar, facilitar e transformar a forma como pessoas e empresas se conectam com o mundo. </p>
              <br />
              <p>Por isso, trabalhamos com um olhar voltado para o futuro, utilizando metodologias modernas, ferramentas avançadas e boas práticas que garantem alto desempenho e resultados concretos. Cada projeto é desenvolvido com cuidado, estratégia e paixão, buscando não apenas atender, mas superar as expectativas de nossos clientes.</p>
              <br />
              <p>Nosso compromisso é entregar produtos digitais que sejam referência em qualidade, performance e experiência do usuário. Dessa forma, contribuímos para o crescimento do setor e para a evolução do mercado tecnológico, sempre com a missão de transformar ideias em soluções reais que geram impacto positivo e duradouro.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className={styles.animatedSection}>
          <div className={styles.contentAbout}>
            <div className={styles.contentDescrition}>
              <p>Somos especialistas na execução de projetos personalizados e na sustentação completa do ERP Sankhya, oferecendo um suporte técnico e estratégico que garante estabilidade, eficiência e inovação contínua aos nossos parceiros.</p>
              <br />
              <p> Nossa equipe é formada por profissionais experientes e apaixonados por tecnologia, comprometidos em compreender profundamente as necessidades de cada cliente para desenvolver soluções sob medida que maximizem resultados. Atuamos com foco na melhoria constante dos processos empresariais, integrando tecnologia e gestão para otimizar a performance operacional e impulsionar o crescimento sustentável dos negócios.</p>
              <br />
              <p>Mais do que implementar sistemas, buscamos criar experiências que tragam valor real, promovendo agilidade, segurança e inteligência nas decisões corporativas. Nosso compromisso é ser um parceiro de confiança, que entrega excelência em cada etapa do projeto e contribui para a evolução tecnológica e estratégica de cada empresa que atendemos.</p>
            </div>
            <div className={styles.CardContainer}>
              <div className={styles.badge}>
                <div className={styles.Text}>
                  <p>Nosso Diferencial</p>
                </div>
              </div>
              <div className={styles.Card}>
                <div className={styles.dimensionImage}>
                  <img
                    src="./image/Data-02.png"
                    alt=""
                  />  
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </section >
  )
}