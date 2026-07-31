import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { contact, site } from '../../data/content'
import Reveal from '../Reveal'

const initial = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Ingresá tu nombre'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Email inválido'
    }
    if (!form.eventType) next.eventType = 'Elegí un tipo'
    if (!form.message.trim()) next.message = 'Escribí un mensaje'
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSent(true)
    setForm(initial)
  }

  const field =
    'w-full border-0 border-b border-border bg-transparent px-0 py-3 font-sans text-foreground outline-none transition focus:border-olive'

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">{contact.subtitle}</p>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-olive">Ubicación</dt>
              <dd className="mt-1">
                {site.address}
                <br />
                <span className="text-muted-foreground">{site.addressNote}</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-olive">WhatsApp</dt>
              <dd className="mt-1">
                <a href={`https://wa.me/${site.phoneHref}`} className="hover:text-olive">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-olive">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-olive">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={`https://wa.me/${site.phoneHref}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline mt-10 inline-flex items-center gap-2"
          >
            <FaWhatsapp />
            Escribir por WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          {sent ? (
            <div className="flex min-h-80 flex-col justify-center border border-border bg-secondary/40 p-10">
              <p className="font-display text-4xl">{contact.successMessage}</p>
              <button
                type="button"
                className="btn-outline mt-8 w-fit"
                onClick={() => setSent(false)}
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-7 border border-border bg-background p-8 md:p-10"
            >
              <Field label="Nombre" name="name" value={form.name} onChange={onChange} error={errors.name} className={field} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} className={field} />
              <Field label="Teléfono" name="phone" type="tel" value={form.phone} onChange={onChange} className={field} />
              <div>
                <label htmlFor="eventType" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Tipo de evento
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={form.eventType}
                  onChange={onChange}
                  className={`${field} mt-1`}
                >
                  <option value="">Elegí una opción</option>
                  {contact.eventTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="mt-1 text-sm text-red-700">{errors.eventType}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={onChange}
                  className={`${field} mt-1 resize-y`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-700">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar consulta
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Formulario de demostración — sin envío real.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, className }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`${className} mt-1`}
      />
      {error && <p className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  )
}
