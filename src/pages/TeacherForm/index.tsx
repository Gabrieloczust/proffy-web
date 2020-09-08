import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'
import './styles.css'

const TeacherForm: React.FC = () => {

    const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

    function addNewScheduleItem() {
        setScheduleItems(prev => [...prev, {
            week_day: 1, from: '', to: ''
        }])
    }

    return (
        <div id="page-teacher-form" className="container">

            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main className="page-teacher-main">

                <fieldset>
                    <legend>Seus dados</legend>
                    <Input
                        label="Nome completo"
                        name="name"
                    />
                    <Input
                        label="Avatar"
                        name="avatar"
                    />
                    <Input
                        label="WhatsApp"
                        name="whatsapp"
                    />
                    <Textarea
                        label="Biografia"
                        name="bio"
                    />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        label="Matéria"
                        name="subject"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Ciências', label: 'Ciências' },
                        ]}
                    />
                    <Input
                        label="Custo da sua hora por aula"
                        name="cost"
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(schedule => {
                        return (
                            <div className="schedule-item" key={schedule.week_day}>
                                <Select
                                    label="Dia da semana"
                                    name="week"
                                    options={[
                                        { value: 'Domingo', label: '0' },
                                        { value: 'Segunda-feira', label: '1' },
                                        { value: 'Terça-feira', label: '2' },
                                        { value: 'Quarta-feira', label: '3' },
                                        { value: 'Quinta-feira', label: '4' },
                                        { value: 'Sexta-feira', label: '5' },
                                        { value: 'Sábado', label: '6' },
                                    ]}
                                />
                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                />
                                <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>

        </div>
    )
}

export default TeacherForm