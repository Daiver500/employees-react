import { Component } from "react/cjs/react.production.min";
// Классовый компонент

class EmployeesListItem extends Component {
    /*constructor(props) {
      super(props)
      this.state = {
        increase: false,
        like: false    
      }
    }

    onCookieClick = () => {
      this.setState({
        increase: !this.state.increase
      })
    }

    onEmployeeNameClick = () => {
      this.setState({
        like: !this.state.like
      })
    }*/ // необходимо для работы на локальном уровне, заменили все на пропсы с верхнего уровня (changeIncrease, changeLike)

    render() {
        const {name, salary, currency, increase, like, deleteItem, changeIncrease, changeLike} = this.props
        // const {increase, like} = this.state 
        // теперь это props, которые приходят сверху
        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNames = classNames + ' increase';
        }
        if (like) {
            classNames = classNames + ' like';
        }
        
        return (
        <li className={classNames}>
        <span className="list-group-item-label" 
        // onClick={this.onEmployeeNameClick}
        // заменили на метод ниже для отслеживания изменений на верхнем уровне
        onClick={changeLike}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + currency}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm" 
                // onClick={this.onCookieClick} 
                // заменили на метод ниже для отслеживания изменений на верхнем уровне
                onClick={changeIncrease}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    className="btn-trash btn-sm" onClick={deleteItem}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
        )
    }
}

// Фнукциональный компонент

/*const EmployeesListItem = ({name, salary, currency, increase}) => {
     
    let classNames = increase ? "list-group-item d-flex justify-content-between increase" : "list-group-item d-flex justify-content-between";

    // альтернативный вариант
    //  let classNames = "list-group-item d-flex justify-content-between";
    //  if (increase) {
    //   classNames = classNames + " increase";
    //}

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + currency}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}*/

export default EmployeesListItem;