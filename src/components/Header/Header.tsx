import { OpenSiderBtn } from "./sider/OpenSiderBtn";
import { DayWordBtn } from "./date/DayWordBtn";
import { MonthArrows } from "./date/MonthArrows";
import { DatePicker } from "./date/DatePicker";
import { CalendarFormat } from "./settings/CalendarFormat";
import { DateDiv, HeaderDiv, MockLogo, SettingsDiv, SiderDiv } from "./headerStyled";

export const Header = () => {
    return (
        <HeaderDiv>
            <SiderDiv>
                <OpenSiderBtn />
                <MockLogo>Logo</MockLogo>
            </SiderDiv>
            <DateDiv>
                <DayWordBtn />
                <MonthArrows />
                <DatePicker date='Январь 2024' />
            </DateDiv>
            <SettingsDiv>
                <MockLogo>
                    settings
                </MockLogo>
                <CalendarFormat format='4 дня' />
                <MockLogo>
                    account
                </MockLogo>
            </SettingsDiv>
        </HeaderDiv>
    );
}
