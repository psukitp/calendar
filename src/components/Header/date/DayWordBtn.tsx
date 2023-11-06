import { DayWordbutton } from "../headerStyled"
import { CurrentDate } from "./CurrentDate"

export const DayWordBtn = () => {

    return (
        <DayWordbutton>
            Сегодня
            <CurrentDate day='01' />
        </DayWordbutton>
    )
}
