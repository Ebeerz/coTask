import { ModalContainer, ModalSubheading, PropertyHeading, ModalHeading, DateContainer, WorkDataContainer, PropertyContainer, DateInput, WorkHours, ProgressContainer, ProgressBar, ProgressValue, DescriptionContainer, DescriptionInput, DependencyContainer, DependencyList, DependencyItem} from "./styles";
import { useState } from "react";

function ModalContent ({task, name}) {
    const [progress, setProgress] = useState(0);
    return (
        <ModalContainer>
            <PropertyContainer>
                <ModalSubheading>Список &quot;{name}&quot;</ModalSubheading>
                <ModalHeading>{task.name}</ModalHeading>
            </PropertyContainer>
            <DateContainer>
                <PropertyContainer>
                    <PropertyHeading>Дата начала</PropertyHeading>
                    <DateInput type="date" value={task.start_date.split('T')[0]} onChange={(e) => console.log(e.target.value)}></DateInput>
                </PropertyContainer>
                <PropertyContainer>
                    <PropertyHeading>Дата завершения</PropertyHeading>
                    <DateInput type="date" value={task.end_date.split('T')[0]} onChange={(e) => console.log(e.target.value)}></DateInput>
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

            <ProgressContainer>
                <PropertyHeading>Прогресс</PropertyHeading>
                <ProgressBar type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(e.target.value)}/>
                <ProgressValue>{progress}%</ProgressValue>
            </ProgressContainer>

            <DescriptionContainer>
                <PropertyHeading>Описание</PropertyHeading>
                <DescriptionInput placeholder="Напишите описание"/>
            </DescriptionContainer>

            <DependencyContainer>
                <PropertyHeading>Зависит от:</PropertyHeading>
                <DependencyList>
                    <DependencyItem>Задача</DependencyItem>
                    <DependencyItem>Задача</DependencyItem>
                    <DependencyItem>Задача</DependencyItem>
                </DependencyList>
            </DependencyContainer>
        </ModalContainer>
    )
}

export default ModalContent