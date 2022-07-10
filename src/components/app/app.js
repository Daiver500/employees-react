import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

  // Массив с моковыми данными 

  const data = [
    {
      name: "Aleksey",
      salary: 1000,
      currency: "$",
      increase: false,
      id: 1,
    },
    {
      name: "Julia",
      salary: 300,
      currency: "₽",
      increase: true,
      id: 2,
    },
    {
      name: "Ivan",
      salary: 500,
      currency: "€",
      increase: false,
      id: 3,
    }
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}  /* сюдаем передаем моковые данные*/ />
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
