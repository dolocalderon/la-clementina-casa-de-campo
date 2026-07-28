import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { contact, site } from '../data/content'

const initial = {
  name: '',
  email: '',
  eventType: '',
  message: '',
}

export default function Contact() {
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

  return (
    <section id="contacto" className="section-pad bg-olive-100">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">{contact.title}</h2>
          <p className="mt-4 max-w-md font-sans text-muted">{contact.subtitle}</p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="font-sans text-xs tracking-[0.18em] text-olive-600 uppercase">
                Ubicación
              </dt>
              <dd className="mt-1 font-sans text-ink">
                {site.address}
                <br />
                {site.location}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-xs tracking-[0.18em] text-olive-600 uppercase">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/${site.phoneHref}`}
                  className="font-sans text-ink transition hover:text-olive-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-xs tracking-[0.18em] text-olive-600 uppercase">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="font-sans text-ink transition hover:text-olive-700"
                >
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-olive-900 text-olive-900 transition hover:bg-olive-900 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-olive-900 text-olive-900 transition hover:bg-olive-900 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <span className="font-sans text-sm text-muted">{site.social.handle}</span>
          </div>
        </div>

        <div className="rounded-2xl bg-olive-50 p-6 md:p-8">
          {sent ? (
            <div className="flex min-h-72 flex-col items-center justify-center text-center">
              <FaWhatsapp className="mb-4 text-olive-600" size={36} />
              <p className="font-display text-3xl text-ink">{contact.successMessage}</p>
              <button
                type="button"
                className="btn-ghost mt-8"
                onClick={() => setSent(false)}
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <Field
                label="Nombre completo"
                name="name"
                value={form.name}
                onChange={onChange}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                error={errors.email}
                autoComplete="email"
              />
              <div>
                <label
                  htmlFor="eventType"
                  className="mb-1.5 block font-sans text-xs tracking-[0.14em] text-olive-700 uppercase"
                >
                  Tipo de evento
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={form.eventType}
                  onChange={onChange}
                  className="w-full rounded-xl border-0 bg-olive-100 px-4 py-3.5 font-sans text-ink outline-none ring-olive-600 focus:ring-2"
                >
                  <option value="">Seleccionar…</option>
                  {contact.eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <p className="mt-1.5 text-sm text-red-700">{errors.eventType}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-sans text-xs tracking-[0.14em] text-olive-700 uppercase"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="w-full resize-y rounded-xl border-0 bg-olive-100 px-4 py-3.5 font-sans text-ink outline-none ring-olive-600 focus:ring-2"
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-700">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar consulta
              </button>
              <p className="text-center font-sans text-xs text-muted">
                Formulario de demostración — sin envío real por ahora.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, autoComplete }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-sans text-xs tracking-[0.14em] text-olive-700 uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full rounded-xl border-0 bg-olive-100 px-4 py-3.5 font-sans text-ink outline-none ring-olive-600 focus:ring-2"
      />
      {error && <p className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  )
}
