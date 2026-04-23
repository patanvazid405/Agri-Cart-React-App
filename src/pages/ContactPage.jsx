import { useEffect } from 'react'

const FORM_NAME = 'WebToLeads1216240000000873001'
const FORM_ID = 'webform1216240000000873001'

function validateZohoEmail(form) {
  const emailFields = form.querySelectorAll('[ftype=email]')

  for (let i = 0; i < emailFields.length; i += 1) {
    const emailField = emailFields[i]
    const emailValue = emailField.value.trim()

    if (emailValue.length !== 0) {
      const atPosition = emailValue.indexOf('@')
      const dotPosition = emailValue.lastIndexOf('.')

      if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= emailValue.length) {
        alert('Please enter a valid email address.')
        emailField.focus()
        return false
      }
    }
  }

  return true
}

function checkZohoMandatoryFields(form) {
  const mandatoryFields = ['Company', 'Last Name', 'Phone']
  const fieldLabels = ['Company', 'Last Name', 'Phone']

  for (let i = 0; i < mandatoryFields.length; i += 1) {
    const field = form.elements[mandatoryFields[i]]

    if (field) {
      if (field.value.trim().length === 0) {
        if (field.type === 'file') {
          alert('Please select a file to upload.')
          field.focus()
          return false
        }

        alert(`${fieldLabels[i]} cannot be empty.`)
        field.focus()
        return false
      }

      if (field.nodeName === 'SELECT' && field.options[field.selectedIndex].value === '-None-') {
        alert(`${fieldLabels[i]} cannot be none.`)
        field.focus()
        return false
      }

      if (field.type === 'checkbox' && field.checked === false) {
        alert(`Please accept ${fieldLabels[i]}`)
        field.focus()
        return false
      }
    }
  }

  return validateZohoEmail(form)
}

