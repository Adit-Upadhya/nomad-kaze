import React, { useState, useCallback } from 'react'
import type { EnquiryForm, FormField } from '../types'
import {
  EXPEDITION_OPTIONS,
  RIDER_OPTIONS,
  EXPERIENCE_OPTIONS,
} from '../data'
import SectionHeader from './SectionHeader'
import styles from './BookingForm.module.css'

const INITIAL_FORM: EnquiryForm = {
  name: '',
  email: '',
  expedition: '',
  riders: '1 Rider',
  experience: 'Intermediate (1–3 years)',
  message: '',
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const BookingForm: React.FC = () => {
  const [form, setForm] = useState<EnquiryForm>(INITIAL_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({})

  const validate = (): boolean => {
    const newErrors: Partial<Record<FormField, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email'
    if (!form.expedition) newErrors.expedition = 'Please choose an expedition'
    if (!form.message.trim()) newErrors.message = 'Tell us about your trip'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = useCallback(
    (field: FormField) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      },
    []
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    // Simulate async submission — replace with real API call
    await new Promise<void>((resolve) => setTimeout(resolve, 1200))
    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <section id="book" className={styles.section}>
      <div className={styles.inner}>
        {/* Left col */}
        <div className={styles.info}>
          <SectionHeader
            tag="Book an Expedition"
            title={`Plan Your\nRide`}
            body="Tell us when you're coming and what you're dreaming of. We'll build the right route around you."
          />
          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>WhatsApp: +977 98XXXXXXXX</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <span>hello@nomadkaze.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Lakeside, Pokhara, Gandaki Province</span>
            </div>
          </div>
        </div>

        {/* Right col — form */}
        <div className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Enquiry Sent!</h3>
              <p className={styles.successBody}>
                We'll get back to you within 24 hours. Time to start dreaming
                about those switchbacks.
              </p>
              <button
                className={styles.resetBtn}
                onClick={() => setStatus('idle')}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Row 1 */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange('name')}
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange('email')}
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="expedition">Expedition</label>
                  <select
                    id="expedition"
                    className={`${styles.select} ${errors.expedition ? styles.inputError : ''}`}
                    value={form.expedition}
                    onChange={handleChange('expedition')}
                  >
                    <option value="">Choose a route</option>
                    {EXPEDITION_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.expedition && (
                    <span className={styles.error}>{errors.expedition}</span>
                  )}
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="riders">Riders</label>
                  <select
                    id="riders"
                    className={styles.select}
                    value={form.riders}
                    onChange={handleChange('riders')}
                  >
                    {RIDER_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="experience">
                  Your Riding Experience
                </label>
                <select
                  id="experience"
                  className={styles.select}
                  value={form.experience}
                  onChange={handleChange('experience')}
                >
                  {EXPERIENCE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Preferred Dates &amp; Message
                </label>
                <textarea
                  id="message"
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  rows={4}
                  placeholder="When are you coming? Any questions?"
                  value={form.message}
                  onChange={handleChange('message')}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>

              <div className={styles.submitRow}>
                <button
                  className={styles.submitBtn}
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Enquiry →'}
                </button>
                <p className={styles.note}>
                  We reply within 24 hours · No payment required to enquire
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingForm
