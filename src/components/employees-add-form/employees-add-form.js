import { Component } from "react/cjs/react.production.min";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          name: '',
          salary: '',
          currency: '',
        }
     }

     addItem = this.props.addItem

     onInputChange = (evt) => {
       this.setState({
          [evt.target.name]: evt.target.value  // без квадратных скобок не сработает
       })
    }

    onSubmit = (evt) => {
      evt.preventDefault()
      this.addItem(this.state.name, this.state.salary, this.state.currency)
      this.setState({
        name: '',
        salary: '',
        currency: '',
      })
    }

    render() {
      const {name, salary, currency} = this.state;

      return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={this.onSubmit}
                className="add-form d-flex">
                <input onChange={this.onInputChange} type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={name} />  
                <input onChange={this.onInputChange} type="number"
                    className="form-control new-post-label"
                    placeholder="З/П?" 
                    name="salary"
                    value={salary}/> {/*это нужно, чтобы все работало, в значение value передать state, называется контрлируемый элемент */}
                <input onChange={this.onInputChange} type="text"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" 
                    name="currency"
                    value={currency}/>
                
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
  }
}

export default EmployeesAddForm;