function ContactPage() {
  useEffect(() => {
    if (document.getElementById('wf_anal')) {
      return undefined
    }

    const analyticsScript = document.createElement('script')
    analyticsScript.id = 'wf_anal'
    analyticsScript.src =
      'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=8611ffd0c9bb00652c4c46c83c443accf903a5dd6fad41a2bbdaf69b80897e730f9b463d6b2caaaf34cf98994b02fa10gidb88c88818ecd8bb780c1a9b5fde47165de674c201ff394bdc8db213582a9f24cgid0f5e00b91c6430862bdb10a23120102ea04b0cc24dbc1ee87d73adf4cd611120gid930bff54619e5565a1044b5a9fd04cc441122fbf57b0ce5ed27002253b95c724&tw=3bf58c54ba3d40b11c6f2ea72c3a8b554fdfd4f20483e0bd76dc465dd5ab355d'
    analyticsScript.async = true
    document.body.appendChild(analyticsScript)

    return () => {
      analyticsScript.remove()
    }
  }, [])

  const handleSubmit = (event) => {
    const form = event.currentTarget
    document.charset = 'UTF-8'

    if (!checkZohoMandatoryFields(form)) {
      event.preventDefault()
      return
    }

    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('service') && urlParams.get('service') === 'smarturl' && !form.elements.service) {
      const smartUrlField = document.createElement('input')
      smartUrlField.setAttribute('type', 'hidden')
      smartUrlField.setAttribute('value', urlParams.get('service'))
      smartUrlField.setAttribute('name', 'service')
      form.appendChild(smartUrlField)
    }

    form.querySelector('.formsubmit').setAttribute('disabled', true)
  }

  return (
    <section className="container section contact-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Talk to AgriCart</h1>
          <p className="section-copy">Share your requirement and our team will get back to you with pricing, availability, and delivery support.</p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-showcase">
          <span className="contact-kicker">Wholesale and Retail Enquiries</span>
          <h2>Fresh produce sourcing made simple</h2>
          <p>
            Whether you need daily vegetables, bulk grains, or store-ready essentials, send us your
            requirement and we will help with availability, pricing, and delivery.
          </p>

          <div className="contact-highlights">
            <div className="contact-highlight-card">
              <strong>Fast response</strong>
              <span>We review lead requests quickly and reply with the next steps.</span>
            </div>
            <div className="contact-highlight-card">
              <strong>Fresh stock</strong>
              <span>Vegetables, fruits, dairy, rice, grains, and daily essentials.</span>
            </div>
            <div className="contact-highlight-card">
              <strong>Local support</strong>
              <span>Nellore-based assistance for delivery coordination and repeat orders.</span>
            </div>
          </div>

          <div className="contact-details-card">
            <div>
              <small>Call us</small>
              <strong>+91 0025896301</strong>
            </div>
            <div>
              <small>Email</small>
              <strong>agricart@gmail.com</strong>
            </div>
            <div>
              <small>Location</small>
              <strong>Kisan Nagar, Nellore, Andhra Pradesh 524002</strong>
            </div>
          </div>
        </div>

        <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
          <form
            id={FORM_ID}
            action="https://crm.zoho.in/crm/WebToLeadForm"
            name={FORM_NAME}
            method="POST"
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
          >
            <input
              type="text"
              className="zoho-hidden-field"
              name="xnQsjsdp"
              value="a5c0c5c19920b3f0b02cb020722b5338ca0d91b31d98b99ef9c42faa7b021cad"
              readOnly
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" readOnly />
            <input
              type="text"
              className="zoho-hidden-field"
              name="xmIwtLD"
              value="9c15650ad23343fe6299de0d469b1b4b197c9c22a04bb322d80a74504084315bba10728b549c9a5a2794c6ad123986ab"
              readOnly
            />
            <input type="text" className="zoho-hidden-field" name="actionType" value="TGVhZHM=" readOnly />
            <input type="text" className="zoho-hidden-field" name="returnURL" value="null" readOnly />
            {/* Do not remove this code. */}

            <div className="zcwf_title">Contact Us</div>
            <p className="zoho-form-intro">Fill in your details and our team will contact you soon.</p>

            <div className="zcwf_row">
              <div className="zcwf_col_lab">
                <label htmlFor="First_Name">First Name</label>
              </div>
              <div className="zcwf_col_fld">
                <input type="text" id="First_Name" aria-required="false" aria-label="First Name" name="First Name" maxLength="40" />
              </div>
            </div>

            <div className="zcwf_row">
              <div className="zcwf_col_lab">
                <label htmlFor="Last_Name">
                  Last Name <span>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" maxLength="80" />
              </div>
            </div>

            {/* <div className="zcwf_row">
              <div className="zcwf_col_lab">
                <label htmlFor="Company">
                  Company <span>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input type="text" id="Company" aria-required="true" aria-label="Company" name="Company" maxLength="200" />
              </div>
            </div> */}

            <div className="zcwf_row">
              <div className="zcwf_col_lab">
                <label htmlFor="Phone">
                  Phone <span>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input type="text" id="Phone" aria-required="true" aria-label="Phone" name="Phone" maxLength="30" />
              </div>
            </div>

            <div className="zcwf_row">
              <div className="zcwf_col_lab">
                <label htmlFor="Email">Email</label>
              </div>
              <div className="zcwf_col_fld">
                <input
                  type="text"
                  ftype="email"
                  autoComplete="off"
                  id="Email"
                  aria-required="false"
                  aria-label="Email"
                  name="Email"
                  crmlabel=""
                  maxLength="100"
                />
              </div>
            </div>

            <div className="zcwf_row">
              <div className="zcwf_col_lab">
                <label htmlFor="Description">Description</label>
              </div>
              <div className="zcwf_col_fld">
                <textarea id="Description" aria-required="false" aria-label="Description" name="Description" rows="5" />
              </div>
            </div>

            <input type="text" className="zoho-hidden-field" name="aG9uZXlwb3Q" value="" readOnly />

            <div className="zcwf_row zcwf_actions">
              <div className="zcwf_col_fld">
                <input
                  type="submit"
                  id="formsubmit"
                  role="button"
                  className="formsubmit zcwf_button"
                  value="Submit"
                  aria-label="Submit"
                  title="Submit"
                />
                <input type="reset" className="zcwf_button" role="button" name="reset" value="Reset" aria-label="Reset" title="Reset" />
              </div>
            </div>
            {/* Do not remove this --- Analytics Tracking code starts */}
            {/* Zoho analytics script is loaded from this component so React can manage it safely. */}
            {/* Do not remove this --- Analytics Tracking code ends. */}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
