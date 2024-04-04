import { ModalContainer, PropertyHeading, ModalHeading, DateContainer, WorkDataContainer, PropertyContainer, DateInput, WorkHours, ProgressContainer, ProgressBar, ProgressValue, DescriptionContainer } from "../dashboard-modal/styles";
import { PropertyText } from "./styles";
function RoadmapModal ({task}) {
    const progress = (0);
    return (
        <ModalContainer as={'div'}>
            <PropertyContainer>
                <ModalHeading>{task.name}</ModalHeading>
            </PropertyContainer>

            <ProgressContainer>
                <PropertyHeading>Прогресс</PropertyHeading>
                <ProgressBar readOnly type="range" min="0" max="100" value={progress}/>
                <ProgressValue>{progress}%</ProgressValue>
            </ProgressContainer>

            <DescriptionContainer>
                <PropertyHeading>Команда</PropertyHeading>
                <PropertyText>Название команды</PropertyText>
            </DescriptionContainer>

            <DateContainer>
                <PropertyContainer>
                    <PropertyHeading>Дата начала</PropertyHeading>
                    <DateInput readOnly as={'span'}>{task.start_date.split('T')[0]}</DateInput>
                </PropertyContainer>
                <PropertyContainer>
                    <PropertyHeading>Дата завершения</PropertyHeading>
                    <DateInput readOnly as={'span'}>{task.end_date.split('T')[0]}</DateInput>
                </PropertyContainer>
            </DateContainer>

            <WorkDataContainer>
                <PropertyContainer>
                    <PropertyHeading>Трудоёмкость (ч/день)</PropertyHeading>
                    <WorkHours>{task.duration}</WorkHours>
                </PropertyContainer>
                <PropertyContainer>
                    <PropertyHeading>Исполнитель</PropertyHeading>
                </PropertyContainer>
            </WorkDataContainer>

            <DescriptionContainer>
                <PropertyHeading>Описание</PropertyHeading>
                <PropertyText>Текст описания</PropertyText>
            </DescriptionContainer>

        </ModalContainer>
    )
}

export default RoadmapModal