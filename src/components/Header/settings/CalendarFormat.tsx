import { CalendatFormatDiv } from "../headerStyled"

interface CalendarFormatProps {
    format: string
}

export const CalendarFormat = ({ format }: CalendarFormatProps) => {
    return <CalendatFormatDiv>
        <span>{format}</span>
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 7L11 1" stroke="black" stroke-width="1.3" />
        </svg>
    </CalendatFormatDiv>
}