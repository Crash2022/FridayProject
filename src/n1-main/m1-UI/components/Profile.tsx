import React, {useState} from 'react';
import {SuperButton} from "../UI kit/Button/SuperButton";
import {SuperInputText} from "../UI kit/Input/SuperInputText";
import SuperCheckbox from "../UI kit/Checkbox/SuperCheckbox";

export const Profile = () => {
    const [text, setText] = useState<string>('');
    const error = text ? '' : 'Поле обязательно для заполнения'

    const showAlert = () => {
        if (error) {
            alert('Не трогай код!')
        } else {
            alert(text) // если нет ошибки показать текст
            setText('')
        }
    }

    return (
        <div>
            <div>
                Profile UPLOAD TO GITHUB --- Test SuperComponents
            </div>
            <div>
                <SuperButton>
                    Test Button
                </SuperButton>
            </div>
            <div>
                <SuperInputText/>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
        </div>
    )
}