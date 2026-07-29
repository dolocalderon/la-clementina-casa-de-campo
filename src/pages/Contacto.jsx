import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { contact, site } from '../data/content'

const initial = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  date: '',
  guests: '',
  message: '',
}

export default function Contacto() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Ingresá tu nombre'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Ingresá un email válido'
    }
    if (!form.eventType) next.eventType = 'Seleccioná un tipo de evento'
    if (!form.message.trim()) next.message = 'Contanos un poco más'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    setSent(true)
    setForm(initial)
  }

  const fieldClass =
    'w-full border border-border bg-background px-4 py-3.5 font-sans text-foreground outline-none ring-olive focus:ring-1'

  return (
    <>
      <section className="page-hero">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            {contact.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl">{contact.formTitle}</h2>
            {sent ? (
              <div className="mt-10 flex min-h-72 flex-col items-start justify-center">
                <p className="font-display text-3xl text-foreground">
                  {contact.successMessage}
                </p>
                <button
                  type="button"
                  className="btn-outline mt-8"
                  onClick={() => setSent(false)}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                <Field
                  label="Nombre y apellido"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  error={errors.name}
                  className={fieldClass}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  error={errors.email}
                  className={fieldClass}
                />
                <Field
                  label="Teléfono (opcional)"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className={fieldClass}
                />
                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Tipo de evento
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={form.eventType}
                    onChange={onChange}
                    className={fieldClass}
                  >
                    <option value="">Elegí una opción</option>
                    {contact.eventTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="mt-1.5 text-sm text-red-700">{errors.eventType}</p>
                  )}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Fecha estimada"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={onChange}
                    className={fieldClass}
                  />
                  <Field
                    label="Cantidad de invitados"
                    name="guests"
                    type="number"
                    value={form.guests}
                    onChange={onChange}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    className={fieldClass}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-700">{errors.message}</p>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Enviar consulta
                </button>
                <p className="text-xs text-muted-foreground">
                  Formulario de demostración — sin envío real por ahora.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-3xl">Datos de contacto</h2>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Dónde estamos
                  </dt>
                  <dd className="mt-1 text-foreground">
                    {site.address} · {site.addressNote}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Teléfono / WhatsApp
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`https://wa.me/${site.phoneHref}`}
                      className="hover:text-olive"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="hover:text-olive">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Visitas al campo
                  </dt>
                  <dd className="mt-1">{site.visits}</dd>
                </div>
              </dl>
              <a
                href={`https://wa.me/${site.phoneHref}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline mt-8 inline-flex items-center gap-2"
              >
                <FaWhatsapp />
                Escribir por WhatsApp
              </a>
            </div>

            <div>
              <h2 className="font-display text-3xl">{contact.faq.title}</h2>
              <ul className="mt-8 space-y-6">
                {contact.faq.items.map((item) => (
                  <li key={item.q} className="border-t border-border pt-5">
                    <h3 className="font-sans text-sm font-medium">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, className }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
      {error && <p className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  )
}
