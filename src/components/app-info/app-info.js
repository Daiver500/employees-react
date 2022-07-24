import { Component } from "react/cjs/react.production.min";

class AppInfo extends Component {
  
    render() {
    const {employeesQuantity, increasedEmployees} = this.props
      return (
         <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesQuantity}</h2>
            <h2>Премию получат: {increasedEmployees}</h2>
        </div>
      )
    }
}

export default AppInfo;