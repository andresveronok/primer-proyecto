import {useContext} from 'react';
import {Store} from '../../store/index';

const Carro = () => {
    const [data,setData] = useContext(Store);

    return (
        <>
            <h1>Estás en el cart</h1>
            {
                data.items.map(item => <h2>{item.titulo}</h2>)
            }
        </>
    )
}
export default Carro;