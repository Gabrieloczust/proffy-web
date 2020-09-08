import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

const TeacherList: React.FC = () => {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers">
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
						label="Hora"
						name="time"
						type="time"
					/>
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>
		</div>
	)
}

export default TeacherList