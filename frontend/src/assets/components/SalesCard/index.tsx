import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './style.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-992">iD</th>
                            <th className="show-576">Data</th>
                            <th>Vendedor</th>
                            <th className="show-992">Visitas</th>
                            <th className="show-992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="show-992">#"iD"</td>
                            <td className="show-576">14/07/2022</td>
                            <td>Ghizz1</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show-992">#"iD"</td>
                            <td className="show-576">14/07/2022</td>
                            <td>Ghizz1</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="show-992">#"iD"</td>
                            <td className="show-576">14/07/2022</td>
                            <td>Ghizz1</td>
                            <td className="show-992">15</td>
                            <td className="show-992">11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SalesCard
