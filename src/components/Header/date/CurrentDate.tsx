import { CurrentDateDiv } from "../headerStyled"

interface DayProps {
    day: string
}

export const CurrentDate = ({ day }: DayProps) => {
    return (
        <CurrentDateDiv>
            {day}
        </CurrentDateDiv>
    )
}