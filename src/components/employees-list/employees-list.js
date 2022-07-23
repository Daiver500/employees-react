import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Component } from "react/cjs/react.production.min";

class EmployeesList extends Component {

    render() {
        
        const {data} = this.props
        const {deleteItem} = this.props
        const {changeIncrease} = this.props
        const {changeLike} = this.props
       
        const employees = data.map(item => { 
          const {name, salary, currency, increase, like, id} = item;  
          // деструктуризируем массив
    
          return (
            <EmployeesListItem 
              name={name} 
              salary={salary} 
              currency={currency} 
              increase={increase} 
              like={like}
              key={id} 
              deleteItem={()=>deleteItem(id)}
              changeIncrease={()=>changeIncrease(id)}
              changeLike={()=>changeLike(id)}
              /> 
              // можно заменить на spread оператор {...item}
          )
           
           // уникальный идентификатор key должен быть уникальным только для своих соседей
         })

    return (
        <ul className="app-list list-group">
           {employees}
        </ul>
    )
    }
}

export default EmployeesList;

/*  // УПРОЩЕННЫЙ ВАРИАНТ КАК ПРИМЕР
const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Aleksey" salary="1000" currency="$"/>
            <EmployeesListItem name="Julia" salary="300" currency="₽"/>
            <EmployeesListItem name="Ivan" salary="500" currency="€"/>
        </ul>
    )
}

export default EmployeesList;*/