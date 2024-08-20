import './footer.css'
import { IconFacebook, IconInstagram, IconGithub, IconLinkedIn, IconVisa, IconMasterCard, IconAmericanExpress } from '../../Icons/Icons'
import logoFooter from '/src/img/gral/logo-footer.png'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='fat-footer'>
        <article className='img-logo-footer header-fat-footer'>
          <figure>
            <img src={logoFooter} alt="" />
          </figure>
        </article>
        <section className='container-content-fat-footer'>
          <section className='content-fat-footer'>
            <article>
              <h3>LINKS DE INTERÉS</h3>
              <ul className='interest-links-footer'>
                <li>Ofertas</li>
                <li>Preguntas Frecuentes</li>
                <li>Método de Entregas</li>
                <li>Términos y Condiciones</li>
                <li>Políticas de Privacidad</li>
                <li>Ley de Defensa al Consumidor</li>
              </ul>
            </article>
            <article>
              <h3>CONTACTO</h3>
              <article className='contact-footer'>
                <strong>Loreenfernandez.14@gmail.com</strong>
                <strong>Tandil, Bs As Argentina.</strong>
              </article>
            </article>
          </section>
          <section className='networks-payment-footer'>
            <article>
              <h3>SEGUINOS EN NUESTRAS REDES</h3>
              <article className='btns-follow-networks-footer'>
                <figure className='icon-follow-networks-footer'>
                  <IconFacebook />
                </figure>
                <figure className='icon-follow-networks-footer'>
                  <IconInstagram />
                </figure>
                <a href="https://github.com/LorennFdz" target='_blank'>
                  <figure className='icon-follow-networks-footer'>
                    <IconGithub />
                  </figure>
                </a>
                <a href="https://www.linkedin.com/in/lorenzofdz08/" target='_blank'>
                  <figure className='icon-follow-networks-footer'>
                    <IconLinkedIn />
                  </figure>
                </a>
              </article>
            </article>
            <article>
              <h3>Medios de Pago</h3>
              <article className='payment-methods-footer'>
                <figure className='icon-payment-methods-footer'>
                  <IconVisa />
                </figure>
                <figure className='icon-payment-methods-footer'>
                  <IconMasterCard />
                </figure>
                <figure className='icon-payment-methods-footer'>
                  <IconAmericanExpress />
                </figure>
              </article>
            </article>
          </section>
        </section>
      </section>
      <section className='fit-footer'>
        <article>
          <span>© 2024 Supermarket Online. Todos los derechos reservados.</span>
        </article>
        <article>
          <strong>Desarrollado por Lorenzo Fernández</strong>
        </article>
      </section>
    </footer>
  )
}