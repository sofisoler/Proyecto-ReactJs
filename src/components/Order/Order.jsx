import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Order.css'
import { useCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2'

const Order = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    validarEmail: ''
  })

  const { cartList, precioTotal } = useCartContext()

  const generarOrden = (evt) => {

    evt.preventDefault()

    const order = {}

    order.buyer = dataForm
    order.items = cartList.map(({id, name, price}) => ({name, price, id}))
    order.total = precioTotal()

    if (!dataForm.name || !dataForm.phone || !dataForm.email || dataForm.email !== dataForm.validarEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: '¡Verifique que los campos hayan sido completados correctamente!',
        confirmButtonColor: '#d2691e',
      })
    }
    
    else {
      const db = getFirestore()
      const queyCollection =  collection(db, 'orders')

      addDoc(queyCollection, order)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))

      Swal.fire({
        icon: 'success',
        title: '¡Orden creada con éxito!',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeClick: false
      })
    }
  }

  const hanleOnChange = (evt)=>{
      console.log(evt.target.name)
      console.log(evt.target.value)
      setDataForm({
          ...dataForm,
          [evt.target.name]: evt.target.value
      })
  }

  return (
    <Form onSubmit={generarOrden} className='order-form m-5'>

      <h1 className='order-form__title mb-3'>¡Completa tu compra!</h1>

      <Form.Group className="mb-3">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" name='name' value={dataForm.name} onChange={hanleOnChange} placeholder="Ingresá tu nombre" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control type="text" name='phone' value={dataForm.phone} onChange={hanleOnChange} placeholder="Ingresá tu teléfono" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name='email' value={dataForm.email} onChange={hanleOnChange} placeholder="Ingresá tu email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Validar email:</Form.Label>
        <Form.Control type="email" name='validarEmail' value={dataForm.validarEmail} onChange={hanleOnChange} placeholder="Reingresá tu email" />
      </Form.Group>

      <Button variant="outline-success" type='submit'>
        Finalizar compra
      </Button>
    </Form>
  )
}

export default Order