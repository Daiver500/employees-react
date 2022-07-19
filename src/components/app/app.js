import { Component } from "react/cjs/react.production.min";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {   // моковые данные будем менять как state в зависимости от добавления\удаления сотрудников
      data: [
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
    }
    this.id = 4;
  }

  deleteListItem = (id) => {
    this.setState(({data}) => {
      /*МЕТОД 1

       const indexOfListElement = data.findIndex(item => item.id === id); // находим индекс каждого элемента массива (списка)
       
       const deleteItemBeforeIndexElement = data.slice(0, indexOfListElement); // удаляем элементы до index
       const deleteItemAfterIndexElement = data.slice(indexOfListElement + 1); // удаляем элементы после index
       const newData = [...deleteItemBeforeIndexElement, ...deleteItemAfterIndexElement] // новый массив из оставшихся элементов
       */

       return {
         /*  К МЕТОДУ 1
          data: newData
         */
        data: data.filter(item => item.id !== id)
       }
    })
  }

  addListItem = (name, salary, currency) => {
    const newItem = {
      name,
      salary,
      currency,
      increase: false,
      id: this.id++
    }

    this.setState(({data}) => {
      const newData = [...data, newItem]
      return {
        data: newData
      }
    })
  }

  render() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={this.state.data} deleteItem={this.deleteListItem}  /* сюдаем передаем моковые данные и функции по пользователям*/ />
        <EmployeesAddForm addItem={this.addListItem}/>
    </div>
  );
  }
}

export default App;
