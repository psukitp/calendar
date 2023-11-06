import { DatePickerDiv } from "../headerStyled"

interface DateProps {
    date: string
}

export const DatePicker = ({ date }: DateProps) => {
    return <DatePickerDiv>
        {date}
    </DatePickerDiv>
}