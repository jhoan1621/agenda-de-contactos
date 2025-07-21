import { useState } from 'react'
import { Contact } from '../types/Contact.tsx'

interface ContactFormProps {
  onSubmit: (contact: Omit<Contact, 'id'>) => void
  editingContact: Contact | null
  onUpdate: (contact: Contact) => void
  onCancelEdit: () => void
}

function ContactForm({ onSubmit, editingContact, onUpdate, onCancelEdit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if ( phone.length<9 ||phone.length>9) {
      alert('Por favor ingrese un número valido')
      return
    }

    if (!name.trim() || !phone.trim()) {
      alert('Por favor complete todos los campos')
      return
    }
    

    onSubmit({ name: name.trim(), phone: phone.trim() })
    setName('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el nombre"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="number"
          min={0}
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ingrese el teléfono"
        />
      </div>
      
      <div className="form-actions">
        <button type="submit">
          Agregar
        </button>
        {editingContact && (
          <button type="button" onClick={onCancelEdit}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default ContactForm