import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/38117382?s=460&u=6e206f61dcf7bb5b7265692be0011c15ce082322&v=4" alt="Gabriel Oczust" />
                <div>
                    <strong>Gabriel Oczust</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorem recusandae?
                <br />
                <br />
                Harum, laborum? Repellat maxime culpa nesciunt id aliquam. Doloribus pariatur itaque natus eveniet optio nostrum officia, laudantium temporibus earum.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button" title="Entrar em contato pelo WhatsApp">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem