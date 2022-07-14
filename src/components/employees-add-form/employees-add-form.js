import { Component } from "react/cjs/react.production.min";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          salary: '',
        }
     }

     onInputChange = (evt) => {
       this.setState({
          [evt.target.name]: evt.target.value  // без квадратных скобок не сработает
       })
    }

    render() {
      const {name, salary} = this.state;

      return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input onChange={this.onInputChange} type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={name} />  
                <input onChange={this.onInputChange} type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    name="salary"
                    value={salary}/> {/*это нужно, чтобы все работало, в значение value передать state, называется контрлируемый элемент */}
                
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
  }
}

export default EmployeesAddForm;