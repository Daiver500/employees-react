import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {
    
    const employees = data.map(item => {
        
        const {name, salary, currency, increase, id} = item;  // деструктуризируем массив

        return (
          <EmployeesListItem name={name} salary={salary} currency={currency} increase={increase} key={id}/> // можно заменить на spread оператор {...item}
        )
     })

     // уникальный идентификатор key должен быть уникальным только для своих соседей
    
    return (
        <ul className="app-list list-group">
           {employees}
        </ul>
    )
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