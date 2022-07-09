import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {
    
    const employees = data.map(item => {
        return (
          <EmployeesListItem name={item.name} salary={item.salary} currency={item.currency} increase={item.increase}/> // можно заменить на spread оператор {...item}
        )
     })
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