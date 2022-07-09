import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Aleksey" salary="1000" currency="$"/>
            <EmployeesListItem name="Julia" salary="300" currency="₽"/>
            <EmployeesListItem name="Ivan" salary="500" currency="€"/>
        </ul>
    )
}

export default EmployeesList;