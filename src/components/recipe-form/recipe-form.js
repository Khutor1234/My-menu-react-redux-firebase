import { Component } from 'react';

import './recipe-form.sass';

export default class RecipeForm extends Component {
    
    render() {

        let element = [];
        let id = 1;
        const {category, onAdd} = this.props;

        for (let key in category) {
            if(category[key]){
                element.push(key);
            };
        };

        const elements = element.map((item) => {
            if(item == 'breakfast'){
                item = 'Завтрак';
            } ;
            if(item == 'lunch'){
                item = 'Обед';
            };
            if(item == 'dinner'){
                item = 'Ужин';
            };

            return (
                <option key = {id++} value = {item} >{item}</option>
            );
        });


        return(
            <div className = "input-group menu-form">
                <select className = "form-select">
                    <option selected>Прием еды</option>
                    {elements}
                </select>
                <input type="text" className = "form-control"  placeholder='Порции'/>
                <button className = "btn btn-outline-secondary" 
                    type="button"
                    onClick = {() => onAdd('hhi')} 
                    >Добавить</button>
            </div>
        );
    };
};