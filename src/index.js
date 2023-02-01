import React from 'react'
import  ReactDOM  from 'react-dom'


class App extends React.Component {

    frutas = [
        'Pera',
        'Sandia', 
        'Fresa', 
        'Kiwi',
        'Mango', 
        'Manzana'
    ]

    render() {
        return (
            <div>
                <ul>
                    {this.frutas.map((fruta) => (
                        // retorno directo 
                        <li>{fruta}</li>
                    ))}

                    {/* /* retorno por defecto
                    {this.frutas.map((fruta) => {
                        return (<li>{fruta}</li>)
                    })}
                    */ }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));  